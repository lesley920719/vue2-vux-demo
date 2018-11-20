export default function (time, fmt = 'YYYY/MM/DD hh:mm:ss') { // YYYY-MM-DD
  if (!time) return 0
  let date = new Date(time - 0);
  if (/(Y+)/.test(fmt)) {
    // RegExp.$n:表示第n个子表达式所匹配的文本内容
    fmt = fmt.replace(RegExp.$1, date.getFullYear() + '').substr(4 - RegExp.$1.length)
  }
  let o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let key in o) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = o[key] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero (str) {
  // stringObject.substr(start,length) : substr() 方法可在字符串中抽取从 start 下标开始的指定length数目的字符。
  return ('00' + str).substr(str.length)
}
