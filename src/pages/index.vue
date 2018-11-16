<template>
  <div class="wrapper">
    <vp-header-page :isShowBack="isShowBack" :title="title"></vp-header-page>
    <router-view class="content"></router-view>
  </div>
</template>

<script type="text/javascript">
import { vpHeaderPage } from '@/components';
export default {
  components: {
    vpHeaderPage
  },
  data() {
    return {
      mainHeight: '',
    }
  },
  computed: {
    title() {
      let t2 = this.$route.meta.title;
      return t2;
    },
    isShowBack() {
      return this.$route.meta.isShowBack;
    }
  },
  mounted() {
    // this.calcMainHeight();
  },
  created() {
    
  },
  methods: {
    calcMainHeight() { //计算主内容区域高度
      this.$nextTick(() => {
        let h1 = document.body.clientHeight; //可见区域
        let h2 = document.getElementsByClassName('header')[0].offsetHeight; //头部高度
        let headerShow = this.hideHeader;
        this.mainHeight = headerShow ? h1 - h2 : h1;
      })
    },
  },
  watch: {
  //  clientHeaderShow(val){
  //    this.calcMainHeight();
  //  }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  overflow-x: hidden;
  .content {
    padding-bottom: 1rem;
    position: relative;
    flex: 1 1 0;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
