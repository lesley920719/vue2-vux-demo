webpackJsonp([24],{337:function(e,t,a){function n(e){a(559)}var o=a(0)(a(449),a(748),n,"data-v-6725837f",null);e.exports=o.exports},449:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(45);t.default={name:"navScroll",components:{vpNavScroll:n.k},data:function(){return{tabList:[{name:"足球",code:"soccer"},{name:"篮球",code:"basketball"},{name:"排球",code:"volleyball"},{name:"乒乓球",code:" tableTennis"},{name:"羽毛球",code:"badminton"}],tabChosen:1,code:"basketball"}},methods:{navScrollEvent:function(e){this.tabChosen=e.navIndex,this.code=e.navCode}},created:function(){},computed:{}}},511:function(e,t,a){t=e.exports=a(99)(!1),t.push([e.i,".border-1px-b[data-v-6725837f],.border-1px-l[data-v-6725837f],.border-1px-r[data-v-6725837f],.border-1px-t[data-v-6725837f],.border-1px-tb[data-v-6725837f],.border-1px[data-v-6725837f]{position:relative}",""])},559:function(e,t,a){var n=a(511);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(313)("70418ab4",n,!0,{})},748:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navScroll"},[a("vp-nav-scroll",{attrs:{tabList:e.tabList,tabChosen:e.tabChosen},on:{"nav-scroll":e.navScrollEvent}}),e._v(" "),a("div",[e._v(e._s(e.tabList[e.tabChosen].name))]),e._v(" "),a("div",[e._v(e._s(e.code))])],1)},staticRenderFns:[]}}});