/* 店铺相关 */
import StoreHomeHeader from './store/StoreHomeHeader'
import StoreHotDetail from './store/StoreHotDetail'
import StoreHotNews from './store/StoreHotNews'
import StoreOrderLogin from './store/StoreOrderLogin'
import StoreRecommendFive from './store/StoreRecommendFive'
import StoreRecommendFour from './store/StoreRecommendFour'
import StoreRecommendThree from './store/StoreRecommendThree'
import StoreRecommendTwo from './store/StoreRecommendTwo'
import StoreRecommendOne from './store/StoreRecommendOne'
import StoreRecommendTitle from './store/StoreRecommendTitle'
import StoreHomeMarket from './store/StoreHomeMarket'

/* 商品相关 */

import MarketCommonButton from './market/MarketCommonButton'
import MarketGoldBeanVerify from './market/MarketGoldBeanVerify'
import MarketGoodsItem from './market/MarketGoodsItem'
import MarketGoodsItemCart from './market/MarketGoodsItemCart'
import MarketGoodsItemOrder from './market/MarketGoodsItemOrder'
import MarketGoodsSku from './market/MarketGoodsSku'
import MarketHeader from './market/MarketHeader'
import MarketHeaderSearch from './market/MarketHeaderSearch'
import MarketHeaderTab from './market/MarketHeaderTab'
import MarketInput from './market/MarketInput'
import MarketInputCount from './market/MarketInputCount'
import MarketPageStatus from './market/MarketPageStatus'
import MarketPayChoose from './market/MarketPayChoose'
import MarketPayQrcodeGoods from './market/MarketPayQrcodeGoods'
import MarketPopupAddress from './market/MarketPopupAddress'
import MarketScrollSubFieldStatic from './market/MarketScrollSubFieldStatic'
import MarketSearch from './market/MarketSearch'
import MarketSearchGoods from './market/MarketSearchGoods'
import MarketSelectCell from './market/MarketSelectCell'
import MarketShippingCell from './market/MarketShippingCell'
import MarketSwitch from './market/MarketSwitch'

/* 商品相关 */

import Login from './broadband/Login'

/* 公共组件 */

import BaseButton from './layout/BaseButton'
import CommonAlert from './layout/CommonAlert'
import CommonAlertH from './layout/CommonAlertH'
import CommonHeader from './layout/CommonHeader'
import CommonShare from './layout/CommonShare'
import protocolAlert from './layout/protocolAlert'
import Container from './layout/Container'
import Drawer from './layout/Drawer'
import ImgDefault from './layout/ImgDefault'
import PayList from './layout/PayList'
import LayoutScroll from './layout/LayoutScroll'
import clerkAlert from './layout/clerkAlert'

/* 业务相关 */
import BusinessRecommend from './business/BusinessRecommend'
import BusinessUserInfo from './business/BusinessUserInfo'
import BusinessUserInfoOld from './business/BusinessUserInfoOld'

/* 其他零散组件 */

/* 输入相关 */

import Input from './input/Input'
import InputCount from './input/InputCount'
import InputPhone from './input/InputPhone'

/* 订单相关 */
import OrderQrcode from './order/OrderQrcode'
import OrderTab from './order/OrderTab'

/* 页面相关 */
import Result from './page/Result'
import Status from './page/Status'

/* 支付相关 */
import Choose from './pay/Choose'
import Qrcode from './pay/Qrcode'

/* 滚动相关 */
import PullDown from './scroll/PullDown'
import Subfield from './scroll/Subfield'

/* 宽带相关 */

// 号码查询列表
import BroadbandNewQuery from './broadband/BroadbandNewQuery'
// 用户手机号验证码校验
import BroadbandUserVerify from './broadband/BroadbandUserVerify'

/* ****************************************************** */

/* 店铺相关 */

export {
  StoreHomeHeader,    // 店铺首页头部
  StoreHotDetail,     // 热门详情
  StoreHotNews,       // 热门列表
  StoreOrderLogin,    // 订单查询登录
  StoreRecommendFive, // 专区 - 5
  StoreRecommendFour, // 专区 - 4
  StoreRecommendThree, // 专区 - 3
  StoreRecommendTwo,  // 专区 - 2
  StoreRecommendOne,  // 专区 - 1
  StoreRecommendTitle,  // 专区标题栏
  StoreHomeMarket     // 商品模块
}

/* 商品相关 */

export {
  MarketGoldBeanVerify,
  MarketCommonButton,   // 公共按钮
  MarketGoodsItem,      // 订单商品列表
  MarketGoodsItemCart,  //
  MarketGoodsItemOrder, //
  MarketGoodsSku,
  MarketHeader,
  MarketHeaderSearch,
  MarketHeaderTab,
  MarketInput,
  MarketInputCount,
  MarketPageStatus,
  MarketPayChoose,
  MarketPayQrcodeGoods,
  MarketPopupAddress,
  MarketScrollSubFieldStatic,
  MarketSearch,
  MarketSearchGoods,
  MarketSelectCell,
  MarketShippingCell,
  MarketSwitch

}

/* 宽带相关 */

export {
  Login
}

/* 公共组件 */

export {
  BaseButton,        // 公共按钮
  CommonAlert,       // 公共弹窗
  CommonAlertH,       // 公共弹窗
  CommonHeader,      // 公共头部
  CommonShare,      // 分享盒子
  protocolAlert,     // 公共服务协议弹窗
  Container,         // 公共容器
  Drawer,            // 公共弹出式匣子
  ImgDefault,        // 默认组件
  PayList,           // 支付列表
  LayoutScroll,       // 上拉加载和下拉刷新
  clerkAlert         // 社会合伙人协议
}

/* 业务相关 */
export {
  BusinessRecommend,
  BusinessUserInfo,  //
  BusinessUserInfoOld  //
  
}

/* 输入相关 */

export {
  Input,
  InputCount,
  InputPhone
}

/* 订单相关 */
export {
  OrderQrcode,    // 订单导航栏
  OrderTab    // 订单导航栏
}

/* 页面相关 */

export {
  Result,
  Status
}

/* 支付相关 */
export {
  Choose,
  Qrcode
}

/* 滚动相关 */
export {
  PullDown,
  Subfield
}

/* 宽带相关 */
export {
  BroadbandNewQuery,
  BroadbandUserVerify // 用户校验
}

const files = require.context('./', true, /\.vue$/)
let components = {};
files.keys().map(item => {
  let name = item.replace(/\.\/\w+\/(\w+)\.vue/g, '$1')
  components[name] = require(`${item}`).default;
})
// console.log(components)
export default components
