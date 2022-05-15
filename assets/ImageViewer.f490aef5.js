var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,i=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&l(e,t,a[t]);if(n)for(var t of n(a))s.call(a,t)&&l(e,t,a[t]);return e},r=(e,n)=>a(e,t(n));import{_ as u}from"./ContentWrap.28735b19.js";import{bA as c,d,ai as f,o as m,c as p,e as v,H as g,I as b,bS as w,R as h,bt as x,m as k,bT as y,J as z,aD as O,q as C,C as j,B as I,v as _,g as V,w as L,n as T,a as M,as as A,X as B,Q as N,aP as D,Z as E,Y as R,a8 as H,aA as P,aL as S,$ as X,E as Y,h as F,bu as $,_ as W,bK as Z,F as q,a0 as G,a6 as J,W as K,bU as Q,bN as U,k as ee,x as ae,t as te}from"./index.aa2d114b.js";import{m as ne}from"./typescript2.c4bd19fd.js";import{i as oe}from"./browser2.f07dd78b.js";import{u as se}from"./index2.045d794e.js";import{a as le}from"./arrow-left.0c0b3b22.js";import{a as ie}from"./arrow-right.6b894432.js";import{d as re}from"./debounce.aee81f8a.js";import{E as ue}from"./el-button.92c2e8f8.js";import"./el-card.b344c6df.js";import"./el-popper.a6ed9fdc.js";import"./index2.3a12b7ca.js";import"./index2.d89ab46e.js";import"./index2.51b4d2a5.js";function ce(e,a,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return c(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),re(e,a,{leading:n,maxWait:a,trailing:o})}const de=d({name:"FullScreen"}),fe={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},me=[v("path",{fill:"currentColor",d:"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"},null,-1)];var pe=f(de,[["render",function(e,a,t,n,o,s){return m(),p("svg",fe,me)}]]);const ve=d({name:"RefreshLeft"}),ge={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},be=[v("path",{fill:"currentColor",d:"M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"},null,-1)];var we=f(ve,[["render",function(e,a,t,n,o,s){return m(),p("svg",ge,be)}]]);const he=d({name:"RefreshRight"}),xe={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ke=[v("path",{fill:"currentColor",d:"M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"},null,-1)];var ye=f(he,[["render",function(e,a,t,n,o,s){return m(),p("svg",xe,ke)}]]);const ze=d({name:"ScaleToOriginal"}),Oe={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ce=[v("path",{fill:"currentColor",d:"M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"},null,-1)];var je=f(ze,[["render",function(e,a,t,n,o,s){return m(),p("svg",Oe,Ce)}]]);const Ie=d({name:"ZoomIn"}),_e={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ve=[v("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"},null,-1)];var Le=f(Ie,[["render",function(e,a,t,n,o,s){return m(),p("svg",_e,Ve)}]]);const Te=d({name:"ZoomOut"}),Me={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ae=[v("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"},null,-1)];var Be=f(Te,[["render",function(e,a,t,n,o,s){return m(),p("svg",Me,Ae)}]]);const Ne=g({urlList:{type:b(Array),default:()=>ne([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),De=["src"];const Ee=G(W(d(r(i({},{name:"ElImageViewer"}),{props:Ne,emits:{close:()=>!0,switch:e=>"number"==typeof e},setup(e,{emit:a}){const t=e,n={CONTAIN:{name:"contain",icon:w(pe)},ORIGINAL:{name:"original",icon:w(je)}},o=oe()?"DOMMouseScroll":"mousewheel",{t:s}=se(),l=h("image-viewer"),{nextZIndex:u}=x(),c=k(),d=k([]),f=y(),g=k(!0),b=k(t.initialIndex),W=k(n.CONTAIN),G=k({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),J=z((()=>{const{urlList:e}=t;return e.length<=1})),K=z((()=>0===b.value)),Q=z((()=>b.value===t.urlList.length-1)),U=z((()=>t.urlList[b.value])),ee=z((()=>{const{scale:e,deg:a,offsetX:t,offsetY:o,enableTransition:s}=G.value;let l=t/e,i=o/e;switch(a%360){case 90:case-270:[l,i]=[i,-l];break;case 180:case-180:[l,i]=[-l,-i];break;case 270:case-90:[l,i]=[-i,l]}const r={transform:`scale(${e}) rotate(${a}deg) translate(${l}px, ${i}px)`,transition:s?"transform .3s":""};return W.value.name===n.CONTAIN.name&&(r.maxWidth=r.maxHeight="100%"),r})),ae=z((()=>O(t.zIndex)?t.zIndex:u()));function te(){f.stop(),a("close")}function ne(){g.value=!1}function re(e){g.value=!1,e.target.alt=s("el.image.error")}function ue(e){if(g.value||0!==e.button||!c.value)return;G.value.enableTransition=!1;const{offsetX:a,offsetY:t}=G.value,n=e.pageX,o=e.pageY,s=ce((e=>{G.value=r(i({},G.value),{offsetX:a+e.pageX-n,offsetY:t+e.pageY-o})})),l=Z(document,"mousemove",s);Z(document,"mouseup",(()=>{l()})),e.preventDefault()}function de(){G.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function fe(){if(g.value)return;const e=Object.keys(n),a=Object.values(n),t=W.value.name,o=(a.findIndex((e=>e.name===t))+1)%e.length;W.value=n[e[o]],de()}function me(){if(K.value&&!t.infinite)return;const e=t.urlList.length;b.value=(b.value-1+e)%e}function ve(){if(Q.value&&!t.infinite)return;const e=t.urlList.length;b.value=(b.value+1)%e}function ge(e,a={}){if(g.value)return;const{zoomRate:t,rotateDeg:n,enableTransition:o}=i({zoomRate:1.4,rotateDeg:90,enableTransition:!0},a);switch(e){case"zoomOut":G.value.scale>.2&&(G.value.scale=Number.parseFloat((G.value.scale/t).toFixed(3)));break;case"zoomIn":G.value.scale<7&&(G.value.scale=Number.parseFloat((G.value.scale*t).toFixed(3)));break;case"clockwise":G.value.deg+=n;break;case"anticlockwise":G.value.deg-=n}G.value.enableTransition=o}return C(U,(()=>{j((()=>{const e=d.value[0];(null==e?void 0:e.complete)||(g.value=!0)}))})),C(b,(e=>{de(),a("switch",e)})),I((()=>{var e,a;!function(){const e=ce((e=>{switch(e.code){case q.esc:t.closeOnPressEscape&&te();break;case q.space:fe();break;case q.left:me();break;case q.up:ge("zoomIn");break;case q.right:ve();break;case q.down:ge("zoomOut")}})),a=ce((e=>{ge((e.wheelDelta?e.wheelDelta:-e.detail)>0?"zoomIn":"zoomOut",{zoomRate:1.2,enableTransition:!1})}));f.run((()=>{Z(document,"keydown",e),Z(document,o,a)}))}(),null==(a=null==(e=c.value)?void 0:e.focus)||a.call(e)})),(e,a)=>(m(),_($,{to:"body",disabled:!e.teleported},[V(F,{name:"viewer-fade",appear:""},{default:L((()=>[v("div",{ref_key:"wrapper",ref:c,tabindex:-1,class:T(M(l).e("wrapper")),style:X({zIndex:M(ae)})},[v("div",{class:T(M(l).e("mask")),onClick:a[0]||(a[0]=A((a=>e.hideOnClickModal&&te()),["self"]))},null,2),B(" CLOSE "),v("span",{class:T([M(l).e("btn"),M(l).e("close")]),onClick:te},[V(M(N),null,{default:L((()=>[V(M(D))])),_:1})],2),B(" ARROW "),M(J)?B("v-if",!0):(m(),p(E,{key:0},[v("span",{class:T([M(l).e("btn"),M(l).e("prev"),M(l).is("disabled",!e.infinite&&M(K))]),onClick:me},[V(M(N),null,{default:L((()=>[V(M(le))])),_:1})],2),v("span",{class:T([M(l).e("btn"),M(l).e("next"),M(l).is("disabled",!e.infinite&&M(Q))]),onClick:ve},[V(M(N),null,{default:L((()=>[V(M(ie))])),_:1})],2)],64)),B(" ACTIONS "),v("div",{class:T([M(l).e("btn"),M(l).e("actions")])},[v("div",{class:T(M(l).e("actions__inner"))},[V(M(N),{onClick:a[1]||(a[1]=e=>ge("zoomOut"))},{default:L((()=>[V(M(Be))])),_:1}),V(M(N),{onClick:a[2]||(a[2]=e=>ge("zoomIn"))},{default:L((()=>[V(M(Le))])),_:1}),v("i",{class:T(M(l).e("actions__divider"))},null,2),V(M(N),{onClick:fe},{default:L((()=>[(m(),_(R(W.value.icon)))])),_:1}),v("i",{class:T(M(l).e("actions__divider"))},null,2),V(M(N),{onClick:a[3]||(a[3]=e=>ge("anticlockwise"))},{default:L((()=>[V(M(we))])),_:1}),V(M(N),{onClick:a[4]||(a[4]=e=>ge("clockwise"))},{default:L((()=>[V(M(ye))])),_:1})],2)],2),B(" CANVAS "),v("div",{class:T(M(l).e("canvas"))},[(m(!0),p(E,null,H(e.urlList,((e,a)=>P((m(),p("img",{ref_for:!0,ref:e=>d.value[a]=e,key:e,src:e,style:X(M(ee)),class:T(M(l).e("img")),onLoad:ne,onError:re,onMousedown:ue},null,46,De)),[[S,a===b.value]]))),128))],2),Y(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]));const Re=d({props:{urlList:{type:Array,default:()=>[]},zIndex:J.number.def(200),initialIndex:J.number.def(0),infinite:J.bool.def(!0),hideOnClickModal:J.bool.def(!1),appendToBody:J.bool.def(!1),show:J.bool.def(!1)},setup(e){const a=e,t=z((()=>{const e=i({},a);return delete e.show,e})),n=k(a.show),o=()=>{n.value=!1};return(e,a)=>n.value?(m(),_(M(Ee),K({key:0},M(t),{onClose:o}),null,16)):B("v-if",!0)}});let He=null;const Pe=d({setup(e){const{t:a}=ee(),t=()=>{!function(e){if(!Q)return;const{urlList:a,initialIndex:t=0,infinite:n=!0,hideOnClickModal:o=!1,appendToBody:s=!1,zIndex:l=2e3,show:i=!0}=e,r={},u=document.createElement("div");r.urlList=a,r.initialIndex=t,r.infinite=n,r.hideOnClickModal=o,r.appendToBody=s,r.zIndex=l,r.show=i,document.body.appendChild(u),He=V(Re,r),U(He,u)}({urlList:["https://img1.baidu.com/it/u=657828739,1486746195&fm=26&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=3114228356,677481409&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=508846955,3814747122&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=3536647690,3616605490&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=4087287201,1148061266&fm=26&fmt=auto&gp=0.jpg","https://img2.baidu.com/it/u=3429163260,2974496379&fm=26&fmt=auto&gp=0.jpg"]})};return(e,n)=>(m(),_(M(u),{title:M(a)("imageViewerDemo.imageViewer"),message:M(a)("imageViewerDemo.imageViewerDes")},{default:L((()=>[V(M(ue),{type:"primary",onClick:t},{default:L((()=>[ae(te(M(a)("imageViewerDemo.open")),1)])),_:1})])),_:1},8,["title","message"]))}});export{Pe as default};
