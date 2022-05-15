var e=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(s,o,l)=>o in s?e(s,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[o]=l,n=(e,s)=>{for(var o in s||(s={}))a.call(s,o)&&r(e,o,s[o]);if(l)for(var o of l(s))t.call(s,o)&&r(e,o,s[o]);return e},i=(e,l)=>s(e,o(l));import{d as c,G as d,o as f,c as u,e as m,E as p,n as g,a as b,t as v,X as y,g as h,w as x,v as k,Y as C,Q as w,$,as as _,_ as j,bV as O,R as E,m as H,A as L,J as M,aA as R,aL as A,V as I,h as P,bu as z,a0 as D,a6 as B,aU as S,an as V,by as T,q,s as G,W as J,x as K,P as N,C as Q}from"./index.aa2d114b.js";import{d as U,u as W,E as X}from"./el-overlay.be1d10cf.js";import{d as Y,a as F,b as Z,c as ee,u as se}from"./use-dialog2.72f8fbb3.js";const oe=Symbol("dialogInjectionKey"),le=["aria-label"];var ae=j(c(i(n({},{name:"ElDialogContent"}),{props:Y,emits:F,setup(e){const{Close:s}=O,{dialogRef:o,headerRef:l,ns:a,style:t}=d(oe);return(e,r)=>(f(),u("div",{ref_key:"dialogRef",ref:o,class:g([b(a).b(),b(a).is("fullscreen",e.fullscreen),b(a).is("draggable",e.draggable),{[b(a).m("center")]:e.center},e.customClass]),"aria-modal":"true",role:"dialog","aria-label":e.title||"dialog",style:$(b(t)),onClick:r[1]||(r[1]=_((()=>{}),["stop"]))},[m("div",{ref_key:"headerRef",ref:l,class:g(b(a).e("header"))},[p(e.$slots,"title",{},(()=>[m("span",{class:g(b(a).e("title"))},v(e.title),3)]))],2),m("div",{class:g(b(a).e("body"))},[p(e.$slots,"default")],2),e.$slots.footer?(f(),u("div",{key:0,class:g(b(a).e("footer"))},[p(e.$slots,"footer")],2)):y("v-if",!0),e.showClose?(f(),u("button",{key:1,"aria-label":"close",class:g(b(a).e("headerbtn")),type:"button",onClick:r[0]||(r[0]=s=>e.$emit("close"))},[h(b(w),{class:g(b(a).e("close"))},{default:x((()=>[(f(),k(C(e.closeIcon||b(s))))])),_:1},8,["class"])],2)):y("v-if",!0)],14,le))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const te=D(j(c(i(n({},{name:"ElDialog"}),{props:Z,emits:ee,setup(e,{expose:s}){const o=e,l=E("dialog"),a=H(),t=H(),{visible:r,style:n,rendered:i,zIndex:c,afterEnter:d,afterLeave:u,beforeLeave:v,handleClose:C,onModalClick:w}=se(o,a);L(oe,{dialogRef:a,headerRef:t,ns:l,rendered:i,style:n});const _=U(w),j=M((()=>o.draggable&&!o.fullscreen));return W(a,t,j),s({visible:r}),(e,s)=>(f(),k(z,{to:"body",disabled:!e.appendToBody},[h(P,{name:"dialog-fade",onAfterEnter:b(d),onAfterLeave:b(u),onBeforeLeave:b(v)},{default:x((()=>[R(h(b(X),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":b(c)},{default:x((()=>[m("div",{class:g(`${b(l).namespace.value}-overlay-dialog`),onClick:s[0]||(s[0]=(...e)=>b(_).onClick&&b(_).onClick(...e)),onMousedown:s[1]||(s[1]=(...e)=>b(_).onMousedown&&b(_).onMousedown(...e)),onMouseup:s[2]||(s[2]=(...e)=>b(_).onMouseup&&b(_).onMouseup(...e))},[b(i)?(f(),k(ae,{key:0,"custom-class":e.customClass,center:e.center,"close-icon":e.closeIcon,draggable:b(j),fullscreen:e.fullscreen,"show-close":e.showClose,style:$(b(n)),title:e.title,onClose:b(C)},I({title:x((()=>[p(e.$slots,"title")])),default:x((()=>[p(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:x((()=>[p(e.$slots,"footer")]))}:void 0]),1032,["custom-class","center","close-icon","draggable","fullscreen","show-close","style","title","onClose"])):y("v-if",!0)],34)])),_:3},8,["mask","overlay-class","z-index"]),[[A,b(r)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]));const re={class:"flex justify-between"},ne=c({props:{modelValue:B.bool.def(!1),title:B.string.def("Dialog"),fullscreen:B.bool.def(!0),maxHeight:B.oneOfType([String,Number]).def("500px")},setup(e){const s=e,o=S(),l=M((()=>{const e=["fullscreen","title","maxHeight"],o=V(),l=n(n({},o),s);for(const s in l)-1!==e.indexOf(s)&&delete l[s];return l})),a=H(!1),t=()=>{a.value=!b(a)},r=H(T(s.maxHeight)?`${s.maxHeight}px`:s.maxHeight);q((()=>a.value),(async e=>{if(await Q(),e){const e=document.documentElement.offsetHeight;r.value=e-55-60-(o.footer?63:0)+"px"}else r.value=T(s.maxHeight)?`${s.maxHeight}px`:s.maxHeight}),{immediate:!0});const i=M((()=>({height:b(r)})));return(s,r)=>{const n=G("Icon");return f(),k(b(te),J(b(l),{fullscreen:a.value,"destroy-on-close":"","lock-scroll":"",draggable:"","close-on-click-modal":!1}),I({title:x((()=>[m("div",re,[p(s.$slots,"title",{},(()=>[K(v(e.title),1)])),e.fullscreen?(f(),k(n,{key:0,class:"mr-18px cursor-pointer is-hover mt-2px",icon:a.value?"zmdi:fullscreen-exit":"zmdi:fullscreen",color:"var(--el-color-info)",onClick:t},null,8,["icon"])):y("v-if",!0)])])),default:x((()=>[h(b(N),{style:$(b(i))},{default:x((()=>[p(s.$slots,"default")])),_:3},8,["style"])])),_:2},[b(o).footer?{name:"footer",fn:x((()=>[p(s.$slots,"footer")]))}:void 0]),1040,["fullscreen"])}}});export{ne as _};
