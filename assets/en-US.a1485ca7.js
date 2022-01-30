import{_ as e}from"./elevation.f7de2a7a.js";import{e as c,o,c as i,a as s,i as a,j as l,m as t,U as r}from"./vendor.efca09d3.js";const h={components:{}},d={class:"varlet-site-doc"},p=s("h1",null,"Icon",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[t("Font based icon library, also support web images. Font icons are from "),s("a",{href:"https://materialdesignicons.com/"},"Material Design Icon"),t(".")])],-1),u={class:"card"},m=s("h3",null,"Install",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Icon } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Icon)
`)])],-1),_={class:"card"},f=s("h3",null,"Icon Size",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"26"'),t("/>")]),t(`
`)])],-1),b={class:"card"},v=s("h3",null,"Icon Color",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),t(),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#2979ff"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),t(),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#2979ff"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"26"'),t("/>")]),t(`
`)])],-1),x={class:"card"},w=s("h3",null,"Use Image",-1),S=s("p",null,[t("When the name passed in is a URL the "),s("code",null,"img"),t(" tag is displayed in "),s("code",null,"cover"),t(" mode. "),s("code",null,"size"),t(" is the width and height of the image.")],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"32"'),t(" />")]),t(`
`)])],-1),z={class:"card"},C=s("h3",null,"Events",-1),F=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(` 
  `),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),t(`
  `),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#2979ff"'),t(`
  @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},`"() => Snackbar.success('Click success')"`),t(`
/>`)]),t(`
`)])],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"return"),t(` { Snackbar }
  }
}
`)])],-1),A={class:"card"},D=s("h3",null,"Icon Animation",-1),E=s("p",null,[t("When "),s("code",null,"transition (ms)"),t(" is set, and the icon is toggled by its "),s("code",null,"name"),t(", trigger a toggle animation.")],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#2979ff"'),t(),s("span",{class:"hljs-attr"},":name"),t("="),s("span",{class:"hljs-string"},'"name"'),t(),s("span",{class:"hljs-attr"},":transition"),t("="),s("span",{class:"hljs-string"},'"300"'),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"30"'),t(" />")]),t(`
`)])],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" name = ref("),s("span",{class:"hljs-string"},"'information'"),t(`)
    
    `),s("span",{class:"hljs-keyword"},"const"),t(" toggle = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      name.value = name.value === `),s("span",{class:"hljs-string"},"'information'"),t(` 
        ? `),s("span",{class:"hljs-string"},"'checkbox-marked-circle'"),t(` 
        : `),s("span",{class:"hljs-string"},"'information'"),t(`
    }
    
    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      name,
      toggle
    }
  }
}
`)])],-1),P={class:"card"},T=s("h3",null,"Custom Icons",-1),$=s("p",null,[t("First you need to set up your own font and install it into your project. Let\u2019s assume that we extend a font named "),s("code",null,"my-icons"),t(".")],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"/* Set the font */"),t(`
`),s("span",{class:"hljs-keyword"},"@font-face"),t(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),t(": "),s("span",{class:"hljs-string"},'"my-icons"'),t(`;
  `),s("span",{class:"hljs-attribute"},"src"),t(": "),s("span",{class:"hljs-built_in"},"url"),t("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.eot"'),t(`);
  `),s("span",{class:"hljs-attribute"},"src"),t(": "),s("span",{class:"hljs-built_in"},"url"),t("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.eot"'),t(") "),s("span",{class:"hljs-built_in"},"format"),t("("),s("span",{class:"hljs-string"},'"embedded-opentype"'),t(`), 
    `),s("span",{class:"hljs-built_in"},"url"),t("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.woff2"'),t(") "),s("span",{class:"hljs-built_in"},"format"),t("("),s("span",{class:"hljs-string"},'"woff2"'),t(`), 
    `),s("span",{class:"hljs-built_in"},"url"),t("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.woff"'),t(") "),s("span",{class:"hljs-built_in"},"format"),t("("),s("span",{class:"hljs-string"},'"woff"'),t(`), 
    `),s("span",{class:"hljs-built_in"},"url"),t("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.ttf"'),t(") "),s("span",{class:"hljs-built_in"},"format"),t("("),s("span",{class:"hljs-string"},'"truetype"'),t(`);
  `),s("span",{class:"hljs-attribute"},"font-weight"),t(`: normal;
  `),s("span",{class:"hljs-attribute"},"font-style"),t(`: normal;
}

`),s("span",{class:"hljs-comment"},"/* Font style */"),t(`
`),s("span",{class:"hljs-selector-class"},".my-icon--set"),t(`,
`),s("span",{class:"hljs-selector-class"},".my-icon--set"),s("span",{class:"hljs-selector-pseudo"},"::before"),t(` {
  `),s("span",{class:"hljs-attribute"},"position"),t(`: relative;
  `),s("span",{class:"hljs-attribute"},"display"),t(`: inline-block;
  `),s("span",{class:"hljs-attribute"},"font"),t(": normal normal normal "),s("span",{class:"hljs-number"},"14px"),t("/"),s("span",{class:"hljs-number"},"1"),t(),s("span",{class:"hljs-string"},'"my-icons"'),t(`;
  `),s("span",{class:"hljs-attribute"},"font-size"),t(`: inherit;
  `),s("span",{class:"hljs-attribute"},"text-rendering"),t(`: auto;
  -webkit-`),s("span",{class:"hljs-attribute"},"font-smoothing"),t(`: antialiased;
}

`),s("span",{class:"hljs-comment"},"/* Font names map code points */"),t(`
`),s("span",{class:"hljs-selector-class"},".my-icon-hot"),s("span",{class:"hljs-selector-pseudo"},"::before"),t(` {
  `),s("span",{class:"hljs-attribute"},"content"),t(": "),s("span",{class:"hljs-string"},'"\\F000"'),t(`;
}
`)])],-1),H=s("p",null,[t("Here you have successfully extended your icon library. So "),s("code",null,"my-icon"),t(" is your font "),s("code",null,"namespace"),t(". You can use it this way:")],-1),L=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"namespace"),t("="),s("span",{class:"hljs-string"},'"my-icon"'),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"hot"'),t(" />")]),t(`
`)])],-1),W=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>icon color, Only applies to font icons</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace, extensible custom icon library</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>transition</code></td><td>Transition animation time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click on the icon</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--icon-size</code></td><td><code>20px</code></td></tr></tbody></table></div>',4);function M(O,R,Y,q,G,J){const n=c("var-site-code-example");return o(),i("div",d,[p,j,s("div",u,[m,a(n,null,{default:l(()=>[g]),_:1})]),s("div",_,[f,a(n,null,{default:l(()=>[y]),_:1})]),s("div",b,[v,a(n,null,{default:l(()=>[k]),_:1})]),s("div",x,[w,S,a(n,null,{default:l(()=>[I]),_:1})]),s("div",z,[C,a(n,null,{default:l(()=>[F]),_:1}),a(n,null,{default:l(()=>[V]),_:1})]),s("div",A,[D,E,a(n,null,{default:l(()=>[U]),_:1}),a(n,null,{default:l(()=>[N]),_:1})]),s("div",P,[T,$,a(n,null,{default:l(()=>[B]),_:1}),H,a(n,null,{default:l(()=>[L]),_:1})]),W])}var X=e(h,[["render",M]]);export{X as default};
