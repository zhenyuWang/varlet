import{_ as e}from"./elevation.229458c1.js";import{e as o,o as c,c as r,a as s,i as n,j as t,m as a,U as h}from"./vendor.49f89f0d.js";const p={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"Style Provider",-1),u=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[a("Component libraries organize styles through "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables"),a(". Each component has a corresponding style variable, you can directly replace the style variable on the root node by overriding it with a CSS file. Or use StyleProvider components.")])],-1),j={class:"card"},m=s("h3",null,"Basic style variable",-1),b=s("p",null,"Here are some basic style variables for the component library",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-pseudo"},":root"),a(` {
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-xs: "),s("span",{class:"hljs-number"},"10px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-sm: "),s("span",{class:"hljs-number"},"12px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-md: "),s("span",{class:"hljs-number"},"14px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-lg: "),s("span",{class:"hljs-number"},"16px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-xs: "),s("span",{class:"hljs-number"},"16px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-sm: "),s("span",{class:"hljs-number"},"18px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-md: "),s("span",{class:"hljs-number"},"20px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-lg: "),s("span",{class:"hljs-number"},"22px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-"),s("span",{class:"hljs-selector-tag"},"body"),a(": "),s("span",{class:"hljs-number"},"#fff"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-text: "),s("span",{class:"hljs-number"},"#333"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-primary: "),s("span",{class:"hljs-number"},"#3a7afe"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-info: "),s("span",{class:"hljs-number"},"#00afef"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-success: "),s("span",{class:"hljs-number"},"#00c48f"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-warning: "),s("span",{class:"hljs-number"},"#ff9f00"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-danger: "),s("span",{class:"hljs-number"},"#f44336"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-disabled: "),s("span",{class:"hljs-number"},"#e0e0e0"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-text-disabled: "),s("span",{class:"hljs-number"},"#aaa"),a(`;
  --cubic-bezier: `),s("span",{class:"hljs-built_in"},"cubic-bezier"),a("("),s("span",{class:"hljs-number"},"0.25"),a(", "),s("span",{class:"hljs-number"},"0.8"),a(", "),s("span",{class:"hljs-number"},"0.5"),a(", "),s("span",{class:"hljs-number"},"1"),a(`);
}
`)])],-1),_=s("div",{class:"card"},[s("h3",null,"Modify styles at runtime"),s("p",null,[a("Maybe you have a need to replace the style while the program is runtime\uFF0Clike a one-click skin change or something. The component library provides a StyleProvider component to assist in managing styles, Component provides\u2019 "),s("code",null,"component call"),a(" and "),s("code",null,"function call"),a(" and two invocation modes.")])],-1),g={class:"card"},v=s("h3",null,"Install",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

createApp().use(StyleProvider)
`)])],-1),k={class:"card"},w=s("h3",null,"Scoped Install",-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"components"),a(`: {
    [StyleProvider.Component.name]: StyleProvider
  }
}
`)])],-1),x={class:"card"},T=s("h3",null,"Component Call",-1),C=s("p",null,[a("Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the "),s("code",null,"teleport"),a(" will not work")],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-style-provider"),a(),s("span",{class:"hljs-attr"},":style-vars"),a("="),s("span",{class:"hljs-string"},'"styleVars"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-rate"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.score"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-switch"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.license"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(` 
    `),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"margin-top: 10px"'),a(` 
    `),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(`
    `),s("span",{class:"hljs-attr"},"block"),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(`
  >`)]),a(`
    Toggle Theme
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-style-provider"),a(">")]),a(`
`)])],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(` state = reactive({
      `),s("span",{class:"hljs-attr"},"score"),a(": "),s("span",{class:"hljs-number"},"5"),a(`,
      `),s("span",{class:"hljs-attr"},"license"),a(": "),s("span",{class:"hljs-literal"},"true"),a(`,
    })

    `),s("span",{class:"hljs-keyword"},"const"),a(` successTheme = {
      `),s("span",{class:"hljs-string"},"'--rate-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
      `),s("span",{class:"hljs-string"},"'--button-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
      `),s("span",{class:"hljs-string"},"'--switch-handle-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
      `),s("span",{class:"hljs-string"},"'--switch-track-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
    }
    `),s("span",{class:"hljs-keyword"},"const"),a(" styleVars = ref("),s("span",{class:"hljs-literal"},"null"),a(`)

    `),s("span",{class:"hljs-keyword"},"const"),a(" toggleTheme = "),s("span",{class:"hljs-function"},"() =>"),a(` {
      styleVars.value = styleVars.value ? `),s("span",{class:"hljs-literal"},"null"),a(` : successTheme
    }

    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      state,
      styleVars,
      toggleTheme
    }
  }
}
`)])],-1),z={class:"card"},A=s("h3",null,"Function Call",-1),N=s("p",null,[a("A functional call is to update variables directly on "),s("code",null,":root"),a(", which is suitable for situations where a global update style is required")],-1),R=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),a(">")]),a("Toggle Root Theme"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`)])],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"let"),a(" rootStyleVars = "),s("span",{class:"hljs-literal"},"null"),a(`

    `),s("span",{class:"hljs-keyword"},"const"),a(` darkTheme = {
      `),s("span",{class:"hljs-string"},"'--color-primary'"),a(": "),s("span",{class:"hljs-string"},"'#3f51b5'"),a(`
    }

    `),s("span",{class:"hljs-keyword"},"const"),a(" toggleRootTheme = "),s("span",{class:"hljs-function"},"() =>"),a(` {
      rootStyleVars = rootStyleVars ? `),s("span",{class:"hljs-literal"},"null"),a(` : darkTheme
      StyleProvider(rootStyleVars)
    }

    `),s("span",{class:"hljs-keyword"},"return"),a(` { toggleRootTheme }
  }
}
`)])],-1),I=h('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Component content</td><td><code>-</code></td></tr></tbody></table></div>',3);function U($,D,E,M,q,F){const l=o("var-site-code-example");return c(),r("div",i,[d,u,s("div",j,[m,b,n(l,null,{default:t(()=>[y]),_:1})]),_,s("div",g,[v,n(l,null,{default:t(()=>[f]),_:1})]),s("div",k,[w,n(l,null,{default:t(()=>[S]),_:1})]),s("div",x,[T,C,n(l,null,{default:t(()=>[P]),_:1}),n(l,null,{default:t(()=>[V]),_:1})]),s("div",z,[A,N,n(l,null,{default:t(()=>[R]),_:1}),n(l,null,{default:t(()=>[B]),_:1})]),I])}var W=e(p,[["render",U]]);export{W as default};
