<template>
    <div class="hello">
        <div class="hello_item" v-for="link in linkList" :key="link">
            <div>
                <img src="/static/image/logo.png" width="64" height="64">
            </div>
            <router-link :to="link.link">{{link.title}}</router-link>
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
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: 0 100px;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
}

.hello_item {
  width: 200px;
  height: 120px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 20px;
  padding: 20px;
  text-align: center;
}
</style>
