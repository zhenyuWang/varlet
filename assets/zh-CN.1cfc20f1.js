import{_ as a}from"./elevation.f7de2a7a.js";import{e as o,o as n,c as l,a as t,i as e,j as c,m as d,U as r}from"./vendor.efca09d3.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"\u6D88\u606F\u6761",-1),b=t("div",{class:"card"},[t("h3",null,"\u4ECB\u7ECD"),t("p",null,"\u7528\u4E8E\u5411\u7528\u6237\u663E\u793A\u5FEB\u901F\u6D88\u606F\u3002")],-1),m={class:"card"},j=t("h3",null,"\u5F15\u5165",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),d(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),d(),t("span",{class:"hljs-string"},"'vue'"),d(`
`),t("span",{class:"hljs-keyword"},"import"),d(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),d(),t("span",{class:"hljs-string"},"'@varlet/ui'"),d(`

createApp().use(Snackbar)
`)])],-1),g={class:"card"},u=t("h3",null,"\u5C40\u90E8\u5F15\u5165",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),d(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),d(),t("span",{class:"hljs-string"},"'@varlet/ui'"),d(`

`),t("span",{class:"hljs-keyword"},"export"),d(),t("span",{class:"hljs-keyword"},"default"),d(` {
  `),t("span",{class:"hljs-attr"},"components"),d(`: {
    [Snackbar.Component.name]: Snackbar
  }
}
`)])],-1),f={class:"card"},v=t("h3",null,"\u7EC4\u4EF6\u8C03\u7528",-1),y=t("h4",null,"\u57FA\u672C\u4F7F\u7528",-1),S=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-button"),d(),t("span",{class:"hljs-attr"},"type"),d("="),t("span",{class:"hljs-string"},'"primary"'),d(),t("span",{class:"hljs-attr"},"block"),d(" @"),t("span",{class:"hljs-attr"},"click"),d("="),t("span",{class:"hljs-string"},'"show = !show"'),d(">")]),d("\u57FA\u672C\u4F7F\u7528"),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"var-button"),d(">")]),d(`
`),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-snackbar"),d(),t("span",{class:"hljs-attr"},"v-model:show"),d("="),t("span",{class:"hljs-string"},'"show"'),d(">")]),d(" \u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01"),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"var-snackbar"),d(">")]),d(`
`)])],-1),w=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),d(" { ref } "),t("span",{class:"hljs-keyword"},"from"),d(),t("span",{class:"hljs-string"},"'vue'"),d(`

`),t("span",{class:"hljs-keyword"},"export"),d(),t("span",{class:"hljs-keyword"},"default"),d(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),d("("),t("span",{class:"hljs-params"}),d(")")]),d(` {
    `),t("span",{class:"hljs-keyword"},"const"),d(" show = ref("),t("span",{class:"hljs-literal"},"false"),d(`)

    `),t("span",{class:"hljs-keyword"},"return"),d(` {
      show
    }
  }
}
`)])],-1),x=t("h4",null,"\u5782\u76F4\u6392\u5217",-1),C=t("p",null,[d("\u901A\u8FC7 "),t("code",null,"vertical"),d(" \u5C5E\u6027\u6539\u53D8 "),t("code",null,"snackbar"),d(" \u6392\u5217\u65B9\u5F0F\uFF0C\u901A\u8FC7 "),t("code",null,"\u81EA\u5B9A\u4E49\u63D2\u69FD"),d(" \u521B\u5EFA\u53F3\u8FB9 action\u3002")],-1),z=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-snackbar"),d(),t("span",{class:"hljs-attr"},"v-model:show"),d("="),t("span",{class:"hljs-string"},'"show"'),d(),t("span",{class:"hljs-attr"},":vertical"),d("="),t("span",{class:"hljs-string"},'"true"'),d(">")]),d(`
  \u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01
  `),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"template"),d(" #"),t("span",{class:"hljs-attr"},"action"),d(">")]),d(`
    `),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-button"),d(),t("span",{class:"hljs-attr"},"type"),d("="),t("span",{class:"hljs-string"},'"primary"'),d(" @"),t("span",{class:"hljs-attr"},"click"),d("="),t("span",{class:"hljs-string"},'"show = !show"'),d(">")]),d("\u5173\u95ED"),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"var-button"),d(">")]),d(`
  `),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"template"),d(">")]),d(`
