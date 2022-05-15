var e=Object.defineProperty,o=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(o,n,t)=>n in o?e(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,s=(e,o)=>{for(var n in o||(o={}))r.call(o,n)&&a(e,n,o[n]);if(t)for(var n of t(o))l.call(o,n)&&a(e,n,o[n]);return e},u=(e,t)=>o(e,n(t));import{z as i,d as c,m as d,A as p,B as m,a as f,C as v,q as g,D as b,_ as w,E as h,F as y,G as E,H as I,I as C,J as _,K as F,L as k,s as T,o as O,v as R,w as S,g as L,M as P,N as M,O as x,P as D,Q as N,R as K,S as B,U as $,c as j,V as G,e as A,n as z,W as H,X as U,Y as V,Z as J,$ as Y,a0 as W,a1 as q,b as Q,j as X,a2 as Z,a3 as ee,a4 as oe,a5 as ne,a6 as te,a7 as re,a8 as le,x as ae,t as se}from"./index.aa2d114b.js";import{E as ue}from"./el-switch.d1bb61af.js";import{u as ie}from"./useIcon.f8ce5999.js";import{E as ce}from"./el-button.92c2e8f8.js";import{o as de,a as pe,c as me,u as fe,b as ve,E as ge,w as be}from"./el-popper.a6ed9fdc.js";import{u as we}from"./index2.d89ab46e.js";import{a as he}from"./arrow-down.dc4a23a8.js";import{u as ye}from"./index2.3a12b7ca.js";const Ee=(...e)=>o=>{e.forEach((e=>{i(e)?e(o):e.value=o}))},Ie=e=>{const o=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const o="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||o?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)o.push(n.currentNode);return o},Ce=(e,o)=>{for(const n of e)if(!_e(n,o))return n},_e=(e,o)=>{if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(o&&e===o)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},Fe=(e,o)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&(e=>e instanceof HTMLInputElement&&"select"in e)(e)&&o&&e.select()}};function ke(e,o){const n=[...e],t=e.indexOf(o);return-1!==t&&n.splice(t,1),n}const Te=(()=>{let e=[];return{push:o=>{const n=e[0];n&&o!==n&&n.pause(),e=ke(e,o),e.unshift(o)},remove:o=>{var n,t;e=ke(e,o),null==(t=null==(n=e[0])?void 0:n.resume)||t.call(n)}}})(),Oe={cancelable:!0,bubbles:!1},Re=Symbol("elFocusTrap");var Se=w(c({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean},emits:["mountOnFocus","unmountOnFocus"],setup(e,{emit:o}){const n=d(),t=d(null);let r,l;const a={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},s=o=>{if(!e.loop&&!e.trapped)return;if(a.paused)return;const{key:n,altKey:t,ctrlKey:r,metaKey:l,currentTarget:s,shiftKey:u}=o,{loop:i}=e,c=n===y.tab&&!t&&!r&&!l,d=document.activeElement;if(c&&d){const e=s,[n,t]=(e=>{const o=Ie(e);return[Ce(o,e),Ce(o.reverse(),e)]})(e);n&&t?u||d!==t?u&&d===n&&(o.preventDefault(),i&&Fe(t,!0)):(o.preventDefault(),i&&Fe(n,!0)):d===e&&o.preventDefault()}};p(Re,{focusTrapRef:t,onKeydown:s});const u=e=>{o("mountOnFocus",e)},i=e=>o("unmountOnFocus",e),c=e=>{const o=f(t);if(a.paused||!o)return;const n=e.target;n&&o.contains(n)?l=n:Fe(l,!0)},w=e=>{const o=f(t);!a.paused&&o&&(o.contains(e.relatedTarget)||Fe(l,!0))},h=()=>{document.removeEventListener("focusin",c),document.removeEventListener("focusout",w)};return m((()=>{const o=f(t);if(o){Te.push(a);const e=document.activeElement;r=e;if(!o.contains(e)){const n=new Event("focus-trap.focus-on-mount",Oe);o.addEventListener("focus-trap.focus-on-mount",u),o.dispatchEvent(n),n.defaultPrevented||v((()=>{((e,o=!1)=>{const n=document.activeElement;for(const t of e)if(Fe(t,o),document.activeElement!==n)return})(Ie(o),!0),document.activeElement===e&&Fe(o)}))}}g((()=>e.trapped),(e=>{e?(document.addEventListener("focusin",c),document.addEventListener("focusout",w)):h()}),{immediate:!0})})),b((()=>{h();const e=f(t);if(e){e.removeEventListener("focus-trap.focus-on-mount",u);const o=new Event("focus-trap.focus-on-unmount",Oe);e.addEventListener("focus-trap.focus-on-unmount",i),e.dispatchEvent(o),o.defaultPrevented||Fe(null!=r?r:document.body,!0),e.removeEventListener("focus-trap.focus-on-unmount",u),Te.remove(a)}})),{focusTrapRef:n,forwardRef:t,onKeydown:s}}}),[["render",function(e,o,n,t,r,l){return h(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);var Le=w(c({inheritAttrs:!1}),[["render",function(e,o,n,t,r,l){return h(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var Pe=w(c({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,o,n,t,r,l){return h(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const Me=e=>{const o=`El${e}Collection`,n=`${o}Item`,t=Symbol(o),r=Symbol(n),l=u(s({},Le),{name:o,setup(){const e=d(null),o=new Map;p(t,{itemMap:o,getItems:()=>{const n=f(e);if(!n)return[];const t=Array.from(n.querySelectorAll("[data-el-collection-item]"));return[...o.values()].sort(((e,o)=>t.indexOf(e.ref)-t.indexOf(o.ref)))},collectionRef:e})}}),a=u(s({},Pe),{name:n,setup(e,{attrs:o}){const n=d(null),l=E(t,void 0);p(r,{collectionItemRef:n}),m((()=>{const e=f(n);e&&l.itemMap.set(e,s({ref:e},o))})),b((()=>{const e=f(n);l.itemMap.delete(e)}))}});return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:r,ElCollection:l,ElCollectionItem:a}},xe=I({style:{type:C([String,Array,Object])},currentTabId:{type:C(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:C(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:De,ElCollectionItem:Ne,COLLECTION_INJECTION_KEY:Ke,COLLECTION_ITEM_INJECTION_KEY:Be}=Me("RovingFocusGroup"),$e=Symbol("elRovingFocusGroup"),je=Symbol("elRovingFocusGroupItem"),Ge={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Ae=(e,o,n)=>{const t=((e,o)=>{if("rtl"!==o)return e;switch(e){case y.right:return y.left;case y.left:return y.right;default:return e}})(e.key,n);if(!("vertical"===o&&[y.left,y.right].includes(t)||"horizontal"===o&&[y.up,y.down].includes(t)))return Ge[t]},ze=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},He={bubbles:!1,cancelable:!0},Ue=c({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:xe,emits:["currentTabIdChange","entryFocus"],setup(e,{emit:o}){var n;const t=d(null!=(n=e.currentTabId||e.defaultCurrentTabId)?n:null),r=d(!1),l=d(!1),a=d(null),{getItems:s}=E(Ke,void 0),u=_((()=>[{outline:"none"},e.style])),i=me((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{l.value=!0})),c=me((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!f(l),{target:n,currentTarget:a}=e;if(n===a&&o&&!f(r)){const e=new Event("rovingFocusGroup.entryFocus",He);if(null==a||a.dispatchEvent(e),!e.defaultPrevented){const e=s().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===f(t))),...e].filter(Boolean).map((e=>e.ref));ze(o)}}l.value=!1})),v=me((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{r.value=!1})),w=(...e)=>{o("entryFocus",...e)};p($e,{currentTabbedId:F(t),loop:k(e,"loop"),tabIndex:_((()=>f(r)?-1:0)),rovingFocusGroupRef:a,rovingFocusGroupRootStyle:u,orientation:k(e,"orientation"),dir:k(e,"dir"),onItemFocus:e=>{o("currentTabIdChange",e)},onItemShiftTab:()=>{r.value=!0},onBlur:v,onFocus:c,onMousedown:i}),g((()=>e.currentTabId),(e=>{t.value=null!=e?e:null})),m((()=>{const e=f(a);de(e,"rovingFocusGroup.entryFocus",w)})),b((()=>{const e=f(a);pe(e,"rovingFocusGroup.entryFocus",w)}))}});var Ve=w(c({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:De,ElRovingFocusGroupImpl:w(Ue,[["render",function(e,o,n,t,r,l){return h(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,o,n,t,r,l){const a=T("el-roving-focus-group-impl"),s=T("el-focus-group-collection");return O(),R(s,null,{default:S((()=>[L(a,P(M(e.$attrs)),{default:S((()=>[h(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var Je=w(c({components:{ElRovingFocusCollectionItem:Ne},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:n,loop:t,onItemFocus:r,onItemShiftTab:l}=E($e,void 0),{getItems:a}=E(Ke,void 0),s=ye(),u=d(null),i=me((e=>{o("mousedown",e)}),(o=>{e.focusable?r(f(s)):o.preventDefault()})),c=me((e=>{o("focus",e)}),(()=>{r(f(s))})),m=me((e=>{o("keydown",e)}),(e=>{const{key:o,shiftKey:n,target:r,currentTarget:s}=e;if(o===y.tab&&n)return void l();if(r!==s)return;const u=Ae(e);if(u){e.preventDefault();let o=a().filter((e=>e.focusable)).map((e=>e.ref));switch(u){case"last":o.reverse();break;case"prev":case"next":{"prev"===u&&o.reverse();const e=o.indexOf(s);o=t.value?(c=e+1,(i=o).map(((e,o)=>i[(o+c)%i.length]))):o.slice(e+1);break}}v((()=>{ze(o)}))}var i,c})),g=_((()=>n.value===f(s)));return p(je,{rovingFocusGroupItemRef:u,tabIndex:_((()=>f(g)?0:-1)),handleMousedown:i,handleFocus:c,handleKeydown:m}),{id:s,handleKeydown:m,handleFocus:c,handleMousedown:i}}}),[["render",function(e,o,n,t,r,l){const a=T("el-roving-focus-collection-item");return O(),R(a,{id:e.id,focusable:e.focusable,active:e.active},{default:S((()=>[h(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Ye=I({trigger:fe.trigger,effect:u(s({},ve.effect),{default:"light"}),type:{type:C(String)},placement:{type:C(String),default:"bottom"},popperOptions:{type:C(Object),default:()=>({})},size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:C([Number,String]),default:0},maxHeight:{type:C([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},buttonProps:{type:C(Object)}}),We=I({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:x}}),qe=I({onKeydown:{type:C(Function)}}),Qe=[y.down,y.pageDown,y.home],Xe=[y.up,y.pageUp,y.end],Ze=[...Qe,...Xe],{ElCollection:eo,ElCollectionItem:oo,COLLECTION_INJECTION_KEY:no,COLLECTION_ITEM_INJECTION_KEY:to}=Me("Dropdown"),ro=Symbol("elDropdown"),{ButtonGroup:lo}=ce;var ao=w(c({name:"ElDropdown",components:{ElButton:ce,ElFocusTrap:Se,ElButtonGroup:lo,ElScrollbar:D,ElDropdownCollection:eo,ElTooltip:ge,ElRovingFocusGroup:Ve,ElIcon:N,ArrowDown:he},props:Ye,emits:["visible-change","click","command"],setup(e,{emit:o}){const n=$(),t=K("dropdown"),r=d(),l=d(),a=d(null),s=d(null),u=d(null),i=d(null),c=d(!1),m=_((()=>({maxHeight:B(e.maxHeight)}))),v=_((()=>[t.m(b.value)]));function g(){var e;null==(e=a.value)||e.onClose()}const b=we();p(ro,{contentRef:s,isUsingKeyboard:c,onItemEnter:function(){},onItemLeave:function(){const e=f(s);null==e||e.focus(),i.value=null}}),p("elDropdown",{instance:n,dropdownSize:b,handleClick:function(){g()},commandHandler:function(...e){o("command",...e)},trigger:k(e,"trigger"),hideOnClick:k(e,"hideOnClick")});return{ns:t,scrollbar:u,wrapStyle:m,dropdownTriggerKls:v,dropdownSize:b,currentTabId:i,handleCurrentTabIdChange:function(e){i.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){c.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:g,handleOpen:function(){var e;null==(e=a.value)||e.onOpen()},onMountOnFocus:e=>{var o,n;e.preventDefault(),null==(n=null==(o=s.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:a,triggeringElementRef:r,referenceElementRef:l}}}),[["render",function(e,o,n,t,r,l){var a;const s=T("el-dropdown-collection"),u=T("el-roving-focus-group"),i=T("el-focus-trap"),c=T("el-scrollbar"),d=T("el-tooltip"),p=T("el-button"),m=T("arrow-down"),f=T("el-icon"),v=T("el-button-group");return O(),j("div",{class:z([e.ns.b(),e.ns.is("disabled",e.disabled)])},[L(d,{ref:"popperRef",effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(a=e.referenceElementRef)?void 0:a.$el,trigger:e.trigger,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:"",pure:"",persistent:"",onShow:o[0]||(o[0]=o=>e.$emit("visible-change",!0)),onHide:o[1]||(o[1]=o=>e.$emit("visible-change",!1))},G({content:S((()=>[L(c,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:S((()=>[L(i,{trapped:"",onMountOnFocus:e.onMountOnFocus},{default:S((()=>[L(u,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:S((()=>[L(s,null,{default:S((()=>[h(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["onMountOnFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:S((()=>[A("div",{class:z(e.dropdownTriggerKls)},[h(e.$slots,"default")],2)]))}]),1032,["effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","show-after","virtual-ref","virtual-triggering","disabled","transition"]),e.splitButton?(O(),R(v,{key:0},{default:S((()=>[L(p,H({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,onClick:e.handlerMainButtonClick}),{default:S((()=>[h(e.$slots,"default")])),_:3},16,["size","type","disabled","onClick"]),L(p,H({ref:"triggeringElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled}),{default:S((()=>[L(f,{class:z(e.ns.e("icon"))},{default:S((()=>[L(m)])),_:1},8,["class"])])),_:1},16,["size","type","class","disabled"])])),_:3})):U("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const so=c({name:"DropdownItemImpl",components:{ElIcon:N},props:We,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const n=K("dropdown"),{collectionItemRef:t}=E(to,void 0),{collectionItemRef:r}=E(Be,void 0),{rovingFocusGroupItemRef:l,tabIndex:a,handleFocus:s,handleKeydown:u,handleMousedown:i}=E(je,void 0);return{ns:n,itemRef:Ee(t,r,l),dataset:{"data-el-collection-item":""},tabIndex:a,handleFocus:s,handleKeydown:me((e=>{const{code:n}=e;if(n===y.enter||n===y.space)return e.preventDefault(),e.stopImmediatePropagation(),o("clickimpl",e),!0}),u),handleMousedown:i}}}),uo=["aria-disabled","tabindex"];const io=()=>{const e=E("elDropdown",{}),o=_((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var co=w(c({name:"ElDropdownItem",components:{ElDropdownCollectionItem:oo,ElRovingFocusItem:Je,ElDropdownItemImpl:w(so,[["render",function(e,o,n,t,r,l){const a=T("el-icon");return O(),j(J,null,[e.divided?(O(),j("li",H({key:0,class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):U("v-if",!0),A("li",H({ref:e.itemRef},s(s({},e.dataset),e.$attrs),{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:"menuitem",onClick:o[0]||(o[0]=o=>e.$emit("clickimpl",o)),onFocus:o[1]||(o[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:o[2]||(o[2]=(...o)=>e.handleKeydown&&e.handleKeydown(...o)),onMousedown:o[3]||(o[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:o[4]||(o[4]=o=>e.$emit("pointermove",o)),onPointerleave:o[5]||(o[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(O(),R(a,{key:0},{default:S((()=>[(O(),R(V(e.icon)))])),_:1})):U("v-if",!0),h(e.$slots,"default")],16,uo)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:We,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:n}){const{elDropdown:t}=io(),r=$(),l=d(null),a=_((()=>{var e,o;return null!=(o=null==(e=f(l))?void 0:e.textContent)?o:""})),{onItemEnter:u,onItemLeave:i}=E(ro,void 0),c=me((e=>(o("pointermove",e),e.defaultPrevented)),be((o=>{var n;e.disabled?i(o):(u(o),o.defaultPrevented||null==(n=o.currentTarget)||n.focus())}))),p=me((e=>(o("pointerleave",e),e.defaultPrevented)),be((e=>{i(e)})));return{handleClick:me((e=>(o("click",e),e.defaultPrevented)),(o=>{var n,l,a;e.disabled?o.stopImmediatePropagation():((null==(n=null==t?void 0:t.hideOnClick)?void 0:n.value)&&(null==(l=t.handleClick)||l.call(t)),null==(a=t.commandHandler)||a.call(t,e.command,r,o))})),handlePointerMove:c,handlePointerLeave:p,textContent:a,propsAndAttrs:_((()=>s(s({},e),n)))}}}),[["render",function(e,o,n,t,r,l){var a;const s=T("el-dropdown-item-impl"),u=T("el-roving-focus-item"),i=T("el-dropdown-collection-item");return O(),R(i,{disabled:e.disabled,"text-value":null!=(a=e.textValue)?a:e.textContent},{default:S((()=>[L(u,{focusable:!e.disabled},{default:S((()=>[L(s,H(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:S((()=>[h(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);var po=w(c({name:"ElDropdownMenu",props:qe,setup(e){const o=K("dropdown"),{_elDropdownSize:n}=io(),t=n.value,{focusTrapRef:r,onKeydown:l}=E(Re,void 0),{contentRef:a}=E(ro,void 0),{collectionRef:s,getItems:u}=E(no,void 0),{rovingFocusGroupRef:i,rovingFocusGroupRootStyle:c,tabIndex:d,onBlur:p,onFocus:m,onMousedown:v}=E($e,void 0),{collectionRef:g}=E(Ke,void 0),b=_((()=>[o.b("menu"),o.bm("menu",null==t?void 0:t.value)])),w=Ee(a,s,r,i,g),h=me((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:n,target:t}=e;if(o.contains(t),y.tab===n&&e.stopImmediatePropagation(),e.preventDefault(),t!==f(a))return;if(!Ze.includes(n))return;const r=u().filter((e=>!e.disabled)).map((e=>e.ref));Xe.includes(n)&&r.reverse(),ze(r)}));return{size:t,rovingFocusGroupRootStyle:c,tabIndex:d,dropdownKls:b,dropdownListWrapperRef:w,handleKeydown:e=>{h(e),l(e)},onBlur:p,onFocus:m,onMousedown:v}}}),[["render",function(e,o,n,t,r,l){return O(),j("ul",{ref:e.dropdownListWrapperRef,class:z(e.dropdownKls),style:Y(e.rovingFocusGroupRootStyle),tabindex:-1,role:"menu",onBlur:o[0]||(o[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:o[1]||(o[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:o[2]||(o[2]=(...o)=>e.handleKeydown&&e.handleKeydown(...o)),onMousedown:o[3]||(o[3]=(...o)=>e.onMousedown&&e.onMousedown(...o))},[h(e.$slots,"default")],38)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const mo=W(ao,{DropdownItem:co,DropdownMenu:po}),fo=q(co),vo=q(po),go=c({setup(e){const{getPrefixCls:o}=X(),n=o("theme-switch"),t=ie({icon:"emojione-monotone:sun",color:"#fde047"}),r=ie({icon:"emojione-monotone:crescent-moon",color:"#fde047"}),l=Q(),a=d(l.getIsDark),s="var(--el-color-black)",u=e=>{l.setIsDark(e)};return(e,o)=>(O(),R(f(ue),{class:z(f(n)),modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"inline-prompt":"","border-color":s,"inactive-color":s,"active-color":s,"active-icon":f(t),"inactive-icon":f(r),onChange:u},null,8,["class","modelValue","active-icon","inactive-icon"]))}});const bo=()=>({changeLocale:async e=>{const o=Z.global,n=await function(e){switch(e){case"../../locales/en.ts":return ee((()=>import("./en.16147c60.js")),[]);case"../../locales/zh-CN.ts":return ee((()=>import("./zh-CN.2c608e4e.js")),[]);default:return new Promise((function(o,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../../locales/${e}.ts`);o.setLocaleMessage(e,n.default),(e=>{const o=oe();"legacy"===Z.mode?Z.global.locale=e:Z.global.locale.value=e,o.setCurrentLocale({lang:e}),ne(e)})(e)}}),wo=c({props:{color:te.string.def("")},setup(e){const{getPrefixCls:o}=X(),n=o("locale-dropdown"),t=re(),r=_((()=>t.getLocaleMap)),l=_((()=>t.getCurrentLocale)),a=e=>{if(e===f(l).lang)return;window.location.reload(),t.setCurrentLocale({lang:e});const{changeLocale:o}=bo();o(e)};return(o,t)=>{const l=T("Icon");return O(),R(f(mo),{class:z(f(n)),trigger:"click",onCommand:a},{dropdown:S((()=>[L(f(vo),null,{default:S((()=>[(O(!0),j(J,null,le(f(r),(e=>(O(),R(f(fo),{key:e.lang,command:e.lang},{default:S((()=>[ae(se(e.name),1)])),_:2},1032,["command"])))),128))])),_:1})])),default:S((()=>[L(l,{size:18,icon:"ion:language-sharp",class:z(["cursor-pointer",o.$attrs.class]),color:e.color},null,8,["class","color"])])),_:1},8,["class"])}}});export{fo as E,go as _,wo as a,vo as b,mo as c};
