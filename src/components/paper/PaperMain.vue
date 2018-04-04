<template>
    <div id="first-page">
        <div id="cur-course">{{selectedName}}</div>
        <div id="courses-senior-high">
            <div class="text-grade">高中</div>
            <div class="course-box" :class="course.id == selectedId ? 'course-box-selected' : ''" v-for="(course) in courseSeniorHigh" v-bind:key="course.id" @click="selectCourse(course.id)">
                <img src="/static/image/logo.png" width="64" height="64">
                <span class="course-name">{{course.name}}</span>
            </div>
        </div>
        <div id="courses-senior-high">
            <div class="text-grade">初中</div>
            <div class="course-box" :class="course.id == selectedId ? 'course-box-selected' : ''" v-for="(course) in courseJuniorHigh" v-bind:key="course.id" @click="selectCourse(course.id)">
                <img src="/static/image/logo.png" width="64" height="64">
                <span class="course-name">{{course.name}}</span>
            </div>
        </div>
        <div id="courses-senior-high">
            <div class="text-grade">小学</div>
            <div class="course-box" :class="course.id == selectedId ? 'course-box-selected' : ''" v-for="(course) in coursePrimary" v-bind:key="course.id" @click="selectCourse(course.id)">
                <img src="/static/image/logo.png" width="64" height="64">
                <span class="course-name">{{course.name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import paperData from "./PaperData";

export default {
  name: "exam",
  data() {
    return {
      courseData: paperData.courseData,
      courseSeniorHigh: [],
      courseJuniorHigh: [],
      coursePrimary: [],
      selectedId: "2-yuwen",
      selectedName: "高中语文"
    };
  },
  mounted: function() {
    this.courseData.forEach(element => {
      switch (element.grade) {
        case 2:
          this.courseSeniorHigh.push(element);
          break;
        case 1:
          this.courseJuniorHigh.push(element);
          break;
        case 0:
          this.coursePrimary.push(element);
          break;
        default:
          break;
      }
    });
  },
  methods: {
    selectCourse: function(id) {
      this.selectedId = id;
      this.courseSeniorHigh.forEach(element => {
        if (element.id == id) {
          this.selectedName = "高中" + element.name;
        }
      });
      this.courseJuniorHigh.forEach(element => {
        if (element.id == id) {
          this.selectedName = "初中" + element.name;
        }
      });
      this.coursePrimary.forEach(element => {
        if (element.id == id) {
          this.selectedName = "小学" + element.name;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#first-page {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#cur-course {
  width: 100%;
  height: 300px;
  background-color: aqua;
  text-align: center;
  line-height: 300px;
  font-size: 30px;
}

#courses-senior-high {
  display: flex;
  flex-wrap: wrap;
  width: $page-width;
}

.text-grade {
  width: 100%;
  font-size: 24px;
  font: bold;
  margin: 20px;
}

.course-box {
  margin: 6px 40px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.course-box-selected {
  background-color: aqua;
}

.course-name {
  text-align: center;
}
</style>
