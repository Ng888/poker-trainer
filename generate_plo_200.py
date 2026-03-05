#!/usr/bin/env python3
"""
PLO MTT 200题题库生成器
自动生成200个PLO练习场景
"""

import json
import random

def generate_plo_scenarios():
    """生成200个PLO MTT练习场景"""
    scenarios = []
    
    # 起手牌组合 (所有可能的PLO起手)
    ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
    suits = ['♠', '♥', '♦', '♣']
    
    # Tier 1-4 起手牌定义
    premium_hands = [
        ("AAKK", "双高对"), ("AAQQ", "双高对"), ("AAJJ", "双高对"),
        ("KKQQ", "双高对"), ("AAKQ", "AA+高牌"), ("AAKJ", "AA+高牌"),
        ("AAJT", "AA+连接"), ("AKQJ", "四高牌"), ("AKQT", "四高牌"),
    ]
    
    strong_hands = [
        ("AA", "AA+小牌"), ("KK", "KK"), ("QQ", "QQ"),
        ("AKQ", "三高牌"), ("AKJ", "三高牌"), ("AQJ", "三高牌"),
        ("KQJT", "四连接"), ("QJT9", "四连接"), ("JT98", "四连接"),
    ]
    
    speculative_hands = [
        ("JJ", "JJ"), ("TT", "TT"), ("99", "99"),
        ("T987", "四连接"), ("9876", "四连接"), ("8765", "四连接"),
        ("AK", "AK"), ("AQ", "AQ"), ("AJ", "AJ"),
        ("KQ", "KQ"), ("KJ", "KJ"), ("QJ", "QJ"),
    ]
    
    trash_hands = [
        ("AA72", "AA小牌"), ("AK72", "散牌"), ("AQ62", "散牌"),
        ("KJT3", "不连接"), ("Q952", "散牌"), ("J843", "散牌"),
    ]
    
    positions = ['UTG', 'UTG+1', 'MP', 'HJ', 'CO', 'BTN', 'SB']
    stages = ['早期', '中期', '后期', '泡沫期', 'Final Table']
    
    # ========== 起手牌选择 (60题) ==========
    id_counter = 1
    
    # Premium hands - 任何位置都Open
    for i in range(15):
        hand, desc = random.choice(premium_hands)
        pos = random.choice(positions[:5])  # 前5个位置
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": random.choice(stages[:2]),
            "effective_bb": random.choice([100, 80, 60]),
            "position": pos,
            "hand": f"{hand} ds" if random.random() > 0.5 else f"{hand} ss",
            "hand_desc": desc,
            "action_before": "None",
            "question": f"你有{desc}在{pos}，应该如何行动?",
            "options": [
                {"action": "Open 3x", "correct": True, "explanation": f"{desc}是顶级牌，任何位置都Open"},
                {"action": "Fold", "correct": False, "explanation": "顶级牌不能Fold"},
                {"action": "Limp", "correct": False, "explanation": "应该Open而不是Limp"}
            ],
            "key_concept": "顶级牌任何位置都Open"
        })
        id_counter += 1
    
    # Strong hands - 看位置
    for i in range(15):
        hand, desc = random.choice(strong_hands)
        pos = random.choice(positions)
        is_late = positions.index(pos) >= 4
        correct = "Open 2.5x" if is_late else ("Open 2.5x" if "AA" in hand or "KK" in hand else "Fold")
        
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": random.choice(stages[:3]),
            "effective_bb": random.choice([100, 80, 60, 40]),
            "position": pos,
            "hand": f"{hand} ss",
            "hand_desc": desc,
            "action_before": "None",
            "question": f"你有{desc}在{pos}，应该如何行动?",
            "options": [
                {"action": correct, "correct": True, "explanation": f"{desc}在{pos}{'可以Open' if is_late else ('可以Open' if 'AA' in hand or 'KK' in hand else '应该Fold')}"},
                {"action": "Fold" if correct == "Open 2.5x" else "Open 2.5x", "correct": False, "explanation": "错误决策"},
                {"action": "Limp", "correct": False, "explanation": "应该Open或Fold"}
            ],
            "key_concept": "强牌看位置决策"
        })
        id_counter += 1
    
    # Speculative hands - 后位才Open
    for i in range(20):
        hand, desc = random.choice(speculative_hands)
        pos = random.choice(positions)
        is_late = positions.index(pos) >= 4
        correct = "Open 2.5x" if is_late else "Fold"
        
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": random.choice(stages),
            "effective_bb": random.choice([100, 80, 60]),
            "position": pos,
            "hand": f"{hand} ss",
            "hand_desc": desc,
            "action_before": "None",
            "question": f"你有{desc}在{pos}，应该如何行动?",
            "options": [
                {"action": correct, "correct": True, "explanation": f"投机牌在{pos}{'可以Open' if is_late else '应该Fold'}"},
                {"action": "Fold" if correct == "Open 2.5x" else "Open 2.5x", "correct": False, "explanation": "错误决策"},
                {"action": "Limp", "correct": False, "explanation": "PLO中Limp很弱"}
            ],
            "key_concept": "投机牌需要位置"
        })
        id_counter += 1
    
    # Trash hands - Fold
    for i in range(10):
        hand, desc = random.choice(trash_hands)
        pos = random.choice(positions)
        
        scenarios.append({
            "id": id_counter,
            "category": "起手牌选择",
            "stage": random.choice(stages),
            "effective_bb": random.choice([100, 80]),
            "position": pos,
            "hand": hand,
            "hand_desc": desc,
            "action_before": "None",
            "question": f"你有{desc}在{pos}，应该如何行动?",
            "options": [
                {"action": "Fold", "correct": True, "explanation": f"{desc}是边缘牌，应该Fold"},
                {"action": "Open", "correct": False, "explanation": "边缘牌不能Open"},
                {"action": "Limp", "correct": False, "explanation": "边缘牌不能Limp"}
            ],
            "key_concept": "边缘牌应该Fold"
        })
        id_counter += 1
    
    # ========== 翻牌后决策 (40题) ==========
    flops = [
        ("A♠K♠Q♦", "AKQ彩虹", "nuts"),
        ("K♠Q♠J♦", "KQJ彩虹", "nuts"),
        ("Q♠J♠T♦", "QJT彩虹", "nuts"),
        ("9♠8♠7♦", "987彩虹", "connected"),
        ("7♠6♠5♦", "765彩虹", "connected"),
        ("A♠A♥K♦", "AAK彩虹", "paired"),
        ("K♠K♥Q♦", "KKQ彩虹", "paired"),
        ("A♠7♠2♦", "A72彩虹", "dry"),
        ("K♠7♠2♦", "K72彩虹", "dry"),
        ("Q♠8♠3♦", "Q83彩虹", "dry"),
    ]
    
    postflop_hands = [
        ("A♠A♥K♦Q♦", "AAKQ双同花"),
        ("K♠K♥Q♠J♠", "KKQJ双同花"),
        ("A♠K♠Q♦J♦", "AKQJ双同花"),
        ("9♠T♠J♦Q♦", "9TJQ双同花"),
        ("7♠8♠9♦T♦", "789T双同花"),
        ("J♠T♠8♥7♥", "JT87双同花"),
    ]
    
    for i in range(40):
        flop, flop_desc, flop_type = random.choice(flops)
        hand, hand_desc = random.choice(postflop_hands)
        
        # 简化逻辑
        if flop_type == "nuts":
            correct = "Bet Pot"
            explanation = "你有nuts或强牌，应该Build Pot"
        elif flop_type == "paired":
            correct = "Check" if "AA" not in hand else "Bet"
            explanation = "Paired board小心，Set才Bet"
        elif flop_type == "dry":
            correct = "Bet 2/3 Pot"
            explanation = "Dry board可以Cbet"
        else:
            correct = "Check" if random.random() > 0.5 else "Bet"
            explanation = "Connected board看情况"
        
        scenarios.append({
            "id": id_counter,
            "category": "翻牌后决策",
            "stage": random.choice(stages[1:3]),
            "effective_bb": random.choice([60, 50, 40]),
            "position": "CO (IP)" if random.random() > 0.5 else "SB (OOP)",
            "hand": hand,
            "hand_desc": hand_desc,
            "action_before": "3人底池" if random.random() > 0.5 else "单挑",
            "flop": flop,
            "question": f"翻牌{flop_desc}，你应该如何行动?",
            "options": [
                {"action": correct, "correct": True, "explanation": explanation},
                {"action": "Check" if correct != "Check" else "Bet", "correct": False, "explanation": "错误决策"},
                {"action": "Allin", "correct": False, "explanation": "过度commit"}
            ],
            "key_concept": explanation
        })
        id_counter += 1
    
    # ========== Wrap听牌 (30题) ==========
    wrap_scenarios = [
        ("8♠9♠T♦J♦", "7♠Q♣2♥", "20-out wrap", "7,9,T,J,K", 20),
        ("9♠T♠J♦Q♦", "8♠K♣3♥", "17-out wrap", "7,8,9,T,J,Q,K", 17),
        ("7♠8♠9♦T♦", "6♠J♣2♥", "13-out wrap", "6,7,8,9,T,J", 13),
        ("T♠J♠Q♦K♦", "9♠A♣3♥", "13-out wrap", "9,T,J,Q,K,A", 13),
    ]
    
    for i in range(30):
        hand, flop, wrap_type, outs_desc, outs = random.choice(wrap_scenarios)
        equity = min(95, outs * 2 + 5)
        
        scenarios.append({
            "id": id_counter,
            "category": "Wrap听牌",
            "stage": "中期",
            "effective_bb": random.choice([80, 60, 50]),
            "position": "CO (IP)",
            "hand": hand,
            "hand_desc": wrap_type,
            "action_before": "底池25BB，对手bet 15BB",
            "flop": flop,
            "question": f"你有{wrap_type} ({outs} outs, {equity}% equity)，对手bet，你应该?",
            "options": [
                {"action": "Call", "correct": True, "explanation": f"{outs}-out wrap有{equity}% equity，大幅领先！"},
                {"action": "Fold", "correct": False, "explanation": "不能Fold强听牌"},
                {"action": "Raise", "correct": False, "explanation": "Call保留implied odds"}
            ],
            "key_concept": f"{outs}-out wrap equity高，不能Fold"
        })
        id_counter += 1
    
    # ========== 短筹码策略 (40题) ==========
    short_stacks = [20, 18, 15, 12, 10, 8, 6, 5]
    short_hands = [
        ("A♠A♥K♦Q♦", "AAKQ", "Allin"),
        ("K♠K♥Q♠Q♦", "KKQQ", "Allin"),
        ("A♠A♥T♠9♦", "AAT9", "Allin"),
        ("Q♠Q♥J♠T♦", "QQJT", "Allin"),
        ("7♠7♥6♠6♦", "7766", "Fold"),
        ("9♠9♥8♠8♦", "9988", "Fold"),
        ("A♠A♥2♠3♦", "AA23", "Fold"),
    ]
    
    for i in range(40):
        stack = random.choice(short_stacks)
        hand, desc, correct = random.choice(short_hands)
        pos = random.choice(positions)
        
        scenarios.append({
            "id": id_counter,
            "category": "短筹码策略",
            "stage": "后期",
            "effective_bb": stack,
            "position": pos,
            "hand": hand,
            "hand_desc": desc,
            "action_before": "Fold到你" if pos in ["BTN", "SB", "CO"] else "前面fold",
            "question": f"{stack}bb短筹码，你应该如何行动?",
            "options": [
                {"action": correct, "correct": True, "explanation": f"{desc}{'是强牌' if correct == 'Allin' else '短筹码价值低'}，应该{correct}"},
                {"action": "Fold" if correct == "Allin" else "Allin", "correct": False, "explanation": "错误决策"},
                {"action": "Call", "correct": False, "explanation": "短筹码应该Allin或Fold"}
            ],
            "key_concept": f"PLO短筹码{desc}{'强' if correct == 'Allin' else '弱'}"
        })
        id_counter += 1
    
    # ========== ICM/FT (30题) ==========
    for i in range(30):
        scenarios.append({
            "id": id_counter,
            "category": "ICM压力" if random.random() > 0.5 else "Final Table",
            "stage": "泡沫期" if random.random() > 0.5 else "Final Table",
            "effective_bb": random.choice([35, 30, 25, 20]),
            "position": random.choice(["BTN", "CO", "MP"]),
            "hand": random.choice(["A♠K♠Q♦J♦", "Q♠Q♥J♠T♦", "K♠K♥Q♠Q♦", "A♠A♥K♦Q♦"]),
            "hand_desc": random.choice(["AKQJ双同花", "QQJT", "KKQQ", "AAKQ"]),
            "action_before": "短筹码allin",
            "question": "面对短筹码allin，你应该如何行动?",
            "options": [
                {"action": "Call", "correct": True, "explanation": "强牌有equity优势，应该Call"},
                {"action": "Fold", "correct": False, "explanation": "强牌不能Fold"},
                {"action": "Allin", "correct": False, "explanation": "不需要额外筹码"}
            ],
            "key_concept": "ICM压力存在但强牌仍要play"
        })
        id_counter += 1
    
    return scenarios

# 生成题库
scenarios = generate_plo_scenarios()

# 保存到JSON
output = {
    "metadata": {
        "game": "PLO MTT",
        "total_scenarios": len(scenarios),
        "categories": ["起手牌选择", "翻牌后决策", "Wrap听牌", "短筹码策略", "ICM压力", "Final Table"],
        "created": "2026-03-06"
    },
    "scenarios": scenarios
}

with open('/root/.openclaw/workspace/poker-trainer-web/plo_data_200.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print(f"✅ 已生成 {len(scenarios)} 个PLO MTT练习场景")
print(f"📁 保存至: plo_data_200.json")
