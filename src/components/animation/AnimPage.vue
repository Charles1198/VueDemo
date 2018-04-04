<template>
  <div>
    <div class="anim1">
      <div class="cube show-default" :class="dir">
        <div class="cube-face is-front">
          <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/1.jpg" alt="pic1" />
        </div>
        <div class="cube-face is-back">
          <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/2.jpg" alt="pic2" />
        </div>
        <div class="cube-face is-right">
          <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/3.jpg" alt="pic3" />
        </div>
        <div class="cube-face is-left">
          <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/4.jpg" alt="pic4" />
        </div>
        <div class="cube-face is-top">
          <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/5.jpg" alt="pic5" />
        </div>
        <div class="cube-face is-bottom">
          <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/6.jpg" alt="pic6" />
        </div>
      </div>
    </div>
    <div class="demo-button">
      <button @click="runDemo('show-default')">默认</button>
      <button @click="runDemo('show-front')">前面</button>
      <button @click="runDemo('show-back')">后面</button>
      <button @click="runDemo('show-left')">左面</button>
      <button @click="runDemo('show-right')">右面</button>
      <button @click="runDemo('show-top')">上面</button>
      <button @click="runDemo('show-bottom')">下面</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dir: 'show-default'
    }
  },
  methods: {
    runDemo(dir) {
      this.dir = dir
      console.log(this.dir)
    }
  }
};
</script>

<style lang="scss" scoped>
$cube-size: 300px;
$cube-radius: $cube-size / 2;

.anim1 {
  width: $cube-size;
  height: $cube-size;
  perspective: 1000px;
  position: relative;
  margin: 30px auto;
}

.cube {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform ease 1s;

  &-face {
    border: 2px solid #000;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    opacity: 0.6;
    backface-visibility: visible;
    &.is-front {
      transform: translateZ($cube-radius);
    }
    &.is-back {
      transform: rotateX(-180deg) translateZ($cube-radius);
    }
    &.is-right {
      transform: rotateY(90deg) translateZ($cube-radius);
    }
    &.is-left {
      transform: rotateY(-90deg) translateZ($cube-radius);
    }
    &.is-top {
      transform: rotateX(90deg) translateZ($cube-radius);
    }
    &.is-bottom {
      transform: rotateX(-90deg) translateZ($cube-radius);
    }
  }

  &.show-default {
    transform: translateZ(- $cube-radius) rotateY(-15deg) rotateX(-15deg);
  }
  &.show-front {
    transform: translateZ(- $cube-radius);
  }
  &.show-back {
    transform: translateZ(- $cube-radius) rotateX(180deg);
  }
  &.show-left {
    transform: translateZ(- $cube-radius) rotateY(90deg);
  }
  &.show-right {
    transform: translateZ(- $cube-radius) rotateY(-90deg);
  }
  &.show-top {
    transform: translateZ(- $cube-radius) rotateX(-90deg);
  }
  &.show-bottom {
    transform: translateZ(- $cube-radius) rotateX(90deg);
  }

  img {
    width: 100%;
  }
}
</style>



