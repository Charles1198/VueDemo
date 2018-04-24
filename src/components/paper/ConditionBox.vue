<template>
  <div class="condition-box">
    <!-- 标题 -->
    <div>{{title}}</div>
    <!-- 按钮们 -->
    <button class="condition-item" :class="index == selectedIndex ? 'condition-item-selected' : ''" @click="select(index)" v-if="conditions" v-for="(condition, index) in conditions" v-bind:key="condition">{{condition}}</button>
  </div>
</template>
<script>
export default {
  name: "condition",
  props: {
    //从父组件传来的条件标题
    title: "",
    //从父组件传来的条件数组
    conditions: Array
  },
  data() {
    return {
      //被选中的条件编号
      selectedIndex: 0
    };
  },
  methods: {
    /**
     * 选择条件
     * @param (int) 条件编号
     */
    select: function (index) {
      this.selectedIndex = index
      //在这里使用 this.$emit("事件", 参数...) 来进行子组件向父组件的通信
      this.$emit('selectCondition', index)
    }
  }
};
</script>
<style lang="scss" scoped>
.condition-box {
  margin-left: 10px;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.condition-item {
  width: 60px;
  height: 30px;
  margin: 0 6px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 14px;
  color: #333;
  //按钮被选中时的样式
  &-selected {
    color: white;
    background: green;
  }
}
</style>

