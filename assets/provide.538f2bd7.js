import{d as m,o as n,l,j as c,c as d,a as t,t as o,p as a,h as p,T as u}from"./vendor.49f89f0d.js";import{c as f,h as _,j as g}from"./components.5cba9644.js";import{_ as F}from"./elevation.4d11ec3f.js";const h={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const{n:v}=f("form-details"),M=m({name:"VarFormDetails",props:h,setup:()=>({n:v})});function y(e,s,I,T,B,C){return n(),l(u,{name:e.n()},{default:c(()=>[e.errorMessage||e.maxlengthText?(n(),d("div",{key:0,class:a(e.n())},[t("div",{class:a(e.n("message"))},o(e.errorMessage),3),t("div",{class:a(e.n("length"))},o(e.maxlengthText),3)],2)):p("v-if",!0)]),_:1},8,["name"])}var r=F(M,[["render",y]]);r.install=function(e){e.component(r.name,r)};const i=Symbol("FORM_BIND_FORM_ITEM_KEY");function N(){const{bindParent:e,parentProvider:s}=_(i);return{bindForm:e,form:s}}function k(){const{bindChildren:e,childProviders:s}=g(i);return{formItems:s,bindFormItems:e}}export{r as F,k as a,N as u};
