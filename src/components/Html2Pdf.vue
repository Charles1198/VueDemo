<template>
  <div>
    <h2>html-pdf 的使用，将 Html 转换成 pdf</h2>
    <div>安装</div>
    <!-- <div>npm i html-pdf</div> -->
    <div>npm install --save html2canvas</div>
    <div>npm install jspdf --save</div>
    <br>
    <div>引入</div>
    <div>import html2canvas from 'html2canvas'</div>
    <div>import JsPDF from 'jspdf'</div>
    <br>
    <el-button @click="convertToWord">导出 pdf</el-button>
    <br><br>
    <div class="content-border">
      <div id="content">
        <h1>html to word</h1>
        <h2>html to word</h2>
        <div>这是一个 div</div>
        <div class="big">这是一个大 div</div>
        <div class="red">这是一个红色的 div</div>
        <span>这是一个 span </span>
        <div>这&nbsp;里&nbsp;&nbsp;有&nbsp;&nbsp;&nbsp;好&nbsp;&nbsp;&nbsp;&nbsp;多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;空&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
        <table class="score-table">
          <tbody>
            <tr>
              <td>这是一个</td>
              <td>table</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <div>下面是一张图片</div>
        <img src="../assets/rotate_right.png" @mousedown="rotateLeft(false)">
        <div class="big" v-for="i in divlist" :key="i">
          这是第{{i + 1}}个div
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
  data() {
    return {
      divlist: []
    }
  },
  mounted() {
    this.setupDivlist()
  },
  methods: {
    setupDivlist() {
      this.divlist.lenght = 0
      for (let index = 0; index < 60; index++) {
        this.divlist.push(index)
      }
    },

    convertToWord() {
      
      var title = this.htmlTitle
      html2canvas(document.getElementById('content'), {
        allowTaint: true
      }).then(function (canvas) {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        //一页pdf显示html页面生成的canvas高度;
        let pageHeight = contentWidth / 592.28 * 841.89
        //未生成pdf的html页面高度
        let leftHeight = contentHeight
        //页面偏移
        let position = 0
        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        let imgWidth = 595.28
        let imgHeight = imgWidth / contentWidth * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)

        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        let PDF = new JsPDF('', 'pt', 'a4')
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(title + '.pdf')
      }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.content-border {
  border: 1px solid #777;
  width: 1000px;
}

#content {
  padding: 40px;
}

.score-table {
  margin: 10px 10px 10px 0;

  border-spacing: 0;

  border-top: 1px solid #777;
  border-left: 1px solid #777;
}

td {
  width: 72px;
  height: 24px;

  text-align: center;

  border-right: 1px solid #777;
  border-bottom: 1px solid #777;
}

.big {
  font-size: 24px;
}

.red {
  color: red;
}
</style>

