# Poker Trainer Pro - MTT牌谱分析练习系统

一个可视化的网页版扑克练习系统，支持NLHE和PLO MTT练习。

## 🌟 功能特点

- **双游戏支持**: Texas Hold'em (50题) + Pot Limit Omaha (12题)
- **分类练习**: 起手牌、Cbet、Draw、短筹码、ICM、Final Table等
- **多种模式**: 快速练习(10题)、标准练习(25题)、完整练习
- **实时反馈**: 答题后立即显示正确/错误及解释
- **进度追踪**: 进度条显示，最终成绩统计
- **响应式设计**: 支持桌面和移动端

## 📁 文件结构

```
poker-trainer-web/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── app.js              # 应用逻辑
├── nlhe_data.js        # NLHE题库数据 (50题)
├── plo_data.js         # PLO题库数据 (12题)
└── README.md           # 本文件
```

## 🚀 部署方式

### 方式1: 静态托管 (推荐)

#### GitHub Pages
1. 在GitHub创建新仓库
2. 上传所有文件到仓库
3. 进入 Settings → Pages
4. 选择 Deploy from a branch → main → / (root)
5. 访问 `https://你的用户名.github.io/仓库名/`

#### Vercel / Netlify
1. 访问 vercel.com 或 netlify.com
2. 连接GitHub仓库
3. 自动部署，获得全球CDN加速

#### Cloudflare Pages
1. 访问 pages.cloudflare.com
2. 连接GitHub仓库
3. 自动部署

### 方式2: 本地测试

```bash
# 进入项目目录
cd poker-trainer-web

# Python 3
python3 -m http.server 8080

# 或 Node.js
npx serve .

# 访问 http://localhost:8080
```

### 方式3: 自有服务器

```bash
# 使用Nginx
cp -r poker-trainer-web /var/www/html/

# 或使用Apache
cp -r poker-trainer-web /var/www/html/poker-trainer

# 配置域名指向
```

## 📱 访问地址

部署后，用户可以通过以下地址访问：

```
https://你的域名.com/
```

## 🎮 使用说明

1. **首页**: 选择游戏类型 (NLHE或PLO)
2. **分类页**: 选择练习模式 (快速/标准/完整) 和分类
3. **练习页**: 
   - 查看手牌、位置、筹码深度
   - 点击选择你的决策
   - 查看反馈和解释
4. **结果页**: 查看最终成绩和统计

## 🔧 自定义题库

编辑 `nlhe_data.js` 或 `plo_data.js` 文件，按以下格式添加题目：

```javascript
{
    id: 51,
    category: "起手牌选择",
    stage: "早期",
    effective_bb: 100,
    position: "UTG",
    hand: "A♠ K♠",
    hand_desc: "AK同花",
    action_before: "None",
    question: "你应该如何行动?",
    options: [
        { action: "Open 2.5x", correct: true, explanation: "AK任何位置都open" },
        { action: "Fold", correct: false, explanation: "AK是强牌" },
        { action: "Limp", correct: false, explanation: "浪费价值" }
    ],
    key_concept: "AK任何位置都open"
}
```

## 📊 当前题库统计

| 游戏 | 题目数 | 分类 |
|------|--------|------|
| NLHE MTT | 50题 | 6个分类 |
| PLO MTT | 12题 | 6个分类 |
| **总计** | **62题** | - |

## 🎯 未来扩展

- [ ] 扩展NLHE题库到200题
- [ ] 添加用户登录和进度保存
- [ ] 添加排行榜功能
- [ ] 添加错题本功能
- [ ] 支持多人对战模式
- [ ] 添加牌谱导入功能

## 📄 许可

MIT License - 可自由使用、修改和分发

## 🙏 致谢

感谢使用 Poker Trainer Pro!
