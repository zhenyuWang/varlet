import{_ as c}from"./elevation.229458c1.js";import{e,o as p,c as r,a,i as n,j as t,m as s,U as o}from"./vendor.49f89f0d.js";const h={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"\u5F39\u51FA\u5C42",-1),i=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,[s("\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u4ECE\u4E0A\u3001\u4E0B\u3001\u5DE6\u3001\u53F3\u3001\u4E2D\u5FC3\u5F39\u51FA\u7684\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u4FE1\u606F\u3002\u9ED8\u8BA4\u4F7F\u7528 "),a("code",null,"teleport"),s(" \u63D2\u5165\u5230 "),a("code",null,"body"),s(" \u5C3E\u90E8\u3002")])],-1),m={class:"card"},u=a("h3",null,"\u5F15\u5165",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Popup } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Popup)
`)])],-1),v={class:"card"},b=a("h3",null,"\u5F39\u51FA\u4F4D\u7F6E",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"center = true"'),s(`
>`)]),s(`
  \u5C45\u4E2D\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"bottom = true"'),s(`
>`)]),s(`
  \u4E0B\u65B9\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"top = true"'),s(`
>`)]),s(`
  \u4E0A\u65B9\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"left = true"'),s(`
>`)]),s(`
  \u5DE6\u4FA7\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"right = true"'),s(`
>`)]),s(`
  \u53F3\u4FA7\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

// \u5C45\u4E2D\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"center"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1,
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136,
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// \u4E0B\u65B9\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1,
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136,
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// \u4E0A\u65B9\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"top"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"top"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1,
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136,
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// \u5DE6\u4FA7\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"left"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"left"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1,
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136,
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// \u53F3\u4FA7\u5F39\u51FA
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"right"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1,
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136,
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`
`)])],-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" center = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" top = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" bottom = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" left = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" right = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      center,
      top,
      bottom,
      left,
      right
    }
  }
}
`)])],-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-selector-class"},".mt-10"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".block"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"20px"),s(),a("span",{class:"hljs-number"},"24px"),s(`;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"250px"),s(`;
}
`)])],-1),f={class:"card"},w=a("h3",null,"\u906E\u7F69\u5C42\u6837\u5F0F",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"overlayClass = true"'),s(`
>`)]),s(`
  \u906E\u7F69\u5C42 class
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"overlayStyle = true"'),s(`
>`)]),s(`
  \u906E\u7F69\u5C42 style
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

// \u906E\u7F69\u5C42 class
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(`
  `),a("span",{class:"hljs-attr"},"overlay-class"),s("="),a("span",{class:"hljs-string"},'"custom-overlay"'),s(`
  `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"overlayClass"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1,
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136,
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// \u906E\u7F69\u5C42 style
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(`
  `),a("span",{class:"hljs-attr"},":overlay-style"),s("="),a("span",{class:"hljs-string"},`"{
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }"`),s(`
  `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"overlayStyle"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1,
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136,
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`
`)])],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" overlayClass = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" overlayStyle = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      overlayClass,
      overlayStyle
    }
  }
}
`)])],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-comment"},"/* normal css */"),s(`
`),a("span",{class:"hljs-selector-class"},".custom-overlay"),s(` {
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-built_in"},"rgba"),s("("),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0"),s(", "),a("span",{class:"hljs-number"},"0.3"),s(`);
}

`),a("span",{class:"hljs-comment"},"/* scoped css */"),s(`
`),a("span",{class:"hljs-selector-class"},".mt-10"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".block"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"20px"),s(),a("span",{class:"hljs-number"},"24px"),s(`;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"250px"),s(`;
}
`)])],-1),N={class:"card"},P=a("h3",null,"\u6CE8\u518C\u4E8B\u4EF6",-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"event = true"'),s(`
>`)]),s(`
  \u6CE8\u518C\u4E8B\u4EF6
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(`
  `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"event"'),s(`
  @`),a("span",{class:"hljs-attr"},"open"),s("="),a("span",{class:"hljs-string"},`"() => Snackbar.info('open')"`),s(`
  @`),a("span",{class:"hljs-attr"},"opened"),s("="),a("span",{class:"hljs-string"},`"() => Snackbar.success('opened')"`),s(`
  @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"() => Snackbar.warning('close')"`),s(`
  @`),a("span",{class:"hljs-attr"},"closed"),s("="),a("span",{class:"hljs-string"},`"() => Snackbar.error('closed')"`),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1,
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136,
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`
`)])],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" event = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      event,
      Snackbar
    }
  }
}
`)])],-1),A=o('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>position</code></td><td>\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top</code> <code>bottom</code> <code>right</code> <code>left</code> <code>center</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>transition</code></td><td>\u8FC7\u5EA6\u52A8\u753B\u7684\u540D\u79F0</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1 body \u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u5F39\u51FA\u5C42\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--popup-overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr><tr><td><code>--popup-content-background-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>',5);function B(z,T,E,I,U,q){const l=e("var-site-code-example");return p(),r("div",d,[j,i,a("div",m,[u,n(l,null,{default:t(()=>[g]),_:1})]),a("div",v,[b,n(l,null,{default:t(()=>[y]),_:1}),n(l,null,{default:t(()=>[k]),_:1}),n(l,null,{default:t(()=>[_]),_:1})]),a("div",f,[w,n(l,null,{default:t(()=>[x]),_:1}),n(l,null,{default:t(()=>[S]),_:1}),n(l,null,{default:t(()=>[C]),_:1})]),a("div",N,[P,n(l,null,{default:t(()=>[V]),_:1}),n(l,null,{default:t(()=>[$]),_:1})]),A])}var G=c(h,[["render",B]]);export{G as default};
