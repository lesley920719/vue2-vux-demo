const pageView = r => require.ensure([], () => r(require('@/pages/index')), 'pages')
// 首页
const homeView = () =>
    import( /* webpackChunkName: "homeView" */ '@/pages/home/home.vue');

// demo
const demoView = r => require.ensure([], () => r(require('@/pages/demo/index')), 'demoView')
import demoRouter from "@/pages/demo/demo.rooting.js";

// 登录
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')

// 上传图片
const uploadView = r => require.ensure([], () => r(require('@/pages/upload/index')), 'uploadView')
const uploadImg = r => require.ensure([], () => r(require('@/pages/upload/uploadImg')), 'uploadImg')

// canvas signature
const signatureView = r => require.ensure([], () => r(require('@/pages/signature/index')), 'signatureView')
const signature = r => require.ensure([], () => r(require('@/pages/signature/signature')), 'signature')

// 案例
const casesView = r => require.ensure([], () => r(require('@/pages/cases/index')), 'casesView')
const cases = r => require.ensure([], () => r(require('@/pages/cases/cases')), 'cases')

// 关于我们
const aboutUsView = r => require.ensure([], () => r(require('@/pages/aboutUs/index')), 'aboutUsView')
const aboutUs = r => require.ensure([], () => r(require('@/pages/aboutUs/aboutUs')), 'aboutUs')

// 联系我们
const linkUsView = r => require.ensure([], () => r(require('@/pages/linkUs/index')), 'linkUsView')
const linkUs = r => require.ensure([], () => r(require('@/pages/linkUs/linkUs')), 'linkUs')

// 加入我们
const joinUsView = r => require.ensure([], () => r(require('@/pages/joinUs/index')), 'joinUsView')
const joinUs = r => require.ensure([], () => r(require('@/pages/joinUs/joinUs')), 'joinUs')
const jobDetail = r => require.ensure([], () => r(require('@/pages/joinUs/jobDetail')), 'jobDetail')

// 渠道-电商
const channelView = r => require.ensure([], () => r(require('@/pages/channel/index')), 'channelView')
const digitalChannel = r => require.ensure([], () => r(require('@/pages/channel/digitalChannel')), 'digitalChannel') // 电子渠道
const energizeChannel = r => require.ensure([], () => r(require('@/pages/channel/energizeChannel')), 'energizeChannel') // 渠道赋能
const eCommerce = r => require.ensure([], () => r(require('@/pages/channel/eCommerce')), 'eCommerce')  // 生活电商

// keep-alive 页面缓存
const keepAliveView = r => require.ensure([], () => r(require('@/pages/keepAlive/index')), 'keepAliveView')
const keepAliveA = r => require.ensure([], () => r(require('@/pages/keepAlive/a')), 'keepAliveA') // A页面默认缓存
const keepAliveB = r => require.ensure([], () => r(require('@/pages/keepAlive/b')), 'keepAliveB') // B页面跳转到A，A页面需要缓存
const keepAliveC = r => require.ensure([], () => r(require('@/pages/keepAlive/c')), 'keepAliveC')  // C页面跳转到A，A页面不需要被缓存

export default [{
    path: '/',
    component: pageView,
    children: [
        {
            name: 'homeView',
            path: '/home',
            component: homeView,
            meta: {
                title: '首页',
                isShowBack: false
            }
        },
        {
            name: 'login',
            path: 'login',
            component: login,
            meta: {
                title: '登录',
                isShowBack: false
            }
        },
        {
            path: 'cases',
            component: casesView,
            children: [
                {
                    name: 'cases',
                    path: '/',
                    component: cases,
                    meta: {
                        title: '案例',
                        isShowBack: false
                    }
                },
            ]
        },
        {
            path: 'aboutUs',
            component: aboutUsView,
            children: [
                {
                    name: 'aboutUs',
                    path: '/',
                    component: aboutUs,
                    meta: {
                        title: '关于我们',
                        isShowBack: false
                    }
                },
            ]
        },
        {
            path: 'linkUs',
            component: linkUsView,
            children: [
                {
                    name: 'linkUs',
                    path: '/',
                    component: linkUs,
                    meta: {
                        title: '联系我们',
                        isShowBack: true
                    }
                },
            ]
        },
        {
            path: 'joinUs',
            component: joinUsView,
            children: [
                {
                    name: 'joinUs',
                    path: '/',
                    component: joinUs,
                    meta: {
                        title: '加入我们',
                        isShowBack: true
                    }
                },
                {
                    name: 'jobDetail',
                    path: 'jobDetail',
                    component: jobDetail,
                    meta: {
                        title: '岗位详情',
                        isShowBack: true
                    }
                },
            ]
        },
        {
            path: 'channel',
            component: channelView,
            children: [
                {
                    name: 'digitalChannel',
                    path: 'digitalChannel',
                    component: digitalChannel,
                    meta: {
                        title: '电子渠道',
                        isShowBack: false
                    }
                },
                {
                    name: 'energizeChannel',
                    path: 'energizeChannel',
                    component: energizeChannel,
                    meta: {
                        title: '渠道赋能',
                        isShowBack: false
                    }
                },
                {
                    name: 'eCommerce',
                    path: 'eCommerce',
                    component: eCommerce,
                    meta: {
                        title: '生活电商',
                        isShowBack: false
                    }
                },
            ]
        },
        {
            path: 'upload',
            component: uploadView,
            children: [
                {
                    name: 'uploadImg',
                    path: '/',
                    component: uploadImg,
                    meta: {
                        title: '上传图片',
                        isShowBack: false
                    }
                },
            ]
        },
        {
            path: 'signature',
            component: signatureView,
            children: [
                {
                    name: 'signature',
                    path: '/',
                    component: signature,
                    meta: {
                        title: 'canvas signature',
                        isShowBack: false
                    }
                },
            ]
        },
        {
            path: 'keepALive',
            component: keepAliveView,
            children: [
                {
                    name: 'keepAliveA',
                    path: '/',
                    component: keepAliveA,
                    meta: {
                        title: 'keep-Alive A页面',
                        isShowBack: true,
                        keepAlive: true // 默认需要被缓存
                    }
                },
                {
                    name: 'keepAliveB',
                    path: '/b',
                    component: keepAliveB,
                    meta: {
                        title: 'keep-Alive B页面',
                        isShowBack: true,
                    },
                },
                {
                    name: 'keepAliveC',
                    path: '/c',
                    component: keepAliveC,
                    meta: {
                        title: 'keep-Alive C页面',
                        isShowBack: true,
                    }
                },
            ]
        },
        {
            path: 'demo',
            component: demoView,
            children: demoRouter
        },
        {
            path: '*',
            redirect: '/demo'
        }
    ]
}]
