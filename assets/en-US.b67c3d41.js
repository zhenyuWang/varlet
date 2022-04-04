import{_ as e}from"./elevation.229458c1.js";import{e as c,o as r,c as p,a,i as l,j as n,m as s,U as o}from"./vendor.49f89f0d.js";const h={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"AppBar",-1),i={class:"card"},u=a("h3",null,"Install",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { AppBar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(AppBar)
`)])],-1),m={class:"card"},f=a("h3",null,"Basic AppBar",-1),_=a("p",null,[s("Set the navigation bar title through the "),a("code",null,"title"),s(" attribute.")],-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(" />")]),s(`
`)])],-1),b={class:"card"},k=a("h3",null,"Custom Style",-1),y=a("p",null,[s("Set the position of the title and the color of the navigation bar through the "),a("code",null,"title-position"),s(" and "),a("code",null,"color"),s(" attributes.")],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(` 
  `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(` 
  `),a("span",{class:"hljs-attr"},"title-position"),s("="),a("span",{class:"hljs-string"},'"center"'),s(` 
  `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#00c48f"'),s(` 
/>`)]),s(`
`)])],-1),x={class:"card"},S=a("h3",null,"Add Slots At Title",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s("Add the title from the slot"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`)])],-1),A={class:"card"},D=a("h3",null,"Add Left Slot",-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
    `),a("span",{class:"hljs-attr"},"round"),s(` 
    `),a("span",{class:"hljs-attr"},"text"),s(` 
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(` 
    `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#ffffff"'),s(` 
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"goBack"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-left"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`)])],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" goBack = "),a("span",{class:"hljs-function"},"() =>"),s(` {
      Snackbar({
        `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'Go Back'"),s(`,
        `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
      })
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      goBack
    }
  }
}
`)])],-1),T={class:"card"},V=a("h3",null,"Add Right Slot",-1),L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
    `),a("span",{class:"hljs-attr"},"round"),s(` 
    `),a("span",{class:"hljs-attr"},"text"),s(` 
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(` 
    `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#ffffff"'),s(` 
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"searchData"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`)])],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" searchData = "),a("span",{class:"hljs-function"},"() =>"),s(` {
      Snackbar({
        `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'search'"),s(`,
        `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
      })
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      searchData
    }
  }
}
`)])],-1),N={class:"card"},P=a("h3",null,"Add Left And Right Slot",-1),Y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"round"),s(` 
      `),a("span",{class:"hljs-attr"},"text"),s(` 
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(` 
      `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#ffffff"'),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"goBack"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-left"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},":offset-y"),s("="),a("span",{class:"hljs-string"},'"38"'),s(),a("span",{class:"hljs-attr"},":offset-x"),s("="),a("span",{class:"hljs-string"},'"-20"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"offsetY"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
        `),a("span",{class:"hljs-attr"},"round"),s(` 
        `),a("span",{class:"hljs-attr"},"text"),s(`
        `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(` 
        `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#ffffff"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"offsetY = true"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"menu-list"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(`
            `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"menu-cell"'),s(`
            `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"value in menuList"'),s(` 
            `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"value.value"'),s(`  
            `),a("span",{class:"hljs-attr"},"v-ripple"),s(`
          >`)]),s(`
            {{ value.label }}
          `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`)])],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" offsetY = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(` menuList = ref([
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'options1'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'menu1'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'options2'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'menu2'"),s(` }
    ])

    `),a("span",{class:"hljs-keyword"},"const"),s(" goBack = "),a("span",{class:"hljs-function"},"() =>"),s(` {
      Snackbar({
        `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'Go Back'"),s(`,
        `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
      })
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      offsetY,
      menuList,
      goBack
    }
  }
}
`)])],-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-selector-class"},".var-menu"),s(` {
  `),a("span",{class:"hljs-attribute"},"background"),s(`: transparent;
}

`),a("span",{class:"hljs-selector-class"},".menu-list"),s(` {
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".menu-list"),s(),a("span",{class:"hljs-selector-class"},".menu-cell"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: block;
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
}
`)])],-1),G=o('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Background</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>Title location,Can be set to <code>left</code>,<code>center</code>,<code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>Set altitude for navigation bar</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Customize the title content to override the <code>title</code> content</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>Insert the content to the left of the AppBar</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>Insert the content to the right of the AppBar</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>54px</code></td></tr><tr><td><code>--app-bar-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--app-bar-left-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-right-gap</code></td><td><code>6px</code></td></tr></tbody></table></div>',4);function R(E,H,q,F,J,K){const t=c("var-site-code-example");return r(),p("div",d,[j,a("div",i,[u,l(t,null,{default:n(()=>[g]),_:1})]),a("div",m,[f,_,l(t,null,{default:n(()=>[v]),_:1})]),a("div",b,[k,y,l(t,null,{default:n(()=>[w]),_:1})]),a("div",x,[S,l(t,null,{default:n(()=>[B]),_:1})]),a("div",A,[D,l(t,null,{default:n(()=>[z]),_:1}),l(t,null,{default:n(()=>[C]),_:1})]),a("div",T,[V,l(t,null,{default:n(()=>[L]),_:1}),l(t,null,{default:n(()=>[I]),_:1})]),a("div",N,[P,l(t,null,{default:n(()=>[Y]),_:1}),l(t,null,{default:n(()=>[$]),_:1}),l(t,null,{default:n(()=>[U]),_:1})]),G])}var Q=e(h,[["render",R]]);export{Q as default};
