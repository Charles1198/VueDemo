<template>
    <div id="app">
        <div class="home_bar">
            <span class="home_bar_title">Charles</span>
            <router-link class="home_bar_home" to="/">主页</router-link>
        </div>
        <div class="home-body">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.home_bar {
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #03a9f4;
  height: 72px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}

.home_bar_title {
  align-self: center;
  font-size: 36px;
  margin: 0px 60px;
  color: white;
}

.home_bar_home {
  align-self: center;
  font-size: 20px;
  margin: 0px 60px;
  color: white;
  text-decoration-line: none;
}

.home-body {
  overflow: scroll;
  margin-top: 72px;
}
</style>
