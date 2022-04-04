import{_ as o}from"./elevation.229458c1.js";import{e as a,o as l,c as n,a as t,i as e,j as c,m as d,U as r}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=t("h1",null,"\u65F6\u95F4\u9009\u62E9\u5668",-1),m=t("div",{class:"card"},[t("h3",null,"\u4ECB\u7ECD"),t("p",null,"\u7528\u4E8E\u9009\u62E9\u65F6\u95F4\u3002")],-1),j={class:"card"},u=t("h3",null,"\u5F15\u5165",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),d(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),d(),t("span",{class:"hljs-string"},"'vue'"),d(`
`),t("span",{class:"hljs-keyword"},"import"),d(" { TimePicker } "),t("span",{class:"hljs-keyword"},"from"),d(),t("span",{class:"hljs-string"},"'@varlet/ui'"),d(`

createApp().use(TimePicker)
`)])],-1),_={class:"card"},f=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-time-picker"),d(),t("span",{class:"hljs-attr"},"v-model"),d("="),t("span",{class:"hljs-string"},'"date"'),d(" />")]),d(`
`)])],-1),v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),d(" { ref } "),t("span",{class:"hljs-keyword"},"from"),d(),t("span",{class:"hljs-string"},"'vue'"),d(`

`),t("span",{class:"hljs-keyword"},"export"),d(),t("span",{class:"hljs-keyword"},"default"),d(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),d("("),t("span",{class:"hljs-params"}),d(")")]),d(` {
    `),t("span",{class:"hljs-keyword"},"const"),d(" date = ref("),t("span",{class:"hljs-string"},"'11:20'"),d(`)

    `),t("span",{class:"hljs-keyword"},"return"),d(` {
      date
    }
  }
}
`)])],-1),b={class:"card"},w=t("h3",null,"24\u5C0F\u65F6\u683C\u5F0F",-1),y=t("p",null,[d("\u4F7F\u7528 "),t("code",null,"format"),d(" \u5C5E\u6027\u5207\u6362\u9009\u62E9\u5668\u7684\u65F6\u95F4\u683C\u5F0F\uFF0C"),t("code",null,"format"),d(" \u9ED8\u8BA4\u503C\u4E3A "),t("code",null,"ampm"),d("\u3002")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-time-picker"),d(),t("span",{class:"hljs-attr"},"v-model"),d("="),t("span",{class:"hljs-string"},'"date"'),d(),t("span",{class:"hljs-attr"},"format"),d("="),t("span",{class:"hljs-string"},'"24hr"'),d(),t("span",{class:"hljs-attr"},"shadow"),d(" />")]),d(`
`)])],-1),T={class:"card"},N=t("h3",null,"\u663E\u793A\u79D2",-1),z=t("p",null,[d("\u4F7F\u7528 "),t("code",null,"use-seconds"),d(" \u5C5E\u6027\u663E\u793A\u79D2")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-time-picker"),d(),t("span",{class:"hljs-attr"},"v-model"),d("="),t("span",{class:"hljs-string"},'"date"'),d(),t("span",{class:"hljs-attr"},"format"),d("="),t("span",{class:"hljs-string"},'"24hr"'),d(),t("span",{class:"hljs-attr"},"use-seconds"),d(" />")]),d(`
`)])],-1),P={class:"card"},S=t("h3",null,"\u53EA\u8BFB",-1),C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-time-picker"),d(),t("span",{class:"hljs-attr"},"v-model"),d("="),t("span",{class:"hljs-string"},'"date"'),d(),t("span",{class:"hljs-attr"},"readonly"),d(),t("span",{class:"hljs-attr"},"shadow"),d(" />")]),d(`
`)])],-1),H={class:"card"},I=t("h3",null,"\u65F6\u95F4\u9650\u5236",-1),V=t("p",null,[d("\u901A\u8FC7 "),t("code",null,"min"),d("\u3001"),t("code",null,"max"),d(" \u548C "),t("code",null,"allowed-time"),d(" \u5C5E\u6027\u6765\u63A7\u5236\u53EF\u9009\u62E9\u7684\u65F6\u95F4\u8303\u56F4\u3002")],-1),$=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-time-picker"),d(`
  `),t("span",{class:"hljs-attr"},"v-model"),d("="),t("span",{class:"hljs-string"},'"date"'),d(`
  `),t("span",{class:"hljs-attr"},"format"),d("="),t("span",{class:"hljs-string"},'"24hr"'),d(`
  `),t("span",{class:"hljs-attr"},"use-seconds"),d(`
  `),t("span",{class:"hljs-attr"},"min"),d("="),t("span",{class:"hljs-string"},'"2:28:38"'),d(`
  `),t("span",{class:"hljs-attr"},"max"),d("="),t("span",{class:"hljs-string"},'"19:40:22"'),d(`
  `),t("span",{class:"hljs-attr"},":allowed-time"),d("="),t("span",{class:"hljs-string"},'"allowedTime"'),d(`
