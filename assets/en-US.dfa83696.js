import{_ as e}from"./elevation.229458c1.js";import{e as c,o,c as p,a,i as t,j as l,m as s,U as r}from"./vendor.49f89f0d.js";const h={components:{}},d={class:"varlet-site-doc"},j=a("h1",null,"Popup",-1),i=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,[s("Create a container that can pop up from top, bottom, left, right and center. "),a("code",null,"teleport"),s(" inserts into the end of the "),a("code",null,"body"),s(" by default.")])],-1),m={class:"card"},u=a("h3",null,"Install",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Popup } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Popup)
`)])],-1),v={class:"card"},b=a("h3",null,"Popup Position",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"center = true"'),s(`
>`)]),s(`
  Center Popup
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"bottom = true"'),s(`
>`)]),s(`
  Below Popup
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(` 
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"top = true"'),s(`
>`)]),s(`
  Above Popup
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(` 
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"left = true"'),s(`
>`)]),s(`
  Left Popup
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(` 
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(` 
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"right = true"'),s(`
>`)]),s(`
  Right Popup
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

// Center Popup
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"center"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// Below Popup
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    As he came into the window. 
    It was the sound of a crescendo. 
    He came into her apartment. 
    He left the bloodstains on the carpet.
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// Above Popup
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"top"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"top"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// Left Popup
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"left"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"left"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// Right Popup
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"right"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"right"'),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`
`)])],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

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
`)])],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-selector-class"},".mt-10"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"10px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".block"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"20px"),s(),a("span",{class:"hljs-number"},"24px"),s(`;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"250px"),s(`;
}
`)])],-1),k={class:"card"},_=a("h3",null,"Overlay Style",-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(` 
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"overlayClass = true"'),s(`
>`)]),s(`
  Overlay Style
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(` 
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"overlayStyle = true"'),s(`
>`)]),s(`
  Overlay Style
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

// Overlay Class
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(` 
  `),a("span",{class:"hljs-attr"},"overlay-class"),s("="),a("span",{class:"hljs-string"},'"custom-overlay"'),s(` 
  `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"overlayClass"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

// Overlay style
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(` 
  `),a("span",{class:"hljs-attr"},":overlay-style"),s("="),a("span",{class:"hljs-string"},`"{
    backgroundColor: 'rgba(0, 0, 0, 0.3)' 
  }"`),s(`
  `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"overlayStyle"'),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
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
`)])],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-comment"},"/* normal css */"),s(`
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
`)])],-1),H={class:"card"},A=a("h3",null,"Events",-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
  `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"mt-10"'),s(`
  `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
  `),a("span",{class:"hljs-attr"},"block"),s(`
  @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"event = true"'),s(`
>`)]),s(`
  Event
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(`
  `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"event"'),s(`
  @`),a("span",{class:"hljs-attr"},"open"),s("="),a("span",{class:"hljs-string"},`"() => Snackbar.info('open')"`),s(`
  @`),a("span",{class:"hljs-attr"},"opened"),s("="),a("span",{class:"hljs-string"},`"() => Snackbar.success('opened')"`),s(`
  @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"() => Snackbar.warning('close')"`),s(`
  @`),a("span",{class:"hljs-attr"},"closed"),s("="),a("span",{class:"hljs-string"},`"() => Snackbar.error('closed')"`),s(`
>`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"block"'),s(">")]),s(`
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`
`)])],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
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
`)])],-1),T=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the Popup</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>position</code></td><td>Popup position with optional value of <code>top</code> <code>bottom</code> <code>right</code> <code>left</code> <code>center</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>transition</code></td><td>Transition animation name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Popup when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the Popup</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Popup to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the Popup is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the Popup open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the Popup is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the Popup close-animation ends</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when you click on overlay</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Popup content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--popup-overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr><tr><td><code>--popup-content-background-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>',5);function V(B,D,E,O,N,W){const n=c("var-site-code-example");return o(),p("div",d,[j,i,a("div",m,[u,t(n,null,{default:l(()=>[g]),_:1})]),a("div",v,[b,t(n,null,{default:l(()=>[y]),_:1}),t(n,null,{default:l(()=>[f]),_:1}),t(n,null,{default:l(()=>[w]),_:1})]),a("div",k,[_,t(n,null,{default:l(()=>[P]),_:1}),t(n,null,{default:l(()=>[S]),_:1}),t(n,null,{default:l(()=>[x]),_:1})]),a("div",H,[A,t(n,null,{default:l(()=>[C]),_:1}),t(n,null,{default:l(()=>[I]),_:1})]),T])}var L=e(h,[["render",V]]);export{L as default};
