var e=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(o,l,t)=>l in o?e(o,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[l]=t,s=(e,o)=>{for(var l in o||(o={}))a.call(o,l)&&n(e,l,o[l]);if(t)for(var l of t(o))r.call(o,l)&&n(e,l,o[l]);return e},c=(e,t)=>o(e,l(t));import{f as i,e as d,t as p}from"./tree.9e4d3f05.js";import{b_ as m,r as f,k as b,b1 as h}from"./index.aa2d114b.js";const u=m(),{t:v}=b(),w=e=>{const o=f({searchSchema:[],tableColumns:[],formSchema:[],detailSchema:[]}),l=O(e,o);o.searchSchema=l||[];const t=S(e);o.tableColumns=t||[];const a=j(e);o.formSchema=a;const r=y(e);return o.detailSchema=r,{allSchemas:o}},O=(e,o)=>{const l=[],t=[];d(e,(e=>{var a;if(null==(a=null==e?void 0:e.search)?void 0:a.show){const a=c(s({component:e.search.component||"Input",componentProps:{}},e.search),{field:e.field,label:e.label});if(a.dictName){const e=u.getDictObj[a.dictName];a.componentProps.options=P(e)}else a.api&&t.push((async()=>{var e;const l=await a.api();if(l){const t=h(o.searchSchema,(e=>e.field===a.field));-1!==t&&(o.searchSchema[t].componentProps.options=P(l.data,null==(e=a.componentProps.optionsAlias)?void 0:e.labelField))}}));delete a.show,delete a.dictName,l.push(a)}}));for(const a of t)a();return l},S=e=>{const o=p(e,{conversion:e=>{var o;if(!1!==(null==(o=null==e?void 0:e.table)?void 0:o.show))return s(s({},e.table),e)}});return i(o,(e=>(void 0===e.children&&delete e.children,!!e.field)))},j=e=>{const o=[];return d(e,(e=>{var l;if(!1!==(null==(l=null==e?void 0:e.form)?void 0:l.show)){const l=c(s({component:e.form&&e.form.component||"Input"},e.form),{field:e.field,label:e.label});delete l.show,o.push(l)}})),o},y=e=>{const o=[];return d(e,(e=>{var l;if(!1!==(null==(l=null==e?void 0:e.detail)?void 0:l.show)){const l=c(s({},e.detail),{field:e.field,label:e.label});delete l.show,o.push(l)}})),o},P=(e,o)=>e.map((e=>(o?e.labelField=v(e.labelField):e.label=v(e.label),e)));export{w as u};
