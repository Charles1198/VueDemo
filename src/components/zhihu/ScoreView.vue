<template>
  <div id="score">
    <span>10</span>
    <div class="score-outter">
      <div class="score-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'score'
}
</script>

<style>
span {
  color: white;
  text-align: center;
}

.score-outter {
  margin: auto;
  width: 12px;
  height: 300px;
  border-radius: 12px;
  border: solid lightblue 3px;
  background-color: rgb(14, 14, 197);
  display: flex;
  flex-direction: column-reverse;
}

.score-inner {
  width: 8px;
  height: 200px;
  border-radius: 4px;
  border: none;
  background-color: rgb(209, 7, 7);
  margin: 2px auto;
}
</style>
