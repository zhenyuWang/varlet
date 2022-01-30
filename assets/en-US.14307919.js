import{_ as o}from"./elevation.f7de2a7a.js";import{e as n,o as l,c,a as t,i as a,j as d,U as r,m as e}from"./vendor.efca09d3.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"ImagePreview",-1),g=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Image-Preview, Support double-click magnification, Support function call and component call two ways.")],-1),m={class:"card"},j=t("h3",null,"Install",-1),u=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" { ImagePreview } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

createApp().use(ImagePreview)
`)])],-1),v={class:"card"},w=t("h3",null,"Scoped Install",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { ImagePreview } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-attr"},"components"),e(`: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
`)])],-1),f={class:"card"},_=t("h3",null,"Function Call",-1),k=t("h4",null,"Basic Usage",-1),y=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),e("ImagePreview("),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`)
`)])],-1),S=t("h4",null,"Call Back",-1),x=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"const"),e(` images = [
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
  `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),e(`
]

ImagePreview({
  images,
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),e("("),t("span",{class:"hljs-params"},"index"),e(")")]),e(` {
    `),t("span",{class:"hljs-built_in"},"console"),e(`.log(index)
  }
})
`)])],-1),C=t("h2",null,"Component Call",-1),P={class:"card"},I=t("h3",null,"Basic Use",-1),T=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-button"),e(`
  `),t("span",{class:"hljs-attr"},"type"),e("="),t("span",{class:"hljs-string"},'"warning"'),e(`
  `),t("span",{class:"hljs-attr"},"block"),e(`
  @`),t("span",{class:"hljs-attr"},"click"),e("="),t("span",{class:"hljs-string"},'"show = true"'),e(`
>`)]),e(`
  Basic Use
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-button"),e(">")]),e(`
`),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-image-preview"),e(),t("span",{class:"hljs-attr"},":images"),e("="),t("span",{class:"hljs-string"},'"images"'),e(),t("span",{class:"hljs-attr"},"v-model:show"),e("="),t("span",{class:"hljs-string"},'"show"'),e(" />")]),e(`

`),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-button"),e(` 
  `),t("span",{class:"hljs-attr"},"type"),e("="),t("span",{class:"hljs-string"},'"warning"'),e(` 
  `),t("span",{class:"hljs-attr"},"block"),e(`
  @`),t("span",{class:"hljs-attr"},"click"),e("="),t("span",{class:"hljs-string"},'"currentShow = true"'),e(`
>`)]),e(`
  Specify initial position
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-button"),e(">")]),e(`
`),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-image-preview"),e(`
  `),t("span",{class:"hljs-attr"},"current"),e("="),t("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat2.jpg"'),e(`
  `),t("span",{class:"hljs-attr"},":images"),e("="),t("span",{class:"hljs-string"},'"images"'),e(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),e("="),t("span",{class:"hljs-string"},'"currentShow"'),e(` 
/>`)]),e(`

`),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-button"),e(` 
  `),t("span",{class:"hljs-attr"},"type"),e("="),t("span",{class:"hljs-string"},'"warning"'),e(` 
  `),t("span",{class:"hljs-attr"},"block"),e(` 
  @`),t("span",{class:"hljs-attr"},"click"),e("="),t("span",{class:"hljs-string"},'"closeShow = true"'),e(`
>`)]),e(`
  Display the close button
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-button"),e(">")]),e(`
`),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-image-preview"),e(`
  `),t("span",{class:"hljs-attr"},"closeable"),e(`
  `),t("span",{class:"hljs-attr"},":images"),e("="),t("span",{class:"hljs-string"},'"images"'),e(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),e("="),t("span",{class:"hljs-string"},'"closeShow"'),e(` 
/>`)]),e(`

`),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-button"),e(`
  `),t("span",{class:"hljs-attr"},"block"),e(`
  `),t("span",{class:"hljs-attr"},"type"),e("="),t("span",{class:"hljs-string"},'"warning"'),e(`
  @`),t("span",{class:"hljs-attr"},"click"),e("="),t("span",{class:"hljs-string"},'"closeEventShow = true"'),e(`
>`)]),e(`
  Listen for close event
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-button"),e(">")]),e(`
`),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-image-preview"),e(` 
  `),t("span",{class:"hljs-attr"},":images"),e("="),t("span",{class:"hljs-string"},'"images"'),e(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),e("="),t("span",{class:"hljs-string"},'"closeEventShow"'),e(`
  @`),t("span",{class:"hljs-attr"},"close"),e("="),t("span",{class:"hljs-string"},'"handleCloseEvent"'),e(` 
/>`)]),e(`
`)])],-1),U=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" show = ref("),t("span",{class:"hljs-literal"},"false"),e(`)
    `),t("span",{class:"hljs-keyword"},"const"),e(" currentShow = ref("),t("span",{class:"hljs-literal"},"false"),e(`)
    `),t("span",{class:"hljs-keyword"},"const"),e(" closeShow = ref("),t("span",{class:"hljs-literal"},"false"),e(`)
    `),t("span",{class:"hljs-keyword"},"const"),e(" closeEventShow = ref("),t("span",{class:"hljs-literal"},"false"),e(`)
    `),t("span",{class:"hljs-keyword"},"const"),e(` images = ref([
      `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
      `),t("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),e(`,
    ])

    `),t("span",{class:"hljs-keyword"},"const"),e(" handleCloseEvent = "),t("span",{class:"hljs-function"},"() =>"),e(" Snackbar("),t("span",{class:"hljs-string"},"'The shutdown event was triggered.'"),e(`)
    
    `),t("span",{class:"hljs-keyword"},"return"),e(` {
      show,
      currentShow,
      closeShow,
      closeEventShow,
      images,
      handleCloseEvent,
    }
  },
}
`)])],-1),D=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>show</code></td><td>Whether or display</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>Need to preview the image URL</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the pop-up layer to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr><tr><td><code>open</code></td><td>Triggered when Image-Preview is turned on</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered at the end of the open image-preview animation</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when Image-Preview is off</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the animation that closes the image-preview ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slot</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>Paging indicator</td><td><code>index: number</code> Image indexing <br> <code>length: number</code> Total number of image</td></tr><tr><td><code>close-icon</code></td><td>Close button</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>images</code></td><td>The image URL array or the URL of a single image to be previewed</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>URL from which the image preview starts</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Callback when image-preview is turned on</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Callback at the end of the animation that opened image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Callback when image-preview is closed</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Callback at the end of the animation that closes the image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code> #ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code> #000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>13px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code> 14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>',6);function E(L,z,B,W,V,A){const s=n("var-site-code-example");return l(),c("div",i,[p,g,t("div",m,[j,a(s,null,{default:d(()=>[u]),_:1})]),t("div",v,[w,a(s,null,{default:d(()=>[b]),_:1})]),t("div",f,[_,k,a(s,null,{default:d(()=>[y]),_:1}),S,a(s,null,{default:d(()=>[x]),_:1})]),C,t("div",P,[I,a(s,null,{default:d(()=>[T]),_:1}),a(s,null,{default:d(()=>[U]),_:1})]),D])}var $=o(h,[["render",E]]);export{$ as default};
