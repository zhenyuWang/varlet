var D=Object.defineProperty,U=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var w=(a,o,t)=>o in a?D(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,h=(a,o)=>{for(var t in o||(o={}))F.call(o,t)&&w(a,t,o[t]);if(B)for(var t of B(o))S.call(o,t)&&w(a,t,o[t]);return a},_=(a,o)=>U(a,A(o));import{D as m}from"./index.4be0fb82.js";import{B as T}from"./index.8577f5e9.js";import{I as N}from"./index.0b1b96d2.js";import{S as f}from"./index.ab1f9605.js";import{C as V}from"./index.4b1ce6a1.js";import{A as I}from"./AppType.9af1463a.js";import{d as z}from"./index.9b1139e6.js";import{u as M,a as b,_ as P,b as H,c as L}from"./en-US.aa18f95c.js";import{w as j,a as q}from"./utils.30cd4d8d.js";import{_ as x}from"./elevation.85e837d8.js";import{q as R,a0 as W,e as C,o as G,c as J,i as s,j as n,F as K,m as l,t as r}from"./vendor.6bd64832.js";import"./index.c06f3952.js";import"./lock.38dc9217.js";import"./index.43e98689.js";import"./zIndex.6c90964a.js";import"./components.3670f0ad.js";import"./shared.506a394a.js";import"./index.7a47c214.js";import"./index.6262ef7e.js";import"./elements.6395be39.js";var O={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},Q={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:E,use:X,pack:u,packs:ho,merge:_o}=M(),Y=a=>{L(a),X(a)};b("zh-CN",P);b("en-US",H);E("zh-CN",O);E("en-US",Q);const Z={name:"DialogExample",components:{VarDialog:m.Component,VarButton:T,VarIcon:N,VarCell:V,AppType:I},setup(){const a=R({show:!1,show1:!1,show2:!1,value:""}),o={confirm:()=>f.success("confirm"),cancel:()=>f.error("cancel"),close:()=>f.info("close")},t=()=>m({message:u.value.message}),e=async()=>o[await m(u.value.message)](),y=()=>{m({title:u.value.title,message:u.value.message})},v=()=>{m({message:u.value.message,confirmButton:!1,cancelButton:!1})},p=(d,k)=>{f.loading(u.value.asyncCloseProgress),setTimeout(()=>{o[d](),k()},1e3)},i=()=>{m({message:u.value.message,onBeforeClose:p})};return j(Y),q(z),_(h({pack:u},W(a)),{asyncClose:i,createBasic:t,createAction:e,modifyTitle:y,hideButton:v,onBeforeClose:p,Snackbar:f})}};function $(a,o,t,e,y,v){const p=C("app-type"),i=C("var-button"),d=C("var-dialog"),k=C("var-icon"),g=C("var-cell");return G(),J(K,null,[s(p,null,{default:n(()=>[l(r(e.pack.functionCall),1)]),_:1}),s(i,{type:"primary",block:"",onClick:e.createBasic},{default:n(()=>[l(r(e.pack.basicUsage),1)]),_:1},8,["onClick"]),s(i,{type:"primary",block:"",onClick:e.modifyTitle},{default:n(()=>[l(r(e.pack.modifyTitle),1)]),_:1},8,["onClick"]),s(i,{type:"primary",block:"",onClick:e.hideButton},{default:n(()=>[l(r(e.pack.hideButton),1)]),_:1},8,["onClick"]),s(i,{type:"primary",block:"",onClick:e.createAction},{default:n(()=>[l(r(e.pack.handleUserBehavior),1)]),_:1},8,["onClick"]),s(i,{type:"primary",block:"",onClick:e.asyncClose},{default:n(()=>[l(r(e.pack.asyncClose),1)]),_:1},8,["onClick"]),s(p,null,{default:n(()=>[l(r(e.pack.componentCall),1)]),_:1}),s(i,{type:"warning",block:"",onClick:o[0]||(o[0]=c=>a.show=!0)},{default:n(()=>[l(r(e.pack.basicUsage),1)]),_:1}),s(d,{show:a.show,"onUpdate:show":o[1]||(o[1]=c=>a.show=c),title:e.pack.title,message:e.pack.message,onConfirm:o[2]||(o[2]=()=>e.Snackbar.success("confirm")),onCancel:o[3]||(o[3]=()=>e.Snackbar.error("cancel")),onClosed:o[4]||(o[4]=()=>e.Snackbar.info("closed"))},null,8,["show","title","message"]),s(i,{type:"warning",block:"",onClick:o[5]||(o[5]=c=>a.show1=!0)},{default:n(()=>[l(r(e.pack.asyncClose),1)]),_:1}),s(d,{show:a.show1,"onUpdate:show":o[6]||(o[6]=c=>a.show1=c),title:e.pack.title,message:e.pack.message,onBeforeClose:e.onBeforeClose},null,8,["show","title","message","onBeforeClose"]),s(i,{type:"warning",block:"",onClick:o[7]||(o[7]=c=>a.show2=!0)},{default:n(()=>[l(r(e.pack.customSlots),1)]),_:1}),s(d,{show:a.show2,"onUpdate:show":o[8]||(o[8]=c=>a.show2=c)},{title:n(()=>[s(k,{name:"information",color:"#2979ff"})]),default:n(()=>[s(g,null,{default:n(()=>[l(r(e.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[l(r(e.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[l(r(e.pack.message),1)]),_:1})]),_:1},8,["show"])],64)}var bo=x(Z,[["render",$],["__scopeId","data-v-7374df38"]]);export{bo as default};
