import{_ as c}from"./elevation.780c6b73.js";import{e,o,c as d,a as s,i as n,j as l,m as t,U as r}from"./vendor.4723551d.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"\u52A8\u4F5C\u9762\u677F",-1),j=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,[t("\u5F39\u51FA\u4E00\u4E2A\u52A8\u4F5C\u9762\u677F\u63D0\u4F9B\u7528\u6237\u9009\u62E9\u9009\u9879\u7684\u80FD\u529B\u3002 "),s("code",null,"ActionSheet"),t(" \u63D0\u4F9B\u4E86\u51FD\u6570\u5F0F\u548C\u7EC4\u4EF6\u5F0F\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4E24\u79CD\u4F7F\u7528\u6548\u679C\u548C\u53C2\u6570\u5E76\u6CA1\u6709\u672C\u8D28\u533A\u522B\u3002 \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A "),s("code",null,"Promise"),t("\uFF0C\u9009\u62E9\u65F6\u8FD4\u56DE "),s("code",null,"\u5F53\u524D\u9009\u62E9\u7684 action"),t("\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u8FD4\u56DE "),s("code",null,"close"),t("\u3002")])],-1),m={class:"card"},g=s("h3",null,"\u5F15\u5165",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ActionSheet } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(ActionSheet)
`)])],-1),k={class:"card"},f=s("h3",null,"\u5C40\u90E8\u5F15\u5165",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ActionSheet } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-attr"},"components"),t(`: {
    [ActionSheet.Component.name]: ActionSheet
  }
}
`)])],-1),_={class:"card"},w=s("h3",null,"\u51FD\u6570\u8C03\u7528",-1),b=s("h4",null,"\u57FA\u672C\u4F7F\u7528",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" action = "),s("span",{class:"hljs-keyword"},"await"),t(` ActionSheet({
  `),s("span",{class:"hljs-attr"},"actions"),t(`: [
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
    }
  ]
})

