import{_ as e}from"./elevation.229458c1.js";import{e as c,o as d,c as o,a as s,i as l,j as n,m as t,U as r}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"\u56FE\u7247\u61D2\u52A0\u8F7D",-1),j=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u5728\u56FE\u7247\u53EF\u89C1\u65F6\u8FDB\u884C\u52A0\u8F7D")],-1),_={class:"card"},m=s("h3",null,"\u5F15\u5165",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Lazy } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Lazy)
`)])],-1),u={class:"card"},v=s("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"img"),t(),s("span",{class:"hljs-attr"},"v-lazy"),t("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),t(">")]),t(`
`)])],-1),f={class:"card"},x=s("h3",null,"\u80CC\u666F\u56FE\u61D2\u52A0\u8F7D",-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"v-lazy:background-image"),t("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),t(">")]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
`)])],-1),k={class:"card"},w=s("h3",null,"\u5185\u8054\u5C5E\u6027",-1),b=s("p",null,[t("\u53EF\u4EE5\u901A\u8FC7\u5185\u8054\u5C5E\u6027\u4FEE\u6539 "),s("code",null,"loading"),t("\u3001 "),s("code",null,"error"),t(" \u56FE\u7247\u548C"),s("code",null,"\u52A0\u8F7D\u5931\u8D25\u65F6\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D\u7684\u6B21\u6570"),t("\u3002")],-1),L=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"img"),t(`
  `),s("span",{class:"hljs-attr"},"v-lazy"),t("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),t(`
  `),s("span",{class:"hljs-attr"},"lazy-loading"),t("="),s("span",{class:"hljs-string"},'"https://xxx.cn/loading.png"'),t(`
  `),s("span",{class:"hljs-attr"},"lazy-error"),t("="),s("span",{class:"hljs-string"},'"https://xxx.cn/error.png"'),t(`
  `),s("span",{class:"hljs-attr"},"lazy-attempt"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
>`)]),t(`
`)])],-1),A={class:"card"},N=s("h3",null,"\u63D2\u4EF6",-1),V=s("p",null,[s("code",null,"Lazy"),t(" \u63D0\u4F9B\u4E86\u5728\u63D2\u4EF6\u6CE8\u518C\u65F6\u4F20\u5165\u7684\u9009\u9879\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u61D2\u52A0\u8F7D\u9009\u9879\u3002")],-1),$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Lazy } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Lazy, {
  `),s("span",{class:"hljs-attr"},"loading"),t(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/loading.png'"),t(`,
  `),s("span",{class:"hljs-attr"},"error"),t(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/error.png'"),t(`,
  `),s("span",{class:"hljs-attr"},"attempt"),t(": "),s("span",{class:"hljs-number"},"3"),t(`,
  `),s("span",{class:"hljs-attr"},"throttleWait"),t(": "),s("span",{class:"hljs-number"},"300"),t(`,
  `),s("span",{class:"hljs-attr"},"events"),t(`: [
    `),s("span",{class:"hljs-string"},"'scroll'"),t(`,
    `),s("span",{class:"hljs-string"},"'wheel'"),t(`,
    `),s("span",{class:"hljs-string"},"'mousewheel'"),t(`,
    `),s("span",{class:"hljs-string"},"'resize'"),t(`,
    `),s("span",{class:"hljs-string"},"'animationend'"),t(`,
    `),s("span",{class:"hljs-string"},"'transitionend'"),t(`,
    `),s("span",{class:"hljs-string"},"'touchmove'"),t(`
  ],
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"filter"),t("("),s("span",{class:"hljs-params"},"lazy"),t(")")]),t(` {
    `),s("span",{class:"hljs-comment"},"// \u53EF\u4EE5\u8BBF\u95EE lazy \u4E0A\u4E0B\u6587\u7684\u6240\u6709\u5C5E\u6027,\u6267\u884C\u4E00\u4E9B\u5C5E\u6027\u62E6\u622A,"),t(`
    `),s("span",{class:"hljs-comment"},"// \u6BD4\u5982\u7B80\u5355\u4FEE\u6539\u6240\u6709\u7684\u56FE\u7247\u5730\u5740 http -> https"),t(`
    lazy.src.replace(`),s("span",{class:"hljs-string"},"'http://'"),t(", "),s("span",{class:"hljs-string"},"'https://'"),t(`)
  }
})
`)])],-1),B=r('<h2>API</h2><div class="card"><h3>\u63D2\u4EF6\u9009\u9879</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>loading</code></td><td>\u52A0\u8F7D\u4E2D\u7684\u56FE\u7247\uFF0C\u5C3D\u53EF\u80FD\u9009\u62E9\u52A0\u8F7D\u901F\u5EA6\u5F88\u5FEB\u7684\u56FE\u7247</td><td><em>string</em></td><td><code>1\u50CF\u7D20\u900F\u660E\u56FE\u7247</code></td></tr><tr><td><code>error</code></td><td>\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u7684\u56FE\u7247</td><td><em>string</em></td><td><code>1\u50CF\u7D20\u900F\u660E\u56FE\u7247</code></td></tr><tr><td><code>attempt</code></td><td>\u52A0\u8F7D\u5931\u8D25\u65F6\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D\u7684\u6B21\u6570</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>\u8282\u6D41\u65F6\u95F4\uFF0C\u6570\u503C\u8D8A\u5927\u4E8B\u4EF6\u89E6\u53D1\u9891\u7387\u8D8A\u4F4E</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>\u89E6\u53D1\u53EF\u89C1\u6027\u68C0\u6D4B\u6CE8\u518C\u7684\u4E8B\u4EF6\u5217\u8868</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>\u5C5E\u6027\u62E6\u622A\u51FD\u6570</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div>',2);function C(W,E,I,P,S,T){const a=c("var-site-code-example");return d(),o("div",p,[i,j,s("div",_,[m,l(a,null,{default:n(()=>[g]),_:1})]),s("div",u,[v,l(a,null,{default:n(()=>[y]),_:1})]),s("div",f,[x,l(a,null,{default:n(()=>[z]),_:1})]),s("div",k,[w,b,l(a,null,{default:n(()=>[L]),_:1})]),s("div",A,[N,V,l(a,null,{default:n(()=>[$]),_:1})]),B])}var D=e(h,[["render",C]]);export{D as default};
