<template>
  <!--webview头部，显示返回按钮和菜单按钮，origin != '3'分为Android和IOS两种样式 -->
  <div class="header clearfix" v-if="!isHideHeader">
    <div class="common_header-title" :class="{ iphone: isIOS && isInApp }">
      <!-- 分享按钮 -->
      <button class="btn_share" ref="btn" v-if="share && isInApp" @click="handleBubbleShow">
        分享
      </button>
    </div>

    <!-- 分享盒子 -->
    <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <ul key="share-box" class="clearfix" :class="{'iphone': isIOS,'common_bubble_box2':isBoxTop,'common_bubble_box':!isBoxTop}" v-show="isBubble">
        <li class="box-item" v-for="(item, index) in bubbleList" :key="index" @click="handleShare(item, index)">
          <i class="item-icon" :class="item.icon"></i>
          <span class="item-text">
            {{ item.name }}
          </span>
        </li>
      </ul>
      <!-- 透明黑色遮罩层 -->
      <div class="share_mask" key="share_mask" :class="{ iphone: isIOS && isInApp }" @click="isBubble = false" v-if="isBubble"></div>
    </transition-group>

    <slot></slot>
  </div>
</template>
<script type="text/javascript">

import { mapGetters } from 'vuex'
import ConfigInfoMixin from '@/mixin/ConfigInfoMixin'
import {
  setTitle
} from '@/utils'

export default {
  name: 'CommonShare',

  props: {
    title: {
      type: String,
      default: ''
    },
    share: {
      type: Boolean,
      default: false
    },
    shareData: {
      type: Object
    },
    hasBackCb: { //如果为true 则会触发 back 事件
      type: Boolean,
      default: false
    },
    filter: { //筛选按钮
      type: Boolean,
      default: false,
    },
    history: { //回看历史
      type: Boolean,
      default: false,
    },
    showHead: { // 商品详情分享需要显示头部加此属性
      type: Boolean,
      default: false,
    },
    hasAdd: { //回看历史
      type: Boolean,
      default: false,
    },
    hasBtn: { //右侧按钮
      type: Boolean,
      default: false,
    },
    btnName: {
      type: String,
      default: ''
    }
  },
  mixins: [ConfigInfoMixin],
  data() {

    return {
      isBubble: false, // 分享盒子
      isBoxTop: false, // 盒子方向
      bubbleList: [{
        name: '二维码',
        icon: 'qrcode'
      },
      {
        name: '分享',
        icon: 'share'
      },
      {
        name: '海报',
        icon: 'poster'
      },
      {
        name: '短链接',
        icon: 'link'
      }
      ]
    }
  },

  computed: {
    ...mapGetters(['beginPath']),

    isIOS() {
      return /iphone/gi.test(window.navigator.userAgent.toLowerCase())
    },

    // 判断是否 微信 / QQ 环境
    isInApp() {
      const ua = window.navigator.userAgent.toLowerCase()
      const wechat = /micromessenger/gi.test(ua)
      const qq = /qq/gi.test(ua)
      return !(wechat || qq)
    },

    // 是否隐藏头部
    isHideHeader() {
      if (this.showHead) return false // 商品详情分享出去需要显示头部
      if (this.hasBackCb) return false // 有自定义响应返回，不隐藏头部 - 比如全屏弹窗
      return !this.isInApp && this.beginPath === this.$route.path
    }
  },

  /* *************************** methods *************************** */


  /* *************************** methods *************************** */

  methods: {


    goBack() {
      if (this.hasBackCb) return this.$emit('back')
      // 分享出去头部直接go(-1)
      if (this.environment >= 2) return this.$router.go(-1);
      if (this.beginPath === this.$route.path) {
        try {
          window.LvUJsBridge.invoke('GoBack', {}, function (response) { })
        } catch (error) {
          this.$alert.show({
            title: '提示',
            text: '返回失败，请重试',
            type: 'tip'
          })
        }
      } else {
        this.$router.go(-1)
      }
    },

    // 分享盒子
    // 0: 二维码 1: 分享 2: 海报 3: 短链接
    handleShare(item, index = 0) {
      this.isBubble = false
      // 分享数据
      const shareData = {
        shareTitle: this.shareData.title || '', // 分享标题
        shareDesc: this.shareData.desc || '', // 分享内容
        shareImg: index === 2 ? this.shareData.poster : this.shareData.img || '', // 分享图片链接
        shareLink: index === 3 ? this.shareData.shortLink : this.shareData.link || '', // 分享跳转链接
        shareType: 1 + index, // 二维码1，分享2，海报3，短链4
        price: this.shareData.price || '' // 用于制作海报的时候，显示的价格，如果无，则不显示
      }
      console.log('shareData', shareData)
      try {
        console.log(window.LvUJsBridge)
        window.LvUJsBridge.invoke('GoShare', shareData, function (response) {
          //处理oc过来的回调
          console.log(response)
        })
      } catch (error) {
        this.$alert.show({
          title: 'tip',
          text: '分享失败',
          type: 'tip'
        })
      }
    },

    // 分享按钮
    handleBubbleShow() {
      this.isBubble = !this.isBubble
      this.$emit('shareBtn', this.isBubble);
      // 分享按钮距离视口底部距离
      let btnBottom = window.screen.height - this.$refs.btn.getBoundingClientRect().bottom
      // 分享盒子实际高度
      let boxHeight = parseInt(window.document.documentElement.style.fontSize) * 4.02
      if (boxHeight > btnBottom) {
        this.isBoxTop = true // 分享盒子显示在上方
      } else {
        this.isBoxTop = false // 分享盒子显示在下方
      }
    },
    //筛选按钮
    handleFilter() {
      this.$emit('handleFilter')
    },
    //筛选按钮
    handleHistory() {
      this.$emit('handleHistory')
    },
    // 添加按钮
    handleAdd() {
      this.$emit('handleAdd')
    }
  },

  /* *************************** created *************************** */

  created() {
    // 设置标题
    setTitle(this.title ? this.title : '智慧随身厅')
  }
}

