import{_ as a}from"./elevation.229458c1.js";import{e as n,o as l,c,a as t,i as o,j as d,m as s,U as r}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=t("h1",null,"Dialog",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,[s("A dialog pops up to display the content and handle the user interaction "),t("code",null,"Dialog"),s(" have provided functional and component usage, and there is no essential difference between the two usage effects and parameters.")])],-1),g={class:"card"},u=t("h3",null,"Install",-1),j=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Dialog)
`)])],-1),f={class:"card"},b=t("h3",null,"Scoped Install",-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-attr"},"components"),s(`: {
    [Dialog.Component.name]: Dialog
  }
}
`)])],-1),_=t("h2",null,"Functional",-1),v={class:"card"},k=t("h3",null,"Basic Use",-1),w=t("pre",{class:"hljs"},[t("code",null,[s("Dialog("),t("span",{class:"hljs-string"},"'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'"),s(`)
`)])],-1),D={class:"card"},C=t("h3",null,"Modify Title",-1),B=t("pre",{class:"hljs"},[t("code",null,[s(`Dialog({
  `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Beat It'"),s(`,
  `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'"),s(`,
})
`)])],-1),S={class:"card"},x=t("h3",null,"Hide Button",-1),A=t("pre",{class:"hljs"},[t("code",null,[s(`Dialog({
  `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'"),s(`,
  `),t("span",{class:"hljs-attr"},"confirmButton"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  `),t("span",{class:"hljs-attr"},"cancelButton"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
})
`)])],-1),M={class:"card"},W=t("h3",null,"Handling user behavior",-1),T=t("p",null,[s("You can get user behavior from the method\u2019s return value, which is a "),t("code",null,"Promise"),s(". Includes "),t("code",null,"confirm"),s(", "),t("code",null,"cancel"),s(", and "),t("code",null,"close(click the overlay to trigger closure)"),s(".")],-1),N=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` actions = {
  `),t("span",{class:"hljs-attr"},"confirm"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.success("),t("span",{class:"hljs-string"},"'confirm'"),s(`),
  `),t("span",{class:"hljs-attr"},"cancel"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.error("),t("span",{class:"hljs-string"},"'cancel'"),s(`),
  `),t("span",{class:"hljs-attr"},"close"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),t("span",{class:"hljs-string"},"'close'"),s(`),
}

actions[`),t("span",{class:"hljs-keyword"},"await"),s(" Dialog("),t("span",{class:"hljs-string"},"'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'"),s(`)]()
`)])],-1),I={class:"card"},O=t("h3",null,"Asynchronous closing",-1),P=t("p",null,[s("You can use "),t("code",null,"onBeforeClose"),s(" to intercept before closing, and you can get the user behavior from the parameters, and the callback function that triggers the shutdown.")],-1),U=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` actions = {
  `),t("span",{class:"hljs-attr"},"confirm"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.success("),t("span",{class:"hljs-string"},"'confirm'"),s(`),
  `),t("span",{class:"hljs-attr"},"cancel"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.error("),t("span",{class:"hljs-string"},"'cancel'"),s(`),
  `),t("span",{class:"hljs-attr"},"close"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),t("span",{class:"hljs-string"},"'close'"),s(`),
}

`),t("span",{class:"hljs-keyword"},"const"),s(" onBeforeClose = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"action, done"),s(") =>")]),s(` {
  Snackbar.loading(`),t("span",{class:"hljs-string"},"'Asynchronous shutdown in progress'"),s(`)
  
  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    actions[action]()
    done()
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}

