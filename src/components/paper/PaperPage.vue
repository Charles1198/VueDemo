<template>
    <div id="paper">
        <div class="paper-head">
            <h1>组卷系统</h1>
        </div>
        <div class="paper-tab">
            <div class="paper-tabs">
                <div class="tab-module" :class="tabIndex == 0 ? 'tab-module-active' : ''" @click="shiftPage(0)">首页</div>
                <div class="tab-module" :class="tabIndex == 1 ? 'tab-module-active' : ''" @mouseover="showDropmenu(1)">
                    <span>手动组卷</span>
                    <div class="tab-dropdown" v-show='dropmenu1Active'>
                        <div class="link" @click="shiftPage(10)">按章节</div>
                        <div class="link" @click="shiftPage(11)">按知识点</div>
                    </div>
                </div>
                <!-- <div class="tab-module" :class="tabIndex == 2 ? 'tab-module-active' : ''" @mouseover="showDropmenu(2)"> -->
                <div class="tab-module" :class="tabIndex == 2 ? 'tab-module-active' : ''" @mouseenter="showDropmenu(2)">
                    <span @mouseenter="move('进入 tab')" @mouseleave="move('离开 tab')">智能组卷</span>
                    <div class="tab-dropdown" v-show='dropmenu2Active' @mouseenter="move('进入 dropdown')" @mouseleave="move('离开 dropdown')">
                        <div class="link" @click="shiftPage(20)">按章节</div>
                        <div class="link" @click="shiftPage(21)">按知识点</div>
                    </div>
                </div>
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
            dropmenu1Active: false,
            dropmenu2Active: false,
            outFormTab: false,
            outFormDropmenu: false,
        }
    },
    methods: {
        move: function(message) {
            console.log(message)
        },

        showDropmenu: function (index) {
            this.dropmenu1Active = index == 1
            this.dropmenu2Active = index == 2
        },

        hideDropmenu: function () {
            this.dropmenu1Active = false
            this.dropmenu2Active = false
            this.outFormTab = false
            this.outFormDropmenu = false
        },
        /**
        * @description 切换页面 
        */
        shiftPage: function (index) {
            switch (index) {
                case 0:
                    this.$router.push('/PaperPage')
                    this.tabIndex = 0
                    break;
                case 10:
                    this.$router.push('/PaperPage/PaperHandChapter')
                    this.tabIndex = 1
                    break;
                case 11:
                    this.$router.push('/PaperPage/PaperHandKnowledgePoint')
                    this.tabIndex = 1
                    break;
                case 20:
                    this.$router.push('/PaperPage/PaperAutoChapter')
                    this.tabIndex = 2
                    break;
                case 21:
                    this.$router.push('/PaperPage/PaperAutoKnowledgePoint')
                    this.tabIndex = 2
                    break;
                default:
                    break;
            }
            this.hideDropmenu()
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

.tab-module {
  width: 120px;
  height: 60px;
//   padding: 20px 0;
  text-align: center;
  line-height: 60px;
  color: white;
  font-size: 20px;
  border-width: 0;
}

.tab-module-active {
  color: yellowgreen;
  border-bottom-width: 3px;
  border-bottom-color: yellowgreen;
}

.link {
  font-size: 16px;
  line-height: 32px;
  color: #222;
}

.tab-dropdown {
  box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 0px;
}

//使用 router-link-active 时，主路由 /PaperPage 总是 active 的，使用 router-link-exact-active 才可以
// .router-link-exact-active {
//   color: yellowgreen;
//   border-bottom-width: 3px;
// }
</style>
