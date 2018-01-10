<template>
  <div id="canvasDemo">
    <canvas class="myCanvas1" ref="myCanvas1" />
  </div>
</template>

<script>
let WIDTH = 800
let HEIGHT = 300

let context1
let roundCount = 60
let round = []

export default {
  name: 'canvasDemo',
  mounted: function () {
    var canvas1 = this.$refs.myCanvas1
    canvas1.width = WIDTH
    canvas1.height = HEIGHT
    context1 = canvas1.getContext('2d')

    drawRounds()
    animate()
  }
}

// 开始动画
function animate() {
  context1.clearRect(0, 0, WIDTH, HEIGHT);
  for (var i in round) {
    round[i].move()
    round[i].draw()
  }

  requestAnimationFrame(animate)
}

function drawRounds() {
  for (var i = 0; i < roundCount; i++) {
    round[i] = new roundItem(i)
    round[i].draw()
  }
}

// 随机指定圆点的位置大小透明度等信息
function roundItem(index) {
  this.index = index
  this.x = Math.random() * WIDTH
  this.y = Math.random() * HEIGHT
  this.r = Math.random() * 2 + 1
  var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2
  this.color = "rgba(255,255,255," + alpha + ")"
}

// 画圆点
roundItem.prototype.draw = function () {
  context1.fillStyle = this.color
  context1.shadowBlur = this.r * 2
  context1.beginPath()
  context1.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
  context1.closePath()
  context1.fill()
}

// 移动圆点
roundItem.prototype.move = function () {
  // y方向移动速度分3个梯度
  if (this.index % 3 == 0) {
    this.y -= 0.1
  } else if (this.index % 3 == 1) {
    this.y -= 0.15
  } else {
    this.y -= 0.2
  }

  // x方向移动分两个方向
  if (this.index % 2 == 0) {
    this.x -= 0.05
  } else {
    this.x += 0.05
  }

  // 如果超出范围就把它拉回来
  if (this.y <= 0) {
    this.y += HEIGHT
  }
  if (this.x <= 0) {
    this.x += WIDTH
  }
  if (this.x >= WIDTH) {
    this.x -= WIDTH
  }
}

</script>

<style scoped>
#canvasDemo {
  width: 800px;
  margin: 0 auto;
}

.myCanvas1 {
  background: #000;
}
</style>
