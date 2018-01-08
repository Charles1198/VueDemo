<template>
  <div class="canvas">
    <canvas id="myCanvas2" ref="myCanvas2" @mousemove="mouseMove" />
    <canvas id="myCanvas" ref="myCanvas" />
  </div>
</template>

<script>
let context
let initRoundPopulation = 80
let round = []

let context2
let para = {
  num: 100,
  color: false,    //  颜色  如果是false 则是随机渐变颜色
  r: 0.09,          //   圆每次增加的半径 
  o: 0.009,         //      判断圆消失的条件，数值越大，消失的越快
  a: 1
}
let color
let color2
let round_arr = []     // 存放圆的数组

export default {
  name: 'canvas',
  data() {
    return {
      initRoundPopulation: 80,
      round: []
    }
  },
  methods: {
    drawInCanvas: function () {
      var canvas = this.$refs.myCanvas
      canvas.width = 800
      canvas.height = 400
      context = canvas.getContext('2d')

      var canvas2 = this.$refs.myCanvas2
      canvas2.width = 800
      canvas2.height = 400
      context2 = canvas2.getContext('2d')

      if (para.color) {
        color2 = para.color
      } else {
        color = Math.random() * 360
      }
    },
    mouseMove: function (event) {
      round_arr.push({
        mouseX: event.x,
        mouseY: event.y,
        r: para.r,  // 设置半径每次增大的数值        
        o: 5,    //  判断圆消失的条件，数值越大，消失的越快
      })
    }
  },
  mounted: function () {
    this.drawInCanvas()
    for (var i = 0; i < initRoundPopulation; i++) {
      round[i] = new roundItem(i, Math.random() * 800, Math.random() * 400);
      round[i].draw();
    }
    animate()

    animate2()
  }
}

// 随记指定圆点的位置大小透明度等信息
function roundItem(index, x, y) {
  this.index = index
  this.x = x
  this.y = y
  this.r = Math.random() * 2 + 1
  var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2
  this.color = "rgba(255,255,255," + alpha + ")"
}

// 画圆点
roundItem.prototype.draw = function () {
  context.fillStyle = this.color
  context.shadowBlur = this.r * 2
  context.beginPath()
  context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
  context.closePath()
  context.fill()
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

  this.draw()
}

// 开始动画
function animate() {
  context.clearRect(0, 0, 800, 400);
  for (var i in round) {
    round[i].move()
  }
  requestAnimationFrame(animate)
}

function animate2() {

  if (!para.color) {
    color += .1;
    color2 = 'hsl(' + color + ',100%,80%)';
  }

  context2.clearRect(0, 0, 800, 400);

  for (var i = 0; i < round_arr.length; i++) {

    context2.fillStyle = color2;
    context2.beginPath();
    context2.arc(round_arr[i].mouseX, round_arr[i].mouseY, round_arr[i].r, 0, Math.PI * 2);
    context2.closePath();
    context2.fill();
    round_arr[i].r += para.r;
    round_arr[i].o -= para.o;

    if (round_arr[i].o <= 0) {
      round_arr.splice(i, 1);
      i--;
    }
  }
  
  window.requestAnimationFrame(animate2);
}

</script>

<style scoped>
.canvas {
  width: 800px;
  margin: 0 auto;
}

#myCanvas {
  background: #000;
}
#myCanvas2 {
  background: #000;
}
</style>
