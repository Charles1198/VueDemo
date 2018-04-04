<template>
  <div class="question-box">
    <div class="question-propert">
      <div>题号:{{question.id}} &nbsp;&nbsp;&nbsp;&nbsp; 题型:{{question.type}} &nbsp;&nbsp;&nbsp;&nbsp; 难度:{{question.difficulty}}</div>
      
    </div>
    <div class="question-body">
        <h1>我是题目</h1>
    </div>
    <div class="question-footer">
      <button>加入试卷篮</button>
      <button>收藏</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "condition",
  props: {
    //从父组件传来的条件数组
    question: Object
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
    select: function(index) {
      this.selectedIndex = index;
      //在这里使用 this.$emit("事件", 参数...) 来进行子组件向父组件的通信
      this.$emit("selectCondition", index);
    }
  }
};
</script>
<style lang="scss" scoped>
.question-box {
  margin: 10px;
  border: solid;
  border-color: gray;
  border-width: 1px;
}

.question-propert {
  height: 40px;
  background: #f1f1f1;
  display: flex;
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

  &-selected {
    color: white;
    background: green;
  }
}

.question-footer {
  display: flex;
  flex-direction: row-reverse;
}
</style>

