import{_ as t}from"./elevation.229458c1.js";import{e as o,o as c,c as r,a as s,i as e,j as n,m as l}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},d=s("h1",null,"\u6697\u9ED1\u6A21\u5F0F",-1),i=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u7EC4\u4EF6\u5E93\u7B2C\u4E00\u65B9\u63D0\u4F9B\u4E86\u6697\u9ED1\u6A21\u5F0F\u7684\u4E3B\u9898\uFF0C\u6697\u9ED1\u6A21\u5F0F\u7684\u4F18\u52BF\u5728\u4E8E\u5728\u5F31\u5149\u73AF\u5883\u4E0B\u5177\u6709\u66F4\u9AD8\u7684\u53EF\u8BFB\u6027\u3002")],-1),u={class:"card"},_=s("h3",null,"\u5207\u6362\u4E3B\u9898",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-button"),l(),s("span",{class:"hljs-attr"},"block"),l(" @"),s("span",{class:"hljs-attr"},"click"),l("="),s("span",{class:"hljs-string"},'"toggleTheme"'),l(">")]),l("\u5207\u6362\u4E3B\u9898"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-button"),l(">")]),l(`
`)])],-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(" dark "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/ui/es/themes/dark'"),l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/ui'"),l(`

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),l("("),s("span",{class:"hljs-params"}),l(")")]),l(` {
    `),s("span",{class:"hljs-keyword"},"let"),l(` currentTheme
    
    `),s("span",{class:"hljs-keyword"},"const"),l(" toggleTheme = "),s("span",{class:"hljs-function"},"() =>"),l(` {
      currentTheme = currentTheme ? `),s("span",{class:"hljs-literal"},"null"),l(` : dark
      StyleProvider(currentTheme)
    }
    
    `),s("span",{class:"hljs-keyword"},"return"),l(` { toggleTheme }
  }
}
`)])],-1),k=s("p",null,[l("\u6CE8\u5165\u7EC4\u4EF6\u5E93\u63A8\u8350\u7684"),s("code",null,"\u6587\u5B57\u989C\u8272"),l("\u548C"),s("code",null,"\u80CC\u666F\u989C\u8272"),l("\u53D8\u91CF\u6765\u63A7\u5236\u6574\u4F53\u989C\u8272")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),l(` {
  `),s("span",{class:"hljs-attribute"},"transition"),l(": background-color ."),s("span",{class:"hljs-number"},"25s"),l(`;
  `),s("span",{class:"hljs-attribute"},"color"),l(": var(--"),s("span",{class:"hljs-attribute"},"color"),l(`-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),l(": var(--"),s("span",{class:"hljs-attribute"},"color"),l(`-body);
}
`)])],-1);function f(g,b,y,w,x,T){const a=o("var-site-code-example");return c(),r("div",p,[d,i,s("div",u,[_,e(a,null,{default:n(()=>[j]),_:1}),e(a,null,{default:n(()=>[m]),_:1}),k,e(a,null,{default:n(()=>[v]),_:1})])])}var B=t(h,[["render",f]]);export{B as default};
