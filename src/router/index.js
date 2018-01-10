import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Todolist from '@/components/Todolist'
import Flex from '@/components/Flex'
import Axios from '@/components/Axios'
import FunctionTest from '@/components/functionTest/FunctionTest'
import Canvas from '@/components/canvas/Canvas'

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
      path: '/Canvas',
      component: Canvas
    }
  ]
})
