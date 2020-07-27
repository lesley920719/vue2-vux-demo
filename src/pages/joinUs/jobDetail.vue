<template>
  <transition name="jump-go">
    <div class="job_detail clear_margin">
      <div class="job_name">{{jobDetail.name}}</div>
      <div class="job_location">
        <i></i>
        <span>工作地点 : {{jobDetail.location}} &nbsp;&nbsp; 人数 : {{jobDetail.number}}</span>
      </div>
      <div class="job_info">
        <div class="job_responsibilities">
          <h3>岗位职责</h3>
          <div v-html="jobDetail.responsibilities"
               class="job_detail_info"></div>
        </div>
        <div class="job_require">
          <h3>岗位要求</h3>
          <div v-html="jobDetail.require"
               class="job_detail_info"></div>
        </div>
      </div>
      <div class="job_email">
        <a href="mailto:hr@lesley.cn">简历投递邮箱：hr@lesley.cn</a>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  components: {

  },
  name: 'jobDetail',
  data () {
    return {
      jobDetail: '', //岗位详情
    }
  },
  computed: {
    jobId () {
      return this.$route.query.id;
    },
  },
  created () {
    // 岗位详情
    this.$get('/link/jobDetail', { id: this.jobId })
      .then(res => {
        this.jobDetail = res.datainfo[this.jobId];  // id 、 name 、location 、number 、responsibilities 、require
      });
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/mixin.less";
@import "../../assets/less/theme.less";
.jump-go-enter-active {
  transition: all 0.5s ease;
}
// .jump-go-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
.jump-go-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  //   transform: translateX(10px);
  opacity: 0;
  height: 0;
}
.job_detail {
  .job_name {
    font-size: 18px;
    line-height: 0.6rem;
    margin-top: 0.6rem;
    color: @theme-black;
    font-weight: bold;
    letter-spacing: 0;
    text-align: center;
  }
  .job_location {
    width: 6.1rem;
    margin: 0.6rem auto;
    i {
      display: inline-block;
      width: 0.22rem;
      height: 0.22rem;
      background-size: 100%;
      .bg-img(introduce_loacation);
    }
  }
  .job_info {
    width: 6.1rem;
    margin: 0 auto;
    .job_require {
      margin-top: 0.6rem;
    }
    h3 {
      font-size: 14px;
      color: @theme-black;
      font-weight: bold;
      line-height: 0.5rem;
    }
    .job_detail_info {
      line-height: 0.4rem;
      font-size: 12px;
      color: @theme;
      letter-spacing: 0;
      text-align: justify;
      p {
        margin-top: 0.1rem;
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
  }
  .job_email {
    width: 6.58rem;
    margin: 1rem auto 0.2rem;
    a {
      display: block;
      text-align: center;
      width: 100%;
      height: 0.88rem;
      background-image: linear-gradient(-90deg, #f85761 0%, #e4364f 100%);
      box-shadow: 5px 10px 20px 3px rgba(255, 90, 118, 0.21);
      border-radius: 40px;
      font-size: 16px;
      color: #ffffff;
      line-height: 0.88rem;
    }
  }
}
</style>
