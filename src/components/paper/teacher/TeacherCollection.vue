<template>
  <div>
    <div id="tabs">
      <router-link to="/PaperPage/TeacherPage/TeacherCollection">习题收藏</router-link>
      <router-link to="/PaperPage/TeacherPage/TeacherCollection/TeacherCollectionPaper">组卷收藏</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
#tabs {
  margin: 10px 40px;
  border-bottom: solid 1px lightgray;
  display: flex;
}
jiangjiang .tab {
  padding: 10px 20px;
}

a {
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
}

.router-link-exact-active {
  color: green;
  border-bottom: solid 2px green;
}
</style>
