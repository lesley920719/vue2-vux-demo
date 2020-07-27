<template>
  <div class="demo">
    <h3>{{demo}}</h3>

  </div>
</template>

<script>
// mapState 辅助函数帮助我们生成计算属性
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'demo',
  data () {
    return {
      demo: "this is a demo page"
    }
  },
  methods: {
    // 使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
    ...mapMutations(['setUserInfo']),

  },
  created () {
    console.log(this.$store.state)
    console.log(this.userInfo)
    // this.$session.set('userInfo',{name:"lesley"});
    // this.$store.dispatch('setUserInfo', { 'userId': 45315443654 });
    // this.setUserInfo({ userName: 'lesley', userId: 134534 });
    // this.$store.commit('setUserInfo', { userName: 'lesley', userId: 1345345345 });
    // 2s 之后返回双倍的值
    function doubleAfter2seconds (num) {
      // return new Promise((resolve, reject) => {
      // setTimeout(() => {
      return { name: "await func" }
      // }, 2000);
      // } )
    }
    async function timeout () {
      let result = await doubleAfter2seconds(30);
      // console.log(result);
      if (result.name) {
        console.log(result.name);
      } else {
        console.log(result);
      }
    }
    timeout();
  },
  computed: mapState({
    userInfo: state => state.common.userInfo,

    // 传字符串参数 'userInfo' 等同于 `state => state.userInfo`
    // userInfoAlias: 'userInfo',

  }),
  // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  // computed: mapState([
  //    // 映射 this.userInfo 为 store.state.userInfo
  //   'userInfo'
  // ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  font-size: 18px;
  font-weight: 400;
}
button {
  width: 0.5rem;
}
ul {
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px;
  height: 10rem;
  overflow-y: scroll;
  align-content: flex-start;
  align-items: flex-start;
  li {
    width: 45%;
    font-size: 14px;
    margin-bottom: 20px;
    img {
      width: 100%;
      margin-top: 15px;
    }
  }
}
</style>
