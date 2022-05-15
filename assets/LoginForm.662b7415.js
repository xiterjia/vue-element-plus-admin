import{F as e}from"./Form.0205b497.js";import{d as o,b as a,l as s,u as r,k as t,r as i,m as l,q as n,s as c,o as d,v as p,w as m,e as u,t as f,a as b,g,x as j,y as w}from"./index.aa2d114b.js";import{E as h}from"./el-button.92c2e8f8.js";import{E as v}from"./tsxHelper.bec594c9.js";import{E as x}from"./el-link.3427bf0b.js";import{r as y}from"./formRules.381f16d2.js";import{u as P}from"./useForm.75fcd50f.js";import{l as R,g as I,a as k}from"./index.cf2ac2c6.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import"./el-col.b92c1b0d.js";import"./typescript2.c4bd19fd.js";import"./el-popper.a6ed9fdc.js";import"./index2.3a12b7ca.js";import"./el-input.3aa0e129.js";import"./index2.d89ab46e.js";import"./event2.0717584c.js";import"./index2.51b4d2a5.js";import"./el-tag.655c37d4.js";import"./el-input-number.a96fb661.js";import"./index2.045d794e.js";import"./arrow-up.93c459e5.js";import"./arrow-down.dc4a23a8.js";import"./el-switch.d1bb61af.js";import"./validator2.99c62d49.js";import"./el-divider.682ede16.js";import"./InputPassword.8b94a876.js";import"./Editor.bb924a89.js";import"./debounce.aee81f8a.js";import"./arrow-right.6b894432.js";import"./aria2.f3fb147b.js";import"./scroll2.cafcf04b.js";import"./resize-event2.cff746ae.js";import"./arrow-left.0c0b3b22.js";import"./browser2.f07dd78b.js";const _={class:"text-2xl font-bold text-center w-[100%]"},F={class:"flex justify-between items-center w-[100%]"},E={class:"flex justify-between w-[100%]"};var q=z(o({setup(o){const z=a(),q=s(),{currentRoute:C,addRoute:D,push:V}=r(),{t:A}=t(),U={username:[y],password:[y]},H=i([{field:"title",colProps:{span:24}},{field:"username",label:A("login.username"),value:"admin",component:"Input",colProps:{span:24},componentProps:{placeholder:A("login.usernamePlaceholder")}},{field:"password",label:A("login.password"),value:"admin",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:A("login.passwordPlaceholder")}},{field:"tool",colProps:{span:24}},{field:"login",colProps:{span:24}},{field:"other",component:"Divider",label:A("login.otherLogin"),componentProps:{contentPosition:"center"}},{field:"otherIcon",colProps:{span:24}}]),L=l(!1),{register:N,elFormRef:B,methods:G}=P(),J=l(!1),K="#999",M=l("");n((()=>C.value),(e=>{var o;M.value=null==(o=null==e?void 0:e.query)?void 0:o.redirect}),{immediate:!0});const O=async()=>{const e=b(B);await(null==e?void 0:e.validate((async e=>{if(e){J.value=!0;const{getFormData:e}=G,o=await e(),a=await R(o).catch((()=>{})).finally((()=>J.value=!1));if(a){const{wsCache:e}=w();e.set(z.getUserInfo,a.data),Q()}}})))},Q=async()=>{const{getFormData:e}=G,o=await e(),a={roleName:o.username},s="admin"===o.username?await I({params:a}):await k({params:a});if(s){const{wsCache:e}=w(),a=s.data.list||[];e.set("roleRouters",a),"admin"===o.username?await q.generateRoutes("admin",a).catch((()=>{})):await q.generateRoutes("test",a).catch((()=>{})),q.getAddRouters.forEach((e=>{D(e)})),q.setIsAddRouters(!0),V({path:M.value||q.addRouters[0].path})}};return(o,a)=>{const s=c("Icon");return d(),p(b(e),{schema:b(H),rules:U,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:b(N)},{title:m((()=>[u("h2",_,f(b(A)("login.login")),1)])),tool:m((()=>[u("div",F,[g(b(v),{modelValue:L.value,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value=e),label:b(A)("login.remember"),size:"small"},null,8,["modelValue","label"]),g(b(x),{type:"primary",underline:!1},{default:m((()=>[j(f(b(A)("login.forgetPassword")),1)])),_:1})])])),login:m((()=>[g(b(h),{loading:J.value,type:"primary",class:"w-[100%]",onClick:O},{default:m((()=>[j(f(b(A)("login.login")),1)])),_:1},8,["loading"])])),otherIcon:m((()=>[u("div",E,[g(s,{icon:"ant-design:github-filled",size:30,class:"cursor-pointer anticon",color:K}),g(s,{icon:"ant-design:wechat-filled",size:30,class:"cursor-pointer anticon",color:K}),g(s,{icon:"ant-design:alipay-circle-filled",size:30,color:K,class:"cursor-pointer anticon"}),g(s,{icon:"ant-design:weibo-circle-filled",size:30,color:K,class:"cursor-pointer anticon"})])])),_:1},8,["schema","onRegister"])}}}),[["__scopeId","data-v-0b2fe8ac"]]);export{q as default};
