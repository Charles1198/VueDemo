<template>
    <div>
        <button id="back-btn" @click="$router.go(-1)">返回</button>
        <div id="testPaper-preview" @click="stopEdit">
            <!-- 装订线 -->
            <div id="bookbinding-line">
                <img src="/static/image/bookbindingLine.png" width="47" height="577" v-if="paperStructureCustom.indexOf('bookbindingLine') != -1">
            </div>
            <div id="testPaper-main">
                <!-- 保密标记 -->
                <div id="secrecy-mark" v-if="paperStructureCustom.indexOf('secrecyMark') != -1">绝密★启用前</div>
                <!-- 主标题 -->
                <div id="headline">
                    <span v-if="paperStructureCustom.indexOf('headline') != -1" v-show="itemToEdit != 'headline'" @click="itemToEdit = 'headline'">{{headlineText}}</span>
                    <input class="input" type="text" v-model="headlineText" v-if="itemToEdit == 'headline'" :placeholder="headlineText">
                </div>
                <!-- 副标题 -->
                <div id="subhead">
                    <span v-if="paperStructureCustom.indexOf('subhead') != -1" v-show="itemToEdit != 'subhead'" @click="itemToEdit = 'subhead'">{{subheadText}}</span>
                    <input class="input" type="text" v-model="subheadText" v-if="itemToEdit == 'subhead'" :placeholder="subheadText">
                </div>
                <!-- 试题信息 -->
                <div id="paper-info">
                    <span v-if="paperStructureCustom.indexOf('paperInfo') != -1" v-show="itemToEdit != 'paperInfo'" @click="itemToEdit = 'paperInfo'">{{paperInfoText}}</span>
                    <input class="input" type="text" v-model="paperInfoText" v-if="itemToEdit == 'paperInfo'" :placeholder="paperInfoText">
                </div>
                <!-- 考生信息 -->
                <div id="student-info">
                    <span v-if="paperStructureCustom.indexOf('studentInfo') != -1" v-show="itemToEdit != 'studentInfo'" @click="itemToEdit = 'studentInfo'">{{studentInfoText}}</span>
                    <input class="input" type="text" v-model="studentInfoText" v-if="itemToEdit == 'studentInfo'" :placeholder="studentInfoText">
                </div>
                <!-- 分数栏 -->
                <div v-if="paperStructureCustom.indexOf('scoreTable') != -1" id="score-region">
                    <table id="score-table">
                        <tbody>
                            <tr>
                                <th>题号</th>
                                <th v-for="(q, index) in questionInTypeList" :key="index">{{indexToIndex(index)}}</th>
                                <th>总分</th>
                            </tr>
                            <tr>
                                <td>得分</td>
                                <th v-for="(q, index) in questionInTypeList" :key="index"></th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- 副标题 -->
                <div id="announcements">
                    <span v-if="paperStructureCustom.indexOf('announcements') != -1" v-show="itemToEdit != 'announcements'" @click="itemToEdit = 'announcements'">{{announcementsText}}</span>
                    <input class="input" type="text" v-model="announcementsText" v-if="itemToEdit == 'announcements'" :placeholder="announcementsText">
                </div>
                <div class="question-type-box" v-for="(questionInType) in questionInTypeList" v-bind:key="questionInType">
                    <div class="question-type-box-head">
                        <table v-if="paperStructureCustom.indexOf('titleTypeScore') != -1" id="score-table-type">
                            <tbody>
                                <tr>
                                    <th>评卷人</th>
                                    <th>得分</th>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4 v-if="paperStructureCustom.indexOf('titleType') != -1">{{questionInType.type}}</h4>
                    </div>
                    <div v-for="(question) in questionInType.questionList" v-bind:key="question.id">
                        <questionBox :question="question" :inPaper="true" :showAnswerInPaper="paperShowAnswer" v-on:operateQuestion="operateQuestion" />
                    </div>
                </div>
            </div>
            <div id="operation">
                <button id="paper-download-btn">试卷下载</button>
                <div class="paper-operate">
                    <button class="paper-operate-btn">分值设置</button>
                    <button class="paper-operate-btn">试卷分析</button>
                    <button class="paper-operate-btn">生成作业</button>
                    <button class="paper-operate-btn">保存试卷</button>
                </div>
                <div id="paper-structure">试卷结构设置</div>
                <div id="paper-structure-top">
                    <div>设置&nbsp;&nbsp;&nbsp;</div>
                    <label class="radio"><input type="radio" value="default" v-model="paperStructureAuto" />默认</label>
                    <label class="radio"><input type="radio" value="homework" v-model="paperStructureAuto" />作业</label>
                    <label class="radio"><input type="radio" value="quiz" v-model="paperStructureAuto" />测验</label>
                    <label class="radio"><input type="radio" value="exam" v-model="paperStructureAuto" />试卷</label>
                </div>
                <div id="paper-structure-top">
                    <label class="checkbox"><input type="checkbox" value="bookbindingLine" v-model="paperStructureCustom" />装订线</label>
                    <label class="checkbox"><input type="checkbox" value="secrecyMark" v-model="paperStructureCustom" />保密标志</label>
                    <label class="checkbox"><input type="checkbox" value="headline" v-model="paperStructureCustom" />大标题</label>
                    <label class="checkbox"><input type="checkbox" value="subhead" v-model="paperStructureCustom" />副标题</label>
                    <label class="checkbox"><input type="checkbox" value="examInfo" v-model="paperStructureCustom" />考试信息</label>
                    <label class="checkbox"><input type="checkbox" value="studentInfo" v-model="paperStructureCustom" />学生信息</label>
                    <label class="checkbox"><input type="checkbox" value="scoreTable" v-model="paperStructureCustom" />分数栏</label>
                    <label class="checkbox"><input type="checkbox" value="announcements" v-model="paperStructureCustom" />注意事项</label>
                    <label class="checkbox"><input type="checkbox" value="titleTypeScore" v-model="paperStructureCustom" />大题评分区</label>
                    <label class="checkbox"><input type="checkbox" value="titleType" v-model="paperStructureCustom" />大题</label>
                </div>
                <div id="paper-structure-top">
                    <label class="checkbox"><input type="checkbox" v-model="paperShowAnswer" />显示答案与解析</label>
                </div>
                <div id="paper-structure">试题统计</div>
            </div>
        </div>
    </div>
