import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'

import Todolist from '@/components/Todolist'
import Flex from '@/components/Flex'
import Axios from '@/components/Axios'
import FunctionTest from '@/components/functionTest/FunctionTest'
import TestPage from '@/components/functionTest/TestPage'
import Canvas from '@/components/canvas/Canvas'
import Zhihu from '@/components/zhihu/Zhihu'
import AnimPage from '@/components/animation/AnimPage'
import CSSAnim from '@/components/animation/CSSAnim'
import UploadFile from '@/components/UploadFile'
import PaperPage from '@/components/paper/PaperPage'
import PaperMain from '@/components/paper/PaperMain'
import PaperHand from '@/components/paper/PaperHand'
import PaperHandChapter from '@/components/paper/PaperHandChapter'
import PaperHandKnowledgePoint from '@/components/paper/PaperHandKnowledgePoint'
import PaperAutoChapter from '@/components/paper/PaperAutoChapter'
import PaperAutoKnowledgePoint from '@/components/paper/PaperAutoKnowledgePoint'
import PaperPreview from '@/components/paper/PaperPreview'
import TeacherPage from '@/components/paper/teacher/TeacherPage'
import TeacherProfile from '@/components/paper/teacher/TeacherProfile'
import TeacherPaperManage from '@/components/paper/teacher/TeacherPaperManage'
import TeacherCollection from '@/components/paper/teacher/TeacherCollection'
import TeacherCollectionPaper from '@/components/paper/teacher/TeacherCollectionPaper'
import TeacherCollectionQuestion from '@/components/paper/teacher/TeacherCollectionQuestion'
import SvgPage from '@/components/SvgPage'
import Tangram from '@/components/Tangram'
import VuexPage1 from '@/components/vuex/VuexPage1'
import VuexPage2 from '@/components/vuex/VuexPage2'
import ParentPage from '@/components/asyn/ParentPage'
import Html2Word from '@/components/Html2Word'
import Html2Pdf from '@/components/Html2Pdf'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Todolist',
      name: 'Todolist',
      component: Todolist
    },
    {
      path: '/Flex',
      component: Flex
    },
    {
      path: '/Axios',
      component: Axios
    },
    {
      path: '/FunctionTest',
      component: FunctionTest
    },
    {
      path: '/TestPage',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/Canvas',
      component: Canvas
    },
    {
      path: '/Zhihu',
      component: Zhihu
    },
    {
      path: '/AnimPage',
      component: AnimPage
    },
    {
      path: '/CSSAnim',
      component: CSSAnim
    },
    {
      path: '/UploadFile',
      component: UploadFile
    },
    {
      path: '/PaperPage',
      component: PaperPage,
      children: [{
          path: '',
          component: PaperMain
        },
        {
          path: 'PaperHand',
          component: PaperHand
        },
        {
          path: 'PaperHandChapter',
          component: PaperHandChapter
        },
        {
          path: 'PaperHandKnowledgePoint',
          component: PaperHandKnowledgePoint
        },
        {
          path: 'PaperAutoChapter',
          component: PaperAutoChapter
        },
        {
          path: 'PaperAutoKnowledgePoint',
          component: PaperAutoKnowledgePoint
        },
        {
          path: 'PaperPreview',
          name: 'PaperPreview',
          component: PaperPreview
        },
        {
          path: 'TeacherPage',
          component: TeacherPage,
          children: [{
              path: '',
              component: TeacherProfile
            },
            {
              path: 'TeacherPaperManage',
              component: TeacherPaperManage
            },
            {
              path: 'TeacherCollection',
              component: TeacherCollection,
              children: [{
                  path: '',
                  component: TeacherCollectionQuestion
                },
                {
                  path: 'TeacherCollectionPaper',
                  component: TeacherCollectionPaper
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/SvgPage',
      component: SvgPage
    },
    {
      path: '/Tangram',
      component: Tangram
    },
    {
      path: '/VuexPage1',
      component: VuexPage1
    },
    {
      path: '/VuexPage2',
      component: VuexPage2
    },
    {
      path: '/ParentPage',
      component: ParentPage
    },
    {
      path: '/Html2Word',
      component: Html2Word
    },
    {
      path: '/Html2Pdf',
      component: Html2Pdf
    }
  ]
})
