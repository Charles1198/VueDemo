<template>
  <div>
    <el-menu mode="vertical" :default-openeds="defaultOpeneds">
      <el-submenu v-for="(menu, index) in menuList" :index="menu.index" :key="menu.index">
        <template class="meun_level_1" slot="title">
          {{menu.title}}
        </template>
        <el-submenu v-for="(submenu, subIndex) in menu.submenu" :index="submenu.index" :key="submenu.index">
          <template style="text-align: start;width:100%" class="meun_level_2" slot="title">
            {{submenu.title}}
          </template>
          <el-menu-item v-for="menuitem in submenu.submenu" :index="menuitem.index" :key="menuitem.index" @click="clickItem(menuitem.index)">
            <img src="./image/test_no.svg" v-show="!menuitem.testItem.done" width="16">
            <img src="./image/test_passed.svg" v-show="menuitem.testItem.done && menuitem.testItem.conformLevel == '1'" width="16">
            <img src="./image/test_nopass.svg" v-show="menuitem.testItem.done && menuitem.testItem.conformLevel != '1'" width="16"> {{menuitem.title}}
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
      menuList: {},
      defaultOpeneds: []
    };
  },
  created() {
    
  },
  mounted: function () {
    bus.$on('test', data => {
      this.menuList = data.testItems

      this.menuList.forEach(a => {
        this.defaultOpeneds.push(a.index)
        a.submenu.forEach(b => {
          this.defaultOpeneds.push(b.index)
        });
      });
    })
  },
  methods: {
    clickItem: function (index) {
      this.menuList.forEach(element => {
        element.submenu.forEach(element => {
          element.submenu.forEach(element => {
            if (element.index == index) {
              bus.$emit('testItem', element.testItem)
            }
          });
        });
      });
    },
    statusImage: function (testItem) {
      if (!testItem.done) {
        console.log('./image/test_no.svg')
        return '/static/test_no.svg'
      } else {
        if (testItem.conformLevel == '0') {
          console.log('./image/test_passed.svg')
          return '/image/test_passed.svg'
        } else {
          console.log('./image/test_nopass.svg')
          return '/image/test_nopass.svg'
        }
      }
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
