// const demo = () =>
// import( /* webpackChunkName: "demo" */ '@/pages/demo/demo');
// const navScroll = () =>
// import( /* webpackChunkName: "navScroll" */ '@/pages/demo/navScroll');
// const circle = () =>
// import( /* webpackChunkName: "circle" */ '@/pages/demo/circle');
// const drawer = () =>
// import( /* webpackChunkName: "drawer" */ '@/pages/demo/drawer');
// const minirefresh = () =>
// import( /* webpackChunkName: "minirefresh" */ '@/pages/demo/minirefresh');
// const qrcode = () =>
// import( /* webpackChunkName: "qrcode" */ '@/pages/demo/qrcode');
// const listView = () =>
// import( /* webpackChunkName: "listView" */ '@/pages/demo/listView');

const demo = r => require.ensure([], () => r(require('@/pages/demo/demo')), 'demo')
const navScroll = r => require.ensure([], () => r(require('@/pages/demo/navScroll')), 'navScroll') // 滑动nav
const circle = r => require.ensure([], () => r(require('@/pages/demo/circle')), 'circle') // 圆环加载进度
const drawer = r => require.ensure([], () => r(require('@/pages/demo/drawer')), 'drawer') // 滑动nav
const minirefresh = r => require.ensure([], () => r(require('@/pages/demo/minirefresh')), 'minirefresh') // 下拉刷新
const qrcode = r => require.ensure([], () => r(require('@/pages/demo/qrcode')), 'qrcode') // qrcode二维码
const listView = r => require.ensure([], () => r(require('@/pages/demo/listView')), 'listView') // 右侧字母导航
const tree = r => require.ensure([], () => r(require('@/pages/demo/tree')), 'tree') // 树状结构
const timeline = r => require.ensure([], () => r(require('@/pages/demo/timeline')), 'timeline') // timeline
const formCommon = r => require.ensure([], () => r(require('@/pages/demo/form-common')), 'formCommon') // form
const search = r => require.ensure([], () => r(require('@/pages/demo/search')), 'search') // search
const swipeCell = r => require.ensure([], () => r(require('@/pages/demo/swipeCell')), 'swipeCell') // swipeCell

export default [
  {
    name: 'demo',
    path: '/',
    component: demo,
    meta: {
      title: 'demo导航',
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
    name: 'circle',
    path: 'circle',
    component: circle,
    meta: {
      title: 'circle',
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
  {
    name: 'qrcode',
    path: 'qrcode',
    component: qrcode,
    meta: {
      title: 'url生成二维码',
      isShowBack: false
    }
  },
  {
    name: 'listView',
    path: 'listView',
    component: listView,
    meta: {
      title: '字母导航',
      isShowBack: false
    }
  },
  {
    name: 'tree',
    path: 'tree',
    component: tree,
    meta: {
      title: '树状结构',
      isShowBack: false
    }
  },
  {
    name: 'timeline',
    path: 'timeline',
    component: timeline,
    meta: {
      title: 'timeline',
      isShowBack: false
    }
  },
  {
    name: 'formCommon',
    path: 'form',
    component: formCommon,
    meta: {
      title: 'form',
      isShowBack: false
    }
  },
  {
    name: 'search',
    path: 'search',
    component: search,
    meta: {
      title: 'search',
      isShowBack: false
    }
  },
  {
    name: 'swipeCell',
    path: 'swipeCell',
    component: swipeCell,
    meta: {
      title: 'swipeCell滑块单元格',
      isShowBack: false
    }
  },
];