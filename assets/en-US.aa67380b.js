import{_ as n}from"./elevation.229458c1.js";import{e as d,o,c,a as s,i as e,j as a,m as t,U as r}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=s("h1",null,"List",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Unlimited scroll load list, touch bottom load, support manual check position load. Support custom loading state, error state, data loading completed state.")],-1),u={class:"card"},m=s("h3",null,"Install",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { List } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(List)
`)])],-1),g={class:"card"},v=s("h3",null,"Basic Use",-1),y=s("p",null,[t("The "),s("code",null,"load"),t(" event is emitted when a scroll container is detected scrolling to the bottom\uFF0Cand will be set "),s("code",null,"loading"),t(" to "),s("code",null,"true"),t(", you need to manually set "),s("code",null,"loading"),t(" to "),s("code",null,"false"),t(" at the end of loading, that\u2019s the end of the load.")],-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-list"),t(`
  `),s("span",{class:"hljs-attr"},":finished"),t("="),s("span",{class:"hljs-string"},'"finished"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:loading"),t("="),s("span",{class:"hljs-string"},'"loading"'),t(`
  @`),s("span",{class:"hljs-attr"},"load"),t("="),s("span",{class:"hljs-string"},'"load"'),t(`
>`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"item"'),t(),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"item in list"'),t(">")]),t(`
    List Item: {{ item }}
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-list"),t(">")]),t(`
`)])],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" loading = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(" finished = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` list = reactive([])
    
    `),s("span",{class:"hljs-keyword"},"const"),t(" load = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      `),s("span",{class:"hljs-built_in"},"setTimeout"),t("("),s("span",{class:"hljs-function"},"() =>"),t(` {
        `),s("span",{class:"hljs-keyword"},"for"),t(" ("),s("span",{class:"hljs-keyword"},"let"),t(" i = "),s("span",{class:"hljs-number"},"0"),t("; i < "),s("span",{class:"hljs-number"},"20"),t(`; i++) {
          list.push(list.length + `),s("span",{class:"hljs-number"},"1"),t(`)
        }

        loading.value = `),s("span",{class:"hljs-literal"},"false"),t(`

        `),s("span",{class:"hljs-keyword"},"if"),t(" (list.length >= "),s("span",{class:"hljs-number"},"60"),t(`) {
          finished.value = `),s("span",{class:"hljs-literal"},"true"),t(`
        }
      }, `),s("span",{class:"hljs-number"},"1000"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      list,
      loading,
      finished,
      load
    }
  }
}
`)])],-1),k={class:"card"},w=s("h3",null,"Load Fail",-1),x=s("p",null,[t("You can manually set the error status using "),s("code",null,"v-model:error"),t(", an error message is displayed. Clicking on the error message will help you set the "),s("code",null,"error"),t(" to "),s("code",null,"false"),t(" and trigger the "),s("code",null,"load"),t(" event again.")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-list"),t(`
  `),s("span",{class:"hljs-attr"},"v-model:error"),t("="),s("span",{class:"hljs-string"},'"error"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model:loading"),t("="),s("span",{class:"hljs-string"},'"loading"'),t(`
  @`),s("span",{class:"hljs-attr"},"load"),t("="),s("span",{class:"hljs-string"},'"load"'),t(`
