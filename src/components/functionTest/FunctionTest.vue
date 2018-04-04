<template>
  <div id="function-test">
    <h2>软件功能测试</h2>
    <el-button class="test-new" @click="newVisible = true">新建功能测试</el-button>
    <el-dialog title="新建功能检测" :visible.sync="newVisible">
      <el-form :model="newTest">
        <el-form-item label="名称">
          <el-input v-model="newTest.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="newVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNewTest">确 定</el-button>
      </div>
    </el-dialog>
    <el-table :data="testList" border style="width: 100%">
      <el-table-column prop="name" label="项目名称"></el-table-column>
      <el-table-column prop="progress" label="测试进度" width="120"></el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="mini" @click="toTest(scope.$index)">测试</el-button>
          <el-button size="mini" type="danger" @click="deleteTest(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import global from './FunGlobal'
const localTestKey = 'localTestKey'

export default {
  name: "function-test",
  data() {
    return {
      newVisible: false,
      newTest: { name: '' },
      testList: [
      ]
    };
  },
  mounted: function () {
    if (window.localStorage.getItem(localTestKey) != null) {
      this.testList = JSON.parse(window.localStorage.getItem(localTestKey))
    }

    if (this.$route.query) {
      let testData = this.$route.query.testData
      let index = this.$route.query.index

      this.testList[index] = testData
      this.saveTest()
    }
  },
  methods: {
    /**
     * @description 新增测试
     */
    addNewTest: function () {
      if (this.newTest.name == '') {
        this.$message({
          type: 'info',
          message: '项目名不能为空'
        });
        return
      }

      for (let i = 0; i < this.testList.length; i++) {
        const element = this.testList[i]
        if (element.name == this.newTest.name) {
          this.$message({
            type: 'info',
            message: '项目名不能重复，请检查'
          });
          this.newTest = { name: '' }
          return
        }
      }

      let test = global.testRawFile
      test.name = this.newTest.name
      test.progress = '等待测试'
      this.testList.push(test)
      this.saveTest()

      this.newVisible = false
      this.newTest = { name: '' }
    },

    /**
     * @description 开始/继续某次测试 
     */
    toTest: function (index) {
      this.$router.push({ name: 'TestPage', params: { data: this.testList[index], index: index } })
    },

    /**
      * @description 删除某次测试 
      * @param 要被删除的测试的索引
      */
    deleteTest: function (index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.testList.splice(index, 1)
        this.saveTest()
      }).catch(() => {
      });
    },
    /**
     * @description 保存某次测试 
     */
    saveTest: function () {
      window.localStorage.setItem(localTestKey, JSON.stringify(this.testList))
    }
  }
};
</script>

<style scoped>
#function-test {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
}

h3 {
  margin: 0px;
}

.test-new {
  font-size: 20px;
  background-color: #03a9f4;
  color: white;
  border-radius: 8px;
  margin-left: auto;
  margin-right: 0px;
  margin-bottom: 20px;
}

.item-box {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  margin: 20px 0px;
  padding: 20px;
}
</style>
