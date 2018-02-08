import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/modules/Home/Home'
import Cart from '@/modules/Cart/Cart'
import Deil from '@/modules/Deil/Deil'
import List from '@/modules/List/List'
import Classify from '@/modules/Classify/Classify'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Deil/',
      name: 'Deil',
      component: Deil
    },
    {
      path: '/Classify/',
      name: 'Classify',
      component: Classify
    }
  ]
})
