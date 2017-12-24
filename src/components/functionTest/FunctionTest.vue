<template>
  <div id="function-test">
    <topbar/>
    <div class="body-box">
      <leftbar id="left-bar"/>
      <!-- <router-view/> -->
      <functionPage></functionPage>
    </div>
  </div>
</template>

<script>
import topbar from './TopBar.vue'
import leftbar from './Leftbar.vue'
import functionPage from './FunctionPage.vue'

export default {
  name: "function-test",
  components: {
    topbar,
    leftbar,
    functionPage
  }
};
</script>

<style scoped>
#function-test {
  height: 100%;
}

.body-box {
  display: flex;
  height: 100%;
}

#left-bar {
  height: 100%;
}
</style>
