<template>
  <div class="drawer">
    <!-- 球类 -->
    <div class="ball_btn">
      <button @click="isBallType = true">{{likeBall}}</button>
      <i class="icon-arrow"></i>
    </div>
    <Drawer v-model="isBallType">
      <ul class="drawer-list">
        <li class="item"
            v-for="(item, index) in ballList"
            :key="index"
            @click="chooseBallType(item.name, item.code)">
          {{ item.name }}
        </li>
        <li class="item"
            @click="isBallType = false">
          取消
        </li>
      </ul>
    </Drawer>
  </div>
</template>

<script>
export default {
  name: 'drawer',
  data () {
    return {
      ballList: [
        { name: '足球', code: 'soccer' },
        { name: '篮球', code: 'basketball' },
        { name: '排球', code: 'volleyball' },
        { name: '乒乓球', code: ' tableTennis' },
        { name: '羽毛球', code: 'badminton' },
      ],
      likeBall: "请选择你最爱的球类运动",
      isBallType: false,   // 显示弹窗
    }
  },
  methods: {
    chooseBallType (name, code) {
      this.likeBall = name
      this.isBallType = false
    }
  },
  created () {

  },
  computed: {


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
@import "~@/assets/less/mixin.less";
.drawer {
  .ball_btn {
    position: relative;
    width: 100%;
    height: 0.98rem;
    line-height: 0.98rem;
    border-bottom: 1px solid #dfdfdf;
    button {
      border: 0;
      background-color: transparent;
      display: block;
      width: 100%;
      height: 100%;
      color: #c2c2c2;
      font-size: 0.28rem;
      text-align: left;
    }
    /* 右箭头 */
    .icon-arrow {
      position: absolute;
      right: 4%;
      top: 45%;
      width: 0.2rem;
      height: 0.2rem;
      border: solid #999;
      border-width: 1px 1px 0 0;
      transform: rotate(45deg);
    }
  }
  .drawer-list {
    width: 100%;
    background-color: #fff;

    .item {
      width: 100%;
      height: 0.86rem;
      border-bottom: 1px solid #dfdfdf;

      text-align: center;
      line-height: 0.86rem;

      &:last-child {
        background-color: #ededed;
      }
    }
  }
}
</style>
