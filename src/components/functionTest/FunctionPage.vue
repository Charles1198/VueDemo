<template>
  <div id="functionPage">
    <div class="item-box">
      <h3>检测点</h3>
      <span>用户管理模块</span>
    </div>
    <div class="item-box">
      <h3>检测点描述</h3>
      <span>系统应提供用户管理模块对用户进行管理</span>
    </div>
    <div class="item-box">
      <h3>风险等级</h3>
      <el-radio v-model="risk_level" label="1">高</el-radio>
      <el-radio v-model="risk_level" label="2">中</el-radio>
      <el-radio v-model="risk_level" label="3">低</el-radio>
    </div>
    <div class="item-box">
      <h3>符合程度</h3>
      <el-radio v-model="conform_level" label="1">符合</el-radio>
      <el-radio v-model="conform_level" label="2">部分符合</el-radio>
      <el-radio v-model="conform_level" label="3">不符合</el-radio>
      <el-radio v-model="conform_level" label="4">不适用</el-radio>
    </div>
    <div class="item-box">
      <h3>存在问题</h3>
      <textarea name="issue" id="1" cols="60" rows="1"></textarea>
    </div>
    <div class="item-box">
      <h3>整改要求</h3>
      <textarea name="require" id="1" cols="60" rows="1"></textarea>
    </div>
    <div class="item-box">
      <h3>整改结果</h3>
      <el-radio v-model="reform_result" label="1">已整改</el-radio>
      <el-radio v-model="reform_result" label="2">部分整改</el-radio>
      <el-radio v-model="reform_result" label="3">未整改</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "user_control_model",
  data() {
    return {
      risk_level: "1",
      conform_level: "1",
      reform_result: "3",
    };
  }
};
</script>

<style scoped>
#functionPage {
  width: 100%;
}

.item-box {
  display: flex;
  align-items: center;
  margin: 20px;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2)
}

h3 {
  width: 120px;
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
