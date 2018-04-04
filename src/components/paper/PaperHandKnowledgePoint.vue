<template>
    <div id="kp">
        <div id="kp-left">
            <div id="kp-box-header">
                <span>语文</span>
                <span>展开</span>
            </div>
            <div>
                
            </div>
        </div>
        <div id="kp-right">
            <div class="condition">
                <!-- 在这里用 v-on:事件="函数" 来使父组件响应子组件里面的自定义函数，其中“事件”是子组件中定义的事件，函数是父组件用来响应子组建通信的函数，这里不用写参数 -->
                <!-- 使用 props 传递参数时，使用 参数名="参数" 时参数是 string 类型，使用 :参数名="参数" 时参数是 object 类型 -->
                <conditionBox title="题目类型:" :conditions="questionTypes" v-on:selectCondition="selectType"/>
            </div>
            <div class="condition">
                <conditionBox title="题目难度:" :conditions="questionDifficulty" v-on:selectCondition="selectDifficultyLevel"/>
            </div>
            <div class="condition-result">
                <div>一共100道题目</div>
                <button>试题篮</button>
            </div>
            
            <div v-for="question in questionList" v-bind:key="question">
                <questionBox :question="question"/>
            </div>
        </div>
    </div>
</template>
<script>
import paperData from "./PaperData";
import conditionBox from "./ConditionBox";
import questionBox from "./QuestionBox";

export default {
  name: "exam",
  components: {
    conditionBox,
    questionBox
  },
  data() {
    return {
      //题目类型
      questionTypes: ["选择", "判断", "填空", "计算", "解答", "证明"],
      //题目难度
      questionDifficulty: ["简单", "一般", "适中"],
      questionList: [
        {
          id: "100",
          type: "选择题",
          difficulty: "适中",
          title: "我是题目"
        },
        {
          id: "103",
          type: "选择题",
          difficulty: "简单",
          title: "我是题目"
        },
        {
          id: "140",
          type: "选择题",
          difficulty: "困难",
          title: "我是题目"
        },
        {
          id: "170",
          type: "选择题",
          difficulty: "适中",
          title: "我是题目"
        }
      ]
    };
  },
  methods: {
    //这个函数用来相应子组件通信请求，参数名可以和子组件中定义的不同
    /**
     * 选择题目难度
     * @param (int) 难度编号
     */
    selectDifficultyLevel: function(level) {
      console.log(level);
    },
    /**
     * 选择题目难度
     * @param (int) 难度编号
     */
    selectType: function(id) {
      console.log(id);
    }
  }
};
</script>
<style lang="scss" scoped>
#kp {
  width: $page-width;
  display: flex;
}

#question-set {
  width: 100px;
  height: 100px;
  background: cadetblue;
}

#kp-left {
  width: 240px;
  height: 100%;
  background-color: azure;
  margin: 8px;
  padding: 8px;
  border: solid;
  border-color: gray;
  border-width: 1px;

  &-header {
    height: 40px;
    background-color: cadetblue;
  }
}

#kp-right {
  width: $page-width - 240px;
}

.condition {
  border-bottom: 1px dashed #dddddd;
}

.condition-result {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
}
</style>
