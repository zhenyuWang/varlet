import{_ as e}from"./elevation.229458c1.js";import{e as d,o as c,c as o,a as s,i as a,j as n,m as l,U as r}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"\u65E0\u9650\u6EDA\u52A8\u5217\u8868",-1),j=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u65E0\u9650\u6EDA\u52A8\u52A0\u8F7D\u5217\u8868\u3001\u89E6\u5E95\u52A0\u8F7D\uFF0C\u652F\u6301\u624B\u52A8\u68C0\u67E5\u4F4D\u7F6E\u5E76\u52A0\u8F7D\u3002\u652F\u6301\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001\u3001\u9519\u8BEF\u72B6\u6001\u3001\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u72B6\u6001\u3002")],-1),u={class:"card"},f=s("h3",null,"\u5F15\u5165",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { List } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/ui'"),l(`

createApp().use(List)
`)])],-1),g={class:"card"},v=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),_=s("p",null,[l("\u5F53\u68C0\u6D4B\u5230\u6EDA\u52A8\u5BB9\u5668\u6EDA\u52A8\u5230\u5E95\u90E8\u5E95\u90E8\u65F6\u4F1A\u89E6\u53D1 "),s("code",null,"load"),l(" \u4E8B\u4EF6\uFF0C\u5E76\u4F1A\u8BBE\u7F6E "),s("code",null,"loading"),l(" \u4E3A "),s("code",null,"true"),l("\uFF0C\u5728\u52A0\u8F7D\u7ED3\u675F\u65F6\u60A8\u9700\u8981\u624B\u52A8\u8BBE\u7F6E "),s("code",null,"loading"),l(" \u4E3A "),s("code",null,"false"),l("\uFF0C\u8868\u793A\u52A0\u8F7D\u7ED3\u675F\u3002")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-list"),l(`
  `),s("span",{class:"hljs-attr"},":finished"),l("="),s("span",{class:"hljs-string"},'"finished"'),l(`
  `),s("span",{class:"hljs-attr"},"v-model:loading"),l("="),s("span",{class:"hljs-string"},'"loading"'),l(`
  @`),s("span",{class:"hljs-attr"},"load"),l("="),s("span",{class:"hljs-string"},'"load"'),l(`
>`)]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-cell"),l(),s("span",{class:"hljs-attr"},":key"),l("="),s("span",{class:"hljs-string"},'"item"'),l(),s("span",{class:"hljs-attr"},"v-for"),l("="),s("span",{class:"hljs-string"},'"item in list"'),l(">")]),l(`
    \u5217\u8868\u9879: {{ item }}
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-cell"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-list"),l(">")]),l(`
`)])],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),l("("),s("span",{class:"hljs-params"}),l(")")]),l(` {
    `),s("span",{class:"hljs-keyword"},"const"),l(" loading = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
    `),s("span",{class:"hljs-keyword"},"const"),l(" finished = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
    `),s("span",{class:"hljs-keyword"},"const"),l(` list = reactive([])

    `),s("span",{class:"hljs-keyword"},"const"),l(" load = "),s("span",{class:"hljs-function"},"() =>"),l(` {
      `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
        `),s("span",{class:"hljs-keyword"},"for"),l(" ("),s("span",{class:"hljs-keyword"},"let"),l(" i = "),s("span",{class:"hljs-number"},"0"),l("; i < "),s("span",{class:"hljs-number"},"20"),l(`; i++) {
          list.push(list.length + `),s("span",{class:"hljs-number"},"1"),l(`)
        }

        loading.value = `),s("span",{class:"hljs-literal"},"false"),l(`

        `),s("span",{class:"hljs-keyword"},"if"),l(" (list.length >= "),s("span",{class:"hljs-number"},"60"),l(`) {
          finished.value = `),s("span",{class:"hljs-literal"},"true"),l(`
        }
      }, `),s("span",{class:"hljs-number"},"1000"),l(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),l(` {
      list,
      loading,
      finished,
      load
    }
  }
}
`)])],-1),b={class:"card"},w=s("h3",null,"\u52A0\u8F7D\u5931\u8D25",-1),x=s("p",null,[l("\u60A8\u53EF\u4EE5\u4F7F\u7528 "),s("code",null,"v-model:error"),l(" \u624B\u52A8\u8BBE\u7F6E\u9519\u8BEF\u72B6\u6001\uFF0C\u4F1A\u5C55\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u4F1A\u5E2E\u60A8\u628A "),s("code",null,"error"),l(" \u8BBE\u7F6E\u6210 "),s("code",null,"false"),l(" \u5E76\u518D\u6B21\u89E6\u53D1 "),s("code",null,"load"),l(" \u4E8B\u4EF6\u3002")],-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-list"),l(`
  `),s("span",{class:"hljs-attr"},"v-model:error"),l("="),s("span",{class:"hljs-string"},'"error"'),l(`
  `),s("span",{class:"hljs-attr"},"v-model:loading"),l("="),s("span",{class:"hljs-string"},'"loading"'),l(`
  @`),s("span",{class:"hljs-attr"},"load"),l("="),s("span",{class:"hljs-string"},'"load"'),l(`
