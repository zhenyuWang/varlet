import{_ as d}from"./elevation.69c766bc.js";import{e as c,o as r,c as o,a as s,i as l,j as e,m as t,U as n}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"Slider",-1),u=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Used to take values within a given range.")],-1),j={class:"card"},m=s("h3",null,"Install",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Slider } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Slider)
`)])],-1),_={class:"card"},v=s("h3",null,"Basic Usage",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(" />")]),t(`
`)])],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" value = ref("),s("span",{class:"hljs-number"},"3"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      value
    }
  }
}
`)])],-1),y={class:"card"},k=s("h3",null,"Step size",-1),w=s("p",null,[t("Set step increment by "),s("code",null,"step"),t(".")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(),s("span",{class:"hljs-attr"},"step"),t("="),s("span",{class:"hljs-string"},'"10"'),t(" />")]),t(`
`)])],-1),S={class:"card"},z=s("h3",null,"Dual thumb",-1),V=s("p",null,[t("Open the double slider mode through the "),s("code",null,"range"),t(" attribute. Make sure the "),s("code",null,"value"),t(" is an "),s("strong",null,"array"),t(".")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(),s("span",{class:"hljs-attr"},"range"),t(" @"),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"handleChange"'),t(" />")]),t(`
`)])],-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" value = ref(["),s("span",{class:"hljs-number"},"3"),t(", "),s("span",{class:"hljs-number"},"50"),t(`])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleChange = "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"value"),t(") =>")]),t(` {
      `),s("span",{class:"hljs-built_in"},"console"),t(`.log(value)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      value
    }
  }
}
`)])],-1),E={class:"card"},T=s("h3",null,"Disable",-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(),s("span",{class:"hljs-attr"},"disabled"),t(" />")]),t(`
`)])],-1),N={class:"card"},P=s("h3",null,"Readonly",-1),U=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(),s("span",{class:"hljs-attr"},"readonly"),t(" />")]),t(`
`)])],-1),W={class:"card"},$=s("h3",null,"Slider size",-1),A=s("p",null,[t("Control the size of slider through "),s("code",null,"track-height"),t(" and "),s("code",null,"thumb-size"),t(".")],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(),s("span",{class:"hljs-attr"},"track-height"),t("="),s("span",{class:"hljs-string"},'"4"'),t(),s("span",{class:"hljs-attr"},"thumb-size"),t("="),s("span",{class:"hljs-string"},'"8"'),t(),s("span",{class:"hljs-attr"},"range"),t(" />")]),t(`
`)])],-1),H={class:"card"},F=s("h3",null,"Custom style",-1),M=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(`
  `),s("span",{class:"hljs-attr"},"label-color"),t("="),s("span",{class:"hljs-string"},'"purple"'),t(`
  `),s("span",{class:"hljs-attr"},"active-color"),t("="),s("span",{class:"hljs-string"},'"#e0732c"'),t(`
  `),s("span",{class:"hljs-attr"},"track-color"),t("="),s("span",{class:"hljs-string"},'"#3a68b4"'),t(`
  `),s("span",{class:"hljs-attr"},"thumb-color"),t("="),s("span",{class:"hljs-string"},'"#e25241"'),t(`
  `),s("span",{class:"hljs-attr"},"label-text-color"),t("="),s("span",{class:"hljs-string"},'"#ededed"'),t(`
