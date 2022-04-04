import{_ as n}from"./elevation.229458c1.js";import{e as l,o as c,c as o,a as s,i as d,j as a,m as t,U as r}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"\u7D22\u5F15\u680F",-1),m=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u7528\u4E8E\u8DF3\u8F6C\u5230\u9875\u9762\u6307\u5B9A\u4F4D\u7F6E\u3002")],-1),j={class:"card"},u=s("h3",null,"\u5F15\u5165",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { IndexBar, IndexAnchor } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(IndexBar).use(IndexAnchor)
`)])],-1),v={class:"card"},_=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),g=s("p",null,[t("\u70B9\u51FB\u7D22\u5F15\u680F\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684 "),s("code",null,"IndexAnchor"),t(" \u951A\u70B9\u4F4D\u7F6E\u3002")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-index-bar"),t(`
  `),s("span",{class:"hljs-attr"},"duration"),t("="),s("span",{class:"hljs-string"},'"300"'),t(`
  `),s("span",{class:"hljs-attr"},":sticky-offset-top"),t("="),s("span",{class:"hljs-string"},'"54"'),t(`
  @`),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"change"'),t(`
>`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"item in list"'),t(),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"item"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-index-anchor"),t(`
      `),s("span",{class:"hljs-attr"},":index"),t("="),s("span",{class:"hljs-string"},'"item"'),t(`
      `),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"var-index-anchor__example"'),t(`
    >`)]),t(`
      \u6807\u9898 {{ item }}
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-index-anchor"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} \u6587\u672C"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} \u6587\u672C"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} \u6587\u672C"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-index-bar"),t(">")]),t(`
`)])],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref, onMounted } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(` list = ref([])

    onMounted(`),s("span",{class:"hljs-function"},"() =>"),t(` {
      `),s("span",{class:"hljs-keyword"},"for"),t(" ("),s("span",{class:"hljs-keyword"},"let"),t(" i = "),s("span",{class:"hljs-number"},"0"),t("; i < "),s("span",{class:"hljs-number"},"26"),t(`; i++) {
        list.value.push(`),s("span",{class:"hljs-built_in"},"String"),t(".fromCharCode("),s("span",{class:"hljs-number"},"65"),t(` + i))
      }
    })

    `),s("span",{class:"hljs-keyword"},"const"),t(" change = "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"value"),t(") =>")]),t(` {
      `),s("span",{class:"hljs-built_in"},"console"),t(`.log(value)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      list,
      change
    }
  }
}
`)])],-1),y=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><h4>IndexBar Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>sticky</code></td><td>\u662F\u5426\u5F00\u542F\u951A\u70B9\u5438\u9876</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>sticky-offset-top</code></td><td>\u951A\u70B9\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>hide-list</code></td><td>\u662F\u5426\u9690\u85CF\u951A\u70B9\u5217\u8868</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>css-mode</code></td><td>\u5F00\u542F\u539F\u751F <code>css sticky</code> \u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>z-index \u5C42\u7EA7</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td><code>highlight-color</code></td><td>\u7D22\u5F15\u5B57\u7B26\u9AD8\u4EAE\u989C\u8272</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td><code>duration</code></td><td>\u52A8\u753B\u6301\u7EED\u65F6\u95F4</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table><h4>IndexAnchor Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>index</code></td><td>\u7D22\u5F15\u5B57\u7B26</td><td><em>number | string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><h4>IndexBar Events</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u7D22\u5F15\u680F\u7684\u5B57\u7B26\u65F6\u89E6\u53D1</td><td><code>index: number | string</code></td></tr><tr><td><code>change</code></td><td>\u5F53\u524D\u9AD8\u4EAE\u7684\u7D22\u5F15\u5B57\u7B26\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><h4>IndexAnchor Slots</h4><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u7D22\u5F15\u5B57\u7B26</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 IndexBar \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>scrollTo</code></td><td>\u6EDA\u52A8\u5230\u6307\u5B9A\u951A\u70B9</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--index-bar-list-item-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--index-bar-list-item-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--index-bar-list-item-active-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--index-bar-list-item-height</code></td><td><code>14px</code></td></tr><tr><td><code>--index-bar-list-item-padding</code></td><td><code>0 10px</code></td></tr></tbody></table></div>',6);function k(w,I,A,B,z,C){const e=l("var-site-code-example");return c(),o("div",i,[p,m,s("div",j,[u,d(e,null,{default:a(()=>[b]),_:1})]),s("div",v,[_,g,d(e,null,{default:a(()=>[x]),_:1}),d(e,null,{default:a(()=>[f]),_:1})]),y])}var S=n(h,[["render",k]]);export{S as default};
