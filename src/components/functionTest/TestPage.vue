<template>
  <div id="function-test">
    <div class="body-box">
      <leftbar id="left-bar" :child-test="testData"/>
      <testFiled></testFiled>
    </div>
  </div>
</template>

<script>
import leftbar from './Leftbar.vue'
import testFiled from './TestFiled.vue'

export default {
  name: "function-test",
  components: {
    leftbar,
    testFiled
  },
  data() {
    return {
      testData: {}
    }
  },
  created() {
    this.testData = this.$route.params.data
  }
};
</script>

<style scoped>
#function-test {
  height: 100%;
  width: 100%;
}

.body-box {
  display: flex;
  height: 100%;
  width: 100%;
}

#left-bar {
  height: 100%;
}
</style>
