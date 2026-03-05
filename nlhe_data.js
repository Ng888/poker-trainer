// NLHE MTT 200题题库数据 (简化版 - 50题)
const NLHE_DATA = {
    categories: [
        { id: "preflop", name: "起手牌选择", count: 15 },
        { id: "cbet", name: "Cbet策略", count: 10 },
        { id: "draw", name: "Draw计算", count: 5 },
        { id: "short", name: "短筹码Push", count: 10 },
        { id: "icm", name: "ICM压力", count: 5 },
        { id: "ft", name: "Final Table", count: 5 }
    ],
    scenarios: [
        // 起手牌选择 (1-15)
        {
            id: 1,
            category: "起手牌选择",
            stage: "早期",
            effective_bb: 100,
            position: "UTG",
            hand: "A♠ J♦",
            hand_desc: "AJ杂色",
            action_before: "None",
            question: "你应该如何行动?",
            options: [
                { action: "Open 2.5x", correct: false, explanation: "AJ在UTG是边缘牌，容易被dominate" },
                { action: "Fold", correct: true, explanation: "UTG位置应该严格，AJo应该弃牌" },
                { action: "Limp", correct: false, explanation: "Limping很弱" }
            ],
            key_concept: "UTG范围应该严格，AJo容易被dominate"
        },
        {
            id: 2,
            category: "起手牌选择",
            stage: "早期",
            effective_bb: 100,
            position: "UTG",
            hand: "K♠ K♥",
            hand_desc: "KK",
            action_before: "None",
            question: "你应该如何行动?",
            options: [
                { action: "Open 2.5x", correct: true, explanation: "KK是强牌，任何位置都open" },
                { action: "Limp", correct: false, explanation: "浪费KK价值" },
                { action: "Allin", correct: false, explanation: "太早commit" }
            ],
            key_concept: "大对子任何位置都open"
        },
        {
            id: 3,
            category: "起手牌选择",
            stage: "早期",
            effective_bb: 100,
            position: "CO",
            hand: "8♠ 9♠",
            hand_desc: "98同花",
            action_before: "前面fold",
            question: "你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "98s是同花连张，有投机价值" },
                { action: "Limp", correct: false, explanation: "有位置应该open" },
                { action: "Open 2.5x", correct: true, explanation: "同花连张在CO可open" }
            ],
            key_concept: "同花连张在位置好时应该open"
        },
        {
            id: 4,
            category: "起手牌选择",
            stage: "早期",
            effective_bb: 100,
            position: "BTN",
            hand: "6♠ 5♠",
            hand_desc: "65同花",
            action_before: "前面fold",
            question: "你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "可以玩" },
                { action: "Open 2x", correct: true, explanation: "小同花连张BTN可open" },
                { action: "Limp", correct: false, explanation: "Open更好" }
            ],
            key_concept: "小同花连张在BTN可open"
        },
        {
            id: 5,
            category: "起手牌选择",
            stage: "早期",
            effective_bb: 100,
            position: "SB",
            hand: "A♠ 4♦",
            hand_desc: "A4杂色",
            action_before: "前面fold",
            question: "你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "可以玩" },
                { action: "Open 3x", correct: true, explanation: "Ax在SB可以open" },
                { action: "Limp", correct: false, explanation: "Open比limp好" }
            ],
            key_concept: "SB位置可以open较宽"
        },
        // 面对3bet (6-10)
        {
            id: 6,
            category: "面对3bet",
            stage: "中期",
            effective_bb: 80,
            position: "BTN",
            hand: "J♠ J♥",
            hand_desc: "JJ",
            action_before: "你open, BB 3bet",
            question: "你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "JJ是强对子" },
                { action: "Call", correct: true, explanation: "JJ call看翻牌" },
                { action: "4bet Allin", correct: false, explanation: "JJ不是4bet allin牌" }
            ],
            key_concept: "JJ面对3bet应该call"
        },
        {
            id: 7,
            category: "面对3bet",
            stage: "中期",
            effective_bb: 80,
            position: "CO",
            hand: "A♠ K♠",
            hand_desc: "AK同花",
            action_before: "你open, UTG 3bet",
            question: "你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AK是强牌" },
                { action: "Call", correct: false, explanation: "AK应该4bet" },
                { action: "4bet", correct: true, explanation: "AK应该4bet或allin" }
            ],
            key_concept: "AK面对3bet应该4bet"
        },
        // Cbet策略 (11-20)
        {
            id: 11,
            category: "Cbet策略",
            stage: "中期",
            effective_bb: 50,
            position: "BB (OOP)",
            hand: "A♠ K♠",
            hand_desc: "AK同花",
            action_before: "单挑，你3bet pre",
            flop: "A♣ 7♦ 2♥",
            question: "你应该如何行动?",
            options: [
                { action: "Check", correct: false, explanation: "Dry board应该cbet" },
                { action: "Bet 2/3 pot", correct: true, explanation: "TPTK dry board value bet" },
                { action: "Allin", correct: false, explanation: "过度commit" }
            ],
            key_concept: "TPTK在dry board上应该cbet value"
        },
        {
            id: 12,
            category: "Cbet策略",
            stage: "中期",
            effective_bb: 50,
            position: "BB (OOP)",
            hand: "Q♠ Q♥",
            hand_desc: "QQ",
            action_before: "单挑，你3bet pre",
            flop: "Q♣ J♦ T♠",
            question: "你应该如何行动?",
            options: [
                { action: "Bet pot", correct: false, explanation: "Wet board控制底池" },
                { action: "Check", correct: true, explanation: "Wet board应该check" },
                { action: "Allin", correct: false, explanation: "过度commit" }
            ],
            key_concept: "非nuts牌在wet board上应该控制底池"
        },
        {
            id: 13,
            category: "Cbet策略",
            stage: "中期",
            effective_bb: 50,
            position: "BB (OOP)",
            hand: "K♠ K♥",
            hand_desc: "KK",
            action_before: "单挑，你3bet pre",
            flop: "K♦ 9♠ 4♣",
            question: "你应该如何行动?",
            options: [
                { action: "Check", correct: false, explanation: "Set应该value bet" },
                { action: "Bet 2/3 pot", correct: true, explanation: "Set value bet" },
                { action: "Allin", correct: false, explanation: "过度commit" }
            ],
            key_concept: "Set应该value bet"
        },
        {
            id: 14,
            category: "Cbet策略",
            stage: "中期",
            effective_bb: 40,
            position: "BB (OOP)",
            hand: "A♠ K♦",
            hand_desc: "AK杂色",
            action_before: "单挑，你3bet pre",
            flop: "K♠ Q♠ J♠",
            question: "你应该如何行动?",
            options: [
                { action: "Check", correct: true, explanation: "Monotone board小心" },
                { action: "Bet 2/3 pot", correct: false, explanation: "太危险" },
                { action: "Allin", correct: false, explanation: "过度commit" }
            ],
            key_concept: "Monotone board应该小心"
        },
        {
            id: 15,
            category: "Cbet策略",
            stage: "中期",
            effective_bb: 40,
            position: "BB (OOP)",
            hand: "7♠ 7♥",
            hand_desc: "77",
            action_before: "单挑，你3bet pre",
            flop: "7♦ 6♠ 5♣",
            question: "你应该如何行动?",
            options: [
                { action: "Check", correct: false, explanation: "Set应该protect" },
                { action: "Bet pot", correct: true, explanation: "Set connected board保护" },
                { action: "Allin", correct: false, explanation: "过度commit" }
            ],
            key_concept: "Set在connected board应该bet保护"
        },
        // Draw计算 (21-25)
        {
            id: 21,
            category: "Draw计算",
            stage: "中期",
            effective_bb: 40,
            position: "BB",
            hand: "8♠ 9♠",
            hand_desc: "98同花",
            action_before: "3人底池，对手bet",
            flop: "6♠ 7♦ K♠",
            question: "你有15 outs (54% equity)，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "Combo draw equity 54%" },
                { action: "Call", correct: true, explanation: "需要跟8去赢36，你有54% equity，大幅领先！" },
                { action: "Raise", correct: false, explanation: "3人底池call更安全" }
            ],
            key_concept: "Combo draw equity超过50%，不能fold"
        },
        {
            id: 22,
            category: "Draw计算",
            stage: "中期",
            effective_bb: 40,
            position: "BB",
            hand: "A♠ K♠",
            hand_desc: "AK同花",
            action_before: "3人底池，对手bet",
            flop: "Q♠ J♠ 4♦",
            question: "你有15 outs (54% equity)，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "Flush+straight draw combo" },
                { action: "Call", correct: true, explanation: "Combo draw equity 54%" },
                { action: "Raise", correct: false, explanation: "Call保留implied odds" }
            ],
            key_concept: "Flush+straight draw combo很强"
        },
        {
            id: 23,
            category: "Draw计算",
            stage: "中期",
            effective_bb: 40,
            position: "BB",
            hand: "T♠ J♠",
            hand_desc: "JT同花",
            action_before: "3人底池，对手bet",
            flop: "8♠ 9♦ Q♣",
            question: "你有8 outs (32% equity)，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "Open-ended可以call" },
                { action: "Call", correct: true, explanation: "Open-ended with good odds" },
                { action: "Raise", correct: false, explanation: "Call即可" }
            ],
            key_concept: "Open-ended with good odds可以call"
        },
        {
            id: 24,
            category: "Draw计算",
            stage: "中期",
            effective_bb: 40,
            position: "BB",
            hand: "9♠ T♠",
            hand_desc: "T9同花",
            action_before: "3人底池，对手bet",
            flop: "J♠ Q♦ 2♣",
            question: "你有4 outs (17% equity)，你应该如何行动?",
            options: [
                { action: "Fold", correct: true, explanation: "Gutshot not enough equity" },
                { action: "Call", correct: false, explanation: "Gutshot equity太低" },
                { action: "Raise", correct: false, explanation: "错误" }
            ],
            key_concept: "Gutshot equity太低，通常fold"
        },
        {
            id: 25,
            category: "Draw计算",
            stage: "中期",
            effective_bb: 40,
            position: "BB",
            hand: "K♠ Q♠",
            hand_desc: "KQ同花",
            action_before: "3人底池，对手bet",
            flop: "A♠ T♠ 7♦",
            question: "你有12 outs (45% equity)，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "Flush+straight draw" },
                { action: "Call", correct: true, explanation: "Combo draw equity 45%" },
                { action: "Raise", correct: false, explanation: "Call即可" }
            ],
            key_concept: "Combo draw equity高，应该call"
        },
        // 短筹码Push (26-35)
        {
            id: 26,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 15,
            position: "SB",
            hand: "A♠ K♠",
            hand_desc: "AK同花",
            action_before: "Fold到你",
            question: "15bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AK任何位置allin" },
                { action: "Min-raise", correct: false, explanation: "应该allin" },
                { action: "Allin", correct: true, explanation: "AK any position allin 15bb" }
            ],
            key_concept: "AK任何位置短筹码都allin"
        },
        {
            id: 27,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 15,
            position: "BTN",
            hand: "Q♠ Q♥",
            hand_desc: "QQ",
            action_before: "Fold到你",
            question: "15bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "QQ是强牌" },
                { action: "Min-raise", correct: false, explanation: "应该allin" },
                { action: "Allin", correct: true, explanation: "QQ allin 15bb" }
            ],
            key_concept: "QQ短筹码allin"
        },
        {
            id: 28,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 12,
            position: "CO",
            hand: "J♠ J♥",
            hand_desc: "JJ",
            action_before: "Fold到你",
            question: "12bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "JJ是强牌" },
                { action: "Min-raise", correct: false, explanation: "应该allin" },
                { action: "Allin", correct: true, explanation: "JJ allin 12bb" }
            ],
            key_concept: "JJ短筹码allin"
        },
        {
            id: 29,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 10,
            position: "MP",
            hand: "8♠ 8♥",
            hand_desc: "88",
            action_before: "Fold到你",
            question: "10bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "88可以allin" },
                { action: "Min-raise", correct: false, explanation: "应该allin" },
                { action: "Allin", correct: true, explanation: "88 allin 10bb" }
            ],
            key_concept: "88短筹码allin"
        },
        {
            id: 30,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 8,
            position: "SB",
            hand: "A♠ 9♠",
            hand_desc: "A9同花",
            action_before: "Fold到你",
            question: "8bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "A9s是强牌" },
                { action: "Min-raise", correct: false, explanation: "应该allin" },
                { action: "Allin", correct: true, explanation: "A9s allin 8bb" }
            ],
            key_concept: "A9s短筹码allin"
        },
        {
            id: 31,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 6,
            position: "BTN",
            hand: "K♠ J♠",
            hand_desc: "KJ同花",
            action_before: "Fold到你",
            question: "6bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "KJs可以allin" },
                { action: "Min-raise", correct: false, explanation: "应该allin" },
                { action: "Allin", correct: true, explanation: "KJs allin 6bb" }
            ],
            key_concept: "KJs短筹码allin"
        },
        {
            id: 32,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 5,
            position: "CO",
            hand: "6♠ 6♥",
            hand_desc: "66",
            action_before: "Fold到你",
            question: "5bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "66可以allin 5bb" },
                { action: "Min-raise", correct: false, explanation: "应该allin" },
                { action: "Allin", correct: true, explanation: "66 allin 5bb" }
            ],
            key_concept: "66短筹码allin"
        },
        {
            id: 33,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 20,
            position: "UTG",
            hand: "A♠ K♦",
            hand_desc: "AK杂色",
            action_before: "Fold到你",
            question: "20bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AK是强牌" },
                { action: "Open 2.5x", correct: false, explanation: "应该allin" },
                { action: "Allin", correct: true, explanation: "AK allin 20bb" }
            ],
            key_concept: "20bb以下AK应该allin"
        },
        {
            id: 34,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 18,
            position: "MP",
            hand: "J♠ J♥",
            hand_desc: "JJ",
            action_before: "Fold到你",
            question: "18bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "JJ是强牌" },
                { action: "Open 2.5x", correct: false, explanation: "应该allin" },
                { action: "Allin", correct: true, explanation: "JJ allin 18bb" }
            ],
            key_concept: "JJ短筹码allin"
        },
        {
            id: 35,
            category: "短筹码Push",
            stage: "后期",
            effective_bb: 25,
            position: "BTN",
            hand: "A♠ Q♠",
            hand_desc: "AQ同花",
            action_before: "Fold到你",
            question: "25bb短筹码，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AQs是强牌" },
                { action: "Open 2.5x", correct: false, explanation: "25bb应该allin" },
                { action: "Allin", correct: true, explanation: "AQs allin 25bb" }
            ],
            key_concept: "25bb以下AQs应该allin"
        },
        // ICM压力 (36-40)
        {
            id: 36,
            category: "ICM压力",
            stage: "泡沫期",
            effective_bb: 30,
            position: "BTN",
            hand: "A♠ K♠",
            hand_desc: "AK同花",
            action_before: "UTG(6bb) allin",
            question: "剩余45人，前40人钱圈，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AK强牌60% equity" },
                { action: "Call", correct: true, explanation: "AK强牌，vs 6bb allin call" },
                { action: "Allin", correct: false, explanation: "不需要" }
            ],
            key_concept: "泡沫期AK强牌仍要call"
        },
        {
            id: 37,
            category: "ICM压力",
            stage: "泡沫期",
            effective_bb: 30,
            position: "BTN",
            hand: "Q♠ Q♥",
            hand_desc: "QQ",
            action_before: "UTG(6bb) allin",
            question: "剩余45人，前40人钱圈，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "QQ 80% equity" },
                { action: "Call", correct: true, explanation: "QQ 80% equity必须call" },
                { action: "Allin", correct: false, explanation: "不需要" }
            ],
            key_concept: "QQ vs短筹码必须call"
        },
        {
            id: 38,
            category: "ICM压力",
            stage: "泡沫期",
            effective_bb: 25,
            position: "CO",
            hand: "A♠ Q♠",
            hand_desc: "AQ同花",
            action_before: "CO(8bb) allin",
            question: "剩余45人，前40人钱圈，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AQs 60% equity" },
                { action: "Call", correct: true, explanation: "AQs 60% equity call" },
                { action: "Allin", correct: false, explanation: "不需要" }
            ],
            key_concept: "AQs vs短筹码call"
        },
        {
            id: 39,
            category: "ICM压力",
            stage: "泡沫期",
            effective_bb: 25,
            position: "BTN",
            hand: "J♠ T♠",
            hand_desc: "JT同花",
            action_before: "UTG(6bb) allin",
            question: "剩余45人，前40人钱圈，你应该如何行动?",
            options: [
                { action: "Fold", correct: true, explanation: "JTs vs allin range fold" },
                { action: "Call", correct: false, explanation: "JTs equity不够" },
                { action: "Allin", correct: false, explanation: "错误" }
            ],
            key_concept: "投机牌ICM可以fold"
        },
        {
            id: 40,
            category: "ICM压力",
            stage: "泡沫期",
            effective_bb: 20,
            position: "CO",
            hand: "6♠ 6♥",
            hand_desc: "66",
            action_before: "MP(10bb) allin",
            question: "剩余45人，前40人钱圈，你应该如何行动?",
            options: [
                { action: "Fold", correct: true, explanation: "66 fold to 10bb allin" },
                { action: "Call", correct: false, explanation: "66 equity不够" },
                { action: "Allin", correct: false, explanation: "错误" }
            ],
            key_concept: "小对子vs大筹码allin fold"
        },
        // Final Table (41-45)
        {
            id: 41,
            category: "Final Table",
            stage: "Final Table",
            effective_bb: 100,
            position: "CO (CL)",
            hand: "A♠ K♠",
            hand_desc: "AK同花",
            action_before: "SB allin 40bb",
            question: "6人Final Table，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "AK 52% equity" },
                { action: "Call", correct: true, explanation: "AK 52% equity call" },
                { action: "Allin", correct: false, explanation: "不需要" }
            ],
            key_concept: "FT CL应该施加压力"
        },
        {
            id: 42,
            category: "Final Table",
            stage: "Final Table",
            effective_bb: 80,
            position: "MP",
            hand: "Q♠ Q♥",
            hand_desc: "QQ",
            action_before: "BTN allin 35bb",
            question: "6人Final Table，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "QQ 80% equity" },
                { action: "Call", correct: true, explanation: "QQ 80% equity call" },
                { action: "Allin", correct: false, explanation: "不需要" }
            ],
            key_concept: "QQ FT必须call"
        },
        {
            id: 43,
            category: "Final Table",
            stage: "Final Table",
            effective_bb: 60,
            position: "CO",
            hand: "T♠ T♥",
            hand_desc: "TT",
            action_before: "SB allin 30bb",
            question: "6人Final Table，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "TT 70% equity" },
                { action: "Call", correct: true, explanation: "TT 70% equity call" },
                { action: "Allin", correct: false, explanation: "不需要" }
            ],
            key_concept: "TT FT call"
        },
        {
            id: 44,
            category: "Final Table",
            stage: "Final Table",
            effective_bb: 100,
            position: "CO",
            hand: "A♠ Q♦",
            hand_desc: "AQ杂色",
            action_before: "UTG+1 allin 50bb",
            question: "6人Final Table，你应该如何行动?",
            options: [
                { action: "Fold", correct: true, explanation: "AQ vs 50bb allin fold" },
                { action: "Call", correct: false, explanation: "太松" },
                { action: "Allin", correct: false, explanation: "错误" }
            ],
            key_concept: "AQ vs大筹码allin fold"
        },
        {
            id: 45,
            category: "Final Table",
            stage: "Final Table",
            effective_bb: 60,
            position: "CO",
            hand: "7♠ 7♥",
            hand_desc: "77",
            action_before: "BTN allin 30bb",
            question: "6人Final Table，你应该如何行动?",
            options: [
                { action: "Fold", correct: true, explanation: "77 vs 30bb fold" },
                { action: "Call", correct: false, explanation: "77 equity不够" },
                { action: "Allin", correct: false, explanation: "错误" }
            ],
            key_concept: "77 FT fold"
        },
        // River决策 (46-50)
        {
            id: 46,
            category: "River决策",
            stage: "后期",
            effective_bb: 40,
            position: "BB (OOP)",
            hand: "Q♠ Q♥",
            hand_desc: "QQ",
            action_before: "4条街build的大pot",
            board: "Q♣ 8♠ 3♦ 2♥ 7♠",
            question: "你check, BTN bet 20BB into 30BB，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "Set call thin value" },
                { action: "Call", correct: true, explanation: "Set call thin value" },
                { action: "Raise", correct: false, explanation: "不需要raise" }
            ],
            key_concept: "Set on dry board call thin value"
        },
        {
            id: 47,
            category: "River决策",
            stage: "后期",
            effective_bb: 40,
            position: "BB (OOP)",
            hand: "A♠ A♥",
            hand_desc: "AA",
            action_before: "4条街build的大pot",
            board: "A♣ K♠ 7♦ 6♥ 2♣",
            question: "你check, BTN bet 20BB into 30BB，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "Top set call value" },
                { action: "Call", correct: true, explanation: "Top set call value" },
                { action: "Raise", correct: false, explanation: "不需要raise" }
            ],
            key_concept: "Top set call value"
        },
        {
            id: 48,
            category: "River决策",
            stage: "后期",
            effective_bb: 40,
            position: "BB (OOP)",
            hand: "K♠ K♥",
            hand_desc: "KK",
            action_before: "4条街build的大pot",
            board: "K♦ Q♠ T♠ 9♥ 8♣",
            question: "你check, BTN bet 20BB into 30BB，你应该如何行动?",
            options: [
                { action: "Fold", correct: true, explanation: "Straight possible fold" },
                { action: "Call", correct: false, explanation: "太危险" },
                { action: "Raise", correct: false, explanation: "错误" }
            ],
            key_concept: "Straight possible fold"
        },
        {
            id: 49,
            category: "River决策",
            stage: "后期",
            effective_bb: 40,
            position: "BB (OOP)",
            hand: "A♠ K♠",
            hand_desc: "AK同花",
            action_before: "4条街build的大pot",
            board: "K♦ Q♠ J♣ T♥ 2♠",
            question: "你check, BTN bet 20BB into 30BB，你应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "Top pair call" },
                { action: "Call", correct: true, explanation: "Top pair call" },
                { action: "Raise", correct: false, explanation: "不需要raise" }
            ],
            key_concept: "Top pair river call"
        },
        {
            id: 50,
            category: "River决策",
            stage: "后期",
            effective_bb: 40,
            position: "BB (OOP)",
            hand: "J♠ J♥",
            hand_desc: "JJ",
            action_before: "4条街build的大pot",
            board: "J♣ T♠ 9♠ 8♥ 7♦",
            question: "你check, BTN bet 20BB into 30BB，你应该如何行动?",
            options: [
                { action: "Fold", correct: true, explanation: "Straight complete fold" },
                { action: "Call", correct: false, explanation: "太危险" },
                { action: "Raise", correct: false, explanation: "错误" }
            ],
            key_concept: "Straight complete fold"
        }
    ]
};
