<template>
    <div id="exam">
        <div class="exam-head">
            <h1>手动组卷</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: "exam",
    data() {
        return {
            tabIndex: 0
        }
    },
    methods: {
        shiftModel: function (index) {
            this.tabIndex = index
        }
    }
}
</script>
<style lang="scss" scoped>
$page-width: 1000px;

#exam {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.exam-head {
  width: $page-width;
}
</style>
