<template>
  <li class="timeline-item">
    <div class="timeline-item-head">{{level}}</div>
    <div class="timeline-item-content">
      <slot>
        <div class="content-header">
          <h4>{{content.status}}</h4>
          <p>{{content.time}}</p>
        </div>
        <div class="checker-name">
          <p>{{content.name}}</p>
          <span class="icon"
                v-if="content.form"
                :class="{'fold': showDetail}"
                @click="showDetail = !showDetail"></span>
        </div>
        <div class="fold-content"
             v-show="content.form && showDetail">
          <label>审核结果：</label>
          <p class="margin-bottom">{{content.form && content.form.result == '1' ? '审核通过': '审核不通过'}}</p>
          <label>审核意见：</label>
          <p>{{content.form && content.form.remarks}}</p>
        </div>
      </slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'timelineItem',
  props: {
    level: {
      type: Number,
      default: 1
    },
    show: { // 是否展示详情
      type: Boolean,
      default: false
    },
    content: {  // slot内容
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      showDetail: this.show
    }
  },
  created () {

  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.timeline-item {
  position: relative;
  .timeline-item-head {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background: #b3d4ff;
    font-size: 0.46rem;
    color: #fff;
    font-weight: 500;
    border-radius: 0.4rem;
  }
  &:last-child {
    .timeline-item-head {
      background: #4092ff;
    }
    .timeline-item-content {
      border-left-color: transparent;
    }
  }
  .timeline-item-content {
    border-left: 1px dashed #a6a6a6;
    margin-left: 0.4rem;
    padding: 0 0 0.82rem 0.8rem;
    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        font-size: 0.32rem;
        color: #353637;
        font-weight: 600;
      }
      p {
        font-size: 0.24rem;
        color: #8d9095;
      }
    }
    .checker-name {
      margin-top: 0.18rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 0.28rem;
        color: #8d9095;
      }
      .icon {
        display: inline-block;
        width: 0.22rem;
        height: 0.22rem;
        background: url("~@/assets/images/default/fold@2x.png") right 0
          no-repeat;
        background-size: 0.22rem;
        &.fold {
          transform: rotate(180deg);
        }
      }
    }
    .fold-content {
      margin-top: 0.3rem;
      label {
        margin-bottom: 0.1rem;
        color: #8d9095;
        font-size: 0.28rem;
      }
      p {
        font-size: 0.28rem;
        font-weight: 500;
        color: #353637;
        line-height: 0.48rem;
        &.margin-bottom {
          margin-bottom: 0.3rem;
        }
      }
    }
  }
}
</style>