import{_ as n}from"./elevation.f7de2a7a.js";import{e as c,o as d,c as o,a as s,i as t,j as e,m as a,U as h}from"./vendor.efca09d3.js";const r={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"Collapse",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"A content area which can be collapsed and expanded.")],-1),m={class:"card"},g=s("h3",null,"Install",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Collapse, CollapseItem } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

createApp().use(Collapse).use(CollapseItem)
`)])],-1),v={class:"card"},_=s("h3",null,"Basic Usage",-1),f=s("p",null,[a("Use "),s("code",null,"v-model"),a(" to control the name of active panels. "),s("code",null,"value"),a(" is an Array.")],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(" @"),s("span",{class:"hljs-attr"},"change"),a("="),s("span",{class:"hljs-string"},'"changeHandle"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"Title"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(">")]),a("Hello World"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"Title"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(">")]),a("Hello World"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" value = ref(["),s("span",{class:"hljs-string"},"'1'"),a(`])

    `),s("span",{class:"hljs-keyword"},"const"),a(" changeHandle = "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"val"),a(") =>")]),a(` {
      `),s("span",{class:"hljs-built_in"},"console"),a(`.log(val)
    }
    
    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      value,
      changeHandle
    }
  }
}
`)])],-1),k={class:"card"},w=s("h3",null,"Hide The Margin",-1),x=s("p",null,[a("Use "),s("code",null,"offset"),a(" prop to hide the margin.")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(),s("span",{class:"hljs-attr"},":offset"),a("="),s("span",{class:"hljs-string"},'"false"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"Title"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(">")]),a("Hello World"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"Title"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(">")]),a("Hello World"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),T={class:"card"},H=s("h3",null,"Accordion Mode",-1),W=s("p",null,[a("Use "),s("code",null,"accordion"),a(" prop to open accordion mode, In this case "),s("code",null,"value"),a(" is a String.")],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(),s("span",{class:"hljs-attr"},"accordion"),a(),s("span",{class:"hljs-attr"},":offset"),a("="),s("span",{class:"hljs-string"},'"false"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"Title"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(">")]),a("Hello World"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"Title"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(">")]),a("Hello World"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" value = ref("),s("span",{class:"hljs-string"},"''"),a(`)
    
    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      value
    }
  }
}
`)])],-1),D={class:"card"},P=s("h3",null,"Disabled",-1),U=s("p",null,[a("Use the "),s("code",null,"disabled"),a(" prop to disable CollapseItem.")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"disabled = !disabled"'),a(),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"margin-bottom: 8px"'),a(">")]),a(`
  {{ disabled ? 'enable' : 'disable' }}
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"Title"'),a(),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(),s("span",{class:"hljs-attr"},":disabled"),a("="),s("span",{class:"hljs-string"},'"disabled"'),a(">")]),a(`
    Hello World
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"Title"'),a(),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(),s("span",{class:"hljs-attr"},":disabled"),a("="),s("span",{class:"hljs-string"},'"disabled"'),a(">")]),a(`
    Hello World
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),z=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" value = ref(["),s("span",{class:"hljs-number"},"1"),a(`])
    `),s("span",{class:"hljs-keyword"},"const"),a(" disabled = ref("),s("span",{class:"hljs-literal"},"false"),a(`)

    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      value,
      disabled
    }
  }
}
`)])],-1),A={class:"card"},V=s("h3",null,"Custom Content",-1),E=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"Title"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(),s("span",{class:"hljs-attr"},"icon"),a("="),s("span",{class:"hljs-string"},'"account-circle"'),a(">")]),a(`
    Hello World
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"title"),a(">")]),a("Title"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"icon"),a(">")]),a("^_^"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    Hello World
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),B=h('<h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>Collapse Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Names of current active panels</td><td>accordion mode\uFF1A <em>string | number</em> <br> non-accordion mode\uFF1A<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>Whether to be accordion mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Whether to show margin</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>CollapseItem Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Name</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disabled collapse</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>Collapse Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>value</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>CollapseItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom right icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--collapse-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table></div>',9);function $(M,q,F,G,J,K){const l=c("var-site-code-example");return d(),o("div",p,[i,j,s("div",m,[g,t(l,null,{default:e(()=>[u]),_:1})]),s("div",v,[_,f,t(l,null,{default:e(()=>[b]),_:1}),t(l,null,{default:e(()=>[y]),_:1})]),s("div",k,[w,x,t(l,null,{default:e(()=>[C]),_:1})]),s("div",T,[H,W,t(l,null,{default:e(()=>[S]),_:1}),t(l,null,{default:e(()=>[I]),_:1})]),s("div",D,[P,U,t(l,null,{default:e(()=>[N]),_:1}),t(l,null,{default:e(()=>[z]),_:1})]),s("div",A,[V,t(l,null,{default:e(()=>[E]),_:1})]),B])}var Q=n(r,[["render",$]]);export{Q as default};
