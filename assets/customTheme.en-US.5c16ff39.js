import{_ as o}from"./elevation.229458c1.js";import{e as t,o as c,c as r,a as s,i as a,j as e,m as l}from"./vendor.49f89f0d.js";const i={components:{}},p={class:"varlet-site-doc"},h=s("h1",null,"Custom Theme",-1),d=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[l("The component library uses "),s("code",null,"Less"),l(" as the CSS preprocessor and defines a number of "),s("code",null,"Less"),l(" variables in the component library Themes can be customized through plugins that modify variables at build time.")])],-1),u={class:"card"},m=s("h3",null,"Common Variables",-1),j=s("p",null,"The following are the common variables used throughout the component library. Each component has its own set of variables to replace.",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// text"),l(`
`),s("span",{class:"hljs-variable"},"@font-size-xs:"),l(),s("span",{class:"hljs-number"},"10px"),l(`;
`),s("span",{class:"hljs-variable"},"@font-size-sm:"),l(),s("span",{class:"hljs-number"},"12px"),l(`;
`),s("span",{class:"hljs-variable"},"@font-size-md:"),l(),s("span",{class:"hljs-number"},"14px"),l(`;
`),s("span",{class:"hljs-variable"},"@font-size-lg:"),l(),s("span",{class:"hljs-number"},"16px"),l(`;

`),s("span",{class:"hljs-comment"},"// icon"),l(`
`),s("span",{class:"hljs-variable"},"@icon-size-xs:"),l(),s("span",{class:"hljs-number"},"16px"),l(`;
`),s("span",{class:"hljs-variable"},"@icon-size-sm:"),l(),s("span",{class:"hljs-number"},"18px"),l(`;
`),s("span",{class:"hljs-variable"},"@icon-size-md:"),l(),s("span",{class:"hljs-number"},"20px"),l(`;
`),s("span",{class:"hljs-variable"},"@icon-size-lg:"),l(),s("span",{class:"hljs-number"},"22px"),l(`;

`),s("span",{class:"hljs-comment"},"// color"),l(`
`),s("span",{class:"hljs-variable"},"@color-primary:"),l(),s("span",{class:"hljs-number"},"#2979ff"),l(`;
`),s("span",{class:"hljs-variable"},"@color-info:"),l(),s("span",{class:"hljs-number"},"#00bcd4"),l(`;
`),s("span",{class:"hljs-variable"},"@color-success:"),l(),s("span",{class:"hljs-number"},"#4caf50"),l(`;
`),s("span",{class:"hljs-variable"},"@color-warning:"),l(),s("span",{class:"hljs-number"},"#ff9800"),l(`;
`),s("span",{class:"hljs-variable"},"@color-danger:"),l(),s("span",{class:"hljs-number"},"#f44336"),l(`;
`),s("span",{class:"hljs-variable"},"@color-disabled:"),l(),s("span",{class:"hljs-number"},"#e0e0e0"),l(`;

`),s("span",{class:"hljs-comment"},"// animation"),l(`
`),s("span",{class:"hljs-variable"},"@cubic-bezier:"),l(" cubic-bezier("),s("span",{class:"hljs-number"},"0.25"),l(", "),s("span",{class:"hljs-number"},"0.8"),l(", "),s("span",{class:"hljs-number"},"0.5"),l(", "),s("span",{class:"hljs-number"},"1"),l(`);
`)])],-1),b=s("div",{class:"card"},[s("h3",null,"Custom methods"),s("p",null,[l("First, make sure your build tools support "),s("code",null,"less"),l(", different ways of introducing components require different customizations, the customization methods of "),s("code",null,"Full import"),l(", "),s("code",null,"Plugin based import"),l(", "),s("code",null,"ES module based manual import"),l(" are described below.")])],-1),f={class:"card"},v=s("h3",null,"Full import",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(),s("span",{class:"hljs-string"},"'@varlet/ui/es/less'"),l(`
`)])],-1),y={class:"card"},x=s("h3",null,"Plugin based import",-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// babel.config.js"),l(`
`),s("span",{class:"hljs-built_in"},"module"),l(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),l(`: [
    [
      `),s("span",{class:"hljs-string"},"'import'"),l(`,
      {
        `),s("span",{class:"hljs-attr"},"libraryName"),l(": "),s("span",{class:"hljs-string"},"'@varlet/ui'"),l(`,
        `),s("span",{class:"hljs-attr"},"libraryDirectory"),l(": "),s("span",{class:"hljs-string"},"'es'"),l(`,
        `),s("span",{class:"hljs-attr"},"style"),l(": "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"name"),l(" =>")]),l(),s("span",{class:"hljs-string"},[l("`"),s("span",{class:"hljs-subst"},"${name}"),l("/style/less`")]),l(`,
      },
      `),s("span",{class:"hljs-string"},"'@varlet/ui'"),l(`,
    ]
  ]
}
`)])],-1),z={class:"card"},V=s("h3",null,"ES module based manual import",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/less'"),l(`
`)])],-1),C=s("div",{class:"card"},[s("h3",null,"Modify Variables"),s("p",null,[l("Use the "),s("code",null,"modifyVars"),l(" provided by "),s("code",null,"less"),l(" for variable substitution at build time. The following is the configuration for different scenarios.")])],-1),T={class:"card"},$=s("h3",null,"Webpack",-1),S=s("p",null,[l("Here "),s("code",null,"less-loader"),l(" is used for version "),s("code",null,"< 6"),l(".")],-1),E=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// webpack.config.js"),l(`
`),s("span",{class:"hljs-built_in"},"module"),l(`.exports = {
  `),s("span",{class:"hljs-attr"},"rules"),l(`: [
    {
      `),s("span",{class:"hljs-attr"},"test"),l(": "),s("span",{class:"hljs-regexp"},"/\\.less$/"),l(`,
      use: [
        {
          `),s("span",{class:"hljs-attr"},"loader"),l(": "),s("span",{class:"hljs-string"},"'less-loader'"),l(`,
          `),s("span",{class:"hljs-attr"},"options"),l(`: {
            `),s("span",{class:"hljs-attr"},"modifyVars"),l(`: {
              `),s("span",{class:"hljs-string"},"'color-primary'"),l(": "),s("span",{class:"hljs-string"},"'#009688'"),l(`,
            }
          }
        }
      ]
    }
  ]
}
`)])],-1),N={class:"card"},B=s("h3",null,"Vue cli",-1),F=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vue.config.js"),l(`
`),s("span",{class:"hljs-built_in"},"module"),l(`.exports = {
  `),s("span",{class:"hljs-attr"},"css"),l(`: {
    `),s("span",{class:"hljs-attr"},"loaderOptions"),l(`: {
      `),s("span",{class:"hljs-attr"},"less"),l(`: {
        `),s("span",{class:"hljs-attr"},"modifyVars"),l(`: {
          `),s("span",{class:"hljs-string"},"'color-primary'"),l(": "),s("span",{class:"hljs-string"},"'#009688'"),l(`,
        }
      }
    }
  }
}
`)])],-1),L={class:"card"},O=s("h3",null,"Vite",-1),P=s("p",null,[l("Vite do not support "),s("code",null,"~"),l(" syntax and need to override "),s("code",null,"~"),l(".")],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.js"),l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { defineConfig } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vite'"),l(`

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` defineConfig({
  `),s("span",{class:"hljs-attr"},"css"),l(`: {
    `),s("span",{class:"hljs-attr"},"preprocessorOptions"),l(`: {
      `),s("span",{class:"hljs-attr"},"less"),l(`: {
        `),s("span",{class:"hljs-attr"},"modifyVars"),l(`: {
          `),s("span",{class:"hljs-string"},"'color-primary'"),l(": "),s("span",{class:"hljs-string"},"'#009688'"),l(`,
        }
      }
    }
  },
  `),s("span",{class:"hljs-attr"},"resolve"),l(`: {
    `),s("span",{class:"hljs-attr"},"alias"),l(`: [
      { `),s("span",{class:"hljs-attr"},"find"),l(": "),s("span",{class:"hljs-regexp"},"/^~/"),l(", replacement: "),s("span",{class:"hljs-string"},"''"),l(` }
    ],
  }
})
`)])],-1);function q(D,H,I,M,W,A){const n=t("var-site-code-example");return c(),r("div",p,[h,d,s("div",u,[m,j,a(n,null,{default:e(()=>[_]),_:1})]),b,s("div",f,[v,a(n,null,{default:e(()=>[g]),_:1})]),s("div",y,[x,a(n,null,{default:e(()=>[w]),_:1})]),s("div",z,[V,a(n,null,{default:e(()=>[k]),_:1})]),C,s("div",T,[$,S,a(n,null,{default:e(()=>[E]),_:1})]),s("div",N,[B,a(n,null,{default:e(()=>[F]),_:1})]),s("div",L,[O,P,a(n,null,{default:e(()=>[U]),_:1})])])}var K=o(i,[["render",q]]);export{K as default};
