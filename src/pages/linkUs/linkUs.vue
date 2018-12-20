<template>
  <div class="link">
    <div class="link_box">
      <ul class="link_tab flex flex_justify">
        <li :class="{'activeColor':contactType==0}">
          总部
          <span></span>
        </li>
        <li :class="{'activeColor':contactType==1}">
          办事处
          <span></span>
        </li>
        <li :class="{'activeColor':contactType==2}">
          招商入驻
          <span></span>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="headquarters swiper-slide">
            <div class="headquarters_info">
              <div class="headquarters_flex">
                <div class="headquarters_flex_left headquarters_phone"></div>
                <div class="headquarters_flex_right">
                  <p><a href="tel:123456789">123456789</a> <span></span></p>
                  <p><a href="tel:123456789">123456789</a> <span></span></p>
                </div>
              </div>
              <div class="headquarters_flex">
                <div class="headquarters_flex_left headquarters_email"></div>
                <div class="headquarters_flex_right">
                  <p><a href="mailto:hr@lesley.cn">hr@lesley.cn</a> <span></span></p>
                </div>
              </div>
              <div class="headquarters_flex">
                <div class="headquarters_flex_left headquarters_website"></div>
                <div class="headquarters_flex_right">
                  <p><a href="http://www.lesley.com">www.lesley.com</a><span></span></p>
                </div>
              </div>
              <div class="headquarters_flex">
                <div class="headquarters_flex_left headquarters_addr"></div>
                <div class="headquarters_flex_right">
                  <p><a href="#">深圳市南山区世界之窗</a><span></span></p>
                </div>
              </div>
            </div>
            <baidu-map id="baiduMap" ak="fugbGzfq0TYLSBVfYDGHcLyQ7svSHi05" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
              <bm-marker :position="center">
                <bm-label content="深圳市南山区世界之窗" :position="center" :labelStyle="{color: 'red', fontSize : '10px', border: 0}" :offset="{width: 20, height: 0}" title="深圳市南山区世界之窗"/>
              </bm-marker>
            </baidu-map>
          </div>
          <div class="office swiper-slide">
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>深圳市 南山区</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">李三</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18888888888</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">lisan@lesley.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>深南大道9037号</p>
                  <p>世界之窗</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>深圳市 南山区</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">李三</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18888888888</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">lisan@lesley.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>深南大道9037号</p>
                  <p>世界之窗</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>深圳市 南山区</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">李三</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18888888888</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">lisan@lesley.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>深南大道9037号</p>
                  <p>世界之窗</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>深圳市 南山区</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">李三</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18888888888</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">lisan@lesley.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>深南大道9037号</p>
                  <p>世界之窗</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>深圳市 南山区</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">李三</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18888888888</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">lisan@lesley.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>深南大道9037号</p>
                  <p>世界之窗</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>深圳市 南山区</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">李三</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18888888888</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">lisan@lesley.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>深南大道9037号</p>
                  <p>世界之窗</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>深圳市 南山区</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">李三</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18888888888</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">lisan@asdfas.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>深南大道9037号</p>
                  <p>世界之窗</p>
                </div>
              </div>
            </div>
          </div>
          <div class="business swiper-slide">
            <div class="business_box flex flex_justify flex_align_center">
              <div class="business_box_left">
                <span class="icon_xqj"></span>
                <p>秦</p>
              </div>
              <div class="business_box_right">
                <div class="business_box_intro flex flex_justify">
                  <div>招商经理 : </div>
                  <div>张经理</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>联系电话 : </div>
                  <div>18888888888</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 : </div>
                  <div>zhang@asdfas.cn</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q : </div>
                  <div>111111111</div>
                </div>
              </div>
            </div>
            <div class="business_box flex flex_justify flex_align_center">
              <div class="business_box_left">
                <span class="icon_lnyp"></span>
                <p>岭南</p>
              </div>
              <div class="business_box_right">
                <div class="business_box_intro flex flex_justify">
                  <div>招商经理 : </div>
                  <div>李经理</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>联系电话 : </div>
                  <div>18888888888</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 : </div>
                  <div>li@asdfas.cn</div>
                </div>
                <div class="business_box_intro flex flex_justify special_css">
                  <div>招商经理 : </div>
                  <div>宋经理</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>联系电话 : </div>
                  <div>18888888888</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 : </div>
                  <div>song@fasdf.cn</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q : </div>
                  <div>111111111111</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import bmLabel from 'vue-baidu-map/components/overlays/Label.vue'
import bmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import SwiperSlide from 'swiper'
import {
  Swiper,
  SwiperItem,
} from "vux";

