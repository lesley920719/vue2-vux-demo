<template>
  <ul class="pay_list clearfix">
    <li class="item">
      <span class="title">
        选择支付方式
      </span>
      <i class="icon-close" v-if="btnClose" @click="emitClose"></i>
    </li>

    <li class="item"
    v-for="(item, index) in payLists"
    :key="index"
    @click="handleChoose(item)">
      <!-- 支付图标 -->
      <i class="icon type"
      :class="item.title"></i>
      <span class="name">
        {{ item.name }}
      </span>
      <!-- 选中 -->
      <i class="icon btn"
      :class="{ active: payChosen.type === item.type &&
      payChosen.platform === item.platform }"></i>
    </li>
  </ul>
</template>

<script type="text/javascript">
import { isEmpty } from '@/utils'

export default {
  name: 'PayList',

  props: {
    value: {
      // 选中方式
      type: Object
    },
    btnClose: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      payLists: [
        // 支付列表
        {
          name: '支付宝支付',
          title: 'aliPay',
          type: 14,
          platform: 3,
          bankNo: 178, // 银行号(支付方式): BANK_NO 173-微信支付 178-支付宝支付
          payCode: '2001',
        },
           {
             name: '支付宝二维码',
             title: 'aliPay',
             type: 14,
             platform: 5,
             bankNo: 178,
             payCode: '5001',
           },
        /* 暂时屏蔽微信支付 */
        {
          name: '微信支付',
          title: 'wechat',
          type: 16,
          platform: this.isWechat?3:6, // 支付类型
          bankNo: 173,
//        payCode: this.isWechat?'3002':'2002',
          payCode: '3002',
        },
           {
             name: '微信二维码',
             title: 'wechat',
             type: 16,
             platform: 5,
             bankNo: 173,
             payCode: '5012',
           }
      ],

      payChosen: this.value // 初始化
    }
  },

  /* ************** computed ************** */

  computed: {
    isWechat() {
      // 检测微信环境
      return !!navigator.userAgent.toLowerCase().match(/micromessenger/gi)
    }
  },

  /* ************** methods ************** */
  methods: {
    emitClose () {
      this.$emit('close')
    },

    // 切换选项
    handleChoose(item) {
      this.payChosen = item
      // console.log(this.payChosen)
    }
  },

  watch: {
    // 模拟实现 v-model 双向数据绑定
    value(data) {
      this.payChosen = data
    },

    payChosen(data) {
      this.$emit('input', data)
    }
  },

  /* ************** created ************** */

  created() {
    // 设置默认选项
    // 暂时屏蔽微信支付
    /* if (isEmpty(this.value)) {
      if (navigator.userAgent.toLowerCase().match(/micromessenger/gi)) {
        this.payChosen = {
          name: '微信支付',
          title: 'wechat',
          type: 16,
          platform: 3, // 移动的支付类型
          bankNo: 173,
          payCode: '2002',
        }
      } else {
        this.payChosen = {
          name: '支付宝支付',
          title: 'aliPay',
          type: 14,
          platform: 3,
          bankNo: 178
        }
      }
    } */

    // 不是微信支付环境 - 屏蔽(移除)微信支付
    // if (!isWechat) this.payLists.pop()
    this.payChosen = {
      name: '支付宝支付',
      title: 'aliPay',
      type: 14,
      platform: 3,
      bankNo: 178,
      payCode: '2001',
    }
  }
}
</script>

<style lang="less" scoped>
/* 下划线方法 */
.splitLine () {
  position: absolute;
  left: -42%;
  right: -42%;
  bottom: 0;
  transform: scale(0.5);
  -webkit-tranform: scale(0.5);
  border-bottom: 1px solid @colorLine;
}

.pay_list {
  width: 100%;

  .item {
    position: relative;
    width: 100%;
    height: 0.98rem;
    line-height: 0.98rem;
    font-size: 0.28rem;

    .name {
      padding-left: 12%;
    }

    .icon-close {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 1.24rem;
      height: 100%;
      background: url('~images/common/common_i_close.png') no-repeat center;
      background-size: .5rem;
      z-index: 10;
    }

    &::before {
      content: '';
      .splitLine();
    }

    &:last-child::before {
      border-bottom-color: transparent;
    }

    .title {
      padding-left: 0.3rem;
    }

    .icon {
      display: block;
      position: absolute;
      top: 0;
      width: 0.98rem;
      height: 0.98rem;
      background: no-repeat center;
      background-size: 0.46rem;
      transition: background-image 0.3s linear;

      &.type {
        left: 1%;
      }

      &.aliPay {
        background-image: url('~@/assets/images/common/common_i_aliPay.png');
      }

      &.wechat {
        background-image: url('~@/assets/images/common/common_i_wechat.png');
      }

      &.btn {
        right: 2%;
        background-image: url('~@/assets/images/common/common_i_select.png');
        background-size: 0.5rem;

        &.active {
          background-image: url('~@/assets/images/common/common_i_selected.png');
        }
      }
    }
  }
}
</style>
