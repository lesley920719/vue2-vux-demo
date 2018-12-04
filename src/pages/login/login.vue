<template>
  <div class="login">
    <group>
      <x-input v-model="nickName" title="昵称" placeholder="请输入昵称" type="text" placeholder-align='right' text-align='right' :show-clear="false"></x-input>
      <x-input v-model="phone" title="手机号" placeholder="请输入手机号码" type="number" placeholder-align='right' text-align='right' :show-clear="false"></x-input>
      <x-input v-model="password" title="密码" placeholder="请输入8-16位数字字母混合的密码" type="password" :min='8' :max='16' placeholder-align='right' text-align='right' :show-clear="false"></x-input>
    </group>
    <group class="btn_group">
      <x-button @click.native="submintLogin()" type="primary" class="submit_login">登录</x-button>
    </group>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
// mapState 辅助函数帮助我们生成计算属性
import { mapState, mapMutations } from 'vuex';
import { PHONE } from '@/utils/RegEx'
export default {
  name: 'login',
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      nickName:'',
      phone: '',
      password:'',
    }
  },
  methods: {
    // 使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
    ...mapMutations(['setUserInfo']),

    submintLogin() {
      let _this = this
      const data = {
        nickName: _this.nickName,
        phone: _this.phone,
        password: _this.password
      }
      if(!_this.nickName){
        this.$vux.toast.text("请输入昵称")
        return
      }
      console.log(PHONE)
      if(!PHONE.test(_this.phone)){
        this.$vux.toast.text("请输入正确的手机号")
        return
      }
      if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,14}$/.test(_this.password)){
        this.$vux.toast.text("请输入8-16位数字字母混合的密码")
        return
      }

      this.$store.commit('setUserInfo', data);


      _this.$vux.alert.show({
        title: '提示',
        content: '登录成功！点击“确定”前往首页',
        onHide () {
          setTimeout(function(){
            _this.$router.push({path:'/'})
          },1000)
        }
      })
    },

  },
  created() {
    // this.$session.set('userInfo',{name:"lesley"});
    // this.$store.dispatch('setUserInfo', { 'userId': 45315443654 });
    // this.setUserInfo({ userName: 'lesley', userId: 134534 });
    // this.$store.commit('setUserInfo', { userName: 'lesley', userId: 1345345345 });
    // 2s 之后返回双倍的值

    console.log(123);
  },
  computed: mapState({
    userInfo: state=>state.common.userInfo,

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
<style lang='less'>
  .login {
    .btn_group {
      .weui-cells {
        &::before{
          border-top: 0
        }
        &::after{
          border-bottom: 0
        }
        .submit_login {
          margin-top: .5rem;
          width: 90%
        }
      }
      
    }
  }
</style>
