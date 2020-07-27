<template>
  <div class="join_us">
    <div class="join_info clear_margin">
      <p>我们的服务领域涵盖电信运营商、金融（银行、保险、证券）、航空公司、大型零售集团、大型企业集团、政府智慧旅游以及农特精准扶贫电商。</p>
    </div>
    <ul class="join_jobs clear_margin">
      <li v-for="(item, index) in jobs"
          :key="index"
          class="flex flex_align_center flex_justify">
        <div class="join_jobs_left">
          <div>{{item.name}}</div>
          <p>
            <i></i>
            <span>工作地点 : {{item.location}} &nbsp; 人数 : {{item.number}}</span>
          </p>
        </div>
        <div class="join_jobs_right"
             @click="$router.push({path:'/joinUs/jobDetail',query:{id:item.id}})">查看详情</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {

  },
  name: 'joinUs',
  data () {
    return {
      jobs: '', // 工作岗位
    }
  },
  computed: {

  },
  created () {
    // 渠道
    this.$get('/link/jobs', {})
      .then(res => {
        this.jobs = res.datainfo; //{ id: '105281621947653241', name: "大数据与人工智能产品部销售总监", location: "深圳", number: 1 }
      });
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/mixin.less";
@import "../../assets/less/theme.less";
.join_us {
  .join_info {
    width: 6.4rem;
    margin: 0.3rem auto;
    p {
      margin-top: 0.3rem;
      line-height: 0.5rem;
      font-size: 12px;
      color: @theme;
      text-align: justify;
      position: relative;
      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0.2rem;
        left: -0.3rem;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        background: #f94c50;
      }
    }
  }
  .join_jobs {
    width: 6.4rem;
    margin: 0.3rem auto;
    li {
      margin: 0.4rem 0;
      .join_jobs_left {
        div {
          font-size: 14px;
          color: @theme-black;
          line-height: 0.66rem;
          font-weight: bold;
        }
        p {
          i {
            display: inline-block;
            width: 0.22rem;
            height: 0.22rem;
            background-size: 100%;
            .bg-img(introduce_loacation);
          }
        }
      }
      .join_jobs_right {
        padding: 0.05rem 0.3rem;
        color: @theme-secondary;
        border: 1px solid #6d6d6d;
        border-radius: 25px;
        box-sizing: content-box;
      }
    }
  }
}
</style>
