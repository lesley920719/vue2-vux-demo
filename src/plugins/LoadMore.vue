<template>
  <div class="infinite-scroll">
    <div class="infinite-loader" v-show="isLoad">
      <svg class="loader-circular" viewBox="25 25 50 50">
        <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
      </svg>
    </div>
    <span class="infinite-scroll-text" v-show="isLoad">
      {{ loadingText }}
    </span>
    <span class="infinite-scroll-text infinite-scroll-end" v-show="end && !hideEnd">
      {{ loadingEndText }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'infinite-scroll',
  props: {
    scroller: {
      type: [HTMLDocument, Element, Window],
      default () {
        return window
      }
    },
    isLoad: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '正在加载...'
    },
    loadingEndText: {
      type: String,
      default: '没有更多了'
    },
    hideEnd: {
      type: Boolean,
      default: false
    }
  },
  
  data () {
    return {
      lastCall: 0,
      delay: 1000
    }
  },
  mounted () {
    this.$bindScroll()
  },
  beforeDestory () {
    this.$unbindScroll()
  },
  watch: {
    scroller (scroller, oldScroller) {
      console.log('llllllllllllllllll')
      if (scroller === oldScroller) return
      this.$unbindScroll(oldScroller)
      this.$bindScroll(scroller)
    }
  },
  methods: {
    onScroll () {
      if (this.isLoad) return
      const scroller = this.scroller
      const isWindow = scroller === window
      const scrollTop = isWindow ? scroller.scrollY : scroller.scrollTop
      const scrollHeight = isWindow ? document.documentElement.scrollHeight || document.body.scrollHeight : scroller.scrollHeight
      const contentHeight = scrollHeight - scrollTop - 20
      const slideHeight = isWindow ? window.innerHeight : scroller.offsetHeight
      if (contentHeight <= slideHeight && !this.end) {
        // 增加节流函数
        const now = new Date().getTime()
        if (now - this.lastCall < this.delay) return
        this.lastCall = now
        this.$emit('load')
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
<style lang="less" scoped>
@import '~@/assets/style/theme.less';

.infinite-scroll {
  height: .9rem;
  width: 100%;
  text-align: center;
  background-color: transparent;
  border: 0;

}
.infinite-loader {
  float: left;
  margin: .225rem 0 0 35%;
  position: relative;
  width: .45rem;
  height: .45rem;
}
.loader-circular {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: center center;
  width: 100%;
  height: 100%;
  animation: rotate 2s linear infinite;
}
.loader-path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke: @theme;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
}

.infinite-scroll-text {
  float: left;
  margin-left: 3%;
  font-size: .24rem;
  line-height: .9rem;
  color: @themeGrey;
}
.infinite-scroll-end {
  position: relative;
  float: initial;
}
/* .infinite-scroll-end::before,
.infinite-scroll-end::after {
  content: '';
  position: absolute;
  top: 52%;
  left: 120%;
  width: 50%;
  height: 1px;
  transform: scaleY(.5);
  background-color: #ddd;
}
.infinite-scroll-end::before {
  left: -75%;
} */

@keyframes rotate {
  from { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  to { transform: rotate(360deg); }
}

@keyframes dash {
  0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 89, 200; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 89, 200; stroke-dashoffset: -124; }
}
/* 
@keyframes color {
  0%, 100% { stroke: #FFD300; }
  40% { stroke: #5B7492; }
  66% { stroke: #FFD300; }
  80%, 90% { stroke: #ACB9C8; }
} */

</style>
