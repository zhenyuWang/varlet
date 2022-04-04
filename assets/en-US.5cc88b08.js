import{_ as l}from"./elevation.229458c1.js";import{e as d,o,c,a as s,i as a,j as n,U as r,m as t}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"ImagePreview",-1),m=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Image-Preview, Support double-click magnification, Support function call and component call two ways.")],-1),g={class:"card"},j=s("h3",null,"Install",-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ImagePreview } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(ImagePreview)
`)])],-1),u={class:"card"},v=s("h3",null,"Scoped Install",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ImagePreview } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-attr"},"components"),t(`: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
`)])],-1),f={class:"card"},_=s("h3",null,"Function Call",-1),k=s("h4",null,"Basic Usage",-1),y=s("pre",{class:"hljs"},[s("code",null,[t("ImagePreview("),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`)
`)])],-1),S=s("h4",null,"Call Back",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"const"),t(` images = [
  `),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
  `),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),t(`
]

ImagePreview({
  images,
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"onChange"),t("("),s("span",{class:"hljs-params"},"index"),t(")")]),t(` {
    `),s("span",{class:"hljs-built_in"},"console"),t(`.log(index)
  }
})
`)])],-1),C=s("h2",null,"Component Call",-1),P={class:"card"},I=s("h3",null,"Basic Use",-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(`
  `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(`
  `),s("span",{class:"hljs-attr"},"block"),t(`
  @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(`
>`)]),t(`
  Basic Use
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image-preview"),t(),s("span",{class:"hljs-attr"},":images"),t("="),s("span",{class:"hljs-string"},'"images"'),t(),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(" />")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(` 
  `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(` 
  `),s("span",{class:"hljs-attr"},"block"),t(`
  @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"currentShow = true"'),t(`
>`)]),t(`
  Specify initial position
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
  Display the close button
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
  Listen for close event
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
  Show extra slots
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
`)])],-1),E=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
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
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'operate'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wrench'"),t(`
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'operate'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wrench'"),t(`
      }
    ]

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleCloseEvent = "),s("span",{class:"hljs-function"},"() =>"),t(" Snackbar("),s("span",{class:"hljs-string"},"'The shutdown event was triggered.'"),t(`)
    
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
`)])],-1),U=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>show</code></td><td>Whether or display</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>Need to preview the image URL</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the pop-up layer to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr><tr><td><code>open</code></td><td>Triggered when Image-Preview is turned on</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered at the end of the open image-preview animation</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when Image-Preview is off</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the animation that closes the image-preview ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slot</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>Paging indicator</td><td><code>index: number</code> Image indexing <br> <code>length: number</code> Total number of image</td></tr><tr><td><code>close-icon</code></td><td>Close button</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra slots</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>images</code></td><td>The image URL array or the URL of a single image to be previewed</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Callback when image-preview is turned on</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Callback at the end of the animation that opened image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Callback when image-preview is closed</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Callback at the end of the animation that closes the image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table></div>',6);function D(z,L,B,W,V,A){const e=d("var-site-code-example");return o(),c("div",i,[p,m,s("div",g,[j,a(e,null,{default:n(()=>[w]),_:1})]),s("div",u,[v,a(e,null,{default:n(()=>[b]),_:1})]),s("div",f,[_,k,a(e,null,{default:n(()=>[y]),_:1}),S,a(e,null,{default:n(()=>[x]),_:1})]),C,s("div",P,[I,a(e,null,{default:n(()=>[T]),_:1}),a(e,null,{default:n(()=>[E]),_:1})]),U])}var $=l(h,[["render",D]]);export{$ as default};
