// Stud 变体练习题库
const STUD_DATA = {
    categories: [
        { id: "7stud", name: "Seven Card Stud", count: 10 },
        { id: "hilo", name: "Stud Hi-Lo", count: 8 },
        { id: "razz", name: "Razz", count: 8 },
        { id: "5stud", name: "Five Card Stud", count: 6 }
    ],
    scenarios: [
        // Seven Card Stud (1-10)
        {
            id: 1,
            category: "Seven Card Stud",
            stage: "Third Street",
            hand: "J♠ J♥ 9♦ (暗-暗-明)",
            hand_desc: "JJ9",
            action_before: "Bring-in",
            question: "你有对J带9门牌，面对bring-in，应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "对J是强牌" },
                { action: "Call", correct: false, explanation: "可以Raise" },
                { action: "Raise", correct: true, explanation: "高对是强起手牌，应该raise" }
            ],
            key_concept: "高对(JJ+)是Seven Card Stud的强起手牌"
        },
        {
            id: 2,
            category: "Seven Card Stud",
            stage: "Third Street",
            hand: "A♠ K♠ 9♠ (暗-暗-明)",
            hand_desc: "AK9三同花",
            action_before: "Bring-in",
            question: "你有AK9三同花，应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "三同花有潜力" },
                { action: "Call", correct: false, explanation: "可以Raise" },
                { action: "Raise", correct: true, explanation: "三同花高牌是强起手，应该raise" }
            ],
            key_concept: "三张同花高牌是强起手"
        },
        {
            id: 3,
            category: "Seven Card Stud",
            stage: "Third Street",
            hand: "5♠ 6♥ 7♦ (暗-暗-明)",
            hand_desc: "567三顺子",
            action_before: "Bring-in",
            question: "你有567三顺子，应该如何行动?",
            options: [
                { action: "Fold", correct: false, explanation: "三顺子有潜力" },
                { action: "Raise", correct: false, explanation: "小顺子不够强" },
                { action: "Call", correct: true, explanation: "三顺子call看发展" }
            ],
            key_concept: "小顺子call，大顺子raise"
        },
        {
            id: 4,
            category: "Seven Card Stud",
            stage: "Third Street",
            hand: "4♠ 4♥ T♦ (暗-暗-明)",
            hand_desc: "44T小对子",
            action_before: "Bring-in",
            question: "你有对4带T门牌，应该如何行动?",
            options: [
                { action: "Raise", correct: false, explanation: "小对子不够强" },
                { action: "Call", correct: true, explanation: "小对子call看明牌发展" },
                { action: "Fold", correct: false, explanation: "还可以call" }
            ],
            key_concept: "小对子(77-)通常call而非raise"
        },
        {
            id: 5,
            category: "Seven Card Stud",
            stage: "Fourth Street",
            hand: "J♠ J♥ 9♦ 2♣ (两暗两明)",
            hand_desc: "JJ92",
            action_before: "对手raise",
            question: "你有对J，4th street来2，对手raise，你?",
            options: [
                { action: "Fold", correct: false, explanation: "对J还是强牌" },
                { action: "Raise", correct: true, explanation: "对J很强，reraise" },
                { action: "Call", correct: false, explanation: "可以reraise" }
            ],
            key_concept: "高对保持激进"
        },
        {
            id: 6,
            category: "Seven Card Stud",
            stage: "Fifth Street",
            hand: "A♠ K♠ 9♠ Q♠ 2♦",
            hand_desc: "AK9Q2四同花抽",
            action_before: "对手bet",
            question: "你有四张同花，对手bet，你?",
            options: [
                { action: "Fold", correct: false, explanation: "同花抽牌很强" },
                { action: "Call", correct: false, explanation: "可以raise" },
                { action: "Raise", correct: true, explanation: "四同花有~40%概率，应该raise" }
            ],
            key_concept: "四同花抽牌很强大"
        },
        {
            id: 7,
            category: "Seven Card Stud",
            stage: "Third Street",
            hand: "2♠ 7♥ 9♦ (暗-暗-明)",
            hand_desc: "279散牌",
            action_before: "Bring-in",
            question: "你完全没连接的三张小牌，应该?",
            options: [
                { action: "Call", correct: false, explanation: "太弱了" },
                { action: "Raise", correct: false, explanation: "不可能" },
                { action: "Fold", correct: true, explanation: "三张小散牌应该弃掉" }
            ],
            key_concept: "三张不连接小牌fold"
        },
        {
            id: 8,
            category: "Seven Card Stud",
            stage: "Sixth Street",
            hand: "J♠ J♥ 9♦ 2♣ Q♠ A♦",
            hand_desc: "JJ92QA对J",
            action_before: "对手明牌有KK",
            question: "你有对J，对手明牌KK，对手allin，你?",
            options: [
                { action: "Call", correct: false, explanation: "被压制" },
                { action: "Raise", correct: false, explanation: "不可能" },
                { action: "Fold", correct: true, explanation: "对手明牌KK，你的JJ被压制，应该fold" }
            ],
            key_concept: "对子被压制时弃牌"
        },
        {
            id: 9,
            category: "Seven Card Stud",
            stage: "Third Street",
            hand: "A♠ A♥ 5♦ (暗-暗-明)",
            hand_desc: "AA5",
            action_before: "Bring-in",
            question: "你有对A带小门牌，应该?",
            options: [
                { action: "Call", correct: false, explanation: "可以reraise" },
                { action: "Fold", correct: false, explanation: "不可能" },
                { action: "Raise", correct: true, explanation: "对A是最强起手，必须raise" }
            ],
            key_concept: "对A是最强起手牌"
        },
        {
            id: 10,
            category: "Seven Card Stud",
            stage: "River",
            hand: "2♠ 3♠ 4♠ 5♠ 6♠ 7♠ 8♠",
            hand_desc: "2-8顺子同花",
            action_before: "对手check",
            question: "你有顺子同花，对手check，你?",
            options: [
                { action: "Check", correct: false, explanation: "应该value bet" },
                { action: "Fold", correct: false, explanation: "不可能" },
                { action: "Bet", correct: true, explanation: "强牌必须value bet" }
            ],
            key_concept: "强牌value bet"
        },
        // Stud Hi-Lo (11-18)
        {
            id: 11,
            category: "Stud Hi-Lo",
            stage: "Third Street",
            hand: "A♠ 2♥ 3♦ (暗-暗-明)",
            hand_desc: "A23",
            action_before: "Bring-in",
            question: "Hi-Lo: 你有A23，应该?",
            options: [
                { action: "Call", correct: false, explanation: "可以raise" },
                { action: "Fold", correct: false, explanation: "不可能" },
                { action: "Raise", correct: true, explanation: "A23是Hi-Lo最强起手，双潜力" }
            ],
            key_concept: "A23是Hi-Lo最强起手"
        },
        {
            id: 12,
            category: "Stud Hi-Lo",
            stage: "Third Street",
            hand: "A♠ 5♥ 9♦ (暗-暗-明)",
            hand_desc: "A59",
            action_before: "Bring-in",
            question: "Hi-Lo: 你有A59，应该?",
            options: [
                { action: "Raise", correct: false, explanation: "不够强" },
                { action: "Fold", correct: false, explanation: "还可以call" },
                { action: "Call", correct: true, explanation: "有一张A，低牌潜力call" }
            ],
            key_concept: "A+小牌call看发展"
        },
        {
            id: 13,
            category: "Stud Hi-Lo",
            stage: "Fifth Street",
            hand: "A♠ 2♥ 3♦ 8♣ K♠",
            hand_desc: "A238K低牌",
            action_before: "对手bet",
            question: "Hi-Lo: 你有A238K，对手bet，你?",
            options: [
                { action: "Fold", correct: false, explanation: "低牌很好" },
                { action: "Raise", correct: false, explanation: "call即可" },
                { action: "Call", correct: true, explanation: "低牌8-or-better，call争取低半池" }
            ],
            key_concept: "8-or-better低牌争取低半池"
        },
        {
            id: 14,
            category: "Stud Hi-Lo",
            stage: "Showdown",
            hand: "A♠ 2♥ 3♦ 4♣ 5♠",
            hand_desc: "A2345",
            action_before: "对手有6-7-8-9-T",
            question: "Hi-Lo: 你有A2345，对手6-7-8-9-T，结果?",
            options: [
                { action: "你赢高牌", correct: false, explanation: "不是" },
                { action: "分池", correct: false, explanation: "你全赢" },
                { action: "你赢高+低 (Scoop)", correct: true, explanation: "A2345是坚果低，同时是顺子赢高牌，scoop全拿" }
            ],
            key_concept: "A2345是Hi-Lo的monster hand"
        },
        // Razz (19-26)
        {
            id: 19,
            category: "Razz",
            stage: "Third Street",
            hand: "A♠ 2♥ 3♦ (暗-暗-明)",
            hand_desc: "A23",
            action_before: "Bring-in",
            question: "Razz: 你有A23，应该?",
            options: [
                { action: "Call", correct: false, explanation: "可以raise" },
                { action: "Fold", correct: false, explanation: "不可能" },
                { action: "Raise", correct: true, explanation: "A23是Razz最强起手，必须raise" }
            ],
            key_concept: "A23是Razz最强起手"
        },
        {
            id: 20,
            category: "Razz",
            stage: "Third Street",
            hand: "K♠ Q♥ J♦ (暗-暗-明)",
            hand_desc: "KQJ高牌",
            action_before: "Bring-in",
            question: "Razz: 你有KQJ，应该?",
            options: [
                { action: "Call", correct: false, explanation: "太弱了" },
                { action: "Raise", correct: false, explanation: "不可能" },
                { action: "Fold", correct: true, explanation: "Razz中高牌是最差牌，必须fold" }
            ],
            key_concept: "Razz中高牌是最差牌"
        },
        {
            id: 21,
            category: "Razz",
            stage: "Fifth Street",
            hand: "A♠ 2♥ 5♦ 8♣ K♠",
            hand_desc: "A258K",
            action_before: "对手明牌有3,4",
            question: "Razz: 你有A258K，对手明牌34，对手raise，你?",
            options: [
                { action: "Raise", correct: false, explanation: "被压制" },
                { action: "Call", correct: false, explanation: "应该fold" },
                { action: "Fold", correct: true, explanation: "对手明牌34，你的8太大，被压制，fold" }
            ],
            key_concept: "Razz注意对手明牌，避免被压制"
        },
        {
            id: 22,
            category: "Razz",
            stage: "Showdown",
            hand: "A♠ 2♥ 3♦ 7♣ 5♠",
            hand_desc: "A2357",
            action_before: "对手有A2368",
            question: "Razz: 你有A2357，对手A2368，谁赢?",
            options: [
                { action: "对手赢", correct: false, explanation: "你赢" },
                { action: "分池", correct: false, explanation: "你赢" },
                { action: "你赢", correct: true, explanation: "A2357 vs A2368，比第五张 7<8，你赢" }
            ],
            key_concept: "Razz从最高牌开始比"
        },
        // Five Card Stud (27-32)
        {
            id: 27,
            category: "Five Card Stud",
            stage: "Second Round",
            hand: "A♠ (暗) 5♦ (明)",
            hand_desc: "A5",
            action_before: "对手raise",
            question: "5 Card Stud: 你有A5，对手raise，你?",
            options: [
                { action: "Fold", correct: false, explanation: "Ax可以call" },
                { action: "Raise", correct: false, explanation: "call即可" },
                { action: "Call", correct: true, explanation: "Ax是不错起手，call看发展" }
            ],
            key_concept: "5 Card Stud Ax可以call"
        },
        {
            id: 28,
            category: "Five Card Stud",
            stage: "Fifth Card",
            hand: "J♠ 9♦ 7♣ 5♥ 3♠",
            hand_desc: "J9753散牌",
            action_before: "对手bet",
            question: "5 Card Stud: 你完全miss，对手bet，你?",
            options: [
                { action: "Call", correct: false, explanation: "应该fold" },
                { action: "Raise", correct: false, explanation: "不可能" },
                { action: "Fold", correct: true, explanation: "完全miss，fold" }
            ],
            key_concept: "完全miss时fold"
        }
    ]
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = STUD_DATA;
}
