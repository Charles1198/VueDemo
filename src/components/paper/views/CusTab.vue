<template>
  <div id="cus-tab">
    <div class="bottom-line-start"></div>
    <div class="tab-btn" v-for="tab in tabs" :key="tab">{{tab}}</div>
    <div class="bottom-line-end"></div>
  </div>
</template>

<script>
export default {
  name: "cus-tab",
  props: {
    tabs: []
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#cus-tab {
  display: flex;
}

.tab-btn {
  width: 100px;
  height: 40px;
}

.bottom-line-start {
  width: 40px;
  height: 100%;
  border: solid;
  border-radius: 12px;
  border-width: 1px;
  border-color: lightgray;
}
</style>
