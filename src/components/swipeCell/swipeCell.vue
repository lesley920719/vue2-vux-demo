<template>
  <div class="swipe-cell"
       ref="swipe-cell"
       v-handle-outside="restSlide">
    <div class="flex item-box"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd">
      <slot name="swipe-cell-content">
        <div class="item-desc flex">
          <p>滑块单元格</p>
          <p class="ellipsis">{{content}}</p>
        </div>
      </slot>
    </div>
    <div class="btn-box flex"
         ref="swipe-cell-right">
      <slot name="swipe-cell-right">
        <!-- <div class="btn edit"
             @click="editDanger(content)">
          <img src="~@/assets/images/default/edit.png"
               alt="edit.png" />
          <span>编辑</span>
        </div> -->
        <div class="btn del"
             @click="deleteDanger(content)">
          <img :src="require('@/assets/images/default/delete.png')"
               alt="delete.png" />
          <span>删除</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script type = 'text/javascript'>
export default {
  name: 'swipeCell',
  props: {
    type: { // 1 加载失败   2 程序猿努力开发中 3 暂无内容  4 购物车空空如也 5 暂无订单信息 6 您还没有领取优惠券
      type: String,
      default: '3'
    },
    content: {
      type: String,
      default: '内容'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    minDistance: {
      type: Number,
      default: 30
    }
  },
  data () {
    return {
      swipeStatus: false,  // 滑块状态：true - 打开， false - 关闭
      startX: 0,
      endX: 0,
      offsetX: 0,
    }
  },
  watch: {
    offsetX (val, oldVal) {
      this.$refs['swipe-cell'].setAttribute('style', `transform: translate3d(${val}px, 0, 0)`);
    }
  },
  computed: {
    computedRightWidth () { // 右侧块宽度
      return this.getWidthByRef('swipe-cell-right');
    },
  },
  mounted () {

  },
  methods: {
    getWidthByRef (ref) {
      if (this.$refs[ref]) {
        const rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }
      return 0;
    },
    // 触摸开始
    touchStart (event) {
      if (this.disabled) {
        return;
      }
      // 记录初始位置
      this.startX = event.touches[0].clientX;
    },
    // 触摸
    touchMove (event) {
      if (this.disabled) {
        return;
      }
      const _touch = event.touches[0];
      let _deltaX = _touch.clientX - this.startX;
      if (this.swipeStatus && _deltaX > 0 && _deltaX <= this.computedRightWidth) { // 打开状态时 -- 右滑
        this.offsetX = _deltaX - this.computedRightWidth;
      } else if (!this.swipeStatus && _deltaX < 0 && _deltaX >= -this.computedRightWidth) {  // 关闭状态时 -- 左滑
        this.offsetX = _deltaX;
      }
    },
    // 触摸结束
    touchEnd (event) {
      if (this.disabled) {
        return;
      }
      // 当前滑动的父级元素
      let parentElement = event.currentTarget.parentElement;
      // 记录结束位置
      this.endX = event.changedTouches[0].clientX;
      let _delTax = Math.abs(this.endX - this.startX);
      if (!this.swipeStatus && _delTax > this.minDistance) {  // 关闭状态时 -- 左滑距离超过minDistance则打开
        this.swipeStatus = true;  // 打开
        this.offsetX = 0 - this.computedRightWidth;
        // parentElement.setAttribute('style', `transform: translate3d(-${this.computedRightWidth}px, 0, 0)`);
      } else if (this.swipeStatus && _delTax < this.minDistance) {  // 打开状态时 -- 右滑距离不超过minDistance时维持打开状态
        this.offsetX = 0 - this.computedRightWidth;
      } else {  // 重置为关闭状态
        this.restSlide();
      }
    },
    restSlide () {  // 状态重置--关闭
      this.startX = 0;
      this.endX = 0;
      this.offsetX = 0;
      this.swipeStatus = false;  // 关闭
      // 复位
      // this.$refs['swipe-cell'].setAttribute('style', `transform: translate3d(0, 0, 0)`);
    },
    // 编辑按钮
    editDanger (content) {
      console.log('编辑', content);
      this.$vux.alert.show('编辑' + content);
      this.restSlide();
    },
    // 删除按钮
    deleteDanger (content) {
      this.$vux.confirm.show({
        title: '提示',
        content: '是否确认删除' + content,
        confirmText: '确认',
        cancelText: '取消',
        onConfirm: () => {
          console.log('删除', content);
          this.restSlide();
        },
        onCancel () { // 取消
        },
      })
    },
  }
}
</script>

<style lang = 'less' scoped>
.swipe-cell {
  position: relative;
  transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1);
  transition-property: transform;
  transition-duration: 0.6s;
  transform: translate3d(0, 0, 0);
  background: #fff;
  .flex {
    display: flex;
    align-items: center;
  }
  .item-box {
    padding: 0.3rem;
    border-bottom: 1px solid rgba(155, 159, 176, 0.1);
    .item-img {
      width: 1rem;
      height: 1rem;
      margin-right: 0.3rem;
      img {
        border-radius: 0.4rem;
        width: 100%;
        height: 100%;
      }
    }
    .item-desc {
      flex: 1;
      justify-content: space-between;
      color: #000;
      font-weight: 500;
      font-size: 0.3rem;
      .ellipsis {
        margin-left: 0.2rem;
        text-align: right;
        flex: 1;
        width: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .btn-box {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate3d(100%, 0, 0);
    height: 100%;
  }
  .btn {
    width: 1.4rem;
    height: 100%;
    color: #fff;
    font-size: 0.26rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 0.3rem;
      margin-bottom: 0.18rem;
    }
  }
  .edit {
    background: #4092ff;
  }
  .del {
    background: #ed7a7a;
  }
}
</style>