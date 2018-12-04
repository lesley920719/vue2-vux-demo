const pageView = r => require.ensure([], () => r(require('../pages/index')), 'pages')
// 首页
const homeView = r => require.ensure([], () => r(require('../pages/home/index')), 'homeView')
const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')

// demo
const demoView = r => require.ensure([], () => r(require('../pages/demo/index')), 'demoView')
const demo = r => require.ensure([], () => r(require('../pages/demo/demo')), 'demo')
const navScroll = r => require.ensure([], () => r(require('../pages/demo/navScroll')), 'navScroll') // 滑动nav
const drawer = r => require.ensure([], () => r(require('../pages/demo/drawer')), 'drawer') // 滑动nav
const minirefresh = r => require.ensure([], () => r(require('../pages/demo/minirefresh')), 'minirefresh') // 下拉刷新

// 登录
const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')

// 上传图片
const uploadView = r => require.ensure([], () => r(require('../pages/upload/index')), 'uploadView')
const uploadImg = r => require.ensure([], () => r(require('../pages/upload/uploadImg')), 'uploadImg')

// 案例
const casesView = r => require.ensure([], () => r(require('../pages/cases/index')), 'casesView')
const cases = r => require.ensure([], () => r(require('../pages/cases/cases')), 'cases')

// 关于我们
const aboutUsView = r => require.ensure([], () => r(require('../pages/aboutUs/index')), 'aboutUsView')
const aboutUs = r => require.ensure([], () => r(require('../pages/aboutUs/aboutUs')), 'aboutUs')

// 联系我们
const linkUsView = r => require.ensure([], () => r(require('../pages/linkUs/index')), 'linkUsView')
const linkUs = r => require.ensure([], () => r(require('../pages/linkUs/linkUs')), 'linkUs')

// 加入我们
const joinUsView = r => require.ensure([], () => r(require('../pages/joinUs/index')), 'joinUsView')
const joinUs = r => require.ensure([], () => r(require('../pages/joinUs/joinUs')), 'joinUs')
const jobDetail = r => require.ensure([], () => r(require('../pages/joinUs/jobDetail')), 'jobDetail')

// 渠道-电商
const channelView = r => require.ensure([], () => r(require('../pages/channel/index')), 'channelView')
const digitalChannel = r => require.ensure([], () => r(require('../pages/channel/digitalChannel')), 'digitalChannel') // 电子渠道
const energizeChannel = r => require.ensure([], () => r(require('../pages/channel/energizeChannel')), 'energizeChannel') // 渠道赋能
const eCommerce = r => require.ensure([], () => r(require('../pages/channel/eCommerce')), 'eCommerce')  // 生活电商

export default [{
  path: '/',
  component: pageView,
  children: [
    {
      path: 'home',
      component: homeView,
      children: [
        // 首页
        {
          name: 'home',
          path: '/',
          component: home,
          meta: {
              title: '运营商服务',
              isShowBack: false
          }
        },
      ]
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
        // cases
        {
          name: 'cases',
          path: '/',
          component: cases,
          meta: {
              title: '运营商服务',
              isShowBack: false
          }
        },
      ]
    },
    {
      path: 'aboutUs',
      component: aboutUsView,
      children: [
        // aboutUs
        {
          name: 'aboutUs',
          path: '/',
          component: aboutUs,
          meta: {
              title: '运营商服务',
              isShowBack: false
          }
        },
      ]
    },
    {
      path: 'linkUs',
      component: linkUsView,
      children: [
        // linkUs
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
        // joinUs
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
      path: 'demo',
      component: demoView,
      children: [
        // demo
        {
          name: 'demo',
          path: '/',
          component: demo,
          meta: {
              title: 'demo',
              isShowBack: false
          }
        },
        {
          name: 'navScroll',
          path: 'navScroll',
          component: navScroll,
          meta: {
              title: 'navScroll',
              isShowBack: false
          }
        },
        {
          name: 'drawer',
          path: 'drawer',
          component: drawer,
          meta: {
              title: 'drawer',
              isShowBack: false
          }
        },
        {
          name: 'minirefresh',
          path: 'minirefresh',
          component: minirefresh,
          meta: {
              title: 'H5下拉刷新',
              isShowBack: false
          }
        },
      ]
    },
    {
      path: 'upload',
      component: uploadView,
      children: [
        // uploadImg
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
      path: '*',
      redirect: '/home'
    }
  ]
}]
