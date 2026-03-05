// A-5 Lowball (California Lowball) 练习题库
const A5_DATA = {
    "metadata": {
        "game": "A-5 Lowball",
        "variant": "California Lowball",
        "total_scenarios": 60,
        "description": "A-5低牌游戏，A算最小，顺子同花OK，最佳牌5-4-3-2-A"
    },
    "categories": [
        {"id": "preflop", "name": "起手牌选择", "count": 20},
        {"id": "draw1", "name": "第一次抽牌", "count": 20},
        {"id": "pat", "name": "Pat决策", "count": 10},
        {"id": "showdown", "name": "摊牌决策", "count": 10}
    ],
    "scenarios": [
        // 起手牌选择 (1-20)
        {
            "id": 1,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 4♣ 5♠",
            "hand_desc": "5-4-3-2-A (Wheel)",
            "action_before": "None",
            "question": "你有A-5游戏的坚果牌(Wheel)，面对open，你应该如何行动？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "坚果牌不可能fold"},
                {"action": "Call", "correct": false, "explanation": "应该reraise"},
                {"action": "Raise/Reraise", "correct": true, "explanation": "Wheel是A-5的绝对坚果，必须reraise最大化价值"}
            ],
            "key_concept": "Wheel (5-4-3-2-A) 是A-5游戏的坚果牌"
        },
        {
            "id": 2,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 4♣ 7♠",
            "hand_desc": "7-4-3-2-A",
            "action_before": "None",
            "question": "你有7-4-3-2-A，面对open，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "7-low是强牌"},
                {"action": "Raise", "correct": true, "explanation": "7-low是很好的起手牌，应该raise"},
                {"action": "Call", "correct": false, "explanation": "可以raise"}
            ],
            "key_concept": "7-low是很好的起手牌"
        },
        {
            "id": 3,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 8♣ 9♠",
            "hand_desc": "9-8-3-2-A",
            "action_before": "None",
            "question": "你有9-8-3-2-A，面对open，你应该？",
            "options": [
                {"action": "Raise", "correct": false, "explanation": "9-high太弱"},
                {"action": "Fold", "correct": true, "explanation": "9-high在A-5中太弱，应该fold"},
                {"action": "Call", "correct": false, "explanation": "应该fold"}
            ],
            "key_concept": "9+ high牌在A-5中通常要fold"
        },
        {
            "id": 4,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 6♦ 7♣ 8♠",
            "hand_desc": "8-7-6-2-A",
            "action_before": "None",
            "question": "你有8-7-6-2-A，面对open，你应该？",
            "options": [
                {"action": "Raise", "correct": false, "explanation": "8-high边缘"},
                {"action": "Fold", "correct": false, "explanation": "还可以call"},
                {"action": "Call", "correct": true, "explanation": "8-high borderline，可以call看抽牌"}
            ],
            "key_concept": "8-high是边缘牌，看位置决定是否call"
        },
        {
            "id": 5,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ A♥ 2♦ 3♣ 4♠",
            "hand_desc": "对A",
            "action_before": "None",
            "question": "你有一对A，其他是2-3-4，你应该？",
            "options": [
                {"action": "Raise", "correct": false, "explanation": "配对是bad draw"},
                {"action": "Fold", "correct": true, "explanation": "任何配对都是A-5中的最差牌，必须fold"},
                {"action": "Call", "correct": false, "explanation": "应该fold"}
            ],
            "key_concept": "任何配对在A-5中都是bad hand，要fold"
        },
        {
            "id": 6,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 5♣ 6♠",
            "hand_desc": "6-5-3-2-A",
            "action_before": "None",
            "question": "你有6-5-3-2-A，面对open，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "6-low很强"},
                {"action": "Call", "correct": false, "explanation": "可以raise"},
                {"action": "Raise", "correct": true, "explanation": "6-low是强牌，应该raise"}
            ],
            "key_concept": "6-low是强牌，只有7-low和Wheel比它强"
        },
        {
            "id": 7,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 4♣ 6♠",
            "hand_desc": "6-4-3-2-A",
            "action_before": "None",
            "question": "你有6-4-3-2-A，面对raise，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "6-low很强"},
                {"action": "Call", "correct": false, "explanation": "可以reraise"},
                {"action": "Reraise", "correct": true, "explanation": "6-low足够强，可以reraise"}
            ],
            "key_concept": "6-low是很强的牌，可以reraise"
        },
        {
            "id": 8,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 5♦ 7♣ 9♠",
            "hand_desc": "9-7-5-2-A",
            "action_before": "None",
            "question": "你有9-7-5-2-A，面对open，你应该？",
            "options": [
                {"action": "Raise", "correct": false, "explanation": "9-high太弱"},
                {"action": "Call", "correct": false, "explanation": "应该fold"},
                {"action": "Fold", "correct": true, "explanation": "9-high不连接，应该fold"}
            ],
            "key_concept": "不连接的9-high要fold"
        },
        {
            "id": 9,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 3♥ 4♦ 5♣ 6♠",
            "hand_desc": "6-5-4-3-A",
            "action_before": "None",
            "question": "你有6-5-4-3-A，面对open，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "6-low强"},
                {"action": "Call", "correct": false, "explanation": "可以raise"},
                {"action": "Raise", "correct": true, "explanation": "6-low是强牌，应该raise"}
            ],
            "key_concept": "6-low是强起手牌"
        },
        {
            "id": 10,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "2♠ 3♥ 4♦ 5♣ 7♠",
            "hand_desc": "7-5-4-3-2 (无A)",
            "action_before": "None",
            "question": "你有7-5-4-3-2，没有A，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "7-low还可以"},
                {"action": "Raise", "correct": false, "explanation": "没有A，边缘"},
                {"action": "Call", "correct": true, "explanation": "7-low没有A，call看发展"}
            ],
            "key_concept": "7-low没有A是边缘牌"
        },
        {
            "id": 11,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 7♣ 8♠",
            "hand_desc": "8-7-3-2-A",
            "action_before": "Raise",
            "question": "你有8-7-3-2-A，面对raise，你应该？",
            "options": [
                {"action": "Raise", "correct": false, "explanation": "8-high不够强"},
                {"action": "Call", "correct": false, "explanation": "面对压力应该fold"},
                {"action": "Fold", "correct": true, "explanation": "8-high面对raise要fold"}
            ],
            "key_concept": "8-high面对压力要fold"
        },
        {
            "id": 12,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 4♦ 6♣ 7♠",
            "hand_desc": "7-6-4-2-A",
            "action_before": "None",
            "question": "你有7-6-4-2-A，面对open，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "7-low还可以"},
                {"action": "Raise", "correct": false, "explanation": "边缘"},
                {"action": "Call", "correct": true, "explanation": "7-low可以call"}
            ],
            "key_concept": "7-low可以call，但不强"
        },
        {
            "id": 13,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 4♣ 8♠",
            "hand_desc": "8-4-3-2-A",
            "action_before": "None",
            "question": "你有8-4-3-2-A，面对open，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "可以call"},
                {"action": "Raise", "correct": false, "explanation": "不够强"},
                {"action": "Call", "correct": true, "explanation": "8-low有A可以call"}
            ],
            "key_concept": "有A的8-low可以call"
        },
        {
            "id": 14,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 5♦ 6♣ 8♠",
            "hand_desc": "8-6-5-2-A",
            "action_before": "Raise",
            "question": "你有8-6-5-2-A，面对reraise，你应该？",
            "options": [
                {"action": "Call", "correct": false, "explanation": "应该fold"},
                {"action": "Raise", "correct": false, "explanation": "不可能"},
                {"action": "Fold", "correct": true, "explanation": "8-low面对reraise要fold"}
            ],
            "key_concept": "8-low面对压力要fold"
        },
        {
            "id": 15,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 5♣ 7♠",
            "hand_desc": "7-5-3-2-A",
            "action_before": "None",
            "question": "你有7-5-3-2-A，面对open，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "7-low强"},
                {"action": "Call", "correct": false, "explanation": "可以raise"},
                {"action": "Raise", "correct": true, "explanation": "7-low是强牌，应该raise"}
            ],
            "key_concept": "7-low是强起手牌"
        },
        {
            "id": 16,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 6♣ 7♠",
            "hand_desc": "7-6-3-2-A",
            "action_before": "Raise",
            "question": "你有7-6-3-2-A，面对raise，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "7-low可以call"},
                {"action": "Raise", "correct": false, "explanation": "边缘"},
                {"action": "Call", "correct": true, "explanation": "7-low面对raise可以call"}
            ],
            "key_concept": "7-low面对raise可以call"
        },
        {
            "id": 17,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 4♦ 5♣ 7♠",
            "hand_desc": "7-5-4-2-A",
            "action_before": "None",
            "question": "你有7-5-4-2-A，BTN位置，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "位置好可以raise"},
                {"action": "Call", "correct": false, "explanation": "BTN可以raise"},
                {"action": "Raise", "correct": true, "explanation": "7-low在BTN可以raise偷盲"}
            ],
            "key_concept": "位置好时7-low可以raise"
        },
        {
            "id": 18,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 3♥ 5♦ 6♣ 8♠",
            "hand_desc": "8-6-5-3-A",
            "action_before": "None",
            "question": "你有8-6-5-3-A，UTG位置，你应该？",
            "options": [
                {"action": "Raise", "correct": false, "explanation": "UTG要紧"},
                {"action": "Call", "correct": false, "explanation": "应该fold"},
                {"action": "Fold", "correct": true, "explanation": "UTG位置8-low要fold"}
            ],
            "key_concept": "UTG要紧，8-low fold"
        },
        {
            "id": 19,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 5♣ 5♠",
            "hand_desc": "对5",
            "action_before": "None",
            "question": "你有一对5，你应该？",
            "options": [
                {"action": "Raise", "correct": false, "explanation": "配对是bad"},
                {"action": "Call", "correct": false, "explanation": "应该fold"},
                {"action": "Fold", "correct": true, "explanation": "任何配对都是最差牌，fold"}
            ],
            "key_concept": "配对必须fold"
        },
        {
            "id": 20,
            "category": "起手牌选择",
            "stage": "Pre-Draw",
            "hand": "A♠ 2♥ 3♦ 4♣ 4♠",
            "hand_desc": "对4",
            "action_before": "None",
            "question": "你有一对4，带A-2-3，你应该？",
            "options": [
                {"action": "Call", "correct": false, "explanation": "配对bad"},
                {"action": "Raise", "correct": false, "explanation": "配对bad"},
                {"action": "Fold", "correct": true, "explanation": "任何配对都是最差牌，包括小对子，fold"}
            ],
            "key_concept": "即使有小牌，配对也要fold"
        },
        // 第一次抽牌 (21-40)
        {
            "id": 21,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 3♦ 4♣ X",
            "hand_desc": "A-2-3-4抽1张",
            "action_before": "Call",
            "question": "你有A-2-3-4，抽1张，目标是？",
            "options": [
                {"action": "抽2张", "correct": false, "explanation": "应该抽1张"},
                {"action": "Pat", "correct": false, "explanation": "需要5张牌"},
                {"action": "抽1张，要5或更低", "correct": true, "explanation": "A-2-3-4抽1张，出5就是Wheel坚果"}
            ],
            "key_concept": "A-2-3-4抽1张，目标是5"
        },
        {
            "id": 22,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 3♦ 7♣ X",
            "hand_desc": "A-2-3-7抽1张",
            "action_before": "Call",
            "question": "你有A-2-3-7，抽1张，换哪张？",
            "options": [
                {"action": "换7，目标是4/5/6", "correct": true, "explanation": "换7，目标是4/5/6，形成6-low或更好"},
                {"action": "换A，要大牌", "correct": false, "explanation": "A是最小牌，不能换"},
                {"action": "Pat", "correct": false, "explanation": "只有4张牌"}
            ],
            "key_concept": "换最大牌，目标是更小"
        },
        {
            "id": 23,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 6♦ 7♣ X",
            "hand_desc": "A-2-6-7抽1张",
            "action_before": "Call",
            "question": "你有A-2-6-7，抽1张，换哪张？",
            "options": [
                {"action": "换A", "correct": false, "explanation": "A是最小的"},
                {"action": "换7，目标是3/4/5", "correct": true, "explanation": "换最大的7，目标是3/4/5"},
                {"action": "换6和7", "correct": false, "explanation": "只能抽1张"}
            ],
            "key_concept": "换最大牌，目标是连接"
        },
        {
            "id": 24,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 3♥ 4♦ 5♣ X",
            "hand_desc": "A-3-4-5抽1张",
            "action_before": "Call",
            "question": "你有A-3-4-5，抽1张，目标是？",
            "options": [
                {"action": "要2，形成5-high", "correct": true, "explanation": "A-2-3-4-5是Wheel坚果，要2"},
                {"action": "要6，形成6-high", "correct": false, "explanation": "2比6更好"},
                {"action": "要7，形成7-high", "correct": false, "explanation": "2最好"}
            ],
            "key_concept": "A-3-4-5要2，形成Wheel"
        },
        {
            "id": 25,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 5♦ 8♣ X",
            "hand_desc": "A-2-5-8抽1张",
            "action_before": "Call",
            "question": "你有A-2-5-8，抽1张，换哪张？",
            "options": [
                {"action": "换8，目标是3/4/6/7", "correct": true, "explanation": "换8，目标是形成更小的5张牌"},
                {"action": "换A", "correct": false, "explanation": "A最小"},
                {"action": "换5", "correct": false, "explanation": "8比5大"}
            ],
            "key_concept": "换最大牌"
        },
        {
            "id": 26,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 3♦ 9♣ X",
            "hand_desc": "A-2-3-9抽1张",
            "action_before": "Call",
            "question": "你有A-2-3-9，抽1张，换哪张？",
            "options": [
                {"action": "换9，目标是4/5/6/7/8", "correct": true, "explanation": "换9，目标是连接牌"},
                {"action": "Pat", "correct": false, "explanation": "9太大"},
                {"action": "换3", "correct": false, "explanation": "9更大"}
            ],
            "key_concept": "换最大牌"
        },
        {
            "id": 27,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "2♠ 3♥ 4♦ 5♣ X",
            "hand_desc": "2-3-4-5抽1张 (无A)",
            "action_before": "Call",
            "question": "你有2-3-4-5，没有A，抽1张，目标是？",
            "options": [
                {"action": "要A，形成Wheel", "correct": true, "explanation": "出A就是Wheel坚果"},
                {"action": "要6，形成6-high", "correct": false, "explanation": "A比6更好"},
                {"action": "要7，形成7-high", "correct": false, "explanation": "A最好"}
            ],
            "key_concept": "无A的2-3-4-5，要A形成Wheel"
        },
        {
            "id": 28,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 7♦ 8♣ X",
            "hand_desc": "A-2-7-8抽1张",
            "action_before": "Call",
            "question": "你有A-2-7-8，抽1张，怎么换？",
            "options": [
                {"action": "换8，目标是3/4/5/6", "correct": true, "explanation": "换8，目标是连接"},
                {"action": "换7和8", "correct": false, "explanation": "只能换1张"},
                {"action": "Pat", "correct": false, "explanation": "8太大"}
            ],
            "key_concept": "换最大牌"
        },
        {
            "id": 29,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 3♦ 3♣ X",
            "hand_desc": "A-2-3-3 (对3)",
            "action_before": "Call",
            "question": "你有A-2-3-3，有一对3，你应该？",
            "options": [
                {"action": "换1张3，目标是4/5", "correct": true, "explanation": "换一张3，目标是形成低牌"},
                {"action": "Pat", "correct": false, "explanation": "配对不好但有A-2-3"},
                {"action": "换A", "correct": false, "explanation": "A最小"}
            ],
            "key_concept": "有小对子时换一张，看能否改善"
        },
        {
            "id": 30,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 4♥ 5♦ 6♣ X",
            "hand_desc": "A-4-5-6抽1张",
            "action_before": "Call",
            "question": "你有A-4-5-6，抽1张，目标是？",
            "options": [
                {"action": "要2，形成6-low", "correct": true, "explanation": "A-2-4-5-6是6-low，很强"},
                {"action": "要3，形成6-low", "correct": true, "explanation": "A-3-4-5-6也是6-low"},
                {"action": "以上都对", "correct": true, "explanation": "要2或3都可以形成6-low"}
            ],
            "key_concept": "A-4-5-6要2或3"
        },
        {
            "id": 31,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 6♦ 9♣ X",
            "hand_desc": "A-2-6-9抽1张",
            "action_before": "Call",
            "question": "你有A-2-6-9，面对bet，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "可以call抽1张"},
                {"action": "Call换9", "correct": true, "explanation": "call换9，目标是3/4/5/7/8"},
                {"action": "Raise", "correct": false, "explanation": "9太大"}
            ],
            "key_concept": "有A-2可以call换牌"
        },
        {
            "id": 32,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 5♥ 6♦ 7♣ X",
            "hand_desc": "A-5-6-7抽1张",
            "action_before": "Call",
            "question": "你有A-5-6-7，抽1张，换哪张？",
            "options": [
                {"action": "换7，目标是2/3/4", "correct": true, "explanation": "换7，目标是连接"},
                {"action": "换A", "correct": false, "explanation": "A最小"},
                {"action": "换5", "correct": false, "explanation": "7更大"}
            ],
            "key_concept": "换最大牌"
        },
        {
            "id": 33,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 3♦ 6♣ X",
            "hand_desc": "A-2-3-6抽1张",
            "action_before": "Call",
            "question": "你有A-2-3-6，抽1张，目标是？",
            "options": [
                {"action": "要4或5，形成6-low或更好", "correct": true, "explanation": "要4或5，可以形成很好低牌"},
                {"action": "要7，形成7-low", "correct": false, "explanation": "4/5更好"},
                {"action": "要8，形成8-low", "correct": false, "explanation": "4/5更好"}
            ],
            "key_concept": "A-2-3-6要4或5"
        },
        {
            "id": 34,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 4♦ 7♣ X",
            "hand_desc": "A-2-4-7抽1张",
            "action_before": "Call",
            "question": "你有A-2-4-7，抽1张，换哪张？",
            "options": [
                {"action": "换7，目标是3/5/6", "correct": true, "explanation": "换7，目标是连接"},
                {"action": "换4", "correct": false, "explanation": "7更大"},
                {"action": "换2", "correct": false, "explanation": "7更大"}
            ],
            "key_concept": "换最大牌"
        },
        {
            "id": 35,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 3♥ 4♦ 6♣ X",
            "hand_desc": "A-3-4-6抽1张",
            "action_before": "Call",
            "question": "你有A-3-4-6，抽1张，目标是？",
            "options": [
                {"action": "要2或5，形成6-low", "correct": true, "explanation": "要2或5，形成A-2-3-4-6或A-3-4-5-6，都是6-low"},
                {"action": "要7", "correct": false, "explanation": "2/5更好"},
                {"action": "Pat", "correct": false, "explanation": "只有4张牌"}
            ],
            "key_concept": "A-3-4-6要2或5"
        },
        {
            "id": 36,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "2♠ 3♥ 5♦ 7♣ X",
            "hand_desc": "2-3-5-7抽1张 (无A)",
            "action_before": "Call",
            "question": "你有2-3-5-7，没有A，抽1张，目标是？",
            "options": [
                {"action": "要A，形成7-low", "correct": true, "explanation": "出A可以形成很好的7-low"},
                {"action": "要4，形成7-low", "correct": true, "explanation": "出4也可以"},
                {"action": "以上都对", "correct": true, "explanation": "要A或4都可以"}
            ],
            "key_concept": "无A时出A是最好结果"
        },
        {
            "id": 37,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 8♦ 9♣ X",
            "hand_desc": "A-2-8-9抽1张",
            "action_before": "Raise",
            "question": "你有A-2-8-9，面对raise，你应该？",
            "options": [
                {"action": "Call换9", "correct": false, "explanation": "8-9太大，应该fold"},
                {"action": "Fold", "correct": true, "explanation": "8-9太大，即使有A-2也要fold"},
                {"action": "Raise", "correct": false, "explanation": "不可能"}
            ],
            "key_concept": "有2张大牌时fold"
        },
        {
            "id": 38,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 3♦ 5♣ X",
            "hand_desc": "A-2-3-5抽1张",
            "action_before": "Call",
            "question": "你有A-2-3-5，抽1张，目标是？",
            "options": [
                {"action": "要4，形成Wheel坚果", "correct": true, "explanation": "A-2-3-4-5是Wheel！"},
                {"action": "要6，形成6-low", "correct": false, "explanation": "4更好"},
                {"action": "Pat", "correct": false, "explanation": "只有4张牌"}
            ],
            "key_concept": "A-2-3-5要4就是Wheel"
        },
        {
            "id": 39,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 7♦ 7♣ X",
            "hand_desc": "A-2-7-7 (对7)",
            "action_before": "Call",
            "question": "你有A-2-7-7，有一对7，你应该？",
            "options": [
                {"action": "换一张7，目标是3/4/5/6", "correct": true, "explanation": "换一张7，看能否改善"},
                {"action": "Pat", "correct": false, "explanation": "配对不好"},
                {"action": "Fold", "correct": false, "explanation": "可以抽一张试试"}
            ],
            "key_concept": "有小对子时换一张试试"
        },
        {
            "id": 40,
            "category": "第一次抽牌",
            "stage": "Draw 1",
            "hand": "A♠ 2♥ 3♦ 7♣ X",
            "hand_desc": "A-2-3-7抽1张",
            "action_before": "Call",
            "question": "你有A-2-3-7，面对reraise，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "A-2-3很强，可以call"},
                {"action": "Call换7", "correct": true, "explanation": "A-2-3很强，call换7"},
                {"action": "Raise", "correct": false, "explanation": "对方reraise了"}
            ],
            "key_concept": "有A-2-3可以call压力"
        },
        // Pat决策 (41-50)
        {
            "id": 41,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "A♠ 2♥ 3♦ 4♣ 5♠",
            "hand_desc": "5-4-3-2-A (Wheel)",
            "action_before": "Call",
            "question": "你有Wheel坚果，对手抽3张，你应该？",
            "options": [
                {"action": "抽牌", "correct": false, "explanation": "坚果不用抽"},
                {"action": "Pat", "correct": true, "explanation": "Wheel是绝对坚果，Pat stand pat"},
                {"action": "Fold", "correct": false, "explanation": "不可能"}
            ],
            "key_concept": "Wheel是坚果，必须Pat"
        },
        {
            "id": 42,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "A♠ 2♥ 3♦ 5♣ 6♠",
            "hand_desc": "6-5-3-2-A",
            "action_before": "Call",
            "question": "你有6-low，对手抽2张，你应该？",
            "options": [
                {"action": "抽1张", "correct": false, "explanation": "6-low很强"},
                {"action": "Pat", "correct": true, "explanation": "6-low很强，对手抽2张说明牌不好，Pat"},
                {"action": "Fold", "correct": false, "explanation": "不可能"}
            ],
            "key_concept": "6-low面对抽牌可以Pat"
        },
        {
            "id": 43,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "A♠ 2♥ 3♦ 4♣ 7♠",
            "hand_desc": "7-4-3-2-A",
            "action_before": "Call",
            "question": "你有7-low，对手Pat，你应该？",
            "options": [
                {"action": "Pat", "correct": false, "explanation": "对手Pat可能有更强牌"},
                {"action": "抽1张换7", "correct": true, "explanation": "对手Pat说明牌好，尝试改善"},
                {"action": "Fold", "correct": false, "explanation": "还可以抽"}
            ],
            "key_concept": "对手Pat时考虑抽牌改善"
        },
        {
            "id": 44,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "A♠ 2♥ 6♦ 7♣ 8♠",
            "hand_desc": "8-7-6-2-A",
            "action_before": "Call",
            "question": "你有8-low，对手抽1张，你应该？",
            "options": [
                {"action": "Pat", "correct": false, "explanation": "8-low不够强"},
                {"action": "抽1张换8", "correct": true, "explanation": "8-low面对抽牌应该改善"},
                {"action": "Fold", "correct": false, "explanation": "可以抽"}
            ],
            "key_concept": "8-low面对抽牌要抽"
        },
        {
            "id": 45,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "A♠ 3♥ 4♦ 5♣ 7♠",
            "hand_desc": "7-5-4-3-A",
            "action_before": "Call",
            "question": "你有7-low，对手抽3张，你应该？",
            "options": [
                {"action": "抽1张", "correct": false, "explanation": "对手抽3张说明牌很差"},
                {"action": "Pat", "correct": true, "explanation": "对手抽3张说明牌很差，7-low足够赢"},
                {"action": "Fold", "correct": false, "explanation": "不可能"}
            ],
            "key_concept": "对手抽很多张时，中等牌可以Pat"
        },
        {
            "id": 46,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "A♠ 2♥ 5♦ 6♣ 7♠",
            "hand_desc": "7-6-5-2-A",
            "action_before": "Call",
            "question": "你有7-low，对手allin，你应该？",
            "options": [
                {"action": "抽1张", "correct": false, "explanation": "allin时不能抽"},
                {"action": "Pat跟注", "correct": false, "explanation": "7-low可能不够"},
                {"action": "Fold", "correct": true, "explanation": "对手allin可能有好牌，7-low fold"}
            ],
            "key_concept": "面对allin，7-low要小心"
        },
        {
            "id": 47,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "2♠ 3♥ 4♦ 5♣ 6♠",
            "hand_desc": "6-5-4-3-2 (无A)",
            "action_before": "Call",
            "question": "你有6-5-4-3-2，没有A，对手抽2张，你应该？",
            "options": [
                {"action": "抽1张找A", "correct": false, "explanation": "6-low已经很强"},
                {"action": "Pat", "correct": true, "explanation": "6-low足够强，Pat"},
                {"action": "Fold", "correct": false, "explanation": "不可能"}
            ],
            "key_concept": "无A的6-low也很强"
        },
        {
            "id": 48,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "A♠ 2♥ 4♦ 6♣ 8♠",
            "hand_desc": "8-6-4-2-A",
            "action_before": "Call",
            "question": "你有8-low，对手check，你应该？",
            "options": [
                {"action": "Pat", "correct": false, "explanation": "8-low不够强"},
                {"action": "抽1张换8", "correct": true, "explanation": "8-low应该抽改善"},
                {"action": "Fold", "correct": false, "explanation": "可以抽"}
            ],
            "key_concept": "8-low要主动改善"
        },
        {
            "id": 49,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "A♠ 2♥ 3♦ 6♣ 6♠",
            "hand_desc": "6-6-3-2-A (对6)",
            "action_before": "Call",
            "question": "你有对6，带A-2-3，你应该？",
            "options": [
                {"action": "Pat", "correct": false, "explanation": "配对bad"},
                {"action": "换1张6，目标是4/5", "correct": true, "explanation": "换一张6看能否改善"},
                {"action": "Fold", "correct": false, "explanation": "可以抽"}
            ],
            "key_concept": "有小对子时换一张试试"
        },
        {
            "id": 50,
            "category": "Pat决策",
            "stage": "Draw 2",
            "hand": "A♠ 2♥ 3♦ 4♣ 6♠",
            "hand_desc": "6-4-3-2-A",
            "action_before": "Call",
            "question": "你有6-low，对手reraise allin，你应该？",
            "options": [
                {"action": "Fold", "correct": false, "explanation": "6-low很强，可以call"},
                {"action": "Pat call", "correct": true, "explanation": "6-low很强，Pat call allin"},
                {"action": "抽1张", "correct": false, "explanation": "不能抽"}
            ],
            "key_concept": "6-low可以call allin"
        },
        // 摊牌决策 (51-60)
        {
            "id": 51,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "A♠ 2♥ 3♦ 4♣ 5♠",
            "hand_desc": "Wheel",
            "opponent": "6-low",
            "question": "你有Wheel，对手6-low，结果？",
            "options": [
                {"action": "输", "correct": false, "explanation": "Wheel赢"},
                {"action": "平局", "correct": false, "explanation": "Wheel赢"},
                {"action": "赢", "correct": true, "explanation": "Wheel是A-5坚果，赢6-low"}
            ],
            "key_concept": "Wheel是A-5最强牌"
        },
        {
            "id": 52,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "A♠ 2♥ 3♦ 5♣ 7♠",
            "hand_desc": "7-5-3-2-A",
            "opponent": "7-6-4-3-A",
            "question": "你有7-5-3-2-A，对手7-6-4-3-A，谁赢？",
            "options": [
                {"action": "对手赢", "correct": false, "explanation": "你赢"},
                {"action": "平局", "correct": false, "explanation": "比第二大牌"},
                {"action": "你赢", "correct": true, "explanation": "都比7，比第二：5 vs 6，5更小，你赢"}
            ],
            "key_concept": "从最大牌开始比，5<6所以你赢"
        },
        {
            "id": 53,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "A♠ 3♥ 4♦ 5♣ 7♠",
            "hand_desc": "7-5-4-3-A",
            "opponent": "7-5-4-2-A",
            "question": "你有7-5-4-3-A，对手7-5-4-2-A，谁赢？",
            "options": [
                {"action": "你赢", "correct": false, "explanation": "对手赢"},
                {"action": "平局", "correct": false, "explanation": "比第四张"},
                {"action": "对手赢", "correct": true, "explanation": "前3张相同，第4张3 vs 2，2更小，对手赢"}
            ],
            "key_concept": "从大到小依次比，2<3"
        },
        {
            "id": 54,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "A♠ 2♥ 5♦ 6♣ 8♠",
            "hand_desc": "8-6-5-2-A",
            "opponent": "8-6-5-2-A",
            "question": "你有8-6-5-2-A，对手也是8-6-5-2-A，结果？",
            "options": [
                {"action": "你赢", "correct": false, "explanation": "平局"},
                {"action": "平局分池", "correct": true, "explanation": "完全相同，平分底池"},
                {"action": "对手赢", "correct": false, "explanation": "平局"}
            ],
            "key_concept": "相同牌型平分底池"
        },
        {
            "id": 55,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "2♠ 3♥ 4♦ 5♣ 6♠",
            "hand_desc": "6-5-4-3-2 (无A)",
            "opponent": "6-5-4-3-A",
            "question": "你有6-5-4-3-2，对手6-5-4-3-A，谁赢？",
            "options": [
                {"action": "对手赢", "correct": true, "explanation": "都比6-5-4-3，比最后一张：2 vs A，A更小，对手赢"},
                {"action": "你赢", "correct": false, "explanation": "A<2"},
                {"action": "平局", "correct": false, "explanation": "A<2"}
            ],
            "key_concept": "A是最小牌，A<2"
        },
        {
            "id": 56,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "A♠ 2♥ 3♦ 4♣ 8♠",
            "hand_desc": "8-4-3-2-A",
            "opponent": "7-6-5-4-3",
            "question": "你有8-4-3-2-A，对手7-6-5-4-3，谁赢？",
            "options": [
                {"action": "你赢", "correct": false, "explanation": "对手赢"},
                {"action": "对手赢", "correct": true, "explanation": "比最大牌：8 vs 7，7更小，对手赢"},
                {"action": "平局", "correct": false, "explanation": "8>7"}
            ],
            "key_concept": "比最大牌，7<8所以7-low赢"
        },
        {
            "id": 57,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "A♠ 2♥ 3♦ 7♣ 7♠",
            "hand_desc": "对7",
            "opponent": "6-low",
            "question": "你有一对7，对手6-low，结果？",
            "options": [
                {"action": "你赢", "correct": false, "explanation": "配对是bad hand"},
                {"action": "输", "correct": true, "explanation": "任何配对都是A-5最差牌，输给任何低牌"},
                {"action": "平局", "correct": false, "explanation": "配对输"}
            ],
            "key_concept": "配对输给任何有效低牌"
        },
        {
            "id": 58,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "A♠ 2♥ 3♦ 4♣ 6♠",
            "hand_desc": "6-4-3-2-A",
            "opponent": "6-5-4-3-2",
            "question": "你有6-4-3-2-A，对手6-5-4-3-2，谁赢？",
            "options": [
                {"action": "对手赢", "correct": false, "explanation": "你赢"},
                {"action": "你赢", "correct": true, "explanation": "都比6，比第二：4 vs 5，4更小，你赢"},
                {"action": "平局", "correct": false, "explanation": "4<5"}
            ],
            "key_concept": "6-4-3-2-A赢6-5-4-3-2"
        },
        {
            "id": 59,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "A♠ 2♥ 6♦ 7♣ 8♠",
            "hand_desc": "8-7-6-2-A",
            "opponent": "8-7-6-3-A",
            "question": "你有8-7-6-2-A，对手8-7-6-3-A，谁赢？",
            "options": [
                {"action": "对手赢", "correct": false, "explanation": "你赢"},
                {"action": "你赢", "correct": true, "explanation": "前3张相同，第4张2 vs 3，2更小，你赢"},
                {"action": "平局", "correct": false, "explanation": "2<3"}
            ],
            "key_concept": "2<3，所以2赢"
        },
        {
            "id": 60,
            "category": "摊牌决策",
            "stage": "Showdown",
            "hand": "A♠ 2♥ 3♦ 6♣ 9♠",
            "hand_desc": "9-6-3-2-A",
            "opponent": "Fold",
            "question": "你有9-low，对手fold，结果？",
            "options": [
                {"action": "输", "correct": false, "explanation": "对手fold"},
                {"action": "赢底池", "correct": true, "explanation": "对手fold，你赢底池"},
                {"action": "平局", "correct": false, "explanation": "赢底池"}
            ],
            "key_concept": "对手fold你就赢"
        }
    ]
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = A5_DATA;
}
