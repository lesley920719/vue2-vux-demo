<template>
  <div class="app">
    <circle-loading :progress="progress"
                    :total="36"></circle-loading>
  </div>
</template>
<script>
import circleLoading from '@/components/circle-loading';
export default {
  data () {
    return {
      progress: 0,
    }
  },
  components: { circleLoading },
  methods: {
    loadData () {
      let timer = setInterval(() => {
        let random = Math.random() * 10;
        if (this.progress + random >= 100) {
          this.progress = 100
          clearInterval(timer)
        } else this.progress += random
      }, 200);
    },
  },
  created () {
    this.loadData()
  }
}
</script>
<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
  background: #f5f7f9;
}
</style>
