<template>
    <div id="bubble">
        <canvas class="bubble-canvas" ref="bubble" />
    </div>
</template>

<script>
let WIDTH = 800;
let HEIGHT = 300;

let context;
let value = [100, 45, 64, 36, 67, 84, 56, 34, 45, 59, 93, 39, 68, 39, 59, 75];

var timer;
var i = value.length;
var j = value.length;
var count = 0;

export default {
  name: "bubble",
  mounted: function() {
    var canvas = this.$refs.bubble;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    context = canvas.getContext("2d");

    sort();
  }
};

function draeInCanvas() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
  for (let index = 0; index < value.length; index++) {
    const element = value[index];

    context.strokeStyle = "gray";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(index * 30 + 30, HEIGHT - 50);
    context.lineTo(index * 30 + 30, HEIGHT - element - 50);
    context.stroke();

    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(i * 30 - 30, HEIGHT - 20);
    context.lineTo(i * 30, HEIGHT - 20);
    context.stroke();
  }
}

function sort() {
  count++;
  console.log(count);
  if (i > 1) {
    if (value[i - 1] < value[i - 2]) {
      swap(value, i - 1, i - 2);
    }
    i--;
  } else {
    i = value.length;
    j--;
  }

  if (j > 1) {
    window.setTimeout(function() {
      sort();
    }, 100);
  }

  draeInCanvas();
}

function swap(list, i, j) {
  let temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}
</script>
<style>
.bubble-canvas {
  border: solid;
  border-width: 1px;
  border-color: gray;
}
</style>
