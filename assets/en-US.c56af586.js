import{_ as o}from"./elevation.229458c1.js";import{e as a,o as l,c as r,a as t,i as s,j as c,m as e,U as n}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=t("h1",null,"TimePicker",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Used to select a time.")],-1),u={class:"card"},j=t("h3",null,"Install",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" { TimePicker } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

createApp().use(TimePicker)
`)])],-1),f={class:"card"},_=t("h3",null,"Basic Usage",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-time-picker"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(" />")]),e(`
`)])],-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" date = ref("),t("span",{class:"hljs-string"},"'11:20'"),e(`)

    `),t("span",{class:"hljs-keyword"},"return"),e(` {
      date
    }
  }
}
`)])],-1),v={class:"card"},w=t("h3",null,"24hr Format",-1),y=t("p",null,[e("Use "),t("code",null,"format"),e(" prop to change the format of the picker. The default value of "),t("code",null,"format"),e(" is "),t("code",null,"ampm"),e(".")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-time-picker"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(),t("span",{class:"hljs-attr"},"format"),e("="),t("span",{class:"hljs-string"},'"24hr"'),e(),t("span",{class:"hljs-attr"},"shadow"),e(" />")]),e(`
`)])],-1),S={class:"card"},T=t("h3",null,"Show Seconds",-1),P=t("p",null,[e("use "),t("code",null,"use-seconds"),e(" prop to show seconds")],-1),I=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-time-picker"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(),t("span",{class:"hljs-attr"},"format"),e("="),t("span",{class:"hljs-string"},'"24hr"'),e(),t("span",{class:"hljs-attr"},"use-seconds"),e(" />")]),e(`
`)])],-1),U={class:"card"},D=t("h3",null,"Readonly",-1),V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-time-picker"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(),t("span",{class:"hljs-attr"},"readonly"),e(),t("span",{class:"hljs-attr"},"shadow"),e(" />")]),e(`
`)])],-1),A={class:"card"},C=t("h3",null,"Time Limit",-1),H=t("p",null,[e("Use "),t("code",null,"min"),e(", "),t("code",null,"max"),e(" and "),t("code",null,"allowed-time"),e(" prop to allow the maximum and minimum time.")],-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-time-picker"),e(`
  `),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(`
  `),t("span",{class:"hljs-attr"},"format"),e("="),t("span",{class:"hljs-string"},'"24hr"'),e(`
  `),t("span",{class:"hljs-attr"},"use-seconds"),e(`
  `),t("span",{class:"hljs-attr"},"min"),e("="),t("span",{class:"hljs-string"},'"2:28:38"'),e(`
  `),t("span",{class:"hljs-attr"},"max"),e("="),t("span",{class:"hljs-string"},'"19:40:22"'),e(`
  `),t("span",{class:"hljs-attr"},":allowed-time"),e("="),t("span",{class:"hljs-string"},'"allowedTime"'),e(`
/>`)]),e(`
`)])],-1),B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" date = ref("),t("span",{class:"hljs-string"},"'07:10:12'"),e(`)

    `),t("span",{class:"hljs-keyword"},"const"),e(` allowedTime = {
      `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"hours"),e("("),t("span",{class:"hljs-params"},"hour"),e(")")]),e(` {
        `),t("span",{class:"hljs-keyword"},"return"),e(" hour % "),t("span",{class:"hljs-number"},"2"),e(" === "),t("span",{class:"hljs-number"},"0"),e(`
      },
      `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"minutes"),e("("),t("span",{class:"hljs-params"},"minute"),e(")")]),e(` {
        `),t("span",{class:"hljs-keyword"},"return"),e(" minute % "),t("span",{class:"hljs-number"},"15"),e(" !== "),t("span",{class:"hljs-number"},"0"),e(`
      },
      `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"seconds"),e("("),t("span",{class:"hljs-params"},"second"),e(")")]),e(` {
        `),t("span",{class:"hljs-keyword"},"return"),e(" second % "),t("span",{class:"hljs-number"},"2"),e(" !== "),t("span",{class:"hljs-number"},"0"),e(`
      },
    }

    `),t("span",{class:"hljs-keyword"},"return"),e(` {
      date,
      allowedTime
    }
  }
}
`)])],-1),E={class:"card"},F=t("h3",null,"Custom",-1),L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-time-picker"),e(`
  `),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(`
  `),t("span",{class:"hljs-attr"},"header-color"),e("="),t("span",{class:"hljs-string"},'"purple"'),e(`
  `),t("span",{class:"hljs-attr"},"color"),e("="),t("span",{class:"hljs-string"},'"#7bb872"'),e(`
  `),t("span",{class:"hljs-attr"},"min"),e("="),t("span",{class:"hljs-string"},'"2:28:38"'),e(`
  `),t("span",{class:"hljs-attr"},"max"),e("="),t("span",{class:"hljs-string"},'"19:40:22"'),e(`
  `),t("span",{class:"hljs-attr"},"shadow"),e(`
  @`),t("span",{class:"hljs-attr"},"change"),e("="),t("span",{class:"hljs-string"},'"change"'),e(`
