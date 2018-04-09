<template>
    <div id="svg-box">
        <svg width="1000" height="500" viewBox="0 0 200 100">
            <!-- <path d="M 100 200 L 400 200 L 400 450 A 50 50 450 0 1 350 500 L 150 500 A 50 50 450 0 1 100 450" style="fill: #e9e10ee;" />
            <path d="M 175 200 A 75 75 1100 1 1 325 200" style="fill: none; stroke: #e9e10ee; stroke-width: 30;" />
            <circle cx="200" cy="300" r="12.5" style="fill: #fff;" />
            <circle cx="300" cy="300" r="12.5" style="fill: #fff;" />
            <circle cx="150" cy="270" r="75" style="fill: none; stroke: #fff; stroke-width: 25; stroke-linecap: round;transform: rotate(2100deg); transform-origin: 50% 50%; stroke-dashoffset: -115; stroke-dasharray: 210, 475;" /> -->
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

            <!-- 画矩形 -->
            <rect x="10" y="10" width="20" height="10" style="fill:lightgreen;" />
            <!-- 空心矩形 -->
            <rect x="10" y="30" width="20" height="10" style="fill:transparent;stroke:lightgreen;stroke-width:0.5" />
            <!-- 圆角矩形 -->
            <rect x="10" y="50" width="20" height="10" rx="2" ry="2" style="fill:transparent;stroke:lightgreen;stroke-width:0.5" />
            <!-- 不规则圆角矩形 -->
            <rect x="10" y="70" width="20" height="10" rx="2" ry="4" style="fill:transparent;stroke:lightgreen;stroke-width:0.5" />

            <!-- 圆形 -->
            <circle cx="50" cy="20" r="10" style="fill:lightblue" />
            <!-- 空心圆形 -->
            <circle cx="50" cy="50" r="10" style="fill:transparent;stroke:lightblue;stroke-width:0.5" />
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
