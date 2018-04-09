<template>
    <div class="question-box" :class="showOperate ? 'question-box-show-operate' : ''" @mouseenter="showOperate = true" @mouseleave="showOperate = false">
        <!-- 需要频繁显示/隐藏使用v-show（会渲染），否则用v-if（不会渲染） -->
        <div class="question-operate" v-if="inPaper" v-show="showOperate">
            <button class="question-operate-btn" @click="operateQuestion(0)">收藏</button>
            <button class="question-operate-btn" @click="operateQuestion(1)">删除</button>
            <button class="question-operate-btn" @click="operateQuestion(2)">替换</button>
            <button class="question-operate-btn" @click="operateQuestion(3)">上移</button>
            <button class="question-operate-btn" @click="operateQuestion(4)">下移</button>
        </div>
        <div class="question-propert" v-if="!inPaper">
            <div>题号:{{question.id}} &nbsp;&nbsp;&nbsp;&nbsp; 题型:{{question.type}} &nbsp;&nbsp;&nbsp;&nbsp; 难度:{{question.difficulty}}</div>
        </div>
        <div class="question-body" @click="showAnswer = !showAnswer">
            <h1>{{question.title}}</h1>
        </div>
        <div class="question-footer" v-if="!inPaper">
            <button>加入试卷篮</button>
        </div>
        <div class="question-answer" v-show="showAnswer || showAnswerInPaper">
            <h3>{{question.answer}}</h3>
            <h3>{{question.analysis}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    name: "condition",
    props: {
        //从父组件传来的条件数组
        question: Object,
        //true:显示在试卷中，此时不显示question-propert和question-footer
        //false:显示在题目筛选中，此时不显示question-operate
        inPaper: Boolean,
        showAnswerInPaper: Boolean
    },
    data() {
        return {
            showAnswer: false,
            showOperate: false
        };
    },
    methods: {
        operateQuestion: function (eventIndex) {
            this.$emit('operateQuestion', eventIndex, this.question.id)
        }
    }
};
</script>
<style lang="scss" scoped>
.question-box {
  position: relative;
  margin: 10px;
  border: solid;
  border-width: 1px;
  border-color: transparent;

  &-show-operate {
    border-color: lightgray;
  }
}

.question-operate {
  position: absolute;
  top: -30px;
  right: 0px;

  &-btn {
    width: 60px;
    height: 30px;
    background: transparent;
    color: green;
    font-size: 14px;
    margin: 0px;
    padding: 0px;
    outline: none;
    &:hover {
      border-color: green;
    }
  }
}
.question-propert {
  height: 40px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
}

.question-footer {
  display: flex;
  flex-direction: row-reverse;
}

.question-answer {
  border-top: 1px dashed lightgray;
}
</style>