`),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"var-snackbar"),d(">")]),d(`
`)])],-1),N=t("h4",null,"\u5E95\u90E8\u663E\u793A",-1),L=t("p",null,[d("\u901A\u8FC7 "),t("code",null,"position"),d(" \u5C5E\u6027\u6539\u53D8 "),t("code",null,"snackbar"),d(" \u663E\u793A\u4F4D\u7F6E\u3002")],-1),V=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-snackbar"),d(),t("span",{class:"hljs-attr"},"v-model:show"),d("="),t("span",{class:"hljs-string"},'"show"'),d(),t("span",{class:"hljs-attr"},"position"),d("="),t("span",{class:"hljs-string"},'"bottom"'),d(">")]),d(`
  \u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01
  `),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"template"),d(" #"),t("span",{class:"hljs-attr"},"action"),d(">")]),d(`
    `),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-button"),d(),t("span",{class:"hljs-attr"},"type"),d("="),t("span",{class:"hljs-string"},'"primary"'),d(" @"),t("span",{class:"hljs-attr"},"click"),d("="),t("span",{class:"hljs-string"},'"show = false"'),d(">")]),d("\u5173\u95ED"),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"var-button"),d(">")]),d(`
  `),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"template"),d(">")]),d(`
`),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"var-snackbar"),d(">")]),d(`
`)])],-1),$=t("h4",null,"\u663E\u793A\u65F6\u957F",-1),A=t("p",null,[d("\u901A\u8FC7 "),t("code",null,"duration"),d(" \u5C5E\u6027\u6539\u53D8 "),t("code",null,"snackbar"),d(" \u663E\u793A\u65F6\u957F\u3002")],-1),B=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-snackbar"),d(),t("span",{class:"hljs-attr"},"v-model:show"),d("="),t("span",{class:"hljs-string"},'"show"'),d(),t("span",{class:"hljs-attr"},":duration"),d("="),t("span",{class:"hljs-string"},'"1000"'),d(">")]),d(" \u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01"),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"var-snackbar"),d(">")]),d(`
`)])],-1),O=t("h4",null,"\u7981\u6B62\u7A7F\u900F\u70B9\u51FB",-1),P=t("p",null,[d("\u4F7F\u7528 "),t("code",null,"forbid-click"),d(" \u63A7\u5236\u662F\u5426\u7981\u6B62\u7A7F\u900F\u70B9\u51FB\u3002")],-1),T=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-snackbar"),d(),t("span",{class:"hljs-attr"},"v-model:show"),d("="),t("span",{class:"hljs-string"},'"show"'),d(),t("span",{class:"hljs-attr"},":forbid-click"),d("="),t("span",{class:"hljs-string"},'"true"'),d(">")]),d(" \u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01"),t("span",{class:"hljs-tag"},[d("</"),t("span",{class:"hljs-name"},"var-snackbar"),d(">")]),d(`
`)])],-1),M={class:"card"},E=t("h3",null,"\u51FD\u6570\u8C03\u7528",-1),I=t("h4",null,"\u57FA\u672C\u4F7F\u7528",-1),U=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),d("Snackbar("),t("span",{class:"hljs-string"},"'\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01'"),d(`)
`)])],-1),q=t("h4",null,"\u663E\u793A\u65F6\u957F",-1),D=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),d(`Snackbar({
 `),t("span",{class:"hljs-attr"},"content"),d(": "),t("span",{class:"hljs-string"},"'\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01'"),d(`,
 `),t("span",{class:"hljs-attr"},"duration"),d(": "),t("span",{class:"hljs-number"},"1000"),d(`
})
`)])],-1),F=t("h4",null,"\u5E95\u90E8\u663E\u793A",-1),G=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),d(`Snackbar({
 `),t("span",{class:"hljs-attr"},"content"),d(": "),t("span",{class:"hljs-string"},"'\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01'"),d(`,
 `),t("span",{class:"hljs-attr"},"position"),d(": "),t("span",{class:"hljs-string"},"'bottom'"),d(`
})
`)])],-1),H={class:"card"},J=t("h3",null,"Snackbar \u7C7B\u578B",-1),K=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),d("Snackbar.success("),t("span",{class:"hljs-string"},"'\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01'"),d(`)
Snackbar.warning(`),t("span",{class:"hljs-string"},"'\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01'"),d(`)
Snackbar.info(`),t("span",{class:"hljs-string"},"'\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01'"),d(`)
Snackbar.error(`),t("span",{class:"hljs-string"},"'\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01'"),d(`)
Snackbar.loading(`),t("span",{class:"hljs-string"},"'\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01'"),d(`)
`)])],-1),Q={class:"card"},R=t("h3",null,"\u5355\u4F8B\u6A21\u5F0F",-1),W=t("p",null,"\u4F7F\u7528\u51FD\u6570\u5F0F\u8C03\u7528\u65F6\uFF0CSnackbar \u9ED8\u8BA4\u91C7\u7528\u5355\u4F8B\u6A21\u5F0F\uFF0C\u5373\u540C\u4E00\u65F6\u95F4\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A Snackbar\uFF0C\u5982\u679C\u9700\u8981\u5728\u540C\u4E00\u65F6\u95F4\u5F39\u51FA\u591A\u4E2A Snackbar\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B",-1),X=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),d("Snackbar.allowMultiple("),t("span",{class:"hljs-literal"},"true"),d(`)

