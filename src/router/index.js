import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Todolist from '@/components/Todolist'
import Flex from '@/components/Flex'
import Axios from '@/components/Axios'
import FunctionTest from '@/components/functionTest/FunctionTest'
import TestPage from '@/components/functionTest/TestPage'
import Canvas from '@/components/canvas/Canvas'
import Sort from '@/components/sort/Sort'
import Zhihu from '@/components/zhihu/Zhihu'
import AnimPage from '@/components/animation/AnimPage'
import UploadFile from '@/components/UploadFile'
import PaperPage from '@/components/paper/PaperPage'
import PaperMain from '@/components/paper/PaperMain'
import PaperByHand from '@/components/paper/PaperByHand'
import PaperAuto from '@/components/paper/PaperAuto'

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
      path: '/Sort',
      component: Sort
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
      path: '/UploadFile',
      component: UploadFile
    },
    {
      path: '/PaperPage',
      component: PaperPage,
      children: [
        {
          path: '',
          component: PaperMain
        },
        {
          path: 'PaperByHand',
          component: PaperByHand
        },
        {
          path: 'PaperAuto',
          component: PaperAuto
        }
      ]
    }
  ]
})
