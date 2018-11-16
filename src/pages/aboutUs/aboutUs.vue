<template>
    <div class="about_us">
      <div class="us_banner"></div>
      <div class="line_title">
        <div>
          <p>全国项目分布</p>
        </div>
      </div>
      <div class="us_map"></div>
      <div class="us_channel clear_margin">
        <div class="us_title">电子渠道</div>
        <flexbox wrap="wrap" class="clear_margin">
          <flexbox-item :span="scale" v-for="(item, index) in digitalChannel" :key="index">
            <img :src="item.imgUrl" alt="">
            <span>{{item.local}}</span>
            <span>{{item.proName}}</span>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="us_channel clear_margin">
        <div class="us_title">渠道O2O</div>
        <flexbox wrap="wrap" class="clear_margin">
          <flexbox-item :span="scale" v-for="(item, index) in O2OChannel" :key="index">
            <img :src="item.imgUrl" alt="">
            <span>{{item.local}}</span>
            <span>{{item.proName}}</span>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="us_channel clear_margin">
        <div class="us_title">电商平台</div>
        <flexbox wrap="wrap" class="clear_margin">
          <flexbox-item :span="scale" v-for="(item, index) in eCommerce" :key="index">
            <img :src="item.imgUrl" alt="">
            <span>{{item.local}}</span>
            <span>{{item.proName}}</span>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="us_content">
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>核心业务</span>
        </div>
        <p>包含大数据平台建设、数据分析、数据挖掘及建模分析、AI行业精准营销等，以移动互联网、云计算、大数据等现代信息技术为关键，通过挖掘和运用平台大数据，促进各行各业的转型升级及营销效率提升。</p>
        <div class="us_core_img"></div>
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>企业团队</span>
        </div>
        <p>公司总部位于高科技公司云集的深圳南山科技园，目前有员工530人，其中研发团队有300多人，在深圳南山科技园和武汉光谷、西安软件新城均设有研发中心，在18个省份设有当地市场及运营服务中心。</p>
        <div class="us_team_img">
          <p class="us_team_img_left"></p>
          <p class="us_team_img_right"></p>
        </div>
        <div class="page_icon_title clear_margin">
          <i></i>
          <span>运营商服务解决方案</span>
        </div>
        <p>队核心成员由中兴、华为、腾讯、中国电信、中国联通、中国移动等业内知名企业人员组成，参与过流用户流失预警、用户信用评估项目，在大数据精准营销方面有丰富的经验。</p>
        <div class="us_resolve_img">
          <p class="us_resolve_img01"></p>
          <p class="us_resolve_img02"></p>
          <p class="us_resolve_img03"></p>
          <p class="us_resolve_img04"></p>
          <p class="us_resolve_img05"></p>
          <p class="us_resolve_img06"></p>
        </div>
        <div class="us_content_detail clear_margin">
          <span class="left_circle"></span>
          <div>
            <h3>互联网营销</h3>
            <p>增加触点，随时随地办业务，让用户拿出手机就能办，让渠道一部手机就开店。</p>
          </div>
        </div>
        <div class="us_content_detail clear_margin">
          <span class="left_circle"></span>
          <div>
            <h3>大数据精销</h3>
            <p>利用大数据手段精准推荐，利用互联网手段完成营销。</p>
          </div>
        </div>
        <div class="us_content_detail clear_margin">
          <span class="left_circle"></span>
          <div>
            <h3>融合运营</h3>
            <p>结合线下实体渠道优势和线上用户流量优势，线下为线上引流促活，线上为线下引客入店。</p>
          </div>
        </div>
      </div>
      <div class="us_contact">
        <div class="contact_logo"></div>
        <div class="contact_flex clear_margin">
          <div class="contact_flex_left contact_phone"></div>
          <div class="contact_flex_right">
            <p>电话：<a href="tel:0755-86312313">0755-86312313</a> (前台)</p>
            <p>电话：<a href="tel:0755-86312316">0755-86312316</a> (人力资源)</p>
          </div>
        </div>
        <div class="contact_flex clear_margin">
          <div class="contact_flex_left contact_email"></div>
          <div class="contact_flex_right">
            <p>邮箱：<a href="mailto:hr@vpclub.cn">hr@vpclub.cn</a></p>
          </div>
        </div>
        <div class="contact_flex clear_margin">
          <div class="contact_flex_left contact_website"></div>
          <div class="contact_flex_right">
            <p>网址：<a href="http://www.vphonor.com">www.vphonor.com</a></p>
          </div>
        </div>
      </div>
      <vp-bottom-tab :tabIndex = '2'></vp-bottom-tab>
    </div>
