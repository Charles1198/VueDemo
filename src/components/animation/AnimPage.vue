<template>
<div>
    <div class="anim1">
        <div class="cube show-default">
            <div class="cube-face is-front">
                <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/1.jpg" alt="pic1"/>
            </div>
            <div class="cube-face is-back">
                <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/2.jpg" alt="pic2"/>
            </div>
            <div class="cube-face is-right">
                <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/3.jpg" alt="pic3"/>
            </div>
            <div class="cube-face is-left">
                <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/4.jpg" alt="pic4"/>
            </div>
            <div class="cube-face is-top">
                <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/5.jpg" alt="pic5"/>
            </div>
            <div class="cube-face is-bottom">
                <img src="https://rawcdn.githack.com/o2team/misc/gh-pages/o2/img/mms/s1/6.jpg" alt="pic6"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
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

  img {
    width: 100%;
  }
}
</style>



