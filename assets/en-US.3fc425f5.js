import{_ as e}from"./elevation.f7de2a7a.js";import{e as c,o as r,c as h,a as s,i as l,j as n,m as a,U as p}from"./vendor.efca09d3.js";const o={components:{}},d={class:"varlet-site-doc"},i=s("h1",null,"AppBar",-1),j={class:"card"},g=s("h3",null,"Install",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { AppBar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

createApp().use(AppBar)
`)])],-1),f={class:"card"},m=s("h3",null,"Basic AppBar",-1),_=s("p",null,[a("Set the navigation bar title through the "),s("code",null,"title"),a(" attribute.")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-app-bar"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"title"'),a(" />")]),a(`
`)])],-1),b={class:"card"},k=s("h3",null,"Custom Style",-1),y=s("p",null,[a("Set the position of the title and the color of the navigation bar through the "),s("code",null,"title-position"),a(" and "),s("code",null,"color"),a(" attributes.")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-app-bar"),a(` 
  `),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"title"'),a(` 
  `),s("span",{class:"hljs-attr"},"title-position"),a("="),s("span",{class:"hljs-string"},'"center"'),a(` 
  `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#00c48f"'),a(` 
/>`)]),a(`
`)])],-1),x={class:"card"},S=s("h3",null,"Add Slots At Title",-1),B=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-app-bar"),a(">")]),a("Add the title from the slot"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-app-bar"),a(">")]),a(`
`)])],-1),A={class:"card"},D=s("h3",null,"Add Left Slot",-1),z=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-app-bar"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"title"'),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"left"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(` 
    `),s("span",{class:"hljs-attr"},"round"),a(` 
    `),s("span",{class:"hljs-attr"},"text"),a(` 
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"transparent"'),a(` 
    `),s("span",{class:"hljs-attr"},"text-color"),a("="),s("span",{class:"hljs-string"},'"#ffffff"'),a(` 
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"goBack"'),a(`
  >`)]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"chevron-left"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"24"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-app-bar"),a(">")]),a(`
`)])],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" goBack = "),s("span",{class:"hljs-function"},"() =>"),a(` {
      Snackbar({
        `),s("span",{class:"hljs-attr"},"content"),a(": "),s("span",{class:"hljs-string"},"'Go Back'"),a(`,
        `),s("span",{class:"hljs-attr"},"position"),a(": "),s("span",{class:"hljs-string"},"'top'"),a(`
      })
    }

    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      goBack
    }
  }
}
`)])],-1),T={class:"card"},V=s("h3",null,"Add Right Slot",-1),L=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-app-bar"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"title"'),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"right"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(` 
    `),s("span",{class:"hljs-attr"},"round"),a(` 
    `),s("span",{class:"hljs-attr"},"text"),a(` 
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"transparent"'),a(` 
    `),s("span",{class:"hljs-attr"},"text-color"),a("="),s("span",{class:"hljs-string"},'"#ffffff"'),a(` 
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"searchData"'),a(`
  >`)]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"magnify"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"24"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-app-bar"),a(">")]),a(`
