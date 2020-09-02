<template>
  <div class="form-common">
    <input-search @cancel="cancelSearch"
                  placeholder="请搜索企业名称/园区名称"
                  topRem="1.08rem"
                  :extraParams="{
                          pageNo: 1,
                          pageSize: 99
                      }"
                  @searchResult="searchResult"
                  @on-submit="searchSubmit"></input-search>
  </div>
</template>

<script>
import {
  inputSearch
} from '@/components'
export default {
  name: 'formCommon',
  components: {
    inputSearch,
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    cancelSearch () {    // 取消搜索
      this.$vux.toast.text('取消');
    },
    searchResult (data) {    // 搜索结果
      console.log(data);
    },
    searchSubmit (data) {    // 搜索提交
      console.log(data);
    },
  },
  created () {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
.form-common {
  width: 100%;
  background: @background-color;
}
</style>
