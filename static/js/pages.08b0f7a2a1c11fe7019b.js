webpackJsonp([20],{275:function(e,t,i){function n(e){i(442)}var o=i(0)(i(372),i(622),n,"data-v-1e17de72",null);e.exports=o.exports},372:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(42);t.default={components:{vpHeaderPage:n.h},data:function(){return{mainHeight:""}},computed:{title:function(){return this.$route.meta.title},isShowBack:function(){return this.$route.meta.isShowBack}},mounted:function(){},created:function(){},methods:{calcMainHeight:function(){var e=this;this.$nextTick(function(){var t=document.body.clientHeight,i=document.getElementsByClassName("header")[0].offsetHeight,n=e.hideHeader;e.mainHeight=n?t-i:t})}},watch:{}}},402:function(e,t,i){t=e.exports=i(248)(!1),t.push([e.i,".wrapper[data-v-1e17de72]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;height:auto;background:#fff;overflow-x:hidden}.wrapper .content[data-v-1e17de72]{padding:.88rem 0 1rem;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}",""])},442:function(e,t,i){var n=i(402);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(249)("fc7d70ea",n,!0,{})},622:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("vp-header-page",{attrs:{isShowBack:e.isShowBack,title:e.title}}),e._v(" "),i("keep-alive",[e.$route.meta.keepAlive?i("router-view",{staticClass:"content"}):e._e()],1),e._v(" "),e.$route.meta.keepAlive?e._e():i("router-view",{staticClass:"content"})],1)},staticRenderFns:[]}}});