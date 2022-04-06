import{_ as e}from"./elevation.4d11ec3f.js";import{e as c,o,c as r,a,i as l,j as n,U as h,m as s}from"./vendor.49f89f0d.js";const i={components:{}},d={class:"varlet-site-doc"},p=a("h1",null,"BottomNavigation",-1),j={class:"card"},m=a("h3",null,"Install",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { BottomNavigation, BottomNavigationItem } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` app = createApp()
app.use(BottomNavigation)
app.use(BottomNavigationItem)
`)])],-1),b={class:"card"},v=a("h3",null,"Basic Usage",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active }
  }
}
`)])],-1),_={class:"card"},y=a("h3",null,"Match by name",-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"home"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"search"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"user"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-string"},'"home"'),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active }
  }
}
`)])],-1),x={class:"card"},C=a("h3",null,"Show Badge",-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(),a("span",{class:"hljs-attr"},"badge"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(),a("span",{class:"hljs-attr"},":badge"),s("="),a("span",{class:"hljs-string"},'"badgeProps"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(` badgeProps = {
      `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'primary'"),s(`,
      `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'66'"),s(`
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active, badgeProps }
  }
}
`)])],-1),N={class:"card"},I=a("h3",null,"Custom Color",-1),E=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#ba68c8"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active }
  }
}
`)])],-1),D={class:"card"},V=a("h3",null,"Change Event",-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" handleChange = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"active"),s(") =>")]),s(` {
      Snackbar.info(`),a("span",{class:"hljs-string"},[s("`changed to "),a("span",{class:"hljs-subst"},"${active}"),s("`")]),s(`)
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active, handleChange }
  }
}
`)])],-1),T={class:"card"},U=a("h3",null,"Click Event",-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" handleClick = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"active"),s(") =>")]),s(` {
      Snackbar.success(`),a("span",{class:"hljs-string"},[s("`clicked "),a("span",{class:"hljs-subst"},"${active}"),s("`")]),s(`)
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active, handleClick }
  }
}
`)])],-1),F={class:"card"},L=a("h3",null,"Fab",-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"fab @fabClick="'),a("span",{class:"hljs-attr"},"isEven"),s(" = "),a("span",{class:"hljs-string"},"!isEven"),s('"">')]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"fab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"plus"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"bell"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"!isEven"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(" isEven = ref("),a("span",{class:"hljs-literal"},"true"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active, isEven }
  }
}
`)])],-1),M=h('<h2>API</h2><div class="card"><h3>Props</h3><h4>BottomNavigation Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Identifier of current tab</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>fixed</code></td><td>Whether to fixed bottom</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>border</code></td><td>Whether to show border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>Z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td><code>active-color</code></td><td>Color of active tab item</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-color</code></td><td>Color of inactive tab item</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fab-props</code></td><td>Fab button props</td><td><em>ButtonProps</em></td><td><code>{type: &quot;primary&quot;}</code></td></tr></tbody></table><h4>BottomNavigationItem Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Identifier</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name, equivalent to the <a href="/#/en-US/icon">name</a> of Icon component</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>Label text content</td><td><em>string</em></td><td>-</td></tr><tr><td><code>namespace</code></td><td>Icon namespace, extensible custom icon library, equivalent to the <a href="/#/en-US/icon">namespace</a> of Icon component</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>badge</code></td><td>Logo in the upper right corner of the icon</td><td><em>boolean | BadgeProps</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>BottomNavigation Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-change</code></td><td>The callback function before switching labels, which returns false to prevent switching, supports the return of promise</td><td><code>active: number | string</code></td></tr><tr><td><code>change</code></td><td>Triggered when switching labels</td><td><code>active: number | string</code></td></tr><tr><td><code>fab-click</code></td><td>Triggered when fab button click</td><td><code>-</code></td></tr></tbody></table><h4>BottomNavigationItem Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Trigger on click</td><td><code>active: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>BottomNavigation Slots</h4><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>fab</code></td><td>Support for inserting a custom Fab button in the center of the component</td><td><code>-</code></td></tr></tbody></table><h4>BottomNavigationItem Slots</h4><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom label text content that overwrites the content of <code>label</code></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom Icon</td><td><code>active: boolean</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><h4>BottomNavigation Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--bottom-navigation-height</code></td><td><code>50px</code></td></tr><tr><td><code>--bottom-navigation-z-index</code></td><td><code>1</code></td></tr><tr><td><code>--bottom-navigation-background-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--bottom-navigation-border-color</code></td><td><code>#bcc2cb</code></td></tr></tbody></table><h4>BottomNavigationItem Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--bottom-navigation-item-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--bottom-navigation-item-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--bottom-navigation-item-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--bottom-navigation-item-active-background-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--bottom-navigation-item-line-height</code></td><td><code>1</code></td></tr><tr><td><code>--bottom-navigation-item-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--bottom-navigation-item-icon-margin-bottom</code></td><td><code>5px</code></td></tr></tbody></table></div>',5);function Z(G,J,K,O,Q,R){const t=c("var-site-code-example");return o(),r("div",d,[p,a("div",j,[m,l(t,null,{default:n(()=>[g]),_:1})]),a("div",b,[v,l(t,null,{default:n(()=>[u]),_:1}),l(t,null,{default:n(()=>[f]),_:1})]),a("div",_,[y,l(t,null,{default:n(()=>[k]),_:1}),l(t,null,{default:n(()=>[w]),_:1})]),a("div",x,[C,l(t,null,{default:n(()=>[S]),_:1}),l(t,null,{default:n(()=>[B]),_:1})]),a("div",N,[I,l(t,null,{default:n(()=>[E]),_:1}),l(t,null,{default:n(()=>[P]),_:1})]),a("div",D,[V,l(t,null,{default:n(()=>[z]),_:1}),l(t,null,{default:n(()=>[A]),_:1})]),a("div",T,[U,l(t,null,{default:n(()=>[$]),_:1}),l(t,null,{default:n(()=>[q]),_:1})]),a("div",F,[L,l(t,null,{default:n(()=>[W]),_:1}),l(t,null,{default:n(()=>[H]),_:1})]),M])}var ss=e(i,[["render",Z]]);export{ss as default};
