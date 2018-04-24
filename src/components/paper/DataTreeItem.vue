<template id="item-template">
  <div>
    <div :class="{bold: isFolder}" @click="toggle">
      <span v-if="isFolder">{{ open ? '▼' : '▶' }}</span>
      {{ model.name }}
    </div>
    <div class="tree-children" v-show="open" v-if="isFolder">
      <item class="item" v-for="(model, index) in model.children" :key="index" :model="model" v-on:clickTreeLeaf="clickTreeLeaf">
      </item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  template: '#item-template',
  props: {
    model: Object
  },
  data: function () {
    return {
      open: true
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      } else {
        this.$emit('clickTreeLeaf', this.model.id)
      }
    },
    //因为是递归实现的树组件，所以要在每一个item里面定义向父组件传递数据的方法
    clickTreeLeaf: function (id) {
      this.$emit('clickTreeLeaf', id)
    }
  }
}
</script>

<style>
#dataTree {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.tree-children {
  margin-left: 20px;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>

