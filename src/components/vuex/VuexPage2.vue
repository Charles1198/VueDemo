<template>
  <div id="vuex">
    <h2>Page2</h2>
    <div>在 Page1 输入的内容是{{inputValue}}</div>
    <br>
    <el-button @click="$router.go(-1)">返回 Page1</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  mounted() {
    this.inputValue = this.$store.state.inputValue
  }
}
</script>

<style>

</style>
