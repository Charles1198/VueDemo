<script>
// 科目列表
const courseData = [
  {
    id: "2-yuwen",
    grade: 2,
    name: "语文"
  },
  {
    id: "2-shuxue",
    grade: 2,
    name: "数学"
  },
  {
    id: "2-yingyu",
    grade: 2,
    name: "英语"
  },
  {
    id: "2-wuli",
    grade: 2,
    name: "物理"
  },
  {
    id: "2-huaxue",
    grade: 2,
    name: "化学"
  },
  {
    id: "2-shengwu",
    grade: 2,
    name: "生物"
  },
  {
    id: "1-yuwen",
    grade: 1,
    name: "语文"
  },
  {
    id: "1-shuxue",
    grade: 1,
    name: "数学"
  },
  {
    id: "1-yingyu",
    grade: 1,
    name: "英语"
  },
  {
    id: "0-yuwen",
    grade: 0,
    name: "语文"
  },
  {
    id: "0-shuxue",
    grade: 0,
    name: "数学"
  },
  {
    id: "0-yingyu",
    grade: 0,
    name: "英语"
  }
];

const knowledgePointSenior = [
  {
    name: "第一章",
    children: [
      {
        name: "第一节",
        children: [
          {
            name: "第一目"
          },
          {
            name: "第二目"
          }
        ]
      },
      {
        name: "第二节",
        children: [
          {
            name: "第一目"
          },
          {
            name: "第二目"
          }
        ]
      }
    ]
  },
  {
    name: "第二章",
    children: [
      {
        name: "第一节",
        children: [
          {
            name: "第一目"
          },
          {
            name: "第二目"
          }
        ]
      },
      {
        name: "第二节",
        children: [
          {
            name: "第一目"
          },
          {
            name: "第二目"
          }
        ]
      }
    ]
  }
];

export default {
  courseData,
  knowledgePointSenior
};
</script>
