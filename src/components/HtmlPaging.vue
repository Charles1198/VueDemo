<template>
  <div>
    <div class="page-border" v-for="(page, index) in pageList" :key="index" v-show="index < pageCount">
      <div :id="'content' + page" class="content">
        <div :id="'text' + text" class="text" v-for="text in textList" :key="text">
          {{text}}童年记忆中印象最深的画面就是我顶着一身的雪花，跌跌撞撞地跑回家，一推门就看见煤炉上咕嘟咕嘟煮着的一大锅稀饭，玉米面的小饼子在烤箱里吱吱地叫，散发着浓郁的香气，饭桌上早摆好了摊鸡蛋，土豆丝，妈妈自己腌的小咸菜，暖烘烘的屋子里热气腾腾的，一下子就融化了我小小的心灵
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageHeight: 300,
      contentHeight: 0,
      pageCount: 10,
      pageList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      textList: [1, 2, 3, 4, 5, 6, 7, 8],
      textPosition: [],
      cutPosition: []
    }
  },
  mounted() {
    this.computeHeight()
    this.moveContent()
  },
  methods: {
    computeHeight() {
      this.contentHeight = document.getElementById('content0').scrollHeight
      this.pageCount = parseInt(this.contentHeight / this.pageHeight) + 1
      for (let index = 0; index < this.pageCount; index++) {
        this.cutPosition.push(index * 300)
      }
      this.cutPosition.push(this.contentHeight)

      let contentTop = document.getElementById('content0').offsetTop
      this.textPosition.length = 0
      this.textList.forEach(text => {
        let positionY = document.getElementById('text' + text).offsetTop
        this.textPosition.push(positionY - contentTop)
      })

      for (let i = 0; i < this.cutPosition.length - 2; i++) {
        let cutY = this.cutPosition[i]

        for (let j = this.textPosition.length - 1; j >= 0; j--) {
          let textY = this.textPosition[j]
          if (textY < cutY) {
            let cut_text = cutY - textY
            let realCutY = cutY + (24 - cut_text % 24)
            this.cutPosition[i] = realCutY
            break
          }
        }
      }
    },

    moveContent() {
      this.pageList.forEach(page => {
        if (page < this.pageCount) {
          document.getElementById('content' + page).style.height = this.cutPosition[page + 1] - this.cutPosition[page] + 'px'
          document.getElementById('content' + page).scrollTop = this.cutPosition[page]
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-border {
  width: fit-content;
  height: 380px;
  margin: 10px 0;

  border: solid 1px lightgray;
}

.content {
  overflow: hidden;

  width: 600px;
  height: 300px;
  margin: 40px;
}

.text {
  line-height: 24px;
}
</style>

