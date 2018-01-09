<template>
  <div id="canvasDemo">
    <canvas class="myCanvas1" ref="myCanvas1" />
    <canvas class="myCanvas2" ref="myCanvas2" />
    <canvas class="myCanvas3" ref="myCanvas3" />
    <canvas class="myCanvas3" ref="myCanvas4" />
  </div>
</template>

<script>
let WIDTH = 800
let HEIGHT = 300

let context1
let roundCount = 60
let round = []

let context2
let lineCount = 30
let line = []

let context3
let circleCount = 20
let circle = []

let context4
let pointTop = []
let pointBottom = []
let pointLeft = []
let pointRight = []
let linePoints = []

export default {
  name: 'canvasDemo',
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

    var canvas3 = this.$refs.myCanvas3
    canvas3.width = WIDTH
    canvas3.height = HEIGHT
    context3 = canvas3.getContext('2d')

    var canvas4 = this.$refs.myCanvas4
    canvas4.width = WIDTH
    canvas4.height = HEIGHT
    context4 = canvas4.getContext('2d')

    drawRounds()
    drawLines()
    drawCircles()
    drawLine()

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

  context2.clearRect(0, 0, WIDTH, HEIGHT)
  for (var i in line) {
    line[i].move()
    line[i].draw()
  }

  context3.clearRect(0, 0, WIDTH, HEIGHT)
  for (var i in circle) {
    circle[i].move()
    circle[i].draw()
  }

  context4.clearRect(0, 0, WIDTH, HEIGHT)
  for (var i in pointTop) {
    pointTop[i].move()
    pointBottom[i].move()
    connectPoint(pointTop[i], pointBottom[i])
  }
  for (var i in pointLeft) {
    pointLeft[i].move()
    pointRight[i].move()
    connectPoint(pointLeft[i], pointRight[i])
  }

  requestAnimationFrame(animate)
}

// 画随机大小和位置，不断上升的小点点
// begin *************************************************************************
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

// end *************************************************************************

// 画随机长度和位置，不断上升旋转的线段
// begin *************************************************************************
function drawLines() {
  for (var i = 0; i < lineCount; i++) {
    line[i] = new lineItem(i)
    line[i].draw()
  }
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
  if (this.y <= -100) {
    this.y += (HEIGHT + 200)
  }
  if (this.x <= -100) {
    this.x += (WIDTH + 200)
  }
  if (this.x >= (WIDTH + 100)) {
    this.x -= (WIDTH + 200)
  }

  // 让其旋转
  this.rotateDegree += 0.005
}

// end *************************************************************************

// 画随机颜色、大小和位置，不断移动的透明圆
// begin *************************************************************************
function drawCircles() {
  for (var i = 0; i < circleCount; i++) {
    circle[i] = new circleItem(i)
    circle[i].draw()
  }
}

// 随机指定圆的位置大小等信息
function circleItem(index) {
  this.index = index
  this.r = Math.random() * 30 + 40
  this.x = this.r + Math.random() * (WIDTH - this.r * 2)
  this.y = this.r + Math.random() * (HEIGHT - this.r * 2)
  this.color = "rgba(" + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", 0.2)"
  this.vx = (Math.random() - 0.5) * 2
  this.vy = (Math.random() - 0.5) * 2
}

// 画圆
circleItem.prototype.draw = function () {
  context3.fillStyle = this.color
  context3.beginPath()
  context3.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
  context3.closePath()
  context3.fill()
}

// 移动圆
circleItem.prototype.move = function () {
  this.x += this.vx
  this.y += this.vy

  // 如果超出范围就把它拉回来
  if (this.x <= this.r || this.x >= WIDTH - this.r) {
    this.vx = 0 - this.vx
    this.color = "rgba(" + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", 0.2)"
  }
  if (this.y <= this.r || this.y >= HEIGHT - this.r) {
    this.vy = 0 - this.vy
    this.color = "rgba(" + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", " + parseInt(Math.random() * 255) + ", 0.2)"
  }
}
// end *************************************************************************

// 画随机长度和位置，不断上升旋转的线段
// begin *************************************************************************
function drawLine() {
  for (var i = 0; i < WIDTH / 150; i++) {
    pointTop[i] = new pointItemTop(i)
    pointBottom[i] = new pointItemBottom(i)
  }
  for (var i = 0; i < HEIGHT / 100; i++) {
    pointLeft[i] = new pointItemLeft(i)
    pointRight[i] = new pointItemRight(i)
  }

  connectLine()
}

// 随机指定点的位置
function pointItemTop(index) {
  this.index = index
  this.x = Math.random() * WIDTH
  this.y = 0
  this.vx = Math.random() * 0.1 + 0.1
}

pointItemTop.prototype.move = function () {
  this.x += this.vx

  if (this.x <= 0 || this.x >= WIDTH) {
    this.vx = 0 - this.vx
  }
}

function pointItemBottom(index) {
  this.index = index
  this.x = Math.random() * WIDTH
  this.y = HEIGHT
  this.vx = Math.random() * 0.1 + 0.1
}

pointItemBottom.prototype.move = function () {
  this.x += this.vx

  if (this.x <= 0 || this.x >= WIDTH) {
    this.vx = 0 - this.vx
  }
}

function pointItemLeft(index) {
  this.index = index
  this.x = 0
  this.y = Math.random() * HEIGHT
  this.vy = Math.random() * 0.1 + 0.1
}

pointItemLeft.prototype.move = function () {
  this.y += this.vy

  if (this.y <= 0 || this.y >= HEIGHT) {
    this.vy = 0 - this.vy
  }
}

function pointItemRight(index) {
  this.index = index
  this.x = WIDTH
  this.y = Math.random() * HEIGHT
  this.vy = Math.random() * 0.15 + 0.05
}

pointItemRight.prototype.move = function () {
  this.y += this.vy

  if (this.y <= 0 || this.y >= HEIGHT) {
    this.vy = 0 - this.vy
  }
}

// 画线
function connectLine() {
  for (var i in pointTop) {
    connectPoint(pointTop[i], pointBottom[i])
  }
  for (var i in pointLeft) {
    connectPoint(pointLeft[i], pointRight[i])
  }
}

function connectPoint(a, b) {
  context4.strokeStyle = "gray"
  context4.lineWidth = 0.5
  // 必须要 beginPath() 否则 clear 不掉
  context4.beginPath()
  context4.moveTo(a.x, a.y)
  context4.lineTo(b.x, b.y)
  context4.stroke();
}

// end *************************************************************************

</script>

<style scoped>
#canvasDemo {
  width: 800px;
  margin: 0 auto;
}

.myCanvas1 {
  background: #000;
}

.myCanvas2 {
  background: #eee;
}

.myCanvas3 {
  border: solid;
  border-width: 1px;
  border-color: gray;
}
</style>