export default {
  components: {
    Swiper,
    SwiperItem,
    BaiduMap,
    bmLabel,
    bmMarker,
  },
  name: 'linkUs',
  data () {
    return {
      contactType: '0', // 初始显示tab
      center: {lng: "113.979399",lat: "22.540746"}, // 经纬度
      zoom: 14, // 缩放等级
    }
  },
  mounted() {
    //tab导航
    let _this = this;
      new SwiperSlide('.link_box .swiper-container', {
        autoHeight: true, //高度随内容变化
        pagination: { //分页器
          el: '.link_box .swiper-pagination', //分页器容器的css选择器或HTML标签，不同Swiper的组件应该有所区分
          clickable : true,  //点击分页器的指示点分页器会控制Swiper切换。
        },
        speed : 500,
        on: {
          slideChangeTransitionStart: function(){ //从当前slide开始过渡到另一个slide时执行的回调函数
            // $(".link_tab .activeColor").removeClass('activeColor');
            // $(".link_tab li").eq(this.activeIndex).addClass('activeColor');
            console.log(this.activeIndex);
            _this.contactType = this.activeIndex
          },
        },
      });
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../assets/less/swiper.min.css'; //main.js引入时报错：Module not found: Error: Can't resolve 'swiper/dist/css/swiper.min.css' （样式文件放入静态文件夹引入）
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
.content {padding-bottom: 0!important}
.link{
  .link_box {
    position: relative;
    .link_tab {
      li {
        position: relative;
        flex: 1;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        font-size: 14px;
        color: @theme-secondary;
        span {
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -0.21rem;
          display: block;
          width: .42rem;
          height: .06rem;
          background: transparent;
        }
      }
      li.activeColor {
        color: @theme-black;
        span {
          background: @theme-red;
        }
      }
    }
    .swiper-pagination {
      width: 100%; height: 1rem; position: absolute; left: 0; top: 0; z-index: 2;
      .swiper-pagination-bullet {
        background: none; width: 33.33%; height: 1rem; display: inline-block; 
      }
      .swiper-pagination-bullet-active { background: none; }
    }
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide{
          height: auto;
          display: inline-block;
        }
      }
    }
    .headquarters {
      #baiduMap {
        width: 6.58rem;
        height: 3.92rem;
        margin: 0 auto;
      }
      .headquarters_info {
        width: 6.58rem;
        margin: .5rem auto;
        .headquarters_flex {
        display: flex;
        .headquarters_flex_left {
          margin: .16rem .2rem 0 0;
          width: .32rem;
          height: .32rem;
          background-size: 100%;
        }
        .headquarters_phone{
          .bg-img(us_phone);
        }
        .headquarters_email{
          .bg-img(us_email);
        }
        .headquarters_website{
          .bg-img(us_earth);
        }
        .headquarters_addr{
          .bg-img(us_location);
        }
        .headquarters_flex_right {
          font-size: 14px;
          color: @theme;
          p {
            height: .66rem;
            line-height: .66rem;
            display: flex;
            align-items: center;
            a {
              color: @theme-black;
            }
            span {
              display: inline-block;
              height: 0.28rem;
              width: 0.28rem;
              margin-left: .1rem;
              background-size: 100%;
              .bg-img(case_enter);
            }
          }
          
        }
      }
      }
    }
    .office {
      margin-bottom: .3rem;
      .office_content {
        width: 6.8rem;
        margin: 0 auto;
        padding: .3rem 0;
        border-bottom: 1px solid #eee;
        .office_location {
          i {
            display: block;
            width: .22rem;
            height: .22rem;
            .bg-img(introduce_loacation);
            background-size: 100%;
            margin: .17rem .12rem 0 0;
          }
          p {
            font-size: 14px;
            line-height: .6rem;
            height: .6rem;
            color: @theme-black;
          }
        }
        .office_contact {
          line-height: .5rem;
          margin:0 .34rem;
          .office_contact_left {
            color: @theme-secondary;
          }
          .office_contact_right {
            line-height: .5rem;
            color: @theme-black;
            p {
              margin-top:.15rem;
              text-align:right;
              line-height: .3rem;
            }
          }
        }
      }
    }
    .business {
      padding-bottom:.3rem;
      .business_box {
        width: 6.88rem;
        margin: 0 auto;
        padding: .3rem;
        border-bottom: 1px solid #eee;
        .business_box_left {
          span {
            display: block;
            background-size: 100%;
            width: .84rem;
            height: .84rem;
            margin-bottom: .1rem;
          }
          span.icon_xqj{
            .bg-img(us_project_logo_17); 
            .bg-img(us_project_logo_17);
          }
          span.icon_lnyp{
            .bg-img(us_project_logo_15); 
            .bg-img(us_project_logo_15);
          }
          span.icon_hxb{
            .bg-img(us_project_logo_13); 
            .bg-img(us_project_logo_13);
          }
          p { text-align: center; color: @theme}
        }
        .business_box_right {
          width: 5rem;
          .business_box_intro {
            line-height: .52rem;
            div {
              &:first-child{ color:@theme-secondary }
              &:last-child{ color:@theme-black;}
            }
          }
          .special_css{
            margin-top:.3rem;
          }
        }
      }
    }
  }
}
</style>
