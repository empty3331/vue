(function(e){function t(t){for(var c,a,i=t[0],l=t[1],s=t[2],b=0,f=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(c=!1)}c&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},o={app:0},r=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"144e":function(e,t,n){"use strict";n("82d2")},4338:function(e,t,n){"use strict";n("bd79")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=n("cf05"),r=n.n(o),a={class:"header"},i={class:"header-button-left"},l={class:"header-button-right"},s={class:"footer"},u={class:"footer-button-plus"},b=Object(c["f"])("label",{for:"file",class:"input-plus"},"+",-1);function f(e,t,n,o,f,p){var d=Object(c["n"])("Container");return Object(c["i"])(),Object(c["c"])(c["a"],null,[Object(c["f"])("div",a,[Object(c["f"])("ul",i,[Object(c["f"])("li",{onClick:t[1]||(t[1]=function(e){return f.step=0})},"Cancel")]),Object(c["f"])("ul",l,[1==f.step?(Object(c["i"])(),Object(c["c"])("li",{key:0,onClick:t[2]||(t[2]=function(e){return f.step++})},"Next")):Object(c["d"])("",!0),2==f.step?(Object(c["i"])(),Object(c["c"])("li",{key:1,onClick:t[3]||(t[3]=function(){return p.publish&&p.publish.apply(p,arguments)})},"발행")):Object(c["d"])("",!0)]),Object(c["f"])("img",{src:r.a,onClick:t[4]||(t[4]=function(e){return f.step=0}),class:"logo"})]),Object(c["f"])("button",{onClick:t[5]||(t[5]=function(e){return f.step=3})},"follower"),Object(c["f"])(d,{onWrite:t[6]||(t[6]=function(e){return f.plus=e}),step:f.step,b:f.b,c:f.c},null,8,["step","b","c"]),0==f.step?(Object(c["i"])(),Object(c["c"])("button",{key:0,onClick:t[7]||(t[7]=function(t){return e.$store.dispatch("getData")})},"더보기")):Object(c["d"])("",!0),Object(c["f"])("div",s,[Object(c["f"])("ul",u,[Object(c["f"])("input",{onChange:t[8]||(t[8]=function(){return p.upload&&p.upload.apply(p,arguments)}),type:"file",id:"file",class:"inputfile"},null,32),b])])],64)}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d");var p={key:0},d={key:1},j={class:"filters"},O={key:2},m={class:"write"},g={key:3};function h(e,t,n,o,r,a){var i=Object(c["n"])("Post"),l=Object(c["n"])("FilterBox"),s=Object(c["n"])("MyPage");return Object(c["i"])(),Object(c["c"])("div",null,[0==n.step?(Object(c["i"])(),Object(c["c"])("div",p,[(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(a.pData,(function(e,t){return Object(c["i"])(),Object(c["c"])(i,{key:t,a:e,num:t},null,8,["a","num"])})),128))])):Object(c["d"])("",!0),1==n.step?(Object(c["i"])(),Object(c["c"])("div",d,[Object(c["f"])("div",{class:n.c+" upload-image",style:{backgroundImage:"url(".concat(n.b,")")}},null,6),Object(c["f"])("div",j,[(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(a.pFilter,(function(e,t){return Object(c["i"])(),Object(c["c"])(l,{b:n.b,key:t,c:e},{default:Object(c["q"])((function(){return[Object(c["e"])(Object(c["o"])(e),1)]})),_:2},1032,["b","c"])})),128))])])):Object(c["d"])("",!0),2==n.step?(Object(c["i"])(),Object(c["c"])("div",O,[Object(c["f"])("div",{class:n.c+" upload-image",style:{backgroundImage:"url(".concat(n.b,")")}},null,6),Object(c["f"])("div",m,[Object(c["f"])("textarea",{onInput:t[1]||(t[1]=function(t){return e.$emit("write",t.target.value)}),class:"write-box"},"write!",32)])])):Object(c["d"])("",!0),3==n.step?(Object(c["i"])(),Object(c["c"])("div",g,[Object(c["f"])(s)])):Object(c["d"])("",!0)])}var v=n("5530"),k=(n("a9e3"),n("4de4"),n("b0c0"),{class:"post"}),y={class:"post-header"},w={class:"profile-name"},C={class:"post-content"},I={class:"date"};function x(e,t,n,o,r,a){return Object(c["i"])(),Object(c["c"])("div",k,[Object(c["f"])("div",y,[Object(c["f"])("div",{class:"profile",style:{backgroundImage:"url(".concat(n.a.userImage,")")}},null,4),Object(c["f"])("span",w,Object(c["o"])(n.a.name),1)]),Object(c["f"])("div",{onClick:t[1]||(t[1]=function(t){return e.likeB(n.num)}),class:n.a.filter+" post-body",style:{backgroundImage:"url(".concat(n.a.postImage,")")}},null,6),Object(c["f"])("div",C,[Object(c["f"])("p",null,Object(c["o"])(n.a.likes)+" Likes",1),Object(c["f"])("p",null,[Object(c["f"])("strong",null,Object(c["o"])(n.a.name),1),Object(c["e"])(" "+Object(c["o"])(n.a.content),1)]),Object(c["f"])("p",I,Object(c["o"])(n.a.date),1)])])}var P=n("5502"),D={props:{a:Object,num:Number},methods:Object(v["a"])({},Object(P["b"])(["likeB"]))};n("655e");D.render=x;var S=D;function M(e,t,n,o,r,a){return Object(c["i"])(),Object(c["c"])("div",{class:n.c+" filter-item",style:{backgroundImage:"url(".concat(n.b,")")},onClick:t[1]||(t[1]=function(){return a.fire&&a.fire.apply(a,arguments)})},[Object(c["m"])(e.$slots,"default")],6)}var _={name:"filterBox",props:{b:String,c:String},methods:{fire:function(){this.emitter.emit("filterP",this.c)}}};n("144e");_.render=M;var A=_,B=(n("ac1f"),n("841c"),{style:{padding:"10px"}}),F=Object(c["f"])("h4",null,"팔로워",-1),N={class:"profile-name"};function $(e,t,n,o,r,a){return Object(c["i"])(),Object(c["c"])("div",B,[F,Object(c["f"])("input",{placeholder:"🔍",onInput:t[1]||(t[1]=function(e){return o.search(e.target.value)})},null,32),(Object(c["i"])(!0),Object(c["c"])(c["a"],null,Object(c["l"])(o.follower,(function(e){return Object(c["i"])(),Object(c["c"])("div",{class:"post-header",key:e},[Object(c["f"])("div",{class:"profile",style:{backgroundImage:"url(".concat(e.image,")")}},null,4),Object(c["f"])("span",N,Object(c["o"])(e.name),1)])})),128))])}var J=n("2909"),L=n("bc3a"),q=n.n(L),K={name:"mypage",setup:function(){var e=Object(c["k"])([]),t=Object(c["k"])([]);function n(n){var c=t.value.filter((function(e){return-1!=e.name.indexOf(n)}));e.value=Object(J["a"])(c)}return Object(c["h"])((function(){q.a.get("/follower.json").then((function(n){e.value=n.data,t.value=Object(J["a"])(n.data)}))})),{follower:e,search:n}}};K.render=$;var R=K,T=Object(v["a"])({components:{Post:S,FilterBox:A,MyPage:R},props:{data:Array,step:Number,b:String,c:String},computed:{pData:function(){return this.$store.state.postData},pFilter:function(){return this.$store.state.filter}}},Object(P["c"])(["pData","pFilter"]));n("4338");T.render=h;var U=T,E={name:"App",data:function(){return{moreC:0,step:0,b:"",plus:"",c:"",counter:0}},mounted:function(){var e=this;this.emitter.on("filterP",(function(t){e.c=t}))},components:{Container:U},methods:{publish:function(){var e={name:"Kim kimkim",userImage:"https://placeimg.com/100/100/arch",postImage:this.b,likes:0,date:new Date,liked:!1,content:this.plus,filter:this.c};this.$store.state.postData.unshift(e),this.step=0},upload:function(e){var t=e.target.files;this.b=URL.createObjectURL(t[0]),this.step=1}}};n("e615");E.render=f;var H=E,W=n("2106"),z=n.n(W),G=n("14b7"),Q=Object(P["a"])({state:function(){return{postData:[{name:"Kim Hyun",userImage:"https://placeimg.com/100/100/arch",postImage:"https://placeimg.com/640/480/arch",likes:36,date:"May 15",liked:!1,content:"오늘 무엇을 했냐면요 아무것도 안했어요 😫",filter:"perpetua"},{name:"John Doe",userImage:"https://placeimg.com/200/200/people",postImage:"https://placeimg.com/640/480/people",likes:20,date:"Apr 20",liked:!1,content:"흔한 자랑스타그램",filter:"clarendon"},{name:"Minny",userImage:"https://placeimg.com/100/100/animals",postImage:"https://placeimg.com/640/480/animals",likes:49,date:"Apr 4",liked:!1,content:"우리집 개는 화장실 물도 내림",filter:"lofi"}],filter:["aden","_1977","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster","valencia","walden","willow","xpro2"],clickCh:!1,more:{},moreC:0}},mutations:{likeB:function(e,t){0==e.clickCh?(e.postData[t].likes++,e.clickCh=!0):(e.postData[t].likes--,e.clickCh=!1)}},actions:{getData:function(){q.a.get("https://codingapple1.github.io/vue/more".concat(Q.state.moreC,".json")).then((function(e){console.log(e),Q.state.postData.push(e.data),Q.state.moreC++}))}}}),V=Q,X=n("9483");Object(X["a"])("".concat("/vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Y=Object(G["a"])(),Z=Object(c["b"])(H);Z.config.globalProperties.emitter=Y,Z.use(z.a,q.a),Z.use(V),Z.mount("#app")},"655e":function(e,t,n){"use strict";n("df7a")},"82d2":function(e,t,n){},bd79:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},df7a:function(e,t,n){},e44f:function(e,t,n){},e615:function(e,t,n){"use strict";n("e44f")}});
//# sourceMappingURL=app.7edfa080.js.map