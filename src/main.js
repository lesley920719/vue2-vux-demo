// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import Vuex from 'vuex'
import store from './store/index'
import VueRouter from 'vue-router'
import './assets/less/reset.css'
import './assets/less/base.less'
import { AlertPlugin, ToastPlugin, LoadingPlugin, ConfirmPlugin, Flexbox, FlexboxItem } from 'vux'  // vux组件
import { httpGet, httpPost } from './service/index';  // axios

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)

Vue.prototype.$get = httpGet; //get请求
Vue.prototype.$post = httpPost; //post 请求

// 引入mockjs
require('./service/mock.js')

// 添加 Fastclick 移除移动端点击延迟300ms
const FastClick = require('fastclick')
FastClick.attach(document.body)

// 路由
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '微信公众号'
  next()
  // if(to.name == 'home'){
  //     if(!store.state.client.commonData.userId){
  //         next({ name: 'home' });
  //     }
  // }else{
  //    next()
  // }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
