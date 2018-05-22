<template>
  <div id="child">这是子组件
    <div></div>
    <input type="text" v-model="msg">
    <div v-for="(m, index) in msgs" :key="index">
      <button @click="msgs.push(index + 1)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    msg: "",
    msgs: []
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#child {
  margin: 20px;
  padding: 20px;
  width: fit-content;
  border: solid 1px lightblue;
}
</style>
