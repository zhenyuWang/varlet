import{F as W,u as G}from"./provide.8fd834d0.js";import{I as q}from"./index.f0ba8e12.js";import{b as h}from"./shared.506a394a.js";import{a as H}from"./components.8013e964.js";import{_ as J}from"./elevation.f7de2a7a.js";import{d as K,r as c,A as L,b as O,e as S,o as d,c as g,a as v,p as i,G as w,h as F,n as m,t as Q,i as X,z as Y,l as Z}from"./vendor.efca09d3.js";function _(e){return["text","password","number"].includes(e)}const x={modelValue:{type:String},type:{type:String,default:"text",validator:_},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onInput:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const ee=K({name:"VarInput",components:{VarIcon:q,VarFormDetails:W},props:x,setup(e){const a=c(`var-input-${L().uid}`),f=c(null),p=c(!1),V=O(()=>{const{maxlength:l,modelValue:n}=e;return l?h(n)?`0 / ${l}`:`${String(n).length}/${l}`:""}),{bindForm:y,form:r}=G(),{errorMessage:b,validateWithTrigger:o,validate:D,resetValidation:C}=H(),u=l=>{Y(()=>{const{validateTrigger:n,rules:t,modelValue:s}=e;o(n,l,t,s)})},$=()=>{const{hint:l,modelValue:n}=e;if(!l&&!h(n))return"var-input--placeholder-hidden";if(l&&(!h(n)||p.value))return"var-input--placeholder-hint"},z=l=>{var n;p.value=!0,(n=e.onFocus)==null||n.call(e,l),u("onFocus")},T=l=>{var n;p.value=!1,(n=e.onBlur)==null||n.call(e,l),u("onBlur")},j=l=>{var t,s;const{value:n}=l.target;(t=e["onUpdate:modelValue"])==null||t.call(e,n),(s=e.onInput)==null||s.call(e,n,l),u("onInput")},N=l=>{var t;const{value:n}=l.target;(t=e.onChange)==null||t.call(e,n,l),u("onChange")},U=()=>{var M;const{disabled:l,readonly:n,clearable:t,onClear:s}=e;(r==null?void 0:r.disabled.value)||(r==null?void 0:r.readonly.value)||l||n||!t||((M=e["onUpdate:modelValue"])==null||M.call(e,""),s==null||s(""),u("onClear"))},A=l=>{const{disabled:n,onClick:t}=e;(r==null?void 0:r.disabled.value)||n||(t==null||t(l),u("onClick"))},I=()=>{var l;(l=e["onUpdate:modelValue"])==null||l.call(e,""),C()},k=()=>D(e.rules,e.modelValue),E=()=>{f.value.focus()},P=()=>{f.value.blur()},R={reset:I,validate:k,resetValidation:C};return y==null||y(R),{el:f,id:a,isFocus:p,errorMessage:b,maxlengthText:V,formDisabled:r==null?void 0:r.disabled,formReadonly:r==null?void 0:r.readonly,isEmpty:h,computePlaceholderState:$,handleFocus:z,handleBlur:T,handleInput:j,handleChange:N,handleClear:U,handleClick:A,validate:k,resetValidation:C,reset:I,focus:E,blur:P}}}),le={key:0,class:"var-input__autocomplete"},ne=["id","disabled","type","value","maxlength","rows"],ae=["id","disabled","type","value","maxlength"],oe=["for"];function re(e,a,f,p,V,y){const r=S("var-icon"),b=S("var-form-details");return d(),g("div",{class:i(["var-input var--box",[e.disabled?"var-input--disabled":null]]),onClick:a[8]||(a[8]=(...o)=>e.handleClick&&e.handleClick(...o))},[v("div",{class:i(["var-input__controller",[e.isFocus?"var-input--focus":null,e.errorMessage?"var-input--error":null,e.formDisabled||e.disabled?"var-input--disabled":null]]),style:m({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[v("div",{class:i(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[w(e.$slots,"prepend-icon")],2),v("div",{class:i(["var-input__wrap",[e.hint?null:"var-input--non-hint"]])},[e.type==="password"?(d(),g("input",le)):F("v-if",!0),e.textarea?(d(),g("textarea",{key:1,class:i(["var-input__input var-input--textarea",[e.formDisabled||e.disabled?"var-input--disabled":null,e.errorMessage?"var-input--caret-error":null]]),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:m({color:e.textColor,caretColor:e.errorMessage?null:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:a[0]||(a[0]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:a[1]||(a[1]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onInput:a[2]||(a[2]=(...o)=>e.handleInput&&e.handleInput(...o)),onChange:a[3]||(a[3]=(...o)=>e.handleChange&&e.handleChange(...o))},`
        `,46,ne)):(d(),g("input",{key:2,class:i(["var-input__input",[e.formDisabled||e.disabled?"var-input--disabled":null,e.errorMessage?"var-input--caret-error":null]]),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,style:m({color:e.textColor,caretColor:e.errorMessage?null:e.focusColor}),onFocus:a[4]||(a[4]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:a[5]||(a[5]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onInput:a[6]||(a[6]=(...o)=>e.handleInput&&e.handleInput(...o)),onChange:a[7]||(a[7]=(...o)=>e.handleChange&&e.handleChange(...o))},null,46,ae)),v("label",{class:i(["var--ellipsis",[e.isFocus?"var-input--focus":null,e.errorMessage?"var-input--error":null,e.textarea?"var-input__textarea-placeholder":"var-input__placeholder",e.computePlaceholderState(),e.hint?null:"var-input--placeholder-non-hint"]]),style:m({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor}),for:e.id},Q(e.placeholder),15,oe)],2),v("div",{class:i(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[w(e.$slots,"append-icon",{},()=>[e.clearable&&!e.isEmpty(e.modelValue)?(d(),Z(r,{key:0,class:"var-input__clear-icon","var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["onClick"])):F("v-if",!0)])],2)],6),e.line?(d(),g("div",{key:0,class:i(["var-input__line",[e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:m({background:e.errorMessage?void 0:e.blurColor})},[v("div",{class:i(["var-input__dot",[e.isFocus?"var-input--spread":null,e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:m({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):F("v-if",!0),X(b,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"])],2)}var B=J(ee,[["render",re]]);B.install=function(e){e.component(B.name,B)};export{B as I};
