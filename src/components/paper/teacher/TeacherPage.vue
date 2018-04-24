<template>
  <div id="teacher">
    <div id="teacher-head">
      <div><img src="/static/image/logo.png" width="64" height="64"></div>
      <h2>教师</h2>
      <span>华东理工大学附属中学</span>
    </div>
    <div id="teacher-body">
      <div id="menus">
        <div class="menu" @click="$router.push('/PaperPage/TeacherPage')">个人信息</div>
        <div class="menu" @click="$router.push('/PaperPage/TeacherPage/TeacherPaperManage')">组卷管理</div>
        <div class="menu" @click="$router.push('/PaperPage/TeacherPage/TeacherCollection')">习题收藏</div>
        <div class="menu">统计分析</div>
        <div class="menu-quit">退出账号</div>
      </div>
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
#teacher {
  width: $page-width;
  text-align: center;
  margin: auto;

  &-head {
    padding: 20px;
    margin: auto;
    background: lightgreen;
  }

  &-body {
    display: flex;
  }
}

h2 {
  margin: 10px;
}

#menus {
  width: 180px;
  background: white;
  margin: 10px 0;
}

.menu {
  padding: 8px;
  margin: 6px;

  &:hover {
    background: rgb(27, 170, 27);
    color: white;
  }

  &-quit {
    padding: 8px;
    margin: 6px;
    border-top: solid 1px lightgray;

    &:hover {
      background: rgb(228, 81, 62);
      color: white;
    }
  }
}

#content {
  width: 100%;
  background: white;
  margin: 10px 0 10px 10px;
}
</style>
