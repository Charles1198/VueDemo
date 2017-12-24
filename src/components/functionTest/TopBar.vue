<template>
  <div id="top-bar">
    <input class="check-box" id="check-web" type="checkbox">
    <label for="check-web">Web测试</label>
    <input id="check-app" type="checkbox">
    <label for="check-app">App测试</label>
    
  </div>
</template>

<script>
export default {
  name: "top-bar",
  
};
</script>

<style scoped>
#top-bar {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #f0f0ff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}




</style>
