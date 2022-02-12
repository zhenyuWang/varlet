var _=Object.defineProperty,F=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var g=(n,o,r)=>o in n?_(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,C=(n,o)=>{for(var r in o||(o={}))h.call(o,r)&&g(n,r,o[r]);if(b)for(var r of b(o))S.call(o,r)&&g(n,r,o[r]);return n},y=(n,o)=>F(n,B(o));import{M as A}from"./index.abae40f3.js";import{B as E}from"./index.95cbd3ba.js";import{C as U}from"./index.e98b673e.js";import{S as M}from"./index.b4f3d109.js";import{A as T}from"./AppType.924a5c87.js";import{c}from"./index.f37174b5.js";import{u as N,a as O,_ as X,b as Y,c as L}from"./en-US.dcb2670f.js";import{w as V,a as z,b as R}from"./utils.75b0da7e.js";import{d as D}from"./index.9b1139e6.js";import{_ as I}from"./elevation.7fcd6f98.js";import{q as j,r as q,C as P,$ as Z,e as k,o as G,c as H,i as l,j as e,a as i,F as J,Z as K,_ as Q,m as a,t as f,n as d}from"./vendor.4723551d.js";import"./elements.6395be39.js";import"./shared.506a394a.js";import"./zIndex.5ac96ba7.js";import"./components.40efc8e7.js";import"./index.991f7121.js";import"./index.61112ff7.js";import"./index.9832a998.js";import"./lock.f38ed9b3.js";var W={alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",menuOption:"\u83DC\u5355\u9879",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",offsetRight:"\u53F3\u504F\u79FB",offsetLeft:"\u5DE6\u504F\u79FB",offsetBottom:"\u4E0B\u504F\u79FB",offsetTop:"\u4E0A\u504F\u79FB",events:"\u6CE8\u518C\u4E8B\u4EF6"},x={alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",offsetRight:"Offset Right",offsetLeft:"Offset Left",offsetBottom:"Offset Bottom",offsetTop:"Offset Top",events:"Events"};const{add:w,use:$,pack:oo,packs:No,merge:Xo}=N(),to=n=>{L(n),$(n)};O("zh-CN",X);O("en-US",Y);w("zh-CN",W);w("en-US",x);const eo={name:"MenuExample",components:{VarMenu:A,VarButton:E,VarCell:U,AppType:T},setup(){const n=j({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1}),o=q("#fff");V(to),z(D,t=>{o.value=t==="darkThemes"?"#272727":"#fff"});const r=c.touchmoveForbid;return R(t=>{t==="pc"&&(c.touchmoveForbid=!1)}),P(()=>{c.touchmoveForbid=r}),y(C({pack:oo},Z(n)),{bgColor:o,Snackbar:M})}},no=n=>(K("data-v-262e4fc4"),n=n(),Q(),n),lo={class:"block-1"},ao={class:"block"},fo={class:"block-1"},so={class:"block-2"},uo=no(()=>i("div",{style:{"margin-bottom":"100px"}},null,-1));function ro(n,o,r,t,io,mo){const v=k("app-type"),m=k("var-button"),s=k("var-cell"),p=k("var-menu");return G(),H(J,null,[l(v,null,{default:e(()=>[a(f(t.pack.alignmentMethods),1)]),_:1}),i("div",lo,[l(p,{show:n.top,"onUpdate:show":o[1]||(o[1]=u=>n.top=u)},{menu:e(()=>[i("div",{class:"cell-list",style:d({background:t.bgColor})},[l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1})],4)]),default:e(()=>[l(m,{type:"primary",onClick:o[0]||(o[0]=u=>n.top=!0)},{default:e(()=>[a(f(t.pack.topAlignment),1)]),_:1})]),_:1},8,["show"])]),i("div",ao,[l(p,{alignment:"bottom",show:n.bottom,"onUpdate:show":o[3]||(o[3]=u=>n.bottom=u)},{menu:e(()=>[i("div",{class:"cell-list",style:d({background:t.bgColor})},[l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1})],4)]),default:e(()=>[l(m,{type:"primary",onClick:o[2]||(o[2]=u=>n.bottom=!0)},{default:e(()=>[a(f(t.pack.bottomAlignment),1)]),_:1})]),_:1},8,["show"])]),l(v,null,{default:e(()=>[a(f(t.pack.offset),1)]),_:1}),i("div",fo,[l(p,{"offset-x":72,show:n.offsetX,"onUpdate:show":o[5]||(o[5]=u=>n.offsetX=u)},{menu:e(()=>[i("div",{class:"cell-list",style:d({background:t.bgColor})},[l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1})],4)]),default:e(()=>[l(m,{type:"primary",onClick:o[4]||(o[4]=u=>n.offsetX=!0)},{default:e(()=>[a(f(t.pack.offsetRight),1)]),_:1})]),_:1},8,["show"]),l(p,{"offset-x":-72,show:n.offsetX1,"onUpdate:show":o[7]||(o[7]=u=>n.offsetX1=u)},{menu:e(()=>[i("div",{class:"cell-list",style:d({background:t.bgColor})},[l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1})],4)]),default:e(()=>[l(m,{type:"primary",onClick:o[6]||(o[6]=u=>n.offsetX1=!0)},{default:e(()=>[a(f(t.pack.offsetLeft),1)]),_:1})]),_:1},8,["show"])]),i("div",so,[l(p,{"offset-y":36,show:n.offsetY,"onUpdate:show":o[9]||(o[9]=u=>n.offsetY=u)},{menu:e(()=>[i("div",{class:"cell-list",style:d({background:t.bgColor})},[l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1})],4)]),default:e(()=>[l(m,{type:"primary",onClick:o[8]||(o[8]=u=>n.offsetY=!0)},{default:e(()=>[a(f(t.pack.offsetBottom),1)]),_:1})]),_:1},8,["show"]),l(p,{"offset-y":-36,show:n.offsetY1,"onUpdate:show":o[11]||(o[11]=u=>n.offsetY1=u)},{menu:e(()=>[i("div",{class:"cell-list",style:d({background:t.bgColor})},[l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1})],4)]),default:e(()=>[l(m,{type:"primary",onClick:o[10]||(o[10]=u=>n.offsetY1=!0)},{default:e(()=>[a(f(t.pack.offsetTop),1)]),_:1})]),_:1},8,["show"])]),l(v,null,{default:e(()=>[a(f(t.pack.events),1)]),_:1}),l(p,{show:n.event,"onUpdate:show":o[13]||(o[13]=u=>n.event=u),onOpen:o[14]||(o[14]=()=>t.Snackbar.info("open")),onOpened:o[15]||(o[15]=()=>t.Snackbar.success("opened")),onClose:o[16]||(o[16]=()=>t.Snackbar.warning("close")),onClosed:o[17]||(o[17]=()=>t.Snackbar.error("closed"))},{menu:e(()=>[i("div",{class:"cell-list",style:d({background:t.bgColor})},[l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1}),l(s,null,{default:e(()=>[a(f(t.pack.menuOption),1)]),_:1})],4)]),default:e(()=>[l(m,{type:"primary",onClick:o[12]||(o[12]=u=>n.event=!0)},{default:e(()=>[a(f(t.pack.events),1)]),_:1})]),_:1},8,["show"]),uo],64)}var Yo=I(eo,[["render",ro],["__scopeId","data-v-262e4fc4"]]);export{Yo as default};
