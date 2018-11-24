const APPID = 1000000;
const CUSTOMER_SERVIECE_PHONE = 88888888;
const isLocal = (location.href.indexOf('localhost') > -1 || location.href.indexOf('172.16.') > -1 || location.href.indexOf('192.168.') > -1)  // 是否本地环境
const HOST_NAME = isLocal ? 'https://prod.xxx.cn/' : location.origin;  // 正式接口host
const HOST_NAME = isLocal ? 'https://test.xxx.cn' : location.origin;  // 测试接口host
const HOST_NAME = isLocal ? 'https://dev.xxx.cn' : location.origin;  // 开发接口host

export default{
  HOST_NAME,
  APPID,
  CUSTOMER_SERVIECE_PHONE,
  isLocal
}
