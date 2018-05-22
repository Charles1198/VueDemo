<template>
  <div id="parent">
    <h2>测试父子组件数据同步</h2>
    <input type="text" v-model="msg">
    <div v-for="(m, index) in msgs" :key="index">
      <button @click="msgs.push(index + 1)">+</button>
    </div>
    <child :msg="msg" :msgs="msgs" />
  </div>
</template>

<script>
import child from "./ChildPage"

export default {
  data() {
    return {
      msg: "这是父组件的字符串",
      msgs: [0]
    }
  },
  components: {
    child
  }
}
</script>

<style>
#parent {
  margin: 20px;
}
</style>
