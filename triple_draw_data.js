// 2-7 Triple Draw 练习题库
const TRIPLE_DRAW_DATA = {
    categories: [
        { id: "preflop", name: "起手牌选择", count: 10 },
        { id: "draw1", name: "第一次换牌", count: 10 },
        { id: "draw2", name: "第二次换牌", count: 5 },
        { id: "draw3", name: "第三次换牌", count: 5 },
        { id: "pat", name: "Pat决策", count: 5 },
        { id: "showdown", name: "Showdown", count: 5 }
    ],
    scenarios: [
        // 起手牌选择 (1-10)
        {
            id: 1,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "7♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "7-5-4-3-2 (不同花)",
            action_before: "None",
            question: "这是最强手牌，你应该如何行动?",
            options: [
                { action: "Call", correct: false, explanation: "太弱了，应该Raise" },
                { action: "Raise", correct: true, explanation: '"Number 1"最强牌，应该Raise获取价值' },
                { action: "Fold", correct: false, explanation: "绝对不可以fold" }
            ],
            key_concept: '"Number 1"是2-7中最好的牌，必须Raise'
        },
        {
            id: 2,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "7♠ 6♥ 4♦ 3♣ 2♠",
            hand_desc: "7-6-4-3-2",
            action_before: "None",
            question: "你的手牌是7-6-4-3-2，应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "这是强牌" },
                { action: "Call", correct: false, explanation: "可以Raise" },
                { action: "Raise", correct: true, explanation: "几乎nuts，应该Raise" }
            ],
            key_concept: "7-low是顶级牌，应该Raise"
        },
        {
            id: 3,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "8♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "8-5-4-3-2",
            action_before: "None",
            question: "8-5-4-3-2，应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "这是强牌" },
                { action: "Raise", correct: true, explanation: "8-low是强牌，应该Raise" },
                { action: "Call", correct: false, explanation: "可以Raise获取价值" }
            ],
            key_concept: "8-low是强牌，应该Raise"
        },
        {
            id: 4,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "K♠ 7♥ 4♦ 3♣ 2♠",
            hand_desc: "K-7-4-3-2 (有K)",
            action_before: "None",
            question: "你的手牌有K，应该如何行动?",
            options: [
                { action: "Raise", correct: false, explanation: "K太大，需要换" },
                { action: "Call", correct: true, explanation: "有4张小牌，可以call换1张" },
                { action: "Fold", correct: false, explanation: "4张小牌值得call" }
            ],
            key_concept: "4张小牌+1张大牌可以call，换1张"
        },
        {
            id: 5,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "8♠ 8♥ 4♦ 3♣ 2♠",
            hand_desc: "一对8",
            action_before: "None",
            question: "你有一对8，应该如何行动?",
            options: [
                { action: "Raise", correct: false, explanation: "有对子不是强牌" },
                { action: "Call", correct: true, explanation: "有对子call，换3张打破对子" },
                { action: "Fold", correct: false, explanation: "有3张小牌可以call" }
            ],
            key_concept: "有对子call，换3张打破对子"
        },
        {
            id: 6,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "7♠ 5♥ 4♦ 3♣ 9♠",
            hand_desc: "9-7-5-4-3",
            action_before: "None",
            question: "最大是9，应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "9-low是playable" },
                { action: "Raise", correct: true, explanation: "9-low可以raise" },
                { action: "Call", correct: false, explanation: "可以raise" }
            ],
            key_concept: "9-low是强牌，可以raise"
        },
        {
            id: 7,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "Q♠ J♥ 9♦ 7♣ 5♠",
            hand_desc: "Q-J-9-7-5",
            action_before: "None",
            question: "多张高牌，应该如何行动?",
            options: [
                { action: "Raise", correct: false, explanation: "牌太差" },
                { action: "Call", correct: false, explanation: "牌太差，换牌成本高" },
                { action: "Fold", correct: true, explanation: "太多高牌，应该fold" }
            ],
            key_concept: "多张高牌应该fold"
        },
        {
            id: 8,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "5♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "一对5",
            action_before: "UTG Raise",
            question: "面对UTG Raise，你有一对5，应该如何行动?",
            options: [
                { action: "Raise", correct: false, explanation: "不能reraise有对子的牌" },
                { action: "Call", correct: true, explanation: "有3张小牌+对子，可以call换3张" },
                { action: "Fold", correct: false, explanation: "有潜力打破对子" }
            ],
            key_concept: "有对子+小牌可以call换3张"
        },
        {
            id: 9,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "6♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "6-5-4-3-2 (顺子!)",
            action_before: "None",
            question: "注意！这是什么牌型?",
            options: [
                { action: "Raise (强牌)", correct: false, explanation: "65432是顺子！非常差！" },
                { action: "Fold", correct: true, explanation: "65432是顺子，是最差的手牌之一，必须全部换掉" },
                { action: "Call", correct: false, explanation: "顺子在2-7中是坏事" }
            ],
            key_concept: "记住：顺子在2-7中是最差牌型！"
        },
        {
            id: 10,
            category: "起手牌选择",
            stage: "Pre-draw",
            hand: "7♠ 7♥ 7♦ 3♣ 2♠",
            hand_desc: "三张7",
            action_before: "None",
            question: "你有三张7，应该如何行动?",
            options: [
                { action: "Call", correct: true, explanation: "三张7call，换2张打破对子" },
                { action: "Raise", correct: false, explanation: "三张不是强牌" },
                { action: "Fold", correct: false, explanation: "有2张小牌可以call" }
            ],
            key_concept: "三张换2张，保留2张小牌"
        },
        // 第一次换牌 (11-20)
        {
            id: 11,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "7♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "7-5-4-3-2 (不同花)",
            action_before: "Pre-draw raise",
            question: "这是Number 1，第一次换牌你应该?",
            options: [
                { action: "换1张", correct: false, explanation: "最强牌不需要换" },
                { action: "换3张", correct: false, explanation: "不需要换" },
                { action: "Pat (不换)", correct: true, explanation: "Number 1是nuts，Pat不换" }
            ],
            key_concept: "8-low以下Pat不换"
        },
        {
            id: 12,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "7♠ 5♥ 4♦ 3♣ K♠",
            hand_desc: "K-7-5-4-3",
            action_before: "Call pre",
            question: "你有4张小牌+1张K，应该换几张?",
            options: [
                { action: "换1张 (K)", correct: true, explanation: "换1张K，保留4张小牌" },
                { action: "换2张", correct: false, explanation: "只需要换K" },
                { action: "Pat", correct: false, explanation: "K太大需要换" }
            ],
            key_concept: "单张大牌换1张"
        },
        {
            id: 13,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "8♠ 8♥ 4♦ 3♣ 2♠",
            hand_desc: "一对8",
            action_before: "Call pre",
            question: "你有一对8，应该换几张?",
            options: [
                { action: "换1张", correct: false, explanation: "1张不够打破对子" },
                { action: "换3张", correct: true, explanation: "换3张打破对子，保留2张小牌" },
                { action: "Pat", correct: false, explanation: "有对子不能Pat" }
            ],
            key_concept: "有对子换3张打破对子"
        },
        {
            id: 14,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "6♠ 5♥ 4♦ 3♣ 9♠",
            hand_desc: "9-6-5-4-3",
            action_before: "Raise pre",
            question: "最大是9，应该换几张?",
            options: [
                { action: "换1张 (9)", correct: true, explanation: "换1张9，争取做成8-low或更好" },
                { action: "换2张", correct: false, explanation: "只需要换9" },
                { action: "Pat", correct: false, explanation: "9可以改进" }
            ],
            key_concept: "9-low可以换1张争取更好"
        },
        {
            id: 15,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "J♠ 7♥ 5♦ 3♣ 2♠",
            hand_desc: "J-7-5-3-2",
            action_before: "Call pre",
            question: "你有J，应该换几张?",
            options: [
                { action: "换1张", correct: true, explanation: "换1张J" },
                { action: "换2张", correct: false, explanation: "只需要换J" },
                { action: "Pat", correct: false, explanation: "J太大" }
            ],
            key_concept: "单张大牌换1张"
        },
        {
            id: 16,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "Q♠ T♥ 8♦ 6♣ 4♠",
            hand_desc: "Q-T-8-6-4",
            action_before: "Call pre",
            question: "多张高牌，应该换几张?",
            options: [
                { action: "换2张 (Q和T)", correct: true, explanation: "换2张大牌，保留3张" },
                { action: "换1张", correct: false, explanation: "需要换2张" },
                { action: "Pat", correct: false, explanation: "牌太差" }
            ],
            key_concept: "两张高牌换2张"
        },
        {
            id: 17,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "A♠ 7♥ 5♦ 3♣ 2♠",
            hand_desc: "A-7-5-3-2 (注意A是高牌!)",
            action_before: "Call pre",
            question: "注意A是高牌！应该换几张?",
            options: [
                { action: "换1张 (A)", correct: true, explanation: "A是高牌，换A保留4张小牌" },
                { action: "Pat", correct: false, explanation: "A是高牌必须换" },
                { action: "换2张", correct: false, explanation: "只需要换A" }
            ],
            key_concept: "A在2-7中是高牌，必须换掉"
        },
        {
            id: 18,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "8♠ 6♥ 4♦ 3♣ 2♠",
            hand_desc: "8-6-4-3-2",
            action_before: "Raise pre",
            question: "8-6-4-3-2，应该?",
            options: [
                { action: "Pat", correct: true, explanation: "8-low是强牌，可以Pat" },
                { action: "换1张", correct: false, explanation: "8-low足够强" },
                { action: "换3张", correct: false, explanation: "不需要换" }
            ],
            key_concept: "8-low可以Pat"
        },
        {
            id: 19,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "7♠ 5♥ 5♦ 3♣ 2♠",
            hand_desc: "一对5",
            action_before: "Call pre",
            question: "你有一对5，应该换几张?",
            options: [
                { action: "换2张 (两张5)", correct: true, explanation: "换2张打破对子，保留3张" },
                { action: "换3张", correct: false, explanation: "换2张就够了" },
                { action: "Pat", correct: false, explanation: "有对子不能Pat" }
            ],
            key_concept: "两张对子换2张打破"
        },
        {
            id: 20,
            category: "第一次换牌",
            stage: "Draw 1",
            hand: "9♠ 7♥ 5♦ 3♣ 2♠",
            hand_desc: "9-7-5-3-2",
            action_before: "Raise pre",
            question: "9-7-5-3-2，应该?",
            options: [
                { action: "换1张 (9)", correct: true, explanation: "换9争取更好" },
                { action: "Pat", correct: false, explanation: "9可以改进" },
                { action: "换2张", correct: false, explanation: "只需要换9" }
            ],
            key_concept: "9-low可以换1张争取8-low"
        },
        // Pat决策 (21-25)
        {
            id: 21,
            category: "Pat决策",
            stage: "Draw 2",
            hand: "7♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "7-5-4-3-2",
            action_before: "Pat 1st draw",
            question: "第二次换牌前，你有7-5-4-3-2，应该?",
            options: [
                { action: "换1张", correct: false, explanation: "nuts不需要换" },
                { action: "Pat (不换)", correct: true, explanation: "Number 1，Pat到showdown" }
            ],
            key_concept: "顶级牌一直Pat到showdown"
        },
        {
            id: 22,
            category: "Pat决策",
            stage: "Draw 2",
            hand: "9♠ 7♥ 5♦ 3♣ 2♠",
            hand_desc: "9-7-5-3-2",
            action_before: "对手Pat",
            question: "你9-low，对手Pat，你应该?",
            options: [
                { action: "Pat", correct: false, explanation: "对手Pat表示强牌，9可能不够" },
                { action: "换1张 (9)", correct: true, explanation: "对手Pat，换9争取更好" }
            ],
            key_concept: "对手Pat时，考虑改进自己的牌"
        },
        {
            id: 23,
            category: "Pat决策",
            stage: "Draw 2",
            hand: "8♠ 6♥ 4♦ 3♣ 2♠",
            hand_desc: "8-6-4-3-2",
            action_before: "换牌后得到",
            question: "第二次换牌后你有8-low，应该?",
            options: [
                { action: "换1张", correct: false, explanation: "8-low足够强" },
                { action: "Pat", correct: true, explanation: "8-low可以Pat" }
            ],
            key_concept: "8-low是强牌，可以Pat"
        },
        {
            id: 24,
            category: "Pat决策",
            stage: "Draw 2",
            hand: "10♠ 7♥ 5♦ 3♣ 2♠",
            hand_desc: "10-7-5-3-2",
            action_before: "对手换3张",
            question: "你10-low，对手换3张，你应该?",
            options: [
                { action: "换1张 (10)", correct: true, explanation: "10可能不够赢，换10争取更好" },
                { action: "Pat", correct: false, explanation: "对手换3张表示弱牌，但10还是弱" }
            ],
            key_concept: "10通常不够赢，建议换"
        },
        {
            id: 25,
            category: "Pat决策",
            stage: "Draw 3",
            hand: "9♠ 6♥ 4♦ 3♣ 2♠",
            hand_desc: "9-6-4-3-2",
            action_before: "Final draw",
            question: "最后一次换牌，9-low，应该?",
            options: [
                { action: "换1张", correct: false, explanation: "最后机会了，但9可能够赢" },
                { action: "Pat", correct: true, explanation: "9-low在最后可以Pat，看 showdown" }
            ],
            key_concept: "最后draw，9可以Pat"
        },
        // Showdown (26-30)
        {
            id: 26,
            category: "Showdown",
            stage: "Showdown",
            hand: "7♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "7-5-4-3-2 (你的牌)",
            action_before: "对手show 8-6-4-3-2",
            question: "你有7-5-4-3-2，对手8-6-4-3-2，谁赢?",
            options: [
                { action: "对手赢", correct: false, explanation: "7比8小，7-low更好" },
                { action: "你赢", correct: true, explanation: "7-low比8-low好" }
            ],
            key_concept: "数字越小越好，7 < 8"
        },
        {
            id: 27,
            category: "Showdown",
            stage: "Showdown",
            hand: "8♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "8-5-4-3-2 (你的牌)",
            action_before: "对手show 8-6-4-3-2",
            question: "都有8，谁赢?",
            options: [
                { action: "对手赢", correct: false, explanation: "8-5比8-6好，5 < 6" },
                { action: "你赢", correct: true, explanation: "都有8，比第二张，5比6小" }
            ],
            key_concept: "最大牌相同，比第二大的"
        },
        {
            id: 28,
            category: "Showdown",
            stage: "Showdown",
            hand: "A♠ 7♥ 5♦ 3♣ 2♠",
            hand_desc: "A-7-5-3-2 (你的牌)",
            action_before: "对手show 9-8-6-4-2",
            question: "你有A，对手9-8-6-4-2，谁赢?",
            options: [
                { action: "你赢", correct: false, explanation: "A是高牌！A > 9，你的牌更差" },
                { action: "对手赢", correct: true, explanation: "A是高牌，9-8-6-4-2比A-7-5-3-2好" }
            ],
            key_concept: "A是高牌！A > K > Q > ..."
        },
        {
            id: 29,
            category: "Showdown",
            stage: "Showdown",
            hand: "6♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "6-5-4-3-2 (顺子!)",
            action_before: "对手show 10-9-8-7-6",
            question: "你有顺子6-5-4-3-2，对手10-9-8-7-6，谁赢?",
            options: [
                { action: "你赢", correct: false, explanation: "两个都是顺子！顺子在2-7中是最差牌" },
                { action: "对手赢", correct: true, explanation: "都是顺子，但对手10-high顺子比你的6-high顺子好(对低牌游戏来说是差)" }
            ],
            key_concept: "顺子在2-7中是非常差的牌！"
        },
        {
            id: 30,
            category: "Showdown",
            stage: "Showdown",
            hand: "7♠ 6♥ 4♦ 3♣ 2♠",
            hand_desc: "7-6-4-3-2",
            action_before: "对手show 7-6-4-3-2",
            question: "牌完全相同?",
            options: [
                { action: "分池", correct: true, explanation: "牌相同，分池" },
                { action: "你赢", correct: false, explanation: "一样强" }
            ],
            key_concept: "牌相同分池"
        },
        // 第二次换牌 (31-35)
        {
            id: 31,
            category: "第二次换牌",
            stage: "Draw 2",
            hand: "J♠ 7♥ 5♦ 3♣ 2♠",
            hand_desc: "换牌后 J-7-5-3-2",
            action_before: "换1张后",
            question: "你仍然有大牌J，应该换几张?",
            options: [
                { action: "换1张 (J)", correct: true, explanation: "继续换J" },
                { action: "Pat", correct: false, explanation: "J太大" }
            ],
            key_concept: "还有大牌继续换"
        },
        {
            id: 32,
            category: "第二次换牌",
            stage: "Draw 2",
            hand: "8♠ 7♥ 6♦ 4♣ 2♠",
            hand_desc: "8-7-6-4-2",
            action_before: "换1张后",
            question: "你有8-7-6，接近顺子，应该?",
            options: [
                { action: "换1张 (注意顺子!)", correct: true, explanation: "876是顺子倾向，建议换1张打破" },
                { action: "Pat", correct: false, explanation: "顺子倾向要小心" }
            ],
            key_concept: "避免做成顺子"
        },
        {
            id: 33,
            category: "第二次换牌",
            stage: "Draw 2",
            hand: "9♠ 7♥ 5♦ 3♣ 2♠",
            hand_desc: "9-7-5-3-2",
            action_before: "换1张后还是9",
            question: "你还是9-low，应该?",
            options: [
                { action: "换1张 (9)", correct: true, explanation: "继续换9争取更好" },
                { action: "Pat", correct: false, explanation: "可以改进" }
            ],
            key_concept: "9可以换争取8"
        },
        {
            id: 34,
            category: "第二次换牌",
            stage: "Draw 2",
            hand: "K♠ Q♥ 8♦ 6♣ 4♠",
            hand_desc: "换牌后还是很多高牌",
            action_before: "换2张后",
            question: "换牌效果不好，还有K-Q，应该?",
            options: [
                { action: "换2张", correct: true, explanation: "继续换2张大牌" },
                { action: "Fold", correct: false, explanation: "还可以再试一次" }
            ],
            key_concept: "继续改进"
        },
        {
            id: 35,
            category: "第二次换牌",
            stage: "Draw 2",
            hand: "7♠ 5♥ 4♦ 3♣ 8♠",
            hand_desc: "8-7-5-4-3",
            action_before: "换1张后得到8",
            question: "你得到了8-low，应该?",
            options: [
                { action: "Pat", correct: true, explanation: "8-low是强牌，可以Pat" },
                { action: "换1张", correct: false, explanation: "8足够强" }
            ],
            key_concept: "8-low是强牌"
        },
        // 第三次换牌 (36-40)
        {
            id: 36,
            category: "第三次换牌",
            stage: "Draw 3",
            hand: "9♠ 8♥ 5♦ 3♣ 2♠",
            hand_desc: "9-8-5-3-2",
            action_before: "Final draw",
            question: "最后一次机会，9-8-low，应该?",
            options: [
                { action: "换1张 (9)", correct: true, explanation: "最后机会，可以换9争取更好" },
                { action: "Pat", correct: false, explanation: "还可以改进" }
            ],
            key_concept: "最后draw可以搏一下"
        },
        {
            id: 37,
            category: "第三次换牌",
            stage: "Draw 3",
            hand: "8♠ 6♥ 4♦ 3♣ 2♠",
            hand_desc: "8-6-4-3-2",
            action_before: "Pat last 2 draws",
            question: "你一直在Pat，有8-low，最后应该?",
            options: [
                { action: "Pat", correct: true, explanation: "保持Pat到showdown" },
                { action: "换1张", correct: false, explanation: "不需要换" }
            ],
            key_concept: "Pat到showdown"
        },
        {
            id: 38,
            category: "第三次换牌",
            stage: "Draw 3",
            hand: "10♠ 8♥ 5♦ 3♣ 2♠",
            hand_desc: "10-8-5-3-2",
            action_before: "Final draw",
            question: "10-low最后一次机会，应该?",
            options: [
                { action: "换1张 (10)", correct: true, explanation: "最后机会，换10" },
                { action: "Pat", correct: false, explanation: "10通常不够" }
            ],
            key_concept: "10建议换"
        },
        {
            id: 39,
            category: "第三次换牌",
            stage: "Draw 3",
            hand: "Q♠ 8♥ 6♦ 4♣ 2♠",
            hand_desc: "Q-8-6-4-2",
            action_before: "换牌效果不佳",
            question: "还有Q，应该?",
            options: [
                { action: "换1张 (Q)", correct: true, explanation: "继续换Q" },
                { action: "Pat", correct: false, explanation: "Q太大" }
            ],
            key_concept: "继续改进"
        },
        {
            id: 40,
            category: "第三次换牌",
            stage: "Draw 3",
            hand: "7♠ 5♥ 4♦ 3♣ 2♠",
            hand_desc: "7-5-4-3-2",
            action_before: "你Pat了2次",
            question: "Number 1，最后应该?",
            options: [
                { action: "Pat", correct: true, explanation: "nuts一直Pat" },
                { action: "换1张", correct: false, explanation: "最强牌不需要换" }
            ],
            key_concept: "顶级牌一直Pat"
        }
    ]
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TRIPLE_DRAW_DATA;
}
