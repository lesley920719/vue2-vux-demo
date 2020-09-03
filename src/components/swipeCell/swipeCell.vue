<template>
  <div class="swipe-cell"></div>
</template>

<script type = 'text/javascript'>
import goBack from '../header/goBack';
export default {
  props: {
    type: { // 1 加载失败   2 程序猿努力开发中 3 暂无内容  4 购物车空空如也 5 暂无订单信息 6 您还没有领取优惠券
      type: String,
      default: '3'
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang = 'less' scoped>
.swipe-cell {
}
</style>