var B=Object.defineProperty,F=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var i=(e,a,o)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,v=(e,a)=>{for(var o in a||(a={}))k.call(a,o)&&i(e,o,a[o]);if(m)for(var o of m(a))y.call(a,o)&&i(e,o,a[o]);return e},V=(e,a)=>F(e,U(a));import{C as z}from"./index.44ef7434.js";import{A as E}from"./AppType.714e8ba5.js";import{d as b}from"./index.9b1139e6.js";import{w as h,a as S}from"./utils.3a4595f4.js";import{u as c,a as f,_ as D,b as N,c as A}from"./en-US.628e0d34.js";import{_ as w}from"./elevation.ef1405ab.js";import{q as _,$ as I,e as g,o as M,c as T,i as u,j as s,F as L,Z as R,_ as j,m as r,t as p,a as q}from"./vendor.49f89f0d.js";import"./index.8b4cefd8.js";import"./shared.506a394a.js";import"./elements.92736b4e.js";import"./provide.aed138f2.js";import"./components.721843ff.js";import"./index.f8492b74.js";import"./index.48ee5316.js";var P={basicUsage:"\u57FA\u672C\u4F7F\u7528",range:"\u8BBE\u7F6E\u53D6\u503C\u8303\u56F4",step:"\u8BBE\u7F6E\u6B65\u957F",toFixed:"\u4FDD\u7559\u5C0F\u6570",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",lazyChange:"\u5F02\u6B65\u53D8\u66F4",size:"\u8BBE\u7F6E\u5C3A\u5BF8",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u8BF7\u9009\u62E9\u5927\u4E8E5\u7684\u503C"},Z={basicUsage:"Basic Usage",range:"Set the value range",step:"Set step",toFixed:"Decimal length",disabled:"Disabled",readonly:"Readonly",lazyChange:"Asynchronous change",size:"Set size",validate:"Validate",validateMessage:"Please select a value greater than 5"};const{add:C,use:x,pack:G,packs:ve,merge:Ve}=c(),H=e=>{A(e),x(e)};f("zh-CN",D);f("en-US",N);C("zh-CN",P);C("en-US",Z);const J={name:"CounterExample",components:{VarCounter:z,AppType:E},setup(){const e=_({value:0,value2:0,value3:0,value4:0,value5:0,value6:0,value7:0,value8:0,value9:0}),a=(o,n)=>{setTimeout(()=>{n(o)},500)};return h(H),S(b),V(v({pack:G},I(e)),{handleBeforeChange:a})}},K=e=>(R("data-v-55143404"),e=e(),j(),e),O=K(()=>q("div",{class:"space"},null,-1));function Q(e,a,o,n,W,X){const d=g("app-type"),t=g("var-counter");return M(),T(L,null,[u(d,null,{default:s(()=>[r(p(n.pack.basicUsage),1)]),_:1}),u(t,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l)},null,8,["modelValue"]),u(d,null,{default:s(()=>[r(p(n.pack.range),1)]),_:1}),u(t,{min:0,max:5,modelValue:e.value2,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value2=l)},null,8,["modelValue"]),u(d,null,{default:s(()=>[r(p(n.pack.step),1)]),_:1}),u(t,{step:10,modelValue:e.value3,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value3=l)},null,8,["modelValue"]),u(d,null,{default:s(()=>[r(p(n.pack.toFixed),1)]),_:1}),u(t,{"decimal-length":1,modelValue:e.value4,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value4=l)},null,8,["modelValue"]),u(d,null,{default:s(()=>[r(p(n.pack.size),1)]),_:1}),u(t,{"input-text-size":"18px","input-width":"50px","button-size":"36px",modelValue:e.value5,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value5=l)},null,8,["modelValue"]),u(d,null,{default:s(()=>[r(p(n.pack.disabled),1)]),_:1}),u(t,{disabled:"",modelValue:e.value6,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value6=l)},null,8,["modelValue"]),u(d,null,{default:s(()=>[r(p(n.pack.readonly),1)]),_:1}),u(t,{readonly:"",modelValue:e.value7,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value7=l)},null,8,["modelValue"]),u(d,null,{default:s(()=>[r(p(n.pack.lazyChange),1)]),_:1}),u(t,{"lazy-change":"",modelValue:e.value8,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value8=l),onBeforeChange:n.handleBeforeChange},null,8,["modelValue","onBeforeChange"]),u(d,null,{default:s(()=>[r(p(n.pack.validate),1)]),_:1}),u(t,{rules:[l=>l>5||n.pack.validateMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=l=>e.value9=l)},null,8,["rules","modelValue"]),O],64)}var ge=w(J,[["render",Q],["__scopeId","data-v-55143404"]]);export{ge as default};
