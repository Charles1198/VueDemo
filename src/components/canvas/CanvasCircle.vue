<template>
  <div id="canvasDemo">
    <canvas class="myCanvas3" ref="myCanvas3" />
  </div>
</template>

<script>
let WIDTH = 800
let HEIGHT = 300

let context3
let circleCount = 20
let circle = []

export default {
  name: 'canvasDemo',
  mounted: function () {
    var canvas3 = this.$refs.myCanvas3
    canvas3.width = WIDTH
    canvas3.height = HEIGHT
    context3 = canvas3.getContext('2d')

    drawCircles()
    animate()
  }
}

// 开始动画
function animate() {
  context3.clearRect(0, 0, WIDTH, HEIGHT)
  for (var i in circle) {
    circle[i].move()
    circle[i].draw()
  }

  requestAnimationFrame(animate)
}

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

</script>

<style scoped>
#canvasDemo {
  width: 800px;
  margin: 0 auto;
}

.myCanvas3 {
  border: solid;
  border-width: 1px;
  border-color: gray;
}
</style>
