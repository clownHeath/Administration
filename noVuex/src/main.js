// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import {Loadmore, Lazyload, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
Vue.use(Lazyload);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//  全局引入插件 每个组件全用 写成原型
import axios from 'axios'


// 公共组件
import appHeader from '@/components/Header'
import appContent from '@/components/Content'
import appFooter from '@/components/Footer'

// 全局设置插件  变成原型属性
Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.component("v-header",appHeader)
Vue.component("v-content",appContent)
Vue.component("v-footer",appFooter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
