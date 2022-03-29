import{B as f}from"./index.e0f2ad9b.js";import{I as k}from"./index.8a263e15.js";import{A as g}from"./AppType.9af1463a.js";import{S as p}from"./index.95f87fe6.js";import{d as y}from"./index.9b1139e6.js";import{u as C,a as m,_ as S,b as E,c as A}from"./en-US.aa18f95c.js";import{w as h,a as b}from"./utils.342a5a4f.js";import{_ as x}from"./elevation.85e837d8.js";import{e as i,o as F,c as T,i as t,j as a,F as v,m as o,t as n}from"./vendor.6bd64832.js";import"./index.35433dcf.js";import"./index.43e98689.js";import"./elements.92736b4e.js";import"./shared.506a394a.js";import"./index.6262ef7e.js";import"./components.3670f0ad.js";import"./zIndex.6c90964a.js";import"./lock.38dc9217.js";var w={themeColorButton:"\u4E3B\u9898\u8272\u6309\u94AE",defaultButton:"\u9ED8\u8BA4\u6309\u94AE",primaryButton:"\u4E3B\u8981\u6309\u94AE",infoButton:"\u4FE1\u606F\u6309\u94AE",successButton:"\u6210\u529F\u6309\u94AE",warningButton:"\u8B66\u544A\u6309\u94AE",dangerButton:"\u5371\u9669\u6309\u94AE",textButton:"\u6587\u5B57\u6309\u94AE",plainTextButton:"\u7EAF\u6587\u5B57\u6309\u94AE",outlineButton:"\u5916\u8FB9\u6846\u6309\u94AE",disabledStatus:"\u7981\u7528\u72B6\u6001",loadingStatus:"\u52A0\u8F7D\u72B6\u6001",buttonSize:"\u6309\u94AE\u5C3A\u5BF8",normalButton:"\u5E38\u89C4\u6309\u94AE",smallButton:"\u5C0F\u578B\u6309\u94AE",miniButton:"\u8FF7\u4F60\u6309\u94AE",largeButton:"\u5927\u578B\u6309\u94AE",blockButton:"\u5757\u7EA7\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",backgroundTextColor:"\u80CC\u666F/\u6587\u5B57",linearGradientColor:"\u4F7F\u7528\u6E10\u53D8",roundButton:"\u5706\u5F62\u6309\u94AE",event:"\u6CE8\u518C\u4E8B\u4EF6",click:"\u70B9\u51FB",touchstart:"\u89E6\u6478",autoLoading:"\u81EA\u52A8\u52A0\u8F7D",clickSuccess:"\u70B9\u51FB\u6210\u529F",touchstartSuccess:"\u89E6\u6478\u6210\u529F"},z={themeColorButton:"Theme Color Button",defaultButton:"Default Button",primaryButton:"Primary Button",infoButton:"Info Button",successButton:"Success Button",warningButton:"Warning Button",dangerButton:"Danger Button",textButton:"Text Button",plainTextButton:"Plain Text Button",outlineButton:"Outline Button",disabledStatus:"Disabled Status",loadingStatus:"Loading Status",buttonSize:"Button Size",normalButton:"Normal Button",smallButton:"Small Button",miniButton:"Mini Button",largeButton:"Large Button",blockButton:"Block Button",customColor:"Custom Color",textColor:"Text Color",backgroundTextColor:"Background/Text Color",linearGradientColor:"LinearGradient Color",roundButton:"Round Button",event:"Event",click:"Click",touchstart:"Touchstart",autoLoading:"Auto Loading",clickSuccess:"Click Success",touchstartSuccess:"Touchstart Success"};const{add:_,use:L,pack:d,packs:ut,merge:at}=C(),D=c=>{A(c),L(c)};m("zh-CN",S);m("en-US",E);_("zh-CN",w);_("en-US",z);const N={components:{VarButton:f,VarIcon:k,AppType:g},setup(){const c=()=>{p.success(d.value.clickSuccess)},s=()=>{p.success(d.value.touchstartSuccess)},B=()=>new Promise(u=>{setTimeout(u,2e3)});return h(D),b(y),{pack:d,handleClick:c,handleTouchstart:s,handleAutoLoadingClick:B}}};function I(c,s,B,u,G,U){const l=i("app-type"),e=i("var-button"),r=i("var-icon");return F(),T(v,null,[t(l,null,{default:a(()=>[o(n(u.pack.themeColorButton),1)]),_:1}),t(e,null,{default:a(()=>[o(n(u.pack.defaultButton),1)]),_:1}),t(e,{type:"primary"},{default:a(()=>[o(n(u.pack.primaryButton),1)]),_:1}),t(e,{type:"info"},{default:a(()=>[o(n(u.pack.infoButton),1)]),_:1}),t(e,{type:"success"},{default:a(()=>[o(n(u.pack.successButton),1)]),_:1}),t(e,{type:"warning"},{default:a(()=>[o(n(u.pack.warningButton),1)]),_:1}),t(e,{type:"danger"},{default:a(()=>[o(n(u.pack.dangerButton),1)]),_:1}),t(l,null,{default:a(()=>[o(n(u.pack.textButton),1)]),_:1}),t(e,{text:"",outline:"",type:"primary"},{default:a(()=>[o(n(u.pack.outlineButton),1)]),_:1}),t(e,{text:"",type:"primary"},{default:a(()=>[o(n(u.pack.plainTextButton),1)]),_:1}),t(l,null,{default:a(()=>[o(n(u.pack.disabledStatus),1)]),_:1}),t(e,{disabled:""},{default:a(()=>[o(n(u.pack.disabledStatus),1)]),_:1}),t(e,{disabled:"",text:"",outline:""},{default:a(()=>[o(n(u.pack.disabledStatus),1)]),_:1}),t(e,{disabled:"",text:""},{default:a(()=>[o(n(u.pack.disabledStatus),1)]),_:1}),t(l,null,{default:a(()=>[o(n(u.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"primary"},{default:a(()=>[o(n(u.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"info","loading-type":"rect"},{default:a(()=>[o(n(u.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"success","loading-type":"disappear"},{default:a(()=>[o(n(u.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"danger","loading-type":"cube"},{default:a(()=>[o(n(u.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"warning","loading-type":"wave"},{default:a(()=>[o(n(u.pack.loadingStatus),1)]),_:1}),t(l,null,{default:a(()=>[o(n(u.pack.buttonSize),1)]),_:1}),t(e,{type:"primary"},{default:a(()=>[o(n(u.pack.normalButton),1)]),_:1}),t(e,{type:"success",size:"small"},{default:a(()=>[o(n(u.pack.smallButton),1)]),_:1}),t(e,{type:"warning",size:"mini"},{default:a(()=>[o(n(u.pack.miniButton),1)]),_:1}),t(e,{type:"danger",size:"large"},{default:a(()=>[o(n(u.pack.largeButton),1)]),_:1}),t(l,null,{default:a(()=>[o(n(u.pack.blockButton),1)]),_:1}),t(e,{block:"",type:"primary"},{default:a(()=>[o(n(u.pack.blockButton),1)]),_:1}),t(l,null,{default:a(()=>[o(n(u.pack.customColor),1)]),_:1}),t(e,{color:"#69dbaa","text-color":"#eee"},{default:a(()=>[o(n(u.pack.backgroundTextColor),1)]),_:1}),t(e,{color:"linear-gradient(to right, #69dbaa, #3a7afe)","text-color":"#fff"},{default:a(()=>[o(n(u.pack.linearGradientColor),1)]),_:1}),t(l,null,{default:a(()=>[o(n(u.pack.roundButton),1)]),_:1}),t(e,{type:"primary",round:""},{default:a(()=>[t(r,{name:"plus"})]),_:1}),t(e,{type:"info",round:""},{default:a(()=>[t(r,{name:"information"})]),_:1}),t(e,{type:"success",round:""},{default:a(()=>[t(r,{name:"check"})]),_:1}),t(e,{type:"warning",round:""},{default:a(()=>[t(r,{name:"warning"})]),_:1}),t(e,{type:"danger",round:""},{default:a(()=>[t(r,{name:"window-close"})]),_:1}),t(l,null,{default:a(()=>[o(n(u.pack.event),1)]),_:1}),t(e,{type:"success",onClick:u.handleClick},{default:a(()=>[o(n(u.pack.click),1)]),_:1},8,["onClick"]),t(e,{type:"success",onTouchstart:u.handleTouchstart},{default:a(()=>[o(n(u.pack.touchstart),1)]),_:1},8,["onTouchstart"]),t(e,{type:"success",onClick:u.handleAutoLoadingClick,"auto-loading":""},{default:a(()=>[o(n(u.pack.autoLoading),1)]),_:1},8,["onClick"])],64)}var ot=x(N,[["render",I],["__scopeId","data-v-88161b58"]]);export{ot as default};
