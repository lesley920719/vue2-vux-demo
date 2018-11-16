<template>
    <div class="cases">
      <div class="case_banner clear_margin">
        <div class="line_title">
          <div>
            <p>运营商业务全景</p>
          </div>
        </div>
        <div class="banner_icon"></div>
        <div class="banner_content">
          <ul class="clear_margin">
            <li class="clear_margin">
              <div class="left_circle"></div>
              <p>营销</p>
            </li>
            <li>手机营业厅</li>
            <li>微厅/小程序</li>
            <li>千店万码</li>
            <li>H5营业厅</li>
            <li>…...</li>
          </ul>
          <ul class="clear_margin">
            <li class="clear_margin">
              <div class="left_circle"></div>
              <p>运营</p>
            </li>
            <li>用户运营</li>
            <li>权益运营</li>
            <li>社交分享</li>
            <li>社会合伙人</li>
            <li>…...</li>
          </ul>
          <ul class="clear_margin">
            <li class="clear_margin">
              <div class="left_circle"></div>
              <p>数据</p>
            </li>
            <li>千人前面</li>
            <li>业务推荐</li>
            <li>摆摊助手</li>
            <li>摇一摇</li>
            <li>…...</li>
          </ul>
        </div>
      </div>
      <div class="case_resolve">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>四大解決方案</span>
        </div>
        <flexbox wrap="wrap" class="clear_margin">
          <flexbox-item :span=" 1/2.2" @click.native="$router.push({path:'/channel/energizeChannel'})">
            <p class="resolve_icon_1"></p>
            <div>
              <span>渠道赋能</span>
              <i></i>
            </div>
          </flexbox-item>
          <flexbox-item :span=" 1/2.2" @click.native="$router.push({path:'/channel/digitalChannel'})">
            <p class="resolve_icon_2"></p>
            <div>
              <span>电子渠道</span>
              <i></i>
            </div>
          </flexbox-item>
          <flexbox-item :span=" 1/2.2" @click.native="$router.push({path:'/channel/eCommerce'})">
            <p class="resolve_icon_3"></p>
            <div>
              <span>生活电商</span>
              <i></i>
            </div>
          </flexbox-item>
          <flexbox-item :span=" 1/2.2" @click.native="clickJump">
            <p class="resolve_icon_4"></p>
            <div>
              <span>存量精销</span>
              <i></i>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="case_intro">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>案例介绍</span>
        </div>
        <vp-case-list :caseList = 'cases' v-if="isAyscGet"></vp-case-list>
      </div>
      <vp-bottom-tab :tabIndex = '1'></vp-bottom-tab>
    </div>
</template>
<script>
import { vpBottomTab, vpCaseList } from "@/components";
export default {
  components: {
    vpBottomTab,
    vpCaseList
  },
  name: 'cases',
  data () {
    return {
      cases: '',  // 案例
      isAyscGet: false, // 是否获取到数据
    }
  },
  created() {
    // let 
    this.$get('/news/cases',{})
      .then(res => {
        this.cases = res.datainfo;
        this.isAyscGet = true;
    });
    console.log("cases")
  },
  methods: {
    clickJump() {
      location.href='https://pas.vpclub.cn/static/bigDataPamphlet/case.html';
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
.cases{
  .case_banner{
    .line_title{
      text-align: center;
      div {
        .line-title( -0.6rem );
      }
    }
    .bg-img(case_background);
    width: 100%;
    height: 9.43rem;
    background-size:100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .banner_icon{
      .bg-img(case_image_panorama);
      width: 3.32rem;
      height: 3.22rem;
      background-size:100%;
      margin-top:.2rem;
    }
    .banner_content {
      width:6.6rem;
      display: flex;
      justify-content: space-between;
      ul {
        margin-top: .4rem;
        width: 2.03rem;
        height: 3.12rem;
        // opacity: 0.1;
        // background: #C5C5C5;
        background: rgba(197, 197, 197, 0.1);
        border-radius: 8px;
        li {
          &:first-child{
            margin-left:.0;
            text-align: center;
            position: relative;
            margin: .2rem 0;
            font-size:14px;
            .left_circle {
              position: absolute;
              top: .16rem;
              left: 50%;
              margin-left: -25px;
            }
          }
          margin-left:.5rem;
          text-align: left;
          opacity: 1;
          line-height: .42rem;
        }
      }
    }
  }
  .case_resolve {
    width: 6.6rem;
    margin: 0 auto;
    .vux-flexbox-item {
      margin-top: .3rem!important;
      margin-left: .5rem!important;
      &:first-child{
        // margin-top: .3rem!important;
        margin-left: 0!important;
      }
      &:nth-child(3){
        margin-left: 0!important;
      }
      p {
          display: block;
          width: 3rem;
          height: 2.26rem;
          margin-bottom:.1rem;
          background-size: 100%;
      }
      .resolve_icon_1{
        .bg-img(case_image_1)
      }
      .resolve_icon_2{
        .bg-img(case_image_2)
      }
      .resolve_icon_3{
        .bg-img(case_image_3)
      }
      .resolve_icon_4{
        .bg-img(case_image_4)
      }
      div {
          font-size: 12px;
          letter-spacing: 0;
          color: @theme-black;
          line-height: .28rem;
          height: .28rem;
          display: flex;
          justify-content: center;
          i {
            display: block;
            height: 0.28rem;
            width: 0.28rem;
            margin-left: .1rem;
            .bg-img(case_enter);
            background-size: 100%;
          }
      }
    }
  }
}
</style>
