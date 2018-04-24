<template>
  <div id="upload">
    <a class="btn" @click="toggleShow">上传图片</a>
    <button @click="toggleShow">上传图片</button>
    <my-upload url="/upload" lang-type="en" field="img" key="1" max-size="500" :only-single="true" :value="true" :only-img="true" :params="params"></my-upload>
  </div>
</template>
<script>

export default {
  name: 'upload',
  data() {
    return {
      show: true
    }
  },
  components: {
    // 'my-upload': myUpload
  },
  methods: {
    toggleShow: function () {
      this.show = !this.show
    }
  }
}
</script>
<style>
#upload {
  position: relative;
}
</style>
