import{_ as d}from"./elevation.229458c1.js";import{e as n,o as c,c as r,a as s,i as l,j as a,m as t,U as o}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"\u4E0B\u62C9\u5237\u65B0",-1),u=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u7528\u4E8E\u63D0\u4F9B\u4E0B\u62C9\u5237\u65B0\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002")],-1),j={class:"card"},f=s("h3",null,"\u5F15\u5165",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { PullRefresh } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(PullRefresh)
`)])],-1),_={class:"card"},v=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),g=s("p",null,[t("\u4E0B\u62C9\u5230\u5237\u65B0\u4F4D\u7F6E\u65F6\u677E\u5F00\u4F1A\u89E6\u53D1 "),s("code",null,"refresh"),t(" \u4E8B\u4EF6\uFF0C \u5728\u4E8B\u4EF6\u5F00\u59CB\u65F6\u5C06 "),s("code",null,"v-model"),t(" \u8BBE\u7F6E\u4E3A "),s("code",null,"true"),t(" \u8868\u793A\u6B63\u5728\u52A0\u8F7D\uFF0C\u5B8C\u6210\u540E\u5C06 "),s("code",null,"v-model"),t(" \u8BBE\u7F6E\u4E3A "),s("code",null,"false"),t(" \u8868\u793A\u52A0\u8F7D\u7ED3\u675F\u3002")],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"isRefresh"'),t(" @"),s("span",{class:"hljs-attr"},"refresh"),t("="),s("span",{class:"hljs-string"},'"refresh"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(`
    `),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"(item, index) in data"'),t(`
    `),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"index"'),t(`
    `),s("span",{class:"hljs-attr"},"border"),t(`
  >`)]),t(`
    {{ item + ' ' + (index + 1) }}
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),t(">")]),t(`
`)])],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" data1 = "),s("span",{class:"hljs-built_in"},"Array"),t("("),s("span",{class:"hljs-number"},"10"),t(").fill("),s("span",{class:"hljs-string"},"'List Item'"),t(`)
`),s("span",{class:"hljs-keyword"},"const"),t(" data2 = "),s("span",{class:"hljs-built_in"},"Array"),t("("),s("span",{class:"hljs-number"},"10"),t(").fill("),s("span",{class:"hljs-string"},"'This is new List Item'"),t(`)

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" isRefresh = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` data = ref(data1)

    `),s("span",{class:"hljs-keyword"},"const"),t(" refresh = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      `),s("span",{class:"hljs-built_in"},"setTimeout"),t("("),s("span",{class:"hljs-function"},"() =>"),t(` {
        data.value = data.value[`),s("span",{class:"hljs-number"},"0"),t("] === "),s("span",{class:"hljs-string"},"'List Item'"),t(` ? data2 : data1
        isRefresh.value = `),s("span",{class:"hljs-literal"},"false"),t(`
      }, `),s("span",{class:"hljs-number"},"2000"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      refresh,
      isRefresh,
      data
    }
  }
}
`)])],-1),k={class:"card"},w=s("h3",null,"\u6CE8\u610F",-1),x=s("p",null,[t("\u5F53 "),s("code",null,"PullRefresh"),t(" \u5BB9\u5668\u9AD8\u5EA6\u4E3A "),s("code",null,"0"),t(" \u65F6\u4F1A\u5BFC\u81F4\u4E0B\u62C9\u529F\u80FD\u5931\u6548\uFF0C\u6240\u4EE5\u9700\u4FDD\u8BC1\u5176\u5B50\u5143\u7D20\u9AD8\u5EA6"),s("strong",null,"\u4E0D\u4E3A"),t(),s("code",null,"0"),t(" \u6216\u4E3A "),s("code",null,"PullRefresh"),t(" \u5BB9\u5668\u8BBE\u7F6E\u9AD8\u5EA6:")],-1),R=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"style"),t("="),s("span",{class:"hljs-string"},'"height: 200px"'),t(">")]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),t(">")]),t(`

// \u6216

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),t(),s("span",{class:"hljs-attr"},"style"),t("="),s("span",{class:"hljs-string"},'"height: 200px"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(">")]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),t(">")]),t(`
`)])],-1),A=o('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u4E2D\u72B6\u6001</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u4E0B\u62C9\u5237\u65B0</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>animation-duration</code></td><td>\u52A0\u8F7D\u7ED3\u675F\u540E\u56DE\u5230\u521D\u59CB\u4F4D\u7F6E\u7684\u52A8\u753B\u65F6\u957F\uFF08ms\uFF09</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>\u6210\u529F\u63D0\u793A\u5C55\u793A\u65F6\u957F\uFF08ms\uFF09</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>control \u7684\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>control \u7684\u989C\u8272</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>\u6210\u529F\u72B6\u6001\u4E0B control \u7684\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>\u6210\u529F\u72B6\u6001\u4E0B control \u7684\u989C\u8272</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9ED8\u8BA4\u63D2\u69FD</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table></div>',5);function C(N,P,z,I,V,$){const e=n("var-site-code-example");return c(),r("div",p,[i,u,s("div",j,[f,l(e,null,{default:a(()=>[m]),_:1})]),s("div",_,[v,g,l(e,null,{default:a(()=>[b]),_:1}),l(e,null,{default:a(()=>[y]),_:1})]),s("div",k,[w,x,l(e,null,{default:a(()=>[R]),_:1})]),A])}var T=d(h,[["render",C]]);export{T as default};
