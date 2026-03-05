// 牌谱分析器模块
const HandAnalyzer = {
    // 手牌强度评估
    evaluateHand(hand, position, stack, stage) {
        const cards = this.parseHand(hand);
        if (!cards) return null;
        
        const analysis = {
            handStrength: 0,
            category: '',
            recommendation: '',
            explanation: '',
            gtoAction: '',
            foldEquity: 0,
            callEquity: 0
        };
        
        // 分析手牌类型
        const handType = this.getHandType(cards);
        analysis.category = handType.category;
        analysis.handStrength = handType.strength;
        
        // 根据位置和筹码深度给出建议
        const positionAdvice = this.getPositionAdvice(cards, position, stack, stage, handType);
        analysis.recommendation = positionAdvice.action;
        analysis.explanation = positionAdvice.explanation;
        analysis.gtoAction = positionAdvice.gto;
        
        return analysis;
    },
    
    // 解析手牌
    parseHand(handStr) {
        if (!handStr) return null;
        
        // 支持格式: "AKs", "A K", "A♠K♠", "AsKs"
        handStr = handStr.trim().toUpperCase();
        
        // 移除花色符号
        const ranks = handStr.replace(/[♠♥♦♣SHDC]/g, '').replace(/\s/g, '');
        
        // 提取等级
        const cards = [];
        for (let char of ranks) {
            if ('23456789TJQKA'.includes(char)) {
                cards.push(char);
            }
        }
        
        // 判断是否同花
        const isSuited = /[♠SH][♠SH]|[♥DH][♥DH]|[♦DC][♦DC]|[♣SC][♣SC]/.test(handStr) || 
                        handStr.toLowerCase().includes('s');
        
        // 判断是否对子
        const isPair = cards.length >= 2 && cards[0] === cards[1];
        
        if (cards.length < 2) return null;
        
        return {
            cards: cards.slice(0, 2),
            isSuited,
            isPair,
            rank1: this.getRankValue(cards[0]),
            rank2: this.getRankValue(cards[1])
        };
    },
    
    // 获取等级数值
    getRankValue(rank) {
        const values = {
            '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
            'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
        };
        return values[rank] || 0;
    },
    
    // 获取手牌类型
    getHandType(cards) {
        const r1 = cards.rank1;
        const r2 = cards.rank2;
        const suited = cards.isSuited;
        
        // 对子
        if (cards.isPair) {
            if (r1 >= 13) return { category: 'Premium Pair', strength: 95 }; // KK, AA
            if (r1 >= 10) return { category: 'Strong Pair', strength: 80 };  // TT, JJ, QQ
            if (r1 >= 7) return { category: 'Medium Pair', strength: 65 };   // 77-99
            return { category: 'Small Pair', strength: 50 };                  // 22-66
        }
        
        // 同花大高牌
        if (suited) {
            if (r1 === 14 && r2 >= 10) return { category: 'Premium Suited', strength: 90 }; // AKs, AQs, AJs
            if (r1 === 14) return { category: 'Suited Ace', strength: 70 };                  // ATs-A2s
            if (r1 >= 12 && r2 >= 10) return { category: 'Strong Suited', strength: 75 };    // KQs, KJs, QJs
            if (r1 - r2 === 1) return { category: 'Suited Connector', strength: 60 };        // JTs, T9s
        }
        
        // 杂色
        if (r1 === 14 && r2 >= 10) return { category: 'Premium Offsuit', strength: 85 }; // AKo, AQo
        if (r1 === 14) return { category: 'Strong Ace', strength: 65 };                   // AJo-ATo
        if (r1 >= 12 && r2 >= 10) return { category: 'Strong Offsuit', strength: 60 };    // KQo, KJo
        
        return { category: 'Marginal', strength: 40 };
    },
    
    // 根据位置给出建议
    getPositionAdvice(cards, position, stack, stage, handType) {
        const positions = ['UTG', 'UTG+1', 'MP', 'HJ', 'CO', 'BTN', 'SB', 'BB'];
        const posIndex = positions.indexOf(position);
        const isShortStack = stack <= 20;
        const isDeepStack = stack >= 80;
        
        let action, explanation, gto;
        
        // 超强牌 (AA, KK, AKs)
        if (handType.strength >= 90) {
            if (isShortStack) {
                action = 'Allin';
                gto = 'Allin (Short Stack)';
                explanation = `${cards.cards.join('')}是超强牌，短筹码时直接Allin获取最大价值`;
            } else {
                action = 'Open 2.5-3x';
                gto = 'Open 2.5x';
                explanation = `${cards.cards.join('')}是顶级牌，任何位置都open`;
            }
        }
        // 强牌 (QQ, JJ, TT, AKo, AQs)
        else if (handType.strength >= 75) {
            if (posIndex <= 1) { // UTG/UTG+1
                action = 'Open 2.5x';
                gto = 'Open 2.5x';
                explanation = '强牌在前位可以open';
            } else {
                action = isShortStack ? 'Allin' : 'Open 2.5x';
                gto = isShortStack ? 'Allin' : 'Open 2.5x';
                explanation = isShortStack ? '强牌短筹码可以Allin' : '强牌任何位置都open';
            }
        }
        // 中等牌 (99-77, ATs, KQs)
        else if (handType.strength >= 60) {
            if (posIndex <= 2) { // UTG-MP
                action = cards.isPair ? 'Open 2.5x' : 'Fold';
                gto = cards.isPair ? 'Open (Set Mining)' : 'Fold';
                explanation = cards.isPair ? '小对子可以open set mine' : '前位弃掉边缘牌';
            } else if (posIndex >= 5) { // BTN/SB
                action = isShortStack ? 'Allin' : 'Open 2-2.5x';
                gto = isShortStack ? 'Allin' : 'Open';
                explanation = '后位可以放宽范围';
            } else {
                action = 'Open 2.5x';
                gto = 'Open';
                explanation = '中间位置可以open';
            }
        }
        // 投机牌 (同花连张)
        else if (handType.strength >= 50) {
            if (posIndex >= 5) { // BTN/SB
                action = isShortStack ? 'Allin' : 'Open 2x';
                gto = isShortStack ? 'Allin' : 'Open';
                explanation = '后位有位置优势，可以open投机牌';
            } else if (isDeepStack && posIndex >= 3) {
                action = 'Open 2.5x';
                gto = 'Open';
                explanation = '深筹码时投机牌有implied odds';
            } else {
                action = 'Fold';
                gto = 'Fold';
                explanation = '前位弃掉投机牌';
            }
        }
        // 弱牌
        else {
            action = 'Fold';
            gto = 'Fold';
            explanation = '边缘牌弃掉';
        }
        
        return { action, explanation, gto };
    },
    
    // 分析翻牌后场景
    analyzePostflop(hand, board, position, pot, stack, action) {
        const handCards = this.parseHand(hand);
        const boardCards = this.parseBoard(board);
        
        if (!handCards || !boardCards) return null;
        
        const analysis = {
            handStrength: 0,
            madeHand: '',
            draws: [],
            recommendation: '',
            explanation: ''
        };
        
        // 分析成手牌
        const madeHand = this.evaluateMadeHand(handCards, boardCards);
        analysis.madeHand = madeHand.name;
        analysis.handStrength = madeHand.strength;
        
        // 分析听牌
        const draws = this.findDraws(handCards, boardCards);
        analysis.draws = draws;
        
        // 综合建议
        if (madeHand.strength >= 80) {
            analysis.recommendation = 'Bet for Value';
            analysis.explanation = `${madeHand.name}是强牌，应该价值下注`;
        } else if (draws.length > 0) {
            const totalOuts = draws.reduce((sum, d) => sum + d.outs, 0);
            if (totalOuts >= 12) {
                analysis.recommendation = 'Semi-bluff';
                analysis.explanation = `有${totalOuts}个outs，可以semi-bluff`;
            } else {
                analysis.recommendation = 'Check/Call';
                analysis.explanation = `有${totalOuts}个outs，可以check-call`;
            }
        } else {
            analysis.recommendation = 'Check/Fold';
            analysis.explanation = '没有成牌也没有听牌，check-fold';
        }
        
        return analysis;
    },
    
    // 解析公共牌
    parseBoard(boardStr) {
        if (!boardStr) return [];
        
        boardStr = boardStr.trim().toUpperCase();
        const cards = [];
        
        for (let char of boardStr) {
            if ('23456789TJQKA'.includes(char)) {
                cards.push(char);
            }
        }
        
        return cards.slice(0, 5);
    },
    
    // 评估成手牌
    evaluateMadeHand(hand, board) {
        const allCards = [...hand.cards, ...board];
        
        // 简单评估 (实际应该更复杂)
        if (hand.isPair && board.includes(hand.cards[0])) {
            return { name: 'Three of a Kind (Set)', strength: 85 };
        }
        
        // 检查对子
        const pairs = this.findPairs(allCards);
        if (pairs.length >= 2) {
            return { name: 'Two Pair', strength: 70 };
        }
        if (pairs.length === 1) {
            const pairRank = this.getRankValue(pairs[0]);
            if (pairRank >= 12) {
                return { name: 'Top Pair', strength: 60 };
            }
            return { name: 'Pair', strength: 45 };
        }
        
        // 高牌
        const highCard = Math.max(...hand.cards.map(c => this.getRankValue(c)));
        if (highCard >= 12 && board.some(c => this.getRankValue(c) < highCard)) {
            return { name: 'Overcards', strength: 30 };
        }
        
        return { name: 'High Card', strength: 20 };
    },
    
    // 找对子
    findPairs(cards) {
        const counts = {};
        for (let c of cards) {
            counts[c] = (counts[c] || 0) + 1;
        }
        return Object.keys(counts).filter(c => counts[c] >= 2);
    },
    
    // 找听牌
    findDraws(hand, board) {
        const draws = [];
        const allCards = [...hand.cards, ...board];
        
        // 同花听牌 (简化版)
        // 实际应该检查花色
        
        // 顺子听牌 (简化版)
        const sortedRanks = [...new Set(allCards.map(c => this.getRankValue(c)))].sort((a, b) => a - b);
        
        // Open-ended
        for (let i = 0; i < sortedRanks.length - 3; i++) {
            if (sortedRanks[i+3] - sortedRanks[i] === 3) {
                const has4 = sortedRanks.slice(i, i+4).length === 4;
                if (has4) {
                    draws.push({ type: 'Open-ended Straight', outs: 8 });
                    break;
                }
            }
        }
        
        // Gutshot
        if (draws.length === 0) {
            for (let i = 0; i < sortedRanks.length - 3; i++) {
                if (sortedRanks[i+3] - sortedRanks[i] === 4) {
                    draws.push({ type: 'Gutshot', outs: 4 });
                    break;
                }
            }
        }
        
        return draws;
    },
    
    // 计算Equity (简化版)
    calculateEquity(hand, board, opponents = 1) {
        const handCards = this.parseHand(hand);
        const boardCards = this.parseBoard(board);
        
        if (!handCards) return null;
        
        // 基于手牌强度的简化equity估算
        const handType = this.getHandType(handCards);
        let baseEquity = handType.strength;
        
        // 翻牌后调整
        if (boardCards.length > 0) {
            const madeHand = this.evaluateMadeHand(handCards, boardCards);
            baseEquity = madeHand.strength;
            
            // 听牌加成
            const draws = this.findDraws(handCards, boardCards);
            const totalOuts = draws.reduce((sum, d) => sum + d.outs, 0);
            baseEquity += totalOuts * 2;
        }
        
        // 多人底池调整
        const multiwayAdjustment = Math.max(0, (opponents - 1) * 10);
        baseEquity -= multiwayAdjustment;
        
        return Math.min(95, Math.max(15, baseEquity));
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HandAnalyzer;
}
