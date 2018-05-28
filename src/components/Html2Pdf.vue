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
    <el-button @click="convertToPdf">导出 pdf</el-button>
    <br><br>
    <div class="content-border">
      <div id="content">
        <h1>html to pdf</h1>
        <h2>html to pdf</h2>
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

const pageFormats = { // Size in pt of various paper formats
  'a0': [2383.94, 3370.39],
  'a1': [1683.78, 2383.94],
  'a2': [1190.55, 1683.78],
  'a3': [841.89, 1190.55],
  'a4': [595.28, 841.89],
  'a5': [419.53, 595.28],
  'a6': [297.64, 419.53],
  'a7': [209.76, 297.64],
  'a8': [147.40, 209.76],
  'a9': [104.88, 147.40],
  'a10': [73.70, 104.88],
  'b0': [2834.65, 4008.19],
  'b1': [2004.09, 2834.65],
  'b2': [1417.32, 2004.09],
  'b3': [1000.63, 1417.32],
  'b4': [708.66, 1000.63],
  'b5': [498.90, 708.66],
  'b6': [354.33, 498.90],
  'b7': [249.45, 354.33],
  'b8': [175.75, 249.45],
  'b9': [124.72, 175.75],
  'b10': [87.87, 124.72],
  'c0': [2599.37, 3676.54],
  'c1': [1836.85, 2599.37],
  'c2': [1298.27, 1836.85],
  'c3': [918.43, 1298.27],
  'c4': [649.13, 918.43],
  'c5': [459.21, 649.13],
  'c6': [323.15, 459.21],
  'c7': [229.61, 323.15],
  'c8': [161.57, 229.61],
  'c9': [113.39, 161.57],
  'c10': [79.37, 113.39],
  'dl': [311.81, 623.62],
  'letter': [612, 792],
  'government-letter': [576, 756],
  'legal': [612, 1008],
  'junior-legal': [576, 360],
  'ledger': [1224, 792],
  'tabloid': [792, 1224],
  'credit-card': [153, 243]
}

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

    convertToPdf() {
      let paperWidth = 595.28
      let paperHeight = 841.89

      html2canvas(document.getElementById('content'), {
        allowTaint: true
      }).then(function (canvas) {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        //一页pdf显示html页面生成的canvas高度;
        let pageHeight = contentWidth / paperWidth * paperHeight
        //未生成pdf的html页面高度
        let leftHeight = contentHeight
        //页面偏移
        let position = 0
        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        let imgWidth = paperWidth * 0.8
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
            position -= paperHeight
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save('test.pdf')
      })
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
  padding: 0 40px;
  background: #eee;
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

