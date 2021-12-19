import{_ as e}from"./elevation.6f2b205f.js";import{e as c,o as p,c as r,a as s,i as n,j as t,m as a}from"./vendor.8243c41e.js";const h={components:{}},o={class:"varlet-site-doc"},i=s("h1",null,"\u5FEB\u901F\u5F00\u59CB",-1),d=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u8FD9\u91CC\u4E3A\u60A8\u4ECB\u7ECD\u5E38\u89C1\u5F00\u53D1\u6A21\u5F0F\u4E0B\u63A5\u5165\u7EC4\u4EF6\u5E93\u7684\u6700\u57FA\u672C\u65B9\u5F0F\u3002")],-1),j=s("div",{class:"card"},[s("h3",null,"\u5B89\u88C5")],-1),_={class:"card"},m=s("h3",null,"CDN",-1),u=s("p",null,[s("code",null,"varlet.js"),a(" \u5305\u542B\u7EC4\u4EF6\u5E93\u7684\u6240\u6709\u6837\u5F0F\u548C\u903B\u8F91, \u5F15\u5165\u5373\u53EF\u3002")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue@next"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>\u6309\u94AE</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1),g={class:"card"},f=s("h3",null,"Webpack/Vite",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," \u901A\u8FC7 npm \u6216 yarn \u5B89\u88C5"),a(`
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`)])],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style.js'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1);function w(x,V,b,A,N,C){const l=c("var-site-code-example");return p(),r("div",o,[i,d,j,s("div",_,[m,u,n(l,null,{default:t(()=>[v]),_:1})]),s("div",g,[f,n(l,null,{default:t(()=>[k]),_:1}),n(l,null,{default:t(()=>[y]),_:1})])])}var q=e(h,[["render",w]]);export{q as default};
