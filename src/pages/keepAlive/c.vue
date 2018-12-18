<template>
  <div class="keep_alive_c">
    <h3>keep-alive C页面</h3>
    <button @click="$router.push({name:'keepAliveA'})">go to A</button>
  </div>
</template>
<script>
export default {
  name: 'keepAliveC',
  data () {
    return {
      
    }
  },
  methods: {

  },
  beforeRouteLeave(to, from, next) {
      // 设置下一个路由的 meta
      to.meta.keepAlive = false;  // C 跳转到 A 时，让 A 不缓存，即刷新
      to.meta.title = "keep-alive C - A"
      next();
  },
  created() {
    
  },
  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
button {outline:none;border:none; background: @theme-red;color:#fff;display: block;line-height: .4rem;padding:0 1rem;margin-bottom:.3rem;}
</style>
