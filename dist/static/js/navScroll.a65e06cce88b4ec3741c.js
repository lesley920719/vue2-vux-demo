webpackJsonp([18],{270:function(e,t,a){function n(e){a(447)}var o=a(0)(a(365),a(622),n,"data-v-6725837f",null);e.exports=o.exports},365:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(42);t.default={name:"navScroll",components:{vpNavScroll:n.f},data:function(){return{tabList:[{name:"足球",code:"soccer"},{name:"篮球",code:"basketball"},{name:"排球",code:"volleyball"},{name:"乒乓球",code:" tableTennis"},{name:"羽毛球",code:"badminton"}],tabChosen:1,code:"basketball"}},methods:{navScrollEvent:function(e){this.tabChosen=e.navIndex,this.code=e.navCode}},created:function(){},computed:{}}},411:function(e,t,a){t=e.exports=a(248)(!1),t.push([e.i,".border-1px-b[data-v-6725837f],.border-1px-l[data-v-6725837f],.border-1px-r[data-v-6725837f],.border-1px-t[data-v-6725837f],.border-1px-tb[data-v-6725837f],.border-1px[data-v-6725837f]{position:relative}",""])},447:function(e,t,a){var n=a(411);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(249)("5e1fab4e",n,!0,{})},622:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navScroll"},[a("vp-nav-scroll",{attrs:{tabList:e.tabList,tabChosen:e.tabChosen},on:{"nav-scroll":e.navScrollEvent}}),e._v(" "),a("div",[e._v(e._s(e.tabList[e.tabChosen].name))]),e._v(" "),a("div",[e._v(e._s(e.code))])],1)},staticRenderFns:[]}}});