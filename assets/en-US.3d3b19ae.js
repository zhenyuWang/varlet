import{_ as n}from"./elevation.229458c1.js";import{e as c,o as d,c as r,a as s,i as e,j as l,m as t,U as o}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=s("h1",null,"Image",-1),g=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[t("Components provide more convenient size, fill mode, rounded corner Settings, ripple effect enhanced picture click interactive experience. Supports "),s("code",null,"Lazy load"),t(", "),s("code",null,"loading images"),t(", "),s("code",null,"error images"),t(", and default Settings for applying Lazy instructions.")])],-1),j={class:"card"},m=s("h3",null,"Install",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Image } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Image)
`)])],-1),_={class:"card"},v=s("h3",null,"Basic Use",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(" />")]),t(`
`)])],-1),y={class:"card"},x=s("h3",null,"Fit Mode",-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(),s("span",{class:"hljs-attr"},"width"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(),s("span",{class:"hljs-attr"},"height"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(" />")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(` 
  `),s("span",{class:"hljs-attr"},"width"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(` 
  `),s("span",{class:"hljs-attr"},"height"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(`
  `),s("span",{class:"hljs-attr"},"fit"),t("="),s("span",{class:"hljs-string"},'"cover"'),t(` 
  `),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(` 
/>`)]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(` 
  `),s("span",{class:"hljs-attr"},"width"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(`
  `),s("span",{class:"hljs-attr"},"height"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(` 
  `),s("span",{class:"hljs-attr"},"fit"),t("="),s("span",{class:"hljs-string"},'"contain"'),t(`
  `),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(` 
/>`)]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(` 
  `),s("span",{class:"hljs-attr"},"width"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(`
  `),s("span",{class:"hljs-attr"},"height"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(`
  `),s("span",{class:"hljs-attr"},"fit"),t("="),s("span",{class:"hljs-string"},'"none"'),t(`
  `),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(`
/>`)]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(` 
  `),s("span",{class:"hljs-attr"},"width"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(`
  `),s("span",{class:"hljs-attr"},"height"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(` 
  `),s("span",{class:"hljs-attr"},"fit"),t("="),s("span",{class:"hljs-string"},'"scale-down"'),t(`
  `),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(` 
/>`)]),t(`
`)])],-1),b={class:"card"},k=s("h3",null,"Set Radius",-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(`
  `),s("span",{class:"hljs-attr"},"width"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(`
  `),s("span",{class:"hljs-attr"},"height"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(`
  `),s("span",{class:"hljs-attr"},"fit"),t("="),s("span",{class:"hljs-string"},'"cover"'),t(`
  `),s("span",{class:"hljs-attr"},":radius"),t("="),s("span",{class:"hljs-string"},'"10"'),t(`
  `),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(`
/>`)]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(`
  `),s("span",{class:"hljs-attr"},"width"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(`
  `),s("span",{class:"hljs-attr"},"height"),t("="),s("span",{class:"hljs-string"},'"85px"'),t(`
  `),s("span",{class:"hljs-attr"},"fit"),t("="),s("span",{class:"hljs-string"},'"cover"'),t(`
  `),s("span",{class:"hljs-attr"},"radius"),t("="),s("span",{class:"hljs-string"},'"50%"'),t(`
  `),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(`
/>`)]),t(`
`)])],-1),z={class:"card"},S=s("h3",null,"Use Ripple",-1),E=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(),s("span",{class:"hljs-attr"},"ripple"),t(),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t("/>")]),t(`
`)])],-1),U={class:"card"},V=s("h3",null,"Use LazyLoad",-1),W=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(),s("span",{class:"hljs-attr"},"lazy"),t(),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(" />")]),t(`
`)])],-1),T={class:"card"},A=s("h3",null,"Set the lazy loading state",-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(` 
  `),s("span",{class:"hljs-attr"},"lazy"),t(`
  `),s("span",{class:"hljs-attr"},"loading"),t("="),s("span",{class:"hljs-string"},'"https://xxx.xxx/loading.png"'),t(`
  `),s("span",{class:"hljs-attr"},"error"),t("="),s("span",{class:"hljs-string"},'"https://xxx.xxx/error.png"'),t(`
  `),s("span",{class:"hljs-attr"},"src"),t("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),t(`
/>`)]),t(`
`)])],-1),L={class:"card"},N=s("h3",null,"Use local paths",-1),$=s("p",null,[t("In the file "),s("code",null,".vue"),t(", the "),s("code",null,"Vue component"),t(" will not be automatically processed by the build tool like the native img module, so you need to import the image resources manually. Here\u2019s how the different build tools are used.")],-1),C=s("h4",null,"Webpack",-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(),s("span",{class:"hljs-attr"},":src"),t("="),s("span",{class:"hljs-string"},`"require('../../assets/logo.png')"`),t("/>")]),t(`
`)])],-1),P=s("h4",null,"Vite",-1),R=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-image"),t(),s("span",{class:"hljs-attr"},":src"),t("="),s("span",{class:"hljs-string"},'"logo"'),t("/>")]),t(`
`)])],-1),q=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" logo "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'../../assets/logo.png'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"return"),t(` { logo }
  }
}
`)])],-1),F=o('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>src</code></td><td>Image src</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Image fit mode, optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>fill</code></td></tr><tr><td><code>alt</code></td><td>Image alt text</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>width</code></td><td>Image width</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>Image height</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>radius</code></td><td>Image radius</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lazy</code></td><td>Whether to enable lazy loading</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading</code></td><td>When lazy loading is enabled, the image displayed in loading</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>When lazy loading is enabled, the image displayed in error</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>block</code></td><td>Whether it is a block element</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click on Image</td><td><code>event: Event</code></td></tr><tr><td><code>load</code></td><td>Triggered when the image is successfully loaded (when the image fails in lazy loading mode, it will only be triggered when the image is successfully loaded)</td><td><code>event: Event</code></td></tr><tr><td><code>error</code></td><td>Triggered when an image fails to load (when an image fails in lazy loading mode, it will only be triggered when the number of attempts ends)</td><td><code>event: Event</code></td></tr></tbody></table></div>',3);function H(M,G,J,K,O,Q){const a=c("var-site-code-example");return d(),r("div",h,[p,g,s("div",j,[m,e(a,null,{default:l(()=>[u]),_:1})]),s("div",_,[v,e(a,null,{default:l(()=>[f]),_:1})]),s("div",y,[x,e(a,null,{default:l(()=>[w]),_:1})]),s("div",b,[k,e(a,null,{default:l(()=>[I]),_:1})]),s("div",z,[S,e(a,null,{default:l(()=>[E]),_:1})]),s("div",U,[V,e(a,null,{default:l(()=>[W]),_:1})]),s("div",T,[A,e(a,null,{default:l(()=>[B]),_:1})]),s("div",L,[N,$,C,e(a,null,{default:l(()=>[D]),_:1}),P,e(a,null,{default:l(()=>[R]),_:1}),e(a,null,{default:l(()=>[q]),_:1})]),F])}var Z=n(i,[["render",H]]);export{Z as default};
