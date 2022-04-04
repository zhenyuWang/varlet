import{_ as e}from"./elevation.229458c1.js";import{e as l,o as c,c as p,a as s,i as n,j as o,m as a,U as r}from"./vendor.49f89f0d.js";const d={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"\u6D4F\u89C8\u5668\u9002\u914D",-1),u=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,[a("\u7EC4\u4EF6\u5E93\u63D0\u4F9B\u79FB\u52A8\u7AEF\u548C\u684C\u9762\u7AEF\u9002\u914D\u65B9\u6848\uFF0C \u79FB\u52A8\u7AEF\u4F7F\u7528 "),s("code",null,"postcss-px-to-viewport"),a(" \u65B9\u6848\u8FDB\u884C\u9002\u914D\uFF0C \u684C\u9762\u7AEF\u4F7F\u7528 "),s("code",null,"@varlet/touch-emulator"),a(" \u65B9\u6848\u8FDB\u884C\u9002\u914D\u3002")])],-1),_={class:"card"},m=r("<h3>\u79FB\u52A8\u7AEF\u9002\u914D</h3><p>\u7EC4\u4EF6\u5E93\u8BBE\u8BA1\u57FA\u4E8E <code>375px</code> \u5BBD\u5EA6\u8BBE\u8BA1\u7A3F\uFF0C\u63A8\u8350\u4F7F\u7528 postcss \u63D2\u4EF6\u5C06 <code>px</code> \u5355\u4F4D\u8F6C\u6362\u6210 <code>vw</code> \u5355\u4F4D\u4ECE\u800C\u5B9E\u73B0\u79FB\u52A8\u7AEF\u9002\u914D\u3002 \u5728 <code>Webpack/Vite</code> \u9879\u76EE\u6839\u8DEF\u5F84\u4E0B\u521B\u5EFA <code>postcss.config.js</code> \u5E76\u505A\u5982\u4E0B\u914D\u7F6E\u4E4B\u540E <code>375px -&gt; 100vw</code></p>",2),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add postcss-px-to-viewport -D
`)])],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),a(`
`),s("span",{class:"hljs-built_in"},"module"),a(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),a(`: {
    `),s("span",{class:"hljs-string"},"'postcss-px-to-viewport'"),a(`: {
      `),s("span",{class:"hljs-attr"},"viewportWidth"),a(": "),s("span",{class:"hljs-number"},"375"),a(`,
      `),s("span",{class:"hljs-attr"},"unitPrecision"),a(": "),s("span",{class:"hljs-number"},"6"),a(`,
      `),s("span",{class:"hljs-attr"},"unitToConvert"),a(": "),s("span",{class:"hljs-string"},"'px'"),a(`,
      `),s("span",{class:"hljs-attr"},"propList"),a(": ["),s("span",{class:"hljs-string"},"'*'"),a(`],
    }
  }
}
`)])],-1),x={class:"card"},f=s("h3",null,"\u684C\u9762\u7AEF\u9002\u914D",-1),w=s("p",null,[a("\u7531\u4E8E\u7EC4\u4EF6\u5E93\u4EA4\u4E92\u4E8B\u4EF6\u4F7F\u7528 "),s("code",null,"touch"),a(" \u4E8B\u4EF6\u8FDB\u884C\u5F00\u53D1\uFF0C\u4E0D\u652F\u6301\u684C\u9762\u7AEF\u7684 "),s("code",null,"mouse"),a(" \u4E8B\u4EF6\uFF0C \u63A8\u8350\u4F7F\u7528 "),s("code",null,"@varlet/touch-emulator"),a(" \u5C06 "),s("code",null,"touch -> mouse"),a(" \u4ECE\u800C\u5B9E\u73B0\u684C\u9762\u7AEF\u9002\u914D\u3002")],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/touch-emulator
`)])],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),a(`
`)])],-1);function y(N,V,k,C,$,B){const t=l("var-site-code-example");return c(),p("div",h,[i,u,s("div",_,[m,n(t,null,{default:o(()=>[j]),_:1}),n(t,null,{default:o(()=>[v]),_:1})]),s("div",x,[f,w,n(t,null,{default:o(()=>[b]),_:1}),n(t,null,{default:o(()=>[g]),_:1})])])}var W=e(d,[["render",y]]);export{W as default};
