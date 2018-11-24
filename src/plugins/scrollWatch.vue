<template></template>
<script>
export default {
  name: 'ScrollWatch',
  props: {
    hasOver: {
      type: Boolean,
      default: false
    },
    scroller: {
      type: [HTMLDocument, Element, Window],
      default () {
        return window
      }
    },
    limitHeight: {
      type: Number
    }
  },
  watch: {
    scroller (scroller, oldScroller) {
      if (scroller === oldScroller) return
      this.$unbindScroll(oldScroller)
      this.$bindScroll(scroller)
    }
  },
  mounted () {
    this.$bindScroll()
  },
  beforeDestory () {
    this.$unbindScroll()
  },
  methods: {
    onScroll () {
      const scroller = this.scroller
      const isWindow = scroller === window
      // 监听页面已滑动的位置，当页面滑动超过临界值时，改变状态
      const scrollTop = isWindow ? scroller.ScrollY : scroller.scrollTop
      const isOver = scrollTop > this.limitHeight
      // 条件：已经设置标志位 并且 已经超过临界值，不再emit
      // 结果：超过设置1；其他，取百分比
      if (!(this.hasOver && isOver)) {
        const percent = (scrollTop / this.limitHeight).toFixed(4)
        this.$emit('over', isOver, isOver ? 1: percent, scrollTop)
      }
    },
    $bindScroll () {
      if (!this.scroller) return
      this._handleScroll = (e) => {
        if (this.onScroll) this.onScroll()
      }
      this.scroller.addEventListener('scroll', this._handleScroll)
    },
    $unbindScroll (scroller) {
      scroller = scroller || this.scroller
      if (this._handleScroll) scroller.removeEventListener('scroll', this._handleScroll)
    }
  }
}
</script>