>`)]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-cell"),l(),s("span",{class:"hljs-attr"},":key"),l("="),s("span",{class:"hljs-string"},'"item"'),l(),s("span",{class:"hljs-attr"},"v-for"),l("="),s("span",{class:"hljs-string"},'"item in list"'),l(">")]),l(`
    \u5217\u8868\u9879: {{ item }}
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-cell"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-list"),l(">")]),l(`
`)])],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),l("("),s("span",{class:"hljs-params"}),l(")")]),l(` {
    `),s("span",{class:"hljs-keyword"},"const"),l(" loading = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
    `),s("span",{class:"hljs-keyword"},"const"),l(" error = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
    `),s("span",{class:"hljs-keyword"},"const"),l(` list = reactive([])

    `),s("span",{class:"hljs-keyword"},"const"),l(" load = "),s("span",{class:"hljs-function"},"() =>"),l(` {
      `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
        `),s("span",{class:"hljs-keyword"},"if"),l(" (list.length === "),s("span",{class:"hljs-number"},"40"),l(`) {
          error.value = `),s("span",{class:"hljs-literal"},"true"),l(`
          loading.value = `),s("span",{class:"hljs-literal"},"false"),l(`
          `),s("span",{class:"hljs-keyword"},"return"),l(`
        }

        `),s("span",{class:"hljs-keyword"},"for"),l(" ("),s("span",{class:"hljs-keyword"},"let"),l(" i = "),s("span",{class:"hljs-number"},"0"),l("; i < "),s("span",{class:"hljs-number"},"20"),l(`; i++) {
          list.push(list.length + `),s("span",{class:"hljs-number"},"1"),l(`)
        }

        loading.value = `),s("span",{class:"hljs-literal"},"false"),l(`
      }, `),s("span",{class:"hljs-number"},"1000"),l(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),l(` {
      list,
      loading,
      error,
      load
    }
  }
}
`)])],-1),C={class:"card"},T=s("h3",null,"\u63D0\u793A\u6587\u5B57",-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-list"),l(`
  `),s("span",{class:"hljs-attr"},"loading-text"),l("="),s("span",{class:"hljs-string"},'"\u6B63\u5728\u52AA\u529B\u8F93\u51FA"'),l(`
  `),s("span",{class:"hljs-attr"},"finished-text"),l("="),s("span",{class:"hljs-string"},'"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86"'),l(`
  `),s("span",{class:"hljs-attr"},"error-text"),l("="),s("span",{class:"hljs-string"},'"\u51FA\u9519\u4E86\u51FA\u9519\u4E86"'),l(`
  `),s("span",{class:"hljs-attr"},":finished"),l("="),s("span",{class:"hljs-string"},'"finished"'),l(`
  `),s("span",{class:"hljs-attr"},"v-model:loading"),l("="),s("span",{class:"hljs-string"},'"loading"'),l(`
  @`),s("span",{class:"hljs-attr"},"load"),l("="),s("span",{class:"hljs-string"},'"load"'),l(`
