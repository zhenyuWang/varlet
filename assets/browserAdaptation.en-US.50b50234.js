import{_ as n}from"./elevation.f7de2a7a.js";import{e as l,o as c,c as r,a as s,i as o,j as a,m as e,U as i}from"./vendor.efca09d3.js";const p={components:{}},d={class:"varlet-site-doc"},h=s("h1",null,"Browser Adaptation",-1),u=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[e("The component library provides mobile and desktop adaptations, scheme "),s("code",null,"varlet-touch-emulator"),e(" is used for mobile terminal adaptation, scheme "),s("code",null,"varlet-touch-emulator"),e(" is used for mobile terminal adaptation.")])],-1),m={class:"card"},_=i("<h3>Mobile Adaptation</h3><p>The component library design is based on the <code>375px</code> width design draft. It is recommended to use PostCSS plugin to convert <code>px</code> units into <code>vw</code> units to achieve mobile terminal adaptation. Create <code>postcss.config.js</code> under the <code>Webpack/Vite</code> project root path And do the following configuration <code>375px -&gt; 100vw</code></p>",2),v=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),e(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),e(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),e(`
pnpm add postcss-px-to-viewport -D
`)])],-1),j=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// postcss.config.js"),e(`
`),s("span",{class:"hljs-built_in"},"module"),e(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),e(`: {
    `),s("span",{class:"hljs-string"},"'postcss-px-to-viewport'"),e(`: {
      `),s("span",{class:"hljs-attr"},"viewportWidth"),e(": "),s("span",{class:"hljs-number"},"375"),e(`,
      `),s("span",{class:"hljs-attr"},"unitPrecision"),e(": "),s("span",{class:"hljs-number"},"6"),e(`,
      `),s("span",{class:"hljs-attr"},"unitToConvert"),e(": "),s("span",{class:"hljs-string"},"'px'"),e(`,
      `),s("span",{class:"hljs-attr"},"propList"),e(": ["),s("span",{class:"hljs-string"},"'*'"),e(`],
    }
  }
}
`)])],-1),f={class:"card"},g=s("h3",null,"Desktop Adaptation",-1),b=s("p",null,[e("Because component library interaction events are developed using "),s("code",null,"touch"),e(" events, "),s("code",null,"mouse"),e(" events on the desktop side are not supported. It is recommended to use "),s("code",null,"@varlet/touch-emulator"),e(" to set "),s("code",null,"touch -> mouse"),e(" for desktop adaptation.")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),e(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),e(`
yarn add @varlet/touch-emulator
`)])],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),e(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),e(`
`)])],-1);function k(y,A,B,C,V,D){const t=l("var-site-code-example");return c(),r("div",d,[h,u,s("div",m,[_,o(t,null,{default:a(()=>[v]),_:1}),o(t,null,{default:a(()=>[j]),_:1})]),s("div",f,[g,b,o(t,null,{default:a(()=>[x]),_:1}),o(t,null,{default:a(()=>[w]),_:1})])])}var T=n(p,[["render",k]]);export{T as default};
