import{_ as n}from"./elevation.229458c1.js";import{e as c,o as d,c as o,a as t,i as l,j as e,m as s,U as r}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},i=t("h1",null,"Select",-1),j={class:"card"},g=t("h3",null,"Install",-1),u=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Select, Option } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Select).use(Option)
`)])],-1),m={class:"card"},v=t("h3",null,"Basic Usage",-1),_=t("p",null,[s("The component uses the option\u2019s "),t("code",null,"label"),s(" as the displayed text. The component uses the "),t("code",null,"value"),s(" of the option first as the value of the option, followed by the "),t("code",null,"label"),s(".")],-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)

    `),t("span",{class:"hljs-keyword"},"return"),s(` { value }
  }
}
`)])],-1),f=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select one the options"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),y={class:"card"},S=t("h3",null,"Plain Mode",-1),x=t("p",null,"If you only need the basic functionality of the component, you can remove some styles through attributes.",-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(` 
  `),t("span",{class:"hljs-attr"},":hint"),s("="),t("span",{class:"hljs-string"},'"false"'),s(` 
  `),t("span",{class:"hljs-attr"},":line"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
  `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select one the options"'),s(` 
  `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
>`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),k={class:"card"},P=t("h3",null,"Label relation value",-1),T=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select one the options"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(),t("span",{class:"hljs-attr"},":value"),s("="),t("span",{class:"hljs-string"},'"1"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(),t("span",{class:"hljs-attr"},":value"),s("="),t("span",{class:"hljs-string"},'"2"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),E={class:"card"},C=t("h3",null,"Disabled",-1),V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(` 
  `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select one the options"'),s(` 
  `),t("span",{class:"hljs-attr"},"disabled"),s(`
  `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
>`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),D={class:"card"},A=t("h3",null,"Readonly",-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(` 
  `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select one the options"'),s(`
  `),t("span",{class:"hljs-attr"},"readonly"),s(` 
  `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
>`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),O={class:"card"},W=t("h3",null,"Clearable",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(`
  `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select one the options"'),s(` 
  `),t("span",{class:"hljs-attr"},"clearable"),s(`
  `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
>`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),B={class:"card"},I=t("h3",null,"Display Icon",-1),R=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Icon } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Icon)
`)])],-1),N=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select one the options"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"plus"'),s("/>")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"minus"'),s("/>")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"default"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),U={class:"card"},$=t("h3",null,"Multiple Selection",-1),F=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"const"),s(` value = ref([])

    `),t("span",{class:"hljs-keyword"},"return"),s(` { value }
  }
}
`)])],-1),Y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(` 
  `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select multiple options"'),s(` 
  `),t("span",{class:"hljs-attr"},"multiple"),s(`
  `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
>`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),H={class:"card"},L=t("h3",null,"Multiple choice of paper style",-1),q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(` 
  `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select multiple options"'),s(`
  `),t("span",{class:"hljs-attr"},"chip"),s(`
  `),t("span",{class:"hljs-attr"},"multiple"),s(`
  `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
>`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),G={class:"card"},J=t("h3",null,"Validate",-1),K=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(` 
  `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select one the options"'),s(` 
  `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[(v) => v === 'Rest' || 'You must choose to rest']"`),s(`
  `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
>`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Rest"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),Q={class:"card"},X=t("h3",null,"Multiple Validate",-1),Z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(`
  `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select multiple options"'),s(`
  `),t("span",{class:"hljs-attr"},"multiple"),s(`
  `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[(v) => v.length >= 2 || 'You select at least two options']"`),s(`
  `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
>`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),ss={class:"card"},ts=t("h3",null,"offset-y",-1),as=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please select one the options"'),s(),t("span",{class:"hljs-attr"},":offset-y"),s("="),t("span",{class:"hljs-string"},'"-62"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Ember Sprit"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Storm Spirit"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Void Spirit"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Earth Sprit"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
`)])],-1),ls=r('<h2>API</h2><div class="card"><h3>Props</h3><h4>Select Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to enable multiple selection</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-y</code></td><td>The vertical offset of the drop-down menu</td><td>string | number_</td><td><code>true</code></td></tr><tr><td><code>chip</code></td><td>Whether to use chip style (multiple choices only)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholders as prompts</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation\uFF0C Optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onClose</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onClear&#39;, &#39;onClose&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: any | any[]) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table><h4>Option Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text that the option displays</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of the option binding</td><td><em>any</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><h4>Select Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding (single set to \u2018undefined\u2019, multiple set to \u2018[]\u2019) and the validation messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>Select Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Trigger while focusing</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>Triggered on click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on clearance</td><td><code>value: any | any[]</code></td></tr><tr><td><code>close</code></td><td>Triggered on close</td><td><code>value: any | any[]</code></td></tr><tr><td><code>change</code></td><td>Triggered when change</td><td><code>value: any | any[]</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>Select Slots</h4><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append icon</td><td><code>-</code></td></tr></tbody></table><h4>Option Slots</h4><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Options to display the content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><h4>Select Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--select-select-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--select-select-padding</code></td><td><code>5px 0</code></td></tr><tr><td><code>--select-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--select-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--select-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--select-scroller-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--select-scroller-padding</code></td><td><code>6px 0</code></td></tr><tr><td><code>--select-scroller-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--select-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--select-icon-padding</code></td><td><code>16px 0 0</code></td></tr><tr><td><code>--select-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-select-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--select-chip-margin</code></td><td><code>5px 5px 0</code></td></tr><tr><td><code>--select-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--select-line-spread-size</code></td><td><code>2px</code></td></tr><tr><td><code>--select-arrow-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table><h4>Option Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--option-height</code></td><td><code>38px</code></td></tr><tr><td><code>--option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--option-selected-background</code></td><td><code>var(--select-focus-color)</code></td></tr></tbody></table></div>',6);function es(ns,cs,ds,os,rs,hs){const a=c("var-site-code-example");return d(),o("div",p,[i,t("div",j,[g,l(a,null,{default:e(()=>[u]),_:1})]),t("div",m,[v,_,l(a,null,{default:e(()=>[b]),_:1}),l(a,null,{default:e(()=>[f]),_:1})]),t("div",y,[S,x,l(a,null,{default:e(()=>[w]),_:1})]),t("div",k,[P,l(a,null,{default:e(()=>[T]),_:1})]),t("div",E,[C,l(a,null,{default:e(()=>[V]),_:1})]),t("div",D,[A,l(a,null,{default:e(()=>[M]),_:1})]),t("div",O,[W,l(a,null,{default:e(()=>[z]),_:1})]),t("div",B,[I,l(a,null,{default:e(()=>[R]),_:1}),l(a,null,{default:e(()=>[N]),_:1})]),t("div",U,[$,l(a,null,{default:e(()=>[F]),_:1}),l(a,null,{default:e(()=>[Y]),_:1})]),t("div",H,[L,l(a,null,{default:e(()=>[q]),_:1})]),t("div",G,[J,l(a,null,{default:e(()=>[K]),_:1})]),t("div",Q,[X,l(a,null,{default:e(()=>[Z]),_:1})]),t("div",ss,[ts,l(a,null,{default:e(()=>[as]),_:1})]),ls])}var js=n(h,[["render",es]]);export{js as default};
