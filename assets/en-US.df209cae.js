import{_ as e}from"./elevation.229458c1.js";import{e as c,o,c as r,a as s,i as t,j as l,m as a,U as i}from"./vendor.49f89f0d.js";const h={components:{}},d={class:"varlet-site-doc"},p=s("h1",null,"Icon",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[a("Font based icon library, also support web images. Font icons are from "),s("a",{href:"https://materialdesignicons.com/"},"Material Design Icon"),a(".")])],-1),u={class:"card"},m=s("h3",null,"Install",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Icon } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

createApp().use(Icon)
`)])],-1),g={class:"card"},f=s("h3",null,"Icon Size",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"26"'),a("/>")]),a(`
`)])],-1),y={class:"card"},v=s("h3",null,"Icon Color",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"26"'),a("/>")]),a(`
`)])],-1),x={class:"card"},w=s("h3",null,"Use Image",-1),S=s("p",null,[a("When the name passed in is a URL the "),s("code",null,"img"),a(" tag is displayed in "),s("code",null,"cover"),a(" mode. "),s("code",null,"size"),a(" is the width and height of the image.")],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"32"'),a(" />")]),a(`
`)])],-1),z={class:"card"},C=s("h3",null,"Events",-1),F=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(` 
  `),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(`
  `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(`
  @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},`"() => Snackbar.success('Click success')"`),a(`
/>`)]),a(`
`)])],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"return"),a(` { Snackbar }
  }
}
`)])],-1),A={class:"card"},D=s("h3",null,"Icon Animation",-1),E=s("p",null,[a("When "),s("code",null,"transition (ms)"),a(" is set, and the icon is toggled by its "),s("code",null,"name"),a(", trigger a toggle animation.")],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"name"'),a(),s("span",{class:"hljs-attr"},":transition"),a("="),s("span",{class:"hljs-string"},'"300"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"30"'),a(" />")]),a(`
`)])],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" name = ref("),s("span",{class:"hljs-string"},"'information'"),a(`)
    
    `),s("span",{class:"hljs-keyword"},"const"),a(" toggle = "),s("span",{class:"hljs-function"},"() =>"),a(` {
      name.value = name.value === `),s("span",{class:"hljs-string"},"'information'"),a(` 
        ? `),s("span",{class:"hljs-string"},"'checkbox-marked-circle'"),a(` 
        : `),s("span",{class:"hljs-string"},"'information'"),a(`
    }
    
    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      name,
      toggle
    }
  }
}
`)])],-1),P={class:"card"},T=s("h3",null,"Custom Icons",-1),$=s("p",null,[a("First you need to set up your own font and install it into your project. Let\u2019s assume that we extend a font named "),s("code",null,"my-icons"),a(".")],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"/* Set the font */"),a(`
`),s("span",{class:"hljs-keyword"},"@font-face"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
  `),s("span",{class:"hljs-attribute"},"src"),a(": "),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.eot"'),a(`);
  `),s("span",{class:"hljs-attribute"},"src"),a(": "),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.eot"'),a(") "),s("span",{class:"hljs-built_in"},"format"),a("("),s("span",{class:"hljs-string"},'"embedded-opentype"'),a(`), 
    `),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.woff2"'),a(") "),s("span",{class:"hljs-built_in"},"format"),a("("),s("span",{class:"hljs-string"},'"woff2"'),a(`), 
    `),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.woff"'),a(") "),s("span",{class:"hljs-built_in"},"format"),a("("),s("span",{class:"hljs-string"},'"woff"'),a(`), 
    `),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.ttf"'),a(") "),s("span",{class:"hljs-built_in"},"format"),a("("),s("span",{class:"hljs-string"},'"truetype"'),a(`);
  `),s("span",{class:"hljs-attribute"},"font-weight"),a(`: normal;
  `),s("span",{class:"hljs-attribute"},"font-style"),a(`: normal;
}

`),s("span",{class:"hljs-comment"},"/* Font style */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon--set"),a(`,
`),s("span",{class:"hljs-selector-class"},".my-icon--set"),s("span",{class:"hljs-selector-pseudo"},"::before"),a(` {
  `),s("span",{class:"hljs-attribute"},"position"),a(`: relative;
  `),s("span",{class:"hljs-attribute"},"display"),a(`: inline-block;
  `),s("span",{class:"hljs-attribute"},"font"),a(": normal normal normal "),s("span",{class:"hljs-number"},"14px"),a("/"),s("span",{class:"hljs-number"},"1"),a(),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
  `),s("span",{class:"hljs-attribute"},"font-size"),a(`: inherit;
  `),s("span",{class:"hljs-attribute"},"text-rendering"),a(`: auto;
  -webkit-`),s("span",{class:"hljs-attribute"},"font-smoothing"),a(`: antialiased;
}

`),s("span",{class:"hljs-comment"},"/* Font names map code points */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon-hot"),s("span",{class:"hljs-selector-pseudo"},"::before"),a(` {
  `),s("span",{class:"hljs-attribute"},"content"),a(": "),s("span",{class:"hljs-string"},'"\\F000"'),a(`;
}
`)])],-1),H=s("p",null,[a("Here you have successfully extended your icon library. So "),s("code",null,"my-icon"),a(" is your font "),s("code",null,"namespace"),a(". You can use it this way:")],-1),L=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"namespace"),a("="),s("span",{class:"hljs-string"},'"my-icon"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"hot"'),a(" />")]),a(`
`)])],-1),W=i('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>icon color, Only applies to font icons</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace, extensible custom icon library</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>transition</code></td><td>Transition animation time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click on the icon</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--icon-size</code></td><td><code>20px</code></td></tr></tbody></table></div>',4);function M(O,R,Y,q,G,J){const n=c("var-site-code-example");return o(),r("div",d,[p,j,s("div",u,[m,t(n,null,{default:l(()=>[_]),_:1})]),s("div",g,[f,t(n,null,{default:l(()=>[b]),_:1})]),s("div",y,[v,t(n,null,{default:l(()=>[k]),_:1})]),s("div",x,[w,S,t(n,null,{default:l(()=>[I]),_:1})]),s("div",z,[C,t(n,null,{default:l(()=>[F]),_:1}),t(n,null,{default:l(()=>[V]),_:1})]),s("div",A,[D,E,t(n,null,{default:l(()=>[U]),_:1}),t(n,null,{default:l(()=>[N]),_:1})]),s("div",P,[T,$,t(n,null,{default:l(()=>[B]),_:1}),H,t(n,null,{default:l(()=>[L]),_:1})]),W])}var X=e(h,[["render",M]]);export{X as default};
