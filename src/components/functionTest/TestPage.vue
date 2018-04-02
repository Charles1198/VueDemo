<template>
  <div id="function-test">
    <div id="test-head">
      <!-- <el-button class="test-save-btn" @click="newVisible = true">保存并返回</el-button> -->
      <div class="test-name">{{testData.name}}</div>
    </div>
    <div id="test-body">
      <el-menu id="left-bar" mode="vertical" :default-openeds="defaultOpeneds">
        <el-submenu v-for="(menu, index) in testItems" :index="menu.index" :key="menu.index">
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
      <div id="test-field">
        <div class="item-box-v">
          <div class="item-box-no-boaard">
            <h3>检测点</h3>
            <span>{{testItem.testPoint}}</span>
          </div>
          <div class="item-box-no-boaard">
            <h3>检测点描述</h3>
            <span>{{testItem.testDescription}}</span>
          </div>
          <div class="item-box-no-boaard">
            <h3>风险等级</h3>
            <span>{{testItem.riskLevel}}</span>
          </div>
        </div>
        <div class="item-box-v">
          <div class="item-box-no-boaard">
            <h3>符合程度</h3>
            <el-radio v-model="testItem.conformLevel" label="1">符合</el-radio>
            <el-radio v-model="testItem.conformLevel" label="2">部分符合</el-radio>
            <el-radio v-model="testItem.conformLevel" label="3">不符合</el-radio>
            <el-radio v-model="testItem.conformLevel" label="4">不适用</el-radio>
          </div>
          <div class="item-box-no-boaard">
            <h3>测试记录</h3>
            <el-input type="textarea" autosize v-model="testItem.record"></el-input>
          </div>
          <div class="item-box-no-boaard">
            <h3>存在问题</h3>
            <el-input type="textarea" autosize v-model="testItem.issue"></el-input>
          </div>
          <div class="item-box-no-boaard">
            <h3>整改要求</h3>
            <el-input type="textarea" autosize v-model="testItem.require"></el-input>
          </div>
        </div>
        <div class="item-box">
          <h3>整改结果</h3>
          <el-radio v-model="testItem.reformResult" label="1">已整改</el-radio>
          <el-radio v-model="testItem.reformResult" label="2">部分整改</el-radio>
          <el-radio v-model="testItem.reformResult" label="3">未整改</el-radio>
        </div>
        <div class="item-box">
          <h3>检测完毕</h3>
          <el-checkbox v-model="testItem.done">该项检测完毕</el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 测试数据
let testData
// 索引
let index

export default {
  name: "function-test",
  data() {
    return {
      testData: {},
      testItems: {},
      testItem: {},
      defaultOpeneds: []
    }
  },
  mounted() {
    testData = this.$route.params.data
    index = this.$route.params.index

    this.testData = this.$route.params.data
    this.testItems = testData.testItems
    // 默认显示第一个测试项
    this.testItem = this.testItems[0].submenu[0].submenu[0].testItem
    // 默认leftBar全部打开
    this.testItems.forEach(a => {
      this.defaultOpeneds.push(a.index)
      a.submenu.forEach(b => {
        this.defaultOpeneds.push(b.index)
      });
    });
  },
  methods: {

    /**
     * @description 点击左侧测试菜单更改右侧测试项
     * @param {string} index 菜单项标识 
     */
    clickItem: function (index) {
      this.testItems.forEach(element => {
        element.submenu.forEach(element => {
          element.submenu.forEach(element => {
            if (element.index == index) {
              this.testItem = element.testItem
            }
          });
        });
      });
    },

    saveBack: function () {
      
    }
  },
  beforeRouteLeave: (to, from, next) => {
    to.query.testData = testData
    to.query.index = index
    next()
  }
};
</script>

<style scoped>
#test-head {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

#test-body {
  height: 100%;
  width: 100%;
  display: flex;
}

.test-save-btn {
  margin-left: 30px;
}

.test-name {
  width: 100%;
  text-align: center;
  margin-right: 100px;
  font-size: 24px;
}

#left-bar {
  width: 250px;
}

#test-field {
  width: 100%;
}

.item-box-v {
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.item-box {
  display: flex;
  align-items: center;
  margin: 20px;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.item-box-no-boaard {
  display: flex;
  align-items: center;
}

h3 {
  width: 140px;
  text-align: center;
}

span {
  font-size: 18px;
}

.el-radio {
  border: true;
}

textarea {
  margin: 10px 10px 10px 0px;
  font-size: 18px;
  height: auto;
}
</style>