/>`)]),d(`
`)])],-1),B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),d(" { ref } "),t("span",{class:"hljs-keyword"},"from"),d(),t("span",{class:"hljs-string"},"'vue'"),d(`

`),t("span",{class:"hljs-keyword"},"export"),d(),t("span",{class:"hljs-keyword"},"default"),d(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),d("("),t("span",{class:"hljs-params"}),d(")")]),d(` {
    `),t("span",{class:"hljs-keyword"},"const"),d(" date = ref("),t("span",{class:"hljs-string"},"'07:10:12'"),d(`)

    `),t("span",{class:"hljs-keyword"},"const"),d(` allowedTime = {
      `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"hours"),d("("),t("span",{class:"hljs-params"},"hour"),d(")")]),d(` {
        `),t("span",{class:"hljs-keyword"},"return"),d(" hour % "),t("span",{class:"hljs-number"},"2"),d(" === "),t("span",{class:"hljs-number"},"0"),d(`
      },
      `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"minutes"),d("("),t("span",{class:"hljs-params"},"minute"),d(")")]),d(` {
        `),t("span",{class:"hljs-keyword"},"return"),d(" minute % "),t("span",{class:"hljs-number"},"15"),d(" !== "),t("span",{class:"hljs-number"},"0"),d(`
      },
      `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"seconds"),d("("),t("span",{class:"hljs-params"},"second"),d(")")]),d(` {
        `),t("span",{class:"hljs-keyword"},"return"),d(" second % "),t("span",{class:"hljs-number"},"2"),d(" !== "),t("span",{class:"hljs-number"},"0"),d(`
      },
    }

    `),t("span",{class:"hljs-keyword"},"return"),d(` {
      date,
      allowedTime
    }
  }
}
`)])],-1),F={class:"card"},O=t("h3",null,"\u81EA\u5B9A\u4E49",-1),E=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[d("<"),t("span",{class:"hljs-name"},"var-time-picker"),d(`
  `),t("span",{class:"hljs-attr"},"v-model"),d("="),t("span",{class:"hljs-string"},'"date"'),d(`
  `),t("span",{class:"hljs-attr"},"header-color"),d("="),t("span",{class:"hljs-string"},'"purple"'),d(`
  `),t("span",{class:"hljs-attr"},"color"),d("="),t("span",{class:"hljs-string"},'"#7bb872"'),d(`
  `),t("span",{class:"hljs-attr"},"min"),d("="),t("span",{class:"hljs-string"},'"2:28:38"'),d(`
  `),t("span",{class:"hljs-attr"},"max"),d("="),t("span",{class:"hljs-string"},'"19:40:22"'),d(`
  `),t("span",{class:"hljs-attr"},"shadow"),d(`
  @`),t("span",{class:"hljs-attr"},"change"),d("="),t("span",{class:"hljs-string"},'"change"'),d(`
/>`)]),d(`
`)])],-1),U=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),d(" { ref } "),t("span",{class:"hljs-keyword"},"from"),d(),t("span",{class:"hljs-string"},"'vue'"),d(`