>`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"item"'),t(),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"item in list"'),t(">")]),t(`
    List Item: {{ item }}
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-list"),t(">")]),t(`
`)])],-1),L=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" loading = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(" error = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` list = reactive([])
    
    `),s("span",{class:"hljs-keyword"},"const"),t(" load = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      `),s("span",{class:"hljs-built_in"},"setTimeout"),t("("),s("span",{class:"hljs-function"},"() =>"),t(` {
        `),s("span",{class:"hljs-keyword"},"if"),t(" (list.length === "),s("span",{class:"hljs-number"},"40"),t(`) {
          error.value = `),s("span",{class:"hljs-literal"},"true"),t(`
          loading.value = `),s("span",{class:"hljs-literal"},"false"),t(`
          `),s("span",{class:"hljs-keyword"},"return"),t(`
        }

        `),s("span",{class:"hljs-keyword"},"for"),t(" ("),s("span",{class:"hljs-keyword"},"let"),t(" i = "),s("span",{class:"hljs-number"},"0"),t("; i < "),s("span",{class:"hljs-number"},"20"),t(`; i++) {
          list.push(list.length + `),s("span",{class:"hljs-number"},"1"),t(`)
        }

        loading.value = `),s("span",{class:"hljs-literal"},"false"),t(`
      }, `),s("span",{class:"hljs-number"},"1000"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      list,
      loading,
      error,
      load
    }
  }
}
`)])],-1),S={class:"card"},z=s("h3",null,"Tip Text",-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-list"),t(` 
  `),s("span",{class:"hljs-attr"},"loading-text"),t("="),s("span",{class:"hljs-string"},'"loading QAQ"'),t(` 
  `),s("span",{class:"hljs-attr"},"finished-text"),t("="),s("span",{class:"hljs-string"},'"finished ORZ"'),t(` 
  `),s("span",{class:"hljs-attr"},"error-text"),t("="),s("span",{class:"hljs-string"},'"error TNT"'),t(` 
  `),s("span",{class:"hljs-attr"},":finished"),t("="),s("span",{class:"hljs-string"},'"finished"'),t(` 
  `),s("span",{class:"hljs-attr"},"v-model:loading"),t("="),s("span",{class:"hljs-string"},'"loading"'),t(` 
  @`),s("span",{class:"hljs-attr"},"load"),t("="),s("span",{class:"hljs-string"},'"load"'),t(`
>`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"item"'),t(),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"item in list"'),t(">")]),t(`
    List Item: {{ item }}
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-list"),t(">")]),t(`
`)])],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" loading = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(" finished = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` list = reactive([])
    
    `),s("span",{class:"hljs-keyword"},"const"),t(" load = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      `),s("span",{class:"hljs-built_in"},"setTimeout"),t("("),s("span",{class:"hljs-function"},"() =>"),t(` {
        `),s("span",{class:"hljs-keyword"},"for"),t(" ("),s("span",{class:"hljs-keyword"},"let"),t(" i = "),s("span",{class:"hljs-number"},"0"),t("; i < "),s("span",{class:"hljs-number"},"20"),t(`; i++) {
          list.push(list.length + `),s("span",{class:"hljs-number"},"1"),t(`)
        }

        loading.value = `),s("span",{class:"hljs-literal"},"false"),t(`

        `),s("span",{class:"hljs-keyword"},"if"),t(" (list.length >= "),s("span",{class:"hljs-number"},"60"),t(`) {
          finished.value = `),s("span",{class:"hljs-literal"},"true"),t(`
        }
      }, `),s("span",{class:"hljs-number"},"1000"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      list,
      loading,
      finished,
      load
    }
  }
}
`)])],-1),C=r('<div class="card"><h3>Be Careful</h3><p>We detect bottoming by listening for the scroll event of the scroll container and perform the load. A scroll container is the nearest element that <code>overflow-y=&#39;auto&#39;</code> or <code>scroll</code> When you set an element\u2019s <code>overflow-x</code> to a value other than <code>visible</code>, The browser will fix your <code>overflow-y</code> to <code>auto</code> in order to maintain a <code>BFC</code> structure. This can be mistaken for a scroll container, so avoid it.</p></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>error state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>Whether the location is detected immediately when the List is initialized</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>Whether the load is complete</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Trigger distance from the bottom</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>Loading text</td><td><em>string</em></td><td><code>Loading</code></td></tr><tr><td><code>finished-text</code></td><td>Finished text</td><td><em>string</em></td><td><code>No more</code></td></tr><tr><td><code>error-text</code></td><td>Error text</td><td><em>string</em></td><td><code>Load fail</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>check</code></td><td>Trigger position check, touch bottom trigger load event</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>load</code></td><td>Triggered when it hit bottom</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>List content</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>Loading content</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>Error content</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>Finished content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',7);function D(I,N,V,E,U,F){const l=d("var-site-code-example");return o(),c("div",h,[p,j,s("div",u,[m,e(l,null,{default:a(()=>[f]),_:1})]),s("div",g,[v,y,e(l,null,{default:a(()=>[_]),_:1}),e(l,null,{default:a(()=>[b]),_:1})]),s("div",k,[w,x,e(l,null,{default:a(()=>[T]),_:1}),e(l,null,{default:a(()=>[L]),_:1})]),s("div",S,[z,e(l,null,{default:a(()=>[A]),_:1}),e(l,null,{default:a(()=>[B]),_:1})]),C])}var $=n(i,[["render",D]]);export{$ as default};