/>`)]),e(`
`)])],-1),N=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" date = ref("),t("span",{class:"hljs-string"},"'05:10'"),e(`)

    `),t("span",{class:"hljs-keyword"},"const"),e(" change = "),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"time"),e(") =>")]),e(` {
      `),t("span",{class:"hljs-built_in"},"console"),e(`.log(time)
    }

    `),t("span",{class:"hljs-keyword"},"return"),e(` {
      date,
      change
    }
  }
}
`)])],-1),$=n('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected time\uFF08ISO 8601 format, <code>HH:mm</code> or <code>HH:mm:ss</code>\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>format</code></td><td>Picker type, optional values <code>ampm, 24hr</code></td><td><em>string</em></td><td><code>ampm</code></td></tr><tr><td><code>color</code></td><td>Picker color</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>Color of picker header. If not specified it will use the color defined by color prop or the default picker color.</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>shadow</code></td><td>Whether to add a shadow</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>min</code></td><td>Minimum allowed time (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum allowed time (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>allowed-time</code></td><td>Restricts which time can be selected</td><td><em>AllowedTime</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>use-seconds</code></td><td>Whether to display seconds</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TimePicker AllowedTime</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>hours</code></td><td>Limit the optional <code>hour</code></td><td><em>Function: hour =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>minutes</code></td><td>Limit the optional <code>minute</code></td><td><em>Function: minute =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>seconds</code></td><td>Limit the optional <code>second</code></td><td><em>Function: second =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted after time changed</td><td><code>value: string</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--time-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--time-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--time-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--time-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--time-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-title-time-font-size</code></td><td><code>50px</code></td></tr><tr><td><code>--time-picker-title-time-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--time-picker-title-ampm-margin-left</code></td><td><code>5px</code></td></tr><tr><td><code>--time-picker-clock-left</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-right</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-top</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-bottom</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-container-width</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-height</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-background</code></td><td><code>#e0e0e0</code></td></tr><tr><td><code>--time-picker-clock-hand-height</code></td><td><code>calc(50% - 4px)</code></td></tr><tr><td><code>--time-picker-clock-hand-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-bottom</code></td><td><code>50%</code></td></tr><tr><td><code>--time-picker-clock-hand-left</code></td><td><code>calc(50% - 1px)</code></td></tr><tr><td><code>--time-picker-clock-hand-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-border-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-before-width</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-height</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-border-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-width</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-height</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-item-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-clock-item-disable-color</code></td><td><code>rgba(0, 0, 0, 0.26)</code></td></tr><tr><td><code>--time-picker-inner-left</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-right</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-top</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-bottom</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-body-background</code></td><td><code>#fff</code></td></tr></tbody></table></div>',5);function O(R,M,W,q,G,J){const d=a("var-site-code-example");return l(),r("div",h,[p,m,t("div",u,[j,s(d,null,{default:c(()=>[k]),_:1})]),t("div",f,[_,s(d,null,{default:c(()=>[g]),_:1}),s(d,null,{default:c(()=>[b]),_:1})]),t("div",v,[w,y,s(d,null,{default:c(()=>[x]),_:1})]),t("div",S,[T,P,s(d,null,{default:c(()=>[I]),_:1})]),t("div",U,[D,s(d,null,{default:c(()=>[V]),_:1})]),t("div",A,[C,H,s(d,null,{default:c(()=>[z]),_:1}),s(d,null,{default:c(()=>[B]),_:1})]),t("div",E,[F,s(d,null,{default:c(()=>[L]),_:1}),s(d,null,{default:c(()=>[N]),_:1})]),$])}var X=o(i,[["render",O]]);export{X as default};
