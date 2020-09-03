import timeFormat from '@/utils/timeFormat'
import { httpGet, httpPost } from '@/service/index';  // axios

function install (Vue, options) {
  /* 自定义指令 */
  // 解决键盘挡住输入框指令
  Vue.directive('keyBoard', {
    inserted: function (el) {
      const oHeight = document.body.clientHeight
      window.addEventListener('resize', function (params) {
        if (oHeight > document.body.clientHeight) { // 键盘弹出
          el.scrollIntoView(false)
        }
      }, false)
    }
  })
  // 自动聚焦
  Vue.directive('focus', {
    inserted (el, { value }) {
      if (value) el.focus()
    }
  })
  // 全局自定义指令 -- 元素外触发事件
  Vue.directive('handleOutside', {
    // bind声明周期, 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
    bind (el, binding, vnode, oldVnode) {
      function handlerEvent (e) {
        console.log(binding, vnode, 'click');
        // 这里判断点击的元素是否是本身，是本身，则返回
        if (el.contains(e.target)) {
          return false;
        }
        // 判断指令中是否绑定了函数
        if (binding.expression) {
          // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
          binding.value(e);
        }
      }
      // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
      el.__vueHandleOutside__ = handlerEvent;
      // 为document绑定事件监听
      // document.addEventListener('click', handlerEvent);
      document.addEventListener('touchstart', handlerEvent);
    },
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
    inserted (el, binding, vnode, oldVnode) {
      // console.log('inserted回调', binding, vnode, oldVnode);

    },
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
    update (el, binding, vnode, oldVnode) {
      // console.log('update回调', binding);
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated (el, binding, vnode, oldVnode) {
      // console.log('componentUpdated回调', binding);
    },
    unbind (el, binding, vnode, oldVnode) {
      // 解除事件监听
      // document.removeEventListener('click', el.__vueHandleOutside__);
      document.removeEventListener('touchstart', el.__vueHandleOutside__);
      delete el.__vueHandleOutside__;
    }
  })

  Vue.prototype.regex = {
    phone: /^(0|86|17951)?(13[0-9]|15[012356789]|17[35678]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/,
    idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  }
  /* 全局filter */
  // 价格过滤器 格式 ￥20.00
  Vue.filter('currency', (value) => {
    if (!value) return '￥0.00'
    return `￥${(value / 100).toFixed(2)}`
  })

  // 价格过滤器 格式 20.00元
  Vue.filter('price', (value) => {
    if (!value) return '0.00元'
    return `${(value / 100).toFixed(2)}元`
  })
  Vue.filter('filterTime', function (value, format = 'YYYY/MM/DD hh:mm:ss') { // 时间过滤器
    return timeFormat(value, format)
  })

  // 4. 添加实例方法
  Vue.prototype.$session = {  // sessionStorage封装
    get (key) {
      return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : '';
    },
    set (key, val) {
      sessionStorage.setItem(key, JSON.stringify(val));
    },
    remove () {
      sessionStorage.removeItem(key)
    }
  }

  Vue.prototype.$get = httpGet // get请求
  Vue.prototype.$post = httpPost // post请求
}

export default install
