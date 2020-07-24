<!--  圆环加载进度组件 -->
<template>
  <div class="circle-loading"
       :style="{'width': (radius*2 + barHeight*2) + 'rem', 'height': (radius*2 + barHeight*2) + 'rem'}">
    <div class="circle"
         :style="{'width': radius*2 + 'rem', 'height': radius*2 + 'rem', 'line-height': radius*2 + 'rem'}">{{progressValue}}%</div>
    <div class="item"
         v-for="(item, index) in array"
         :style="style(index)"
         :class="{'active': index <= Math.floor(total * progressValue / 100)}"></div>
  </div>
</template>
<script type = 'text/javascript'>
export default {
  name: 'circleLoading',
  props: {
    total: {    // 条形总数
      type: Number,
      default: 24
    },
    barWidth: { // 条形宽度
      type: Number,
      default: 0.1,
    },
    barHeight: { // 条形高度
      type: Number,
      default: 0.3,
    },
    radius: {  // 圆环半径
      type: Number,
      default: 1.2
    },
    progress: {  // 进度，表示百分之几十
      type: Number,
      default: 0
    },
  },
  computed: {
    array () {
      return Array.from(new Array(this.total)).map((item, index) => index)
    }
  },
  created () {

  },
  watch: {
    progress (val) {
      this.progressValue = Math.floor(val);
    },
  },
  data () {
    return {
      progressValue: Math.floor(this.progress),
    };
  },
  methods: {
    style (index) {
      // 圆心相对定位位置
      let circleLeft = this.radius + this.barHeight - this.barWidth / 2,
        circleTop = this.radius;
      // 角度及偏移位置
      let deg = index == 0 ? 0 : index / this.total * 360,
        top,
        left;
      /* js圆形轨迹公式
      * 假设一个圆的圆心坐标是(a,b)，半径为r，圆上某个点的的弧度为 radian
      * 则其X坐标为 a + Math.sin(radian * 2 * Math.PI / 360) * radius ；Y坐标为 b + Math.cos(radian * 2 * Math.PI / 360) * radius
      */
      // 条形相对圆心位置
      top = circleTop - Math.cos(deg * 2 * Math.PI / 360) * this.radius
      left = circleLeft + Math.sin(deg * 2 * Math.PI / 360) * this.radius
      return { 'top': top + 'rem', 'left': left + 'rem', 'transform': 'rotate(' + deg + 'deg)', 'width': this.barWidth + 'rem', 'height': this.barHeight + 'rem', 'border-radius': this.barHeight / 2 + 'rem' }
    }
  }
};
</script>
<style lang = 'less' scoped>
.circle-loading {
  position: relative;
  /* width: 3rem;
  height: 3rem; */
  background: #fff;
  margin: 0 auto;
  .circle {
    position: absolute;
    /* width: 2.4rem;
    height: 2.4rem;
    line-height: 2.4rem; */
    border-radius: 50%;
    background: #f5f7f9;
    text-align: center;
    font-size: 0.48rem;
    color: #666;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .item {
    position: absolute;
    /* width: 0.1rem;
    height: 0.3rem;
    border-radius: 0.05rem; */
    background: #ccc;
    transform-origin: center bottom;
    &.active {
      background: #4092ff;
    }
  }
}
</style>