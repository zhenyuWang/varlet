import{b as p,f as l}from"./components.40efc8e7.js";import{S as m,a as d}from"./provide.fe26be30.js";import{_ as c}from"./elevation.7fcd6f98.js";import{d as v,r as _,o as f,c as u,G as w,n as S}from"./vendor.4723551d.js";function I(){const{bindParent:e,parentProvider:t}=p(m),{index:r}=l(d);if(!e||!t||!r)throw Error("<var-swipe-item/> must in <var-swipe/>");return{index:r,swipe:t,bindSwipe:e}}const E=v({name:"VarSwipeItem",setup(){const e=_(0),{swipe:t,bindSwipe:r,index:n}=I(),{size:a,vertical:i}=t;return r({index:n,setTranslate:o=>{e.value=o}}),{size:a,vertical:i,translate:e}}});function P(e,t,r,n,a,i){return f(),u("div",{class:"var-swipe-item",style:S({width:e.vertical?void 0:`${e.size}px`,height:e.vertical?`${e.size}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`})},[w(e.$slots,"default")],4)}var s=c(E,[["render",P]]);s.install=function(e){e.component(s.name,s)};export{s as S};
