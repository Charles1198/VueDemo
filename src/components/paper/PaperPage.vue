<template>
    <div id="paper">
        <div class="paper-head">
            <h1>组卷系统</h1>
        </div>
        <div class="paper-tab">
            <div class="paper-tabs">
                <div class="tab-model" :class="tabIndex == 0 ? 'tab-model-active' : ''" @click="shiftModel(0)">首页</div>
                <div class="tab-model" :class="tabIndex == 1 ? 'tab-model-active' : ''" @click="shiftModel(1)">
                    <span>手动组卷</span>
                    <div v-if='tabIndex == 1' class="dropdownWrapper" v-show='dropdownActive'>
                        <router-link tag="div" class="tab-model" to="/PaperPage/PaperByHand">手动组卷</router-link>
                        <router-link tag="div" class="tab-model" to="/PaperPage/PaperAuto">智能组卷</router-link>
                    </div>
                    <!-- <ul v-if='tabIndex == 1' class="dropdownWrapper" v-show='dropdownActive'>
                        <li v-for='(item, index) in dropParams'>{{item}}</li>
                    </ul> -->
                </div>
                <div class="tab-model" :class="tabIndex == 2 ? 'tab-model-active' : ''" @click="shiftModel(2)">智能组卷</div>

                <!-- <router-link tag="div" class="tab-model" to="/PaperPage">首页</router-link>
                <router-link tag="div" class="tab-model" to="/PaperPage/PaperByHand">手动组卷</router-link>
                <router-link tag="div" class="tab-model" to="/PaperPage/PaperAuto">智能组卷</router-link> -->
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
            tabIndex: 1,
            dropdownActive: true,
            dropParams: ['亚洲', '北美洲', '欧洲', '非洲']
        }
    },
    methods: {
        shiftModel: function (index) {
            switch (index) {
                case 0:
                    this.$router.push('/PaperPage')
                    break;
                case 1:
                    this.$router.push('/PaperPage/PaperByHand')
                    break;
                case 2:
                    this.$router.push('/PaperPage/PaperAuto')
                    break;
                default:
                    break;
            }
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
  height: 60px;
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
  text-align: center;
  color: white;
  font-size: 20px;
  border-width: 0;
}

.tab-model-active {
  color: yellowgreen;
  border-bottom-width: 3px;
  border-bottom-color: yellowgreen;
}

//使用 router-link-active 时，主路由 /PaperPage 总是 active 的，使用 router-link-exact-active 才可以
.router-link-exact-active {
  color: yellowgreen;
  border-bottom-width: 3px;
}
</style>
