webpackJsonp([25],{342:function(e,n,t){function a(e){t(568)}var o=t(0)(t(455),t(758),a,"data-v-6725837f",null);e.exports=o.exports},455:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(45);n.default={name:"navScroll",components:{vpNavScroll:a.l},data:function(){return{tabList:[{name:"足球",code:"soccer"},{name:"篮球",code:"basketball"},{name:"排球",code:"volleyball"},{name:"乒乓球",code:" tableTennis"},{name:"羽毛球",code:"badminton"}],tabChosen:1,code:"basketball"}},methods:{navScrollEvent:function(e){this.tabChosen=e.navIndex,this.code=e.navCode}},created:function(){},computed:{}}},519:function(e,n,t){n=e.exports=t(99)(!1),n.push([e.i,"",""])},568:function(e,n,t){var a=t(519);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(318)("70418ab4",a,!0,{})},758:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"navScroll"},[t("vp-nav-scroll",{attrs:{tabList:e.tabList,tabChosen:e.tabChosen},on:{"nav-scroll":e.navScrollEvent}}),e._v(" "),t("div",[e._v(e._s(e.tabList[e.tabChosen].name))]),e._v(" "),t("div",[e._v(e._s(e.code))])],1)},staticRenderFns:[]}}});