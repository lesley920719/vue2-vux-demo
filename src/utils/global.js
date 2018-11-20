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
  