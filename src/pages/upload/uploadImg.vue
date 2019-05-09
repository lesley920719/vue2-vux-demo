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
            <!-- 
            input[file]： 
            - "accept" 接受的文件类型 image/*:相片  video/*：视频  audio/*：录音
            - capture表示的是系统所捕获的默认设备 -- camera：照相机；camcorder：摄像机；microphone：录音；
            - 其中还有一个属性 multiple ，支持多选，当支持多选时，multiple优先级高于capture
            - 当用户选择一个文件时，触发change事件
            -->
            <input type="file" ref="uploadImg" accept="image/*" capture="camera" name="image" @change="preview" multiple>
          </div>
        </div>
      </section>
    </section>
    <button @click="ImgUpoad()">图片上传</button>
  </div>
</template>
<script>
export default {
  name: 'uploadImg',
  data () {
    return {
      applyRefund: {  // 选择的图片信息
        imageurl: [], // 图片本地url
        imageurlFile: []
      },
      imageUrlList: [], // 上传后获取的图片url
    }
  },
  methods: {
    preview(e) {  // 当用户选择一个文件时，change事件触发，即调用preview方法
        //打开文件夹，获取图片
        let files = e.target.files || e.dataTransfer.files; //File对象可以是来自在<input>元素上选择文件后返回的FileList对象,也可以来自拖放操作生成的 DataTransfer对象
        console.log(files)
        let uploadFiles = e.currentTarget.files[0]; // 当前选择的文件
        // let uploadFiles = this.$refs.uploadImg.files[0];
        //  File 对象提供了三个属性：name：文件名称  、 size：文件大小，按字节数(bytes)计算 、 type：文件的MIME type(例如图片为："image/png")
        console.log('uploadFiles',uploadFiles);
        if (!files.length) return;
        this.createImage(files, uploadFiles);
      },

      // 删除图片
      deleteImg(index) {
        this.applyRefund.imageurl.splice(index, 1);
        this.applyRefund.imageurlFile.splice(index, 1);
      },

      // 异步读取文件
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
          let reader = new FileReader();  // FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据
          /* 
          **FileReader有一下几种读取文件数据的方法
            * 1）.readAsText(file,encoding);以纯文本的形式读取文件，将读取到的文件保存到result属性。encoding参数用于指定编码类型，是可选的。
            * 2）.readAsDataURL(file);读取文件并将文件数据以URL形式保存到result属性中。（读取图像文件常用方法）
            * 3）.readAsBinaryString(file);读取文件并将一个字符串保存在result属性中，字符串中的每个字符表示一字节。
            * 4）.readAsArrayBuffer(file);读取文件并将一个包含文件内容的ArrayBuffer保存在result属性中。
          */
          reader.readAsDataURL(file[0]);  //开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容。
          /**
           * FileReader提供了几个事件最有用的三个事件，progress,error,load,分别表示是否又读取了新数据，是否发生了错误，是否已经读完整个文件。
           */
          reader.onload = function (e) {  // 该事件在读取操作完成时触发
            imgUrl64.url = e.target.result; // 图片url,同reader.result
            $this.applyRefund.imageurl.push(imgUrl64);
            $this.applyRefund.imageurlFile.push(uploadFiles);
          };
          this.$refs.uploadImg.value = '';
        // }
      },

      // 上传图片
      async ImgUpoad() {
        let uploadFiles = this.applyRefund.imageurlFile;
        if(uploadFiles.length){
          this.$toast('上传图片中...')
        }else{
          this.$toast('请先选择图片...')
        }
        for (let i = 0; i < uploadFiles.length; i++) {  // 逐个文件上传
          var formdata = new FormData();  // FormData对象用以将数据编译成键值对，以便用XMLHttpRequest来发送数据，如果表单enctype属性设为multipart/form-data ，则会使用表单的submit()方法来发送数据，从而，发送数据具有同样形式。
          formdata.append("file", uploadFiles[i]); //append()方法来添加字段
          console.dir(formdata);
          return

          let res = await this.$httpImgUpoad(formdata); // 上传接口
          if ( res && res.data.head.code === '100000') { // 上传图片成功
            let dataInfo = res.body;
            let imgUrl =  dataInfo.fullUrl
            this.imageUrlList.push(imgUrl);
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
  button {
    border: 0;
    background-color: #0F8EEB;
    display: block;
    width: 100%;
    height: .8rem;
    color: #ffffff;
    font-size: .28rem;
    text-align: center;
  }
}
</style>
