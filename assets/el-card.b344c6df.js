var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,r,s)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s;import{H as d,I as n,d as c,R as p,o as i,c as y,n as b,a as u,E as f,x as h,t as m,X as v,e as O,$ as w,_ as j,a0 as g}from"./index.aa2d114b.js";const S=d({header:{type:String,default:""},bodyStyle:{type:n([String,Object,Array]),default:""},shadow:{type:String,default:"always"}}),P=c(($=((e,a)=>{for(var r in a||(a={}))t.call(a,r)&&l(e,r,a[r]);if(s)for(var r of s(a))o.call(a,r)&&l(e,r,a[r]);return e})({},{name:"ElCard"}),a($,r({props:S,setup(e){const a=p("card");return(e,r)=>(i(),y("div",{class:b([u(a).b(),u(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(i(),y("div",{key:0,class:b(u(a).e("header"))},[f(e.$slots,"header",{},(()=>[h(m(e.header),1)]))],2)):v("v-if",!0),O("div",{class:b(u(a).e("body")),style:w(e.bodyStyle)},[f(e.$slots,"default")],6)],2))}}))));var $;const E=g(j(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{E};
