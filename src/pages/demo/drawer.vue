<template>
  <div class="drawer">
    
  </div>
</template>

<script>
import {  } from '@/components';
export default {
  name: 'drawer',
  components: {
    
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
.drawer {

}
</style>
