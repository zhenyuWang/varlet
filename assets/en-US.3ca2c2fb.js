import{_ as n}from"./elevation.229458c1.js";import{e as c,o as d,c as o,a,i as t,j as e,m as s,U as r}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},i=a("h1",null,"Collapse",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"A content area which can be collapsed and expanded.")],-1),m={class:"card"},u=a("h3",null,"Install",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Collapse, CollapseItem } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Collapse).use(CollapseItem)
`)])],-1),v={class:"card"},_=a("h3",null,"Basic Usage",-1),b=a("p",null,[s("Use "),a("code",null,"v-model"),s(" to control the name of active panels. "),a("code",null,"value"),s(" is an Array.")],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeHandle"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Hello World"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Hello World"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`)])],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'1'"),s(`])

    `),a("span",{class:"hljs-keyword"},"const"),s(" changeHandle = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"val"),s(") =>")]),s(` {
      `),a("span",{class:"hljs-built_in"},"console"),s(`.log(val)
    }
    
    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      value,
      changeHandle
    }
  }
}
`)])],-1),w={class:"card"},k=a("h3",null,"Hide The Margin",-1),x=a("p",null,[s("Use "),a("code",null,"offset"),s(" prop to hide the margin.")],-1),T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Hello World"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Hello World"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`)])],-1),C={class:"card"},H=a("h3",null,"Accordion Mode",-1),S=a("p",null,[s("Use "),a("code",null,"accordion"),s(" prop to open accordion mode, In this case "),a("code",null,"value"),s(" is a String.")],-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"accordion"),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Hello World"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Hello World"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`)])],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-string"},"''"),s(`)
    
    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      value
    }
  }
}
`)])],-1),D={class:"card"},P=a("h3",null,"Disabled",-1),U=a("p",null,[s("Use the "),a("code",null,"disabled"),s(" prop to disable CollapseItem.")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"disabled = !disabled"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-bottom: 8px"'),s(">")]),s(`
  {{ disabled ? 'enable' : 'disable' }}
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
    Hello World
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
    Hello World
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`)])],-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"1"),s(`])
    `),a("span",{class:"hljs-keyword"},"const"),s(" disabled = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      value,
      disabled
    }
  }
}
`)])],-1),V={class:"card"},z=a("h3",null,"Custom Content",-1),E=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"This is a Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(">")]),s(`
    Hello World
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"title"),s(">")]),s("This is a Title"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s("^_^"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    This is a content
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`)])],-1),B=r('<h2>API</h2><div class="card"><h3>Props</h3><h4>Collapse Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Names of current active panels</td><td>accordion mode\uFF1A <em>string | number</em> <br> non-accordion mode\uFF1A<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>Whether to be accordion mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Whether to show margin</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>CollapseItem Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Name</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disabled collapse</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>Collapse Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>value</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>CollapseItem Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom right icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-padding</code></td><td><code>0 12px 10px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--collapse-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table></div>',5);function $(M,q,F,G,J,K){const l=c("var-site-code-example");return d(),o("div",p,[i,j,a("div",m,[u,t(l,null,{default:e(()=>[g]),_:1})]),a("div",v,[_,b,t(l,null,{default:e(()=>[f]),_:1}),t(l,null,{default:e(()=>[y]),_:1})]),a("div",w,[k,x,t(l,null,{default:e(()=>[T]),_:1})]),a("div",C,[H,S,t(l,null,{default:e(()=>[W]),_:1}),t(l,null,{default:e(()=>[I]),_:1})]),a("div",D,[P,U,t(l,null,{default:e(()=>[N]),_:1}),t(l,null,{default:e(()=>[A]),_:1})]),a("div",V,[z,t(l,null,{default:e(()=>[E]),_:1})]),B])}var Q=n(h,[["render",$]]);export{Q as default};
