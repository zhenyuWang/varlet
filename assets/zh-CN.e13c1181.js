import{_ as o}from"./elevation.229458c1.js";import{e as a,o as l,c as n,a as t,i as e,j as c,m as s,U as r}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"\u5BF9\u8BDD\u6846",-1),j=t("div",{class:"card"},[t("h3",null,"\u4ECB\u7ECD"),t("p",null,[s("\u5F39\u51FA\u4E00\u4E2A\u5BF9\u8BDD\u6846\u5C55\u793A\u5185\u5BB9\u5E76\u5904\u7406\u7528\u6237\u4EA4\u4E92\u3002 "),t("code",null,"Dialog"),s(" \u63D0\u4F9B\u4E86\u51FD\u6570\u5F0F\u548C\u7EC4\u4EF6\u5F0F\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4E24\u79CD\u4F7F\u7528\u6548\u679C\u548C\u53C2\u6570\u5E76\u6CA1\u6709\u672C\u8D28\u533A\u522B\u3002")])],-1),m={class:"card"},u=t("h3",null,"\u5F15\u5165",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Dialog)
`)])],-1),f={class:"card"},_=t("h3",null,"\u5C40\u90E8\u5F15\u5165",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-attr"},"components"),s(`: {
    [Dialog.Component.name]: Dialog
  }
}
`)])],-1),v=t("h2",null,"\u51FD\u6570\u8C03\u7528",-1),y={class:"card"},k=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),w=t("pre",{class:"hljs"},[t("code",null,[s("Dialog("),t("span",{class:"hljs-string"},"'\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34'"),s(`)
`)])],-1),x={class:"card"},S=t("h3",null,"\u4FEE\u6539\u6807\u9898",-1),C=t("pre",{class:"hljs"},[t("code",null,[s(`Dialog({
  `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'\u5170\u4EAD\u5E8F'"),s(`,
  `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34'"),s(`,
})
`)])],-1),B={class:"card"},D=t("h3",null,"\u9690\u85CF\u6309\u94AE",-1),T=t("pre",{class:"hljs"},[t("code",null,[s(`Dialog({
  `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34'"),s(`,
  `),t("span",{class:"hljs-attr"},"confirmButton"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  `),t("span",{class:"hljs-attr"},"cancelButton"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
})
`)])],-1),z={class:"card"},N=t("h3",null,"\u5904\u7406\u7528\u6237\u884C\u4E3A",-1),O=t("p",null,[s("\u53EF\u4EE5\u901A\u8FC7 "),t("code",null,"Dialog"),s(" \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u83B7\u53D6\u7528\u6237\u884C\u4E3A, \u8FD4\u56DE\u503C\u662F\u4E00\u4E2A "),t("code",null,"promise"),s("\u3002 \u5305\u542B "),t("code",null,"confirm(\u786E\u8BA4)"),s("\u3001"),t("code",null,"cancel(\u53D6\u6D88)"),s("\u3001"),t("code",null,"close(\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5C42\u89E6\u53D1\u5173\u95ED)"),s(" \u4E09\u79CD\u72B6\u6001\u3002")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` actions = {
  `),t("span",{class:"hljs-attr"},"confirm"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.success("),t("span",{class:"hljs-string"},"'confirm'"),s(`),
  `),t("span",{class:"hljs-attr"},"cancel"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.error("),t("span",{class:"hljs-string"},"'cancel'"),s(`),
  `),t("span",{class:"hljs-attr"},"close"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),t("span",{class:"hljs-string"},"'close'"),s(`),
}

actions[`),t("span",{class:"hljs-keyword"},"await"),s(" Dialog("),t("span",{class:"hljs-string"},"'\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34'"),s(`)]()
`)])],-1),V={class:"card"},$=t("h3",null,"\u5F02\u6B65\u5173\u95ED",-1),P=t("p",null,[t("code",null,"Dialog"),s(" \u53EF\u4EE5\u901A\u8FC7 "),t("code",null,"onBeforeClose"),s(" \u8FDB\u884C\u5173\u95ED\u524D\u7684\u62E6\u622A\uFF0C\u53EF\u4EE5\u4ECE\u53C2\u6570\u4E2D\u5F97\u5230\u7528\u6237\u884C\u4E3A\u548C\u89E6\u53D1\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570\u3002")],-1),F=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` actions = {
  `),t("span",{class:"hljs-attr"},"confirm"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.success("),t("span",{class:"hljs-string"},"'confirm'"),s(`),
  `),t("span",{class:"hljs-attr"},"cancel"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.error("),t("span",{class:"hljs-string"},"'cancel'"),s(`),
  `),t("span",{class:"hljs-attr"},"close"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),t("span",{class:"hljs-string"},"'close'"),s(`),
}

