import{d as L,r as o,b as O,y as r,x as E,C as F,i,I as M,T as N,w as I,v as U,J as $,z as j}from"./vendor.49f89f0d.js";import{g as w,a as A,t as g}from"./elements.b75de382.js";import{u as V}from"./zIndex.8c13fd4c.js";import{u as X,e as Y,a,c as _}from"./components.5cba9644.js";import"./index.cb4064b0.js";function B(e){return["top","bottom"].includes(e)}const D={show:{type:Boolean,default:!1},alignment:{type:String,default:"top",validator:B},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:String,default:"body"},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},"onUpdate:show":{type:Function}};function H(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!$(e)}const{n:h,classes:J}=_("menu");var c=L({name:"VarMenu",props:D,setup(e,{slots:d}){const l=o(null),f=o(null),s=o(),m=o(0),v=o(0),{zIndex:b}=V(()=>e.show,1),{disabled:C}=X();let u=!1;const S=t=>t==="top"?w(l.value):w(l.value)-f.value.offsetHeight,x=()=>{u=!0},p=()=>{if(u){u=!1;return}!e.show||a(e["onUpdate:show"],!1)},n=()=>{m.value=S(e.alignment),v.value=A(l.value)},T=O(()=>({top:`calc(${m.value}px + ${g(e.offsetY)})`,left:`calc(${v.value}px + ${g(e.offsetX)})`,zIndex:b.value})),y=()=>i(N,{name:"var-menu",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:()=>[I(i("div",{class:J(h("menu"),"var-elevation--3"),ref:f,style:T.value,onClick:t=>{t.stopPropagation()}},[a(d.menu)]),[[U,e.show]])]});return r(()=>e.alignment,n),r(()=>e.show,async t=>{const{onOpen:k,onClose:z}=e;t&&(await j(),n()),t?a(k):a(z)}),r(()=>e.teleport,t=>{s.value=t}),E(()=>{s.value=e.teleport,n(),document.addEventListener("click",p),window.addEventListener("resize",n)}),F(()=>{document.removeEventListener("click",p),window.removeEventListener("resize",n)}),Y({resize:n}),()=>{let t;return i("div",{class:h(),ref:l,onClick:x},[a(d.default),s.value?i(M,{to:s.value,disabled:C.value},H(t=y())?t:{default:()=>[t]}):y()])}}});c.install=function(e){e.component(c.name,c)};export{c as M};
