import{_ as e}from"./elevation.229458c1.js";import{e as c,o as d,c as o,a as s,i as n,j as l,m as t,U as r}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"Countdown",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"For real-time display of countdown values, support millisecond precision.")],-1),u={class:"card"},m=s("h3",null,"Install",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Countdown } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Countdown)
`)])],-1),g={class:"card"},b=s("h3",null,"Basic Usage",-1),f=s("p",null,[t("Use "),s("code",null,"time"),t(" to set countdown time(ms).")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(),s("span",{class:"hljs-attr"},":time"),t("="),s("span",{class:"hljs-string"},'"time"'),t(" />")]),t(`
`)])],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" time = ref("),s("span",{class:"hljs-number"},"30"),t(" * "),s("span",{class:"hljs-number"},"60"),t(" * "),s("span",{class:"hljs-number"},"60"),t(" * "),s("span",{class:"hljs-number"},"1000"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      time
    }
  }
}
`)])],-1),y={class:"card"},k=s("h3",null,"Custom Format",-1),D=s("p",null,[t("Use "),s("code",null,"format"),t(" to set time text.")],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(),s("span",{class:"hljs-attr"},":time"),t("="),s("span",{class:"hljs-string"},'"time"'),t(),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"DD Day, HH:mm:ss"'),t(" />")]),t(`
`)])],-1),x={class:"card"},C=s("h3",null,"Show Millisecond",-1),H=s("p",null,[t("Use "),s("code",null,"S"),t(" text to show millisecond.")],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(),s("span",{class:"hljs-attr"},":time"),t("="),s("span",{class:"hljs-string"},'"time"'),t(),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"HH:mm:ss:SS"'),t(" />")]),t(`
`)])],-1),M={class:"card"},T=s("h3",null,"Custom Style",-1),$=s("p",null,[t("Use "),s("code",null,"slot"),t(" to set custom countdown style.")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(),s("span",{class:"hljs-attr"},":time"),t("="),s("span",{class:"hljs-string"},'"time"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"default"),t("="),s("span",{class:"hljs-string"},'"timeData"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"block"'),t(">")]),t("{{ timeData.hours }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"colon"'),t(">")]),t(":"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"block"'),t(">")]),t("{{ timeData.minutes }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"colon"'),t(">")]),t(":"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"block"'),t(">")]),t("{{ timeData.seconds }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-countdown"),t(">")]),t(`
`)])],-1),R={class:"card"},E=s("h3",null,"Manual Control",-1),P=s("p",null,[t("Use "),s("code",null,"ref"),t(" to get countdown instance, you can call the "),s("code",null,"start"),t(", "),s("code",null,"pause"),t(", and "),s("code",null,"reset"),t(" methods.")],-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(`
  `),s("span",{class:"hljs-attr"},"time"),t("="),s("span",{class:"hljs-string"},'"3000"'),t(`
  `),s("span",{class:"hljs-attr"},"ref"),t("="),s("span",{class:"hljs-string"},'"countdown"'),t(`
  `),s("span",{class:"hljs-attr"},":auto-start"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
  `),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"ss : SSS"'),t(`
  @`),s("span",{class:"hljs-attr"},"end"),t("="),s("span",{class:"hljs-string"},'"end"'),t(`
  @`),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"change"'),t(`
/>`)]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"btn-container"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"$refs.countdown.start()"'),t(">")]),t("start"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"$refs.countdown.pause()"'),t(">")]),t("pause"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"$refs.countdown.reset()"'),t(">")]),t("reset"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
`)])],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" countdown = ref("),s("span",{class:"hljs-literal"},"null"),t(`)

    `),s("span",{class:"hljs-keyword"},"const"),t(" end = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      Snackbar.info(`),s("span",{class:"hljs-string"},"'end!'"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"const"),t(" change = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      `),s("span",{class:"hljs-built_in"},"console"),t(".log("),s("span",{class:"hljs-string"},"'change'"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      countdown,
      end,
      change
    }
  }
}
`)])],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-class"},".btn-container"),t(` {
  `),s("span",{class:"hljs-attribute"},"display"),t(`: flex;
  `),s("span",{class:"hljs-attribute"},"align-items"),t(`: center;
  `),s("span",{class:"hljs-attribute"},"justify-content"),t(`: space-between;
  `),s("span",{class:"hljs-attribute"},"margin-top"),t(": "),s("span",{class:"hljs-number"},"10px"),t(`;
}
`)])],-1),F=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>time</code></td><td>Total time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>Time format</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>Whether to auto start count down</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Available formats</h3><table><thead><tr><th>Format</th><th>Description</th></tr></thead><tbody><tr><td><code>DD</code></td><td>Day</td></tr><tr><td><code>HH</code></td><td>Hour</td></tr><tr><td><code>mm</code></td><td>Minute</td></tr><tr><td><code>ss</code></td><td>Second</td></tr><tr><td><code>S</code></td><td>Millisecond, 1-digit</td></tr><tr><td><code>SS</code></td><td>Millisecond, 2-digit</td></tr><tr><td><code>SSS</code></td><td>Millisecond, 3-digit</td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>end</code></td><td>Emitted after countdown ended</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>Emitted after countdown changed</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom content</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>TimeData Structure</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>days</code></td><td>Remain days</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>Remain hours</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>Remain minutes</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>Remain seconds</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>Remain milliseconds</td><td><code>number</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>Use ref to get CountDown instance and call instance methods.</p><table><thead><tr><th>Method</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>start</code></td><td>Start countdown</td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>Pause countdown</td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Reset countdown</td><td><code>-</code></td></tr></tbody></table></div>',7);function I(W,q,z,G,J,K){const a=c("var-site-code-example");return d(),o("div",p,[i,j,s("div",u,[m,n(a,null,{default:l(()=>[_]),_:1})]),s("div",g,[b,f,n(a,null,{default:l(()=>[w]),_:1}),n(a,null,{default:l(()=>[v]),_:1})]),s("div",y,[k,D,n(a,null,{default:l(()=>[S]),_:1})]),s("div",x,[C,H,n(a,null,{default:l(()=>[U]),_:1})]),s("div",M,[T,$,n(a,null,{default:l(()=>[N]),_:1})]),s("div",R,[E,P,n(a,null,{default:l(()=>[A]),_:1}),n(a,null,{default:l(()=>[B]),_:1}),n(a,null,{default:l(()=>[V]),_:1})]),F])}var Q=e(h,[["render",I]]);export{Q as default};
