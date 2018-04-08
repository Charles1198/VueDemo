<template>
    <div id="kp">
        <div id="kp-left">
            <div id="kp-left-header">
                <span>语文</span>
                <span>展开</span>
            </div>
            <div id="kp-left-tree">
                <dataTree :model="model" v-on:clickTreeLeaf="clickTreeLeaf" />
            </div>
        </div>
        <div id="kp-right">
            <div class="condition">
                <!-- 在这里用 v-on:事件="函数" 来使父组件响应子组件里面的自定义函数，其中“事件”是子组件中定义的事件，函数是父组件用来响应子组建通信的函数，这里不用写参数 -->
                <!-- 使用 props 传递参数时，使用 参数名="参数" 时参数是普通 string 类型，使用 :参数名="参数" 时参数是动态 object 类型 -->
                <conditionBox title="题目类型:" :conditions="questionTypes" v-on:selectCondition="selectType" />
            </div>
            <div class="condition">
                <conditionBox title="题目难度:" :conditions="questionDifficulty" v-on:selectCondition="selectDifficultyLevel" />
            </div>
            <!--筛选试卷  -->
            <filtrateQuestions :filtrateConditions="filtrateConditions" />
        </div>
    </div>
</template>
<script>
import paperData from "./PaperData"
import conditionBox from "./ConditionBox"
import filtrateQuestions from "./FiltrateQuestions"
import dataTree from "./DataTree"

export default {
    name: "exam",
    components: {
        conditionBox,
        filtrateQuestions,
        dataTree
    },
    data() {
        return {
            //题目类型
            questionTypes: ["选择", "判断", "填空", "计算", "解答", "证明"],
            //题目难度
            questionDifficulty: ["简单", "一般", "适中"],
            filtrateConditions: {},
            model: {
                name: '数学',
                children: [
                    {
                        id: '1',
                        name: '第一章',
                        children: [
                            {
                                id: '1-1',
                                name: '第一节',
                                children: [
                                    {
                                        id: '1-1-1',
                                        name: '第一目'
                                    },
                                    {
                                        id: '1-1-2',
                                        name: '第二目'
                                    },
                                ]
                            },
                            {
                                id: '1-2',
                                name: '第二节',
                                children: [
                                    {
                                        id: '1-2-1',
                                        name: '第一目'
                                    },
                                    {
                                        id: '1-2-2',
                                        name: '第二目'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        id: '2',
                        name: '第二章',
                        children: [
                            {
                                id: '2-1',
                                name: '第一节',
                                children: [
                                    {
                                        id: '2-1-1',
                                        name: '第一目'
                                    },
                                    {
                                        id: '2-1-2',
                                        name: '第二目'
                                    },
                                ]
                            },
                            {
                                id: '2-2',
                                name: '第二节',
                                children: [
                                    {
                                        id: '2-2-1',
                                        name: '第一目'
                                    },
                                    {
                                        id: '2-2-2',
                                        name: '第二目'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    methods: {
        //这个函数用来相应子组件通信请求，参数名可以和子组件中定义的不同
        /**
         * 选择题目难度
         * @param (int) 难度编号
         */
        selectDifficultyLevel: function (level) {
            console.log(level)
        },
        /**
         * 选择题目难度
         * @param (int) 难度编号
         */
        selectType: function (id) {
            console.log(id)
        },
        clickTreeLeaf: function (id) {
            console.log(id)
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
  border: solid;
  border-color: gray;
  border-width: 1px;

  &-header {
    padding: 8px;
    background-color: cadetblue;
    color: white;
    display: flex;
    justify-content: space-between;
  }

  &-tree {
    margin: 8px;
  }
}

#kp-right {
  width: $page-width - 240px;
}

.condition {
  border-bottom: 1px dashed #dddddd;
}
</style>
