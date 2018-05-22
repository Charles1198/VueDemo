<template>
  <div>
    <h2>html-docx-js 的使用，将 Html 转换成 Word</h2>
    <div>安装</div>
    <div>npm i html-docx-js</div>
    <div>npm install file-saver --save</div>
    <br>
    <div>引入</div>
    <div>import htmlDocx from 'html-docx-js/dist/html-docx'</div>
    <div>import saveAs from 'html-docx-js/test/vendor/FileSaver'</div>
    <br>
    <el-button @click="convertToWord">导出 word</el-button>
    <br><br>
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
    </div>
    <div>下面是一张图片</div>
    <img src="../assets/rotate_right.png" @mousedown="rotateLeft(false)">
  </div>
</template>

<script>
import htmlDocx from 'html-docx-js/dist/html-docx'
import saveAs from 'html-docx-js/test/vendor/FileSaver'

export default {
  data() {
    return {

    }
  },
  methods: {
    convertToWord() {
      // var content = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>' + '<div>将 Html 转换成 Word</div>' + '</body></html>';
      var content = document.getElementById('content').outerHTML
      var converted = htmlDocx.asBlob(content)
      saveAs(converted, 'test.docx')

    }
  }
}
</script>

<style lang="scss" scoped>
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

