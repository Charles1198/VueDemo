<template>
  <div id="zhihu">
    <button id="battle-btn" v-if="!battleBegin" @click="nextQuestion">开始对战</button>
    <h3 class="title" v-show="battleBegin">对战</h3>
    <div class="avatar-box">
      <transition name="avatar1-trans">
        <img class="avatar1" src="./image/avatar_1.jpg" v-show="battleBegin">
      </transition>
      <transition name="avatar2-trans">
        <img class="avatar2" src="./image/avatar_2.jpg" v-show="battleBegin">
      </transition>
      <div id="countDown" v-show="battleBegin && questionShown">10</div>
    </div>
    <transition name="category-box-trans">
      <div class="category-box" v-show="battleBegin && questionWillShow">
        <span class="category-text">语文</span>
      </div>
    </transition>
    <transition name="question-index-trans">
      <div class="question-index" v-show="battleBegin && questionWillShow">第 1 题</div>
    </transition>
    <div class="question-title" v-show="battleBegin && questionShown">
      这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目
    </div>
    <div class="option-score">
      <transition name="avatar1-trans">
        <score-view class="score" v-show="battleBegin" />
      </transition>
      <option-view class="options-box" v-show="battleBegin && questionShown" />
      <transition name="avatar2-trans">
        <score-view class="score" v-show="battleBegin" />
      </transition>
    </div>
  </div>
</template>

<script>
import scoreView from './ScoreView.vue'
import optionView from './OptionView.vue'

export default {
  name: "zhihu",
  components: {
    scoreView,
    optionView
  },
  data() {
    return {
      battleBegin: false,
      questionWillShow: false,
      questionShown: false
    }
  },
  methods: {
    nextQuestion: function () {
      this.battleBegin = true
      this.questionWillShow = true
      this.questionShown = false
      setTimeout(function () {
        this.questionWillShow = false
        this.questionShown = true
        clearTimeout()
      }, 2000)
    }
  }
}
</script>

<style>
#zhihu {
  width: 375px;
  height: 667px;
  margin: 0 auto;
  background-color: blueviolet;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 2px 8px blueviolet;
}

#battle-btn {
  margin-top: 100px;
  width: 120px;
  height: 40px;
  font-size: 24px;
  color: white;
  border: none;
  outline: none;
  background-color: transparent;
}

h3 {
  margin: 0;
  padding: 6px;
  text-align: center;
  color: white;
}

.avatar-box {
  position: relative;
  height: 64px;
}

.avatar1 {
  position: absolute;
  left: 20px;
  border-radius: 50%;
  border: solid white 4px;
}

.avatar2 {
  position: absolute;
  right: 20px;
  border-radius: 50%;
  border: solid white 4px;
}

.avatar1-trans-enter {
  transform: translateX(-80px);
}

.avatar2-trans-enter {
  transform: translateX(80px);
}

.avatar1-trans-enter-active,
.avatar2-trans-enter-active {
  transition: all 0.6s;
}

#countDown {
  color: white;
  font-size: 30px;
  font-weight: bolder;
  width: 100%;
  text-align: center;
  padding: 12px 0;
  border-radius: 50%;
}

.category-box {
  width: 180px;
  height: 49px;
  margin: 20px auto 0 auto;
  padding: 10px 0;
  background: url(./image/category_bg.png) no-repeat;
}

.category-box-trans-enter {
  transform: translateY(-150px);
}

.category-box-trans-enter-active {
  transition: all 0.6s;
}

.category-text {
  text-align: center;
  color: white;
}

.question-index {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0 1px black;
}

.question-index-trans-enter {
  transform: scale(0);
}

.question-index-trans-leave-to {
  transform: opacity(0);
}

.question-index-trans-enter-active,
.question-index-trans-leave-active {
  transition: all 0.6s;
}

.question-title {
  color: white;
  padding: 0 50px;
}

.option-score {
  display: flex;
}

.score {
  width: 80px;
  height: 340px;
}

.options-box {
  width: 215px;
  height: 320px;
  margin: auto;
}
</style>
