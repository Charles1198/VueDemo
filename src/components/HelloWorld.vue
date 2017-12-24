<template>
  <div class="hello">
    <div class="hello_item">
      <router-link to="/Todolist">Todo</router-link>
    </div>
    <div class="hello_item">
      <router-link to="/Flex">Flex</router-link>
    </div>
    <div class="hello_item">
      <router-link to="/Axios">Axios</router-link>
    </div>
    <div class="hello_item">
      <router-link to="/FunctionTest">功能测试</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 800px;
  margin: 0 auto;
}

.hello_item {
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 20px;
  padding: 20px;
}
</style>
