#!/usr/bin/env python3
"""
2-7 Triple Draw 200题题库生成器
自动生成200个2-7练习场景
"""

import json
import random

def generate_27_scenarios():
    """生成200个2-7 Triple Draw练习场景"""
    scenarios = []
    
    # 各种手牌类型
    premium_hands = [
        ("7♠5♥4♦3♣2♠", "7-5-4-3-2 (不同花)", "Number 1"),
        ("7♠6♥4♦3♣2♠", "7-6-4-3-2", "几乎nuts"),
        ("8♠5♥4♦3♣2♠", "8-5-4-3-2", "强牌"),
        ("8♠6♥4♦3♣2♠", "8-6-4-3-2", "强牌"),
        ("9♠5♥4♦3♣2♠", "9-5-4-3-2", "强牌"),
    ]
    
    good_hands = [
        ("9♠6♥4♦3♣2♠", "9-6-4-3-2", "好牌"),
        ("9♠7♥5♦3♣2♠", "9-7-5-3-2", "好牌"),
        ("9♠8♥5♦3♣2♠", "9-8-5-3-2", "可玩"),
        ("T♠5♥4♦3♣2♠", "T-5-4-3-2", "边缘"),
        ("T♠6♥4♦3♣2♠", "T-6-4-3-2", "边缘"),
    ]
    
    pair_hands = [
        ("7♠7♥4♦3♣2♠", "一对7", "有对子"),
        ("8♠8♥4♦3♣2♠", "一对8", "有对子"),
        ("5♠5♥4♦3♣2♠", "一对5", "有对子"),
        ("7♠7♥7♦3♣2♠", "三张7", "三张"),
        ("6♠6♥6♦5♣4♠", "三张6", "三张"),
    ]
    
    high_card_hands = [
        ("K♠7♥4♦3♣2♠", "K-7-4-3-2", "单张K"),
        ("Q♠7♥4♦3♣2♠", "Q-7-4-3-2", "单张Q"),
        ("J♠7♥4♦3♣2♠", "J-7-4-3-2", "单张J"),
        ("A♠7♥4♦3♣2♠", "A-7-4-3-2", "单张A"),
        ("K♠Q♥4♦3♣2♠", "K-Q-4-3-2", "两张高牌"),
    ]
    
    straight_hands = [
        ("6♠5♥4♦3♣2♠", "6-5-4-3-2", "顺子!"),
        ("7♠6♥5♦4♣3♠", "7-6-5-4-3", "顺子!"),
        ("8♠7♥6♦5♣4♠", "8-7-6-5-4", "顺子!"),
    ]
    
    bad_hands = [
        ("K♠Q♥J♦9♣7♠", "K-Q-J-9-7", "太差"),
        ("A♠K♥Q♦J♣9♠", "A-K-Q-J-9", "太差"),
        ("Q♠T♥8♦6♣4♠", "Q-T-8-6-4", "太差"),
    ]
    
    positions = ['UTG', 'UTG+1', 'MP', 'HJ', 'CO', 'BTN', 'SB', 'BB']
    stages = ['Pre-draw', 'Draw 1', 'Draw 2', 'Draw 3', 'Showdown']
    
    id_counter = 1
    
    # ========== 起手牌选择 (50题) ==========
    
    # Premium hands (10题)
    for i in range(10):
        hand, desc, note = random.choice(premium_hands)
        pos = random.choice(positions[:5])
        
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": "Pre-draw",
            "hand": hand,
            "hand_desc": desc,
            "action_before": "None",
            "question": f"你有{note}，应该如何行动?",
            "options": [
                {"action": "Raise", "correct": True, "explanation": f"{note}是顶级牌，必须Raise"},
                {"action": "Call", "correct": False, "explanation": "太弱了，应该Raise"},
                {"action": "Fold", "correct": False, "explanation": "绝对不可以Fold"}
            ],
            "key_concept": f"{note}是2-7中最好的牌"
        })
        id_counter += 1
    
    # Good hands (10题)
    for i in range(10):
        hand, desc, note = random.choice(good_hands)
        pos = random.choice(positions)
        is_late = positions.index(pos) >= 4
        correct = "Raise" if is_late else ("Raise" if "9" in desc else "Call")
        
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": "Pre-draw",
            "hand": hand,
            "hand_desc": desc,
            "action_before": "None",
            "question": f"你有{desc}，应该如何行动?",
            "options": [
                {"action": correct, "correct": True, "explanation": f"{desc}在{pos}{'可以Raise' if correct == 'Raise' else '应该Call'}"},
                {"action": "Fold", "correct": False, "explanation": f"{desc}可以玩"},
                {"action": "Raise" if correct == "Call" else "Call", "correct": False, "explanation": "错误决策"}
            ],
            "key_concept": "9-low以上是好牌"
        })
        id_counter += 1
    
    # Pair hands (10题)
    for i in range(10):
        hand, desc, note = random.choice(pair_hands)
        pos = random.choice(positions)
        
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": "Pre-draw",
            "hand": hand,
            "hand_desc": desc,
            "action_before": "None",
            "question": f"你有{desc}，应该如何行动?",
            "options": [
                {"action": "Call", "correct": True, "explanation": "有对子Call，换牌打破对子"},
                {"action": "Raise", "correct": False, "explanation": "有对子不是强牌"},
                {"action": "Fold", "correct": False, "explanation": "有小牌可以Call"}
            ],
            "key_concept": "有对子Call换牌"
        })
        id_counter += 1
    
    # High card hands (10题)
    for i in range(10):
        hand, desc, note = random.choice(high_card_hands)
        pos = random.choice(positions)
        has_many_low = sum(1 for c in hand if c in '234567') >= 3
        correct = "Call" if has_many_low else "Fold"
        
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": "Pre-draw",
            "hand": hand,
            "hand_desc": desc,
            "action_before": "None",
            "question": f"你有{desc}，应该如何行动?",
            "options": [
                {"action": correct, "correct": True, "explanation": f"{desc}{'有小牌可以Call' if has_many_low else '高牌太多Fold'}"},
                {"action": "Raise", "correct": False, "explanation": "边缘牌不能Raise"},
                {"action": "Fold" if correct == "Call" else "Call", "correct": False, "explanation": "错误决策"}
            ],
            "key_concept": "看小牌数量决策"
        })
        id_counter += 1
    
    # Straight hands (5题) - 陷阱题
    for i in range(5):
        hand, desc, note = random.choice(straight_hands)
        
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": "Pre-draw",
            "hand": hand,
            "hand_desc": desc,
            "action_before": "None",
            "question": f"注意！这是什么牌型?",
            "options": [
                {"action": "Fold", "correct": True, "explanation": f"{desc}是顺子！2-7中最差的牌型！"},
                {"action": "Raise (强牌)", "correct": False, "explanation": "顺子是最差牌！"},
                {"action": "Call", "correct": False, "explanation": "顺子必须全部换掉"}
            ],
            "key_concept": "顺子在2-7中是最差牌！"
        })
        id_counter += 1
    
    # Bad hands (5题)
    for i in range(5):
        hand, desc, note = random.choice(bad_hands)
        
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": "Pre-draw",
            "hand": hand,
            "hand_desc": desc,
            "action_before": "None",
            "question": f"你有{desc}，应该如何行动?",
            "options": [
                {"action": "Fold", "correct": True, "explanation": f"{desc}牌太差"},
                {"action": "Call", "correct": False, "explanation": "换牌成本太高"},
                {"action": "Raise", "correct": False, "explanation": "边缘牌不能Raise"}
            ],
            "key_concept": "高牌太多Fold"
        })
        id_counter += 1
    
    # ========== 第一次换牌 (50题) ==========
    
    draw1_scenarios = [
        ("7♠5♥4♦3♣2♠", "7-5-4-3-2", "Pat", "最强牌不需要换"),
        ("8♠5♥4♦3♣2♠", "8-5-4-3-2", "Pat", "8-low可以Pat"),
        ("9♠5♥4♦3♣2♠", "9-5-4-3-2", "换1张", "9可以换争取更好"),
        ("K♠7♥4♦3♣2♠", "K-7-4-3-2", "换1张", "换1张K"),
        ("Q♠7♥4♦3♣2♠", "Q-7-4-3-2", "换1张", "换1张Q"),
        ("J♠7♥4♦3♣2♠", "J-7-4-3-2", "换1张", "换1张J"),
        ("T♠7♥4♦3♣2♠", "T-7-4-3-2", "换1张", "换1张T"),
        ("A♠7♥4♦3♣2♠", "A-7-4-3-2", "换1张", "A是高牌，必须换"),
        ("8♠8♥4♦3♣2♠", "一对8", "换3张", "换3张打破对子"),
        ("7♠7♥4♦3♣2♠", "一对7", "换3张", "换3张打破对子"),
        ("K♠Q♥4♦3♣2♠", "K-Q-4-3-2", "换2张", "换2张高牌"),
        ("9♠7♥5♦3♣2♠", "9-7-5-3-2", "换1张", "换1张9"),
        ("9♠8♥5♦3♣2♠", "9-8-5-3-2", "换1张", "换1张9或8"),
        ("T♠8♥5♦3♣2♠", "T-8-5-3-2", "换2张", "换2张大牌"),
    ]
    
    for i in range(50):
        hand, desc, correct, explanation = random.choice(draw1_scenarios)
        
        options = [
            {"action": correct, "correct": True, "explanation": explanation},
            {"action": "Pat" if correct != "Pat" else "换1张", "correct": False, "explanation": "错误决策"},
        ]
        
        if correct == "换1张":
            options.append({"action": "换3张", "correct": False, "explanation": "太多了"})
        elif correct == "换3张":
            options.append({"action": "换1张", "correct": False, "explanation": "不够打破对子"})
        else:
            options.append({"action": "换2张", "correct": False, "explanation": "错误决策"})
        
        scenarios.append({
            "id": id_counter,
            "category": "第一次换牌",
            "stage": "Draw 1",
            "hand": hand,
            "hand_desc": desc,
            "action_before": "Pre-draw call/raise",
            "question": f"你有{desc}，应该换几张?",
            "options": options,
            "key_concept": explanation
        })
        id_counter += 1
    
    # ========== Pat决策 (30题) ==========
    pat_scenarios = [
        ("7♠5♥4♦3♣2♠", "7-5-4-3-2", "Pat", "Number 1一直Pat"),
        ("8♠5♥4♦3♣2♠", "8-5-4-3-2", "Pat", "8-low可以Pat"),
        ("9♠5♥4♦3♣2♠", "9-5-4-3-2", "Pat", "9可以Pat"),
        ("9♠6♥4♦3♣2♠", "9-6-4-3-2", "换1张", "对手Pat时换9争取更好"),
        ("T♠5♥4♦3♣2♠", "T-5-4-3-2", "换1张", "10建议换"),
        ("8♠6♥4♦3♣2♠", "8-6-4-3-2", "Pat", "8-low强牌"),
    ]
    
    for i in range(30):
        hand, desc, correct, explanation = random.choice(pat_scenarios)
        opp_action = random.choice(["对手Pat", "对手换3张", "对手换1张"])
        
        scenarios.append({
            "id": id_counter,
            "category": "Pat决策",
            "stage": random.choice(["Draw 2", "Draw 3"]),
            "hand": hand,
            "hand_desc": desc,
            "action_before": opp_action,
            "question": f"{opp_action}，你有{desc}，应该?",
            "options": [
                {"action": correct, "correct": True, "explanation": explanation},
                {"action": "Pat" if correct != "Pat" else "换1张", "correct": False, "explanation": "错误决策"},
            ],
            "key_concept": explanation
        })
        id_counter += 1
    
    # ========== Showdown (30题) ==========
    showdown_scenarios = [
        ("7♠5♥4♦3♣2♠", "7-5-4-3-2", "8♠6♥4♦3♣2♠", "8-6-4-3-2", "你赢", "7 < 8"),
        ("8♠5♥4♦3♣2♠", "8-5-4-3-2", "8♠6♥4♦3♣2♠", "8-6-4-3-2", "你赢", "5 < 6"),
        ("9♠5♥4♦3♣2♠", "9-5-4-3-2", "8♠6♥4♦3♣2♠", "8-6-4-3-2", "对手赢", "8 < 9"),
        ("A♠7♥5♦3♣2♠", "A-7-5-3-2", "9♠8♥6♦4♣2♠", "9-8-6-4-2", "对手赢", "A是高牌"),
        ("6♠5♥4♦3♣2♠", "6-5-4-3-2", "任何", "顺子", "对手赢", "顺子是最差牌"),
    ]
    
    for i in range(30):
        your_hand, your_desc, opp_hand, opp_desc, correct, explanation = random.choice(showdown_scenarios)
        
        scenarios.append({
            "id": id_counter,
            "category": "Showdown",
            "stage": "Showdown",
            "hand": your_hand,
            "hand_desc": your_desc,
            "action_before": f"对手show {opp_desc}",
            "question": f"你有{your_desc}，对手{opp_desc}，谁赢?",
            "options": [
                {"action": correct, "correct": True, "explanation": explanation},
                {"action": "对手赢" if correct == "你赢" else "你赢", "correct": False, "explanation": "错误"},
            ],
            "key_concept": explanation
        })
        id_counter += 1
    
    # ========== 第二/三次换牌 (40题) ==========
    for i in range(40):
        hand, desc = random.choice([
            ("J♠7♥5♦3♣2♠", "J-7-5-3-2"),
            ("9♠8♥5♦3♣2♠", "9-8-5-3-2"),
            ("T♠7♥5♦3♣2♠", "T-7-5-3-2"),
            ("Q♠8♥5♦3♣2♠", "Q-8-5-3-2"),
            ("K♠7♥5♦3♣2♠", "K-7-5-3-2"),
        ])
        
        has_big = any(c in hand for c in 'KQJTA')
        correct = "换1张" if has_big else "Pat"
        
        scenarios.append({
            "id": id_counter,
            "category": random.choice(["第二次换牌", "第三次换牌"]),
            "stage": random.choice(["Draw 2", "Draw 3"]),
            "hand": hand,
            "hand_desc": desc,
            "action_before": "继续抽牌",
            "question": f"你有{desc}，应该?",
            "options": [
                {"action": correct, "correct": True, "explanation": "有大牌继续换" if has_big else "可以Pat"},
                {"action": "Pat" if correct == "换1张" else "换1张", "correct": False, "explanation": "错误决策"},
            ],
            "key_concept": "看大牌数量决策"
        })
        id_counter += 1
    
    return scenarios

# 生成题库
scenarios = generate_27_scenarios()

# 保存到JSON
output = {
    "metadata": {
        "game": "2-7 Triple Draw",
        "total_scenarios": len(scenarios),
        "categories": ["起手牌选择", "第一次换牌", "Pat决策", "Showdown", "第二次换牌", "第三次换牌"],
        "created": "2026-03-06"
    },
    "scenarios": scenarios
}

with open('/root/.openclaw/workspace/poker-trainer-web/triple_draw_data_200.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print(f"✅ 已生成 {len(scenarios)} 个2-7 Triple Draw练习场景")
print(f"📁 保存至: triple_draw_data_200.json")
