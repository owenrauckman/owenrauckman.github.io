(function(t){function e(e){for(var i,s,a=e[0],c=e[1],l=e[2],u=0,d=[];u<a.length;u++)s=a[u],o[s]&&d.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);_&&_(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function s(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5d688836"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=o[t]=[e,i]});e.push(n[2]=i);var r,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=s(t),r=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,n[1](s)}o[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,c.appendChild(l)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var _=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2856:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=n("0ff2"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"container"},t._l(t.items,function(e,i){return t.activeItems.includes(i)?n("div",{key:e.key,class:["item",{active:e.isActive}],attrs:{id:"js__item--"+e.id}},[n("div",{staticClass:"item__content item__content--active",attrs:{id:"js__item__content--"+e.id}},[n("div",{staticClass:"item__content__top"},[n("div",{staticClass:"item__content__top--flexy"},[n("div",{staticClass:"item__content__high"},[n("div",{staticClass:"item__content__button",on:{click:function(n){t.toggleBid(e)}}},[t._v("Bid Now")]),n("div",{staticStyle:{display:"flex"}},[n("svg",{staticClass:"item__content__high__icon",attrs:{viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"}},[n("path",{attrs:{d:"M41.9 15.159H34.84a1.969 1.969 0 0 1 0-3.937h11.81c1.086 0 1.968.882 1.968 1.968V25a1.969 1.969 0 0 1-3.936 0v-7.058L29.343 33.28c-.767.77-2.015.77-2.782 0l-8.45-8.45-13.37 13.371c-.768.77-2.016.77-2.783 0a1.966 1.966 0 0 1 0-2.783L16.72 20.656a1.966 1.966 0 0 1 2.783 0l8.45 8.45 13.946-13.947z",fill:"#00cea6","fill-rule":"nonzero"}})]),n("div",{staticClass:"item__content__high__number"},[t._v("$"+t._s(e.currentBid))])])])]),n("div",{staticClass:"item__content__high__bidder"},[t._v("#"+t._s(e.highBidder))])]),n("div",{staticClass:"item__content__middle"},[n("div",{staticClass:"item__content__title"},[t._v(t._s(e.name))]),n("div",{staticClass:"item__content__description"},[t._v(t._s(e.description))])])]),n("div",{staticClass:"item__content__bid",attrs:{id:"js__item__bid--"+e.id}},[n("div",{staticClass:"item__content__bid__title"},[t._v(t._s(e.name)+" "),n("span",{staticStyle:{color:"#7934F7",cursor:"pointer"},on:{click:function(n){t.closeItem(e)}}},[t._v("[x]")])]),n("div",{staticClass:"item__content__bid__box"},[n("span",{staticClass:"item__content__bid__box__bid-label"},[t._v("Bidder Number")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentBidder,expression:"currentBidder"}],staticClass:"item__content__bid__box__bid-input",attrs:{placeholder:"00"},domProps:{value:t.currentBidder},on:{input:function(e){e.target.composing||(t.currentBidder=e.target.value)}}})]),n("div",{staticClass:"item__content__bid__box"},[n("span",{staticClass:"item__content__bid__box__bid-label"},[t._v("Bid Amount")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentBid,expression:"item.currentBid"}],staticClass:"item__content__bid__box__bid-input",attrs:{placeholder:e.currentBid},domProps:{value:e.currentBid},on:{input:function(n){n.target.composing||t.$set(e,"currentBid",n.target.value)}}})]),n("div",{staticClass:"item__content__bottom"},[n("div",{staticClass:"item__content__button item__content__button--purple",on:{click:function(n){t.test(e)}}},[t._v("Place Bid")])])])]):t._e()}))])},s=[],a=n("8aa5"),c=n.n(a),l=c.a.initializeApp({projectId:"auction-e82cf",databaseURL:"https://databaseName.firebaseio.com"}),u=l.firestore();u.settings({timestampsInSnapshots:!0});for(var _=3,d=[],v=0;v<_;v+=1)d.push(v);var m={data:function(){return{items:[],activeItems:d,leftOffAt:0,numItemsPerPage:3,currentBidder:""}},mounted:function(){var t=this;this.$route.query.rotate||setInterval(function(){t.leftOffAt>t.items.length&&(t.leftOffAt=0);for(var e=t.leftOffAt+t.numItemsPerPage,n=[],i=t.leftOffAt;i<e;i+=1)n.push(i);t.leftOffAt=e,t.activeItems=n},3e3)},watch:{items:function(){var t=this;this.$route.query.rotate&&this.$nextTick(function(){for(var e=[],n=0;n<t.items.length;n+=1)e.push(n);console.log(e),t.activeItems=e})}},firestore:{items:u.collection("items").orderBy("order","asc")},methods:{closeItem:function(t){document.querySelectorAll("#js__item--".concat(t.id," .item__content__bid--active"))[0].classList.remove("item__content__bid--active"),document.querySelectorAll("#js__item--".concat(t.id," .item__content"))[0].classList.add("item__content--active")},test:function(t){return u.collection("items").doc(t.id).update({currentBid:t.currentBid,highBidder:this.currentBidder,isActive:!0}).then(function(){console.log("Document successfully updated!"),document.querySelectorAll("#js__item--".concat(t.id," .item__content__bid--active"))[0].classList.remove("item__content__bid--active"),document.querySelectorAll("#js__item--".concat(t.id," .item__content"))[0].classList.add("item__content--active"),setTimeout(function(){u.collection("items").doc(t.id).update({isActive:!1}).then(function(){console.log("Active successfully removed")}).catch(function(t){console.log("error removing active class...",t)})},7e3)}).catch(function(t){console.error("Error updating document: ",t)})},toggleBid:function(t){document.querySelectorAll("#js__item--".concat(t.id," .item__content--active"))[0].classList.remove("item__content--active"),document.querySelectorAll("#js__item--".concat(t.id," .item__content__bid"))[0].classList.add("item__content__bid--active")}}},f=m,p=(n("5c0b"),n("2877")),h=Object(p["a"])(f,r,s,!1,null,null,null);h.options.__file="App.vue";var b=h.exports,g=n("8c4f"),j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},y=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],C={name:"HelloWorld",props:{msg:String}},x=C,B=(n("9aed"),Object(p["a"])(x,w,k,!1,null,"034899a7",null));B.options.__file="HelloWorld.vue";var A=B.exports,O={name:"home",components:{HelloWorld:A}},P=O,S=Object(p["a"])(P,j,y,!1,null,null,null);S.options.__file="Home.vue";var E=S.exports;i["a"].use(g["a"]);var I=new g["a"]({routes:[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),$=n("2f62");i["a"].use($["a"]);var L=new $["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,i["a"].use(o["a"]),new i["a"]({router:I,store:L,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("2856"),o=n.n(i);o.a},"9aed":function(t,e,n){"use strict";var i=n("a167"),o=n.n(i);o.a},a167:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1ecae8ba.js.map