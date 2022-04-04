import{_ as o}from"./elevation.229458c1.js";import{e as t,o as c,c as p,a as s,i as e,j as a,m as n}from"./vendor.49f89f0d.js";const r={components:{}},u={class:"varlet-site-doc"},h=s("h1",null,"\u6309\u9700\u5F15\u5165",-1),i=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u6309\u9700\u5F15\u5165\u907F\u514D\u4E86\u7EC4\u4EF6\u7684\u5168\u91CF\u5BFC\u5165\uFF0C\u53EF\u4EE5\u6709\u6548\u7684\u51CF\u5C11\u53D1\u5E03\u5305\u7684\u5927\u5C0F\u3002")],-1),d={class:"card"},m=s("h3",null,"\u624B\u52A8\u5F15\u5165",-1),_=s("p",null,[n("\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u90FD\u662F\u4E00\u4E2A "),s("code",null,"Vue\u63D2\u4EF6"),n("\uFF0C\u5E76\u7531 "),s("code",null,"\u7EC4\u4EF6\u903B\u8F91"),n(" \u548C "),s("code",null,"\u6837\u5F0F\u6587\u4EF6"),n(" \u7EC4\u6210\uFF0C\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u624B\u52A8\u5F15\u5165\u4F7F\u7528\u3002")],-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index.js'"),n(`

createApp().use(Button)
`)])],-1),v={class:"card"},g=s("h3",null,"\u81EA\u52A8\u5F15\u5165",-1),f=s("p",null,[n("\u6240\u6709\u58F0\u660E\u5728\u6A21\u677F\u4E2D\u7684\u7EC4\u4EF6\uFF0C\u90FD\u4F1A\u88AB "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" \u63D2\u4EF6\u81EA\u52A8\u626B\u63CF\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5F15\u5165"),s("code",null,"\u7EC4\u4EF6\u903B\u8F91"),n("\u548C"),s("code",null,"\u6837\u5F0F\u6587\u4EF6"),n("\u5E76"),s("code",null,"\u6CE8\u518C\u7EC4\u4EF6"),n("\u3002")],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," \u5B89\u88C5\u63D2\u4EF6"),n(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),n(`
npm i unplugin-vue-components -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add unplugin-vue-components -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add unplugin-vue-components -D
`)])],-1),y=s("h4",null,"Vue Cli",-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vue.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"const"),n(" Components = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" { VarletUIResolver } = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`)

`),s("span",{class:"hljs-built_in"},"module"),n(`.exports = {
  `),s("span",{class:"hljs-attr"},"configureWebpack"),n(`: {
    `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
      Components({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
      })
    ]
  }
}
`)])],-1),b=s("h4",null,"Vite",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" vue "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" components "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { VarletUIResolver } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { defineConfig } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vite'"),n(`

`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(` defineConfig({
  `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
    vue(),
    components({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
    })
  ]
})
`)])],-1),V=s("p",null,"\u5B8C\u6210\u914D\u7F6E\u540E\u5982\u4E0B\u4F7F\u7528\u5373\u53EF",-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n("\u9ED8\u8BA4\u6309\u94AE"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1),B=s("p",null,[n("\u7279\u522B\u6CE8\u610F: \u5728\u6A21\u677F\u4E4B\u5916\u8C03\u7528\u7684\u51FD\u6570\u7EC4\u4EF6\u65E0\u6CD5\u88AB\u63D2\u4EF6\u626B\u63CF\uFF0C\u4ECD\u9700\u8981\u624B\u52A8\u5F15\u5165\u6837\u5F0F\u3002\u4F8B\u5982 "),s("code",null,"Snackbar"),n(" \u5C31\u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6\u3002")],-1);function D(I,N,R,U,$,q){const l=t("var-site-code-example");return c(),p("div",u,[h,i,s("div",d,[m,_,e(l,null,{default:a(()=>[j]),_:1})]),s("div",v,[g,f,e(l,null,{default:a(()=>[k]),_:1}),y,e(l,null,{default:a(()=>[w]),_:1}),b,e(l,null,{default:a(()=>[x]),_:1}),V,e(l,null,{default:a(()=>[C]),_:1}),B])])}var E=o(r,[["render",D]]);export{E as default};
