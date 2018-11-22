<template>
  <div class="navScroll">
    <!-- @nav-scroll触发子组件emit事件传值 -->
    <vp-nav-scroll :tabList="tabList" :tabChosen="tabChosen" @nav-scroll="navScrollEvent"></vp-nav-scroll>
    <div>{{tabList[tabChosen].name}}</div>
    <div>{{code}}</div>
  </div>
</template>

<script>
import { vpNavScroll } from '@/components';
export default {
  name: 'navScroll',
  components: {
      vpNavScroll,
  },
  data () {
    return {
      tabList: [
        {name:'足球',code:'soccer'},
        {name:'篮球',code:'basketball'},
        {name:'排球',code:'volleyball'},
        {name:'乒乓球',code:' tableTennis'},
        {name:'羽毛球',code:'badminton'},
      ],
      tabChosen: 1,
      code:'basketball',
    }
  },
  methods: {
    navScrollEvent(data){   // 子组件传过来的值：data
        this.tabChosen = data.navIndex
        this.code = data.navCode
    }

  },
  created() {
    
  },
  computed: {
    

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
.navScroll {

}
</style>
