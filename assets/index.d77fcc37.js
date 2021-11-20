import{t as h}from"./shared.cba5a5a3.js";import{_ as $}from"./elevation.a5b7a62e.js";import{q as A,b as z,o,c as t,a as l,n as p,f as v,m as F,A as y,B as P,l as i,t as n,r as C,x as U,H as j,d as S,h as a,i as _,V as D,W as E}from"./vendor.8a125dba.js";import{A as I}from"./AppType.9a1ca989.js";import{d as T}from"./index.77fe3760.js";import{u as L,a as B,_ as W,b as M,c as H}from"./en-US.51e06fb5.js";import{w as q,a as G}from"./utils.efdc8a96.js";function J(e){return["linear","circle"].includes(e)}const K={mode:{type:String,default:"linear",validator:J},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},size:{type:Number,default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}};const O=A({name:"VarProgress",inheritAttrs:!1,props:K,setup(e){const d=z(()=>{const s=h(e.value),f=s>100?100:s,u=s>100?100:Math.round(s);return{width:`${f}%`,roundValue:`${u}%`}}),g=z(()=>{const{size:s,lineWidth:f,value:u}=e,c=`0 0 ${s} ${s}`,r=h(u)>100?100:Math.round(h(u)),w=(s-h(f))/2,k=2*Math.PI*w,V=`${r/100*k}, ${k}`;return{viewBox:c,radius:w,strokeDasharray:V,perimeter:k,roundValue:`${r}%`}});return{linearProps:d,circleProps:g}}}),Q={class:"var-progress"},R={key:0,class:"var-progress-linear"},X=["viewBox"],Y=["cx","cy","r","stroke-width"],Z=["cx","cy","r","stroke-width"];function x(e,d,g,s,f,u){return o(),t("div",Q,[e.mode==="linear"?(o(),t("div",R,[l("div",y({class:"var-progress-linear__block",style:{height:`${e.lineWidth}px`}},e.$attrs),[e.track?(o(),t("div",{key:0,class:"var-progress-linear__background",style:p({background:e.trackColor})},null,4)):v("v-if",!0),l("div",{class:F(`var-progress-linear__certain${e.ripple?" var-progress-linear__ripple":""}`),style:p({background:e.color,width:e.linearProps.width})},null,6)],16),e.label?(o(),t("div",y({key:0,class:"var-progress-linear__label"},e.$attrs),[P(e.$slots,"default",{},()=>[i(n(e.linearProps.roundValue),1)])],16)):v("v-if",!0)])):v("v-if",!0),e.mode==="circle"?(o(),t("div",{key:1,class:"var-progress-circle",style:p({width:`${e.size}px`,height:`${e.size}px`})},[(o(),t("svg",{class:"var-progress-circle__svg",style:p({transform:`rotate(${e.rotate-90}deg)`}),viewBox:e.circleProps.viewBox},[e.track?(o(),t("circle",{key:0,class:"var-progress-circle__background",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:p({strokeDasharray:e.circleProps.perimeter,stroke:e.trackColor})},null,12,Y)):v("v-if",!0),l("circle",{class:"var-progress-circle__certain",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:p({strokeDasharray:e.circleProps.strokeDasharray,stroke:e.color})},null,12,Z)],12,X)),e.label?(o(),t("div",y({key:0,class:"var-progress-circle__label"},e.$attrs),[P(e.$slots,"default",{},()=>[i(n(e.circleProps.roundValue),1)])],16)):v("v-if",!0)],4)):v("v-if",!0)])}var m=$(O,[["render",x]]);m.install=function(e){e.component(m.name,m)};var ee={circle:"\u73AF\u5F62\u8FDB\u5EA6\u6761",style:"\u81EA\u5B9A\u4E49\u6837\u5F0F",basicUsage:"\u57FA\u672C\u4F7F\u7528",showLabel:"\u663E\u793A\u6807\u7B7E",hideTrack:"\u9690\u85CF\u8F68\u9053"},se={circle:"Circle Progress",basicUsage:"Basic Usage",style:"Custom Style",showLabel:"Show Label",hideTrack:"Hide Track"};const{add:N,use:ae,pack:re,packs:ze,merge:Pe}=L(),le=e=>{H(e),ae(e)};B("zh-CN",W);B("en-US",M);N("zh-CN",ee);N("en-US",se);const oe={name:"ProgressExample",components:{VarProgress:m,AppType:I},setup(){const e=C(0),d=C(0);return U(()=>{d.value=window.setInterval(()=>{e.value>=100?e.value=0:e.value+=20},1e3)}),q(le),G(T),j(()=>{window.clearInterval(d.value)}),{value:e,pack:re}}},b=e=>(D("data-v-23f3cee2"),e=e(),E(),e),te={class:"progress-demo"},ie=b(()=>l("div",{class:"space"},null,-1)),ce={class:"progress-demo__basic"},ne={class:"progress-demo__label"},de=i("success"),ue={class:"progress-demo__style"},pe={class:"progress-demo__circle"},ve=b(()=>l("div",{class:"space"},null,-1)),_e=b(()=>l("div",{class:"space"},null,-1)),fe={class:"progress-demo__circle"};function he(e,d,g,s,f,u){const c=S("app-type"),r=S("var-progress");return o(),t("div",te,[ie,l("div",ce,[a(c,null,{default:_(()=>[i(n(s.pack.basicUsage),1)]),_:1}),a(r,{value:20,track:!1}),a(r,{value:s.value,track:!1},null,8,["value"]),a(r,{value:100,track:!1})]),l("div",ne,[a(c,null,{default:_(()=>[i(n(s.pack.showLabel),1)]),_:1}),a(r,{value:30,label:""}),a(r,{value:s.value,label:""},null,8,["value"]),a(r,{value:100,label:""},{default:_(()=>[de]),_:1})]),l("div",ue,[a(c,null,{default:_(()=>[i(n(s.pack.style),1)]),_:1}),a(r,{value:30,"line-width":"8",color:"#ff9f00"}),a(r,{value:60,"line-width":"8",color:"#ff9f00","track-color":"#f5cb90"}),a(r,{value:80,ripple:"","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),a(c,null,{default:_(()=>[i(n(s.pack.circle),1)]),_:1}),l("div",pe,[a(r,{mode:"circle",value:30,"line-width":"5",size:56}),ve,a(r,{mode:"circle",label:"",value:s.value,"line-width":"5",size:56},null,8,["value"]),_e,a(r,{mode:"circle",label:"",value:100,"line-width":"5",size:56})]),a(c,null,{default:_(()=>[i(n(s.pack.hideTrack),1)]),_:1}),l("div",fe,[a(r,{mode:"circle",value:50,size:56,track:!1})])])}var Ce=$(oe,[["render",he],["__scopeId","data-v-23f3cee2"]]);export{Ce as default};