<template>
  <div>
    <div class="condition-result">
      <div>一共100道题目</div>
      <button @click="toTestPaperPreview">试卷预览</button>
    </div>
    <div v-for="question in questionList" :key="question.id">
      <questionBox :question="question" :inPaper="false" />
    </div>
  </div>
</template>

<script>
import questionBox from './QuestionBox'

export default {
  name: 'filtrate',
  components: {
    questionBox
  },
  props: {
    filtrateConditions: Object
  },
  data() {
    return {
      questionList: [
        {
          id: '100',
          type: '选择题',
          difficulty: '适中',
          title: '我是题目',
          answer: '我是答案',
          analysis: '我是解析'
        },
        {
          id: '101',
          type: '选择题',
          difficulty: '适中',
          title: '我是题目',
          answer: '我是答案',
          analysis: '我是解析'
        },
        {
          id: '103',
          type: '填空题',
          difficulty: '简单',
          title: '我是题目',
          answer: '我是答案',
          analysis: '我是解析'
        },
        {
          id: '140',
          type: '判断题',
          difficulty: '困难',
          title: '我是题目',
          answer: '我是答案',
          analysis: '我是解析'
        }
      ]
    };
  },
  methods: {
    toTestPaperPreview: function () {
      //使用router的params传递参数时，只能使用this.$router.push({ name: '...', params: {} })
      //使用router的query传递参数时，可以使用this.$router.push({ path: '...', params: {} })
      //区别是query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示
      this.$router.push({ name: 'PaperPreview', params: { 'questionList': this.questionList } })
    }
  }
};
</script>

<style lang="scss" scoped>
.condition-result {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
}
</style>

