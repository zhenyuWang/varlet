import{_ as n}from"./elevation.229458c1.js";import{e as l,o as c,c as o,a as t,i as a,j as d,m as s,U as r}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"IndexBar",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Hyperlinks to scroll on one page.")],-1),j={class:"card"},u=t("h3",null,"Install",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { IndexBar, IndexAnchor } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(IndexBar).use(IndexAnchor)
`)])],-1),g={class:"card"},v=t("h3",null,"Basic Usage",-1),x=t("p",null,[s("When you click the index bar, it will automatically jump to the corresponding "),t("code",null,"IndexAnchor"),s(" anchor position.")],-1),_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-index-bar"),s(`
  `),t("span",{class:"hljs-attr"},"duration"),s("="),t("span",{class:"hljs-string"},'"300"'),s(`
  `),t("span",{class:"hljs-attr"},":sticky-offset-top"),s("="),t("span",{class:"hljs-string"},'"54"'),s(`
  @`),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"change"'),s(`
>`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"item in list"'),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"item"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-index-anchor"),s(` 
      `),t("span",{class:"hljs-attr"},":index"),s("="),t("span",{class:"hljs-string"},'"item"'),s(` 
      `),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"var-index-anchor__example"'),s(`
    >`)]),s(` 
      Title {{ item }} 
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-index-anchor"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("{{ item }} Text"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("{{ item }} Text"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("{{ item }} Text"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-index-bar"),s(">")]),s(`
`)])],-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

    onMounted(`),t("span",{class:"hljs-function"},"() =>"),s(` {
      `),t("span",{class:"hljs-keyword"},"for"),s(" ("),t("span",{class:"hljs-keyword"},"let"),s(" i = "),t("span",{class:"hljs-number"},"0"),s("; i < "),t("span",{class:"hljs-number"},"26"),s(`; i++) {
        list.value.push(`),t("span",{class:"hljs-built_in"},"String"),s(".fromCharCode("),t("span",{class:"hljs-number"},"65"),s(` + i))
      }
    })

    `),t("span",{class:"hljs-keyword"},"const"),s(" change = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"value"),s(") =>")]),s(` {
      `),t("span",{class:"hljs-built_in"},"console"),s(`.log(value)
    }

    `),t("span",{class:"hljs-keyword"},"return"),s(` {
      list,
      change
    }
  }
}
`)])],-1),f=r('<h2>API</h2><div class="card"><h3>Props</h3><h4>IndexBar Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>sticky</code></td><td>Whether to enable anchor sticky top</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>sticky-offset-top</code></td><td>Anchor offset top when sticky</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide anchor list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>css-mode</code></td><td>Enable native <code>css sticky</code> mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>z-index</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>highlight-color</code></td><td>Index character highlight color</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td><code>duration</code></td><td>Animation duration</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table><h4>IndexAnchor Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>index</code></td><td>Index</td><td><em>string | number</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>IndexBar Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Emitted when an index is clicked</td><td><code>index: number | string</code></td></tr><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>IndexAnchor Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom index character</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>Use ref to get IndexBar instance and call instance methods.</p><table><thead><tr><th>Method</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>scrollTo</code></td><td>scroll to target element</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--index-bar-list-item-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--index-bar-list-item-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--index-bar-list-item-active-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--index-bar-list-item-height</code></td><td><code>14px</code></td></tr><tr><td><code>--index-bar-list-item-padding</code></td><td><code>0 10px</code></td></tr></tbody></table></div>',6);function k(w,I,S,A,B,D){const e=l("var-site-code-example");return c(),o("div",i,[p,m,t("div",j,[u,a(e,null,{default:d(()=>[b]),_:1})]),t("div",g,[v,x,a(e,null,{default:d(()=>[_]),_:1}),a(e,null,{default:d(()=>[y]),_:1})]),f])}var E=n(h,[["render",k]]);export{E as default};
