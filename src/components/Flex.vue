<template>
  <div id="flex">
    <h2>容器属性：</h2>
    <h3>flex-direction属性决定主轴的方向（即项目的排列方向）</h3>
    <div class="horizontal-box">
      <h4 class="divide-4">flex-direction: row</h4>
      <h4 class="divide-4">flex-direction: row-reverse</h4>
      <h4 class="divide-4">flex-direction: column</h4>
      <h4 class="divide-4">flex-direction: column-reverse</h4>
    </div>
    <div class="horizontal-box">
      <div class="flex-direction-row">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
      <div class="flex-direction-row-reverse">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
      <div class="flex-direction-column">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
      <div class="flex-direction-column-reverse">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </div>
    <h3>flex-wrap 属性定义，如果一条轴线排不下，如何换行</h3>
    <div class="horizontal-box">
      <h4 class="divide-3">flex-wrap: nowrap</h4>
      <h4 class="divide-3">flex-wrap: wrap</h4>
      <h4 class="divide-3">flex-wrap: wrap-reverse</h4>
    </div>
    <div class="horizontal-box">
      <div class="flex-wrap-nowrap">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
      </div>
      <div class="flex-wrap-wrap">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
      </div>
      <div class="flex-wrap-wrap-reverse">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
      </div>
    </div>
    <h3>flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap</h3>
    <h3>justify-content 属性定义了项目在主轴上的对齐方式</h3>
    <div class="horizontal-box">
      <h4 class="divide-5">justify-conten: flex-start</h4>
      <h4 class="divide-5">justify-conten: flex-end</h4>
      <h4 class="divide-5">justify-conten: center</h4>
      <h4 class="divide-5">justify-conten: space-between</h4>
      <h4 class="divide-5">justify-conten: space-around</h4>
    </div>
    <div class="horizontal-box">
      <div class="justify-conten-flex-start">
        <div class="box">1</div>
        <div class="box">2</div>
      </div>
      <div class="justify-conten-flex-end">
        <div class="box">1</div>
        <div class="box">2</div>
      </div>
      <div class="justify-conten-center">
        <div class="box">1</div>
        <div class="box">2</div>
      </div>
      <div class="justify-conten-space-between">
        <div class="box">1</div>
        <div class="box">2</div>
      </div>
      <div class="justify-conten-space-around">
        <div class="box">1</div>
        <div class="box">2</div>
      </div>
    </div>
    <h3>align-items 属性定义项目在交叉轴上如何对齐</h3>
    <div class="horizontal-box">
      <h4 class="divide-5">align-items: flex-start</h4>
      <h4 class="divide-5">align-items: flex-end</h4>
      <h4 class="divide-5">align-items: center</h4>
      <h4 class="divide-5">align-items: baseline</h4>
      <h4 class="divide-5">align-items: stretch</h4>
    </div>
    <div class="horizontal-box">
      <div class="align-items-flex-start">
        <div class="box-a">1</div>
        <div class="box-b">2</div>
      </div>
      <div class="align-items-flex-end">
        <div class="box-a">1</div>
        <div class="box-b">2</div>
      </div>
      <div class="align-items-center">
        <div class="box-a">1</div>
        <div class="box-b">2</div>
      </div>
      <div class="align-items-baseline">
        <div class="box-a">1</div>
        <div class="box-b">2</div>
      </div>
      <div class="align-items-stretch">
        <div class="box-a">1</div>
        <div class="box-b">2</div>
      </div>
    </div>
    <h2>项目属性：</h2>
    <h3>order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0</h3>
    <div class="flex-item-box">
      <div class="box-order-3">order-3</div>
      <div class="box-order-1">order-1</div>
      <div class="box-order-2">order-2</div>
    </div>
    <h3>flex-grow 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大</h3>
    <div class="flex-item-box">
      <div class="box-flex-grow-0">grow-0</div>
      <div class="box-flex-grow-1">grow-1</div>
      <div class="box-flex-grow-1">grow-1</div>
      <div class="box-flex-grow-2">grow-2</div>
    </div>
    <h3>flex-shrink 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小</h3>
    <div class="flex-item-box">
      <div class="box-flex-shrink-0">shrink-0</div>
      <div class="box-flex-shrink-1">shrink-1</div>
      <div class="box-flex-shrink-1">shrink-1</div>
      <div class="box-flex-shrink-2">shrink-2</div>
    </div>
    <h3>flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小</h3>
    <div class="flex-item-box">
      <div class="box-flex-basis-2">basis-2</div>
      <div class="box-flex-basis-1">basis-1</div>
      <div class="box-flex-basis-1">basis-1</div>
      <div class="box-flex-basis-auto">basis-auto</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flex",
  
};
</script>

