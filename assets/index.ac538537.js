var _=Object.defineProperty,w=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var b=(n,o,r)=>o in n?_(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,c=(n,o)=>{for(var r in o||(o={}))B.call(o,r)&&b(n,r,o[r]);if(g)for(var r of g(o))S.call(o,r)&&b(n,r,o[r]);return n},y=(n,o)=>w(n,F(o));import{M as A}from"./index.fcee23e5.js";import{B as E}from"./index.2ee2c45e.js";import{C as U}from"./index.206bc54f.js";import{S as M}from"./index.5725f1a9.js";import{A as h}from"./AppType.6775b756.js";import{u as N,a as C,_ as T,b as X,c as Y}from"./en-US.628e0d34.js";import{w as L,a as V}from"./utils.3a4595f4.js";import{d as z}from"./index.9b1139e6.js";import{_ as R}from"./elevation.229458c1.js";import{q as D,r as I,$ as j,e as k,o as q,c as Z,i as l,j as t,a as i,F as G,Z as H,_ as J,m as a,t as f,n as d}from"./vendor.49f89f0d.js";import"./elements.600984cd.js";import"./components.57927f97.js";import"./zIndex.8c13fd4c.js";import"./index.48ee5316.js";import"./index.6e927d89.js";import"./index.fa8800b2.js";import"./index.6428d33d.js";import"./lock.c5636ec8.js";var K={alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",menuOption:"\u83DC\u5355\u9879",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",offsetRight:"\u53F3\u504F\u79FB",offsetLeft:"\u5DE6\u504F\u79FB",offsetBottom:"\u4E0B\u504F\u79FB",offsetTop:"\u4E0A\u504F\u79FB",events:"\u6CE8\u518C\u4E8B\u4EF6"},P={alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",offsetRight:"Offset Right",offsetLeft:"Offset Left",offsetBottom:"Offset Bottom",offsetTop:"Offset Top",events:"Events"};const{add:O,use:Q,pack:W,packs:Uo,merge:Mo}=N(),x=n=>{Y(n),Q(n)};C("zh-CN",T);C("en-US",X);O("zh-CN",K);O("en-US",P);const $={name:"MenuExample",components:{VarMenu:A,VarButton:E,VarCell:U,AppType:h},setup(){const n=D({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1}),o=I("#fff");return L(x),V(z,r=>{o.value=r==="darkThemes"?"#272727":"#fff"}),y(c({pack:W},j(n)),{bgColor:o,Snackbar:M})}},oo=n=>(H("data-v-7a486fa6"),n=n(),J(),n),to={class:"block-1"},eo={class:"block"},no={class:"block-1"},lo={class:"block-2"},ao=oo(()=>i("div",{style:{"margin-bottom":"100px"}},null,-1));function fo(n,o,r,e,so,uo){const v=k("app-type"),m=k("var-button"),s=k("var-cell"),p=k("var-menu");return q(),Z(G,null,[l(v,null,{default:t(()=>[a(f(e.pack.alignmentMethods),1)]),_:1}),i("div",to,[l(p,{show:n.top,"onUpdate:show":o[1]||(o[1]=u=>n.top=u)},{menu:t(()=>[i("div",{class:"cell-list",style:d({background:e.bgColor})},[l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(m,{type:"primary",onClick:o[0]||(o[0]=u=>n.top=!0)},{default:t(()=>[a(f(e.pack.topAlignment),1)]),_:1})]),_:1},8,["show"])]),i("div",eo,[l(p,{alignment:"bottom",show:n.bottom,"onUpdate:show":o[3]||(o[3]=u=>n.bottom=u)},{menu:t(()=>[i("div",{class:"cell-list",style:d({background:e.bgColor})},[l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(m,{type:"primary",onClick:o[2]||(o[2]=u=>n.bottom=!0)},{default:t(()=>[a(f(e.pack.bottomAlignment),1)]),_:1})]),_:1},8,["show"])]),l(v,null,{default:t(()=>[a(f(e.pack.offset),1)]),_:1}),i("div",no,[l(p,{"offset-x":72,show:n.offsetX,"onUpdate:show":o[5]||(o[5]=u=>n.offsetX=u)},{menu:t(()=>[i("div",{class:"cell-list",style:d({background:e.bgColor})},[l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(m,{type:"primary",onClick:o[4]||(o[4]=u=>n.offsetX=!0)},{default:t(()=>[a(f(e.pack.offsetRight),1)]),_:1})]),_:1},8,["show"]),l(p,{"offset-x":-72,show:n.offsetX1,"onUpdate:show":o[7]||(o[7]=u=>n.offsetX1=u)},{menu:t(()=>[i("div",{class:"cell-list",style:d({background:e.bgColor})},[l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(m,{type:"primary",onClick:o[6]||(o[6]=u=>n.offsetX1=!0)},{default:t(()=>[a(f(e.pack.offsetLeft),1)]),_:1})]),_:1},8,["show"])]),i("div",lo,[l(p,{"offset-y":36,show:n.offsetY,"onUpdate:show":o[9]||(o[9]=u=>n.offsetY=u)},{menu:t(()=>[i("div",{class:"cell-list",style:d({background:e.bgColor})},[l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(m,{type:"primary",onClick:o[8]||(o[8]=u=>n.offsetY=!0)},{default:t(()=>[a(f(e.pack.offsetBottom),1)]),_:1})]),_:1},8,["show"]),l(p,{"offset-y":-36,show:n.offsetY1,"onUpdate:show":o[11]||(o[11]=u=>n.offsetY1=u)},{menu:t(()=>[i("div",{class:"cell-list",style:d({background:e.bgColor})},[l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(m,{type:"primary",onClick:o[10]||(o[10]=u=>n.offsetY1=!0)},{default:t(()=>[a(f(e.pack.offsetTop),1)]),_:1})]),_:1},8,["show"])]),l(v,null,{default:t(()=>[a(f(e.pack.events),1)]),_:1}),l(p,{show:n.event,"onUpdate:show":o[13]||(o[13]=u=>n.event=u),onOpen:o[14]||(o[14]=()=>e.Snackbar.info("open")),onOpened:o[15]||(o[15]=()=>e.Snackbar.success("opened")),onClose:o[16]||(o[16]=()=>e.Snackbar.warning("close")),onClosed:o[17]||(o[17]=()=>e.Snackbar.error("closed"))},{menu:t(()=>[i("div",{class:"cell-list",style:d({background:e.bgColor})},[l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1}),l(s,null,{default:t(()=>[a(f(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(m,{type:"primary",onClick:o[12]||(o[12]=u=>n.event=!0)},{default:t(()=>[a(f(e.pack.events),1)]),_:1})]),_:1},8,["show"]),ao],64)}var ho=R($,[["render",fo],["__scopeId","data-v-7a486fa6"]]);export{ho as default};
