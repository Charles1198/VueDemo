<template>
  <div id="vuex">
    <h2>Page2</h2>
    <div>测试使用 Vuex 进行跨页面的参数传递和状态保存</div>
    <br>
    <span>单选框：</span>
    <el-radio-group v-model="radioValue">
      <el-radio label="value1">选项1</el-radio>
      <el-radio label="value2">选项2</el-radio>
      <el-radio label="value3">选项3</el-radio>
    </el-radio-group>
    <br>
    <span>输入框：</span>
    <input type="text" v-model="inputValue">
    <br><br>
    <el-button @click="$router.go(-1)">返回 Page1</el-button>
  </div>
</template>

<script>
export default {
  data() {
    console.log('data');

    return {
      radioValue: 'value1',
      inputValue: 'inputValue'
    }
  },
  mounted() {
    this.radioValue = this.$store.state.radioValue;
    this.inputValue = this.$store.state.inputValue;
  }
}
</script>

<style>

</style>
