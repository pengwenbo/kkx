(function(e){function t(t){for(var r,a,s=t[0],i=t[1],c=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({page1:"page1",page2:"page2"}[e]||e)+"."+{page1:"cc9f85d2",page2:"8fa6476c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={page1:1,page2:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({page1:"page1",page2:"page2"}[e]||e)+"."+{page1:"075ff158",page2:"98017dd2"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07a6":function(e,t,n){e.exports=n.p+"img/login.53277621.png"},"0fda":function(e,t,n){},2395:function(e,t,n){},"3bca":function(e,t,n){"use strict";n("0fda")},"522b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"},on:{click:e.playbgm}},[n("router-view"),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("audio",{staticClass:"audiobox",attrs:{controls:"controls",id:"muaudio",autoplay:"autoplay"}},[r("source",{attrs:{src:n("58c2"),type:"audio/ogg"}}),r("source",{attrs:{src:n("58c2"),type:"audio/mpeg"}})])}],u={methods:{playbgm:function(){var e=document.getElementById("muaudio");e.play()}},mounted:function(){}},s=u,i=(n("7c55"),n("2877")),c=Object(i["a"])(s,a,o,!1,null,null,null),l=c.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapbox"},[r("img",{staticClass:"img",attrs:{src:n("07a6"),alt:""}}),r("div",{staticClass:"loginbox"},[r("van-form",{on:{submit:e.onSubmit}},[r("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"你人生的开始时刻",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)],1)])},f=[],m={data:function(){return{username:"kkx",password:""}},methods:{onSubmit:function(e){"kkx"===this.username&&"0219"===this.password&&this.$router.push("/home")}}},g=m,h=(n("3bca"),Object(i["a"])(g,d,f,!1,null,"2e191004",null)),v=h.exports;r["a"].use(p["a"]);var b=[{path:"/",name:"Home",component:v},{path:"/page-1",name:"page-1",component:function(){return n.e("page1").then(n.bind(null,"c06e"))}},{path:"/home",name:"/home",component:function(){return n.e("page2").then(n.bind(null,"6511"))}}],y=new p["a"]({routes:b}),w=y,x=n("2f62");r["a"].use(x["a"]);var _=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=(n("522b"),n("b970"));n("157a");r["a"].use(k["a"]),r["a"].config.productionTip=!1,new r["a"]({router:w,store:_,render:function(e){return e(l)}}).$mount("#app")},"58c2":function(e,t,n){e.exports=n.p+"media/1.33c20f72.mp3"},"7c55":function(e,t,n){"use strict";n("2395")}});
//# sourceMappingURL=app.ce23918f.js.map