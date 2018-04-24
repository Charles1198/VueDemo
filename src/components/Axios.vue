<template>
  <div id="axios">
    <h2>axios 的使用</h2>
    <br><br>
    <div class="login">
      <span>Post 方法</span>
      <span>用户名</span>
      <input class="login-input" type="text" v-model="username">
      <span>密码</span>
      <input class="login-input" type="password" v-model="password">
      <button class="login-btn" @click="login">登陆</button>
      <span v-show="loginResult != ''">{{loginResult}}</span>
      <h6>残联客户端接口，用户名 zhangbiao 密码 zhangbiao22</h6>
    </div>
    <br><br>
    <div>
      <span>Get 方法</span>
      <button class="login-btn" @click="getSchoolList">获取学校列表</button>
      <div v-for="school in schoolList" :key="school.name">{{school.name}}</div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

//残联客户端接口，用户名 zhangbiao 密码 zhangbiao22
const BASE_URL_CDPF = 'http://container-tomcat-test-8-jre8.bqteam.com/cdpf-admin-api-v2'
//appManager
const BASE_URL_APPMANAGER = 'https://api-app-manager.bqteam.com'

export default {
  name: "axios",
  data() {
    return {
      username: '',
      password: '',
      loginResult: '',
      schoolList: []
    }
  },
  methods: {
    login: function () {
      let that = this
      axios.post(BASE_URL_CDPF + '/api/login', {
        adminAccount: this.username,
        password: this.password
      })
        .then(function (response) {
          console.log(response)
          if (response.data.status_code == '200') {
            that.loginResult = '登陆成功！'
          } else {
            that.loginResult = '登陆失败：' + response.data.status_code + ',' + response.data.message
          }
          setTimeout(() => {
            that.loginResult = ''
          }, 3000)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    getSchoolList: function () {
      let that = this
      axios.get(BASE_URL_APPMANAGER + '/school/list')
        .then(function (response) {
          console.log(response)
          that.schoolList = response.data.data.schools
          setTimeout(() => {
            that.schoolList = []
          }, 3000)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

};
</script>

<style lang="scss" scoped>
#axios {
  min-width: 800px;
  margin: 40px 100px;
}

.login {
  margin: 0;

  &-input {
    width: 100px;
    height: 32px;
    margin: 0 10px;
    background-color: white;
    border: none;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    box-shadow: 0 1px 1px grey;
  }

  &-btn {
    padding-left: 20px;
    padding-right: 20px;
    height: 32px;
    background-color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 1px grey;
    font-size: 14px;
    outline: none;

    &:hover {
      box-shadow: 0 2px 4px grey;
    }
  }
}

h6 {
  margin: 4px 0;
}
</style>
