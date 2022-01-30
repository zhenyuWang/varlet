var k=Object.defineProperty,C=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(e,a,u)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,V=(e,a)=>{for(var u in a||(a={}))g.call(a,u)&&v(e,u,a[u]);if(p)for(var u of p(a))w.call(a,u)&&v(e,u,a[u]);return e},f=(e,a)=>C(e,U(a));import{A as j}from"./AppType.934f96e7.js";import{S as F}from"./index.921ce0f0.js";import{d as A}from"./index.9b1139e6.js";import{u as z,a as c,_ as h,b as S,c as E}from"./en-US.f8762106.js";import{w as N,a as y}from"./utils.5a4067e3.js";import{_ as B}from"./elevation.f7de2a7a.js";import{q as D,$ as x,e as b,o as L,c as T,i as o,j as n,a as m,F as q,m as i,t as r}from"./vendor.efca09d3.js";import"./components.8013e964.js";import"./shared.506a394a.js";import"./provide.8fd834d0.js";import"./index.167add38.js";import"./index.b50b8baf.js";import"./index.45528475.js";var I={basicUsage:"\u57FA\u672C\u4F7F\u7528",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",notAvailable:"\u4E0D\u53EF\u7528",size:"\u4E0D\u540C\u5927\u5C0F",loading:"\u52A0\u8F7D\u72B6\u6001",validateValue:"\u503C\u7684\u6821\u9A8C",text:"\u662F\u5426\u6253\u5F00\u5F00\u5173",state:"\u9519\u8BEF\uFF01"},M={basicUsage:"Basic Usage",customColor:"Custom Color",notAvailable:"Not Available",size:"Size",loading:"Loading",validateValue:"Validate Value",text:"Whether to open the switch",state:"Error!"};const{add:_,use:R,pack:W,packs:ve,merge:Ve}=z(),G=e=>{E(e),R(e)};c("zh-CN",h);c("en-US",S);_("zh-CN",I);_("en-US",M);const H={name:"SwitchExample",components:{VarSwitch:F,AppType:j},setup(){const e=D({value:!0,value1:!0,value2:!0,value3:!0,value4:!0});return N(G),y(A),f(V({},x(e)),{pack:W})}},J={class:"var-switch__example-block"},K={class:"var-switch__example-block"},O={class:"var-switch__example-block"},P={class:"var-switch__example-block"},Q={class:"var-switch__example-block"};function X(e,a,u,t,Y,Z){const d=b("app-type"),s=b("var-switch");return L(),T(q,null,[o(d,null,{default:n(()=>[i(r(t.pack.basicUsage),1)]),_:1}),m("div",J,[o(s,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l)},null,8,["modelValue"])]),o(d,null,{default:n(()=>[i(r(t.pack.notAvailable),1)]),_:1}),m("div",K,[o(s,{modelValue:e.value1,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value1=l),disabled:""},null,8,["modelValue"]),o(s,{modelValue:e.value1,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value1=l),readonly:""},null,8,["modelValue"])]),o(d,null,{default:n(()=>[i(r(t.pack.customColor),1)]),_:1}),m("div",O,[o(s,{modelValue:e.value2,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value2=l),ripple:!1},null,8,["modelValue"]),o(s,{modelValue:e.value2,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value2=l),color:"#ff9f00","close-color":"#f5cb90"},null,8,["modelValue"])]),o(d,null,{default:n(()=>[i(r(t.pack.size),1)]),_:1}),m("div",P,[o(s,{modelValue:e.value3,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value3=l),size:"15"},null,8,["modelValue"]),o(s,{modelValue:e.value3,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value3=l)},null,8,["modelValue"]),o(s,{modelValue:e.value3,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value3=l),size:"25"},null,8,["modelValue"])]),o(d,null,{default:n(()=>[i(r(t.pack.loading),1)]),_:1}),m("div",Q,[o(s,{"model-value":!0,loading:""}),o(s,{"model-value":!0,size:"25",loading:"","loading-color":"#ff9f00"})]),o(d,null,{default:n(()=>[i(r(t.pack.validateValue),1)]),_:1}),o(s,{modelValue:e.value4,"onUpdate:modelValue":a[8]||(a[8]=l=>e.value4=l),rules:[l=>l===!0||t.pack.state]},null,8,["modelValue","rules"])],64)}var fe=B(H,[["render",X],["__scopeId","data-v-5b98a314"]]);export{fe as default};
