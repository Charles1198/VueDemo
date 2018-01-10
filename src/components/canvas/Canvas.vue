<template>
  <div id="canvasDemo">
    <canvas-round/>
    <canvas-segment/>
    <canvas-circle/>
    <canvas-line/>
  </div>
</template>

<script>
import canvasRound from'./CanvasRound'
import canvasSegment from'./CanvasSegment'
import canvasCircle from'./CanvasCircle'
import canvasLine from'./CanvasLine'

export default {
  name: 'canvasDemo',
  components: {
    canvasRound,
    canvasSegment,
    canvasCircle,
    canvasLine
  }
}

</script>

<style scoped>
#canvasDemo {
  width: 800px;
  margin: 0 auto;
}
</style>
