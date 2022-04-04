import{_ as c}from"./elevation.229458c1.js";import{e,o as d,c as h,a,i as l,j as n,m as s,U as o}from"./vendor.49f89f0d.js";const r={components:{}},p={class:"varlet-site-doc"},j=a("h1",null,"\u9009\u9879\u5361\u7EC4",-1),i=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,[s("\u4F7F\u7528 "),a("code",null,"Tabs"),s("\u3001"),a("code",null,"Tab"),s(" \u5B9E\u73B0\u9009\u9879\u5361\u7EC4\u7684\u5207\u6362\u3002\u4F7F\u7528 "),a("code",null,"TabsItems"),s("\u3001"),a("code",null,"TabItem"),s(" \u5B9E\u73B0\u548C\u9009\u9879\u5361\u7EC4\u7684\u89C6\u56FE\u8054\u52A8\u3002")])],-1),m={class:"card"},b=a("h3",null,"\u5F15\u5165",-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Tabs, Tab, TabsItems, TabItem } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp()
  .use(Tabs)
  .use(Tab)
  .use(TabsItems)
  .use(TabItem)
`)])],-1),g={class:"card"},u=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98791"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98792"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98793"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`)])],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active }
  }
}
`)])],-1),y={class:"card"},T=a("h3",null,"\u5177\u540D\u9009\u9879\u5361",-1),x=a("p",null,[s("Tabs\u9ED8\u8BA4\u901A\u8FC7 "),a("code",null,"active"),s(" \u53BB\u5339\u914D Tab \u7684 "),a("code",null,"index"),s(" \u6765\u51B3\u5B9A\u54EA\u4E2A\u9009\u9879\u5361\u88AB\u6FC0\u6D3B\u3002 \u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7ED9Tab\u8BBE\u7F6E "),a("code",null,"name"),s(" \u6765\u547D\u540D\u9009\u9879\u5361\uFF0C\u8FD9\u65F6Tabs\u4F1A\u4F18\u5148\u5339\u914D "),a("code",null,"name"),s("\u3002")],-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"\u9009\u98791"'),s(">")]),s("\u9009\u98791"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"\u9009\u98792"'),s(">")]),s("\u9009\u98792"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"\u9009\u98793"'),s(">")]),s("\u9009\u98793"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`)])],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-string"},"'\u9009\u98791'"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active }
  }
}
`)])],-1),z={class:"card"},I=a("h3",null,"\u4FEE\u6539\u6837\u5F0F",-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
  `),a("span",{class:"hljs-attr"},"elevation"),s(`
  `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
  `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
  `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
  `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98791"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98792"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98793"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`)])],-1),P={class:"card"},S=a("h3",null,"\u7981\u7528\u9009\u9879",-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
  `),a("span",{class:"hljs-attr"},"elevation"),s(`
  `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
  `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
  `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
  `),a("span",{class:"hljs-attr"},"disabled-color"),s("="),a("span",{class:"hljs-string"},'"#aaa"'),s(`
  `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98791"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98792"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("\u7981\u7528\u9009\u9879"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`)])],-1),C={class:"card"},E=a("h3",null,"\u5F00\u542F\u6EDA\u52A8",-1),$=a("p",null,[s("\u5728\u9009\u9879\u5361\u6570\u91CF\u5728 "),a("code",null,"\u56DB\u4E2A\u4EE5\u4E0A"),s(" \u65F6\u81EA\u52A8\u5F00\u542F\u6EDA\u52A8\uFF0C\u70B9\u51FB\u9009\u9879\u5361\u81EA\u52A8\u6EDA\u52A8\u5230\u89C6\u53E3\u4E2D\u592E\u3002")],-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
  `),a("span",{class:"hljs-attr"},"elevation"),s(`
  `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
  `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
  `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
  `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98791"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98792"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98793"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98794"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98795"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98796"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98797"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98798"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`)])],-1),B={class:"card"},U=a("h3",null,"\u9009\u9879\u5782\u76F4\u5E03\u5C40",-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
  `),a("span",{class:"hljs-attr"},"elevation"),s(`
  `),a("span",{class:"hljs-attr"},"item-direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
  `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
  `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
  `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
  `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active5"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"information"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("\u9009\u98791"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("\u9009\u98792"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"error"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("\u9009\u98793"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`)])],-1),D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-selector-class"},".icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"5px"),s(`;
}
`)])],-1),F={class:"card"},G=a("h3",null,"\u5BB9\u5668\u5782\u76F4\u5E03\u5C40",-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"vertical-tabs"'),s(`
  `),a("span",{class:"hljs-attr"},"elevation"),s(`
  `),a("span",{class:"hljs-attr"},"layout-direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
  `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
  `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
  `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
  `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98791"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98792"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98793"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`)])],-1),J=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-selector-class"},".vertical-tabs"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"80px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"120px"),s(`;
}
`)])],-1),K={class:"card"},L=a("h3",null,"\u89C6\u56FE\u8054\u52A8",-1),M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
  `),a("span",{class:"hljs-attr"},"elevation"),s(`
  `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
  `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
  `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
  `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98791"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98792"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98793"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs-items"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
    \u545C\u5566\u5566\u5566\u706B\u8F66\u7B1B\uFF0C\u968F\u7740\u5954\u817E\u7684\u9A6C\u8E44\u3002
    \u5C0F\u59B9\u59B9\u5439\u7740\u53E3\u7434\uFF0C\u5915\u9633\u4E0B\u7F8E\u4E86\u526A\u5F71\u3002
    \u6211\u7528\u5B50\u5F39\u5199\u65E5\u8BB0\uFF0C\u4ECB\u7ECD\u5B8C\u4E86\u98CE\u666F\u3002
    \u63A5\u4E0B\u6765\u6362\u4ECB\u7ECD\u6211\u81EA\u5DF1\u3002
    \u6211\u867D\u7136\u662F\u4E2A\u725B\u4ED4\uFF0C\u5728\u9152\u5427\u53EA\u70B9\u725B\u5976\u3002
    \u4E3A\u4EC0\u4E48\u4E0D\u559D\u5564\u9152\uFF0C\u56E0\u4E3A\u5564\u9152\u4F24\u8EAB\u4F53\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
    \u5F88\u591A\u4EBA\u4E0D\u957F\u773C\u775B\uFF0C\u56A3\u5F20\u90FD\u9760\u6B66\u5668\u3002
    \u8D64\u624B\u7A7A\u62F3\u5C31\u7F29\u6210\u8682\u8681\u3002
    \u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
    \u4E0D\u7528\u9EBB\u70E6\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
    \u4F60\u4EEC\u4E00\u8D77\u4E0A\uFF0C\u6211\u5728\u8D76\u65F6\u95F4\u3002
    \u6BCF\u5929\u51B3\u6597\u89C2\u4F17\u90FD\u7D2F\u4E86\uFF0C\u82F1\u96C4\u4E5F\u7D2F\u4E86\u3002
    \u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
    \u526F\u6B4C\u4E0D\u957F\u4F60\u4EEC\u6709\u51E0\u4E2A\uFF0C\u4E00\u8D77\u4E0A\u597D\u4E86\u3002
    \u6B63\u4E49\u547C\u5524\u6211\uFF0C\u7F8E\u5973\u9700\u8981\u6211\u3002
    \u725B\u4ED4\u5F88\u5FD9\u7684\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs-items"),s(">")]),s(`
