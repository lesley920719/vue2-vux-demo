<template>
  <div class="home">
    <div class="swiperBox">
      <swiper :auto="true"
              :loop="true"
              :aspect-ratio="320/750"
              height="2.9rem"
              dots-position="center"
              dots-class="homedots">
        <swiper-item v-for="(item, index) in sliderList"
                     :key="index">
          <div style="width:100%;height:100%;touch-action: none;">
            <img :src="item.advertImage"
                 width="100%">
          </div>
        </swiper-item>
      </swiper>
    </div>
    <div class="home_header">
      <flexbox>
        <flexbox-item>
          <i class="header_icon home_increment"></i>
          <span>增量提升</span>
        </flexbox-item>
        <flexbox-item>
          <i class="header_icon home_stock"></i>
          <span>存量挖掘</span>
        </flexbox-item>
        <flexbox-item>
          <i class="header_icon home_operation"></i>
          <span>增值运营</span>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="home_ability clear_margin">
      <div class="ability_title">为电信运营商互联网赋能</div>
      <p class="border_bottom"></p>
      <div class="ability_content clear_margin">
        <span class="left_circle"></span>
        <p>基于实体渠道和海量用户两大核心优势赋予互联网营销及大数据精准营销两大核心能力。</p>
      </div>
      <div class="ability_content clear_margin">
        <span class="left_circle"></span>
        <p>立足互联网运营，服务于营销，提供快速迭代的互联网平台开发和运营解决方案，围绕着用户经营打造基于互联网，大数据的智联营销平台，让用户和实体渠道方面快捷的随时随地，拿出手机就能办业务。</p>
      </div>
    </div>
    <div class="home_user">
      <div class="page_icon_title clear_margin">
        <i></i>
        <span>用户经营</span>
      </div>
      <flexbox>
        <flexbox-item>
          <i class="user_icon user_image1"></i>
          <span>用户成长</span>
        </flexbox-item>
        <flexbox-item>
          <i class="user_icon user_image2"></i>
          <span>一站式业务办理平台</span>
        </flexbox-item>
        <flexbox-item>
          <i class="user_icon user_image3"></i>
          <span>权益体系</span>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="home_hall">
      <div class="page_icon_title clear_margin">
        <i></i>
        <span>智汇随身厅</span>
      </div>
      <flexbox>
        <flexbox-item>
          <i class="hall_icon hall_image1"></i>
          <span>销售工具</span>
        </flexbox-item>
        <flexbox-item>
          <i class="hall_icon hall_image2"></i>
          <span>营销平台</span>
        </flexbox-item>
        <flexbox-item>
          <i class="hall_icon hall_image3"></i>
          <span>渠道掌控</span>
        </flexbox-item>
        <flexbox-item>
          <i class="hall_icon hall_image4"></i>
          <span>融合营销</span>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="home_channel">
      <div class="page_icon_title clear_margin">
        <i></i>
        <span>实体渠道新零售转型</span>
      </div>
      <flexbox>
        <flexbox-item>
          <i class="channel_icon channel_image1"></i>
          <span>厅店转型</span>
        </flexbox-item>
        <flexbox-item>
          <i class="channel_icon channel_image2"></i>
          <span>营销闭环</span>
        </flexbox-item>
        <flexbox-item>
          <i class="channel_icon channel_image3"></i>
          <span>引客入店</span>
        </flexbox-item>
        <flexbox-item>
          <i class="channel_icon channel_image4"></i>
          <span>千店万员</span>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="home_service">
      <div class="page_icon_title clear_margin">
        <i></i>
        <span>互联网赋能的服务受众</span>
      </div>
      <div class="service_icon"></div>
      <div class="service_content clear_margin">
        <span class="left_circle"></span>
        <div>
          <h3>互联网营销</h3>
          <p>增加触点，随时随地办业务，让用户拿出手机就能办，让渠道一部手机就开店。</p>
        </div>
      </div>
      <div class="service_content clear_margin">
        <span class="left_circle"></span>
        <div>
          <h3>大数据精销</h3>
          <p>利用大数据手段精准推荐，利用互联网手段完成营销。</p>
        </div>
      </div>
      <div class="service_content clear_margin">
        <span class="left_circle"></span>
        <div>
          <h3>融合运营</h3>
          <p>结合线下实体渠道优势和线上用户流量优势，线下为线上引流促活，线上为线下引客入店。</p>
        </div>
      </div>
    </div>
    <vp-bottom-tab :tabIndex='0'></vp-bottom-tab>
    <vp-to-top></vp-to-top>
  </div>
