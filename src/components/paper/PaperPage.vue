<template>
    <div id="paper">
        <div class="paper-head">
            <h1>组卷系统</h1>
        </div>
        <div class="paper-tab">
            <div class="paper-tabs">
                <div class="tab-model" :class="tabIndex == 0 ? 'tab-model-active' : ''" @click="shiftModel(0)">首页</div>
                <div class="tab-model" :class="tabIndex == 1 ? 'tab-model-active' : ''" @mouseover="showDropmenu(1)" @mouseout="mouseOutFromTab">
                    <span>手动组卷</span>
                    <div class="tab-dropdown" v-show='dropmenu1Active' @mouseout="mouseOutFromDropmenu">
                        <div class="link" @click="shiftModel(10)">按章节</div>
                        <div class="link" @click="shiftModel(11)">按知识点</div>
                    </div>
                </div>
                <div class="tab-model" :class="tabIndex == 2 ? 'tab-model-active' : ''" @mouseover="showDropmenu(2)" @mouseout="mouseOutFromTab">
                    <span>智能组卷</span>
                    <div class="tab-dropdown" v-show='dropmenu2Active' @mouseout="mouseOutFromDropmenu">
                        <div class="link" @click="shiftModel(20)">按章节</div>
                        <div class="link" @click="shiftModel(21)">按知识点</div>
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
        showDropmenu: function (index) {
            this.dropmenu1Active = index == 1
            this.dropmenu2Active = index == 2
        },
        mouseOutFromTab: function () {
            console.log('mouseOutFromTab')
            this.outFormTab = true
            if (this.outFormDropmenu) {
                this.hideDropmenu()
            }
        },
        mouseOutFromDropmenu: function () {
            console.log('mouseOutFromDropmenu')
            this.outFormDropmenu = true
            if (this.outFormTab) {
                this.hideDropmenu()
            }
        },

        hideDropmenu: function () {
            this.dropmenu1Active = false
            this.dropmenu2Active = false
            this.outFormTab = false
            this.outFormDropmenu = false
        },

        shiftModel: function (index) {
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

.link {
  font-size: 16px;
  color: #222;
  margin: 8px;
}

.tab-dropdown {
  margin-top: 10px;
  background-color: white;
  box-shadow: 0px 2px 32px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 4px;
}

//使用 router-link-active 时，主路由 /PaperPage 总是 active 的，使用 router-link-exact-active 才可以
// .router-link-exact-active {
//   color: yellowgreen;
//   border-bottom-width: 3px;
// }
</style>
