<template>
    <div id="paper">
        <div class="paper-head">
            <h1>组卷系统</h1>
        </div>
        <div class="paper-tab">
            <div class="paper-tabs">
                <!-- <button class="tab-model" :class="tabIndex == 0 ? 'tab-active' : ''" @click="shiftModel(0)">首页</button>
                <button class="tab-model" :class="tabIndex == 1 ? 'tab-active' : ''" @click="shiftModel(1)">手动组卷</button>
                <button class="tab-model" :class="tabIndex == 2 ? 'tab-active' : ''" @click="shiftModel(2)">智能组卷</button> -->
      
                <router-link tag="div" class="tab-model"  @click="shiftModel(0)" to="/PaperPage">首页</router-link>
                <router-link tag="div" class="tab-model"  @click="shiftModel(1)" to="/PaperPage/PaperByHand">手动组卷</router-link>
                <router-link tag="div" class="tab-model"  @click="shiftModel(2)" to="/PaperPage/PaperAuto">智能组卷</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "paper",
    data() {
        return {
            tabIndex: 0
        }
    },
    methods: {
        shiftModel: function (index) {
            this.tabIndex = index
        }
    }
}
</script>
<style lang="scss" scoped>
$page-width: 1000px;

#paper {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.paper-head {
  width: $page-width;
}

.paper-tab {
  width: 100%;
//   height: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #355a49;
  &s {
    width: $page-width;
    height: 100%;
    display: flex;
    a {
      display: inline-block;
      width: 120px;
      text-align: center;
    }
  }
}

.tab-model {
  width: 120px;
  padding: 20px 0;
  height: 100%;
  background-color: transparent;
  text-align: center;
  color: white;
  font-size: 20px;
  border-width: 0px;
  border-color: yellowgreen;
}

//使用 router-link-active 时，主路由 /PaperPage 总是 active 的，使用 router-link-exact-active 才可以
.router-link-exact-active {
  color: yellowgreen;
  border-bottom-width: 3px;
}
</style>