<style scoped>
#flex {
  width: 800px;
  margin: 0 auto;
}

.horizontal-box {
  display: flex;
  flex-direction: row;
}

.divide-3 {
  width: 33%;
}

.divide-4 {
  width: 25%;
}

.divide-5 {
  width: 20%;
}

.box {
  margin: 1px;
  padding: 10px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
}

.box-a {
  margin: 1px;
  padding: 30px 20px 20px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
}

.box-b {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
}

.flex-1 {
  display: flex;
  flex-direction: row;
}

.flex-direction-row {
  display: flex;
  width: 25%;
  margin: 0px 10px;
  flex-direction: row;
  border: solid;
  border-color: gray;
  border-width: 2px;
}

.flex-direction-row-reverse {
  display: flex;
  width: 25%;
  margin: 0px 10px;
  flex-direction: row-reverse;
  border: solid;
  border-color: gray;
  border-width: 2px;
}

.flex-direction-column {
  display: flex;
  width: 25%;
  margin: 0px 10px;
  flex-direction: column;
  border: solid;
  border-color: gray;
  border-width: 2px;
}

.flex-direction-column-reverse {
  display: flex;
  width: 25%;
  margin: 0px 10px;
  flex-direction: column-reverse;
  border: solid;
  border-color: gray;
  border-width: 2px;
}

.flex-wrap-nowrap {
  display: flex;
  width:33%;
  margin: 0px 10px;
  flex-wrap: nowrap;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.flex-wrap-wrap {
  display: flex;
  width:33%;
  margin: 0px 10px;
  flex-wrap: wrap;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.flex-wrap-wrap-reverse {
  display: flex;
  width:33%;
  margin: 0px 10px;
  flex-wrap: wrap-reverse;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.justify-conten-flex-start {
  display: flex;
  width:20%;
  margin: 0px 10px;
  justify-content: flex-start;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.justify-conten-flex-end {
  display: flex;
  width:20%;
  margin: 0px 10px;
  justify-content: flex-end;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.justify-conten-center {
  display: flex;
  width:20%;
  margin: 0px 10px;
  justify-content: center;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.justify-conten-space-between {
  display: flex;
  width:20%;
  margin: 0px 10px;
  justify-content: space-between;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.justify-conten-space-around {
  display: flex;
  width:20%;
  margin: 0px 10px;
  justify-content: space-around;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.align-items-flex-start {
  display: flex;
  width:20%;
  margin: 0px 10px;
  align-items: flex-start;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.align-items-flex-end {
  display: flex;
  width:20%;
  margin: 0px 10px;
  align-items: flex-end;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.align-items-center {
  display: flex;
  width:20%;
  margin: 0px 10px;
  align-items: center;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.align-items-baseline {
  display: flex;
  width:20%;
  margin: 0px 10px;
  align-items: baseline;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.align-items-stretch {
  display: flex;
  width:20%;
  margin: 0px 10px;
  align-items: stretch;
  border: solid;
  border-color: gray;
  border-width: 2px;
  overflow: hidden;
}

.flex-item-box {
  display: flex;
  margin: 0px 10px;
  border: solid;
  border-color: gray;
  border-width: 2px;
}

.box-order-1 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  order: 1;
}

.box-order-2 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  order: 2;
}

.box-order-3 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  order: 3;
}

.box-flex-grow-0 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  flex-grow: 0;
}

.box-flex-grow-1 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  flex-grow: 1;
}

.box-flex-grow-2 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  flex-grow: 2;
}

.box-flex-shrink-0 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  flex-shrink: 0;
  width: 300px;
}

.box-flex-shrink-1 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  flex-shrink: 1;
  width: 300px;
}

.box-flex-shrink-2 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  flex-shrink: 2;
  width: 300px;
}

.box-flex-basis-2 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  flex-basis: 2;
  /* width: 300px; */
}

.box-flex-basis-1 {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  flex-basis: 1;
  /* width: 300px; */
}

.box-flex-basis-auto {
  margin: 1px;
  padding: 15px 20px 15px 20px;
  background-color: royalblue;
  color: white;
  text-align: center;
  flex-basis: auto;
  /* width: 300px; */
}


</style>
