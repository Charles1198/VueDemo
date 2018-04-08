<template id="tree">
    <div>
        <dataTreeItem v-for="(model, index) in model.children" :key="index" :model="model" v-on:clickTreeLeaf="clickTreeLeaf" />
        <!-- <dataTreeItem :model="model.children[1]" v-on:clickTreeLeaf="clickTreeLeaf" /> -->
    </div>
</template>

<script>
import dataTreeItem from "./DataTreeItem"

export default {
    name: 'tree',
    components: {
        dataTreeItem
    },
    props: {
        model: Object
    },
    methods: {
        clickTreeLeaf: function (id) {
            this.$emit('clickTreeLeaf', id)
        }
    }
}
</script>

<style>

</style>

