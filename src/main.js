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
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    loading: require('./assets/images/default.jpg')
})

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

console.log('NODE_ENV', process.env.NODE_ENV);

// 添加 Fastclick 移除移动端点击延迟300ms
const FastClick = require('fastclick')
/**
 * fix FastClick
 */
FastClick.prototype.focus = function (targetElement) {//解决苹果手机输入框需要点击两次才能选中问题
    let length;
    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
    if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
        length = targetElement.value.length;
        targetElement.focus();
        targetElement.setSelectionRange(length, length);
    } else {
        targetElement.focus();
    }
};
if ("addEventListener" in document) {
    document.addEventListener(
        "DOMContentLoaded",
        function () {
            FastClick.attach(document.body);
        },
        false
    );
    // document.body.addEventListener('focusout', () => {
    //     window.scroll(0, 0)// 失焦后强制让页面归位
    // })
    // 解决H5移动端弹出键盘时遮挡输入框问题
    let timer
    window.addEventListener('resize', function () {
        // 当前获得焦点的元素
        if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
            if (timer) clearTimeout(timer)
            timer = window.setTimeout(function () {
                // 该方法用来将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域。 如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动。 
                document.activeElement.scrollIntoViewIfNeeded()
            }, 100)
        }
    })
}

// 路由
const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {  // 第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
        // return 期望滚动到哪个的位置
        if (savedPosition) {
            return savedPosition  // 像浏览器的原生表现那样:回到历史记录位置
        } else {
            return { x: 0, y: 0 } // 让页面滚动到顶部
        }
    }
})

router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    document.title = to.meta.title || 'lesley\'s demo'
    next()
    // if(!Vue.prototype.$session.get('common').userInfo){ // 有无登录信息
    //   if(to.path=='/login'){ //如果是登录页面路径，就直接next()
    //     next();
    //   } else { //不然就跳转到登录
    //     next('/login');
    //   }
    // }else{
    //   next()
    // }
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
