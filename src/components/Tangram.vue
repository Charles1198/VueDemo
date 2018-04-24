<template>
  <div id="shapes" @mousemove="dragging">
    <div id="image">
      <img src="../assets/rotate_left.png" @mousedown="rotateLeft(true)">
      <img src="../assets/rotate_right.png" @mousedown="rotateLeft(false)">
    </div>

    <li ref="square" class="square" @mousedown="setMouseEvent(1)" @mouseup="setMouseEvent(0)" />
    <div ref="parallelogram" class="parallelogram" @mousedown="setMouseEvent(2)" @mouseup="setMouseEvent(0)">
      <li class="parallelogram-top" />
      <li class="parallelogram-bottom" />
    </div>
    <li ref="triangle1" class="triangle1" @mousedown="setMouseEvent(3)" @mouseup="setMouseEvent(0)" />
    <li ref="triangle2" class="triangle2" @mousedown="setMouseEvent(4)" @mouseup="setMouseEvent(0)" />
    <li ref="triangle3" class="triangle3" @mousedown="setMouseEvent(5)" @mouseup="setMouseEvent(0)" />
    <li ref="triangle4" class="triangle4" @mousedown="setMouseEvent(6)" @mouseup="setMouseEvent(0)" />
    <li ref="triangle5" class="triangle5" @mousedown="setMouseEvent(7)" @mouseup="setMouseEvent(0)" />
  </div>
</template>

<script>

export default {
  name: 'shapes',
  data() {
    return {
      //旋转角度
      rotatedDegree1: 0,
      rotatedDegree2: 0,
      rotatedDegree3: 0,
      rotatedDegree4: 0,
      rotatedDegree5: 0,
      rotatedDegree6: 0,
      rotatedDegree7: 0,
      //标志当前点击的是哪一个碎片，1-7分别是7个碎片
      mouseEvent: 0,
      //鼠标是否点击
      mouseDown: false
    }
  },
  methods: {
    dragging(e) {
      //如果鼠标没有选中则不拖动
      if (!this.mouseDown) {
        return
      }
      switch (this.mouseEvent) {
        case 1:
          var shapeSquare = this.$refs.square
          shapeSquare.style.left = e.clientX - 75 + 'px'
          shapeSquare.style.top = e.clientY - 150 + 'px'
          break
        case 2:
          var shapeParallelogram = this.$refs.parallelogram
          shapeParallelogram.style.left = e.clientX - 75 + 'px'
          shapeParallelogram.style.top = e.clientY - 225 + 'px'
          break
        case 3:
          var shapeTriangle1 = this.$refs.triangle1
          shapeTriangle1.style.left = e.clientX - 150 + 'px'
          shapeTriangle1.style.top = e.clientY - 225 + 'px'
          break
        case 4:
          var shapeTriangle2 = this.$refs.triangle2
          shapeTriangle2.style.left = e.clientX - 150 + 'px'
          shapeTriangle2.style.top = e.clientY - 225 + 'px'
          break
        case 5:
          var shapeTriangle3 = this.$refs.triangle3
          shapeTriangle3.style.left = e.clientX - 75 + 'px'
          shapeTriangle3.style.top = e.clientY - 150 + 'px'
          break
        case 6:
          var shapeTriangle4 = this.$refs.triangle4
          shapeTriangle4.style.left = e.clientX - 75 + 'px'
          shapeTriangle4.style.top = e.clientY - 150 + 'px'
          break
        case 7:
          var shapeTriangle5 = this.$refs.triangle5
          shapeTriangle5.style.left = e.clientX - 75 + 'px'
          shapeTriangle5.style.top = e.clientY - 150 + 'px'
          break
      }
    },
    rotateLeft(isLeft) {
      var diff = isLeft ? -22.5 : 22.5
      var shape
      switch (this.mouseEvent) {
        case 1:
          shape = this.$refs.square
          this.rotatedDegree1 += diff
          shape.style.transform = 'rotate(' + this.rotatedDegree1 + 'deg)'
          break
        case 2:
          shape = this.$refs.parallelogram
          this.rotatedDegree2 += diff
          shape.style.transform = 'rotate(' + this.rotatedDegree2 + 'deg)'
          break
        case 3:
          shape = this.$refs.triangle1
          this.rotatedDegree3 += diff
          shape.style.transform = 'rotate(' + this.rotatedDegree3 + 'deg)'
          break
        case 4:
          shape = this.$refs.triangle2
          this.rotatedDegree4 += diff
          shape.style.transform = 'rotate(' + this.rotatedDegree4 + 'deg)'
          break
        case 5:
          shape = this.$refs.triangle3
          this.rotatedDegree5 += diff
          shape.style.transform = 'rotate(' + this.rotatedDegree5 + 'deg)'
          break
        case 6:
          shape = this.$refs.triangle4
          this.rotatedDegree6 += diff
          shape.style.transform = 'rotate(' + this.rotatedDegree6 + 'deg)'
          break
        case 7:
          shape = this.$refs.triangle5
          this.rotatedDegree7 += diff
          shape.style.transform = 'rotate(' + this.rotatedDegree7 + 'deg)'
          break
      }
    },
    //标志当前点击的是哪一个碎片
    setMouseEvent(e) {
      if (e == 0) {
        this.mouseDown = false
        this.positionShapes()
      } else {
        this.mouseDown = true
        this.mouseEvent = e
      }
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#shapes {
  height: 1000px;
  width: 1500px;
  position: absolute;
  top: 100;
  left: 0;
}

#image {
  margin-left: 700px;
}

.square {
  background-color: red;
  height: 150px;
  width: 150px;
  position: absolute;
  top: 150px;
  left: 300px;
  /* transform: rotate(45deg) */
}

.parallelogram {
  position: absolute;
  top: 300px;
  left: 300px;
}

.parallelogram-top {
  width: 0;
  height: 0;
  border-bottom: 150px solid orange;
  border-left: 150px solid transparent;
}

.parallelogram-bottom {
  width: 0;
  height: 0;
  border-top: 150px solid orange;
  border-right: 150px solid transparent;
}

.triangle1 {
  width: 0;
  height: 0;
  border-bottom: 300px solid yellow;
  border-left: 300px solid transparent;
  position: absolute;
  top: 0px;
  left: 0px;
}

.triangle2 {
  width: 0;
  height: 0;
  border-top: 300px solid green;
  border-left: 300px solid transparent;
  position: absolute;
  top: 300px;
  left: 0px;
}

.triangle3 {
  width: 0;
  height: 0;
  border-top: 150px solid transparent;
  border-left: 150px solid blue;
  position: absolute;
  top: 0px;
  left: 300px;
}

.triangle4 {
  width: 0;
  height: 0;
  border-bottom: 150px solid transparent;
  border-left: 150px solid blueviolet;
  border-top: 150px solid transparent;
  position: absolute;
  top: 150px;
  left: 450px;
}

.triangle5 {
  width: 0;
  height: 0;
  border-top: 150px solid purple;
  border-right: 150px solid transparent;
  position: absolute;
  top: 300px;
  left: 300px;
}
</style>
