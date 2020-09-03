<template>
  <div class="bottom">
    <ul>
      <li v-for="(item,index) in list"
          :key="index">
        <i :class="['icon',item.icon,{active: index === isTab}]"
           @click="tabHandle(index ,item)"></i>
        <span :class="{active: index === isTab}">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script type = 'text/javascript'>
import { Badge } from "vux";
export default {
  props: ['tabIndex'],
  data () {
    return {
      isTab: 0,
      list: [
        { name: '首页', icon: 'home', path: '/home' },
        { name: '案例', icon: 'cases', path: '/cases' },
        { name: '关于我们', icon: 'aboutUs', path: '/aboutUs' },
      ],
    }
  },
  methods: {
    tabHandle (index, item) {
      this.isTab = index
      this.$router.push({ path: item.path })
    }
  },
  created () {
    this.isTab = this.tabIndex;
  }
}
</script>
<style lang ="less" scoped>
@import '~@/assets/less/mixin.less';
.bottom {
    position: fixed;
    height: 1rem;
    width: 100%;
    background: #fff;
    bottom: 0;
    left: 0;
    /* border-top: 0.5px solid #e9e9e9; */
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        li {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon {
                display: block;
                width: .45rem;
                height: .45rem;
                font-style: normal;
            }
            .icon.home {
                .bg-img(footbar_home_empty);
                background-size: 100%;
            }
            .icon.home.active {
                .bg-img(footbar_home_press);
                background-size: 100%;
            }
            .icon.cases {
                .bg-img(footbar_work_nor);
                background-size: 100%;
            }
            .icon.cases.active {
                .bg-img(footbar_work_press);
                background-size: 100%;
            }
            .icon.aboutUs {
                .bg-img(footbar_my_nor);
                background-size: 100%;
                
            }
            .icon.aboutUs.active {
                .bg-img(footbar_my_press);
                background-size: 100%;
            }
            span {
                color: @theme-secondary;
                font-size:12px
            }
            span.active{color:@theme-red}
        }
    }
}

</style>
