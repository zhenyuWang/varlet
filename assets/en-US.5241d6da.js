import{_ as l}from"./elevation.229458c1.js";import{e as n,o,c,a as s,i as a,j as d,U as r,m as t}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"Skeleton",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Display some space occupying elements with transition effect to optimize the loading process.")],-1),u={class:"card"},g=s("h3",null,"Install",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Skeleton } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Skeleton)
`)])],-1),_={class:"card"},k=s("h3",null,"Basic Use",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-skeleton"),t(),s("span",{class:"hljs-attr"},":loading"),t("="),s("span",{class:"hljs-string"},'"loading"'),t(">")]),t("Loading Data"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-skeleton"),t(">")]),t(`
`)])],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" loading = ref("),s("span",{class:"hljs-literal"},"true"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` { loading }
  }
}
`)])],-1),b={class:"card"},y=s("h3",null,"Display Title",-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-skeleton"),t(),s("span",{class:"hljs-attr"},"title"),t(),s("span",{class:"hljs-attr"},":loading"),t("="),s("span",{class:"hljs-string"},'"loading"'),t(">")]),t("Loading Data"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-skeleton"),t(">")]),t(`
`)])],-1),x={class:"card"},S=s("h3",null,"Custom Rows Height",-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-skeleton"),t(`
  `),s("span",{class:"hljs-attr"},"title"),t(`
  `),s("span",{class:"hljs-attr"},":rows"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
  `),s("span",{class:"hljs-attr"},":loading"),t("="),s("span",{class:"hljs-string"},'"loading"'),t(`
  `),s("span",{class:"hljs-attr"},":rows-width"),t("="),s("span",{class:"hljs-string"},`"['200px', '100px', '50px']"`),t(`
>`)]),t(`
  Loading Data
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-skeleton"),t(">")]),t(`
`)])],-1),T={class:"card"},z=s("h3",null,"Display Avatar",-1),L=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-skeleton"),t(`
  `),s("span",{class:"hljs-attr"},"title"),t(`
  `),s("span",{class:"hljs-attr"},"avatar"),t(`
  `),s("span",{class:"hljs-attr"},":rows"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
  `),s("span",{class:"hljs-attr"},":loading"),t("="),s("span",{class:"hljs-string"},'"loading"'),t(`
>`)]),t(`
	Loading Data
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-skeleton"),t(">")]),t(`
`)])],-1),A={class:"card"},C=s("h3",null,"Display Card",-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-skeleton"),t(`
  `),s("span",{class:"hljs-attr"},"title"),t(`
  `),s("span",{class:"hljs-attr"},"avatar"),t(`
  `),s("span",{class:"hljs-attr"},"card"),t(`
  `),s("span",{class:"hljs-attr"},":rows"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
  `),s("span",{class:"hljs-attr"},":loading"),t("="),s("span",{class:"hljs-string"},'"loading"'),t(`
>`)]),t(`
  Loading Data
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-skeleton"),t(">")]),t(`
`)])],-1),W={class:"card"},B=s("h3",null,"Fullscreen Mode",-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"danger"'),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"fullscreen"'),t(">")]),t("Toggle Fullscreen Mode"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-skeleton"),t(),s("span",{class:"hljs-attr"},"fullscreen"),t(),s("span",{class:"hljs-attr"},":loading"),t("="),s("span",{class:"hljs-string"},'"loading"'),t(" />")]),t(`
`)])],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" loading = ref("),s("span",{class:"hljs-literal"},"false"),t(`)

    `),s("span",{class:"hljs-keyword"},"const"),t(" fullscreen = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      loading.value = `),s("span",{class:"hljs-literal"},"true"),t(`

      `),s("span",{class:"hljs-built_in"},"setTimeout"),t("("),s("span",{class:"hljs-function"},"() =>"),t(` {
        loading.value = `),s("span",{class:"hljs-literal"},"false"),t(`
      }, `),s("span",{class:"hljs-number"},"2000"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      loading,
      fullscreen,
    }
  }
}
`)])],-1),U=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loading</code></td><td>Loading Status Set to <code>true</code> to turn on the skeleton</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>title</code></td><td>Whether to display the title</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>card</code></td><td>Whether to display the card</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>avatar</code></td><td>Whether to display the avatar</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>fullscreen</code></td><td>Whether to enable fullscreen mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>fullscreen-z-index</code></td><td>Fullscreen mode z-index</td><td><em>string | number</em></td><td><code>100</code></td></tr><tr><td><code>title-width</code></td><td>Title Width</td><td><em>string | number</em></td><td><code>50%</code></td></tr><tr><td><code>card-height</code></td><td>Card Height</td><td><em>string | number</em></td><td><code>160px</code></td></tr><tr><td><code>avatar-size</code></td><td>Avatar size</td><td><em>string | number</em></td><td><code>34px</code></td></tr><tr><td><code>rows</code></td><td>The paragraph number of rows</td><td><em>string | number</em></td><td><code>3</code></td></tr><tr><td><code>rows-width</code></td><td>The width of each line of a paragraph</td><td><em>number[] | string[]</em></td><td><code>[&#39;12px&#39;, &#39;12px&#39;, &#39;12px&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Loaded content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--skeleton-content-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-card-height</code></td><td><code>160px</code></td></tr><tr><td><code>--skeleton-card-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--skeleton-card-margin-bottom</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-card-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-animation-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr><tr><td><code>--skeleton-avatar-size</code></td><td><code>34px</code></td></tr><tr><td><code>--skeleton-avatar-border-radius</code></td><td><code>50%</code></td></tr><tr><td><code>--skeleton-avatar-margin-right</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-avatar-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-title-width</code></td><td><code>50%</code></td></tr><tr><td><code>--skeleton-title-border-radius</code></td><td><code>10px</code></td></tr><tr><td><code>--skeleton-title-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-row-height</code></td><td><code>12px</code></td></tr><tr><td><code>--skeleton-row-border-radius</code></td><td><code>10px</code></td></tr><tr><td><code>--skeleton-row-margin-top</code></td><td><code>10px</code></td></tr></tbody></table></div>',4);function $(F,H,I,M,E,R){const e=n("var-site-code-example");return o(),c("div",i,[p,j,s("div",u,[g,a(e,null,{default:d(()=>[m]),_:1})]),s("div",_,[k,a(e,null,{default:d(()=>[v]),_:1}),a(e,null,{default:d(()=>[f]),_:1})]),s("div",b,[y,a(e,null,{default:d(()=>[w]),_:1})]),s("div",x,[S,a(e,null,{default:d(()=>[D]),_:1})]),s("div",T,[z,a(e,null,{default:d(()=>[L]),_:1})]),s("div",A,[C,a(e,null,{default:d(()=>[V]),_:1})]),s("div",W,[B,a(e,null,{default:d(()=>[N]),_:1}),a(e,null,{default:d(()=>[P]),_:1})]),U])}var J=l(h,[["render",$]]);export{J as default};
