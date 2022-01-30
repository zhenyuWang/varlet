import{l as C}from"./elements.6395be39.js";import{d as k,P as x,q as F,r as S,C as b,e as s,o as w,c as P,i as r,j as l,F as R,m as u,t as p}from"./vendor.efca09d3.js";import{R as E}from"./index.8572bba7.js";import{S as U}from"./index.921ce0f0.js";import{B}from"./index.41e2bfcc.js";import{A as N}from"./AppType.934f96e7.js";import{c as y}from"./index.45528475.js";import{d as z}from"./index.9b1139e6.js";import{w as D,b as A,g as L}from"./utils.5a4067e3.js";import{u as O,a as T,_ as q,b as K,c as G}from"./en-US.f8762106.js";import{_ as H}from"./elevation.f7de2a7a.js";import"./shared.506a394a.js";import"./index.f0ba8e12.js";import"./provide.8fd834d0.js";import"./components.8013e964.js";import"./index.b50b8baf.js";import"./index.167add38.js";const n=k({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup(t,{slots:o}){return()=>{var a;return x("div",{class:"var-style-provider",style:C(t.styleVars)},(a=o.default)==null?void 0:a.call(o))}}}),_=[];function c(t={}){_.forEach(a=>document.documentElement.style.removeProperty(a)),_.length=0;const o=C(t);Object.entries(o).forEach(([a,e])=>{document.documentElement.style.setProperty(a,e),_.push(a)})}c.Component=n;n.install=function(t){t.component(n.name,n)};c.install=function(t){t.component(n.name,n)};var I={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},J={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:j,use:M,pack:Q,packs:ve,merge:ye}=O(),W=t=>{G(t),M(t)};T("zh-CN",q);T("en-US",K);j("zh-CN",I);j("en-US",J);const X={name:"StyleProviderExample",components:{VarStyleProvider:c.Component,VarRate:E,VarSwitch:U,VarButton:B,AppType:N},setup(){const t=F({score:5,license:!0}),o=S(null),a={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},e=()=>{o.value=o.value?null:a};let m=null;const h={"--color-primary":"#3f51b5"},i=()=>{m=m?null:h,c(m)};D(W);const d=y.touchmoveForbid;return A(f=>{f==="pc"&&(y.touchmoveForbid=!1)}),b(()=>{y.touchmoveForbid=d}),b(()=>{c(L()==="darkThemes"?z:null)}),{pack:Q,state:t,styleVars:o,toggleTheme:e,toggleRootTheme:i}}};function Y(t,o,a,e,m,h){const i=s("app-type"),d=s("var-rate"),f=s("var-switch"),g=s("var-button"),V=s("var-style-provider");return w(),P(R,null,[r(i,null,{default:l(()=>[u(p(e.pack.componentCall),1)]),_:1}),r(V,{"style-vars":e.styleVars},{default:l(()=>[r(d,{modelValue:e.state.score,"onUpdate:modelValue":o[0]||(o[0]=v=>e.state.score=v)},null,8,["modelValue"]),r(f,{modelValue:e.state.license,"onUpdate:modelValue":o[1]||(o[1]=v=>e.state.license=v)},null,8,["modelValue"]),r(g,{style:{"margin-top":"10px"},type:"primary",block:"",onClick:e.toggleTheme},{default:l(()=>[u(p(e.pack.toggleTheme),1)]),_:1},8,["onClick"])]),_:1},8,["style-vars"]),r(i,null,{default:l(()=>[u(p(e.pack.functionCall),1)]),_:1}),r(g,{type:"primary",block:"",onClick:e.toggleRootTheme},{default:l(()=>[u(p(e.pack.toggleRootTheme),1)]),_:1},8,["onClick"])],64)}var _e=H(X,[["render",Y]]);export{_e as default};
