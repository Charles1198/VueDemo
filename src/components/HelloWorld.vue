<template>
  <div class="hello">
    <div class="hello_item" v-for="link in linkList" :key="link" @click="routeInto(link.link)">
      <img src="/static/image/logo.png" width="64" height="64">
      <div>{{link.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      linkList: [
        { title: 'Todo', link: '/Todolist' },
        { title: 'Flex 布局', link: '/Flex' },
        { title: 'Axios 使用', link: '/Axios' },
        { title: '功能测试', link: '/FunctionTest' },
        { title: 'Canvas 使用', link: '/Canvas' },
        { title: '仿知乎对战', link: '/Zhihu' },
        { title: '动效', link: '/AnimPage' },
        { title: 'CSS 动画', link: '/CSSAnim' },
        { title: '上传文件', link: '/UploadFile' },
        { title: '组卷页面', link: '/PaperPage' },
        { title: 'Svg 使用', link: '/SvgPage' },
        { title: '七巧板', link: '/Tangram' },
        { title: 'Vuex 使用', link: '/VuexPage1' },
        { title: 'Asyn', link: '/ParentPage' },
        { title: 'Html to Word', link: '/Html2Word' },
        { title: 'Html to Pdf', link: '/Html2Pdf' },
        { title: 'Html 根据内容高度分页', link: '/HtmlPaging' },
      ]
    };
  },
  methods: {
    routeInto: function (page) {
      this.$router.push(page)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  margin: auto;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
}

.hello_item {
  width: 220px;
  height: 120px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 20px;
  padding: 20px;
  text-align: center;

  &:hover {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
  }
}
</style>