`),t("span",{class:"hljs-keyword"},"const"),d(" snackbar1 = Snackbar("),t("span",{class:"hljs-string"},"'\u7B2C\u4E00\u4E2A Snackbar'"),d(`);
`),t("span",{class:"hljs-keyword"},"const"),d(" snackbar1 = Snackbar.success("),t("span",{class:"hljs-string"},"'\u7B2C\u4E8C\u4E2A Snackbar'"),d(`);

snackbar1.clear();
snackbar1.clear();
`)])],-1),Y=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> \u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> \u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>\u663E\u793A\u65F6\u957F</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\u7684\u7C7B\u540D</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>\u662F\u5426\u542F\u7528\u7AD6\u76F4\u6392\u5217\u65B9\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-type</code></td><td>\u52A0\u8F7D\u52A8\u753B\u7C7B\u578B(\u89C1 <code>Loading</code> \u7EC4\u4EF6)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>\u52A0\u8F7D\u52A8\u753B\u5927\u5C0F(\u89C1 <code>Loading</code> \u7EC4\u4EF6)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>\u662F\u5426\u7981\u6B62\u7A7F\u900F\u70B9\u51FB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>body</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00 <code>Snackbar</code> \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00 <code>Snackbar</code> \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED <code>Snackbar</code> \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED <code>Snackbar</code> \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> \u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> \u53F3\u8FB9\u52A8\u4F5C\u533A</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><p>\u5B9E\u4F8B\u4E0A\u7684 <code>clear</code> \u65B9\u6CD5\u53EF\u5173\u95ED\u5F53\u524D\u5B9E\u4F8B\uFF0C\u5168\u5C40 <code>clear</code> \u65B9\u6CD5\u53EF\u5173\u95ED\u6240\u6709\u7684\u6D88\u606F\u6761\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>\u663E\u793A\u6D88\u606F\u6761</td><td><em>options | string</em></td><td><code>snackbar \u5B9E\u4F8B</code></td></tr><tr><td><code>Snackbar.success</code></td><td>\u663E\u793A\u6210\u529F\u6D88\u606F\u6761</td><td><em>options | string</em></td><td><code>snackbar \u5B9E\u4F8B</code></td></tr><tr><td><code>Snackbar.info</code></td><td>\u663E\u793A\u666E\u901A\u6D88\u606F\u6761</td><td><em>options | string</em></td><td><code>snackbar \u5B9E\u4F8B</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>\u663E\u793A\u8B66\u544A\u6D88\u606F\u6761</td><td><em>options | string</em></td><td><code>snackbar \u5B9E\u4F8B</code></td></tr><tr><td><code>Snackbar.error</code></td><td>\u663E\u793A\u9519\u8BEF\u6D88\u606F\u6761</td><td><em>options | string</em></td><td><code>snackbar \u5B9E\u4F8B</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>\u663E\u793A\u52A0\u8F7D\u6D88\u606F\u6761</td><td><em>options | string</em></td><td><code>snackbar \u5B9E\u4F8B</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>\u5173\u95ED\u6D88\u606F\u6761</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>\u662F\u5426\u5141\u8BB8\u591A\u4F8B\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Snackbar Options</h3><h4>\u51FD\u6570\u5F0F\u8C03\u7528\u65F6\u4F20\u5165\u7684\u9009\u9879</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>show</code></td><td>\u662F\u5426\u663E\u793A <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> \u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> \u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>\u663E\u793A\u65F6\u957F(\u5F53 <code>type</code> \u5C5E\u6027\u4E3A <code>loading</code> \u65F6\uFF0C\u9700\u8981\u624B\u52A8\u5173\u95ED)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\u7684\u7C7B\u540D</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>\u662F\u5426\u542F\u7528\u7AD6\u76F4\u6392\u5217\u65B9\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>\u52A0\u8F7D\u52A8\u753B\u7C7B\u578B(\u89C1 <code>Loading</code> \u7EC4\u4EF6)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>\u52A0\u8F7D\u52A8\u753B\u5927\u5C0F(\u89C1 <code>Loading</code> \u7EC4\u4EF6)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>lockScroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>\u662F\u5426\u7981\u6B62\u7A7F\u900F\u70B9\u51FB(\u5F53 <code>type</code> \u5C5E\u6027\u4E3A <code>loading</code> \u65F6\uFF0C\u9ED8\u8BA4\u4E3A <code>true</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>\u6253\u5F00 <code>Snackbar</code> \u65F6\u89E6\u53D1</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>\u6253\u5F00 <code>Snackbar</code> \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>\u5173\u95ED <code>Snackbar</code> \u65F6\u89E6\u53D1</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>\u5173\u95ED <code>Snackbar</code> \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--snackbar-width</code></td><td><code>256px</code></td></tr><tr><td><code>--snackbar-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--snackbar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-background</code></td><td><code>#333</code></td></tr><tr><td><code>--snackbar-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--snackbar-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--snackbar-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--snackbar-success-background</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--snackbar-info-background</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--snackbar-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--snackbar-warning-background</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--snackbar-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--snackbar-action-margin</code></td><td><code>0 16px 0 0</code></td></tr></tbody></table></div>',7);function Z(tt,dt,st,et,ct,at){const s=o("var-site-code-example");return n(),l("div",i,[p,b,t("div",m,[j,e(s,null,{default:c(()=>[k]),_:1})]),t("div",g,[u,e(s,null,{default:c(()=>[_]),_:1})]),t("div",f,[v,y,e(s,null,{default:c(()=>[S]),_:1}),e(s,null,{default:c(()=>[w]),_:1}),x,C,e(s,null,{default:c(()=>[z]),_:1}),N,L,e(s,null,{default:c(()=>[V]),_:1}),$,A,e(s,null,{default:c(()=>[B]),_:1}),O,P,e(s,null,{default:c(()=>[T]),_:1})]),t("div",M,[E,I,e(s,null,{default:c(()=>[U]),_:1}),q,e(s,null,{default:c(()=>[D]),_:1}),F,e(s,null,{default:c(()=>[G]),_:1})]),t("div",H,[J,e(s,null,{default:c(()=>[K]),_:1})]),t("div",Q,[R,W,e(s,null,{default:c(()=>[X]),_:1})]),Y])}var lt=a(h,[["render",Z]]);export{lt as default};
