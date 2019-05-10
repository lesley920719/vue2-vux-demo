<template>
  <div class="signature">
    <div class="signature-pad">
      <div class="signature-body">
        <canvas id="canvas" ref="canvas"></canvas>
      </div>
    </div>
    <div class="signature-pad--actions">
      <div>
        <button type="button" class="button clear" @click="clear">Clear</button>
        <button type="button" class="button" @click="changeColor">Change color</button>
        <button type="button" class="button" @click="undo">Undo</button>

      </div>
      <div>
        <button type="button" class="button save" @click="savePng">Save as PNG</button>
        <button type="button" class="button save" @click="saveJpg">Save as JPG</button>
        <button type="button" class="button save" @click="saveSvg">Save as SVG</button>
      </div>
    </div>
  </div>
</template>
<script>
import SignaturePad from "signature_pad"
export default {
  name: 'signature',
  data () {
    return {
      signaturePad: null,
    }
  },
  computed: {
    
  },
  methods: {
    // canvas 尺寸未设置成固定值想要100%自适应时需进行resize，否则画笔会有偏移。
    resizeCanvas() {
      // When zoomed out to less than 100%, for some very strange reason,
      // some browsers report devicePixelRatio as less than 1
      // and only part of the canvas is cleared then.
      var ratio =  Math.max(window.devicePixelRatio || 1, 1);

      // This part causes the canvas to be cleared
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);

      // This library does not listen for canvas changes, so after the canvas is automatically
      // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
      // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
      // that the state of this library is consistent with visual state of the canvas, you
      // have to clear it manually.
      this.signaturePad.clear();
    },
    download(dataURL, filename) {
      if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") === -1) {
        window.open(dataURL);
      } else {
        var blob = dataURLToBlob(dataURL);
        var url = window.URL.createObjectURL(blob);

        var a = document.createElement("a");
        a.style = "display: none";
        a.href = url;
        a.download = filename;

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
      }
    },
    clear(){
      this.$nextTick(function(){
        this.signaturePad.clear();
      })
    },
    changeColor(){
      var r = Math.round(Math.random() * 255);
      var g = Math.round(Math.random() * 255);
      var b = Math.round(Math.random() * 255);
      var color = "rgb(" + r + "," + g + "," + b +")";
      this.$nextTick(function(){
        this.signaturePad.penColor = color;
      })
    },
    undo(){
      this.$nextTick(function(){
        var data = this.signaturePad.toData();
        console.log(data)
        if (data) {
          data.pop(); // remove the last dot or line
          this.signaturePad.fromData(data);
        }
      })
      
    },
    savePng(){
      this.$nextTick(function(){
        if (this.signaturePad.isEmpty()) {
          alert("Please provide a signature first.");
        } else {
          var dataURL = this.signaturePad.toDataURL();
          this.download(dataURL, "signature.png");
        }
      })
    },
    saveJpg(){
      this.$nextTick(function(){
        if (this.signaturePad.isEmpty()) {
          alert("Please provide a signature first.");
        } else {
          var dataURL = this.signaturePad.toDataURL("image/jpeg");
          this.download(dataURL, "signature.jpg");
        }
      })
    },
    saveSvg(){
      this.$nextTick(function(){
        if (this.signaturePad.isEmpty()) {
          alert("Please provide a signature first.");
        } else {
          var dataURL = this.signaturePad.toDataURL('image/svg+xml');
          this.download(dataURL, "signature.svg");
        }
      })
    },
  },
  mounted() {
    let canvas = this.$refs.canvas
    this.signaturePad = new SignaturePad(canvas);
    this.resizeCanvas();
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
.signature {
  box-sizing: border-box;
  .signature-pad {
    width: 100%;
    height: 100vw;
    padding: 10px;
    background: #e5e5e5;
    position: relative;
    .signature-body {
      width: 100%;
      height: 100%;
      background: #fff;
      canvas {
        position: absolute;
        top: 0 ;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .signature-pad--actions {
    margin-top: 10px;
    div {
      margin-bottom:10px;
    }
  }
}
</style>
