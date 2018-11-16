<template>
  <div class="hello">
    <h3>电子渠道</h3>
    <ul>
      <li v-for="(item, index) in digitalChannel">
        {{item.local}}:{{item.proName}}
      </li>
    </ul>
    <h3>O2O渠道</h3>
    <ul>
      <li v-for="(item, index) in O2OChannel">
        {{item.local}}:{{item.proName}}
      </li>
    </ul>
    <h3>电商平台</h3>
    <ul>
      <li v-for="(item, index) in eCommerce">
        {{item.local}}:{{item.proName}}
      </li>
    </ul>
    <h3>案例</h3>
    <ul>
      <li v-for="(value, index) in cases">
        {{value.name}} <br>
        {{value.position}}
        <div v-html="value.description" class="description"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      digitalChannel: '', //电子渠道
      O2OChannel: '', //O2O渠道
      eCommerce: '', //电商平台
      cases: '',  //案例
    }
  },
  created() {
    // api.JH_news('/news/index', 'type=top&key=123456')
    //   .then(res => {
    //     console.log(res);
    //     this.newsListShow = res.articles;
    //   });
    // 运营商服务
    this.$get('/news/operators',{})
      .then(res => {
        console.log(res);

        this.digitalChannel = res.datainfo.digitalChannel;  //电子渠道
        this.O2OChannel = res.datainfo.O2OChannel; //O2O渠道
        this.eCommerce = res.datainfo.eCommerce; //电商平台
    });
    // 案例
    this.$get('/news/cases',{})
      .then(res => {
        console.log(res);

        this.cases = res.datainfo;
    });
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3{font-size:18px;font-weight:400}
</style>
