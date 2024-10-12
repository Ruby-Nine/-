
const { createApp } = Vue
var difficultyIndex = {}; /* 建立难度索引 */
database["questionLists"].map((question, index) => {
    if (!difficultyIndex[question.difficulty]) {
        difficultyIndex[question.difficulty] = [];
    }
    difficultyIndex[question.difficulty].push(index);
});
createApp({
    data() {
        return {
            "questionId": -1, /* 问题的id number */
            "questionData": database["questionLists"], /* 外部加载的问题数据 */
            "difficulty": "easy", /* 难度 */
            "difficultyIndex": difficultyIndex, /* 难度索引 */
            "imagePath": "./assets/",
            "imageUrl": "logo.jpg",
            "debugInfo": 0, /* 调试信息 双击关于显示 */
            "warningStatus": 0, /* 提示栏的状态 暂不用 */
            "warningText": "Welcome! 欢迎！ Bienvenue! ようこそ！ 환영합니다! Добро пожаловать! مرحباً"

        }
    },
    computed: {
        /** 
         * 根据difficulty 返回当前问题的难度
        */
        difficultyText() {
            if (this.difficulty == "easy") return "简单"
            if (this.difficulty == "normal") return "普通"
            if (this.difficulty == "hard") return "困难"
            if (this.difficulty == "any") return "随机"
        }
    },
    methods: {
        nextQuestion() {
            let previousQuestionId = this.questionId; // 保存前一个问题的ID
            const maxAttempts = 10; // 设置最大尝试次数
            let attempts = 0; // 当前尝试次数
            if (this.difficulty == "any") {
                /* 如果随意难度，则从所有数据中随机抽取 */
                do {
                    this.questionId = Math.floor(Math.random() * this.questionData.length);
                    attempts++;
                } while (this.questionId === previousQuestionId && attempts < maxAttempts); // 如果抽到相同问题且未超过最大尝试次数，则重新随机

            } else {
                /* 如果不是随意难度，则从对应难度中随机抽取 */
                do {
                    this.questionId = this.difficultyIndex[this.difficulty][Math.floor(Math.random() * this.difficultyIndex[this.difficulty].length)];
                    attempts++;
                } while (this.questionId === previousQuestionId && attempts < maxAttempts); // 如果抽到相同问题且未超过最大尝试次数，则重新随机
            }
            this.imageUrl = this.questionData[this.questionId].image;
            this.warningText = "猜一猜台词！";
        },
        getHint() {
            if (this.questionId == -1) return
            this.warningText = "《" + this.questionData[this.questionId].origin + "》" + this.questionData[this.questionId].hint
        },
        getAnswer() {
            if (this.questionId == -1) return
            this.warningText = this.questionData[this.questionId].answer
        },
        changeDifficulty() {
            if (this.difficulty == "easy") this.difficulty = "normal"
            else if (this.difficulty == "normal") this.difficulty = "hard"
            else if (this.difficulty == "hard") this.difficulty = "any"
            else this.difficulty = "easy"
        },
        about() {
            if (this.warningText.startsWith('<span class="about"')) {
                if (this.debugInfo == 0) { this.debugInfo = 1 }
                else if (this.debugInfo == 1) { this.debugInfo = 0 }
            }
            this.warningText = `<span class="about" style="color: #0869ff">
            主要负责人: Ruby <br>
            网页制作: 一只橙子OnO 西瓜 Ruby <br>
            素材剪辑: 茶茶 Ruby <br>
            素材收集：全体团子动漫社社员 <br><br>
            </span>
            `
            if (this.debugInfo == 1) this.warningText += `<span style="font-size: 10px">
            ${this.questionId} ${JSON.stringify(this.questionData[this.questionId])}
            </span>`
        }
    }
}).mount('#app')