`),t("span",{class:"hljs-keyword"},"const"),s(" onBeforeClose = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"action, done"),s(") =>")]),s(` {
  Snackbar.loading(`),t("span",{class:"hljs-string"},"'\u6B63\u5728\u5F02\u6B65\u5173\u95ED'"),s(`)

  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    actions[action]()
    done()
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}

Dialog({
  `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34'"),s(`,
  onBeforeClose
})
`)])],-1),E=t("h2",null,"\u7EC4\u4EF6\u8C03\u7528",-1),I={class:"card"},U=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("\u57FA\u672C\u4F7F\u7528"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-dialog"),s(`
  `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"\u5170\u4EAD\u5E8F"'),s(`
  `),t("span",{class:"hljs-attr"},"message"),s("="),t("span",{class:"hljs-string"},'"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34"'),s(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
  @`),t("span",{class:"hljs-attr"},"confirm"),s("="),t("span",{class:"hljs-string"},`"() => Snackbar.success('confirm')"`),s(`
  @`),t("span",{class:"hljs-attr"},"cancel"),s("="),t("span",{class:"hljs-string"},`"() => Snackbar.error('cancel')"`),s(`
  @`),t("span",{class:"hljs-attr"},"closed"),s("="),t("span",{class:"hljs-string"},`"() => Snackbar.info('closed')"`),s(`
/>`)]),s(`
`)])],-1),G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)

    `),t("span",{class:"hljs-keyword"},"return"),s(` {
      show,
      Snackbar,
    }
  }
}
`)])],-1),H={class:"card"},J=t("h3",null,"\u5F02\u6B65\u5173\u95ED",-1),K=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("\u5F02\u6B65\u5173\u95ED"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-dialog"),s(`
  `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"\u5170\u4EAD\u5E8F"'),s(`
  `),t("span",{class:"hljs-attr"},"message"),s("="),t("span",{class:"hljs-string"},'"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34"'),s(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
  @`),t("span",{class:"hljs-attr"},"before-close"),s("="),t("span",{class:"hljs-string"},'"onBeforeClose"'),s(`
/>`)]),s(`
`)])],-1),L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` actions = {
  `),t("span",{class:"hljs-attr"},"confirm"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.success("),t("span",{class:"hljs-string"},"'confirm'"),s(`),
  `),t("span",{class:"hljs-attr"},"cancel"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.error("),t("span",{class:"hljs-string"},"'cancel'"),s(`),
  `),t("span",{class:"hljs-attr"},"close"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),t("span",{class:"hljs-string"},"'close'"),s(`),
}

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)

    `),t("span",{class:"hljs-keyword"},"const"),s(" onBeforeClose = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"action, done"),s(") =>")]),s(` {
      Snackbar.loading(`),t("span",{class:"hljs-string"},"'\u6B63\u5728\u5F02\u6B65\u5173\u95ED'"),s(`)

      `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
        actions[action]()
        done()
      }, `),t("span",{class:"hljs-number"},"1000"),s(`)
    }

    `),t("span",{class:"hljs-keyword"},"return"),s(` {
      show,
      Snackbar,
      onBeforeClose,
    }
  }
}
`)])],-1),M={class:"card"},Q=t("h3",null,"\u81EA\u5B9A\u4E49\u63D2\u69FD",-1),R=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("\u81EA\u5B9A\u4E49\u63D2\u69FD"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-dialog"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"title"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"information"'),s(),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"#2979ff"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-dialog"),s(">")]),s(`
`)])],-1),W=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)

    `),t("span",{class:"hljs-keyword"},"return"),s(` { show }
  }
}
`)])],-1),X=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A\u5BF9\u8BDD\u6846</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>\u5BF9\u8BDD\u6846\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>message</code></td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>message-align</code></td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirm-button</code></td><td>\u662F\u5426\u663E\u793A\u786E\u8BA4\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancel-button</code></td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirm-button-text</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancel-button-text</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-color</code></td><td>\u786E\u8BA4\u6309\u94AE\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-color</code></td><td>\u53D6\u6D88\u6309\u94AE\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-class</code></td><td>\u5BF9\u8BDD\u6846\u4E3B\u4F53\u533A\u57DF\u7684 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-style</code></td><td>\u5BF9\u8BDD\u6846\u4E3B\u4F53\u533A\u57DF\u7684 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1 body \u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00\u5BF9\u8BDD\u6846\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00\u5BF9\u8BDD\u6846\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>before-close</code></td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u524D\u89E6\u53D1\uFF0C\u4F1A\u963B\u6B62\u5173\u95ED</td><td><code>action: confirm | cancel | close</code> <br> <code>done: Function</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u5BF9\u8BDD\u6846\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED\u5BF9\u8BDD\u6846\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>\u786E\u8BA4\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>\u53D6\u6D88\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Dialog Options</h3><h4>\u51FD\u6570\u5F0F\u8C03\u7528\u65F6\u4F20\u5165\u7684\u9009\u9879</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>title</code></td><td>\u5BF9\u8BDD\u6846\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>message</code></td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>messageAlign</code></td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirmButton</code></td><td>\u662F\u5426\u663E\u793A\u786E\u8BA4\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancelButton</code></td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirmButtonText</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancelButtonText</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonColor</code></td><td>\u786E\u8BA4\u6309\u94AE\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonColor</code></td><td>\u53D6\u6D88\u6309\u94AE\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogClass</code></td><td>\u5BF9\u8BDD\u6846\u4E3B\u4F53\u533A\u57DF\u7684 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogStyle</code></td><td>\u5BF9\u8BDD\u6846\u4E3B\u4F53\u533A\u57DF\u7684 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1 body \u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>\u5BF9\u8BDD\u6846\u5F00\u542F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>\u5BF9\u8BDD\u6846\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onBeforeClose</code></td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u524D\u56DE\u8C03\uFF0C\u4F1A\u963B\u6B62\u5173\u95ED</td><td><em>(action: confirm | cancel | close, done: Function) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onConfirm</code></td><td>\u786E\u8BA4\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onCancel</code></td><td>\u53D6\u6D88\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>\u906E\u7F69\u5C42\u70B9\u51FB\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u5BF9\u8BDD\u6846\u4E3B\u8981\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u5BF9\u8BDD\u6846\u6807\u9898</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td><code>280px</code></td></tr><tr><td><code>--dialog-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--dialog-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--dialog-title-padding</code></td><td><code>20px 20px 0</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--dialog-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--dialog-message-padding</code></td><td><code>12px 20px</code></td></tr><tr><td><code>--dialog-message-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--dialog-message-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--dialog-actions-padding</code></td><td><code>0 12px 12px</code></td></tr><tr><td><code>--dialog-button-margin-left</code></td><td><code>6px</code></td></tr><tr><td><code>--dialog-confirm-button-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--dialog-cancel-button-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table></div>',6);function Y(Z,tt,st,dt,et,ct){const d=a("var-site-code-example");return l(),n("div",i,[p,j,t("div",m,[u,e(d,null,{default:c(()=>[g]),_:1})]),t("div",f,[_,e(d,null,{default:c(()=>[b]),_:1})]),v,t("div",y,[k,e(d,null,{default:c(()=>[w]),_:1})]),t("div",x,[S,e(d,null,{default:c(()=>[C]),_:1})]),t("div",B,[D,e(d,null,{default:c(()=>[T]),_:1})]),t("div",z,[N,O,e(d,null,{default:c(()=>[A]),_:1})]),t("div",V,[$,P,e(d,null,{default:c(()=>[F]),_:1})]),E,t("div",I,[U,e(d,null,{default:c(()=>[q]),_:1}),e(d,null,{default:c(()=>[G]),_:1})]),t("div",H,[J,e(d,null,{default:c(()=>[K]),_:1}),e(d,null,{default:c(()=>[L]),_:1})]),t("div",M,[Q,e(d,null,{default:c(()=>[R]),_:1}),e(d,null,{default:c(()=>[W]),_:1})]),X])}var lt=o(h,[["render",Y]]);export{lt as default};
