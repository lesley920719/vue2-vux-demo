<template>
  <div class="wrapper">
    <vp-header-page :isShowBack="isShowBack" :title="title"></vp-header-page>
    <!-- 结合router，缓存部分页面:使用$route.meta的keepAlive属性 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="content">
        <!-- 这里是会被缓存的视图组件 -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="content">
      <!-- 这里是会被缓存的视图组件 -->
    </router-view>
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
  // display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: #ffffff;
  overflow-x: hidden;
  .content {
    padding:0.88rem 0 1rem;
    // position: relative;
    // flex: 1 1 0;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
