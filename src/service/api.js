/**
 * 组件内请求接口示例：
 * const res = this.$post('shop/info', {id: 123})
 * 
 */ 

const API = {
  "shop": {//店铺
    "info": "/moses/shop/app/shop/query",//店铺信息查询
    "login": "/moses/shop/app/user/singleSignOn",//单点登录
    "shippingAddressAdd": "/moses/shop/app/shippingAddress/add", //增加收货地址
    "shippingAddressUpdate": "/moses/shop/app/shippingAddress/update",//修改收货地址
    "shippingAddressDel": "/moses/shop/app/shippingAddress/delete",//删除收货地址
    "shippingAddressPage": "/moses/shop/app/shippingAddress/page",//获取收货地址列表
    "shippingAddressQuery": "/moses/shop/app/shippingAddress/query",//查询收货地址
    "ydscUserInfo": "/moses/shop/app/user/ydscUserInfo"//查询用户基本信息
  },
  "product": {//商品
    "page": "/moses/product/app/product/page",//商品列表
    "stock": "/moses/product/app/stock/queryStock",//库存查询
    "sku": "/moses/product/app/sku/page",//sku查询
    "detail": "/moses/product/app/product/query",//商品详情
    "detail4html": "/moses/product/app/productDetail/queryDetailByProductId",//商品富文本
    "supplier": "/moses/product/app/org/querySupplier",//供应商查询
    "recommend": "/moses/product/app/productRecommend/recommend",//推荐/取消商品推荐
    "recommendPage": "/moses/product/app/product/queryRecommendProduct"//推荐商品列表
  },
  "brand": {//品牌
     "page": "/moses/brand/app/appBrand/page"//品牌
  },
  "category": {//分类
     "page": "/moses/category/app/customAppCategory/page"//分类
  },
  "search": {//查找
    "page": "/moses/search/consumer/product/search",//搜索
    "hotKeywords": "/moses/search/consumer/product/hotKeywords"//热门搜索关键字
  },
  "cart": {//购物车
    "page": "/moses/cart/consumer/cartInfo/get",//购物车列表
    "add": "/moses/cart/consumer/cartInfo/add",//添加商品到购物车
    "clear": "/moses/cart/consumer/cart/clearCart",//清空购物车
    "count": "/moses/cart/consumer/cart/getCartCount",//获取购物车商品数量
    "editNum": "/moses/cart/consumer/cartInfo/editNum",//修改购物车商品
    "delete": "/moses/cart/consumer/cartInfo/deleteShop"//删除物车商品
  },
  "comment": {//评论
    "page": "/moses/comment/consumer/comment/page"//商品评论
  },
  "order": {//订单
    "check": "/moses/order/adapter/orderCheck/check",//预下单
    "create": "/moses/order/adapter/create",//下单
    "pay": "/moses/order/adapter/pay",//支付 
    "payStatus": "/moses/order/query/getPayStatus",//查询是否支付状态
    "page": "/moses/order/query/getAllUserOrder",//订单列表
    "detail": "/moses/order/query/getOrderInfo",//订单详情
    "confirmReceipt": "/moses/order/command/confirmReceipt",//确认收货
    "deliveryPush": "/moses/order/app/userOrder/deliveryPush",//催发货
    // "deliveryPush": "/moses/order/command/delivery",//催发货
    // "applyRefund": "/moses/order/app/refund/applyRefund",//申请退款
    "applyRefund": "/moses/refund/command/refund/apply",//申请退款
    "cancel": "/moses/order/command/cancel",//取消订单
    "comment": "/moses/order/command/comment"//订单评论
  },
  "admin": {//公共数据
    "disctricts": "/moses/app/disctricts/list", //获取省市区信息
    "dectionary": "/moses/app/dictionary/get" //不需要appId获取数据字典
  },
  "refund": {//退款
    "apply": "/moses/refund/command/refund/apply",//获提交退款申请
    "page": "/moses/refund/query/refund/page",//获取买家退款订单列表
    "pageByPhone": "/moses/refund/query/refund/pageByPhone",//通过手机号获取买家退款订单列表
    "detail": "/moses/refund/query/refund/query"//退款订单详情
  },
  "zoneconf": {//专区
    "list": "/moses/zoneconf/subject/selectAllUserSubject",
    "childList": "/moses/zoneconf/subject/findChildSubjectList",
    "subjectGoods": "/moses/zoneconf/subjectGoods/page" 
  },
  "advert": {//广告
    "page": "/cmbs/advert/consumer/advertInfo/advertPage"
  },
  "invoice": {//发票
    "detail": "/moses/invoice/consumer/invoiceInfo/query"//发票查询
  },
  "upload": {
    "file": "/moses/upload/file/upload"//文件上传
  },
  "common": {//验证码
    "sendCode": "/mcs/common/consumer/common/sendSMSOrVerify"//公共获取验证码接口
  },
  "message": {//首页公告链接
    "list": "/cmbs/message/consumer/messageInfo/list",//公告列表
    "detail": "/cmbs/message/consumer/messageInfo/query"//公告详情
  },
  "registerLogin": {//登录注册部分
    "regist": "/moses/shop/app/user/regist",//注册
    "updateRegister": "/moses/shop/app/user/updateRegister",//注册用户修改
    "generateQRCode": "/moses/shop/app/user/generateQRCode",//获取图片验证码
    "validateCode": "/moses/shop/app/user/validateCode",//校验图片验证码
    "sendMsgCodeByKafka": "/moses/shop/app/user/sendMsgCodeByKafka",//发送短信验证码
    "checkValidateMsgCode": "/moses/shop/app/user/checkValidateMsgCode",//验证短信验证码
    "resetAndFindPassword": "/moses/shop/app/user/resetAndFindPassword",//重置密码与修改密码忘记密码
    "login": "/moses/shop/app/user/login",//登录
    "checkPhone": "/moses/shop/app/user/checkPhone",//手机号码重复校验
    "autoLogin": "/moses/shop/app/user/autoLogin",//一键登录
  },
  "userInfo": {//店铺用户查询（店员查询）
    "user": "/moses/shop/app/user/query" //店铺用户查询（店员查询）
  },
}

export default API
