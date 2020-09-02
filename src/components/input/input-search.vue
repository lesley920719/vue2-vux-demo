<template>
  <div class="input-search"
       ref="inputSearch">
    <div class="search-bar">
      <form class="search-bar-form"
            @submit.prevent="handleSubmit"
            action=".">
        <div class="search-bar-input">
          <input type="search"
                 :placeholder="placeholder"
                 autocomplete="off"
                 v-model="currentValue"
                 @focus="onFocus"
                 @blur="onBlur"
                 @input="onInput">
          <span class="search-icon"></span>
        </div>
      </form>
      <a href="javascript:"
         class="search-bar-cancel-btn"
         @click="onCancel">{{ cancelText }}
      </a>
    </div>
    <div class="search-result-box"
         ref="searchResultBox"
         :style="topRem ? 'top:' + topRem : ''"
         v-show="showResultBox">
      <slot></slot>
      <div class="result-box-cell"
           v-for="item in results"
           @click="handleResultClick(item)">
        <p>{{item[searchParamsName] || item}}</p>
      </div>
    </div>
  </div>
</template>
<script type = 'text/javascript'>
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      name: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
export default {
  name: 'inputSearch',
  props: {
    topRem: {   // 搜索结果框与页面顶部的距离
      type: String,
      default: '0.9rem'
    },
    placeholder: {
      type: String,
      default: '搜索'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    axiosApiUrl: {  // 数据请求接口路径
      type: String,
      default: ''
    },
    searchParamsName: {
      type: String,
      default: 'enterpriseName'
    },
    extraParams: {  // 接口额外参数
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      results: [],
      currentValue: '',
      showResultBox: false,
    };
  },
  mounted () {

  },
  methods: {
    handleSubmit () {  // 搜索提交
      this.showResultBox = false;
      this.results = [];
      this.$emit('on-submit', this.currentValue)
    },
    handleResultClick (item) {  // 点击某一项搜索结果
      this.showResultBox = false;
      this.results = [];
      this.currentValue = item[this.searchParamsName];
      this.$emit('searchResult', item);
    },
    async onInput () {    // 搜索框输入事件
      console.log('on-input', this.currentValue)
      //   this.results = this.currentValue ? getResult(this.currentValue) : []
      if (!this.axiosApiUrl) return;
      let res = await this.$post(this.axiosApiUrl, {
        [this.searchParamsName]: this.currentValue,
        ...this.extraParams
      }, true);
      if (!res || !res.success || !res.data) {
        return this.$vux.toast.text(res && res.msg || '企业监管分类数据获取失败');
      }
      this.results = res.data.list
    },
    onFocus () {    // 搜索框focus时显示下面搜索结果框
      console.log('on focus')
      this.showResultBox = true;
    },
    onBlur () {
      console.log('on blur')
    },
    onCancel () {   // 取消
      console.log('on cancel');
      this.showResultBox = false;
      this.results = [];
      this.currentValue = '';   // 取消时清空输入框内容
      this.$emit('cancel');
    }
  },
  watch: {
    value (val) {
      this.curVal = val;
    },
    curVal (val) {
      this.curVal = val;
      this.$emit('input', this.curVal);
    }
  }
};
</script>
<style lang = 'less' scoped>
@import "~@/assets/less/border-1px.less";
.input-search {
  width: 100%;
  height: 100%;
  position: relative;
  .search-bar {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 0.5rem;
    align-items: center;
    .search-bar-form {
      flex: 1;
      height: 0.54rem;
    }
    .search-bar-input {
      width: 100%;
      height: 0.54rem;
      position: relative;
      input {
        height: 100%;
        width: 100%;
        border-radius: 0.27rem;
        background: #fff;
        color: @font-main;
        font-size: 0.28rem;
        padding: 0 0.64rem 0 0.27rem;
      }
      .search-icon {
        position: absolute;
        display: block;
        top: 50%;
        right: 0.27rem;
        transform: translateY(-50%);
        width: 0.24rem;
        height: 0.24rem;
        background: url("~@/assets/images/default/search.png") center center
          no-repeat;
        background-size: 100%;
      }
    }
    .search-bar-cancel-btn {
      color: #8d9095;
      font-size: 0.28rem;
      line-height: 0.48rem;
      margin-left: 0.38rem;
      font-weight: 500;
    }
  }
  .search-result-box {
    overflow-y: auto;
    /* position: absolute;
    top: 100%;
    width: 100%;
    max-height: 7.8rem; */
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 100%;

    z-index: 3000;
    left: 0;
    background: #fff;
    padding: 0 0.5rem;
    .result-box-cell {
      height: 0.8rem;
      line-height: 0.8rem;
      color: @font-main;
      font-size: 0.26rem;
      position: relative;
      .border-1px-b(@c: @border-color, @O: 0.2);
      p {
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>