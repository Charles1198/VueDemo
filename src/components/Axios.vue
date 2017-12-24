<template>
  <div id="axios">
    <div class="login">
      <div class="login-box">
        <div class="login-input-title-box">
          <div class="login-input-title-left">Username</div>
        </div>
        <input class="login-input" type="text">
        <div class="div-space"></div>
        <div class="login-input-title-box">
          <div class="login-input-title-left">Username</div>
          <div class="login-input-title-right">Forget username</div>
        </div>
        <input class="login-input" type="password">
        <div class="login-box-row">
          <input id="remenber-password" type="checkbox">
          <label for="remenber-password">remenberPassword</label>
        </div>
        <div class="div-space"></div>
        <div class="login-box-row">
          <button class="login-btn">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "axios",
  
};
</script>

<style scoped>
#axios {
  width: 800px;
  margin: 0 auto;
  font-size: 12px;
}

.div-space {
  height: 16px;
}

.login {
  width: 800px;
  height: 400px;
  margin: 100px 0px;
  background-color: #45d690;
  display: flex;
  flex-direction: row-reverse;
}

.login-box {
  width: 240px;
  margin: 40px;
}

.login-input-title-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.login-input-title-left {
  color: white;
}

.login-input-title-right {
  color: blueviolet;
}

.login-input {
  width: 100%;
  height: 32px;
  background-color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  box-shadow: 0 1px 1px grey;
}

.login-box-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.login-btn {
  width: 90px;
  height: 32px;
  outline: none;
  background-color: green;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
}

</style>