action !== `),s("span",{class:"hljs-string"},"'close'"),t(" && Snackbar("),s("span",{class:"hljs-string"},[t("`\u60A8\u9009\u62E9\u7684\u662F:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)
`)])],-1),S=s("h4",null,"\u4FEE\u6539\u6807\u9898",-1),I=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`ActionSheet({
  `),s("span",{class:"hljs-attr"},"actions"),t(`: [
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
    }
  ],
  `),s("span",{class:"hljs-attr"},"title"),t(": "),s("span",{class:"hljs-string"},"'\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427'"),t(`
})
`)])],-1),A=s("h4",null,"\u7981\u7528\u9009\u9879",-1),x=s("p",null,[t("\u9009\u9879\u4F20\u5165 "),s("code",null,"disabled"),t(" \u53EF\u4EE5\u4F7F\u9009\u9879\u5904\u4E8E\u7981\u7528\u72B6\u6001\u3002")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`ActionSheet({
  `),s("span",{class:"hljs-attr"},"actions"),t(`: [
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
      `),s("span",{class:"hljs-attr"},"disabled"),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    },
  ]
})
`)])],-1),$=s("h4",null,"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",-1),O=s("p",null,[t("\u65B9\u6CD5\u4F20\u5165 "),s("code",null,"closeOnClickAction"),t(" \u53EF\u4EE5\u7981\u7528\u5728\u9009\u62E9\u9009\u9879\u65F6 "),s("code",null,"ActionSheet"),t(" \u81EA\u52A8\u5173\u95ED\u7684\u884C\u4E3A\uFF0C\u7528\u6237\u53EF\u4EE5\u591A\u6B21\u9009\u62E9\uFF0C \u7531\u4E8E "),s("code",null,"Promise"),t(" \u53EA\u4F1A\u88AB "),s("code",null,"resolve"),t(" \u4E00\u6B21\uFF0C\u6240\u4EE5\u63A8\u8350\u4F7F\u7528 "),s("code",null,"onSelect"),t(" \u76D1\u542C\u7528\u6237\u9009\u62E9\u884C\u4E3A\u3002")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

ActionSheet({
  `),s("span",{class:"hljs-attr"},"actions"),t(`: [
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
    },
  ],
  `),s("span",{class:"hljs-attr"},"closeOnClickAction"),t(": "),s("span",{class:"hljs-literal"},"false"),t(`,
  `),s("span",{class:"hljs-attr"},"onSelect"),t(": "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`\u60A8\u9009\u62E9\u7684\u662F:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`),
})
`)])],-1),z={class:"card"},P=s("h3",null,"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F",-1),V=s("p",null,[t("\u9009\u9879\u63D0\u4F9B\u4E86\u53EF\u4EE5\u914D\u7F6E\u6837\u5F0F\u7684\u53C2\u6570\uFF0C\u5177\u4F53\u9009\u9879\u7684\u53C2\u6570\u53EF\u9009\u9879\u89C1 "),s("code",null,"Action \u7684\u6570\u636E\u7ED3\u6784"),t("\u3002")],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

ActionSheet({
  `),s("span",{class:"hljs-attr"},"actions"),t(`: [
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
      `),s("span",{class:"hljs-attr"},"color"),t(": "),s("span",{class:"hljs-string"},"'#00c48f'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
      `),s("span",{class:"hljs-attr"},"color"),t(": "),s("span",{class:"hljs-string"},"'#ff9800'"),t(`,
    },
    {
      `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
      `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
      `),s("span",{class:"hljs-attr"},"color"),t(": "),s("span",{class:"hljs-string"},"'#00afef'"),t(`,
    },
  ]
})
`)])],-1),T={class:"card"},E=s("h3",null,"\u7EC4\u4EF6\u8C03\u7528",-1),U=s("h4",null,"\u57FA\u672C\u4F7F\u7528",-1),q=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("\u57FA\u672C\u4F7F\u7528"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(`
  `),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
  @`),s("span",{class:"hljs-attr"},"select"),t("="),s("span",{class:"hljs-string"},'"handleSelect"'),t(`
/>`)]),t(`
`)])],-1),D=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` actions = reactive([
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
      },
    ])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),F=s("h4",null,"\u4FEE\u6539\u6807\u9898",-1),G=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("\u4FEE\u6539\u6807\u9898"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(`
  `),s("span",{class:"hljs-attr"},"title"),t("="),s("span",{class:"hljs-string"},'"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427"'),t(`
  `),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
  @`),s("span",{class:"hljs-attr"},"select"),t("="),s("span",{class:"hljs-string"},'"handleSelect"'),t(`
/>`)]),t(`
`)])],-1),H=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` actions = reactive([
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
      },
    ])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),J=s("h4",null,"\u7981\u7528\u9009\u9879",-1),K=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("\u7981\u7528\u9009\u9879"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(`
  `),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
  @`),s("span",{class:"hljs-attr"},"select"),t("="),s("span",{class:"hljs-string"},'"handleSelect"'),t(`
/>`)]),t(`
`)])],-1),L=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` actions = reactive([
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
        `),s("span",{class:"hljs-attr"},"disabled"),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
      },
    ])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),M=s("h4",null,"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",-1),Q=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(`
  `),s("span",{class:"hljs-attr"},":close-on-click-action"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
  `),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
  @`),s("span",{class:"hljs-attr"},"select"),t("="),s("span",{class:"hljs-string"},'"handleSelect"'),t(`
/>`)]),t(`
`)])],-1),R=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` actions = reactive([
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
      },
    ])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),W=s("h4",null,"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F",-1),X=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(`
  `),s("span",{class:"hljs-attr"},":close-on-click-action"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
  `),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
  @`),s("span",{class:"hljs-attr"},"select"),t("="),s("span",{class:"hljs-string"},'"handleSelect"'),t(`
/>`)]),t(`
`)])],-1),Y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` actions = reactive([
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 01'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'account-circle'"),t(`,
        `),s("span",{class:"hljs-attr"},"color"),t(": "),s("span",{class:"hljs-string"},"'#00c48f'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 02'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'notebook'"),t(`,
        `),s("span",{class:"hljs-attr"},"color"),t(": "),s("span",{class:"hljs-string"},"'#ff9800'"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"name"),t(": "),s("span",{class:"hljs-string"},"'Item 03'"),t(`,
        `),s("span",{class:"hljs-attr"},"icon"),t(": "),s("span",{class:"hljs-string"},"'wifi'"),t(`,
        `),s("span",{class:"hljs-attr"},"color"),t(": "),s("span",{class:"hljs-string"},"'#00afef'"),t(`,
      },
    ])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),Z=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>\u9009\u9879\u5217\u8868</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>\u52A8\u4F5C\u9762\u677F\u6807\u9898</td><td><em>string</em></td><td><code>\u8BF7\u9009\u62E9</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1 body \u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>\u662F\u5426\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u52A8\u4F5C\u9762\u677F\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>select</code></td><td>\u9009\u62E9\u9009\u9879\u65F6\u51FA\u53D1</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u52A8\u4F5C\u9762\u677F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED\u52A8\u4F5C\u9762\u677F\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Options</h3><h4>\u51FD\u6570\u5F0F\u8C03\u7528\u65F6\u4F20\u5165\u7684\u9009\u9879</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>title</code></td><td>\u52A8\u4F5C\u9762\u677F\u6807\u9898</td><td><em>string</em></td><td><code>\u8BF7\u9009\u62E9</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1 body \u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>\u52A8\u4F5C\u9762\u677F\u5F00\u542F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>\u52A8\u4F5C\u9762\u677F\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>\u52A8\u4F5C\u9762\u677F\u5173\u95ED\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>\u52A8\u4F5C\u9762\u677F\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>\u9009\u9879\u9009\u62E9\u65F6\u56DE\u8C03</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>\u906E\u7F69\u5C42\u70B9\u51FB\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Action</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u9009\u9879\u540D\u79F0</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>\u9009\u9879\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon \u56FE\u6807\uFF0C\u652F\u6301\u7F51\u7EDC\u56FE\u7247\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>\u56FE\u6807\u5C3A\u5BF8</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>\u9009\u9879\u9644\u52A0\u7C7B\u540D</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u9009\u9879</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>actions</code></td><td>\u9009\u9879\u5217\u8868</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u52A8\u4F5C\u9762\u677F\u6807\u9898</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>',7);function ss(ts,as,ns,ls,cs,es){const a=e("var-site-code-example");return o(),d("div",i,[p,j,s("div",m,[g,n(a,null,{default:l(()=>[u]),_:1})]),s("div",k,[f,n(a,null,{default:l(()=>[y]),_:1})]),s("div",_,[w,b,n(a,null,{default:l(()=>[v]),_:1}),S,n(a,null,{default:l(()=>[I]),_:1}),A,x,n(a,null,{default:l(()=>[C]),_:1}),$,O,n(a,null,{default:l(()=>[N]),_:1})]),s("div",z,[P,V,n(a,null,{default:l(()=>[B]),_:1})]),s("div",T,[E,U,n(a,null,{default:l(()=>[q]),_:1}),n(a,null,{default:l(()=>[D]),_:1}),F,n(a,null,{default:l(()=>[G]),_:1}),n(a,null,{default:l(()=>[H]),_:1}),J,n(a,null,{default:l(()=>[K]),_:1}),n(a,null,{default:l(()=>[L]),_:1}),M,n(a,null,{default:l(()=>[Q]),_:1}),n(a,null,{default:l(()=>[R]),_:1}),W,n(a,null,{default:l(()=>[X]),_:1}),n(a,null,{default:l(()=>[Y]),_:1})]),Z])}var rs=c(h,[["render",ss]]);export{rs as default};