/>`)]),t(`
`)])],-1),O={class:"card"},R=s("h3",null,"Custom Button",-1),q=s("p",null,[t("The props such as "),s("code",null,"label-visible"),t(", "),s("code",null,"label-text-color"),t(", "),s("code",null,"thumb-size"),t(" are invalid when using slot custom buttons.")],-1),G=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(),s("span",{class:"hljs-attr"},"range"),t(),s("span",{class:"hljs-attr"},"active-color"),t("="),s("span",{class:"hljs-string"},'"#52af77"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"button"),t("="),s("span",{class:"hljs-string"},'"{ currentValue }"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"slider-example_block"'),t(">")]),t("{{ currentValue }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-slider"),t(">")]),t(`
`)])],-1),J=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-class"},".slider-example_block"),t(` {
  `),s("span",{class:"hljs-attribute"},"width"),t(": "),s("span",{class:"hljs-number"},"24px"),t(`;
  `),s("span",{class:"hljs-attribute"},"border"),t(": "),s("span",{class:"hljs-number"},"1px"),t(" solid "),s("span",{class:"hljs-number"},"#52af77"),t(`;
  `),s("span",{class:"hljs-attribute"},"color"),t(": "),s("span",{class:"hljs-number"},"#52af77"),t(`;
  `),s("span",{class:"hljs-attribute"},"height"),t(": "),s("span",{class:"hljs-number"},"24px"),t(`;
  `),s("span",{class:"hljs-attribute"},"margin"),t(": "),s("span",{class:"hljs-number"},"0"),t(" -"),s("span",{class:"hljs-number"},"12px"),t(`;
  `),s("span",{class:"hljs-attribute"},"display"),t(`: flex;
  `),s("span",{class:"hljs-attribute"},"align-items"),t(`: center;
  `),s("span",{class:"hljs-attribute"},"justify-content"),t(`: center;
  `),s("span",{class:"hljs-attribute"},"box-shadow"),t(": "),s("span",{class:"hljs-number"},"#ebebeb"),t(),s("span",{class:"hljs-number"},"0"),t(),s("span",{class:"hljs-number"},"2px"),t(),s("span",{class:"hljs-number"},"2px"),t(`;
  `),s("span",{class:"hljs-attribute"},"border-radius"),t(": "),s("span",{class:"hljs-number"},"50%"),t(`;
  `),s("span",{class:"hljs-attribute"},"font-size"),t(": "),s("span",{class:"hljs-number"},"12px"),t(`;
  `),s("span",{class:"hljs-attribute"},"background-color"),t(": "),s("span",{class:"hljs-number"},"#fff"),t(`;
}
`)])],-1),K={class:"card"},L=s("h3",null,"Show label",-1),Q=s("p",null,[t("Control the display of labels through the "),s("code",null,"label-visible"),t(" attribute.")],-1),X=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(),s("span",{class:"hljs-attr"},"label-visible"),t("="),s("span",{class:"hljs-string"},'"never"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value1"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value2"'),t(),s("span",{class:"hljs-attr"},"label-visible"),t("="),s("span",{class:"hljs-string"},'"always"'),t(" />")]),t(`
`)])],-1),Y={class:"card"},Z=n('<h3>Validate value</h3><p>Verify the value through the <code>rules</code> attribute.</p><p><span style="font-size:12px;"><code>rules</code> is an array that accepts <code>functions</code>, <code>boolean</code>, and <code>string</code>. Functions pass an input value as an argument and must return either <code>true</code> / <code>false</code> or a <code>string</code> containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) <code>false</code> or is a <code>string</code>.</span></p>',3),ss=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-slider"),t(` 
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(` 
  `),s("span",{class:"hljs-attr"},":rules"),t("="),s("span",{class:"hljs-string"},`"[(v) => v > 35 || 'error message']"`),t(` 
/>`)]),t(`
`)])],-1),ts=n('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of slider</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td><code>step</code></td><td>Step size. The value is an integer between <code>1 ~ 100</code></td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>range</code></td><td>Whether open the dual thumb mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-visible</code></td><td>Whether to display labels, the optional value is <code>always, normal, never</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>label-text-color</code></td><td>Color of label text</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>track-height</code></td><td>Height of slider</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>thumb-size</code></td><td>Size of thumb</td><td><em>string | number</em></td><td><code>12</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable slider</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether to readonly slider</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rules</code></td><td>Validation rules</td><td><em>array</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted after slider changed</td><td>value: current value</td></tr><tr><td><code>start</code></td><td>Emitted when start dragged</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>Emitted when end dragged</td><td>value: current value</td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>button</code></td><td>Custom button</td><td><code>currentValue</code>: current value</td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--slider-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--slider-track-background</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--slider-track-fill-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-block-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-ripple-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr></tbody></table></div>',5);function as(ls,es,ns,ds,cs,rs){const a=c("var-site-code-example");return r(),o("div",i,[p,u,s("div",j,[m,l(a,null,{default:e(()=>[b]),_:1})]),s("div",_,[v,l(a,null,{default:e(()=>[g]),_:1}),l(a,null,{default:e(()=>[f]),_:1})]),s("div",y,[k,w,l(a,null,{default:e(()=>[x]),_:1})]),s("div",S,[z,V,l(a,null,{default:e(()=>[C]),_:1}),l(a,null,{default:e(()=>[D]),_:1})]),s("div",E,[T,l(a,null,{default:e(()=>[B]),_:1})]),s("div",N,[P,l(a,null,{default:e(()=>[U]),_:1})]),s("div",W,[$,A,l(a,null,{default:e(()=>[I]),_:1})]),s("div",H,[F,l(a,null,{default:e(()=>[M]),_:1})]),s("div",O,[R,q,l(a,null,{default:e(()=>[G]),_:1}),l(a,null,{default:e(()=>[J]),_:1})]),s("div",K,[L,Q,l(a,null,{default:e(()=>[X]),_:1})]),s("div",Y,[Z,l(a,null,{default:e(()=>[ss]),_:1})]),ts])}var is=d(h,[["render",as]]);export{is as default};