</script>
<style lang="less" scoped>
@import "~@/assets/style/theme.less";
.header {
  position: relative;
  // z-index: 100;
  width: 100%;
  background-color: #fff;
}

.common_header-title {
  position: relative;
  align-items: center;
  background-color: inherit;

  &.iphone {
    /* ios状态栏设置20px空白，解决ios标题栏 */
    // height: 1.44rem;
    // padding: 0.44rem 0.14rem 0;

    .back::before {
      margin-top: 0.06rem;
    }
  }

  .back,
  .share {
    width: 1.4rem;
    height: 100%;
  }

  .back {
    position: absolute;
    left: 0.14rem;
    top: 0;
    z-index: 10;
    .arrow {
      position: absolute;
      left: 30%;
      bottom: 0.26rem;
      margin: 0 0 0 -0.24rem;
      width: 0.48rem;
      height: 0.48rem;
      transform: rotate(180deg);
    }
    // &::before {
    //   content: "";
    //   position: absolute;
    //   left: 30%;
    //   top: 50%;
    //   margin: -0.12rem 0 0 -0.12rem;
    //   width: 0.24rem;
    //   height: 0.24rem;
    //   border: solid @theme-normal;
    //   border-width: 0.02rem 0 0 0.02rem;
    //   transform: rotate(-45deg);
    // }
  }

  /* 分享按钮 */
  .btn_share {
    width: 1.4rem;
    height: 0.5rem;
    border-radius: 1rem;
    border: 1px solid #999999;
    font-size: 0.24rem;
  }

  .options {
    border: none;
    position: absolute;
    right: 0.14rem;
    top: 0;
    display: block;
    height: 100%;
  }
  .btn {
    display: block;
    position: absolute;
    right: 3.4%;
    bottom: 0.3rem;
    width: 0.4rem;
    height: 0.4rem;
    z-index: 20;
  }
  .btn_filter {
    background: url("~images/ESOP/Esop_icon_img_5@3x.png") no-repeat center;
    background-size: 0.35rem;
  }

  .btn_history {
    background: url("~images/ESOP/Esop_icon_img_7@3x.png") no-repeat center;
    background-size: 0.35rem;
  }
  .btn_add {
    background: url("~images/market/add.png") no-repeat center;
    background-size: 0.48rem;
  }
  .name {
    width: 0.8rem;
    height: 1rem;
    bottom: 0;
    font-size: 0.32rem;
    color: #6f6f6f;
  }
  .title {
    /* flex: 1; */
    text-align: center;
    padding: 0 0.8rem;
    font-size: 0.36rem;
    color: @themeText;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

/* 分享盒子 */

.common_bubble_box2 {
  position: absolute;
  // right: 0;
  top: -4.2rem;
  z-index: 1000;
  width: 2.4rem;
  height: 4.02rem;
  padding: 0.1rem 0.2rem 0;
  background: url("~images/common/common_bubble_box2.png") no-repeat center;
  background-size: contain;
  z-index: 1000;
  /* 适配iPhone */
  // &.iphone {
  //   top: 1.14rem;
  // }

  .box-item {
    position: relative;
    width: 100%;
    height: 0.98rem;
    z-index: 1000;
    line-height: 0.98rem;
    padding-left: 0.88rem;
    // border-bottom: 1px solid @border-color;
  }

  .item-icon {
    position: absolute;
    left: 0.28rem;
    top: 0.27rem;
    display: block;
    width: 0.44rem;
    height: 0.44rem;

    background: no-repeat center;
    background-size: contain;

    &.qrcode {
      background-image: url("~images/common/share_i_qrcode.png");
    }

    &.share {
      background-image: url("~images/common/share_i_share.png");
    }

    &.poster {
      background-image: url("~images/common/share_i_poster.png");
    }

    &.link {
      background-image: url("~images/common/share_i_link.png");
    }
  }
}

.common_bubble_box {
  position: absolute;
  right: 4%;
  top: 0.7rem;
  z-index: 1000;
  width: 2.4rem;
  height: 4.02rem;
  padding: 0.1rem 0.2rem 0;
  background: url("~images/common/common_bubble_box.png") no-repeat center;
  background-size: contain;
  z-index: 1000;

  /* 适配iPhone */
  // &.iphone {
  //   top: 1.14rem;
  // }

  .box-item {
    position: relative;
    width: 100%;
    height: 0.98rem;
    z-index: 1000;
    line-height: 0.98rem;
    padding-left: 0.88rem;
    border-bottom: 1px solid @border-color;
  }

  .item-icon {
    position: absolute;
    left: 0.28rem;
    top: 0.27rem;
    display: block;
    width: 0.44rem;
    height: 0.44rem;

    background: no-repeat center;
    background-size: contain;

    &.qrcode {
      background-image: url("~images/common/share_i_qrcode.png");
    }

    &.share {
      background-image: url("~images/common/share_i_share.png");
    }

    &.poster {
      background-image: url("~images/common/share_i_poster.png");
    }

    &.link {
      background-image: url("~images/common/share_i_link.png");
    }
  }
}

.share_mask {
  position: fixed;
  top: 1rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;

  &.iphone {
    top: 1.44rem;
  }
}
</style>
