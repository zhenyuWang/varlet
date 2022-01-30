import{_ as n}from"./elevation.f7de2a7a.js";import{e as o,o as c,c as r,a as s,i as a,j as t,m as e}from"./vendor.efca09d3.js";const h={components:{}},p={class:"varlet-site-doc"},d=s("h1",null,"\u6697\u9ED1\u6A21\u5F0F",-1),i=s("p",null,"\u7EC4\u4EF6\u5E93\u7B2C\u4E00\u65B9\u63D0\u4F9B\u4E86\u6697\u9ED1\u6A21\u5F0F\u7684\u4E3B\u9898\uFF0C\u6697\u9ED1\u6A21\u5F0F\u7684\u4F18\u52BF\u5728\u4E8E\u5728\u5F31\u5149\u73AF\u5883\u4E0B\u5177\u6709\u66F4\u9AD8\u7684\u53EF\u8BFB\u6027\u3002",-1),u={class:"card"},j=s("h3",null,"\u5207\u6362\u4E3B\u9898",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-button"),e(),s("span",{class:"hljs-attr"},"block"),e(" @"),s("span",{class:"hljs-attr"},"click"),e("="),s("span",{class:"hljs-string"},'"toggleTheme"'),e(">")]),e("\u5207\u6362\u4E3B\u9898"),s("span",{class:"hljs-tag"},[e("</"),s("span",{class:"hljs-name"},"var-button"),e(">")]),e(`
`)])],-1),m=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),e(" dark "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui/es/themes/dark'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),e("("),s("span",{class:"hljs-params"}),e(")")]),e(` {
    `),s("span",{class:"hljs-keyword"},"let"),e(` currentTheme
    
    `),s("span",{class:"hljs-keyword"},"const"),e(" toggleTheme = "),s("span",{class:"hljs-function"},"() =>"),e(` {
      currentTheme = currentTheme ? `),s("span",{class:"hljs-literal"},"null"),e(` : dark
      StyleProvider(currentTheme)
    }
    
    `),s("span",{class:"hljs-keyword"},"return"),e(` { toggleTheme }
  }
}
`)])],-1),k=s("p",null,[e("\u6CE8\u5165\u7EC4\u4EF6\u5E93\u63A8\u8350\u7684"),s("code",null,"\u6587\u5B57\u989C\u8272"),e("\u548C"),s("code",null,"\u80CC\u666F\u989C\u8272"),e("\u53D8\u91CF\u6765\u63A7\u5236\u6574\u4F53\u989C\u8272")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-selector-tag"},"body"),e(` {
  `),s("span",{class:"hljs-attribute"},"transition"),e(": background-color ."),s("span",{class:"hljs-number"},"25s"),e(`;
  `),s("span",{class:"hljs-attribute"},"color"),e(": var(--"),s("span",{class:"hljs-attribute"},"color"),e(`-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),e(": var(--"),s("span",{class:"hljs-attribute"},"color"),e(`-body);
}
`)])],-1);function g(v,y,b,w,x,T){const l=o("var-site-code-example");return c(),r("div",p,[d,i,s("div",u,[j,a(l,null,{default:t(()=>[_]),_:1}),a(l,null,{default:t(()=>[m]),_:1}),k,a(l,null,{default:t(()=>[f]),_:1})])])}var B=n(h,[["render",g]]);export{B as default};
