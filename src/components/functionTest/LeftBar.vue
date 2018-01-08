<template>
  <div>
    <el-menu mode="vertical" :unique-opened="true">
      <el-submenu v-for="(menu, index) in menuList" :index="menu.index" :key="menu.index">
        <template class="meun_level_1" slot="title">
          {{menu.title}}
        </template>
        <el-submenu v-for="(submenu, subIndex) in menu.submenu" :index="submenu.index" :key="menu.index">
          <template style="text-align: start;width:100%" class="meun_level_2" slot="title">
            {{submenu.title}}
          </template>
          <el-menu-item class="meun_level_3" v-for="menuitem in submenu.submenu" :index="menuitem.index" :key="menu.index">
            {{menuitem.title}}
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "left-bar",
  data() {
    return {
      menuList: [
        {
          title: "标识和鉴别",
          index: "1",
          submenu: [
            {
              title: "用户标识",
              index: "1-1",
              submenu: [
                {
                  title: "用户管理模块",
                  index: "/FunctionTest/page/UserControlModel"
                },
                {
                  title: "用户管理功能",
                  index: "1-1-2"
                }
              ]
            },
            {
              title: "用户账号规范",
              index: "1-2",
              submenu: [
                {
                  title: "账号实名制原则",
                  index: "1-2-1"
                },
                {
                  title: "账号有效期",
                  index: "1-2-2"
                },
                {
                  title: "账号状态",
                  index: "1-2-3"
                },
                {
                  title: "账号扫描",
                  index: "1-2-4"
                }
              ]
            }
          ]
        },
        {
          title: "访问控制",
          index: "2",
          submenu: [
            {
              title: "访问控制策略",
              index: "2-1",
              submenu: [
                {
                  title: "访问控制全覆盖",
                  index: "2-1-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style  scoped>
#left-bar {
  width: 250px;
  background-color: #f0f0ff;
}

</style>
