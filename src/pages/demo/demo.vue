<template>
  <div class="demo">
    <ul>
      <li v-for="(item, index) in list"
          :key="index"
          @click="jumpRouter(item.router)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      list: [
        { name: 'navScroll', router: 'navScroll' },
        { name: 'circle', router: 'circle' },
        // { name: 'drawer', router: 'drawer' },
        { name: 'H5下拉刷新', router: 'minirefresh' },
        { name: 'url生成二维码', router: 'qrcode' },
        { name: '字母导航', router: 'listView' },
        { name: '树状结构', router: 'tree' },
        { name: 'timeline', router: 'timeline' },
        { name: 'swipeCell', router: 'swipeCell' },
        { name: 'form', router: 'formCommon' },
      ]
    }
  },
  methods: {
    jumpRouter (name) {
      this.$router.push({
        name
      })
    }

  },
  created () {

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.demo {
  ul {
    li {
      width: 3.2rem;
      text-align: center;
      height: 0.8rem;
      line-height: 0.8rem;
      color: @theme-color;
      background: #fff;
      border: 1px solid @theme-color;
      border-radius: 0.4rem;
      margin: 0.3rem auto;
    }
  }
}
</style>
