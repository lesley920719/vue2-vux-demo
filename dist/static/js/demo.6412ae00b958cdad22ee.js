webpackJsonp([7],{265:function(t,e,r){function n(t){r(431)}var o=r(0)(r(361),r(606),n,"data-v-2e29d184",null);t.exports=o.exports},312:function(t,e,r){"use strict";e.__esModule=!0;var n=r(92),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var c=e[i](a),u=c.value}catch(t){return void r(t)}if(!c.done)return o.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}},314:function(t,e,r){t.exports=r(319)},319:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(320),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},320:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new p(n||[]);return a._invoke=s(t,r,c),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,o,i,a){var c=n(t[r],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(t,e,r){var o=k;return function(i,a){if(o===O)throw new Error("Generator is already running");if(o===R){if("throw"===i)throw a;return v()}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=l(c,r);if(u){if(u===N)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===k)throw o=R,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=O;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?R:j,s.arg===N)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=R,r.method="throw",r.arg=s.arg)}}}function l(t,e){var r=t.iterator[e.method];if(r===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,l(t,e),"throw"===e.method))return N;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return N}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,N;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,N):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,N)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function d(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:y,done:!0}}var y,g=Object.prototype,m=g.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",b=w.asyncIterator||"@@asyncIterator",_=w.toStringTag||"@@toStringTag",L="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(L&&(t.exports=E));E=e.regeneratorRuntime=L?t.exports:{},E.wrap=r;var k="suspendedStart",j="suspendedYield",O="executing",R="completed",N={},P={};P[x]=function(){return this};var F=Object.getPrototypeOf,G=F&&F(F(d([])));G&&G!==g&&m.call(G,x)&&(P=G);var I=a.prototype=o.prototype=Object.create(P);i.prototype=I.constructor=a,a.constructor=i,a[_]=i.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(I),t},E.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[b]=function(){return this},E.AsyncIterator=u,E.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return E.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(I),I[_]="Generator",I[x]=function(){return this},I.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},E.values=d,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,N):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),N},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),N}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:d(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),N}}}(function(){return this}()||Function("return this")())},325:function(t,e,r){t.exports=r.p+"static/img/home_banner_1@2x.522a743.png"},361:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(314),o=r.n(n),i=r(312),a=r.n(i),c=r(44),u=r.n(c),s=r(28);e.default={name:"demo",data:function(){return{demo:"this is a demo page"}},methods:u()({},r.i(s.b)(["setUserInfo"])),created:function(){function t(t){return{name:"await func"}}var e=function(){var e=a()(o.a.mark(function e(){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(30);case 2:r=e.sent,r.name?console.log(r.name):console.log(r);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();console.log(this.$store.state),console.log(this.userInfo),e(),console.log(123)},computed:r.i(s.c)({userInfo:function(t){return t.common.userInfo}})}},395:function(t,e,r){e=t.exports=r(248)(!1),e.push([t.i,"h3[data-v-2e29d184]{font-size:18px;font-weight:400}button[data-v-2e29d184]{width:.5rem}ul[data-v-2e29d184]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:30px;height:10rem;overflow-y:scroll;-webkit-align-content:flex-start;align-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}ul li[data-v-2e29d184]{width:45%;font-size:14px;margin-bottom:20px}ul li img[data-v-2e29d184]{width:100%;margin-top:15px}",""])},431:function(t,e,r){var n=r(395);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(249)("d8a29c32",n,!0,{})},606:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"demo"},[r("h3",[t._v(t._s(t.demo))]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list"},[n("li",[n("img",{attrs:{src:r(325),alt:""}}),t._v(" "),n("p",[t._v("hello")])]),t._v(" "),n("li",[n("img",{attrs:{src:r(325),alt:""}}),t._v(" "),n("p",[t._v("hello")])]),t._v(" "),n("li",[n("img",{attrs:{src:r(325),alt:""}}),t._v(" "),n("p",[t._v("hello")])])])}]}}});