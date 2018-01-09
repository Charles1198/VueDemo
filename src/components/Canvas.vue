<template>
  <div id="canvas">
    <canvas class="myCanvas1" ref="myCanvas1" />
    <canvas class="myCanvas2" ref="myCanvas2" />
  </div>
</template>

<script>
let WIDTH = 800
let HEIGHT = 400

let context1
let roundCount = 60
let round = []

let context2
let lineCount = 20
let line = []

export default {
  name: 'canvas',
  data() {
    return {

    }
  },
  mounted: function () {
    var canvas1 = this.$refs.myCanvas1
    canvas1.width = WIDTH
    canvas1.height = HEIGHT
    context1 = canvas1.getContext('2d')

    var canvas2 = this.$refs.myCanvas2
    canvas2.width = WIDTH
    canvas2.height = HEIGHT
    context2 = canvas2.getContext('2d')

    drawRounds()
    drawLines()
  }
}

// 画随机大小和位置，不断上升的小点点
// begin *************************************************************************
function drawRounds() {
  for (var i = 0; i < roundCount; i++) {
    round[i] = new roundItem(i)
    round[i].draw()
  }
  animate()
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
    this.y += 400
  }
  if (this.x <= 0) {
    this.x += 800
  }
  if (this.x >= 800) {
    this.x -= 800
  }
}

// 开始动画
function animate() {
  context1.clearRect(0, 0, 800, 400);
  for (var i in round) {
    round[i].move()
    round[i].draw()
  }

  context2.clearRect(0, 0, 800, 400)
  for (var i in line) {
    line[i].move()
    line[i].draw()
  }

  requestAnimationFrame(animate)
}

// end *************************************************************************

// 画随机长度和位置，不断上升旋转的线段
// begin *************************************************************************
function drawLines() {
  for (var i = 0; i < lineCount; i++) {
    line[i] = new lineItem(i)
    line[i].draw()
  }
  animate()
}

// 随机指定线段的位置大小等信息
function lineItem(index) {
  this.index = index
  this.x = Math.random() * WIDTH
  this.y = Math.random() * HEIGHT
  this.l = Math.random() * 40 + 40
  this.color = "gray"
  this.rotateDegree = Math.random() * 180
}

// 画线段
lineItem.prototype.draw = function () {
  context2.strokeStyle = this.color
  context2.lineWidth = 0.5
  // 必须要 beginPath() 否则 clear 不掉
  context2.beginPath()
  context2.moveTo(this.x, this.y)
  context2.lineTo(this.x + this.l * Math.sin(this.rotateDegree), this.y + this.l * Math.cos(this.rotateDegree))
  context2.stroke();
}

// 移动线段
lineItem.prototype.move = function () {
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
    this.y += 400
  }
  if (this.x <= 0) {
    this.x += 800
  }
  if (this.x >= 800) {
    this.x -= 800
  }

  // 让其旋转
  this.rotateDegree += 0.005
}

// end *************************************************************************

</script>

<style scoped>
#canvas {
  width: 800px;
  margin: 0 auto;
}

.myCanvas1 {
  background: #000;
}

.myCanvas2 {
  background: #eee;
}
</style>
