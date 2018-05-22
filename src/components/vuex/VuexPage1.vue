<template>
  <div id="vuex">
    <h2>Page1</h2>
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
    <el-button @click="toPage2">前往 Page2</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioValue: 'value1',
      inputValue: 'inputValue'
    }
  },
  mounted() {
    this.radioValue = this.$store.state.radioValue;
    this.inputValue = this.$store.state.inputValue;
  },
  methods: {
    toPage2() {
      this.$store.commit('SET_RadioValue', this.radioValue)
      this.$store.commit('SET_InputValue', this.inputValue)
      this.$router.push('/VuexPage2')
    }
  }
}
</script>

<style>
#vuex {
  margin: 20px;
}
</style>
