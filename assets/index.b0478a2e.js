import{A as d}from"./index.dbe1eaad.js";import{A as T}from"./AppType.6775b756.js";import{B}from"./index.2ee2c45e.js";import{S as k}from"./index.5725f1a9.js";import{d as x}from"./index.9b1139e6.js";import{u as D,a as h,_ as N,b as O,c as z}from"./en-US.628e0d34.js";import{w as V,a as L}from"./utils.3a4595f4.js";import{_ as M}from"./elevation.229458c1.js";import{q as y,r as w,e as S,o as j,c as q,i as n,j as i,F as Y,m as l,t as s}from"./vendor.49f89f0d.js";import"./index.6e927d89.js";import"./index.48ee5316.js";import"./elements.600984cd.js";import"./components.57927f97.js";import"./index.8797b76f.js";import"./lock.c5636ec8.js";import"./zIndex.8c13fd4c.js";import"./index.6428d33d.js";import"./index.fa8800b2.js";var G={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",componentCall:"\u7EC4\u4EF6\u8C03\u7528",yourSelected:"\u60A8\u9009\u62E9\u7684\u662F:",customTitle:"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427",disableCloseOnClickAction:"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",disabled:"\u7981\u7528\u9009\u9879",customActionStyles:"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"},H={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",componentCall:"Component Call",yourSelected:"Your selected is:",customTitle:"Choose whichever you like",disableCloseOnClickAction:"Disable close on click action",disabled:"Action Disabled",customActionStyles:"Custom Action Styles"};const{add:A,use:J,pack:r,packs:wo,merge:Co}=D(),K=m=>{z(m),J(m)};h("zh-CN",N);h("en-US",O);A("zh-CN",G);A("en-US",H);const P={name:"ActionSheetExample",components:{VarActionSheet:d.Component,VarButton:B,AppType:T},setup(){const m=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],e=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi",disabled:!0}],f=[{name:"Item 01",icon:"account-circle",color:"#00c48f"},{name:"Item 02",icon:"notebook",color:"#ff9800"},{name:"Item 03",icon:"wifi",color:"#00afef"}],o=y(m),p=y(e),b=y(f),C=w(!1),a=w(!1),u=w(!1),t=w(!1),v=w(!1),_=async()=>{const c=await d({actions:m});c!=="close"&&k(`${r.value.yourSelected}${c.name}`)},F=async()=>{const c=await d({actions:m,title:r.value.customTitle});c!=="close"&&k(`${r.value.yourSelected}${c.name}`)},g=async()=>{const c=await d({actions:e});c!=="close"&&k(`${r.value.yourSelected}${c.name}`)},U=async()=>{const c=await d({actions:f});c!=="close"&&k(`${r.value.yourSelected}${c.name}`)},E=()=>{d({actions:[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],closeOnClickAction:!1,onSelect:c=>k(`${r.value.yourSelected}${c.name}`)})},I=c=>{k(`${r.value.yourSelected}${c.name}`)};return V(K),L(x),{pack:r,show:C,show1:a,show2:u,show3:t,show4:v,actions:o,disabledActions:p,customStyleActions:b,createBasic:_,modifyTitle:F,disableAction:g,customActionStyles:U,handleSelect:I,disableCloseOnClickAction:E}}};function Q(m,e,f,o,p,b){const C=S("app-type"),a=S("var-button"),u=S("var-action-sheet");return j(),q(Y,null,[n(C,null,{default:i(()=>[l(s(o.pack.functionCall),1)]),_:1}),n(a,{type:"primary",block:"",onClick:o.createBasic},{default:i(()=>[l(s(o.pack.basicUsage),1)]),_:1},8,["onClick"]),n(a,{type:"primary",block:"",onClick:o.modifyTitle},{default:i(()=>[l(s(o.pack.modifyTitle),1)]),_:1},8,["onClick"]),n(a,{type:"primary",block:"",onClick:o.disableAction},{default:i(()=>[l(s(o.pack.disabled),1)]),_:1},8,["onClick"]),n(a,{type:"primary",block:"",onClick:o.disableCloseOnClickAction},{default:i(()=>[l(s(o.pack.disableCloseOnClickAction),1)]),_:1},8,["onClick"]),n(a,{type:"primary",block:"",onClick:o.customActionStyles},{default:i(()=>[l(s(o.pack.customActionStyles),1)]),_:1},8,["onClick"]),n(C,null,{default:i(()=>[l(s(o.pack.componentCall),1)]),_:1}),n(a,{type:"warning",block:"",onClick:e[0]||(e[0]=t=>o.show=!0)},{default:i(()=>[l(s(o.pack.basicUsage),1)]),_:1}),n(u,{actions:o.actions,show:o.show,"onUpdate:show":e[1]||(e[1]=t=>o.show=t),onSelect:o.handleSelect},null,8,["actions","show","onSelect"]),n(a,{type:"warning",block:"",onClick:e[2]||(e[2]=t=>o.show1=!0)},{default:i(()=>[l(s(o.pack.modifyTitle),1)]),_:1}),n(u,{title:o.pack.customTitle,actions:o.actions,show:o.show1,"onUpdate:show":e[3]||(e[3]=t=>o.show1=t),onSelect:o.handleSelect},null,8,["title","actions","show","onSelect"]),n(a,{type:"warning",block:"",onClick:e[4]||(e[4]=t=>o.show2=!0)},{default:i(()=>[l(s(o.pack.disabled),1)]),_:1}),n(u,{actions:o.disabledActions,show:o.show2,"onUpdate:show":e[5]||(e[5]=t=>o.show2=t),onSelect:o.handleSelect},null,8,["actions","show","onSelect"]),n(a,{type:"warning",block:"",onClick:e[6]||(e[6]=t=>o.show3=!0)},{default:i(()=>[l(s(o.pack.disableCloseOnClickAction),1)]),_:1}),n(u,{"close-on-click-action":!1,actions:o.actions,show:o.show3,"onUpdate:show":e[7]||(e[7]=t=>o.show3=t),onSelect:o.handleSelect},null,8,["actions","show","onSelect"]),n(a,{type:"warning",block:"",onClick:e[8]||(e[8]=t=>o.show4=!0)},{default:i(()=>[l(s(o.pack.customActionStyles),1)]),_:1}),n(u,{actions:o.customStyleActions,show:o.show4,"onUpdate:show":e[9]||(e[9]=t=>o.show4=t),onSelect:o.handleSelect},null,8,["actions","show","onSelect"])],64)}var fo=M(P,[["render",Q],["__scopeId","data-v-e046d88a"]]);export{fo as default};
