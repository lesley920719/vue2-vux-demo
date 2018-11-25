<template>
  <div class="common_alert">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div v-if="showValue" class="alert-mask" @touchmove.prevent.stop></div>
      <!-- <div v-if="show" class="alert-mask" @touchmove.prevent.stop @click="handleClose('mask')"></div> -->
    </transition>

    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <div v-if="showValue" class="alert-content">
        <h2 class="title">
          <i class="icon" :class="type"></i>
          {{ content.title || '' }}
          <i class="btn-close" @click="handleClose('close')" v-if="showCancelIcon"></i>
        </h2>
        <p v-if="!custom" class="input-text" :class="{tip: content.type == 'tip'}">
          {{ content.text || '' }}
        </p>
        <slot v-if="custom" />

        <button class="btn-confirm" v-if="!hasCancel" @click="handleClose('confirm',$event)">
          {{ customConfirmText }}
        </button>

        <div class="btns" v-if="hasCancel">
          <button class="btn cancel" @click="handleClose('cancel')">
            {{ cancelText }}
          </button>
          <button class="btn confirm" @click="handleClose('confirm')">
            {{ customConfirmText }}
          </button>
        </div>

      </div>
    </transition>
  </div>
</template>
<script>

import { isEmpty } from '@/utils'

export default {
  name: 'CommonAlert',
  props: {
    show: { // 是否显示弹窗
      type: Boolean,
      default: false
    },
    type: { // 标题图标类型
      type: String,
      default: 'warn', // 默认提示图标
      // default: 'exit', // 默认提示图标
      // default: 'success', // 默认提示图标
    },
    hasCancel: { // 取消按钮 默认不显示
      type: Boolean,
      default: false
    },
    content: {
      type: Object
    },
    custom: { // 是否自定义标签
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    customConfirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showCancelIcon: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      showValue: false,
      title: '',
      text: ''
    }
  },

  created() {
    if (typeof this.show !== undefined) {
      this.showValue = this.show
    }

    if (!isEmpty(this.content)) {
      this.title = this.content.title
      this.text = this.content.text
    }
  },

  methods: {
    // 关闭弹窗
    // type: close, mask, confirm
    handleClose(type, $event) {
      // console.log('$event',$event)
      this.$emit('close', type, $event)
      this.$emit('input', false)
      // this.showValue = false
      // this.onHide()
    },

    onHide() {
      this.showValue = false
    }
  },

  watch: {
    show(val) {
      this.showValue = val
    },
    showValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>
<style lang="less" scoped>
.alert-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 1999;
}

.alert-content {
  position: fixed;
  left: 13.7%;
  top: 35%;
  /* top: 50%; */
  /* transform: translate(0, -50%); */
  background-color: #fff;
  z-index: 2000;

  width: 72.6%;
  border-radius: 0.2rem;

  .title {
    position: relative;
    width: 100%;
    height: 0.87rem;
    line-height: 0.87rem;
    padding: 0 0.71rem;
    border-bottom: 1px solid @border-color;
    font-size: 0.28rem;
    font-weight: 500;

    .icon {
      content: "";
      position: absolute;
      top: 0;
      left: 0.1rem;
      width: 0.6rem;
      height: 100%;
      background: url("~images/common/common_i_alert_warn.png") no-repeat center;
      background-size: 0.34rem;

      &.exit {
        background-image: url("~images/common/common_i_alert_exit.png");
      }

      &.success {
        background-image: url("~images/common/common_i_alert_success.png");
      }
    }

    .btn-close {
      position: absolute;
      right: 0.1rem;
      top: 0;
      width: 0.71rem;
      height: 100%;
      background: url("~images/common/common_i_close.png") no-repeat center;
      background-size: 0.5rem;
    }
  }

  p {
    padding: 0.24rem 0.5rem;
    font-size: 0.24rem;
    line-height: 1.5;

    &.tip {
      max-height: 3rem;
      overflow: auto;
      text-align: center;
      font-size: 0.3rem;
      word-wrap:break-word;
    }
  }

  .btn-confirm {
    display: block;
    width: 2.2rem;
    height: 0.6rem;
    border-radius: 0.06rem;
    border: 0.02rem solid @themeBtn;
    color: @themeBtn;
    font-size: 0.28rem;
    margin: 0.1rem auto 0.24rem;
  }
}

/* 底部按钮 */
.btns {
  display: flex;
  justify-content: center;
  padding: 0.15rem 0 0.24rem;

  .btn {
    width: 2.2rem;
    height: 0.6rem;
    border: 0.02rem solid;
    border-radius: 0.06rem;
    font-size: 0.28rem;

    &.cancel {
      border-color: @theme-tip;
      color: @theme-tip;
      margin-right: 0.3rem;
    }

    &.confirm {
      border-color: @themeBtn;
      color: @themeBtn;
    }
  }
}
</style>
