var z=Object.defineProperty,C=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var E=(e,a,i)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,R=(e,a)=>{for(var i in a||(a={}))S.call(a,i)&&E(e,i,a[i]);if(F)for(var i of F(a))D.call(a,i)&&E(e,i,a[i]);return e},U=(e,a)=>C(e,w(a));import{U as _}from"./index.8b3a2586.js";import{B as L}from"./index.e249d336.js";import{S as T}from"./index.352daa0f.js";import{I as M}from"./index.7c3210da.js";import{D as N}from"./index.b87f8014.js";import{S as f}from"./index.f6c2ec4b.js";import{A as I}from"./AppType.60961db1.js";import{d as O}from"./index.9b1139e6.js";import{w as P,a as q}from"./utils.1735a57b.js";import{u as Z,a as b,_ as G,b as H,c as J}from"./en-US.628e0d34.js";import{_ as K}from"./elevation.69c766bc.js";import{q as Q,$ as W,e as m,o as v,c as g,i as t,j as r,F as A,Z as X,_ as Y,m as s,t as d,k as x,a as $}from"./vendor.49f89f0d.js";import"./provide.672dbeae.js";import"./components.721843ff.js";import"./shared.506a394a.js";import"./index.5e919428.js";import"./lock.c5636ec8.js";import"./index.48ee5316.js";import"./zIndex.8c13fd4c.js";import"./index.e35ca8e8.js";import"./index.025f3280.js";import"./index.54544b7c.js";import"./provide.5f19ca53.js";import"./elements.6395be39.js";import"./index.20ffaab4.js";import"./index.1b93437b.js";var ee={basicUsage:"\u57FA\u672C\u4F7F\u7528",preview:"\u6587\u4EF6\u9884\u89C8",state:"\u4E0A\u4F20\u72B6\u6001",maxlength:"\u6587\u4EF6\u6570\u91CF\u9650\u5236",maxsize:"\u6587\u4EF6\u5927\u5C0F\u9650\u5236",beforeRead:"\u4E0A\u4F20\u9884\u5904\u7406",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u5B58\u5728\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6",style:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",upload:"\u4E0A\u4F20",beforeRemove:"\u5220\u9664\u524D\u5904\u7406",removeTitle:"\u662F\u5426\u5220\u9664?",removeMessage:"\u5220\u9664\u540E\u65E0\u6CD5\u64A4\u56DE",fileSizeExceedsLimit:"\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236",fileLessThen:"\u6587\u4EF6\u5C0F\u4E8E1M\uFF0C\u4E0A\u4F20\u6210\u529F",fileLargeThen:"\u6587\u4EF6\u5927\u4E8E1M\uFF0C\u4E0D\u80FD\u4E0A\u4F20",customRender:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u6587\u4EF6\u5217\u8868"},ae={basicUsage:"Basic Usage",preview:"File Preview",state:"Upload State",maxlength:"File Maxlength",maxsize:"File Size Limit",beforeRead:"Upload Preprocessing",disabled:"Disabled",readonly:"Readonly",validate:"Validate",validateMessage:"There is a file that failed to upload",style:"Customize upload styles",upload:"Upload",beforeRemove:"Remove Preprocessing",removeTitle:"Delete or not?",removeMessage:"Cannot be withdrawn after deletion",fileSizeExceedsLimit:"file size exceeds limit",fileLessThen:"the file is less than 1M, the upload is successful",fileLargeThen:"the file is larger than 1M and cannot be uploaded",customRender:"Custom render file list"};const{add:B,use:le,pack:p,packs:Te,merge:Me}=Z(),te=e=>{J(e),le(e)};b("zh-CN",G);b("en-US",H);B("zh-CN",ee);B("en-US",ae);const oe={name:"UploaderExample",components:{VarUploader:_,VarButton:L,VarSpace:T,AppType:I,VarIcon:M},setup(){const e=Q({files:[],files2:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"https://varlet.gitee.io/varlet-ui/cover.jpg"}],files3:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"loading"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"success"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files4:[],files5:[],files6:[],files7:[],files8:[],files9:[],files10:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files11:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg"}],files12:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"loading"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"success"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}]}),a=u=>console.log(u),i=u=>{u.state="loading",setTimeout(()=>{u.state="success"},1e3)},o=()=>{f.warning(p.value.fileSizeExceedsLimit)},c=u=>u.file.size<=1*1024*1024?(f.success(p.value.fileLessThen),!0):(f.warning(p.value.fileLargeThen),!1),V=async()=>await N({title:p.value.removeTitle,message:p.value.removeMessage})==="confirm";return P(te),q(O),U(R({pack:p},W(e)),{handleAfterRead:a,handleAfterRead2:i,handleOversize:o,handleBeforeRead:c,handleBeforeRemove:V})}},ue=e=>(X("data-v-607ff8fd"),e=e(),Y(),e),re=["src"],ie=ue(()=>$("div",{class:"space"},null,-1));function se(e,a,i,o,c,V){const u=m("app-type"),n=m("var-uploader"),h=m("var-button"),k=m("var-icon"),y=m("var-space");return v(),g(A,null,[t(u,null,{default:r(()=>[s(d(o.pack.basicUsage),1)]),_:1}),t(n,{modelValue:e.files,"onUpdate:modelValue":a[0]||(a[0]=l=>e.files=l),onAfterRead:o.handleAfterRead},null,8,["modelValue","onAfterRead"]),t(u,null,{default:r(()=>[s(d(o.pack.preview),1)]),_:1}),t(n,{modelValue:e.files2,"onUpdate:modelValue":a[1]||(a[1]=l=>e.files2=l)},null,8,["modelValue"]),t(u,null,{default:r(()=>[s(d(o.pack.state),1)]),_:1}),t(n,{modelValue:e.files3,"onUpdate:modelValue":a[2]||(a[2]=l=>e.files3=l),onAfterRead:o.handleAfterRead2},null,8,["modelValue","onAfterRead"]),t(u,null,{default:r(()=>[s(d(o.pack.maxlength),1)]),_:1}),t(n,{modelValue:e.files4,"onUpdate:modelValue":a[3]||(a[3]=l=>e.files4=l),maxlength:1},null,8,["modelValue"]),t(u,null,{default:r(()=>[s(d(o.pack.maxsize),1)]),_:1}),t(n,{modelValue:e.files5,"onUpdate:modelValue":a[4]||(a[4]=l=>e.files5=l),maxsize:1024,onOversize:o.handleOversize},null,8,["modelValue","onOversize"]),t(u,null,{default:r(()=>[s(d(o.pack.beforeRead),1)]),_:1}),t(n,{modelValue:e.files7,"onUpdate:modelValue":a[5]||(a[5]=l=>e.files7=l),onBeforeRead:o.handleBeforeRead},null,8,["modelValue","onBeforeRead"]),t(u,null,{default:r(()=>[s(d(o.pack.disabled),1)]),_:1}),t(n,{disabled:"",modelValue:e.files8,"onUpdate:modelValue":a[6]||(a[6]=l=>e.files8=l)},null,8,["modelValue"]),t(u,null,{default:r(()=>[s(d(o.pack.readonly),1)]),_:1}),t(n,{readonly:"",modelValue:e.files9,"onUpdate:modelValue":a[7]||(a[7]=l=>e.files9=l)},null,8,["modelValue"]),t(u,null,{default:r(()=>[s(d(o.pack.beforeRemove),1)]),_:1}),t(n,{modelValue:e.files11,"onUpdate:modelValue":a[8]||(a[8]=l=>e.files11=l),onBeforeRemove:o.handleBeforeRemove},null,8,["modelValue","onBeforeRemove"]),t(u,null,{default:r(()=>[s(d(o.pack.style),1)]),_:1}),t(n,{modelValue:e.files6,"onUpdate:modelValue":a[9]||(a[9]=l=>e.files6=l)},{default:r(()=>[t(h,{type:"primary"},{default:r(()=>[s(d(o.pack.upload),1)]),_:1})]),_:1},8,["modelValue"]),t(u,null,{default:r(()=>[s(d(o.pack.validate),1)]),_:1}),t(n,{rules:[(l,j)=>j.getError(l).length===0||o.pack.validateMessage],modelValue:e.files10,"onUpdate:modelValue":a[10]||(a[10]=l=>e.files10=l)},null,8,["rules","modelValue"]),t(u,null,{default:r(()=>[s(d(o.pack.customRender),1)]),_:1}),t(y,null,{default:r(()=>[(v(!0),g(A,null,x(e.files12,l=>(v(),g("img",{class:"custom-uploader-file",key:l.id,src:l.cover},null,8,re))),128)),t(n,{"hide-list":"",modelValue:e.files12,"onUpdate:modelValue":a[11]||(a[11]=l=>e.files12=l)},{default:r(()=>[t(h,{round:"",type:"primary"},{default:r(()=>[t(k,{size:28,name:"upload"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),ie],64)}var Ne=K(oe,[["render",se],["__scopeId","data-v-607ff8fd"]]);export{Ne as default};