</template>

<script>
import questionBox from './QuestionBox'
import index from '_vue@2.5.13@vue';

export default {
    name: 'testPaper-preview',
    components: {
        questionBox
    },
    data() {
        return {
            itemToEdit: '',
            headlineText: '2018年04月05日华理考试题',
            subheadText: '副标题',
            paperInfoText: '考试范围：xxx；考试时间：100分钟；命题人：xxx',
            studentInfoText: '学校：___________ 姓名：___________ 班级：___________ 考号：___________',
            announcementsText: '1、答题前填写好自己的姓名、班级、考号等信息 2、请将答案正确填写在答题卡上',
            paperStructureAuto: 'default',
            paperStructureCustom: ['bookbindingLine', 'secrecyMark', 'headline', 'subhead', 'examInfo', 'studentInfo', 'scoreTable', 'announcements', 'titleTypeScore', 'titleType'],
            paperShowAnswer: false,
            //分类存放的题目列表
            questionInTypeList: []
        }
    },
    mounted: function () {
        //从上个页面传来的题目列表
        let questionList = this.$route.params.questionList

        var questionXuanze = {
            type: '选择题',
            questionList: []
        }
        var questionTiankong = {
            type: '填空题',
            questionList: []
        }
        var questionPanduan = {
            type: '判断题',
            questionList: []
        }

        questionList.forEach(element => {
            switch (element.type) {
                case '选择题':
                    questionXuanze.questionList.push(element)
                    break;
                case '填空题':
                    questionTiankong.questionList.push(element)
                    break;
                case '判断题':
                    questionPanduan.questionList.push(element)
                    break;
                default:
                    break;
            }
        });

        this.questionInTypeList.push(questionXuanze)
        this.questionInTypeList.push(questionTiankong)
        this.questionInTypeList.push(questionPanduan)
    },
    methods: {
        stopEdit: function (event) {
            //先找到所有的span和input
            var spans = document.getElementsByTagName('span')
            var inputs = document.getElementsByTagName('input')

            for (let index = 0; index < inputs.length; index++) {
                //如果正在点击的是input，说明用户在编辑，不应该停止编辑模式，直接return
                const input = inputs[index]
                if (input == event.target) {
                    return
                }
            }
            for (let index = 0; index < spans.length; index++) {
                //如果正在点击的是span，说明用户要进行编辑，不能停止编辑模式
                const span = spans[index]
                if (span == event.target) {
                    return
                }
            }
            //停止编辑模式
            this.itemToEdit = ''
        },
        /**
         * 点击题目上方操作按钮
         * @param (int) eventIndex 事件代码
         * @param (string) questionId 题目id
         */
        operateQuestion: function (eventIndex, questionId) {

            switch (eventIndex) {
                case 0:
                    console.log('收藏', questionId)
                    break;
                case 1:
                    console.log('删除', questionId)
                    break;
                case 2:
                    console.log('替换', questionId)
                    break;
                case 3:
                    console.log('上移', questionId)
                    break;
                case 4:
                    console.log('下移', questionId)
                    break;
                default:
                    break;
            }
        },
        indexToIndex: function (index) {
            let Index = ['一', '二', '三', '四', '五', '六']
            return index >= Index.length ? '' : Index[index]
        }
    }
}
</script>

