<template>
  <div class="about_us">
    <div class="line_title">
      <div>
        <p>全国项目分布</p>
      </div>
    </div>
    <div class="us_map"></div>
    <div class="us_channel clear_margin">
      <div class="us_title">电子渠道</div>
      <flexbox wrap="wrap"
               class="clear_margin">
        <flexbox-item :span="scale"
                      v-for="(item, index) in digitalChannel"
                      :key="index">
          <img :src="item.imgUrl"
               alt="">
          <span>{{item.local}}</span>
          <span>{{item.proName}}</span>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="us_channel clear_margin">
      <div class="us_title">渠道O2O</div>
      <flexbox wrap="wrap"
               class="clear_margin">
        <flexbox-item :span="scale"
                      v-for="(item, index) in O2OChannel"
                      :key="index">
          <img :src="item.imgUrl"
               alt="">
          <span>{{item.local}}</span>
          <span>{{item.proName}}</span>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="us_channel clear_margin">
      <div class="us_title">电商平台</div>
      <flexbox wrap="wrap"
               class="clear_margin">
        <flexbox-item :span="scale"
                      v-for="(item, index) in eCommerce"
                      :key="index">
          <img :src="item.imgUrl"
               alt="">
          <span>{{item.local}}</span>
          <span>{{item.proName}}</span>
        </flexbox-item>
      </flexbox>
    </div>
    <vp-bottom-tab :tabIndex='2'></vp-bottom-tab>
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
    scale: function () {
      let width = document.body.clientWidth;
      if (width < 375) {
        return 1 / 4.4
      } else {
        return 1 / 5.4
      }
    }
  },
  created () {
    // 渠道
    this.$get('/news/operators', {})
      .then(res => {
        this.digitalChannel = res.datainfo.digitalChannel;  //电子渠道
        this.O2OChannel = res.datainfo.O2OChannel; //O2O渠道
        this.eCommerce = res.datainfo.eCommerce; //电商平台
      });
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/mixin.less";
@import "../../assets/less/theme.less";
.content {
  padding-bottom: 1rem !important;
}
.about_us {
  .line_title {
    margin-top: 0.8rem;
    text-align: center;
    div {
      .line-title(-0.6rem);
    }
  }
  .us_map {
    margin: 0.3rem auto;
    height: 5.68rem;
    width: 6.52rem;
    .bg-img(us_map);
    background-size: 100%;
  }
  .us_channel {
    width: 6.8rem;
    margin: auto;
    .us_title {
      font-size: 14px;
      color: @theme-black;
      line-height: 26px;
      margin-top: 0.4rem;
    }
    .vux-flexbox-item {
      margin-top: 0.3rem !important;
      margin-left: 0.08rem !important;
      &:first-child {
        margin-left: 0.08rem !important;
        margin-top: 0.3rem !important;
      }
      img {
        display: block;
        width: 0.7rem;
        height: 0.7rem;
        margin-bottom: 0.1rem;
      }
      span {
        font-size: 12px;
        display: block;
        letter-spacing: 0;
        color: @theme-secondary;
      }
    }
  }
}
</style>
