import{H as t,I as e,d as a,G as s,J as u,R as r,g as l,a0 as p,A as n}from"./index.aa2d114b.js";import{m as o}from"./typescript2.c4bd19fd.js";const f=Symbol("rowContextKey");const d=p(a({name:"ElCol",props:t({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:e([Number,Object]),default:()=>o({})},sm:{type:e([Number,Object]),default:()=>o({})},md:{type:e([Number,Object]),default:()=>o({})},lg:{type:e([Number,Object]),default:()=>o({})},xl:{type:e([Number,Object]),default:()=>o({})}}),setup(t,{slots:e}){const{gutter:a}=s(f,{gutter:u((()=>0))}),p=r("col"),n=u((()=>a.value?{paddingLeft:a.value/2+"px",paddingRight:a.value/2+"px"}:{})),o=u((()=>{const e=[];["span","offset","pull","push"].forEach((a=>{const s=t[a];"number"==typeof s&&("span"===a?e.push(p.b(`${t[a]}`)):s>0&&e.push(p.b(`${a}-${t[a]}`)))}));return["xs","sm","md","lg","xl"].forEach((a=>{if("number"==typeof t[a])e.push(p.b(`${a}-${t[a]}`));else if("object"==typeof t[a]){const s=t[a];Object.keys(s).forEach((t=>{e.push("span"!==t?p.b(`${a}-${t}-${s[t]}`):p.b(`${a}-${s[t]}`))}))}})),a.value&&e.push(p.is("guttered")),e}));return()=>l(t.tag,{class:[p.b(),o.value],style:n.value},e)}})),i=p(a({name:"ElRow",props:t({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"],default:"top"}}),setup(t,{slots:e}){const a=r("row"),s=u((()=>t.gutter));n(f,{gutter:s});const p=u((()=>{const e={marginLeft:"",marginRight:""};return t.gutter&&(e.marginLeft=`-${t.gutter/2}px`,e.marginRight=e.marginLeft),e}));return()=>l(t.tag,{class:[a.b(),a.is(`justify-${t.justify}`,"start"!==t.justify),a.is(`align-${t.align}`,"top"!==t.align)],style:p.value},{default:()=>{var t;return[null==(t=e.default)?void 0:t.call(e)]}})}}));export{i as E,d as a};
