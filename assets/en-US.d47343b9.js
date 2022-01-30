import{_ as n}from"./elevation.f7de2a7a.js";import{e as c,o,c as r,a as s,i as a,j as l,m as t,U as d}from"./vendor.efca09d3.js";const i={components:{}},h={class:"varlet-site-doc"},p=s("h1",null,"Lazy",-1),g=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Load when the image is visible"),s("h4")],-1),m={class:"card"},u=s("h3",null,"Install",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Lazy } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Lazy)
`)])],-1),_={class:"card"},y=s("h3",null,"Basic Use",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"img"),t(),s("span",{class:"hljs-attr"},"v-lazy"),t("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),t(">")]),t(`
`)])],-1),f={class:"card"},x=s("h3",null,"Background Image Lazy Load",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"v-lazy:background-image"),t("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),t(">")]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
`)])],-1),k={class:"card"},z=s("h3",null,"Inline Attributes",-1),w=s("p",null,[t("You can modify the "),s("code",null,"loading"),t(", "),s("code",null,"error"),t(" image, and "),s("code",null,"reload attempts"),t(" by using inline properties.")],-1),L=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"img"),t(` 
  `),s("span",{class:"hljs-attr"},"v-lazy"),t("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),t(`
  `),s("span",{class:"hljs-attr"},"lazy-loading"),t("="),s("span",{class:"hljs-string"},'"https://xxx.cn/loading.png"'),t(`
  `),s("span",{class:"hljs-attr"},"lazy-error"),t("="),s("span",{class:"hljs-string"},'"https://xxx.cn/error.png"'),t(`
  `),s("span",{class:"hljs-attr"},"lazy-attempt"),t("="),s("span",{class:"hljs-string"},'"3"'),t(`
>`)]),t(`
`)])],-1),A={class:"card"},B=s("h3",null,"Plugin",-1),I=s("p",null,[t("The option to set the default "),s("code",null,"Lazy"),t(" load option is provided, which is passed in at plugin registration.")],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Lazy } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Lazy, {
  `),s("span",{class:"hljs-attr"},"loading"),t(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/loading.png'"),t(`,
  `),s("span",{class:"hljs-attr"},"error"),t(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/error.png'"),t(`,
  `),s("span",{class:"hljs-attr"},"attempt"),t(": "),s("span",{class:"hljs-number"},"3"),t(`,
  `),s("span",{class:"hljs-attr"},"throttleWait"),t(": "),s("span",{class:"hljs-number"},"300"),t(`,
  `),s("span",{class:"hljs-attr"},"events"),t(`: [
    `),s("span",{class:"hljs-string"},"'scroll'"),t(`, 
    `),s("span",{class:"hljs-string"},"'wheel'"),t(`, 
    `),s("span",{class:"hljs-string"},"'mousewheel'"),t(`, 
    `),s("span",{class:"hljs-string"},"'resize'"),t(`,
    `),s("span",{class:"hljs-string"},"'animationend'"),t(`,
    `),s("span",{class:"hljs-string"},"'transitionend'"),t(`, 
    `),s("span",{class:"hljs-string"},"'touchmove'"),t(`
  ],
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"filter"),t("("),s("span",{class:"hljs-params"},"lazy"),t(")")]),t(` {
    `),s("span",{class:"hljs-comment"},"// All properties of the context can be accessed, and some property interceptions can be performed."),t(`
    `),s("span",{class:"hljs-comment"},"// Such as simply modifying all image addresses http-> https"),t(`
    lazy.src.replace(`),s("span",{class:"hljs-string"},"'http://'"),t(", "),s("span",{class:"hljs-string"},"'https://'"),t(`)
  }
})
`)])],-1),T=d('<h2>API</h2><div class="card"><h3>Plugin Options</h3><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loading</code></td><td>Loading images, if possible, select images that load quickly</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>error</code></td><td>Load failed to display the picture</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>attempt</code></td><td>The number of times a load failed to reload</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>throttle wait time, The higher the value, the lower the trigger frequency</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>A list of events that trigger visibility detection registration</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>Attribute interceptor function</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div>',2);function N(V,$,S,U,q,C){const e=c("var-site-code-example");return o(),r("div",h,[p,g,s("div",m,[u,a(e,null,{default:l(()=>[j]),_:1})]),s("div",_,[y,a(e,null,{default:l(()=>[v]),_:1})]),s("div",f,[x,a(e,null,{default:l(()=>[b]),_:1})]),s("div",k,[z,w,a(e,null,{default:l(()=>[L]),_:1})]),s("div",A,[B,I,a(e,null,{default:l(()=>[P]),_:1})]),T])}var W=n(i,[["render",N]]);export{W as default};
