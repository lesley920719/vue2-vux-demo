<template>
  <div class="upload_img">
    <section class="zone-img clearfix">
      <h2 class="title">
        照片采集
      </h2>
      <section class="upload_imgs_sec clearfix">
        <div class="float_upload_img" v-for="(item,index) in applyRefund.imageurl" :key="index">
          <img :src="item.url" alt="">
          <div class="btns-add" @click="deleteImg(index)"></div>
        </div>
        <div class="vux-1px add_img_dev-border">
          <div class="add_img_dev" v-if="uploadLimit">
            <input type="file" ref="uploadImg" accept="image/*" capture="camera" name="image" @change="preview($event)">
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: 'uploadImg',
  data () {
    return {
      applyRefund: {  // 
        imageurl: [],
        imageurlFile: []
      },
      imagelist: [], // 上传图片列表
    }
  },
  methods: {
    preview(event) {
        //打开文件夹，查找图片
        let files = event.target.files || event.dataTransfer.files;
        let uploadFiles = event.currentTarget.files[0];
        if (!files.length) return;
        this.createImage(files, uploadFiles);
      },

      // 删除图片
      deleteImg(index) {
        this.applyRefund.imageurl.splice(index, 1);
        this.applyRefund.imageurlFile.splice(index, 1);
      },

      // 上传图片
      async createImage(file, uploadFiles) {
        //获取图片呈现在页面上
        let $this = this;
        if (typeof FileReader === "undefined") {
          this.$toast("您的浏览器不支持图片上传，请升级您的浏览器");
          return false;
        }
        let leng = file.length;
        let imgUrl64 = {};
        // $this.applyRefund.imageurl.push(file[0]);
        // for (let i = 0; i < leng; i++) {
          let reader = new FileReader();
          reader.readAsDataURL(file[0]);
          reader.onload = function (e) {
            imgUrl64.url = e.target.result;
            $this.applyRefund.imageurl.push(imgUrl64);
            $this.applyRefund.imageurlFile.push(uploadFiles);
          };
          this.$refs.uploadImg.value = '';
        // }
      },

      // 上传图片
      async ImgUpoad() {
        this.$toast('上传图片中...')
        let uploadFiles = this.applyRefund.imageurlFile;
        for (let i = 0; i < uploadFiles.length; i++) {
          var formdata = new FormData();
          formdata.append("FormData", uploadFiles[i]); //获取文件法二
          let res = await this.$httpImgUpoad(formdata);
          if ( res && res.data.head.code === '100000') { // 上传图片成功
            let dataInfo = res.body;
            // this.list.certificatesUrl = config.HOST_NAME + '/'  + dataInfo.fileId

            // this.loadUserAdd() // 确认添加提交表单
            let imgUrl =  config.HOST_NAME +"/"+ dataInfo.shortUrl
            // console.log(imgUrl)
            this.imagelist.push(imgUrl);
            if (i == uploadFiles.length - 1) {
              let imgpath = this.imagelist.join(",");
              console.log(imgUrl)
              this.loadUserAdd(imgUrl);
            }
          } else {
            if (res.data.head instanceof Object) {
              this.$toast(res.data.head.msg)
            } else {
              this.$toast('网络错误，请重新提交...')
            }
          }
        }
      },


  },
  created() {
    
  },
  computed: {
    // 图片上传限制
    uploadLimit() {
      return this.applyRefund.imageurl.length < 5;
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
.upload_img {
  .zone-img {
    width: 100%;
    background: #fff;
    .title {
      line-height: .6rem;
      color: @themeText;
      font-size: .28rem;
      padding: 0 .3rem;
      font-weight: 400;
    }

    .img {
      float: left;
      display: block;
      width: 2rem;
      height: 1.5rem;
      overflow: hidden;
      margin: 0 0 .18rem .2rem;
    }

    .btn-add {
      float: left;
      display: block;
      border: 1px dashed @themeGrey;
      margin: 0 0 .18rem .2rem;
      width: 2rem;
      height: 1.5rem;
      font-size: .6rem;
      font-weight: 100;
      color: @themeGrey;
    }
    .upload_imgs_sec {
      padding-left: 0.3rem;
      padding-bottom: .19rem;
      .add_img_dev-border {
        display: inline-block;
        .add_img_dev {
          float: left;
          position: relative;
          height: 1.5rem;
          width: 2rem;
          text-align: center;
          line-height: 1.5rem;
          border: 1px dashed @themeGrey;
        }
        .add_img_dev:before {
          position: absolute;
          content: "";
          width: .3rem;
          height: 0.06rem;
          background: #999999;
          top: 50%;
          margin-top: -0.03rem;
          left: 50%;
          margin-left: -0.15rem;
        }
        .add_img_dev:after {
          position: absolute;
          content: "";
          height: .3rem;
          width: 0.06rem;
          background: #999999;
          top: 50%;
          margin-top: -0.15rem;
          margin-left: -0.03rem;
        }
        input {
          opacity: 0;
          height: 1.5rem;
          width: 2rem;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .float_upload_img {
        position: relative;
        float: left;
        font-size: 0;
        height: 1.5rem;
        width: 2rem;
        margin-right: 0.3rem;
        img {
          height: 1.5rem;
          width: 2rem;
        }
        .btns-add {
          position: absolute;
          top: -0.3rem;
          right: -0.3rem;
          width: 0.58rem;
          height: 0.58rem;
          .bg-img(common_shut);
          background-size: 100%;
          z-index: 10;
        }
      }
    }
  }
}
</style>
