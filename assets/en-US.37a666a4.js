import{_ as e}from"./elevation.f7de2a7a.js";import{e as c,o,c as d,a as s,i as a,j as l,m as t,U as r}from"./vendor.efca09d3.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"ActionSheet",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[t("An action sheet pops up to give the user the ability to select options. "),s("code",null,"ActionSheet"),t(" Functional and component use methods are provided, and there is no essential difference between the two effects and parameters. The function returns a "),s("code",null,"Promise"),t("\uFF0Con selection return "),s("code",null,"action"),t("\uFF0CClick modal close to return "),s("code",null,"close"),t(".")])],-1),m={class:"card"},g=s("h3",null,"Install",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ActionSheet } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(ActionSheet)
`)])],-1),k={class:"card"},y=s("h3",null,"Scoped Install",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ActionSheet } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-attr"},"components"),t(`: {
    [ActionSheet.Component.name]: ActionSheet
  }
}
`)])],-1),w={class:"card"},b=s("h3",null,"Functional",-1),_=s("h4",null,"Basic Use",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

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

action !== `),s("span",{class:"hljs-string"},"'close'"),t(" && Snackbar("),s("span",{class:"hljs-string"},[t("`Your selected is:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)
`)])],-1),S=s("h4",null,"Modify Title",-1),A=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`ActionSheet({
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
  `),s("span",{class:"hljs-attr"},"title"),t(": "),s("span",{class:"hljs-string"},"'Choose whichever you like'"),t(`
})
`)])],-1),I=s("h4",null,"Action Disabled",-1),C=s("p",null,[t("The option is passed "),s("code",null,"disabled"),t(" to leave the action in the disabled state")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`ActionSheet({
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
`)])],-1),T=s("h4",null,"Disable Close On Click Action",-1),D=s("p",null,[t("Passing in "),s("code",null,"CloseOnClickAction"),t(" disallows the action of "),s("code",null,"ActionSheet"),t(" closing automatically when the option is selected. The user can select the action multiple times. Because "),s("code",null,"Promise"),t(" is only resolved once, it is recommended to use "),s("code",null,"onSelect"),t(" to listen for the action of the user")],-1),O=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

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
  `),s("span",{class:"hljs-attr"},"onSelect"),t(": "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`Your selected is:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`),
})
`)])],-1),$={class:"card"},P=s("h3",null,"Custom Action Styles",-1),W=s("p",null,[t("Options provide parameters to configure the style. See the "),s("code",null,"Action"),t(" data structure for options")],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

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
`)])],-1),Y={class:"card"},U=s("h3",null,"Component Call",-1),V=s("h4",null,"Basic Usage",-1),z=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Basic Usage"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(` 
  `),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
  @`),s("span",{class:"hljs-attr"},"select"),t("="),s("span",{class:"hljs-string"},'"handleSelect"'),t(`
/>`)]),t(`
`)])],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
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
    
    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`Your selected is:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),E=s("h4",null,"Modify Title",-1),M=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Modify Title"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(` 
  `),s("span",{class:"hljs-attr"},"title"),t("="),s("span",{class:"hljs-string"},'"Choose whichever you like"'),t(` 
  `),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(` 
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(` 
  @`),s("span",{class:"hljs-attr"},"select"),t("="),s("span",{class:"hljs-string"},'"handleSelect"'),t(` 
/>`)]),t(`
`)])],-1),F=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
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

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`Your selected is:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),H=s("h4",null,"Action Disabled",-1),q=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Action Disabled"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(` 
  `),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(` 
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
  @`),s("span",{class:"hljs-attr"},"select"),t("="),s("span",{class:"hljs-string"},'"handleSelect"'),t(` 
/>`)]),t(`
`)])],-1),G=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
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

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`Your selected is:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),J=s("h4",null,"Disable close on click action",-1),K=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Disable close on click action"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(` 
  `),s("span",{class:"hljs-attr"},":close-on-click-action"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
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
      },
    ])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`Your selected is:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),Q=s("h4",null,"Custom Action Styles",-1),R=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Custom Action Styles"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-action-sheet"),t(` 
  `),s("span",{class:"hljs-attr"},":close-on-click-action"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
  `),s("span",{class:"hljs-attr"},":actions"),t("="),s("span",{class:"hljs-string"},'"actions"'),t(` 
  `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(` 
  @`),s("span",{class:"hljs-attr"},"select"),t("="),s("span",{class:"hljs-string"},'"handleSelect"'),t(`
/>`)]),t(`
`)])],-1),X=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
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

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleSelect = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"action"),t(" =>")]),t(" Snackbar("),s("span",{class:"hljs-string"},[t("`Your selected is:"),s("span",{class:"hljs-subst"},"${action.name}"),t("`")]),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])],-1),Z=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the action sheet</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>Action list</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>Whether to close the actions sheet when clicking action</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the action sheet to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>select</code></td><td>Triggered when the action is click</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>Triggered when the action sheet is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the action sheet open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the action sheet is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the action sheet close-animation ends</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when you click on overlay</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Options</h3><h4>Options passed in for a functional call</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the action sheet when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>Action sheet open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Action sheet open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Action sheet close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Action sheet close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>Action sheet click action callback</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Action</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Action name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Action text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon\uFF0Csupport network image address</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>Icon size</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>Class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Disable or not option</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>actions</code></td><td>Action list</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>',7);function ss(ts,ns,as,ls,es,cs){const n=c("var-site-code-example");return o(),d("div",i,[p,j,s("div",m,[g,a(n,null,{default:l(()=>[u]),_:1})]),s("div",k,[y,a(n,null,{default:l(()=>[f]),_:1})]),s("div",w,[b,_,a(n,null,{default:l(()=>[v]),_:1}),S,a(n,null,{default:l(()=>[A]),_:1}),I,C,a(n,null,{default:l(()=>[x]),_:1}),T,D,a(n,null,{default:l(()=>[O]),_:1})]),s("div",$,[P,W,a(n,null,{default:l(()=>[B]),_:1})]),s("div",Y,[U,V,a(n,null,{default:l(()=>[z]),_:1}),a(n,null,{default:l(()=>[N]),_:1}),E,a(n,null,{default:l(()=>[M]),_:1}),a(n,null,{default:l(()=>[F]),_:1}),H,a(n,null,{default:l(()=>[q]),_:1}),a(n,null,{default:l(()=>[G]),_:1}),J,a(n,null,{default:l(()=>[K]),_:1}),a(n,null,{default:l(()=>[L]),_:1}),Q,a(n,null,{default:l(()=>[R]),_:1}),a(n,null,{default:l(()=>[X]),_:1})]),Z])}var rs=e(h,[["render",ss]]);export{rs as default};
