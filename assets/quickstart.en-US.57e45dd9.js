import{_ as e}from"./elevation.6f2b205f.js";import{e as c,o as p,c as r,a as s,i as n,j as t,m as a}from"./vendor.8243c41e.js";const o={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"Quickstart",-1),d=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Here are the most basic ways to access component libraries in common development patterns.")],-1),j=s("div",{class:"card"},[s("h3",null,"Install")],-1),m={class:"card"},_=s("h3",null,"CDN",-1),u=s("p",null,[s("code",null,"varlet.js"),a(" contain all the styles and logic of the component library, and you can import them.")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue@next"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>Button</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1),g={class:"card"},f=s("h3",null,"Webpack/Vite",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install with npm or yarn"),a(`
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`)])],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style.js'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1);function w(b,x,V,A,B,N){const l=c("var-site-code-example");return p(),r("div",h,[i,d,j,s("div",m,[_,u,n(l,null,{default:t(()=>[v]),_:1})]),s("div",g,[f,n(l,null,{default:t(()=>[y]),_:1}),n(l,null,{default:t(()=>[k]),_:1})])])}var I=e(o,[["render",w]]);export{I as default};
