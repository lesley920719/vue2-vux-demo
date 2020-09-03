<template>
  <div class="layout-scroll">
    <div :id="scrollId || 'minirefresh'"
         class="minirefresh-wrap">
      <div class="minirefresh-scroll">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
import MiniRefreshTools from 'minirefresh'; //http://www.minirefresh.com/minirefresh-doc/
import 'minirefresh/dist/debug/minirefresh.css'
import { setTimeout } from 'timers';
export default {
  name: 'layout-scroll',
  props: {
    down: Function,
    scrollId: String // 解决实例化id相同造成的冲突
  },
  data () {
    return {
      minirefresh: null
    };
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const self = this;
      // eslint-disable-next-line
      self.miniRefresh = new MiniRefresh({
        container: this.scrollId ? `#${this.scrollId}` : '#minirefresh',
        dampRate: 0,
        down: {
          isLock: true,
          // isAutoResetUpLoading: true,
          callback () {
            console.log('=======================')
            setTimeout(() => {
              self.endDownLoading(true)
            }, 2000)
          }
        },
        up: {
          isAuto: true,
          callback () {
            // 上拉事件
            self.$emit('unEvent')
            // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
          },
          // callback: self.up,
          loadFull: {
            isEnable: false,
            delay: 400
          }
        }
      });
    },
    triggerUpLoading () {
      this.miniRefresh.triggerUpLoading()
    },
    triggerDownLoading () {
      this.miniRefresh.triggerDownLoading()
    },
    endDownLoading (end) {
      this.miniRefresh.endDownLoading(end)
    },
    endUpLoading (end) {
      this.miniRefresh.endUpLoading(end)
    },
    resetUpLoading () {
      this.miniRefresh.resetUpLoading()
    }
  }
};

</script>
<style lang='less' scoped>
/**
 * showcase通用样式
 */
.layout-scroll {
  position: relative;
  width: 100%;
  height: 100%;
}
* {
  -webkit-user-select: none;
}
.minirefresh-scroll {
  // background: @theme-bg;
}
.layout-scroll {
  background: #fff;
}
</style>
