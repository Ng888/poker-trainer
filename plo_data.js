// PLO MTT 12题题库数据
const PLO_DATA = {
    categories: [
        { id: "preflop", name: "起手牌选择", count: 2 },
        { id: "postflop", name: "翻牌后决策", count: 3 },
        { id: "draw", name: "Draw计算", count: 2 },
        { id: "short", name: "短筹码策略", count: 2 },
        { id: "icm", name: "ICM/FT", count: 2 },
        { id: "river", name: "River决策", count: 1 }
    ],
    scenarios: [
        {
            id: 1,
            category: "起手牌选择",
            stage: "早期",
            effective_bb: 100,
            position: "UTG",
            hand: "A♠ A♥ 2♦ 3♣",
            hand_desc: "彩虹AA小牌",
            action_before: "None",
            question: "你应该如何行动?",
            options: [
                { action: "Open 3x", correct: false, explanation: "AA小牌在UTG太弱" },
                { action: "Fold", correct: true, explanation: "AA小牌价值被高估，应该弃掉" },
                { action: "Limp", correct: false, explanation: "Limping很弱" }
            ],
            key_concept: "PLO起手牌协调性 > 高牌"
        },
        {
            id: 2,
            category: "起手牌选择",
            stage: "中期",
            effective_bb: 80,
            position: "BTN",
            hand: "9♠ T♠ J♦ Q♦",
            hand_desc: "双同花四连接",
            action_before: "UTG limp, MP limp",
            question: "你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "9TJQ是投机牌顶级" },
                { action: "Limp", correct: false, explanation: "应该隔离" },
                { action: "Raise 5-6x", correct: true, explanation: "9TJQ双同花应该raise隔离" }
            ],
            key_concept: "投机牌有好赔率时应该隔离"
        },
        {
            id: 3,
            category: "翻牌后决策",
            stage: "中期",
            effective_bb: 100,
            position: "CO",
            hand: "J♠ T♠ 8♥ 7♥",
            hand_desc: "双同花四连接",
            action_before: "3人底池，翻牌前3bet pot",
            flop: "9♠ Q♠ 2♦",
            question: "UTG check, MP check，你应该如何行动?",
            options: [
                { action: "Check", correct: false, explanation: "有nuts应该build pot" },
                { action: "Bet 10-12BB", correct: true, explanation: "有nuts优势应该bet pot" },
                { action: "Allin", correct: false, explanation: "过度commit" }
            ],
            key_concept: "有nuts优势时应build pot"
        },
        {
            id: 4,
            category: "翻牌后决策",
            stage: "中期",
            effective_bb: 100,
            position: "BB (OOP)",
            hand: "A♠ A♥ K♦ Q♦",
            hand_desc: "AAKQ双同花",
            action_before: "单挑，你3bet pre",
            flop: "A♣ J♠ T♠",
            question: "你应该如何行动?",
            options: [
                { action: "Bet 2/3 pot", correct: false, explanation: "Wet board小心" },
                { action: "Check", correct: true, explanation: "Wet board应该控制底池" },
                { action: "Allin", correct: false, explanation: "过度commit" }
            ],
            key_concept: "非nuts牌在wet board控制底池"
        },
        {
            id: 5,
            category: "Draw计算",
            stage: "中期",
            effective_bb: 80,
            position: "CO",
            hand: "8♠ 9♠ T♦ J♦",
            hand_desc: "双同花四连接",
            action_before: "4bet pot，单挑",
            flop: "7♠ Q♣ 2♥",
            question: "UTG bet 15BB，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "你有20-out wrap！" },
                { action: "Call", correct: true, explanation: "20-out wrap有42.5% equity，大幅领先！" },
                { action: "Raise", correct: false, explanation: "Call保留implied odds" }
            ],
            key_concept: "20-out wrap equity超过40%"
        },
        {
            id: 6,
            category: "Draw计算",
            stage: "中期",
            effective_bb: 60,
            position: "BB",
            hand: "9♠ T♠ J♥ Q♥",
            hand_desc: "双同花四连接",
            action_before: "3人底池",
            flop: "8♠ K♠ 2♥",
            question: "UTG bet 10BB, MP call，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "Combo draw很强" },
                { action: "Call", correct: true, explanation: "Combo draw 54% equity" },
                { action: "Raise", correct: false, explanation: "3人底池call更安全" }
            ],
            key_concept: "Combo draws in PLO are powerful"
        },
        {
            id: 7,
            category: "短筹码策略",
            stage: "后期",
            effective_bb: 15,
            position: "CO",
            hand: "A♠ A♥ T♠ 9♦",
            hand_desc: "AAT9单同花",
            action_before: "UTG open, MP call",
            question: "15bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AA+连接是强牌" },
                { action: "Call", correct: false, explanation: "浪费AA价值" },
                { action: "Allin", correct: true, explanation: "15bb短筹码AA+连接强allin牌" }
            ],
            key_concept: "PLO短筹码AA+连接是强allin牌"
        },
        {
            id: 8,
            category: "短筹码策略",
            stage: "后期",
            effective_bb: 12,
            position: "MP",
            hand: "7♠ 7♥ 6♠ 6♦",
            hand_desc: "双小对",
            action_before: "UTG allin 10bb",
            question: "12bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: true, explanation: "双小对vs UTG allin只有25% equity" },
                { action: "Call", correct: false, explanation: "PLO短筹码小对子价值低" },
                { action: "Allin", correct: false, explanation: "双小对不是allin牌" }
            ],
            key_concept: "PLO短筹码双小对价值极低"
        },
        {
            id: 9,
            category: "ICM/FT",
            stage: "泡沫期",
            effective_bb: 25,
            position: "BTN",
            hand: "A♠ K♠ Q♦ J♦",
            hand_desc: "AKQJ双同花",
            action_before: "UTG (8bb) allin",
            question: "剩余45人，前40人钱圈，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AKQJ双同花是投机牌顶级" },
                { action: "Call", correct: true, explanation: "48% equity vs需要40%，+EV" },
                { action: "Allin", correct: false, explanation: "不需要" }
            ],
            key_concept: "泡沫期好牌仍要play"
        },
        {
            id: 10,
            category: "ICM/FT",
            stage: "Final Table",
            effective_bb: 80,
            position: "CO (CL)",
            hand: "K♠ K♥ Q♠ Q♦",
            hand_desc: "KKQQ双高对",
            action_before: "你open, SB allin 35bb",
            question: "5人Final Table，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "KKQQ是顶级牌" },
                { action: "Call", correct: true, explanation: "52% equity vs需要45%，+EV" },
                { action: "Allin", correct: false, explanation: "不需要" }
            ],
            key_concept: "FT CL应该施加压力"
        },
        {
            id: 11,
            category: "翻牌后决策",
            stage: "中期",
            effective_bb: 40,
            position: "BB (OOP)",
            hand: "A♠ K♠ Q♦ J♦",
            hand_desc: "AKQJ双同花",
            action_before: "单挑，你3bet pre",
            flop: "7♣ 7♦ 2♠",
            question: "你应该如何行动?",
            options: [
                { action: "Check", correct: false, explanation: "Dry board应该cbet" },
                { action: "Bet 4-5BB", correct: true, explanation: "Dry paired board上cbet" },
                { action: "Check-raise", correct: false, explanation: "没有牌力不应该check-raise" }
            ],
            key_concept: "Dry paired board上cbet"
        },
        {
            id: 12,
            category: "River决策",
            stage: "后期",
            effective_bb: 50,
            position: "BB (OOP)",
            hand: "A♠ A♥ K♦ Q♦",
            hand_desc: "AAKQ双同花",
            action_before: "4条街build的大pot",
            board: "A♣ J♠ T♦ 5♥ 3♠",
            question: "你check, BTN bet 20BB，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AAA很强" },
                { action: "Call", correct: true, explanation: "AAA 3:1赔率call" },
                { action: "Raise", correct: false, explanation: "Call更安全" }
            ],
            key_concept: "River有大set可以call thin value"
        }
    ]
};
