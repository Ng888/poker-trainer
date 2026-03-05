// Poker Trainer Pro - 主应用
const app = {
    currentGame: null,
    currentScenarios: [],
    currentIndex: 0,
    score: 0,
    selectedCategory: null,
    answered: false,
    
    // 初始化
    init() {
        console.log('Poker Trainer Pro 初始化完成');
    },
    
    // 选择游戏
    selectGame(game) {
        this.currentGame = game;
        let data;
        let title;
        
        if (game === 'nlhe') {
            data = NLHE_DATA;
            title = 'Texas Hold\'em';
        } else if (game === 'plo') {
            data = PLO_DATA;
            title = 'Pot Limit Omaha';
        } else if (game === '27') {
            data = DATA_27;
            title = '2-7 Triple Draw';
        } else if (game === 'stud') {
            data = STUD_DATA;
            title = 'Stud 变体';
        }
        
        // 更新分类页面
        document.getElementById('category-title').textContent = title;
        
        // 生成分类列表
        const categoriesList = document.getElementById('categories-list');
        categoriesList.innerHTML = '';
        
        // 添加"全部"选项
        const allCard = document.createElement('div');
        allCard.className = 'category-card active';
        allCard.innerHTML = `
            <div class="category-name">全部题目</div>
            <div class="category-count">${data.scenarios.length}题</div>
        `;
        allCard.onclick = () => this.selectCategory('全部');
        categoriesList.appendChild(allCard);
        
        // 添加各分类
        data.categories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-name">${cat.name}</div>
                <div class="category-count">${cat.count}题</div>
            `;
            card.onclick = () => this.selectCategory(cat.name);
            categoriesList.appendChild(card);
        });
        
        this.selectedCategory = '全部';
        this.showPage('category-page');
    },
    
    // 选择分类
    selectCategory(category) {
        this.selectedCategory = category;
        
        // 更新UI
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    },
    
    // 开始练习
    startQuiz(numQuestions) {
        let data;
        if (this.currentGame === 'nlhe') {
            data = NLHE_DATA;
        } else if (this.currentGame === 'plo') {
            data = PLO_DATA;
        } else if (this.currentGame === '27') {
            data = DATA_27;
        } else if (this.currentGame === 'stud') {
            data = STUD_DATA;
        }
        
        // 筛选题目
        let scenarios = data.scenarios;
        if (this.selectedCategory !== '全部') {
            scenarios = scenarios.filter(s => s.category === this.selectedCategory);
        }
        
        // 随机排序
        scenarios = [...scenarios].sort(() => Math.random() - 0.5);
        
        // 限制数量
        if (numQuestions) {
            scenarios = scenarios.slice(0, numQuestions);
        }
        
        this.currentScenarios = scenarios;
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;
        
        // 更新进度
        document.getElementById('total-questions').textContent = scenarios.length;
        this.updateProgress();
        
        // 显示第一题
        this.showQuestion();
        this.showPage('quiz-page');
    },
    
    // 显示题目
    showQuestion() {
        const scenario = this.currentScenarios[this.currentIndex];
        this.answered = false;
        
        // 更新进度
        document.getElementById('current-question').textContent = this.currentIndex + 1;
        this.updateProgress();
        
        // 生成场景卡片
        const card = document.getElementById('scenario-card');
        
        // 根据游戏类型显示不同字段
        let tagsHtml = `
            <span class="tag category">${scenario.category}</span>
            <span class="tag">${scenario.stage}</span>
        `;
        
        if (this.currentGame !== '27') {
            // NLHE/PLO显示筹码和位置
            tagsHtml += `
                <span class="tag">${scenario.effective_bb}bb</span>
                <span class="tag">${scenario.position}</span>
            `;
        }
        
        card.innerHTML = `
            <div class="scenario-header">
                ${tagsHtml}
            </div>
            
            <div class="hand-display">
                <div class="hand-cards">${scenario.hand}</div>
                <div class="hand-name">${scenario.hand_desc}</div>
            </div>
            
            <div class="scenario-details">
                <div class="detail-row">
                    <span class="detail-label">前面行动</span>
                    <span class="detail-value">${scenario.action_before}</span>
                </div>
                ${scenario.flop ? `
                <div class="detail-row">
                    <span class="detail-label">翻牌</span>
                    <span class="detail-value board-display">
                        <span class="board-cards">${scenario.flop}</span>
                    </span>
                </div>
                ` : ''}
                ${scenario.board ? `
                <div class="detail-row">
                    <span class="detail-label">公共牌</span>
                    <span class="detail-value board-display">
                        <span class="board-cards">${scenario.board}</span>
                    </span>
                </div>
                ` : ''}
            </div>
            
            <div class="question-text">${scenario.question}</div>
        `;
        
        // 生成选项
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        optionsContainer.classList.remove('hidden');
        
        scenario.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.action;
            btn.onclick = () => this.selectAnswer(idx);
            optionsContainer.appendChild(btn);
        });
        
        // 隐藏反馈
        document.getElementById('feedback-card').classList.add('hidden');
        
        // 更新下一题按钮
        const isLast = this.currentIndex === this.currentScenarios.length - 1;
        document.getElementById('btn-next').textContent = isLast ? '查看结果 →' : '下一题 →';
    },
    
    // 选择答案
    selectAnswer(index) {
        if (this.answered) return;
        this.answered = true;
        
        const scenario = this.currentScenarios[this.currentIndex];
        const selected = scenario.options[index];
        
        // 更新选项样式
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, idx) => {
            btn.classList.add('disabled');
            if (scenario.options[idx].correct) {
                btn.classList.add('correct');
            } else if (idx === index && !selected.correct) {
                btn.classList.add('wrong');
            }
        });
        
        // 更新分数
        if (selected.correct) {
            this.score++;
        }
        
        // 显示反馈
        const feedbackCard = document.getElementById('feedback-card');
        const feedbackIcon = document.getElementById('feedback-icon');
        const feedbackTitle = document.getElementById('feedback-title');
        const feedbackText = document.getElementById('feedback-text');
        const keyConcept = document.getElementById('key-concept');
        
        feedbackCard.classList.remove('hidden');
        
        if (selected.correct) {
            feedbackIcon.textContent = '✅';
            feedbackIcon.className = 'feedback-icon correct';
            feedbackTitle.textContent = '正确!';
            feedbackText.textContent = selected.explanation;
        } else {
            feedbackIcon.textContent = '❌';
            feedbackIcon.className = 'feedback-icon wrong';
            feedbackTitle.textContent = '不正确';
            const correctOpt = scenario.options.find(o => o.correct);
            feedbackText.innerHTML = `
                <strong>你的选择:</strong> ${selected.action}<br>
                ${selected.explanation}<br><br>
                <strong>正确答案是:</strong> ${correctOpt.action}<br>
                ${correctOpt.explanation}
            `;
        }
        
        keyConcept.textContent = scenario.key_concept;
    },
    
    // 下一题
    nextQuestion() {
        this.currentIndex++;
        
        if (this.currentIndex >= this.currentScenarios.length) {
            this.showResults();
        } else {
            this.showQuestion();
        }
    },
    
    // 更新进度条
    updateProgress() {
        const progress = ((this.currentIndex) / this.currentScenarios.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
    },
    
    // 显示结果
    showResults() {
        const total = this.currentScenarios.length;
        const percentage = Math.round((this.score / total) * 100);
        
        document.getElementById('score-correct').textContent = this.score;
        document.getElementById('score-total').textContent = total;
        document.getElementById('score-percent').textContent = percentage + '%';
        
        // 根据分数显示不同表情和消息
        const emoji = document.getElementById('result-emoji');
        const message = document.getElementById('result-message');
        
        if (percentage === 100) {
            emoji.textContent = '🏆';
            message.textContent = '完美! 所有问题都答对了!';
        } else if (percentage >= 80) {
            emoji.textContent = '🎯';
            message.textContent = '很好! 继续保持!';
        } else if (percentage >= 60) {
            emoji.textContent = '📚';
            message.textContent = '不错，但还有提升空间';
        } else {
            emoji.textContent = '💪';
            message.textContent = '继续练习，MTT决策需要时间来掌握';
        }
        
        this.showPage('result-page');
    },
    
    // 重新开始
    restartQuiz() {
        this.startQuiz(this.currentScenarios.length);
    },
    
    // 退出练习
    quitQuiz() {
        if (confirm('确定要退出练习吗?')) {
            this.goHome();
        }
    },
    
    // 返回首页
    goHome() {
        this.currentGame = null;
        this.currentScenarios = [];
        this.currentIndex = 0;
        this.score = 0;
        this.showPage('home-page');
    },
    
    // 显示页面
    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
