<template>
  <div id="canvasDemo">
    <canvas class="myCanvas3" ref="myCanvas4" />
  </div>
</template>

<script>

let WIDTH = 800
let HEIGHT = 300

let context4
let pointTop = []
let pointBottom = []
let pointLeft = []
let pointRight = []
let linePoints = []

export default {
  name: 'canvasDemo',
  mounted: function () {
    var canvas4 = this.$refs.myCanvas4
    canvas4.width = WIDTH
    canvas4.height = HEIGHT
    context4 = canvas4.getContext('2d')

    drawLine()
    animate()
  }
}

// 开始动画
function animate() {
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
