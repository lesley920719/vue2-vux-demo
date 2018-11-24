/**
 * 判断一个对象是否为空
 * @param {Object} value
 */
const isEmpty = (value = {}) => {
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

/**
 * 读取cookie值
 * @param {String} name
 */
const readCookie = name => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return ''
}

/**
 * 设置 title
 * @param {String} title
 */
function setTitle (title) {
  document.title = title
  const mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    const iframe = document.createElement('iframe')
    iframe.style.visibility = 'hidden'
    iframe.setAttribute('src', 'static/img/loading_icon.png')
    const iframeCallback = () => {
      const timer = setTimeout(() => {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
        clearTimeout(timer)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}

// url参数键名变小写，返回键值
const getParams = query => {
  if (!query) {
    return { }
  }
  return query.slice(query.indexOf('?') + 1)
    .replace(/[#|?]/g, '&')
    .split('&')
    .reduce((params, param) => {
      let [ key, value ] = param.split('=')
      key = key.toLowerCase()
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''
      return params
    }, { })
}

/**
 * 获取URL传参
 * @param {String} name
 */
const urlParse = (name, target = 'href') => {
  const url = window.location[target]
  return getParams(url)[name]
}

/**
 * 格式化字符串两端空格
 * @param {String} string
 */
const trim = (string) => {
  return string.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, '')
}

// 函数防抖和函数节流
// 函数防抖：让这个函数在执行上一次之后过了你规定的时间再执行的一种方法
// 函数节流：让这个函数在间隔某一段时间执行一次
const throttle = (fn, delay, isDebounce) => {
  let timer
  let lastCall = 0
  return function (...args) {
    if (isDebounce) { // 函数防抖
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, delay)
    } else { // 函数节流
      const now = new Date().getTime()
      if (now - lastCall < delay) return
      lastCall = now
      fn(...args)
    }
  }
}

export {
  isEmpty, // 判断对象是否为空
  readCookie, // 读取cookie
  setTitle, // 设置标题
  urlParse,  // 获取URL传参
  trim, // 格式化字符串两端空格
  throttle // 函数防抖和函数节流
}