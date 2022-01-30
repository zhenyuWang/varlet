import{_ as t}from"./elevation.f7de2a7a.js";import{e as c,o as r,c as o,a as s,i as e,j as n,m as l,U as h}from"./vendor.efca09d3.js";const i={components:{}},p={class:"varlet-site-doc"},d=s("h1",null,"Style Provider",-1),u=s("p",null,[l("Component libraries organize styles through "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables"),l(". Each component has a corresponding style variable, you can directly replace the style variable on the root node by overriding it with a CSS file. Or use StyleProvider components.")],-1),j={class:"card"},m=s("h3",null,"Basic style variable",-1),y=s("p",null,"Here are some basic style variables for the component library",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-selector-pseudo"},":root"),l(` {
  --`),s("span",{class:"hljs-attribute"},"font-size"),l("-xs: "),s("span",{class:"hljs-number"},"10px"),l(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),l("-sm: "),s("span",{class:"hljs-number"},"12px"),l(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),l("-md: "),s("span",{class:"hljs-number"},"14px"),l(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),l("-lg: "),s("span",{class:"hljs-number"},"16px"),l(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),l("-size-xs: "),s("span",{class:"hljs-number"},"16px"),l(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),l("-size-sm: "),s("span",{class:"hljs-number"},"18px"),l(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),l("-size-md: "),s("span",{class:"hljs-number"},"20px"),l(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),l("-size-lg: "),s("span",{class:"hljs-number"},"22px"),l(`;
  --`),s("span",{class:"hljs-attribute"},"color"),l("-"),s("span",{class:"hljs-selector-tag"},"body"),l(": "),s("span",{class:"hljs-number"},"#fff"),l(`;
  --`),s("span",{class:"hljs-attribute"},"color"),l("-text: "),s("span",{class:"hljs-number"},"#333"),l(`;
  --`),s("span",{class:"hljs-attribute"},"color"),l("-primary: "),s("span",{class:"hljs-number"},"#3a7afe"),l(`;
  --`),s("span",{class:"hljs-attribute"},"color"),l("-info: "),s("span",{class:"hljs-number"},"#00afef"),l(`;
  --`),s("span",{class:"hljs-attribute"},"color"),l("-success: "),s("span",{class:"hljs-number"},"#00c48f"),l(`;
  --`),s("span",{class:"hljs-attribute"},"color"),l("-warning: "),s("span",{class:"hljs-number"},"#ff9f00"),l(`;
  --`),s("span",{class:"hljs-attribute"},"color"),l("-danger: "),s("span",{class:"hljs-number"},"#f44336"),l(`;
  --`),s("span",{class:"hljs-attribute"},"color"),l("-disabled: "),s("span",{class:"hljs-number"},"#e0e0e0"),l(`;
  --`),s("span",{class:"hljs-attribute"},"color"),l("-text-disabled: "),s("span",{class:"hljs-number"},"#aaa"),l(`;
  --cubic-bezier: `),s("span",{class:"hljs-built_in"},"cubic-bezier"),l("("),s("span",{class:"hljs-number"},"0.25"),l(", "),s("span",{class:"hljs-number"},"0.8"),l(", "),s("span",{class:"hljs-number"},"0.5"),l(", "),s("span",{class:"hljs-number"},"1"),l(`);
}
`)])],-1),b=s("div",{class:"card"},[s("h3",null,"Modify styles at runtime"),s("p",null,[l("Maybe you have a need to replace the style while the program is runtime\uFF0Clike a one-click skin change or something. The component library provides a StyleProvider component to assist in managing styles, Component provides\u2019 "),s("code",null,"component call"),l(" and "),s("code",null,"function call"),l(" and two invocation modes.")])],-1),_={class:"card"},v=s("h3",null,"Install",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),l(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/ui'"),l(`

createApp().use(StyleProvider)
`)])],-1),k={class:"card"},w=s("h3",null,"Scoped Install",-1),S=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),l(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/ui'"),l(`

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` {
  `),s("span",{class:"hljs-attr"},"components"),l(`: {
    [StyleProvider.Component.name]: StyleProvider
  }
}
`)])],-1),x={class:"card"},T=s("h3",null,"Component Call",-1),C=s("p",null,[l("Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the "),s("code",null,"teleport"),l(" will not work")],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-style-provider"),l(),s("span",{class:"hljs-attr"},":style-vars"),l("="),s("span",{class:"hljs-string"},'"styleVars"'),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-rate"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"state.score"'),l(" />")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-switch"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"state.license"'),l(" />")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-button"),l(` 
    `),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"margin-top: 10px"'),l(` 
    `),s("span",{class:"hljs-attr"},"type"),l("="),s("span",{class:"hljs-string"},'"primary"'),l(`
    `),s("span",{class:"hljs-attr"},"block"),l(`
    @`),s("span",{class:"hljs-attr"},"click"),l("="),s("span",{class:"hljs-string"},'"toggleTheme"'),l(`
  >`)]),l(`
    Toggle Theme
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-button"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-style-provider"),l(">")]),l(`
`)])],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),l("("),s("span",{class:"hljs-params"}),l(")")]),l(` {
    `),s("span",{class:"hljs-keyword"},"const"),l(` state = reactive({
      `),s("span",{class:"hljs-attr"},"score"),l(": "),s("span",{class:"hljs-number"},"5"),l(`,
      `),s("span",{class:"hljs-attr"},"license"),l(": "),s("span",{class:"hljs-literal"},"true"),l(`,
    })

    `),s("span",{class:"hljs-keyword"},"const"),l(` successTheme = {
      `),s("span",{class:"hljs-string"},"'--rate-primary-color'"),l(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),l(`,
      `),s("span",{class:"hljs-string"},"'--button-primary-color'"),l(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),l(`,
      `),s("span",{class:"hljs-string"},"'--switch-handle-active-background'"),l(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),l(`,
      `),s("span",{class:"hljs-string"},"'--switch-track-active-background'"),l(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),l(`,
    }
    `),s("span",{class:"hljs-keyword"},"const"),l(" styleVars = ref("),s("span",{class:"hljs-literal"},"null"),l(`)

    `),s("span",{class:"hljs-keyword"},"const"),l(" toggleTheme = "),s("span",{class:"hljs-function"},"() =>"),l(` {
      styleVars.value = styleVars.value ? `),s("span",{class:"hljs-literal"},"null"),l(` : successTheme
    }

    `),s("span",{class:"hljs-keyword"},"return"),l(` {
      state,
      styleVars,
      toggleTheme
    }
  }
}
`)])],-1),z={class:"card"},A=s("h3",null,"Function Call",-1),N=s("p",null,[l("A functional call is to update variables directly on "),s("code",null,":root"),l(", which is suitable for situations where a global update style is required")],-1),R=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-button"),l(),s("span",{class:"hljs-attr"},"type"),l("="),s("span",{class:"hljs-string"},'"primary"'),l(),s("span",{class:"hljs-attr"},"block"),l(" @"),s("span",{class:"hljs-attr"},"click"),l("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),l(">")]),l("Toggle Root Theme"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-button"),l(">")]),l(`
`)])],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),l("("),s("span",{class:"hljs-params"}),l(")")]),l(` {
    `),s("span",{class:"hljs-keyword"},"let"),l(" rootStyleVars = "),s("span",{class:"hljs-literal"},"null"),l(`

    `),s("span",{class:"hljs-keyword"},"const"),l(` darkTheme = {
      `),s("span",{class:"hljs-string"},"'--color-primary'"),l(": "),s("span",{class:"hljs-string"},"'#3f51b5'"),l(`
    }

    `),s("span",{class:"hljs-keyword"},"const"),l(" toggleRootTheme = "),s("span",{class:"hljs-function"},"() =>"),l(` {
      rootStyleVars = rootStyleVars ? `),s("span",{class:"hljs-literal"},"null"),l(` : darkTheme
      StyleProvider(rootStyleVars)
    }

    `),s("span",{class:"hljs-keyword"},"return"),l(` { toggleRootTheme }
  }
}
`)])],-1),U=h('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Component content</td><td><code>-</code></td></tr></tbody></table></div>',3);function $(D,I,E,M,q,F){const a=c("var-site-code-example");return r(),o("div",p,[d,u,s("div",j,[m,y,e(a,null,{default:n(()=>[g]),_:1})]),b,s("div",_,[v,e(a,null,{default:n(()=>[f]),_:1})]),s("div",k,[w,e(a,null,{default:n(()=>[S]),_:1})]),s("div",x,[T,C,e(a,null,{default:n(()=>[P]),_:1}),e(a,null,{default:n(()=>[V]),_:1})]),s("div",z,[A,N,e(a,null,{default:n(()=>[R]),_:1}),e(a,null,{default:n(()=>[B]),_:1})]),U])}var W=t(i,[["render",$]]);export{W as default};
