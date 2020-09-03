<template>
  <div class="keep_alive_a">
    <h1>需求：</h1>
    <ul ref="ul">
      <li>默认是A页面缓存</li>
      <li>B页面跳转到A，A页面需要缓存</li>
      <li>C页面跳转到A，A页面不需要被缓存</li>
    </ul>
    <button @click="$router.push({name:'keepAliveB'})">go to B</button>
    <button @click="$router.push({name:'keepAliveC'})">go to C</button>
    <input type="text"
           v-model="inputData">
    <div class="tip">
      <h3>keep-alive生命周期钩子函数：activated、deactivated</h3>
      <p>使用keep-alive会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在activated阶段获取数据，承担原来created钩子中获取数据的任务。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'keepAliveA',
  data () {
    return {
      inputData: '',
    }
  },
  methods: {

  },
  created () {

  },
  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
@import "~@/assets/less/mixin.less";
.keep_alive_a {
  h1 {
    font-size: 16px;
    color: #333;
  }
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
  input {
    line-height: 0.4rem;
    color: #000;
    font-size: 14px;
  }
  ul {
    margin-bottom: 0.5rem;
    li {
      padding-left: 10px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        background: #000;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        transform: translateY(-3px);
      }
    }
  }
  .tip {
    margin-top: 0.5rem;
    h3 {
      font-size: 16px;
      color: #000;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      color: #000;
    }
  }
}
</style>
