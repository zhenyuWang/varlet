import{_ as l}from"./elevation.229458c1.js";import{e as c,o,c as n,a as s,i as e,j as d,m as t,U as r}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"Radio",-1),u={class:"card"},j=s("h3",null,"Install",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Radio, RadioGroup } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(RadioGroup).use(Radio)
`)])],-1),m={class:"card"},g=s("h3",null,"Basic Usage",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(">")]),t("Current value: {{ value }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
`)])],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" value = ref("),s("span",{class:"hljs-literal"},"false"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      value
    }
  }
}
`)])],-1),b={class:"card"},k=s("h3",null,"Set State value",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(`
  `),s("span",{class:"hljs-attr"},":unchecked-value"),t("="),s("span",{class:"hljs-string"},'"0"'),t(`
  `),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"1"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(`
>`)]),t(`
  Current value: {{ value }}
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
`)])],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" value = ref("),s("span",{class:"hljs-number"},"0"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      value
    }
  }
}
`)])],-1),R={class:"card"},x=s("h3",null,"Modify the icon and color",-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(`
  `),s("span",{class:"hljs-attr"},"unchecked-color"),t("="),s("span",{class:"hljs-string"},'"#e99eb4"'),t(`
  `),s("span",{class:"hljs-attr"},"checked-color"),t("="),s("span",{class:"hljs-string"},'"#f44336"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(`
>`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"unchecked-icon"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"heart-half-full"'),t(),s("span",{class:"hljs-attr"},"size"),t("="),s("span",{class:"hljs-string"},'"24px"'),t("/>")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"checked-icon"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"heart"'),t(),s("span",{class:"hljs-attr"},"size"),t("="),s("span",{class:"hljs-string"},'"24px"'),t("/>")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"default"),t(">")]),t(`
    Current value: {{ value }}
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
`)])],-1),S={class:"card"},T=s("h3",null,"Disabled",-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(),s("span",{class:"hljs-attr"},"disabled"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(">")]),t("Current value: {{ value }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
`)])],-1),A={class:"card"},P=s("h3",null,"Readonly",-1),E=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(),s("span",{class:"hljs-attr"},"readonly"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(">")]),t("Current value: {{ value }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
`)])],-1),V={class:"card"},z=s("h3",null,"RadioGroup",-1),G=s("p",null,[t("In the radio group, you must set the "),s("code",null,"checked-value"),t(" to identify the "),s("code",null,"radio"),t(", The radio group bind group checked identifiers.")],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio-group"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"0"'),t(">")]),t("Eat"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"1"'),t(">")]),t("Sleep"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio-group"),t(">")]),t(`
`)])],-1),M=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" value = ref("),s("span",{class:"hljs-number"},"0"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      value
    }
  }
}
`)])],-1),B={class:"card"},I=s("h3",null,"Radio validation",-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(`
  `),s("span",{class:"hljs-attr"},":rules"),t("="),s("span",{class:"hljs-string"},`"[v => v || 'Please check your choice']"`),t(`
>`)]),t(`
  Current value: {{ value }}
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
`)])],-1),$={class:"card"},W=s("h3",null,"RadioGroup validate",-1),H=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio-group"),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(`
  `),s("span",{class:"hljs-attr"},":rules"),t("="),s("span",{class:"hljs-string"},`"[v => v === 0 || 'Please check eat']"`),t(`
>`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"0"'),t(">")]),t("Eat"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-radio"),t(),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"1"'),t(">")]),t("Sleep"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-radio-group"),t(">")]),t(`
`)])],-1),O=r('<h2>API</h2><div class="card"><h3>Props</h3><h4>RadioGroup Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>direction</code></td><td>The layout direction\uFF0COptional value is <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table><h4>Radio Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>Checked value</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>Unchecked value</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>Checked color</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>Unchecked color</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>Icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><h4>RadioGroup Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>undefined</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table><h4>Radio Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>unchecked-value</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>toggle</code></td><td>Toggle the checked state, pass <code>checked-value</code> to check, <code>unchecked-value</code> to uncheck, do not pass or other cases to reverse</td><td><code>value: any</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>RadioGroup Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Trigger on change</td><td><code>value: any</code></td></tr></tbody></table><h4>Radio Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>Trigger on change</td><td><code>value: any</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>RadioGroup Slots</h4><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Radio group content</td><td><code>-</code></td></tr></tbody></table><h4>Radio Slots</h4><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>Checked icon</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>Unchecked icon</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>Displayed text</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><h4>Radio Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--radio-checked-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--radio-unchecked-color</code></td><td><code>#555</code></td></tr><tr><td><code>--radio-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--radio-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--radio-action-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--radio-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>',6);function q(F,J,K,L,Q,X){const a=c("var-site-code-example");return o(),n("div",i,[p,s("div",u,[j,e(a,null,{default:d(()=>[v]),_:1})]),s("div",m,[g,e(a,null,{default:d(()=>[_]),_:1}),e(a,null,{default:d(()=>[y]),_:1})]),s("div",b,[k,e(a,null,{default:d(()=>[f]),_:1}),e(a,null,{default:d(()=>[w]),_:1})]),s("div",R,[x,e(a,null,{default:d(()=>[C]),_:1})]),s("div",S,[T,e(a,null,{default:d(()=>[D]),_:1})]),s("div",A,[P,e(a,null,{default:d(()=>[E]),_:1})]),s("div",V,[z,G,e(a,null,{default:d(()=>[U]),_:1}),e(a,null,{default:d(()=>[M]),_:1})]),s("div",B,[I,e(a,null,{default:d(()=>[N]),_:1})]),s("div",$,[W,e(a,null,{default:d(()=>[H]),_:1})]),O])}var ss=l(h,[["render",q]]);export{ss as default};
