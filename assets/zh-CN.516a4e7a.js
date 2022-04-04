import{_ as e}from"./elevation.229458c1.js";import{e as c,o as d,c as o,a as s,i as l,j as n,m as t,U as h}from"./vendor.49f89f0d.js";const r={components:{}},p={class:"varlet-site-doc"},j=s("h1",null,"\u5012\u8BA1\u65F6",-1),i=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u7528\u4E8E\u5B9E\u65F6\u5C55\u793A\u5012\u8BA1\u65F6\u6570\u503C\uFF0C\u652F\u6301\u6BEB\u79D2\u7CBE\u5EA6\u3002")],-1),u={class:"card"},m=s("h3",null,"\u5F15\u5165",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Countdown } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Countdown)
`)])],-1),g={class:"card"},b=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),f=s("p",null,[s("code",null,"time"),t(" \u5C5E\u6027\u8868\u793A\u5012\u8BA1\u65F6\u603B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(),s("span",{class:"hljs-attr"},":time"),t("="),s("span",{class:"hljs-string"},'"time"'),t(" />")]),t(`
`)])],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" time = ref("),s("span",{class:"hljs-number"},"30"),t(" * "),s("span",{class:"hljs-number"},"60"),t(" * "),s("span",{class:"hljs-number"},"60"),t(" * "),s("span",{class:"hljs-number"},"1000"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      time
    }
  }
}
`)])],-1),y={class:"card"},k=s("h3",null,"\u81EA\u5B9A\u4E49\u683C\u5F0F",-1),D=s("p",null,[t("\u901A\u8FC7 "),s("code",null,"format"),t(" \u5C5E\u6027\u8BBE\u7F6E\u5012\u8BA1\u65F6\u6587\u672C\u7684\u5185\u5BB9\u3002")],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(),s("span",{class:"hljs-attr"},":time"),t("="),s("span",{class:"hljs-string"},'"time"'),t(),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"'),t(" />")]),t(`
`)])],-1),x={class:"card"},H=s("h3",null,"\u663E\u793A\u6BEB\u79D2",-1),$=s("p",null,[t("\u901A\u8FC7 "),s("code",null,"S"),t(" \u6587\u672C\u663E\u793A\u6BEB\u79D2\u3002")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(),s("span",{class:"hljs-attr"},":time"),t("="),s("span",{class:"hljs-string"},'"time"'),t(),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"HH:mm:ss:SS"'),t(" />")]),t(`
`)])],-1),N={class:"card"},T=s("h3",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),V=s("p",null,[t("\u901A\u8FC7\u63D2\u69FD\u81EA\u5B9A\u4E49\u5012\u8BA1\u65F6\u7684\u6837\u5F0F\uFF0C"),s("code",null,"timeData"),t(" \u5BF9\u8C61\u683C\u5F0F\u89C1\u4E0B\u65B9\u8868\u683C\u3002")],-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(),s("span",{class:"hljs-attr"},":time"),t("="),s("span",{class:"hljs-string"},'"time"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"default"),t("="),s("span",{class:"hljs-string"},'"timeData"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"block"'),t(">")]),t("{{ timeData.hours }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"colon"'),t(">")]),t(":"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"block"'),t(">")]),t("{{ timeData.minutes }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"colon"'),t(">")]),t(":"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"block"'),t(">")]),t("{{ timeData.seconds }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-countdown"),t(">")]),t(`
`)])],-1),B={class:"card"},z=s("h3",null,"\u624B\u52A8\u63A7\u5236",-1),E=s("p",null,[t("\u901A\u8FC7 ref \u83B7\u53D6\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u540E\uFF0C\u53EF\u4EE5\u8C03\u7528 "),s("code",null,"start"),t("\u3001"),s("code",null,"pause"),t("\u3001"),s("code",null,"reset"),t(" \u65B9\u6CD5\u3002")],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-countdown"),t(`
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
`)])],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

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
`)])],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-class"},".btn-container"),t(` {
  `),s("span",{class:"hljs-attribute"},"display"),t(`: flex;
  `),s("span",{class:"hljs-attribute"},"align-items"),t(`: center;
  `),s("span",{class:"hljs-attribute"},"justify-content"),t(`: space-between;
  `),s("span",{class:"hljs-attribute"},"margin-top"),t(": "),s("span",{class:"hljs-number"},"10px"),t(`;
}
`)])],-1),q=h('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>time</code></td><td>\u5012\u8BA1\u65F6\u65F6\u957F\uFF08ms\uFF09</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>\u65F6\u95F4\u683C\u5F0F</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>\u662F\u5426\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>format \u683C\u5F0F</h3><table><thead><tr><th>\u683C\u5F0F</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>DD</code></td><td>\u5929\u6570</td></tr><tr><td><code>HH</code></td><td>\u5C0F\u65F6</td></tr><tr><td><code>mm</code></td><td>\u5206\u949F</td></tr><tr><td><code>ss</code></td><td>\u79D2\u6570</td></tr><tr><td><code>S</code></td><td>\u6BEB\u79D2\uFF081\u4F4D\uFF09</td></tr><tr><td><code>SS</code></td><td>\u6BEB\u79D2\uFF082\u4F4D\uFF09</td></tr><tr><td><code>SSS</code></td><td>\u6BEB\u79D2\uFF083\u4F4D\uFF09</td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>end</code></td><td>\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>\u5012\u8BA1\u65F6\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>TimeData \u683C\u5F0F</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td><code>days</code></td><td>\u5269\u4F59\u5929\u6570</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>\u5269\u4F59\u5C0F\u65F6</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>\u5269\u4F59\u5206\u949F</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>\u5269\u4F59\u79D2\u6570</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>\u5269\u4F59\u6BEB\u79D2</td><td><code>number</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CountDown \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>start</code></td><td>\u5F00\u59CB\u5012\u8BA1\u65F6</td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>\u6682\u505C\u5012\u8BA1\u65F6</td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u91CD\u8BBE\u5012\u8BA1\u65F6\uFF0C\u82E5 <code>auto-start</code> \u4E3A <code>true</code>\uFF0C\u91CD\u8BBE\u540E\u4F1A\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6</td><td><code>-</code></td></tr></tbody></table></div>',7);function F(G,J,K,L,M,O){const a=c("var-site-code-example");return d(),o("div",p,[j,i,s("div",u,[m,l(a,null,{default:n(()=>[_]),_:1})]),s("div",g,[b,f,l(a,null,{default:n(()=>[v]),_:1}),l(a,null,{default:n(()=>[w]),_:1})]),s("div",y,[k,D,l(a,null,{default:n(()=>[S]),_:1})]),s("div",x,[H,$,l(a,null,{default:n(()=>[C]),_:1})]),s("div",N,[T,V,l(a,null,{default:n(()=>[A]),_:1})]),s("div",B,[z,E,l(a,null,{default:n(()=>[I]),_:1}),l(a,null,{default:n(()=>[P]),_:1}),l(a,null,{default:n(()=>[U]),_:1})]),q])}var W=e(r,[["render",F]]);export{W as default};