`)])],-1),O={class:"card"},Q=a("h3",null,"\u5F00\u542F\u7C98\u6027\u5E03\u5C40",-1),R=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
  `),a("span",{class:"hljs-attr"},"sticky"),s(`
  `),a("span",{class:"hljs-attr"},"elevation"),s(`
  `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#2979ff"'),s(`
  `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
  `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
  `),a("span",{class:"hljs-attr"},":offset-top"),s("="),a("span",{class:"hljs-string"},'"54"'),s(`
  `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98791"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98792"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("\u9009\u98793"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`)])],-1),W=o('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><h4>Tabs Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>\u6FC0\u6D3B\u7684\u9009\u9879\u5361\u6807\u8BC6, \u4F18\u5148\u5339\u914D name\uFF0C\u5176\u6B21\u662F index</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>layout-direction</code></td><td>\u9009\u9879\u5361\u7EC4\u7684\u5E03\u5C40\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>\u9009\u9879\u5361\u7684\u5E03\u5C40\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>\u662F\u5426\u56FA\u5B9A\u5728\u7A97\u53E3\u5E95\u90E8, \u53EF\u7528\u505A\u5E95\u90E8\u5BFC\u822A</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>\u9009\u9879\u5361\u7684\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>active-color</code></td><td>\u9009\u9879\u5361\u6FC0\u6D3B\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>\u9009\u9879\u5361\u672A\u6FC0\u6D3B\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>#646566</code></td></tr><tr><td><code>disabled-color</code></td><td>\u9009\u9879\u5361\u7981\u7528\u65F6\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>#e0e0e0</code></td></tr><tr><td><code>indicator-color</code></td><td>\u9009\u9879\u5361\u6FC0\u6D3B\u6307\u793A\u5668\u7684\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>indicator-size</code></td><td>\u9009\u9879\u5361\u6FC0\u6D3B\u6307\u793A\u5668\u7684\u5C3A\u5BF8</td><td><em>string | number</em></td><td><code>2px</code></td></tr><tr><td><code>elevation</code></td><td>\u662F\u5426\u542F\u7528\u9634\u5F71</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>\u662F\u5426\u542F\u7528\u7C98\u6027\u5E03\u5C40</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>\u5438\u9876\u8DDD\u79BB</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table><h4>Tab Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u9009\u9879\u5361\u7684\u540D\u5B57</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u9009\u9879\u5361</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabsItems Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>\u6FC0\u6D3B\u7684\u9009\u9879\u5361\u7684\u6807\u8BC6</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>\u662F\u5426\u5141\u8BB8\u6ED1\u52A8\u5207\u6362</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5141\u8BB8\u5FAA\u73AF\u5207\u6362</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabItem Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u89C6\u56FE\u7684\u540D\u5B57</td><td><em>string | number</em></td><td><code>index</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>resize</code></td><td>\u4EA7\u751F\u4F4D\u7F6E\u5927\u5C0F\u53D8\u5316\u65F6\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u8FDB\u884C\u91CD\u7ED8</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><h4>Tabs Events</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u9009\u9879\u5361\u65F6\u89E6\u53D1, \u5728\u9009\u9879\u5361 <code>disabled</code> \u72B6\u6001\u4E3A <code>true</code> \u65F6\u4E0D\u89E6\u53D1</td><td><code>active: string | number</code></td></tr><tr><td><code>change</code></td><td>\u5207\u6362\u9009\u9879\u5361\u65F6\u89E6\u53D1</td><td><code>active: string | number</code></td></tr></tbody></table><h4>Tab Events</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u9009\u9879\u5361\u65F6\u89E6\u53D1, \u5728 <code>disabled</code> \u72B6\u6001\u4E3A <code>true</code> \u65F6\u4E0D\u89E6\u53D1</td><td><code>active: string | number</code> <br> <code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><h4>Tabs Slots</h4><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9009\u9879\u5361\u7EC4\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table><h4>Tab Slots</h4><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9009\u9879\u5361\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table><h4>TabsItems Slots</h4><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u89C6\u56FE\u7EC4\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table><h4>TabItem Slots</h4><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u89C6\u56FE\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><h4>Tabs Variables</h4><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--tabs-item-horizontal-height</code></td><td><code>44px</code></td></tr><tr><td><code>--tabs-item-vertical-height</code></td><td><code>66px</code></td></tr><tr><td><code>--tabs-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tabs-indicator-size</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-indicator-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tabs-background</code></td><td><code>#fff</code></td></tr></tbody></table><h4>Tab Variables</h4><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--tab-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tab-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tab-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--tab-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--tab-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',6);function X(Y,Z,ss,as,ts,ls){const t=e("var-site-code-example");return d(),h("div",p,[j,i,a("div",m,[b,l(t,null,{default:n(()=>[v]),_:1})]),a("div",g,[u,l(t,null,{default:n(()=>[_]),_:1}),l(t,null,{default:n(()=>[f]),_:1})]),a("div",y,[T,x,l(t,null,{default:n(()=>[k]),_:1}),l(t,null,{default:n(()=>[w]),_:1})]),a("div",z,[I,l(t,null,{default:n(()=>[N]),_:1})]),a("div",P,[S,l(t,null,{default:n(()=>[V]),_:1})]),a("div",C,[E,$,l(t,null,{default:n(()=>[A]),_:1})]),a("div",B,[U,l(t,null,{default:n(()=>[q]),_:1}),l(t,null,{default:n(()=>[D]),_:1})]),a("div",F,[G,l(t,null,{default:n(()=>[H]),_:1}),l(t,null,{default:n(()=>[J]),_:1})]),a("div",K,[L,l(t,null,{default:n(()=>[M]),_:1})]),a("div",O,[Q,l(t,null,{default:n(()=>[R]),_:1})]),W])}var es=c(r,[["render",X]]);export{es as default};
