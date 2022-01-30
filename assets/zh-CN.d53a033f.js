import{_ as l}from"./elevation.f7de2a7a.js";import{e as n,o as c,c as o,a as t,i as d,j as a,U as r,m as s}from"./vendor.efca09d3.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"\u56FE\u7247\u9884\u89C8",-1),m=t("div",{class:"card"},[t("h3",null,"\u4ECB\u7ECD"),t("p",null,"\u56FE\u7247\u653E\u5927\u9884\u89C8\uFF0C\u652F\u6301\u53CC\u51FB\u500D\u6570\u653E\u5927\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002")],-1),g={class:"card"},j=t("h3",null,"\u5F15\u5165",-1),v=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(ImagePreview)
`)])],-1),u={class:"card"},w=t("h3",null,"\u5C40\u90E8\u5F15\u5165",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-comment"},"// \u5C40\u90E8\u6CE8\u518C"),s(`
`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-attr"},"components"),s(`: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
`)])],-1),b=t("div",{class:"card"},[t("h3",null,"\u51FD\u6570\u8C03\u7528")],-1),f={class:"card"},y=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),s("ImagePreview("),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`)
`)])],-1),x={class:"card"},S=t("h3",null,"\u5904\u7406\u56DE\u8C03\u51FD\u6570",-1),C=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"const"),s(` images = [
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`
]

ImagePreview({
  images,
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"index"),s(")")]),s(` {
    `),t("span",{class:"hljs-built_in"},"console"),s(`.log(index)
  }
})
`)])],-1),P=t("h2",null,"\u7EC4\u4EF6\u4F7F\u7528",-1),I={class:"card"},E=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
  `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
  `),t("span",{class:"hljs-attr"},"block"),s(`
  @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
>`)]),s(`
  \u57FA\u672C\u4F7F\u7528
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(" />")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
  `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
  `),t("span",{class:"hljs-attr"},"block"),s(`
  @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"currentShow = true"'),s(`
>`)]),s(`
  \u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(`
  `),t("span",{class:"hljs-attr"},"current"),s("="),t("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat2.jpg"'),s(`
  `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"currentShow"'),s(`
/>`)]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
  `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
  `),t("span",{class:"hljs-attr"},"block"),s(`
  @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"closeShow = true"'),s(`
>`)]),s(`
  \u5C55\u793A\u5173\u95ED\u6309\u94AE
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(`
  `),t("span",{class:"hljs-attr"},"closeable"),s(`
  `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"closeShow"'),s(`
/>`)]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
  `),t("span",{class:"hljs-attr"},"block"),s(`
  `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
  @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"closeEventShow = true"'),s(`
>`)]),s(`
  \u76D1\u542C\u5173\u95ED\u4E8B\u4EF6
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(`
  `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"closeEventShow"'),s(`
  @`),t("span",{class:"hljs-attr"},"close"),s("="),t("span",{class:"hljs-string"},'"handleCloseEvent"'),s(`
/>`)]),s(`
`)])],-1),N=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
    `),t("span",{class:"hljs-keyword"},"const"),s(" currentShow = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
    `),t("span",{class:"hljs-keyword"},"const"),s(" closeShow = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
    `),t("span",{class:"hljs-keyword"},"const"),s(" closeEventShow = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
    `),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
      `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
      `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
    ])

    `),t("span",{class:"hljs-keyword"},"const"),s(" handleCloseEvent = "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar("),t("span",{class:"hljs-string"},"'\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002'"),s(`)

    `),t("span",{class:"hljs-keyword"},"return"),s(` {
      show,
      currentShow,
      closeShow,
      closeEventShow,
      images,
      handleCloseEvent,
    }
  },
}
`)])],-1),U=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>show</code></td><td>\u662F\u5426\u663E\u793A</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u9501\u5B9A\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15</td><td><code>index: number</code> \u56FE\u7247\u7D22\u5F15</td></tr><tr><td><code>open</code></td><td>\u6253\u5F00 image-preview \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00 image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED image-preview \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>\u5206\u9875\u6307\u793A\u5668</td><td><code>index: number</code> \u56FE\u7247\u7D22\u5F15 <br> <code>length: number</code> \u56FE\u7247\u603B\u6570</td></tr><tr><td><code>close-icon</code></td><td>\u5173\u95ED\u6309\u94AE</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4\u6216\u8005\u5355\u4E2A\u56FE\u7247\u7684 URL</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>\u9501\u5B9A\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>image-preview \u5F00\u542F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>image-preview \u65F6\u5173\u95ED\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>image-preview \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code> #ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code> #000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>13px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code> 14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>',6);function L(R,V,$,A,B,O){const e=n("var-site-code-example");return c(),o("div",i,[p,m,t("div",g,[j,d(e,null,{default:a(()=>[v]),_:1})]),t("div",u,[w,d(e,null,{default:a(()=>[_]),_:1})]),b,t("div",f,[y,d(e,null,{default:a(()=>[k]),_:1})]),t("div",x,[S,d(e,null,{default:a(()=>[C]),_:1})]),P,t("div",I,[E,d(e,null,{default:a(()=>[z]),_:1}),d(e,null,{default:a(()=>[N]),_:1})]),U])}var D=l(h,[["render",L]]);export{D as default};