`),t("span",{class:"hljs-keyword"},"export"),d(),t("span",{class:"hljs-keyword"},"default"),d(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),d("("),t("span",{class:"hljs-params"}),d(")")]),d(` {
    `),t("span",{class:"hljs-keyword"},"const"),d(" date = ref("),t("span",{class:"hljs-string"},"'05:10'"),d(`)

    `),t("span",{class:"hljs-keyword"},"const"),d(" change = "),t("span",{class:"hljs-function"},[d("("),t("span",{class:"hljs-params"},"time"),d(") =>")]),d(` {
      `),t("span",{class:"hljs-built_in"},"console"),d(`.log(time)
    }

    `),t("span",{class:"hljs-keyword"},"return"),d(` {
      date,
      change
    }
  }
}
`)])],-1),q=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u88AB\u9009\u62E9\u7684\u65F6\u95F4\uFF08ISO 8601 \u683C\u5F0F\uFF0C<code>HH:mm</code> \u6216 <code>HH:mm:ss</code>\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>format</code></td><td>\u9009\u62E9\u5668\u65F6\u95F4\u683C\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>ampm 24hr</code></td><td><em>string</em></td><td><code>ampm</code></td></tr><tr><td><code>color</code></td><td>\u9009\u62E9\u5668\u7684\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>\u6807\u9898\u80CC\u666F\u8272\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u4F7F\u7528\u7531 color \u5C5E\u6027\u6216\u9ED8\u8BA4\u989C\u8272\u3002</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>shadow</code></td><td>\u662F\u5426\u6DFB\u52A0\u9634\u5F71</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>min</code></td><td>\u5141\u8BB8\u7684\u6700\u5C0F\u65F6\u95F4\uFF08ISO 8601\u683C\u5F0F\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>\u5141\u8BB8\u7684\u6700\u5927\u65F6\u95F4\uFF08ISO 8601\u683C\u5F0F\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>allowed-time</code></td><td>\u9650\u5236\u53EF\u4EE5\u9009\u62E9\u7684\u65F6\u95F4</td><td><em>AllowedTime</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>use-seconds</code></td><td>\u662F\u5426\u663E\u793A\u79D2</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TimePicker AllowedTime</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>hours</code></td><td>\u9650\u5236\u53EF\u9009\u7684 <code>hour</code></td><td><em>Function: hour =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>minutes</code></td><td>\u9650\u5236\u53EF\u9009\u7684 <code>minute</code></td><td><em>Function: minute =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>seconds</code></td><td>\u9650\u5236\u53EF\u9009\u7684 <code>second</code></td><td><em>Function: second =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>value: string</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--time-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--time-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--time-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--time-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--time-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-title-time-font-size</code></td><td><code>50px</code></td></tr><tr><td><code>--time-picker-title-time-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--time-picker-title-ampm-margin-left</code></td><td><code>5px</code></td></tr><tr><td><code>--time-picker-clock-left</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-right</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-top</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-bottom</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-container-width</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-height</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-background</code></td><td><code>#e0e0e0</code></td></tr><tr><td><code>--time-picker-clock-hand-height</code></td><td><code>calc(50% - 4px)</code></td></tr><tr><td><code>--time-picker-clock-hand-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-bottom</code></td><td><code>50%</code></td></tr><tr><td><code>--time-picker-clock-hand-left</code></td><td><code>calc(50% - 1px)</code></td></tr><tr><td><code>--time-picker-clock-hand-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-border-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-before-width</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-height</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-border-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-width</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-height</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-item-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-clock-item-disable-color</code></td><td><code>rgba(0, 0, 0, 0.26)</code></td></tr><tr><td><code>--time-picker-inner-left</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-right</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-top</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-bottom</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-body-background</code></td><td><code>#fff</code></td></tr></tbody></table></div>',5);function D(G,J,K,L,M,Q){const s=a("var-site-code-example");return l(),n("div",h,[p,m,t("div",j,[u,e(s,null,{default:c(()=>[k]),_:1})]),t("div",_,[f,e(s,null,{default:c(()=>[g]),_:1}),e(s,null,{default:c(()=>[v]),_:1})]),t("div",b,[w,y,e(s,null,{default:c(()=>[x]),_:1})]),t("div",T,[N,z,e(s,null,{default:c(()=>[A]),_:1})]),t("div",P,[S,e(s,null,{default:c(()=>[C]),_:1})]),t("div",H,[I,V,e(s,null,{default:c(()=>[$]),_:1}),e(s,null,{default:c(()=>[B]),_:1})]),t("div",F,[O,e(s,null,{default:c(()=>[E]),_:1}),e(s,null,{default:c(()=>[U]),_:1})]),q])}var X=o(i,[["render",D]]);export{X as default};
