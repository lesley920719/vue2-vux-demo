webpackJsonp([25],{336:function(e,a,t){function i(e){t(566)}var n=t(0)(t(448),t(755),i,"data-v-a9ac2eda",null);e.exports=n.exports},448:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t(114),n=(t.n(i),t(113));t.n(n);a.default={data:function(){return{minirefresh:null,pageNum:0,pageSize:10,newsData:[],noMoreData:!1,requestDelayTime:500}},methods:{init:function(){var e=this;e.minirefresh=new MiniRefresh({container:"#minirefresh",down:{isLock:!1,callback:function(){console.log("======================="),setTimeout(function(){e.minirefresh.endDownLoading(!0)},2e3)}},up:{isAuto:!0,callback:function(){setTimeout(function(){console.log("上拉：",e.pageNum),e.getData(),e.minirefresh.endUpLoading(e.noMoreData)},e.requestDelayTime)}}})},getData:function(e,a){var t=this;t.noMoreData?t.minirefresh.endUpLoading(this.noMoreData):t.$get("/demo/minirefresh",{page:t.pageNum,pageSize:t.pageSize}).then(function(e){var a=e.datainfo.slice(t.pageNum*t.pageSize,(t.pageNum+1)*t.pageSize);a.length<t.pageSize?t.noMoreData=!0:t.pageNum++,t.newsData=t.newsData.concat(a),console.log(t.newsData.length,t.noMoreData)})}},computed:{},created:function(){console.log(this.$route.params)},mounted:function(){this.init()}}},518:function(e,a,t){a=e.exports=t(99)(!1),a.push([e.i,'.border-1px-b[data-v-a9ac2eda],.border-1px-l[data-v-a9ac2eda],.border-1px-r[data-v-a9ac2eda],.border-1px-t[data-v-a9ac2eda],.border-1px-tb[data-v-a9ac2eda],.border-1px[data-v-a9ac2eda]{position:relative}.minirefresh[data-v-a9ac2eda]{width:100%}.minirefresh .mini_title[data-v-a9ac2eda]{font-size:18px;font-weight:700;text-align:center;line-height:1rem}.minirefresh #minirefresh[data-v-a9ac2eda]{top:1.88rem}.minirefresh #minirefresh .data_list[data-v-a9ac2eda]{position:relative;margin-top:0;margin-bottom:0;padding-left:0;list-style:none;background-color:#fff}.minirefresh #minirefresh .data_list .data_item[data-v-a9ac2eda]{position:relative;overflow:hidden;padding:11px 15px;-webkit-touch-callout:none}.minirefresh #minirefresh .data_list .data_item[data-v-a9ac2eda]:after{position:absolute;right:0;bottom:0;left:15px;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.minirefresh #minirefresh .data_list .data_item .msg_title[data-v-a9ac2eda]{display:block;font-size:15px;font-weight:700;margin:5px}.minirefresh #minirefresh .data_list .data_item .msg_time[data-v-a9ac2eda]{float:right;margin:5px;font-size:14px;color:#999}',""])},566:function(e,a,t){var i=t(518);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(313)("13f10c90",i,!0,{})},755:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"minirefresh"},[t("div",{staticClass:"mini_title"},[e._v("新闻列表")]),e._v(" "),t("div",{staticClass:"minirefresh-wrap",attrs:{id:"minirefresh"}},[t("div",{staticClass:"minirefresh-scroll"},[t("ul",{staticClass:"data_list"},e._l(e.newsData,function(a,i){return t("li",{key:i,staticClass:"data_item"},[t("h3",{staticClass:"msg_title"},[e._v(e._s(a.title))]),e._v(" "),t("span",{staticClass:"msg_time"},[e._v(e._s(a.time))])])}),0)])])])},staticRenderFns:[]}}});