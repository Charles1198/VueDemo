<template>
  <div id="canvasDemo">
    <canvas class="myCanvas2" ref="myCanvas2" />
  </div>
</template>

<script>
let WIDTH = 800
let HEIGHT = 300

let context2
let lineCount = 40
let line = []

export default {
  name: 'canvasDemo',
  mounted: function () {
    var canvas2 = this.$refs.myCanvas2
    canvas2.width = WIDTH
    canvas2.height = HEIGHT
    context2 = canvas2.getContext('2d')

    drawLines()
    animate()
  }
}

// 开始动画
function animate() {
  context2.clearRect(0, 0, WIDTH, HEIGHT)
  for (var i in line) {
    line[i].move()
    line[i].draw()
  }

  requestAnimationFrame(animate)
}

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

</script>

<style scoped>
#canvasDemo {
  width: 800px;
  margin: 0 auto;
}

.myCanvas2 {
  background: #eee;
}
</style>
