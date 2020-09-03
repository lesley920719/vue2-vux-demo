<template>
  <div class="minirefresh">
    <div class="mini_title">新闻列表</div>
    <!-- minirefresh开头的class请勿修改 -->
    <div id="minirefresh"
         class="minirefresh-wrap">
      <div class="minirefresh-scroll">
        <ul class="data_list">
          <li class="data_item"
              v-for="(item,index) in newsData"
              :key="index">
            <h3 class="msg_title">{{item.title}}</h3>
            <span class="msg_time">{{item.time}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MiniRefreshTools from 'minirefresh'; //http://www.minirefresh.com/minirefresh-doc/
import 'minirefresh/dist/debug/minirefresh.css'
export default {
  data () {
    return {
      minirefresh: null,
      pageNum: 0, // 页码
      pageSize: 10,   // 每页数据量
      newsData: [],
      noMoreData: false,
      requestDelayTime: 500, // 延迟加载时间
    }
  },
  methods: {
    init () {    // MiniRefresh初始化
      const self = this;
      self.minirefresh = new MiniRefresh({
        container: '#minirefresh',
        down: { // 下拉刷新
          isLock: false,
          // isAutoResetUpLoading: true,
          callback () {
            console.log('=======================')
            setTimeout(() => {
              self.minirefresh.endDownLoading(true)
            }, 2000)
          }
        },
        up: {   // 上拉加载
          isAuto: true,   // 是否初始化时自动执行一次上拉加载 -- 初始加载数据
          callback: function () {
            setTimeout(function () {
              console.log("上拉：", self.pageNum)
              self.getData()
              // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
              self.minirefresh.endUpLoading(self.noMoreData); // 结束上拉加载
            }, self.requestDelayTime);
            // console.log("上拉：",self.pageNum)
            // self.getData()
            // // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
            // self.minirefresh.endUpLoading(this.noMoreData); // 结束上拉加载
          }
        }
      })

    },
    getData (pageNum, pageSize) { // 加载数据
      let self = this
      if (self.noMoreData) {    // 无更多数据
        self.minirefresh.endUpLoading(this.noMoreData); // 结束上拉加载
      } else {
        self.$get('/demo/minirefresh', { page: self.pageNum, pageSize: self.pageSize })
          .then(res => {   // title-time
            let data = res.datainfo.slice(self.pageNum * self.pageSize, (self.pageNum + 1) * self.pageSize)
            if (data.length < self.pageSize) {   // 无更多数据
              self.noMoreData = true
            } else {
              self.pageNum++
            }
            self.newsData = self.newsData.concat(data);
            console.log(self.newsData.length, self.noMoreData)
          });
      }

    }
  },
  computed: {

  },
  created () {
    console.log(this.$route.params)
  },
  mounted () {
    this.init() // 初始化MiniRefresh
  }
}
</script>
<style lang="less" scoped>
@import "~@/assets/less/mixin.less";
.minirefresh {
  width: 100%;
  .mini_title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 1rem;
  }
  #minirefresh {
    top: 1.88rem;
    .data_list {
      position: relative;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
      background-color: #fff;
      .data_item {
        position: relative;
        overflow: hidden;
        padding: 11px 15px;
        -webkit-touch-callout: none;
        &:after {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 15px;
          height: 1px;
          content: "";
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          background-color: #c8c7cc;
        }
        .msg_title {
          display: block;
          font-size: 15px;
          font-weight: 700;
          margin: 5px;
        }
        .msg_time {
          float: right;
          margin: 5px;
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
</style>


