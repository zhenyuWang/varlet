import{_ as e}from"./elevation.229458c1.js";import{e as p,o as c,c as r,a as s,i as n,j as t,m as a}from"./vendor.49f89f0d.js";const o={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"\u5FEB\u901F\u5F00\u59CB",-1),d=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u8FD9\u91CC\u4E3A\u60A8\u4ECB\u7ECD\u5E38\u89C1\u5F00\u53D1\u6A21\u5F0F\u4E0B\u63A5\u5165\u7EC4\u4EF6\u5E93\u7684\u6700\u57FA\u672C\u65B9\u5F0F\u3002")],-1),j={class:"card"},u=s("h3",null,"\u5B89\u88C5",-1),m=s("h4",null,"CDN",-1),_=s("p",null,[s("code",null,"varlet.js"),a(" \u5305\u542B\u7EC4\u4EF6\u5E93\u7684\u6240\u6709\u6837\u5F0F\u548C\u903B\u8F91, \u5F15\u5165\u5373\u53EF\u3002")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue@next"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>\u6309\u94AE</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1),g=s("h4",null,"Webpack/Vite",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," \u901A\u8FC7 npm\u3001yarn \u6216 pnpm \u5B89\u88C5"),a(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/ui
`)])],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style.js'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1),k=s("div",{class:"card"},[s("h3",null,"\u5728\u7EBF\u7F16\u8F91\u7EC4\u4EF6"),s("p",null,[a("\u6211\u4EEC\u63D0\u4F9B\u4E86\u7F51\u9875\u7248\u7684\u7EC4\u4EF6\u7F16\u8F91\u5668\uFF0C\u65B9\u4FBF\u60A8\u5BF9\u7EC4\u4EF6\u5E93\u7684\u5404\u4E2A\u7EC4\u4EF6\u8FDB\u884C\u5FEB\u901F\u4E0A\u624B\u3001\u5728\u7EBF\u7F16\u8F91\u3001\u5206\u4EAB\u7ED9\u4ED6\u4EBA\u6216\u662F\u4E0B\u8F7D\u4EE3\u7801\u5305\u672C\u5730\u8FD0\u884C\u3002 \u60A8\u53EF\u4EE5\u70B9\u51FB\u7F51\u9875\u53F3\u4E0A\u89D2\u7684"),s("code",null,"{...}"),a("\u56FE\u6807\u6216\u662F"),s("a",{href:"https://varlet.gitee.io/varlet-ui-playground"},"\u8FD9\u91CC\u524D\u5F80")])],-1);function w(x,V,b,A,N,C){const l=p("var-site-code-example");return c(),r("div",h,[i,d,s("div",j,[u,m,_,n(l,null,{default:t(()=>[v]),_:1}),g,n(l,null,{default:t(()=>[f]),_:1}),n(l,null,{default:t(()=>[y]),_:1})]),k])}var q=e(o,[["render",w]]);export{q as default};
