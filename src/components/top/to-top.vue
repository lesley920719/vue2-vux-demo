<template>
  <div class="to_top"
       v-show="showTop"
       @click="toTop()"></div>
</template>
<script type = 'text/javascript'>
export default {
  name: 'to-top',
  data () {
    return {
      scrollTop: 0,
      time: 0,    // 定时器
      dParams: 20,
      scrollState: 0
    }
  },
  computed: {
    showTop: function () {
      let value = this.scrollTop > 160 ? true : false;
      return value;
    },
  },
  created () {
    console.log("to-top")
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.getScrollTop, true);  //滚动事件监听
    });

  },
  methods: {
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    },
    toTop () {
      if (!!this.scrollState) {
        return;
      }
      this.scrollState = 1;
      let distance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let _this = this;
      this.time = setInterval(function () { _this.gotoTop(_this.scrollTop - _this.dParams) }, 10);
    },
    gotoTop (distance) {
      this.dParams += 10;
      distance = distance > 0 ? distance : 0;
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
      if (this.scrollTop < 10) {
        clearInterval(this.time);
        this.dParams = 20;
        this.scrollState = 0;
      }
    },
  },
}
</script>
<style lang ="less" scoped>
@import "~@/assets/less/mixin.less";
.to_top {
  position: fixed;
  height: 1rem;
  width: 1rem;
  bottom: 1.2rem;
  right: 0.2rem;
  z-index: 99;
  border-radius: 50%;
  .bg-img(common_top);
  background-size: 100%;
}
</style>