>`)]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-cell"),l(),s("span",{class:"hljs-attr"},":key"),l("="),s("span",{class:"hljs-string"},'"item"'),l(),s("span",{class:"hljs-attr"},"v-for"),l("="),s("span",{class:"hljs-string"},'"item in list"'),l(">")]),l(`
    \u5217\u8868\u9879: {{ item }}
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-cell"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-list"),l(">")]),l(`
`)])],-1),$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),l("("),s("span",{class:"hljs-params"}),l(")")]),l(` {
    `),s("span",{class:"hljs-keyword"},"const"),l(" loading = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
    `),s("span",{class:"hljs-keyword"},"const"),l(" finished = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
    `),s("span",{class:"hljs-keyword"},"const"),l(` list = reactive([])

    `),s("span",{class:"hljs-keyword"},"const"),l(" load = "),s("span",{class:"hljs-function"},"() =>"),l(` {
      `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
        `),s("span",{class:"hljs-keyword"},"for"),l(" ("),s("span",{class:"hljs-keyword"},"let"),l(" i = "),s("span",{class:"hljs-number"},"0"),l("; i < "),s("span",{class:"hljs-number"},"20"),l(`; i++) {
          list.push(list.length + `),s("span",{class:"hljs-number"},"1"),l(`)
        }

        loading.value = `),s("span",{class:"hljs-literal"},"false"),l(`

        `),s("span",{class:"hljs-keyword"},"if"),l(" (list.length >= "),s("span",{class:"hljs-number"},"60"),l(`) {
          finished.value = `),s("span",{class:"hljs-literal"},"true"),l(`
        }
      }, `),s("span",{class:"hljs-number"},"1000"),l(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),l(` {
      list,
      loading,
      finished,
      load
    }
  }
}
`)])],-1),A=r('<div class="card"><h3>\u6CE8\u610F</h3><p>\u6211\u4EEC\u662F\u901A\u8FC7\u76D1\u542C\u6EDA\u52A8\u5BB9\u5668\u7684 <code>scroll</code> \u4E8B\u4EF6\u68C0\u6D4B\u662F\u5426\u89E6\u5E95\u5E76\u6267\u884C\u52A0\u8F7D\u3002 \u6EDA\u52A8\u5BB9\u5668\u662F\u6307\u6700\u8FD1\u7684\u4E00\u4E2A <code>overflow-y</code> \u4E3A <code>auto</code> \u6216\u8005 <code>scroll</code> \u7684\u5143\u7D20\u3002 \u5F53\u60A8\u8BBE\u7F6E\u4E00\u4E2A\u5143\u7D20\u7684 <code>overflow-x</code> \u4E3A\u9664\u4E86 <code>visible</code> \u4EE5\u5916\u7684\u503C\u65F6\uFF0C\u6D4F\u89C8\u5668\u4E3A\u4E86\u7EF4\u62A4\u4E00\u4E2A <code>bfc</code> \u7684\u7ED3\u6784\u4F1A\u4F7F\u60A8\u7684 <code>overflow-y</code> \u4FEE\u6B63\u4E3A <code>auto</code>\u3002 \u8FD9\u65F6\u6211\u4EEC\u5C31\u4F1A\u8BEF\u8BA4\u4E3A\u8FD9\u4E2A\u5143\u7D20\u4E5F\u662F\u4E00\u4E2A\u6EDA\u52A8\u5BB9\u5668\uFF0C\u6CE8\u610F\u89C4\u907F\u3002</p></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>\u52A0\u8F7D\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>\u9519\u8BEF\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>\u662F\u5426\u5728\u7EC4\u4EF6\u521D\u59CB\u5316\u65F6\u7ACB\u523B\u68C0\u6D4B\u4F4D\u7F6E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>\u662F\u5426\u52A0\u8F7D\u5B8C\u6BD5</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>\u8DDD\u79BB\u5E95\u90E8\u7684\u89E6\u53D1\u8DDD\u79BB</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>\u52A0\u8F7D\u72B6\u6001\u6587\u5B57</td><td><em>string</em></td><td><code>\u52A0\u8F7D\u4E2D</code></td></tr><tr><td><code>finished-text</code></td><td>\u52A0\u8F7D\u5B8C\u6BD5\u6587\u5B57</td><td><em>string</em></td><td><code>\u6CA1\u6709\u66F4\u591A\u4E86</code></td></tr><tr><td><code>error-text</code></td><td>\u52A0\u8F7D\u5931\u8D25\u6587\u5B57</td><td><em>string</em></td><td><code>\u52A0\u8F7D\u5931\u8D25</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>check</code></td><td>\u89E6\u53D1\u4F4D\u7F6E\u68C0\u67E5, \u89E6\u5E95\u89E6\u53D1 load \u4E8B\u4EF6\u3002</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>load</code></td><td>\u89E6\u5E95\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u5217\u8868\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>\u52A0\u8F7D\u4E2D\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>\u52A0\u8F7D\u5931\u8D25\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>\u52A0\u8F7D\u5B8C\u6BD5\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',7);function B(L,P,S,E,I,U){const t=d("var-site-code-example");return c(),o("div",i,[p,j,s("div",u,[f,a(t,null,{default:n(()=>[m]),_:1})]),s("div",g,[v,_,a(t,null,{default:n(()=>[y]),_:1}),a(t,null,{default:n(()=>[k]),_:1})]),s("div",b,[w,x,a(t,null,{default:n(()=>[z]),_:1}),a(t,null,{default:n(()=>[N]),_:1})]),s("div",C,[T,a(t,null,{default:n(()=>[V]),_:1}),a(t,null,{default:n(()=>[$]),_:1})]),A])}var F=e(h,[["render",B]]);export{F as default};
