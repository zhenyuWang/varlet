import{_ as c}from"./elevation.229458c1.js";import{e,o as r,c as p,a,i as t,j as n,m as s,U as h}from"./vendor.49f89f0d.js";const o={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"\u5BFC\u822A\u680F",-1),i={class:"card"},u=a("h3",null,"\u5F15\u5165",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { AppBar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(AppBar)
`)])],-1),m={class:"card"},f=a("h3",null,"\u57FA\u7840\u5BFC\u822A\u680F",-1),_=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"title"),s(" \u5C5E\u6027\u8BBE\u7F6E\u5BFC\u822A\u680F\u6807\u9898\u3002")],-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(" />")]),s(`
`)])],-1),b={class:"card"},k=a("h3",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),y=a("p",null,[s("\u901A\u8FC7 "),a("code",null,"title-position"),s("\u3001"),a("code",null,"color"),s(" \u5C5E\u6027\u8BBE\u7F6E\u6807\u9898\u6240\u5904\u4F4D\u7F6E\u3001\u5BFC\u822A\u680F\u989C\u8272\u3002")],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(`
  `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(`
  `),a("span",{class:"hljs-attr"},"title-position"),s("="),a("span",{class:"hljs-string"},'"center"'),s(`
  `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#00c48f"'),s(`
/>`)]),s(`
`)])],-1),x={class:"card"},B=a("h3",null,"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s("\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`)])],-1),z={class:"card"},N=a("h3",null,"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(">")]),s(`
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
        `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'\u8FD4\u56DE'"),s(`,
        `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
      })
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      goBack
    }
  }
}
`)])],-1),V={class:"card"},Y=a("h3",null,"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(">")]),s(`
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
`)])],-1),D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" searchData = "),a("span",{class:"hljs-function"},"() =>"),s(` {
      Snackbar({
        `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'\u641C\u7D22'"),s(`,
        `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
      })
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      searchData
    }
  }
}
`)])],-1),L={class:"card"},P=a("h3",null,"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",-1),E=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"\u6807\u9898"'),s(">")]),s(`
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
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},":offset-y"),s("="),a("span",{class:"hljs-string"},'"42"'),s(),a("span",{class:"hljs-attr"},":offset-x"),s("="),a("span",{class:"hljs-string"},'"-20"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"offsetY"'),s(">")]),s(`
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
`)])],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" offsetY = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(` menuList = ref([
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u9009\u9879\u4E00'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'menu1'"),s(` },
      { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'\u9009\u9879\u4E8C'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'menu2'"),s(` }
    ])

    `),a("span",{class:"hljs-keyword"},"const"),s(" goBack = "),a("span",{class:"hljs-function"},"() =>"),s(` {
      Snackbar({
        `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'\u8FD4\u56DE'"),s(`,
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
`)])],-1),T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-selector-class"},".var-menu"),s(` {
  `),a("span",{class:"hljs-attribute"},"background"),s(`: transparent;
}

`),a("span",{class:"hljs-selector-class"},".menu-list"),s(` {
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".menu-list"),s(),a("span",{class:"hljs-selector-class"},".menu-cell"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: block;
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
}
`)])],-1),U=h('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>color</code></td><td>\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>\u6807\u9898\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>left</code> <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>\u662F\u5426\u7ED9\u5BFC\u822A\u680F\u8BBE\u7F6E\u6D77\u62D4</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9\uFF0C\u4F1A\u8986\u76D6 <code>title</code> \u7684\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>\u63D2\u5165\u81F3\u5BFC\u822A\u680F\u5DE6\u4FA7\u7684\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>\u63D2\u5165\u81F3\u5BFC\u822A\u680F\u53F3\u4FA7\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>54px</code></td></tr><tr><td><code>--app-bar-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--app-bar-left-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-right-gap</code></td><td><code>6px</code></td></tr></tbody></table></div>',4);function q(F,G,H,J,K,M){const l=e("var-site-code-example");return r(),p("div",d,[j,a("div",i,[u,t(l,null,{default:n(()=>[g]),_:1})]),a("div",m,[f,_,t(l,null,{default:n(()=>[v]),_:1})]),a("div",b,[k,y,t(l,null,{default:n(()=>[w]),_:1})]),a("div",x,[B,t(l,null,{default:n(()=>[S]),_:1})]),a("div",z,[N,t(l,null,{default:n(()=>[A]),_:1}),t(l,null,{default:n(()=>[C]),_:1})]),a("div",V,[Y,t(l,null,{default:n(()=>[$]),_:1}),t(l,null,{default:n(()=>[D]),_:1})]),a("div",L,[P,t(l,null,{default:n(()=>[E]),_:1}),t(l,null,{default:n(()=>[I]),_:1}),t(l,null,{default:n(()=>[T]),_:1})]),U])}var R=c(o,[["render",q]]);export{R as default};
