<template>
  <div>
    <el-menu mode="vertical" :unique-opened="true">
      <el-submenu v-for="(menu, index) in menuList" :index="menu.index" :key="menu.index">
        <template class="meun_level_1" slot="title">
          {{menu.title}}
        </template>
        <el-submenu v-for="(submenu, subIndex) in menu.submenu" :index="submenu.index" :key="submenu.index">
          <template style="text-align: start;width:100%" class="meun_level_2" slot="title">
            {{submenu.title}}
          </template>
          <el-menu-item v-for="menuitem in submenu.submenu" :index="menuitem.index" :key="menuitem.index" @click="clickItem(menuitem.index)">
            {{menuitem.title}}
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import global from './FunGlobal'
import bus from './EventBus.js'

export default {
  name: "left-bar",
  data() {
    return {
      menuList: global.testRawFile
    };
  },
  methods: {
    clickItem: function(index) {
      this.menuList.forEach(element => {
        element.submenu.forEach(element => {
          element.submenu.forEach(element => {
            if (element.index == index) {
              bus.$emit('testItem', element.testItem)
            }
        });
        });
      });
    }
  }
};
</script>

<style  scoped>
#left-bar {
  width: 250px;
  background-color: #f0f0ff;
}
</style>
