<template>
  <div class="qrcode">
    <h3>方式一：qrcode</h3>
    <div id="qrcode"
         ref="qrcode"></div>
    <h3>方式二：qrcanvas-vue</h3>
    <div class="qrcanvas_vue">
      <qrcanvas :options="options"></qrcanvas>
    </div>
    <div @click="jumpParams">params跳转</div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
const Qrcanvas = require('qrcanvas-vue');
export default {
  name: 'qrcode',
  components: {
    Qrcanvas,
  },
  data () {
    return {
      options: {},
    }
  },
  methods: {
    jumpParams () {
      this.$router.push({ name: 'minirefresh', params: { name: 'lesley' } })
    }
  },
  created () {
    this.options = Object.assign({}, this.options, {
      cellSize: 8,
      data: 'https://www.baidu.com',  // url链接
    });
    const image = new Image();
    image.src = 'https://user-images.githubusercontent.com/3139113/38300650-ed2c25c4-382f-11e8-9792-d46987eb17d1.png';
    image.onload = () => {
      this.options = Object.assign({}, this.options, {
        logo: {
          image,
        },
      });
    };
  },
  computed: {

  },
  mounted () {
    let rootHtml = document.documentElement
    let rootFontSize = parseFloat(rootHtml.style.fontSize)  // rootHtml.style.fontSize : "55.2px"
    this.$nextTick(function () {
      let qrcode = new QRCode('qrcode', {
        text: 'https://www.baidu.com',  // url链接
        width: rootFontSize * 2, //图像宽度
        height: rootFontSize * 2, //图像高度
        colorDark: "#000000", //前景色
        colorLight: "#ffffff", //背景色
        typeNumber: 4,
        correctLevel: QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
@import "~@/assets/less/mixin.less";
.qrcode {
  h3 {
    font-size: 24px;
    font-weight: bold;
    line-height: 40px;
  }
  #qrcode {
  }
  .qrcanvas_vue {
    canvas {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
