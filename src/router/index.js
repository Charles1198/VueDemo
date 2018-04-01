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
<<<<<<< HEAD
import AnimPage from '@/components/animation/AnimPage'
=======
import UploadFile from '@/components/UploadFile'
>>>>>>> e241f7669c6d01304b6974804e28ffa993d947d9

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
<<<<<<< HEAD
      path: '/AnimPage',
      component: AnimPage
=======
      path: '/UploadFile',
      component: UploadFile
>>>>>>> e241f7669c6d01304b6974804e28ffa993d947d9
    }
  ]
})
