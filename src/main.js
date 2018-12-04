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
import GlobalFunction from '@/utils/global'
import Toast from '@/plugins/toast'
import NProgress from 'nprogress' // progress bar 页面加载进度条
import 'nprogress/nprogress.css'// progress bar style

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.use(Toast)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)

// 全局自定义函数
Vue.use(GlobalFunction)

/* 引入全局组件 */
import { BaseButton, Drawer, LayoutScroll } from '@/components'

/* 注册全局组件 */
Vue.component('VpBaseButton', BaseButton) // 按钮
Vue.component('Drawer', Drawer) // 弹窗盒子
Vue.component('LayoutScroll', LayoutScroll) // 

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
  NProgress.start() // start progress bar
  document.title = to.meta.title || '微信公众号'
  // next()
  if(!Vue.prototype.$session.get('common').userInfo){ // 有无登录信息
    if(to.path=='/login'){ //如果是登录页面路径，就直接next()
      next();
    } else { //不然就跳转到登录
      next('/login');
    }
  }else{
    next()
  }
  NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
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
