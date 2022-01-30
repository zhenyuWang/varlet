import{t as A}from"./elements.6395be39.js";import{t as F}from"./shared.506a394a.js";import{_ as m}from"./elevation.f7de2a7a.js";import{d as N,o as s,c as i,G as D,h as c,n as p,a as u,F as k,k as z,r as y,e as g,i as t,j as o,m as l,t as n}from"./vendor.efca09d3.js";import{B}from"./index.41e2bfcc.js";import{A as U}from"./AppType.934f96e7.js";import{d as j}from"./index.9b1139e6.js";import{w as E,a as M}from"./utils.5a4067e3.js";import{u as T,a as h,_ as V,b as H,c as L}from"./en-US.f8762106.js";import"./index.b50b8baf.js";import"./index.45528475.js";import"./index.167add38.js";import"./components.8013e964.js";const I={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},fullscreenZIndex:{type:[Number,String],default:100},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}};const R=N({name:"VarSkeleton",props:I,setup(){return{toSizeUnit:A,toNumber:F}}}),W={class:"var--box var-skeleton"},Z={key:0,class:"var-skeleton__data"},x={key:1,class:"var-skeleton__content"},G=u("div",{class:"var-skeleton--animation"},null,-1),q=[G],J={class:"var-skeleton__article"},K=u("div",{class:"var-skeleton--animation"},null,-1),O=[K],P={class:"var-skeleton__section"},Q=u("div",{class:"var-skeleton--animation"},null,-1),X=[Q],Y=u("div",{class:"var-skeleton--animation"},null,-1),$=[Y],ee=u("div",{class:"var-skeleton--animation"},null,-1),ae=[ee];function te(e,_,v,a,b,w){return s(),i("div",W,[e.loading?c("v-if",!0):(s(),i("div",Z,[D(e.$slots,"default")])),e.loading&&!e.fullscreen?(s(),i("div",x,[e.card?(s(),i("div",{key:0,class:"var-skeleton__card",style:p({height:e.toSizeUnit(e.cardHeight)})},q,4)):c("v-if",!0),u("div",J,[e.avatar?(s(),i("div",{key:0,class:"var-skeleton__avatar",style:p({width:e.toSizeUnit(e.avatarSize),height:e.toSizeUnit(e.avatarSize)})},O,4)):c("v-if",!0),u("div",P,[e.title?(s(),i("div",{key:0,class:"var-skeleton__title",style:p({width:e.toSizeUnit(e.titleWidth)})},X,4)):c("v-if",!0),(s(!0),i(k,null,z(e.toNumber(e.rows),(r,d)=>(s(),i("div",{class:"var-skeleton__row",key:r,style:p({width:e.toSizeUnit(e.rowsWidth[d])})},$,4))),128))])])])):c("v-if",!0),e.loading&&e.fullscreen?(s(),i("div",{key:2,class:"var-skeleton__fullscreen",style:p({zIndex:e.toNumber(e.fullscreenZIndex)})},ae,4)):c("v-if",!0)])}var f=m(R,[["render",te]]);f.install=function(e){e.component(f.name,f)};var oe={basicUsage:"\u57FA\u672C\u4F7F\u7528",displayTitle:"\u663E\u793A\u6807\u9898",customRowsHeight:"\u81EA\u5B9A\u4E49\u6BB5\u843D\u9AD8\u5EA6",displayAvatar:"\u663E\u793A\u5934\u50CF",displayCard:"\u663E\u793A\u5361\u7247",fullscreenMode:"\u5168\u5C4F\u6A21\u5F0F",toggleFullscreenMode:"\u5207\u6362\u5168\u5C4F\u6A21\u5F0F",loadingData:"\u52A0\u8F7D\u7684\u6570\u636E"},le={basicUsage:"Basic Usage",displayTitle:"Display Title",customRowsHeight:"Custom Row Heights",displayAvatar:"Display Avatar",displayCard:"Display Card",fullscreenMode:"Fullscreen Mode",toggleFullscreenMode:"Toggle Fullscreen Mode",loadingData:"Loading Data"};const{add:S,use:ne,pack:se,packs:we,merge:Ce}=T(),ie=e=>{L(e),ne(e)};h("zh-CN",V);h("en-US",H);S("zh-CN",oe);S("en-US",le);const re={name:"SkeletonExample",components:{VarSkeleton:f,VarButton:B,AppType:U},setup(){const e=y(!0),_=y(!1),v=()=>{_.value=!0,setTimeout(()=>{_.value=!1},2e3)};return E(ie),M(j),{pack:se,loading:e,fullscreenLoading:_,fullscreen:v}}};function de(e,_,v,a,b,w){const r=g("app-type"),d=g("var-skeleton"),C=g("var-button");return s(),i(k,null,[t(r,null,{default:o(()=>[l(n(a.pack.basicUsage),1)]),_:1}),t(d,{loading:a.loading},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.displayTitle),1)]),_:1}),t(d,{title:"",loading:a.loading},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.customRowsHeight),1)]),_:1}),t(d,{title:"",rows:3,loading:a.loading,"rows-width":["200px","100px","50px"]},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.displayAvatar),1)]),_:1}),t(d,{title:"",avatar:"",rows:3,loading:a.loading},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.displayCard),1)]),_:1}),t(d,{title:"",avatar:"",card:"",rows:3,loading:a.loading},{default:o(()=>[l(n(a.pack.loadingData),1)]),_:1},8,["loading"]),t(r,null,{default:o(()=>[l(n(a.pack.fullscreenMode),1)]),_:1}),t(C,{type:"danger",class:"button",onClick:a.fullscreen},{default:o(()=>[l(n(a.pack.toggleFullscreenMode),1)]),_:1},8,["onClick"]),t(d,{fullscreen:"",loading:a.fullscreenLoading},null,8,["loading"])],64)}var Ae=m(re,[["render",de],["__scopeId","data-v-77792966"]]);export{Ae as default};
