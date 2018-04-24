<template>
  <div id="svg-box">
    <svg width="1000" height="500" viewBox="0 0 200 100">
      <defs>
        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" stroke-width="0.2" />
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#smallGrid)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="lightgray" stroke-width="0.2" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />

      <!-- 矩形 -->
      <rect x="10" y="10" width="20" height="10" style="fill:lightgreen;" />
      <rect x="10" y="30" width="20" height="10" style="fill:transparent;stroke:lightgreen;stroke-width:0.5" />
      <rect x="10" y="50" width="20" height="10" rx="2" ry="2" style="fill:transparent;stroke:lightgreen;stroke-width:0.5" />
      <rect x="10" y="70" width="20" height="10" rx="2" ry="4" style="fill:transparent;stroke:lightgreen;stroke-width:0.5" />

      <!-- 圆 -->
      <circle cx="50" cy="20" r="10" style="fill:lightblue" />
      <circle cx="50" cy="50" r="10" style="fill:transparent;stroke:lightblue;stroke-width:0.5" />

      <!-- 椭圆 -->
      <ellipse cx="80" cy="20" rx="10" ry="5" style="fill:pink" />
      <ellipse cx="80" cy="50" rx="10" ry="15" style="fill:transparent;stroke:pink;stroke-width:0.5" />

      <!-- 线段 -->
      <line x1="100" y1="20" x2="100" y2="60" style="stroke:gray;stroke-width:0.5" />

      <!-- 折线 -->
      <polyline points="110,10 110,20 120,20 120,30 130,30 130,40" style="fill:transparent;stroke:red;stroke-width:0.5" />
      <polyline points="110,30 110,40 120,40 120,50 130,50 130,60" style="fill:red;stroke:red;stroke-width:0.5" />
      <polyline points="110,50 110,60 120,60 120,70 130,70 130,80" style="fill:lightblue;stroke:red;stroke-width:0.5" />

      <!-- 多边形 -->
      <polygon points="140,10 140,30 160,30" style="fill:transparent;stroke:blue;stroke-width:0.5" />
      <polygon points="150,40 160,50 160,60 150,70 140,60 140 50" style="fill:lightgray;stroke:blue;stroke-width:0.5" />

      <!-- path -->
      <path d="M170 10 L190 80 L170 60 Z" style="fill:orange;" />
    </svg>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
#svg-box {
  text-align: center;
}
</style>
