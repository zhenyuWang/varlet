import{_ as n}from"./elevation.229458c1.js";import{e as l,o as c,c as o,a as s,i as a,j as d,U as r,m as t}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"\u56FE\u7247\u9884\u89C8",-1),j=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u56FE\u7247\u653E\u5927\u9884\u89C8\uFF0C\u652F\u6301\u53CC\u51FB\u500D\u6570\u653E\u5927\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002")],-1),m={class:"card"},g=s("h3",null,"\u5F15\u5165",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ImagePreview } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(ImagePreview)
`)])],-1),w={class:"card"},u=s("h3",null,"\u5C40\u90E8\u5F15\u5165",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ImagePreview } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-comment"},"// \u5C40\u90E8\u6CE8\u518C"),t(`
`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-attr"},"components"),t(`: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
`)])],-1),b=s("h2",null,"\u51FD\u6570\u8C03\u7528",-1),f={class:"card"},k=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),y=s("pre",{class:"hljs"},[s("code",null,[t("ImagePreview("),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`)
`)])],-1),x={class:"card"},S=s("h3",null,"\u5904\u7406\u56DE\u8C03\u51FD\u6570",-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"const"),t(` images = [
  `),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
  `),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),t(`
]

ImagePreview({
  images,
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"onChange"),t("("),s("span",{class:"hljs-params"},"index"),t(")")]),t(` {
    `),s("span",{class:"hljs-built_in"},"console"),t(`.log(index)
  }
})
`)])],-1),P=s("h2",null,"\u7EC4\u4EF6\u4F7F\u7528",-1),I={class:"card"},E=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(`
  `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(`
  `),s("span",{class:"hljs-attr"},"block"),t(`
  @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(`
>`)]),t(`
  \u57FA\u672C\u4F7F\u7528
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image-preview"),t(),s("span",{class:"hljs-attr"},":images"),t("="),s("span",{class:"hljs-string"},'"images"'),t(),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(" />")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(`
  `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(`
  `),s("span",{class:"hljs-attr"},"block"),t(`
  @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"currentShow = true"'),t(`
>`)]),t(`
  \u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image-preview"),t(`
  `),s("span",{class:"hljs-attr"},"current"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat2.jpg"'),t(`
  `),s("span",{class:"hljs-attr"},":images"),t("="),s("span",{class:"hljs-string"},'"images"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"currentShow"'),t(`
/>`)]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(`
  `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(`
  `),s("span",{class:"hljs-attr"},"block"),t(`
  @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"closeShow = true"'),t(`
>`)]),t(`
  \u5C55\u793A\u5173\u95ED\u6309\u94AE
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image-preview"),t(`
  `),s("span",{class:"hljs-attr"},"closeable"),t(`
  `),s("span",{class:"hljs-attr"},":images"),t("="),s("span",{class:"hljs-string"},'"images"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"closeShow"'),t(`
/>`)]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(`
  `),s("span",{class:"hljs-attr"},"block"),t(`
  `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(`
  @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"closeEventShow = true"'),t(`
>`)]),t(`
  \u76D1\u542C\u5173\u95ED\u4E8B\u4EF6
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image-preview"),t(`
  `),s("span",{class:"hljs-attr"},":images"),t("="),s("span",{class:"hljs-string"},'"images"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"closeEventShow"'),t(`
  @`),s("span",{class:"hljs-attr"},"close"),t("="),s("span",{class:"hljs-string"},'"handleCloseEvent"'),t(`
/>`)]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(`
  `),s("span",{class:"hljs-attr"},"block"),t(`
  `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(` 
  @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"extraSlotsShow = true"'),t(`
>`)]),t(`
  \u5C55\u793A\u989D\u5916\u63D2\u69FD
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image-preview"),t(),s("span",{class:"hljs-attr"},":images"),t("="),s("span",{class:"hljs-string"},'"images"'),t(),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"extraSlotsShow"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"extra"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(`
      `),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"menu"'),t(`
      `),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"22"'),t(`
      `),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#fff"'),t(`
      @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"menuShow = true"'),t(`
    />`)]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"menuShow"'),t(" />")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-image-preview"),t(">")]),t(`
`)])],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(" currentShow = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(" closeShow = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(" closeEventShow = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(" extraSlotsShow = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(" menuShow = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` images = ref([
      `),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
      `),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),t(`,
    ])
    `),s("span",{class:"hljs-keyword"},"const"),t(` actions = [
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'\u64CD\u4F5C'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wrench'"),t(`
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'\u64CD\u4F5C'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wrench'"),t(`
      }
    ]

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleCloseEvent = "),s("span",{class:"hljs-function"},"() =>"),t(" Snackbar("),s("span",{class:"hljs-string"},"'\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002'"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      currentShow,
      closeShow,
      closeEventShow,
      extraSlotsShow,
      menuShow,
      images,
      actions,
      handleCloseEvent
    }
  },
}
`)])],-1),U=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>show</code></td><td>\u662F\u5426\u663E\u793A</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u9501\u5B9A\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15</td><td><code>index: number</code> \u56FE\u7247\u7D22\u5F15</td></tr><tr><td><code>open</code></td><td>\u6253\u5F00 image-preview \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00 image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED image-preview \u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>\u5206\u9875\u6307\u793A\u5668</td><td><code>index: number</code> \u56FE\u7247\u7D22\u5F15 <br> <code>length: number</code> \u56FE\u7247\u603B\u6570</td></tr><tr><td><code>close-icon</code></td><td>\u5173\u95ED\u6309\u94AE</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>\u989D\u5916\u63D2\u69FD</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4\u6216\u8005\u5355\u4E2A\u56FE\u7247\u7684 URL</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>\u9501\u5B9A\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>image-preview \u5F00\u542F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>image-preview \u65F6\u5173\u95ED\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>image-preview \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table></div>',6);function L(R,V,$,A,B,O){const e=l("var-site-code-example");return c(),o("div",p,[i,j,s("div",m,[g,a(e,null,{default:d(()=>[v]),_:1})]),s("div",w,[u,a(e,null,{default:d(()=>[_]),_:1})]),b,s("div",f,[k,a(e,null,{default:d(()=>[y]),_:1})]),s("div",x,[S,a(e,null,{default:d(()=>[C]),_:1})]),P,s("div",I,[E,a(e,null,{default:d(()=>[z]),_:1}),a(e,null,{default:d(()=>[N]),_:1})]),U])}var D=n(h,[["render",L]]);export{D as default};