</template>
<script>
import { vpBottomTab, vpToTop } from "@/components";
import {
  Swiper,
  SwiperItem,
} from "vux";

export default {
  components: {
    Swiper,
    SwiperItem,
    vpBottomTab,
    vpToTop,
  },
  name: 'home',
  data () {
    return {
      sliderList: [
        { advertImage: "./static/images/banner/home_banner_1@2x.png" },
        { advertImage: "./static/images/banner/home_banner_2@2x.png" },
        { advertImage: "./static/images/banner/home_banner_3@2x.png" },
      ],
    }
  },
  mounted () {

  },
  computed: {

  },
  methods: {

  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~@/assets/less/mixin.less";
.content {
  padding-bottom: 1rem !important;
}
.to_top {
  position: fixed;
  height: 1rem;
  width: 1rem;
  bottom: 1.2rem;
  right: 0.2rem;
  z-index: 99;
  border-radius: 50%;
  .bg-img(common_top);
  background-size: 100%;
}
.home {
  .border_bottom {
    width: 0.21rem;
    height: 0.06rem;
    margin: 0 auto;
    background: #232323;
  }
  .vux-flexbox-item {
    i {
      display: block;
      font-style: normal;
      background-size: 100%;
      margin-bottom: 0.1rem;
    }
    span {
      display: block;
      color: @theme-black;
    }
  }
  .home_header {
    height: 1rem;
    width: 100%;
    margin-top: 0.5rem;
    div.vux-flexbox-item {
      .header_icon {
        width: 0.6rem;
        height: 0.6rem;
      }
      .header_icon.home_increment {
        .bg-img(home_increment);
      }
      .header_icon.home_stock {
        .bg-img(home_stock);
      }
      .header_icon.home_operation {
        .bg-img(home_operation);
      }
    }
  }
  .home_ability {
    margin-top: 0.5rem;
    width: 100%;
    height: 10rem;
    background-size: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .bg-img(image_home_background__1);
    .ability_title {
      margin-top: 1rem;
      color: @theme-black;
      letter-spacing: 0;
      text-align: justify;
      font-size: 18px;
      font-weight: 600;
      line-height: 42px;
    }
    .ability_content {
      width: 100%;
      padding: 0 0.3rem;
      display: flex;
      margin-top: 0.4rem;
      .left_circle {
        margin: 8px;
      }
      p {
        display: block;
        width: 6.1rem;
        line-height: 21px;
        color: @theme;
      }
    }
  }
  .home_user {
    margin: 0.4rem 0 1rem;
    .user_icon {
      height: 1.14rem;
      width: 1.14rem;
    }
    .user_image1 {
      .bg-img(home_image_1);
    }
    .user_image2 {
      .bg-img(home_image_2);
    }
    .user_image3 {
      .bg-img(home_image_3);
    }
  }
  .home_hall {
    margin: 0.4rem 0 1rem;
    .hall_icon {
      height: 1.6rem;
      width: 1.4rem;
    }
    .hall_image1 {
      .bg-img(home_image_4);
    }
    .hall_image2 {
      .bg-img(home_image_5);
    }
    .hall_image3 {
      .bg-img(home_image_6);
    }
    .hall_image4 {
      .bg-img(home_image_7);
    }
  }
  .home_channel {
    margin: 0.4rem 0 1rem;
    .channel_icon {
      height: 1.6rem;
      width: 1.4rem;
    }
    .channel_image1 {
      .bg-img(home_image_8);
    }
    .channel_image2 {
      .bg-img(home_image_9);
    }
    .channel_image3 {
      .bg-img(home_image_10);
    }
    .channel_image4 {
      .bg-img(home_image_11);
    }
  }
  .home_service {
    .service_icon {
      width: 3.32rem;
      height: 3.22rem;
      .bg-img(home_image_audience);
      background-size: 100%;
      margin: 0 auto;
    }
    .service_content {
      width: 100%;
      padding: 0 0.3rem;
      display: flex;
      margin-top: 0.5rem;
      .left_circle {
        margin: 8px;
      }
      div {
        display: block;
        width: 6.1rem;
        h3 {
          width: 100%;
          color: @theme-black;
          font-size: 14px;
          line-height: 24px;
        }
        p {
          line-height: 21px;
          color: @theme;
          width: 100%;
        }
      }
    }
  }
}
</style>
