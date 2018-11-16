<template>
    <div class="digital">
      <div class="digital_banner"></div>
      <div class="line_title">
        <div>
          <p>一个业务多个渠道</p>
          <p>触手可及的移动管家</p>
        </div>
      </div>
      <div class="channel_flex flex flex_justify">
        <div class="channel_flex_box">
          <h3>渠道融合</h3>
          <p>主流渠道全覆盖</p>
          <span class="operator_mapping_3"></span>
        </div>
        <div class="channel_flex_box">
          <h3>统一平台</h3>
          <p>线上线下无缝衔接</p>
          <span class="operator_mapping_4"></span>
        </div>
      </div>
      <div class="channel_top_info">入口+平台+连接 综合能力打造</div>
      <div class="channel_top_info">服务+体验 双重用户需求满足</div>
      <div class="digital_entrance">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>入口整合</span>
        </div>
        <div class="digital_entrance_box flex">
          <h3>电信服务</h3>
          <div>开卡入网 、宽带新装、充值查询、数字业务、充值查询 、流量积分</div>
        </div>
        <div class="digital_entrance_box flex">
          <h3>生活服务</h3>
          <div>查水电气、交通违章、医疗挂号、公交查询、团购订票、社保教育</div>
        </div>
        <div class="digital_entrance_box flex">
          <h3>电商服务</h3>
          <div>手机数码、数字产品、智能设备、异业产品</div>
        </div>
        <div class="digital_entrance_box flex">
          <h3 class="box_special">融合各服务入口  提供一站式用户体验</h3>
        </div>
      </div>
      <div class="digital_customer">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>渠道融合 统一平台</span>
        </div>
        <div class="electr_chart_1"></div>
      </div>
      <div class="digital_customer">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>科技赋能 T2B2C模式</span>
        </div>
        <div class="electr_chart_2"></div>
      </div>
      <div class="digital_core">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>两大核心能力</span>
        </div>
        <div class="digital_core_content">
          <h3>大数据平台搭建</h3>
          <p>强大云计算能力 实现千人千面个化性运营</p>
        </div>
        <div class="electr_chart_3"></div>
        <div class="digital_core_content">
          <h3>渠道融合营销</h3>
          <p>完善的营销中心 多渠道融合运营缩短转化路径</p>
        </div>
        <div class="electr_chart_4"></div>
      </div>
    </div>
</template>
<script>
export default {
  components: {

  },
  name: 'digitalChannel',
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  created() {
    
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
.content {padding-bottom: 0!important}
.digital {
  .page_icon_title {
    margin-bottom: .5rem;
    margin-top: .8rem;
  }
  .digital_banner {
    width:100%;
    height: 2.9rem;
    .bg-img(operator_banner_2);
    background-size: 100%;
  }
  .line_title {
    margin-top: .5rem;
    text-align: center;
      div {
        .line-title( -1rem, .38rem, 1px);
      }
  }
  .channel_flex {
    .channel-flex();
    .operator_mapping_3 { .bg-img(operator_mapping_3) }
    .operator_mapping_4 { .bg-img(operator_mapping_4) }
  }
  .digital_entrance {
    .digital_entrance_box {
      background: #FFFFFF;
      border: 1px solid #DEDEDE;
      width: 6.6rem;
      margin: .15rem auto;
      padding: .2rem;
      h3 {
        font-size: 14px;
        color: @theme-black;
        min-width: 1.3rem;
        &.box_special{
          line-height: .5rem;
          width: 100%;
          text-align: center;
        }
      }
      div {
        color: @theme-secondary;
        line-height: .4rem;
      }
    }
  }
  .digital_customer {
    .electr_chart_1 {
      margin: 0 auto;
      width: 6.11rem;
      height: 4.41rem;
      .bg-img(electr_chart_1);
      background-size: 100%;
    }
    .electr_chart_2 {
      margin: 0 auto;
      width: 6.11rem;
      height: 5.98rem;
      .bg-img(electr_chart_2);
      background-size: 100%;
    }
  }
  .digital_core {
    margin-bottom: .5rem;
    .digital_core_content {
      width: 6.6rem;
      padding-left: .4rem;
      margin: .5rem auto 0.3rem;
      h3 {
        position: relative;
        color: @theme-black;
        font-size: 14px;
        line-height: .5rem;
        &:before{
          content: "";
          position: absolute;
          top: 0.18rem;
          left: -0.25rem;
          display: block;
          border-radius: 50%;
          width: 6px;
          height: 6px;
          background: #F94C50;
        }
      }
      p {
        color:@theme-secondary;
        line-height: .4rem;
      }
    }
    .electr_chart_3 {
      margin: 0 auto;
      width: 6.1rem;
      height: 5.46rem;
      .bg-img(electr_chart_3);
      background-size: 100%;
    }
    .electr_chart_4 {
      margin: 0 auto;
      width: 6.1rem;
      height: 8.53rem;
      .bg-img(electr_chart_4);
      background-size: 100%;
    }
  }
}
</style>
