<template>
  <div id="zhihu">
    <h3 class="title">对战</h3>
    <div class="avatar-box">
      <img class="avatar1" src="./image/avatar_1.jpg">
      <img class="avatar2" src="./image/avatar_2.jpg">
      <div id="countDown">10</div>
    </div>
    <div class="category-box">
      <span class="category-text">对战</span>
    </div>
    <div class="question-index">第 1 题</div>
    <div class="question-title">这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目</div>
    <div class="option-score">
      <score-view class="score">

      </score-view>
      <div class="options-box">
        <div class="options">A</div>
        <div class="options">B</div>
        <div class="options">C</div>
        <div class="options">D</div>
      </div>
      <score-view class="score">

      </score-view>
    </div>
  </div>
</template>

<script>
import scoreView from './ScoreView.vue'

export default {
  name: "zhihu",
  components: {
    scoreView
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
}

h3 {
  margin: 0;
  padding: 6px;
  text-align: center;
  color: white;
}

.avatar-box {
  position: relative;
}

.avatar1 {
  position: absolute;
  left: 20px;
  border-radius: 50%;
  border: solid;
  border-width: 4px;
  border-color: white;
}

.avatar2 {
  position: absolute;
  right: 20px;
  border-radius: 50%;
  border: solid;
  border-width: 4px;
  border-color: white;
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
  margin: 10px auto 0 auto;
  padding: 10px 0;
  background: url(./image/category_bg.png) no-repeat;
}

.category-text {
  text-align: center;
  color: white;
}

.question-index {
  color: white;
  font-size: 24px;
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
  margin-top: 20px;
}

.options-box {
  width: 215px;
  height: 320px;
  margin-top: 30px;
  text-align: center;
}

.options {
  margin: 16px auto;
  width: 200px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  border: solid;
  border-width: 1px;
  border-color: black;
}
</style>
