<template>
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
        <textarea v-model="testItem.record" name="issue" id="1" cols="60" rows="1"></textarea>
      </div>
      <div class="item-box-no-boaard">
        <h3>存在问题</h3>
        <textarea v-model="testItem.issue" name="issue" id="1" cols="60" rows="1"></textarea>
      </div>
      <div class="item-box-no-boaard">
        <h3>整改要求</h3>
        <textarea v-model="testItem.require" name="require" id="1" cols="60" rows="1"></textarea>
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
</template>

<script>
import bus from './EventBus.js'

export default {
  name: "test-field",
  data() {
    return {
      testItem: {}
    };
  },
  methods: {
    save: function () {
      
    }
  },
  mounted: function () {
    bus.$on('testItem', data => {
      this.testItem = data.testItems
    })
  }
};
</script>

<style scoped>
#test-field {
  width: 100%;
}

.item-box-v {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
}
</style>