Dialog({
  `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'"),s(`,
  onBeforeClose
})
`)])],-1),V=t("h2",null,"Component Call",-1),z={class:"card"},H=t("h3",null,"Basic Use",-1),$=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Basic Use"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-dialog"),s(`
  `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Beat It"'),s(`
  `),t("span",{class:"hljs-attr"},"message"),s("="),t("span",{class:"hljs-string"},`"Don't Wanna See No Blood, Don't Be A Macho Man"`),s(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
  @`),t("span",{class:"hljs-attr"},"confirm"),s("="),t("span",{class:"hljs-string"},`"() => Snackbar.success('confirm')"`),s(`
  @`),t("span",{class:"hljs-attr"},"cancel"),s("="),t("span",{class:"hljs-string"},`"() => Snackbar.error('cancel')"`),s(`
  @`),t("span",{class:"hljs-attr"},"closed"),s("="),t("span",{class:"hljs-string"},`"() => Snackbar.info('closed')"`),s(`
/>`)]),s(`
`)])],-1),E=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
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
`)])],-1),F={class:"card"},Y=t("h3",null,"Asynchronous closing",-1),q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Asynchronous closing"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-dialog"),s(`
  `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Beat It"'),s(`
  `),t("span",{class:"hljs-attr"},"message"),s("="),t("span",{class:"hljs-string"},`"Don't Wanna See No Blood, Don't Be A Macho Man"`),s(`
  `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
  @`),t("span",{class:"hljs-attr"},"before-close"),s("="),t("span",{class:"hljs-string"},'"onBeforeClose"'),s(`
/>`)]),s(`
`)])],-1),G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
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
      Snackbar.loading(`),t("span",{class:"hljs-string"},"'Asynchronous shutdown in progress'"),s(`)

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
`)])],-1),J={class:"card"},K=t("h3",null,"Custom Slots",-1),L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Custom Slots"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-dialog"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"title"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"information"'),s(),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"#2979ff"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Don't Wanna See No Blood, Don't Be A Macho Man"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Don't Wanna See No Blood, Don't Be A Macho Man"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Don't Wanna See No Blood, Don't Be A Macho Man"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-dialog"),s(">")]),s(`
`)])],-1),Q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)

    `),t("span",{class:"hljs-keyword"},"return"),s(` { show }
  }
}
`)])],-1),R=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display a Dialog</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>message-align</code></td><td>Dialog message content text alignment, optional values <code>center</code>, <code>left</code>, <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirm-button</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancel-button</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-color</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-color</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-class</code></td><td>Dialog body class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-style</code></td><td>Dialog body style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Dialog to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the Dialog is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the Dialog open-animation ends</td><td><code>-</code></td></tr><tr><td><code>before-close</code></td><td>Triggering before the Dialog closes prevents closure</td><td><code>action: confirm | cancel | close</code> <br> <code>done: Function</code></td></tr><tr><td><code>close</code></td><td>Triggered when the Dialog is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the Dialog close-animation ends</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>Trigger on confirm</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Trigger on cancel</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when you click on overlay</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Dialog Options</h3><h4>Options passed in for a functional call</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>messageAlign</code></td><td>Dialog message content text alignment, optional values <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirmButton</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancelButton</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonColor</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonColor</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogClass</code></td><td>Dialog body class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogStyle</code></td><td>Dialog body style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>Dialog open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Dialog open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onBeforeClose</code></td><td>Callbacks prevent closure before the Dialog closes</td><td><em>(action: confirm | cancel | close, done: Function) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Dialog close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Dialog close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onConfirm</code></td><td>Confirm callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onCancel</code></td><td>Cancel callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Dialog content message</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td><code>280px</code></td></tr><tr><td><code>--dialog-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--dialog-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--dialog-title-padding</code></td><td><code>20px 20px 0</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--dialog-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--dialog-message-padding</code></td><td><code>12px 20px</code></td></tr><tr><td><code>--dialog-message-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--dialog-message-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--dialog-actions-padding</code></td><td><code>0 12px 12px</code></td></tr><tr><td><code>--dialog-button-margin-left</code></td><td><code>6px</code></td></tr><tr><td><code>--dialog-confirm-button-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--dialog-cancel-button-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table></div>',6);function X(Z,tt,st,et,ot,dt){const e=n("var-site-code-example");return l(),c("div",h,[p,m,t("div",g,[u,o(e,null,{default:d(()=>[j]),_:1})]),t("div",f,[b,o(e,null,{default:d(()=>[y]),_:1})]),_,t("div",v,[k,o(e,null,{default:d(()=>[w]),_:1})]),t("div",D,[C,o(e,null,{default:d(()=>[B]),_:1})]),t("div",S,[x,o(e,null,{default:d(()=>[A]),_:1})]),t("div",M,[W,T,o(e,null,{default:d(()=>[N]),_:1})]),t("div",I,[O,P,o(e,null,{default:d(()=>[U]),_:1})]),V,t("div",z,[H,o(e,null,{default:d(()=>[$]),_:1}),o(e,null,{default:d(()=>[E]),_:1})]),t("div",F,[Y,o(e,null,{default:d(()=>[q]),_:1}),o(e,null,{default:d(()=>[G]),_:1})]),t("div",J,[K,o(e,null,{default:d(()=>[L]),_:1}),o(e,null,{default:d(()=>[Q]),_:1})]),R])}var lt=a(i,[["render",X]]);export{lt as default};
