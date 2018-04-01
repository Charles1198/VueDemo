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
import UploadFile from '@/components/UploadFile'

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
      path: '/UploadFile',
      component: UploadFile
    }
  ]
})
