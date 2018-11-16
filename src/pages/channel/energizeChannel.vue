<template>
    <div class="energize">
      <div class="energize_banner"></div>
      <div class="line_title">
        <div>
          <p>一部手机就开店</p>
          <p>口袋里的营业厅</p>
        </div>
      </div>
      <div class="channel_flex flex flex_justify">
        <div class="channel_flex_box">
          <h3>手机营销</h3>
          <p>走出去更方便</p>
          <span class="operator_mapping_5"></span>
        </div>
        <div class="channel_flex_box">
          <h3>线上云店</h3>
          <p>互联网更好玩</p>
          <span class="operator_mapping_6"></span>
        </div>
      </div>
      <div class="channel_top_info">布局新零售 &nbsp; 赋能线下渠道 &nbsp; 服务更强</div>
      <div class="channel_top_info">招募合伙人 &nbsp; 推动渠道开放 &nbsp; 触点更多</div>
      <div class="energize_handling">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>五大核心竞争力</span>
        </div>
        <p class="channel_sec_title">主流业务手机端全承载，业务受理更快捷</p>
        <div class="energize_handling_flex flex flex_justify">
          <ul>
            <li>业务更全面</li>
            <li>开户</li>
            <li>宽带</li>
            <li>套餐</li>
            <li>流量</li>
            <li class="li_special">60S业务</li>
            <li>快速受理</li>
          </ul>
          <ul>
            <li>使用更方便</li>
            <li>手机</li>
            <li>智能POS</li>
            <li>小蓝牙</li>
            <li>外设</li>
            <li class="li_special">外出营销</li>
            <li>更方便</li>
          </ul>
          <ul>
            <li>营销更多样</li>
            <li>DIY海报</li>
            <li>专属二维码</li>
            <li>社交分享</li>
            <li></li>
            <li class="li_special">互联网营销</li>
            <li>新玩法</li>
          </ul>
        </div>
      </div>
      <div class="energize_customer">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>随身客户服务</span>
        </div>
        <p class="channel_sec_title">基于通信能开的虚拟呼叫解决方案</p>
        <div class="channel_chart_1"></div>
        <div class="channel_chart_2"></div>
      </div>
      <div class="energize_intelligence">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>随身智慧服务</span>
        </div>
        <p class="channel_sec_title">大数据赋能线下渠道 &nbsp; 营销更精准 &nbsp; 服务更贴心</p>
        <div class="channel_flex flex flex_justify">
          <div class="channel_flex_box">
            <h3>大数据精确推荐</h3>
            <p>用户画像 </p>
            <p>营销推荐</p>
            <p>常客熟客智慧管理</p>
            <span class="operator_service_1"></span>
          </div>
          <div class="channel_flex_box">
            <h3>大数据摆摊助手</h3>
            <p> 目标区域</p>
            <p> 客群分析</p>
            <p> 外出营销预热</p>
            <span class="operator_service_2"></span>
          </div>
        </div>
      </div>
      <div class="energize_entrance">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>打造一线营销统一入口</span>
        </div>
        <p class="channel_sec_title">服务线下渠道新零售布局</p>
        <div class="channel_chart_3"></div>
      </div>
    </div>
</template>
<script>
export default {
  components: {

  },
  name: 'energizeChannel',
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
.energize {
  .page_icon_title {
    margin-bottom: .1rem;
    margin-top: .8rem;
  }
  .energize_banner {
    width:100%;
    height: 2.9rem;
    .bg-img(operator_banner_3);
    background-size: 100%;
  }
  .line_title {
    margin-top: .5rem;
    text-align: center;
      div {
        .line-title( -1rem, .38rem, 1px);
      }
  }
  p.channel_sec_title {
    color: #585858;
    text-align: center;
    line-height: 22px;
  }
  .channel_flex {
    .channel-flex();
    .operator_mapping_5 { .bg-img(operator_mapping_5) }
    .operator_mapping_6 { .bg-img(operator_mapping_6) }
    .operator_service_1 { .bg-img(operator_service_1) }
    .operator_service_2 { .bg-img(operator_service_2) }
  }
  .energize_handling {
    width: 6.1rem;
    margin: .6rem auto;
    .page_icon_title {
      margin-bottom: .1rem;
      margin-top: .5rem;
    }
    .energize_handling_flex {
      margin-top: .5rem;
      ul {
        li {
          color: @theme-secondary;
          text-align: center;
          height: .42rem;
          line-height: .42rem;
          &:first-child{
            color: @theme-black;
            height: .56rem;
            line-height: .56rem;
          }
          &.li_special{
            margin-top: .3rem;
          }
        }
      }
    }
  }
  .energize_customer {
    .channel_chart_1 {
      margin: .3rem auto;
      width: 5.22rem;
      height: 4.8rem;
      .bg-img(channel_chart_1);
      background-size: 100%;
    }
    .channel_chart_2 {
      margin: 0 auto;
      width: 6.1rem;
      height: 3.42rem;
      .bg-img(channel_chart_2);
      background-size: 100%;
    }
  }
  .energize_entrance {
    .channel_chart_3 {
      margin: .3rem auto;
      width: 6.12rem;
      height: 5.16rem;
      .bg-img(channel_chart_3);
      background-size: 100%;
    }
  }
}
</style>
