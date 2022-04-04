import{_ as c}from"./elevation.4d11ec3f.js";import{e,o,c as r,a,i as l,j as n,U as h,m as s}from"./vendor.49f89f0d.js";const i={components:{}},p={class:"varlet-site-doc"},d=a("h1",null,"BottomNavigation",-1),j={class:"card"},m=a("h3",null,"Install",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { BottomNavigation, BottomNavigationItem } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` app = createApp();
app.use(BottomNavigation);
app.use(BottomNavigationItem);
`)])],-1),v={class:"card"},b=a("h3",null,"Basic Usage",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
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
`)])],-1),x={class:"card"},I=a("h3",null,"Show Badge",-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(),a("span",{class:"hljs-attr"},"badge"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(),a("span",{class:"hljs-attr"},":badge"),s("="),a("span",{class:"hljs-string"},'"badgeProps"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

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
`)])],-1),B={class:"card"},N=a("h3",null,"Custom Icon",-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"home"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"props"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"img"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"width: 20px"'),s(),a("span",{class:"hljs-attr"},":src"),s("="),a("span",{class:"hljs-string"},'"props.active ? homeIcon.active : homeIcon.inactive"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
    `),a("span",{class:"hljs-keyword"},"const"),s(` homeIcon = {
      `),a("span",{class:"hljs-attr"},"active"),s(": "),a("span",{class:"hljs-string"},"'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png'"),s(`,
      `),a("span",{class:"hljs-attr"},"inactive"),s(": "),a("span",{class:"hljs-string"},"'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png'"),s(`
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active, homeIcon }
  }
}
`)])],-1),D={class:"card"},E=a("h3",null,"Custom Color",-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"#2196f3"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active }
  }
}
`)])],-1),T={class:"card"},U=a("h3",null,"Change Event",-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" Snackbar "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'../../snackbar'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"active"),s(") ")]),s(`{
      Snackbar.info(`),a("span",{class:"hljs-string"},[s("`changed to "),a("span",{class:"hljs-subst"},"${active}"),s("`")]),s(`)
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active, handleChange }
  }
}
`)])],-1),F={class:"card"},L=a("h3",null,"Click Event",-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s("  @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s("  @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s("  @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s("  @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" Snackbar "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'../../snackbar'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleClick"),s("("),a("span",{class:"hljs-params"},"active"),s(") ")]),s(`{
      Snackbar.success(`),a("span",{class:"hljs-string"},[s("`clicked "),a("span",{class:"hljs-subst"},"${active}"),s("`")]),s(`)
    }

    `),a("span",{class:"hljs-keyword"},"return"),s(` { active, handleClick }
  }
}
`)])],-1),M={class:"card"},Z=a("h3",null,"Fab",-1),G=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"fab"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-top: 10px"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"fab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"fab_example"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"plus"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"34"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"pack.label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"pack.label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"pack.label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"pack.label"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`)])],-1),J=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" VarIcon "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'../../icon'"),s(`

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-attr"},"components"),s(`:{VarIcon},
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(` { active }
  }
}
`)])],-1),K=a("pre",{class:"hljs"},[a("code",null,[s(`<style lang="less" scoped>
`),a("span",{class:"hljs-selector-class"},".fab_example"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-primary);
}
</style>
`)])],-1),O=h('<h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>BottomNavigation Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Identifier of current tab</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>fixed</code></td><td>Whether to fixed bottom</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>border</code></td><td>Whether to show border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>Z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td><code>active-color</code></td><td>Color of active tab item</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-color</code></td><td>Color of inactive tab item</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>BottomNavigationItem Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Identifier</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name, equivalent to the <a href="/#/en-US/icon">name property</a> of Icon component</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>Label text content</td><td><em>string</em></td><td>-</td></tr><tr><td><code>namespace</code></td><td>Icon namespace, extensible custom icon library, equivalent to the <a href="/#/en-US/icon">namespace property</a> of Icon component</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>badge</code></td><td>Logo in the upper right corner of the icon</td><td><em>boolean | BadgeProps</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>BottomNavigation Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-change</code></td><td>The callback function before switching labels, which returns false to prevent switching, supports the return of promise</td><td><code>active: number | string</code></td></tr><tr><td><code>change</code></td><td>Triggered when switching labels</td><td><code>active: number | string</code></td></tr></tbody></table></div><div class="card"><h3>BottomNavigationItem Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Trigger on click</td><td><code>active: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>BottomNavigation Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>fab</code></td><td>Support for inserting a custom Fab button in the center of the component</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>BottomNavigationItem Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom label text content that overwrites the content of <code>label</code></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom Icon</td><td><code>active: boolean</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p></div><div class="card"><h3>BottomNavigation Variables</h3><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--bottom-navigation-height</code></td><td><code>50px</code></td></tr><tr><td><code>--bottom-navigation-z-index</code></td><td><code>1</code></td></tr><tr><td><code>--bottom-navigation-background-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--bottom-navigation-border-color</code></td><td><code>#bcc2cb</code></td></tr></tbody></table></div><div class="card"><h3>BottomNavigationItem Variables</h3><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--bottom-navigation-item-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--bottom-navigation-item-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--bottom-navigation-item-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--bottom-navigation-item-active-background-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--bottom-navigation-item-line-height</code></td><td><code>1</code></td></tr><tr><td><code>--bottom-navigation-item-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--bottom-navigation-item-icon-margin-bottom</code></td><td><code>5px</code></td></tr></tbody></table></div>',13);function Q(R,X,Y,ss,as,ts){const t=e("var-site-code-example");return o(),r("div",p,[d,a("div",j,[m,l(t,null,{default:n(()=>[g]),_:1})]),a("div",v,[b,l(t,null,{default:n(()=>[u]),_:1}),l(t,null,{default:n(()=>[f]),_:1})]),a("div",_,[y,l(t,null,{default:n(()=>[k]),_:1}),l(t,null,{default:n(()=>[w]),_:1})]),a("div",x,[I,l(t,null,{default:n(()=>[C]),_:1}),l(t,null,{default:n(()=>[S]),_:1})]),a("div",B,[N,l(t,null,{default:n(()=>[P]),_:1}),l(t,null,{default:n(()=>[V]),_:1})]),a("div",D,[E,l(t,null,{default:n(()=>[z]),_:1}),l(t,null,{default:n(()=>[A]),_:1})]),a("div",T,[U,l(t,null,{default:n(()=>[$]),_:1}),l(t,null,{default:n(()=>[q]),_:1})]),a("div",F,[L,l(t,null,{default:n(()=>[W]),_:1}),l(t,null,{default:n(()=>[H]),_:1})]),a("div",M,[Z,l(t,null,{default:n(()=>[G]),_:1}),l(t,null,{default:n(()=>[J]),_:1}),l(t,null,{default:n(()=>[K]),_:1})]),O])}var cs=c(i,[["render",Q]]);export{cs as default};