</template>
<script>
import { vpBottomTab } from "@/components";
export default {
  components: {
    vpBottomTab
  },
  name: 'aboutUs',
  data () {
    return {
      digitalChannel: '', //电子渠道
      O2OChannel: '', //O2O渠道
      eCommerce: '', //电商平台
      cases: '',  //案例
    }
  },
  computed: {
    scale: function() {
      let width = document.body.clientWidth;
      if(width < 375){
        return 1/4.4
      }else{
        return 1/5.4
      }
    }
  },
  created() {
    // 渠道
    this.$get('/news/operators',{})
      .then(res => {
        this.digitalChannel = res.datainfo.digitalChannel;  //电子渠道
        this.O2OChannel = res.datainfo.O2OChannel; //O2O渠道
        this.eCommerce = res.datainfo.eCommerce; //电商平台
    });
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
.about_us {
  .us_banner {
    height: 4.55rem;
    width:100%;
    .bg-img(us_background);
    background-size:100%; 
  }
  .line_title{
    margin-top: .8rem;
    text-align: center;
    div {
      .line-title( -0.6rem );
    }
  }
  .us_map {
    margin: .3rem auto;
    height: 5.68rem;
    width: 6.52rem;
    .bg-img(us_map);
    background-size:100%; 
  }
  .us_channel{
    width:6.8rem;
    margin: auto;
    .us_title{
      font-size:14px;
      color: @theme-black;
      line-height:26px;
      margin-top:.4rem;
    }
    .vux-flexbox-item {
      margin-top: .3rem!important;
      margin-left: .08rem!important;
      &:first-child{
        margin-left: .08rem!important;
        margin-top: .3rem!important;
      }
      img {
          display: block;
          width: .7rem;
          height: .7rem;
          margin-bottom:.1rem;
      }
      span {
          font-size: 12px;
          display: block;
          letter-spacing: 0;
          color: @theme-secondary;
      }
    }
  }
  .us_content{
    width:6.1rem;
    margin: auto;
    .page_icon_title{
      margin-top: .8rem;
    }
    p {
      color: @theme;
      line-height: 21px;
    }
    .us_core_img{
      margin-top: .3rem;
      .bg-img(us_image_1);
      width:6.1rem;
      height: 2.71rem;
      background-size:100%; 
    }
    .us_team_img{
      display: flex;
      justify-content: space-between;
      margin-top: .3rem;
      .us_team_img_left{
        .bg-img(us_image_2);
        width:4.18rem;
        height: 2.78rem;
        background-size:100%; 
      }
      .us_team_img_right{
        .bg-img(us_image_3);
        width:1.84rem;
        height: 2.78rem;
        background-size:100%; 
      }
    }
    .us_resolve_img{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top:.3rem;
      p{
        margin-top:.2rem;
        height: 1rem;
        background-size:100%; 
      }
      .us_resolve_img01{
        width:2.2rem;
        .bg-img(us_logo_1);
      }
      .us_resolve_img02{
        width:1.44rem;
        .bg-img(us_logo_2);
      }
      .us_resolve_img03{
        width:2.2rem;
        .bg-img(us_logo_3);
      }
      .us_resolve_img04{
        width:2.2rem;
        .bg-img(us_logo_4);
      }
      .us_resolve_img05{
        width:1.44rem;
        .bg-img(us_logo_5);
      }
      .us_resolve_img06{
        width:2.2rem;
        .bg-img(us_logo_6);
      }
    }
    .us_content_detail{
      width:100%;
      display: flex;
      margin-top: .5rem;
      .left_circle{
        margin: 8px;
      }
      div {
        display: block;
          width:6rem;
        h3{
          width:100%;
          color: @theme-black;
          font-size: 14px;
          line-height:24px;
        }
        p {
          line-height:21px;
          color: @theme;
          width:100%;
        }
      }
    }
  }
  .us_contact{
    width: 6.1rem;
    margin: 1.2rem auto .4rem;
    .contact_logo{
      .bg-img(us_vp_logo);
      width: 4.36rem;
      height: .5rem;
      background-size:100%;
      margin: .3rem auto
    }
    .contact_flex {
      display: flex;
      .contact_flex_left {
        margin: .12rem .2rem 0 0;
        width: .32rem;
        height: .32rem;
        background-size: 100%;
      }
      .contact_phone{
        .bg-img(us_phone);
      }
      .contact_email{
        .bg-img(us_email);
      }
      .contact_website{
        .bg-img(us_earth);
      }
      .contact_flex_right {
        font-size: 14px;
        color: @theme;
        p {
          height: .56rem;
          line-height: .56rem;
          a {
            color: @theme-black;
          }
        }
      }
    }
  }
}
</style>
