var ta=Object.defineProperty;var H=Object.getOwnPropertySymbols;var ia=Object.prototype.hasOwnProperty,ca=Object.prototype.propertyIsEnumerable;var R=(a,l,t)=>l in a?ta(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,D=(a,l)=>{for(var t in l||(l={}))ia.call(l,t)&&R(a,t,l[t]);if(H)for(var t of H(l))ca.call(l,t)&&R(a,t,l[t]);return a};import{A as ra}from"./AppType.120606bc.js";import{B as sa}from"./index.f864d12f.js";import{j as ma,l as ba,c as L,a as B,h as ua,m as da}from"./components.5cba9644.js";import{_ as G}from"./elevation.4d11ec3f.js";import{d as J,r as u,b as I,x as va,S as ga,e as N,o as C,c as S,G as F,l as O,j as r,H as Q,h as E,p as V,n as W,y as fa,f as pa,w as Ca,a as ka,F as X,m as f,t as p,i as o}from"./vendor.49f89f0d.js";import{R as ha}from"./index.cb4064b0.js";import{B as Na}from"./index.8842eb11.js";import{I as Z}from"./index.e30cf35b.js";import{S as j}from"./index.ae193485.js";import{d as Ba}from"./index.079ade67.js";import{u as ya,a as x,_ as _a,b as Ia,c as Ea}from"./en-US.628e0d34.js";import{w as Va,a as Aa}from"./utils.3a4595f4.js";import"./index.877f6c7a.js";import"./index.48ee5316.js";import"./elements.b75de382.js";import"./zIndex.8c13fd4c.js";import"./lock.c5636ec8.js";const Ta={modelValue:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},border:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},activeColor:{type:String},inactiveColor:{type:String},onChange:{type:Function},"onUpdate:modelValue":{type:Function},onBeforeChange:{type:Function},onFabClick:{type:Function},fabProps:{type:[Object],default:{}}},$=Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"),aa=Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");function Sa(){const{childProviders:a,bindChildren:l}=ma($),{length:t}=ba(aa);return{length:t,bottomNavigationItems:a,bindBottomNavigationItem:l}}const{n:Fa,classes:Oa}=L("bottom-navigation"),{n:P}=L("bottom-navigation-item"),K=P("--right-half-space"),Y=P("--left-half-space"),q=P("--right-space"),Pa={type:"primary"},Ua=J({name:"VarBottomNavigation",components:{VarButton:sa},props:Ta,setup(a,{slots:l}){const t=u(null),e=I(()=>a.modelValue),b=I(()=>a.activeColor),g=I(()=>a.inactiveColor),c=u({}),n=m=>{a.onBeforeChange?s(m):d(m)},s=m=>{Promise.resolve(B(a.onBeforeChange,m)).then(v=>{v&&d(m)})},d=m=>{B(a["onUpdate:modelValue"],m),B(a.onChange,m)},{length:i,bindBottomNavigationItem:k}=Sa(),U=()=>{z().forEach(v=>{v.classList.remove(K,Y,q)})},h=m=>{const v=z(),y=v.length,_=m%2===0;v.forEach((M,w)=>{la(_,M,w,y)})},la=(m,v,y,_)=>{const M=y===_-1;if(!m&&M){v.classList.add(q);return}const w=y===_/2-1,na=y===_/2;w?v.classList.add(K):na&&v.classList.add(Y)},z=()=>Array.from(t.value.querySelectorAll(`.${P()}`)),oa=()=>{B(a.onFabClick)};return c.value=D(D({},Pa),a.fabProps),k({active:e,activeColor:b,inactiveColor:g,onToggle:n}),va(()=>{!l.fab||h(i.value)}),ga(()=>{U(),!!l.fab&&h(i.value)}),{n:Fa,classes:Oa,length:i,bottomNavigationDom:t,handleFabClick:oa,fabProps:c}}});function Ma(a,l,t,e,b,g){const c=N("var-button");return C(),S("div",{class:V(a.classes(a.n(),[a.fixed,a.n("--fixed")],[a.border,a.n("--border")])),ref:"bottomNavigationDom",style:W(`z-index:${a.zIndex}`)},[F(a.$slots,"default"),a.$slots.fab?(C(),O(c,Q({key:0,class:a.classes(a.n("fab"),[a.length%2,a.n("--fab-right"),a.n("--fab-center")]),"var-bottom-navigation__fab":"",onClick:a.handleFabClick},a.fabProps,{round:""}),{default:r(()=>[F(a.$slots,"fab")]),_:3},16,["class","onClick"])):E("v-if",!0)],6)}var A=G(Ua,[["render",Ma]]);A.install=function(a){a.component(A.name,A)};const wa={name:{type:String},icon:{type:String},label:{type:String},namespace:{type:String,default:"var-icon"},badge:{type:[Boolean,Object],default:!1},onClick:{type:Function}};function Da(){const{parentProvider:a,bindParent:l}=ua($),{index:t}=da(aa);if(!a||!l||!t)throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");return{index:t,bottomNavigation:a,bindBottomNavigation:l}}const{n:La,classes:Ga}=L("bottom-navigation-item"),za={type:"danger",dot:!0},Ha=J({name:"VarBottomNavigationItem",components:{VarBadge:Na,VarIcon:Z},directives:{Ripple:ha},props:wa,setup(a){const l=I(()=>a.name),t=I(()=>a.badge),e=u({}),{index:b,bottomNavigation:g,bindBottomNavigation:c}=Da(),{active:n,activeColor:s,inactiveColor:d}=g;c({name:l,index:b});const k=()=>n.value===l.value||n.value===b.value?s.value:d.value,U=()=>{const h=l.value||b.value;B(a.onClick,h),B(g.onToggle,h)};return fa(()=>t.value,h=>{e.value=h===!0?za:t.value},{immediate:!0}),{n:La,classes:Ga,index:b,active:n,badge:t,badgeProps:e,computeColorStyle:k,handleClick:U}}});function Ra(a,l,t,e,b,g){const c=N("var-icon"),n=N("var-badge"),s=pa("ripple");return Ca((C(),S("button",{class:V(a.classes(a.n(),[a.active===a.index||a.active===a.name,a.n("--active")])),style:W({color:a.computeColorStyle()}),onClick:l[0]||(l[0]=(...d)=>a.handleClick&&a.handleClick(...d))},[a.icon&&!a.$slots.icon?(C(),O(c,{key:0,name:a.icon,namespace:a.namespace,class:V(a.n("icon")),"var-bottom-navigation-item-cover":""},null,8,["name","namespace","class"])):E("v-if",!0),F(a.$slots,"icon",{active:a.active===a.index||a.active===a.name}),a.badge?(C(),O(n,Q({key:1},a.badgeProps,{class:a.n("badge"),"var-bottom-navigation-item-cover":""}),null,16,["class"])):E("v-if",!0),ka("span",{class:V(a.n("label"))},[a.$slots.default?E("v-if",!0):(C(),S(X,{key:0},[f(p(a.label),1)],2112)),F(a.$slots,"default")],2)],6)),[[s]])}var T=G(Ha,[["render",Ra]]);T.install=function(a){a.component(T.name,T)};var ja={basicUsage:"\u57FA\u672C\u4F7F\u7528",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",showBadge:"\u5FBD\u6807\u63D0\u793A",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",changeEvent:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6",clickEvent:"\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6",fab:"\u60AC\u6D6E\u6309\u94AE",label:"\u6807\u7B7E"},Ka={basicUsage:"Basic Usage",matchByName:"Match by name",showBadge:"Show Badge",customColor:"Custom Color",changeEvent:"Change Event",clickEvent:"Click Event",fab:"Fab",label:"label"};const{add:ea,use:Ya,pack:qa,packs:ge,merge:fe}=ya(),Ja=a=>{Ea(a),Ya(a)};x("zh-CN",_a);x("en-US",Ia);ea("zh-CN",ja);ea("en-US",Ka);const Qa={name:"BottomNavigationExample",components:{AppType:ra,VarBottomNavigation:A,VarBottomNavigationItem:T,VarIcon:Z},setup(){const a=u(0),l=u("home"),t=u(0),e={type:"primary",value:"66"},b=u(0),g=u(0);function c(k){j.info(`changed to ${k}`)}const n=u(0);function s(k){j.success(`clicked ${k}`)}const d=u(0),i=u(!0);return Va(Ja),Aa(Ba),{pack:qa,basicUsage:a,matchByName:l,showBadge:t,badgeProps:e,customColor:b,changeEvent:g,handleChange:c,clickEvent:n,handleClick:s,fab:d,isEven:i}}};function Wa(a,l,t,e,b,g){const c=N("app-type"),n=N("var-bottom-navigation-item"),s=N("var-bottom-navigation"),d=N("var-icon");return C(),S(X,null,[o(c,null,{default:r(()=>[f(p(e.pack.basicUsage),1)]),_:1}),o(s,{modelValue:e.basicUsage,"onUpdate:modelValue":l[0]||(l[0]=i=>e.basicUsage=i)},{default:r(()=>[o(n,{label:e.pack.label,icon:"home"},null,8,["label"]),o(n,{label:e.pack.label,icon:"magnify"},null,8,["label"]),o(n,{label:e.pack.label,icon:"heart"},null,8,["label"]),o(n,{label:e.pack.label,icon:"account-circle"},null,8,["label"])]),_:1},8,["modelValue"]),o(c,null,{default:r(()=>[f(p(e.pack.matchByName),1)]),_:1}),o(s,{modelValue:e.matchByName,"onUpdate:modelValue":l[1]||(l[1]=i=>e.matchByName=i)},{default:r(()=>[o(n,{name:"home",label:e.pack.label,icon:"home"},null,8,["label"]),o(n,{name:"search",label:e.pack.label,icon:"magnify"},null,8,["label"]),o(n,{name:"heart",label:e.pack.label,icon:"heart"},null,8,["label"]),o(n,{name:"user",label:e.pack.label,icon:"account-circle"},null,8,["label"])]),_:1},8,["modelValue"]),o(c,null,{default:r(()=>[f(p(e.pack.showBadge),1)]),_:1}),o(s,{modelValue:e.showBadge,"onUpdate:modelValue":l[2]||(l[2]=i=>e.showBadge=i)},{default:r(()=>[o(n,{label:e.pack.label,icon:"home"},null,8,["label"]),o(n,{label:e.pack.label,icon:"magnify",badge:""},null,8,["label"]),o(n,{label:e.pack.label,icon:"heart",badge:e.badgeProps},null,8,["label","badge"]),o(n,{label:e.pack.label,icon:"account-circle"},null,8,["label"])]),_:1},8,["modelValue"]),o(c,null,{default:r(()=>[f(p(e.pack.customColor),1)]),_:1}),o(s,{"active-color":"#ba68c8",modelValue:e.customColor,"onUpdate:modelValue":l[3]||(l[3]=i=>e.customColor=i)},{default:r(()=>[o(n,{label:e.pack.label,icon:"home"},null,8,["label"]),o(n,{label:e.pack.label,icon:"magnify"},null,8,["label"]),o(n,{label:e.pack.label,icon:"heart"},null,8,["label"]),o(n,{label:e.pack.label,icon:"account-circle"},null,8,["label"])]),_:1},8,["modelValue"]),o(c,null,{default:r(()=>[f(p(e.pack.changeEvent),1)]),_:1}),o(s,{modelValue:e.changeEvent,"onUpdate:modelValue":l[4]||(l[4]=i=>e.changeEvent=i),onChange:e.handleChange},{default:r(()=>[o(n,{label:e.pack.label,icon:"home"},null,8,["label"]),o(n,{label:e.pack.label,icon:"magnify"},null,8,["label"]),o(n,{label:e.pack.label,icon:"heart"},null,8,["label"]),o(n,{label:e.pack.label,icon:"account-circle"},null,8,["label"])]),_:1},8,["modelValue","onChange"]),o(c,null,{default:r(()=>[f(p(e.pack.clickEvent),1)]),_:1}),o(s,{modelValue:e.clickEvent,"onUpdate:modelValue":l[5]||(l[5]=i=>e.clickEvent=i)},{default:r(()=>[o(n,{onClick:e.handleClick,label:e.pack.label,icon:"home"},null,8,["onClick","label"]),o(n,{onClick:e.handleClick,label:e.pack.label,icon:"magnify"},null,8,["onClick","label"]),o(n,{onClick:e.handleClick,label:e.pack.label,icon:"heart"},null,8,["onClick","label"]),o(n,{onClick:e.handleClick,label:e.pack.label,icon:"account-circle"},null,8,["onClick","label"])]),_:1},8,["modelValue"]),o(c,null,{default:r(()=>[f(p(e.pack.fab),1)]),_:1}),o(s,{modelValue:e.fab,"onUpdate:modelValue":l[6]||(l[6]=i=>e.fab=i),onFabClick:l[7]||(l[7]=i=>e.isEven=!e.isEven),style:{"margin-top":"10px"}},{fab:r(()=>[o(d,{name:"plus",color:"#fff",size:"24"})]),default:r(()=>[o(n,{label:e.pack.label,icon:"home"},null,8,["label"]),o(n,{label:e.pack.label,icon:"magnify"},null,8,["label"]),o(n,{label:e.pack.label,icon:"heart"},null,8,["label"]),o(n,{label:e.pack.label,icon:"bell"},null,8,["label"]),e.isEven?E("v-if",!0):(C(),O(n,{key:0,label:e.pack.label,icon:"account-circle"},null,8,["label"]))]),_:1},8,["modelValue"])],64)}var pe=G(Qa,[["render",Wa]]);export{pe as default};
