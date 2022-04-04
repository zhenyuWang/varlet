import{_ as n}from"./elevation.229458c1.js";import{e as c,o as d,c as o,a,i as t,j as e,m as s,U as h}from"./vendor.49f89f0d.js";const p={components:{}},r={class:"varlet-site-doc"},j=a("h1",null,"\u6298\u53E0\u9762\u677F",-1),i=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002")],-1),m={class:"card"},u=a("h3",null,"\u5F15\u5165",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Collapse, CollapseItem } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Collapse).use(CollapseItem)
`)])],-1),v={class:"card"},_=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),f=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"v-model"),s(" \u63A7\u5236\u5C55\u5F00\u7684\u9762\u677F\u5217\u8868\uFF0C"),a("code",null,"value"),s(" \u4E3A\u6570\u7EC4\u683C\u5F0F\u3002")],-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeHandle"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("\u6587\u672C"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("\u6587\u672C"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
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
`)])],-1),k={class:"card"},w=a("h3",null,"\u9690\u85CF\u8FB9\u8DDD",-1),x=a("p",null,[s("\u4F7F\u7528 "),a("code",null,"offset"),s(" \u5C5E\u6027\u9690\u85CF\u8FB9\u8DDD\u3002")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("\u6587\u672C"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("\u6587\u672C"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`)])],-1),z={class:"card"},N=a("h3",null,"\u624B\u98CE\u7434\u6A21\u5F0F",-1),I=a("p",null,[s("\u4F7F\u7528 "),a("code",null,"accordion"),s(" \u5C5E\u6027\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u6B64\u65F6 "),a("code",null,"value"),s(" \u4E3A\u5B57\u7B26\u4E32\u3002")],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"accordion"),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("\u6587\u672C"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("\u6587\u672C"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`)])],-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-string"},"''"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      value
    }
  }
}
`)])],-1),$={class:"card"},A=a("h3",null,"\u7981\u7528",-1),B=a("p",null,[s("\u5728 "),a("code",null,"collapse-item"),s(" \u4E0A\u4F7F\u7528 "),a("code",null,"disabled"),s(" \u5C5E\u6027\u7981\u7528\u5F53\u524D\u9762\u677F\u3002")],-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"disabled = !disabled"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-bottom: 8px"'),s(">")]),s(`
  {{ disabled ? '\u542F\u7528' : '\u7981\u7528' }}
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
    \u6587\u672C
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
    \u6587\u672C
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`)])],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

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
`)])],-1),E={class:"card"},T=a("h3",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u8FD9\u662F\u6807\u9898"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(">")]),s(`
    \u6587\u672C
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"title"),s(">")]),s("\u8FD9\u662F\u6807\u9898"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s("^_^"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    \u8FD9\u662F\u5185\u5BB9
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`)])],-1),q=h('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><h4>Collapse Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u5F53\u524D\u5C55\u5F00\u9762\u677F\u7684 name</td><td>\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A <em>string | number</em><br> \u975E\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u8DDD</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>CollapseItem Props</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u7D22\u5F15\u503C</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>\u9762\u677F\u6807\u9898</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon \u7684\u540D\u79F0</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u9762\u677F</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><h4>Collapse Events</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1</td><td><code>value: \u7C7B\u578B\u4E0E v-model \u7ED1\u5B9A\u7684\u503C\u4E00\u81F4</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><h4>CollapseItem Slots</h4><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9762\u677F\u7684\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u9762\u677F\u7684\u6807\u9898</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7 icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-padding</code></td><td><code>0 12px 10px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--collapse-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table></div>',5);function D(F,G,J,K,L,M){const l=c("var-site-code-example");return d(),o("div",r,[j,i,a("div",m,[u,t(l,null,{default:e(()=>[g]),_:1})]),a("div",v,[_,f,t(l,null,{default:e(()=>[b]),_:1}),t(l,null,{default:e(()=>[y]),_:1})]),a("div",k,[w,x,t(l,null,{default:e(()=>[C]),_:1})]),a("div",z,[N,I,t(l,null,{default:e(()=>[P]),_:1}),t(l,null,{default:e(()=>[V]),_:1})]),a("div",$,[A,B,t(l,null,{default:e(()=>[H]),_:1}),t(l,null,{default:e(()=>[S]),_:1})]),a("div",E,[T,t(l,null,{default:e(()=>[U]),_:1})]),q])}var R=n(p,[["render",D]]);export{R as default};
