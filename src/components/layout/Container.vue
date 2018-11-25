<template>
  <div class="page-wrapper">
    <slot name="header" />
    <div class="page-content" ref="content">
      <slot/>

      <!-- 加载更多 -->
      <load-more v-if="isLoadMore" :scroller="scroller" :end="isLoadEnd" :isLoad="isLoad" @load="loadMore" />
    </div>
    <slot name="footer" />
    <div class="content-mask" @touchmove.prevent.stop v-if="contentMask"></div>
    <!-- 预留浮动区 -->
    <slot name="float" />
  </div>
</template>


<script type="text/javascript">

export default {
  name: 'Container',
  props: {
    contentMask: {
      type: Boolean,
      default: false
    },

    /* 加载更多 */
    isLoadMore: {
      type: Boolean,
      default: false
    },
    isLoadEnd: {
      type: Boolean,
      default: false
    },
    isLoad: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      scroller: null
    }
  },

  methods: {
    loadMore() {
      this.$emit('loadMore')
      console.log('loadMore')
    }
  },

  mounted() {
    if (this.isLoadMore) {
      this.scroller = this.$refs.content
    }
  }
}

</script>
<style lang='less' scoped>
@import "~@/assets/style/theme.less";

.page-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: @theme-bg;
  overflow: hidden;

  .page-content {
    position: relative;
    flex: 1 1 0;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .content-mask {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>