`)])],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" searchData = "),s("span",{class:"hljs-function"},"() =>"),a(` {
      Snackbar({
        `),s("span",{class:"hljs-attr"},"content"),a(": "),s("span",{class:"hljs-string"},"'search'"),a(`,
        `),s("span",{class:"hljs-attr"},"position"),a(": "),s("span",{class:"hljs-string"},"'top'"),a(`
      })
    }

    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      searchData
    }
  }
}
`)])],-1),N={class:"card"},P=s("h3",null,"Add Left And Right Slot",-1),Y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-app-bar"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"title"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"left"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(` 
      `),s("span",{class:"hljs-attr"},"round"),a(` 
      `),s("span",{class:"hljs-attr"},"text"),a(` 
      `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"transparent"'),a(` 
      `),s("span",{class:"hljs-attr"},"text-color"),a("="),s("span",{class:"hljs-string"},'"#ffffff"'),a(` 
      @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"goBack"'),a(`
    >`)]),a(`
      `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"chevron-left"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"24"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"right"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-menu"),a(),s("span",{class:"hljs-attr"},":offset-y"),a("="),s("span",{class:"hljs-string"},'"38"'),a(),s("span",{class:"hljs-attr"},":offset-x"),a("="),s("span",{class:"hljs-string"},'"-20"'),a(),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"offsetY"'),a(">")]),a(`
      `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(` 
        `),s("span",{class:"hljs-attr"},"round"),a(` 
        `),s("span",{class:"hljs-attr"},"text"),a(`
        `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"transparent"'),a(` 
        `),s("span",{class:"hljs-attr"},"text-color"),a("="),s("span",{class:"hljs-string"},'"#ffffff"'),a(`
        @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"offsetY = true"'),a(`
      >`)]),a(`
        `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"menu"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"24"'),a(" />")]),a(`
      `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
      
      `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"menu"),a(">")]),a(`
        `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"menu-list"'),a(">")]),a(`
          `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-cell"),a(`
            `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"menu-cell"'),a(`
            `),s("span",{class:"hljs-attr"},"v-for"),a("="),s("span",{class:"hljs-string"},'"value in menuList"'),a(` 
            `),s("span",{class:"hljs-attr"},":key"),a("="),s("span",{class:"hljs-string"},'"value.value"'),a(`  
            `),s("span",{class:"hljs-attr"},"v-ripple"),a(`
          >`)]),a(`
            {{ value.label }}
          `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-cell"),a(">")]),a(`
        `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
      `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-menu"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-app-bar"),a(">")]),a(`
`)])],-1),$=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" offsetY = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
    `),s("span",{class:"hljs-keyword"},"const"),a(` menuList = ref([
      { `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'options1'"),a(", "),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'menu1'"),a(` },
      { `),s("span",{class:"hljs-attr"},"label"),a(": "),s("span",{class:"hljs-string"},"'options2'"),a(", "),s("span",{class:"hljs-attr"},"value"),a(": "),s("span",{class:"hljs-string"},"'menu2'"),a(` }
    ])

    `),s("span",{class:"hljs-keyword"},"const"),a(" goBack = "),s("span",{class:"hljs-function"},"() =>"),a(` {
      Snackbar({
        `),s("span",{class:"hljs-attr"},"content"),a(": "),s("span",{class:"hljs-string"},"'Go Back'"),a(`,
        `),s("span",{class:"hljs-attr"},"position"),a(": "),s("span",{class:"hljs-string"},"'top'"),a(`
      })
    }

    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      offsetY,
      menuList,
      goBack
    }
  }
}
`)])],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-selector-class"},".var-menu"),a(` {
  `),s("span",{class:"hljs-attribute"},"background"),a(`: transparent;
}

`),s("span",{class:"hljs-selector-class"},".menu-list"),a(` {
  `),s("span",{class:"hljs-attribute"},"background"),a(": "),s("span",{class:"hljs-number"},"#fff"),a(`;
}

`),s("span",{class:"hljs-selector-class"},".menu-list"),a(),s("span",{class:"hljs-selector-class"},".menu-cell"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: block;
  `),s("span",{class:"hljs-attribute"},"padding"),a(": "),s("span",{class:"hljs-number"},"10px"),a(`;
}
`)])],-1),G=p('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Background</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>Title location,Can be set to <code>left</code>,<code>center</code>,<code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>Set altitude for navigation bar</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Customize the title content to override the <code>title</code> content</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>Insert the content to the left of the AppBar</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>Insert the content to the right of the AppBar</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>54px</code></td></tr><tr><td><code>--app-bar-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--app-bar-left-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-right-gap</code></td><td><code>6px</code></td></tr></tbody></table></div>',4);function R(E,H,q,F,J,K){const t=c("var-site-code-example");return r(),h("div",d,[i,s("div",j,[g,l(t,null,{default:n(()=>[u]),_:1})]),s("div",f,[m,_,l(t,null,{default:n(()=>[v]),_:1})]),s("div",b,[k,y,l(t,null,{default:n(()=>[w]),_:1})]),s("div",x,[S,l(t,null,{default:n(()=>[B]),_:1})]),s("div",A,[D,l(t,null,{default:n(()=>[z]),_:1}),l(t,null,{default:n(()=>[C]),_:1})]),s("div",T,[V,l(t,null,{default:n(()=>[L]),_:1}),l(t,null,{default:n(()=>[I]),_:1})]),s("div",N,[P,l(t,null,{default:n(()=>[Y]),_:1}),l(t,null,{default:n(()=>[$]),_:1}),l(t,null,{default:n(()=>[U]),_:1})]),G])}var Q=e(o,[["render",R]]);export{Q as default};
