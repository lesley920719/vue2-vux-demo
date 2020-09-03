<template>
  <div class="keep_alive_b">
    <h3>keep-alive B页面</h3>
    <button @click="$router.push({name:'keepAliveA'})">go to A</button>
  </div>
</template>
<script>
export default {
  name: 'keepAliveB',
  data () {
    return {

    }
  },
  methods: {

  },
  beforeRouteLeave (to, from, next) {
    // 设置下一个路由的 meta
    to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
    to.meta.title = "keep-alive B - A"
    next();
  },
  created () {

  },
  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
button {
  outline: none;
  border: none;
  background: @theme-red;
  color: #fff;
  display: block;
  line-height: 0.4rem;
  padding: 0 1rem;
  margin-bottom: 0.3rem;
}
</style>