<style lang="scss" scoped>
$dimen-margin-top: 12px;
// 这三个加起来等于 $page-width
$dimen-bookbinding-line-width: 70px;
$dimen-operation-region-width: 300px;
$dimen-testPaper-main-width: $page-width - $dimen-bookbinding-line-width -
  $dimen-operation-region-width;

#back-btn {
  outline: none;
  background: transparent;
  margin: 10px;
}

#testPaper-preview {
  width: $page-width;
  display: flex;
  border: solid;
  border-width: 1px;
  border-color: lightgray;
}

#bookbinding-line {
  width: $dimen-bookbinding-line-width;
  margin: 60px 10px 0 13px;
}

#testPaper-main {
  width: $dimen-testPaper-main-width;
  margin: 40px 0;
}

.input {
  outline: none;
  width: 100%;
  font-size: 16px;
  color: gray;
  text-align: center;
}

#secrecy-mark {
  margin: 0 0 0 20px;
}

#headline {
  text-align: center;
  font-size: 24px;
}

#subhead {
  margin-top: $dimen-margin-top;
  text-align: center;
  font-size: 22px;
}

#paper-info {
  text-align: center;
  margin-top: $dimen-margin-top;
}

#student-info {
  text-align: center;
  margin-top: $dimen-margin-top;
}

#score-region {
  text-align: center;
  margin-top: $dimen-margin-top;
}

#score-table {
  border-left: 1px solid #777;
  border-top: 1px solid #777;
  border-spacing: 0;
  margin: $dimen-margin-top auto;
}

th {
  width: 72px;
  height: 24px;
  border-right: 1px solid #777;
  border-bottom: 1px solid #777;
}

td {
  width: 72px;
  height: 24px;
  border-right: 1px solid #777;
  border-bottom: 1px solid #777;
}

#announcements {
  margin-top: $dimen-margin-top;
  font-size: 12px;
}

.question-type-box-head {
  display: flex;
  align-items: center;
}

#score-table-type {
  border-left: 1px solid #777;
  border-top: 1px solid #777;
  border-spacing: 0;
  margin: $dimen-margin-top;
}

#operation {
  width: $dimen-operation-region-width;
  border-left: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
}

#paper-download-btn {
  width: 260px;
  height: 40px;
  font-size: 20px;
  margin: 12px 20px;
  background: #54a877;
  color: white;
  border-width: 0 0 2px 0;
  border-radius: 2px;
  border-color: #449867;

  &:hover {
    background: #449867;
    border-color: #348857;
  }
}

.paper-operate {
  display: flex;
  flex-wrap: wrap;

  &-btn {
    width: 80px;
    height: 30px;
    margin: 8px;
    background: transparent;
    border-color: lightgray;

    &:hover {
      border-color: #449867;
    }
  }
}

#paper-structure {
  padding: 10px;
  background: #eee;
  border: solid;
  border-color: lightgray;
  border-width: 1px 0 0 0;

  &-top {
    margin: 10px;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
}

.radio {
  margin: 4px 12px 4px 0;
}

.checkbox {
  margin: 4px 16px 4px 0;
}
</style>
