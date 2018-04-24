<template>
  <div id="css-anim">
    <h2>CSS 动画</h2>

    <h3>CSS Transition</h3>
    <span>
      transition的优点在于简单易用，但是它有几个很大的局限。
      <br>（1）transition需要事件触发，所以没法在网页加载时自动发生。
      <br>（2）transition是一次性的，不能重复发生，除非一再触发。
      <br>（3）transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。
      <br>（4）一条transition规则，只能定义一个属性的变化，不能涉及多个属性。
      <br>CSS Animation就是为了解决这些问题而提出的。
    </span>
    <div class="transition">
      <div class="transition-container">
        <span>没有设置 transition</span>
        <div class="transition-no-box" />
      </div>
      <div class="transition-container">
        <span>设置 <br>transition: 1s;</span>
        <div class="transition-has-box" />
      </div>
      <div class="transition-container">
        <span>设置 <br>transition: 1s height, 1s 1s width;</span>
        <div class="transition-delay-box" />
      </div>
      <div class="transition-container">
        <span>设置 <br>transition: 1s cubic-bezier(0.83, 0.97, 0.05, 1.44);</span>
        <div class="transition-timing-box" />
      </div>
      <div class="transition-container">
        <span>设置 <br>transition-duration: 1s; transition-delay: 1s; transition-property: height; transition-timing-function: ease;</span>
        <div class="transition-all-box" />
      </div>
    </div>
    <span>
      transition-timing-function 的值：
      <br> （1）ease：逐渐放慢
      <br> （2）linear：匀速
      <br> （3）ease-in：加速
      <br> （4）ease-out：减速
      <br> （5）cubic-bezier函数：自定义速度模式(http://cubic-bezier.com)
    </span>

    <h3>CSS Animation</h3>
    <div class="animation">
      <div class="animation-container">
        <span>设置 <br>animation: rainbow 2s;</span>
        <div class="animation-basic-box" />
      </div>
      <div class="animation-container">
        <span>设置 <br>animation: rainbow 2s 3;</span>
        <div class="animation-basic-3-box" />
      </div>
      <div class="animation-container">
        <span>设置 <br>animation: rainbow 2s forwards;</span>
        <div class="animation-fill-box" />
      </div>
      <div class="animation-container">
        <span>设置 <br>animation: rainbow 2s 3 alternate;</span>
        <div class="animation-direction-box" />
      </div>
      <div class="animation-container">
        <span>设置 <br>...-box { ... animation: rainbow 2s 3; animation-play-state: paused; } <br>...-box:hover { animation-play-state: run; }
        </span>
        <div class="animation-pause-box" />
      </div>
    </div>
    <span>
      animation-fill-mode 的值：
      <br>（1）none：默认值，回到动画没开始时的状态。
      <br>（2）forwards：让动画停留在最后一帧的状态。
      <br>（3）backwards：让动画回到第一帧的状态。
      <br>（4）both: 根据animation-direction轮流应用forwards和backwards规则。
      <br> animation-direction 的值：
      <br>（1）normal
      <br>（2）alternate
      <br>（3）reverse
      <br>（4）alternate-reverse
      <br>
    </span>
    <img src="http://www.ruanyifeng.com/blogimg/asset/201402/bg2014021401.png">
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
#css-anim {
  margin: 0 200px;
}

.transition {
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;

  &-container {
    width: 200px;
    height: 200px;
    text-align: center;
  }

  &-no-box {
    width: 50px;
    height: 50px;
    background: lightgreen;
    margin: auto;
  }

  &-no-box:hover {
    width: 150px;
    height: 150px;
  }

  &-has-box {
    width: 50px;
    height: 50px;
    background: lightgreen;
    margin: auto;
    transition: 1s;
  }

  &-has-box:hover {
    width: 150px;
    height: 150px;
  }

  &-delay-box {
    width: 50px;
    height: 50px;
    background: lightgreen;
    margin: auto;
    transition: 1s height, 1s 1s width;
  }

  &-delay-box:hover {
    width: 150px;
    height: 150px;
  }

  &-timing-box {
    width: 50px;
    height: 50px;
    background: lightgreen;
    margin: auto;
    transition: 1s cubic-bezier(0.83, 0.97, 0.05, 1.44);
  }

  &-timing-box:hover {
    width: 150px;
    height: 150px;
  }

  &-all-box {
    width: 50px;
    height: 50px;
    background: lightgreen;
    margin: auto;
    transition-duration: 1s;
    transition-delay: 1s;
    transition-property: height;
    transition-timing-function: ease;
  }

  &-all-box:hover {
    width: 150px;
    height: 150px;
  }
}

.animation {
  display: flex;
  flex-wrap: wrap;

  &-container {
    width: 200px;
    height: 300px;
    text-align: center;
  }

  &-basic-box {
    width: 150px;
    height: 150px;
    border: solid 1px lightgray;
    margin: auto;
  }

  &-basic-box:hover {
    animation: rainbow 2s;
  }

  &-basic-3-box {
    width: 150px;
    height: 150px;
    border: solid 1px lightgray;
    margin: auto;
  }

  &-basic-3-box:hover {
    animation: rainbow 2s 3;
  }

  &-fill-box {
    width: 150px;
    height: 150px;
    border: solid 1px lightgray;
    margin: auto;
  }

  &-fill-box:hover {
    animation: rainbow 2s forwards;
  }

  &-direction-box {
    width: 150px;
    height: 150px;
    border: solid 1px lightgray;
    margin: auto;
  }

  &-direction-box:hover {
    animation: rainbow 2s 3 alternate;
  }

  &-pause-box {
    width: 150px;
    height: 150px;
    border: solid 1px lightgray;
    margin: auto;
    animation: rainbow 2s infinite alternate;
    animation-play-state: paused;
  }

  &-pause-box:hover {
    animation-play-state: running;
  }

  @keyframes rainbow {
    0% {
      background: red;
    }
    100% {
      background: blue;
    }
  }
}
</style>
