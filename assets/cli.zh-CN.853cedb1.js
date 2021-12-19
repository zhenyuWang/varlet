import{_ as c}from"./elevation.6f2b205f.js";import{e as d,o,c as r,a as s,i as e,j as n,S as a,m as t}from"./vendor.8243c41e.js";const h={components:{}},i={class:"varlet-site-doc"},p=a('<h1>@varlet/cli</h1><p>\u5F00\u7BB1\u5373\u7528\u7684 <code>Vue3\u7EC4\u4EF6\u5E93</code> \u5FEB\u901F\u6210\u578B\u5DE5\u5177\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u547D\u4EE4\u548C\u5DE5\u5177\u53BB\u89E3\u51B3\u7EC4\u4EF6\u5E93\u5F00\u53D1\u4E0A\u7684\u95EE\u9898</p><div class="card"><h3>\u7279\u6027</h3><ul><li>1.\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u73AF\u5883</li><li>2.\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u7F16\u8BD1\u5DE5\u5177\uFF0C\u652F\u6301\u5BFC\u51FA <code>esm</code> \u548C <code>umd</code> \u4E24\u79CD\u6A21\u5757\u4EE3\u7801</li><li>3.\u57FA\u4E8E\u914D\u7F6E\u6587\u4EF6\u7684\u7EC4\u4EF6\u5E93\u6587\u6863\u7AD9\u70B9,\u652F\u6301\u767E\u5EA6\u7EDF\u8BA1\u548C\u4E3B\u9898\u5B9A\u5236</li><li>4.\u652F\u6301<code>\u5355\u6587\u4EF6\u7EC4\u4EF6(sfc)</code>\u548C <code>tsx,jsx</code> \u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u7F16\u5199\u98CE\u683C</li><li>5.\u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177</li><li>6.\u5F00\u7BB1\u5373\u7528\u7684\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177</li><li>7.\u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u53D1\u5E03\u5DE5\u5177\uFF0C\u53D1\u5E03\u5230 npm \u548C github, \u5E76\u81EA\u52A8\u751F\u6210\u66F4\u65B0\u65E5\u5FD7</li><li>8.\u652F\u6301 <code>Typescript</code></li><li>9.\u652F\u6301 <code>\u6697\u9ED1\u6A21\u5F0F</code></li></ul></div>',3),j={class:"card"},g=a("<h3>\u5FEB\u901F\u5F00\u59CB</h3><p><code>@varlet/cli</code> \u5185\u7F6E\u4E86<code>\u5355\u6587\u4EF6\u7EC4\u4EF6(sfc)</code>\u548C <code>tsx, jsx</code> \u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u9879\u76EE\u6A21\u677F\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>gen</code> \u547D\u4EE4\u76F4\u63A5\u751F\u6210\u3002 \u5E2E\u52A9\u7528\u6237\u76F4\u63A5\u8FDB\u5165\u7EC4\u4EF6\u672C\u8EAB\u7684\u5F00\u53D1\uFF0C\u8FD9\u91CC\u63A8\u8350\u4F7F\u7528 <code>yarn</code> \u4F5C\u4E3A\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u9996\u5148\u786E\u4FDD\u5B89\u88C5\u4E86 <code>yarn</code> \u5E76\u4E14\u6DFB\u52A0\u5230\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u4E2D\u53BB\uFF0C\u8FD9\u91CC\u4E0D\u5C55\u5F00\u4ECB\u7ECD <code>yarn</code> \u7684\u5B89\u88C5\u548C\u914D\u7F6E\u65B9\u6CD5\u3002</p>",2),u=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," \u5B89\u88C5\u547D\u4EE4\u884C\u5DE5\u5177"),t(`
yarn global add @varlet/cli
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," \u4F7F\u7528 gen \u547D\u4EE4\u751F\u6210\u9879\u76EE"),t(`
varlet-cli gen \u9879\u76EE\u540D
cd \u9879\u76EE\u540D
yarn
yarn dev
`)])],-1),_=s("p",null,"\u7136\u540E\u901A\u8FC7\u7B80\u5355\u4FEE\u6539\u4E00\u4E9B\u7EC4\u4EF6\u5E93\u6A21\u677F\u7684\u57FA\u7840\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u7EC4\u4EF6\u5E93\u7684\u5F00\u53D1\u4E86",-1),m=s("h2",null,"\u9AD8\u7EA7\u5B9A\u5236",-1),b={class:"card"},f=a("<h3>\u914D\u7F6E\u6587\u4EF6</h3><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code>varlet.config.js</code> \u7528\u6765\u7BA1\u7406\u6574\u4E2A\u7EC4\u4EF6\u5E93\u9879\u76EE\u7684\u5177\u4F53\u7EC6\u8282</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>host</code></td><td>\u5F00\u53D1\u670D\u52A1\u5668\u4E3B\u673A</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>name</code></td><td>\u7EC4\u4EF6\u5E93\u5168\u540D</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>\u7EC4\u4EF6\u5E93\u547D\u540D\u7A7A\u95F4, \u4F1A\u4F5C\u4E3A\u7EC4\u4EF6\u524D\u7F00</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>title</code></td><td>\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684\u6807\u9898</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684logo</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>\u6587\u6863\u9ED8\u8BA4\u8BED\u8A00</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7\u624B\u673A\u9884\u89C8</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>themes</code></td><td>\u6587\u6863\u4E3B\u9898</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>darkThemes</code></td><td>\u6697\u9ED1\u6A21\u5F0F\u6587\u6863\u4E3B\u9898</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>\u6587\u6863\u4EE3\u7801\u7247\u6BB5\u6837\u5F0F\u76F8\u5173</td><td><em>SiteHighlight</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>\u6587\u6863\u7EDF\u8BA1\u76F8\u5173</td><td><em>SiteAnalysis</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>pc\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E</td><td><em>SitePC</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>mobile\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E</td><td><em>SiteMobile</em></td><td><code>-</code></td></tr><tr><td><code>moduleCompatible</code></td><td>\u6A21\u5757\u517C\u5BB9\u914D\u7F6E</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr></tbody></table><h4>\u6A21\u5757\u9002\u914D\u5BF9\u8C61</h4><p>\u4E00\u4E9B\u5916\u90E8\u4F9D\u8D56\u53EF\u80FD\u9700\u8981\u8FDB\u884C\u6A21\u5757\u8BED\u6CD5\u7684\u9002\u914D\uFF0C\u4EE5\u8FBE\u5230\u53EF\u4EE5\u6B63\u786E\u7F16\u8BD1\u5230 <code>commonjs</code> \u548C <code>esmodule</code> \u7684\u76EE\u7684\uFF0C\u4F8B\u5982 <code>dayjs</code> \u7684 <code>esmodule</code> \u5199\u6CD5\u662F</p>",5),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" dayjs "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'dayjs/esm'"),t(`
`)])],-1),v=s("p",null,[t("\u800C\u4E3A\u4E86\u6784\u5EFA "),s("code",null,"commonjs"),t(" \u65F6\u7684\u5199\u6CD5\u662F")],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" * "),s("span",{class:"hljs-keyword"},"as"),t(" dayjs "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'dayjs'"),t(`
`)])],-1),x=s("p",null,[t("\u5728\u9879\u76EE\u4E2D\u6211\u4EEC\u62E5\u62B1 "),s("code",null,"esmodule"),t(" \u6A21\u5757\u4F7F\u7528\u7B2C\u4E00\u79CD\u5199\u6CD5\uFF0C\u5E76\u505A\u5982\u4E0B\u914D\u7F6E\u8FDB\u884C\u9002\u914D")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// varlet.config.js"),t(`
`),s("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),s("span",{class:"hljs-attr"},"moduleCompatible"),t(`: {
    `),s("span",{class:"hljs-string"},`"import dayjs from 'dayjs/esm'\\n"`),t(": "),s("span",{class:"hljs-string"},`"import * as dayjs from 'dayjs'\\n"`),t(`
  }
}
`)])],-1),N=a('<h4>SiteThemes</h4><p>\u4E3B\u9898\u53D8\u91CF\u76F8\u5173\uFF0C\u7531\u4E8E\u9ED8\u8BA4\u7684\u4E3B\u9898\u53D8\u91CF\u53EF\u80FD\u65F6\u5E38\u4FEE\u6539\uFF0C\u4EE5 <code>varlet</code> \u5B98\u65B9\u6587\u6863\u7684\u4E3B\u9898\u4E3A\u51C6</p><table><thead><tr><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>color-body</code></td></tr><tr><td><code>color-bar</code></td></tr><tr><td><code>color-sub-bar</code></td></tr><tr><td><code>color-text</code></td></tr><tr><td><code>color-sub-text</code></td></tr><tr><td><code>color-border</code></td></tr><tr><td><code>color-shadow</code></td></tr><tr><td><code>color-introduce-border</code></td></tr><tr><td><code>color-primary</code></td></tr><tr><td><code>color-link</code></td></tr><tr><td><code>color-type</code></td></tr><tr><td><code>color-progress</code></td></tr><tr><td><code>color-progress-track</code></td></tr><tr><td><code>color-side-bar</code></td></tr><tr><td><code>color-side-bar-active-background</code></td></tr><tr><td><code>color-app-bar</code></td></tr><tr><td><code>color-nav-button-hover-background</code></td></tr><tr><td><code>color-pc-language-active</code></td></tr><tr><td><code>color-pc-language-active-background</code></td></tr><tr><td><code>color-mobile-cell-hover</code></td></tr><tr><td><code>color-mobile-language-active</code></td></tr><tr><td><code>color-mobile-language-active-background</code></td></tr></tbody></table><h4>SiteHighlight</h4><p>\u4EE3\u7801\u7247\u6BB5\u9AD8\u4EAE\uFF0C\u57FA\u4E8E<a href="https://highlightjs.org/">highlight.js</a></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>style</code></td><td>highlight \u7684 css \u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>SiteAnalysis</h4><p>\u7EDF\u8BA1\u57CB\u70B9\u76F8\u5173</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>baidu</code></td><td>\u767E\u5EA6\u7EDF\u8BA1\u811A\u672C\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>SitePC, SiteMobile</h4><p>\u6587\u6863\u7ED3\u6784\u90E8\u5206\u76F8\u5173\uFF0C\u793A\u4F8B\u914D\u7F6E\u5982\u4E0B</p>',11),w=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),s("span",{class:"hljs-attr"},"pc"),t(`: {
    `),s("span",{class:"hljs-attr"},"redirect"),t(": "),s("span",{class:"hljs-string"},"'/home'"),t(`,
    `),s("span",{class:"hljs-attr"},"title"),t(`: {
      `),s("span",{class:"hljs-string"},"'zh-CN'"),t(": "),s("span",{class:"hljs-string"},"'\u4E00\u4E2A\u7EC4\u4EF6\u5E93'"),t(`,
    },
    `),s("span",{class:"hljs-attr"},"header"),t(`: {
      `),s("span",{class:"hljs-attr"},"darkMode"),t(": "),s("span",{class:"hljs-literal"},"null"),t(`,
      `),s("span",{class:"hljs-attr"},"i18n"),t(": "),s("span",{class:"hljs-literal"},"null"),t(`,
      `),s("span",{class:"hljs-attr"},"github"),t(": "),s("span",{class:"hljs-string"},"'https://github.com/haoziqaq/varlet'"),t(`,
    },
    `),s("span",{class:"hljs-attr"},"menu"),t(`: [
      {
        `),s("span",{class:"hljs-attr"},"text"),t(`: {
          `),s("span",{class:"hljs-string"},"'zh-CN'"),t(": "),s("span",{class:"hljs-string"},"'\u5F00\u53D1\u6307\u5357'"),t(`,
        },
        `),s("span",{class:"hljs-comment"},"// \u4FA7\u8FB9\u680F\u83DC\u5355\u76EE\u5F55"),t(`
        `),s("span",{class:"hljs-attr"},"type"),t(": "),s("span",{class:"hljs-number"},"1"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"text"),t(`: {
          `),s("span",{class:"hljs-string"},"'zh-CN'"),t(": "),s("span",{class:"hljs-string"},"'\u57FA\u672C\u4ECB\u7ECD'"),t(`,
        },
        `),s("span",{class:"hljs-attr"},"doc"),t(": "),s("span",{class:"hljs-string"},"'home'"),t(`,
        `),s("span",{class:"hljs-comment"},"// \u7D22\u5F15\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 md \u6587\u6863"),t(`
        `),s("span",{class:"hljs-attr"},"type"),t(": "),s("span",{class:"hljs-number"},"3"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"text"),t(`: {
          `),s("span",{class:"hljs-string"},"'zh-CN'"),t(": "),s("span",{class:"hljs-string"},"'\u57FA\u7840\u7EC4\u4EF6'"),t(`,
        },
        `),s("span",{class:"hljs-attr"},"type"),t(": "),s("span",{class:"hljs-number"},"1"),t(`,
      },
      {
        `),s("span",{class:"hljs-attr"},"text"),t(`: {
          `),s("span",{class:"hljs-string"},"'zh-CN'"),t(": "),s("span",{class:"hljs-string"},"'Button \u6309\u94AE'"),t(`,
        },
        `),s("span",{class:"hljs-attr"},"doc"),t(": "),s("span",{class:"hljs-string"},"'button'"),t(`,
        `),s("span",{class:"hljs-comment"},"// \u7D22\u5F15\u7EC4\u4EF6\u6839\u76EE\u5F55\u4E0B\u7684 md \u6587\u6863"),t(`
        `),s("span",{class:"hljs-attr"},"type"),t(": "),s("span",{class:"hljs-number"},"2"),t(`,
      },
    ],
  },
  `),s("span",{class:"hljs-attr"},"mobile"),t(`: {
    `),s("span",{class:"hljs-attr"},"redirect"),t(": "),s("span",{class:"hljs-string"},"'/home'"),t(`,
    `),s("span",{class:"hljs-attr"},"title"),t(`: {
      `),s("span",{class:"hljs-string"},"'zh-CN'"),t(": "),s("span",{class:"hljs-string"},"'\u4E00\u4E2A\u7EC4\u4EF6\u5E93'"),t(`,
    },
    `),s("span",{class:"hljs-attr"},"header"),t(`: {
      `),s("span",{class:"hljs-attr"},"darkMode"),t(": "),s("span",{class:"hljs-literal"},"null"),t(`,
      `),s("span",{class:"hljs-attr"},"i18n"),t(": "),s("span",{class:"hljs-literal"},"null"),t(`,
      `),s("span",{class:"hljs-attr"},"github"),t(": "),s("span",{class:"hljs-string"},"'https://github.com/haoziqaq/varlet'"),t(`,
    },
  },
}
`)])],-1),S={class:"card"},z=s("h3",null,"\u547D\u4EE4\u76F8\u5173",-1),V=s("h4",null,"\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668",-1),$=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`varlet-cli dev
`)])],-1),A=s("h4",null,"\u6784\u5EFA\u6587\u6863\u7AD9\u70B9",-1),E=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`varlet-cli build
`)])],-1),L=s("h4",null,"\u9884\u89C8\u6587\u6863\u7AD9\u70B9",-1),M=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`varlet-cli preview
`)])],-1),T=s("h4",null,"\u6784\u5EFA\u7EC4\u4EF6\u5E93\u4EE3\u7801",-1),G=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`varlet-cli compile
`)])],-1),O=s("h4",null,"\u6267\u884C\u6240\u6709\u7684\u5355\u5143\u6D4B\u8BD5",-1),q=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`varlet-cli test
`)])],-1),H=s("h4",null,"\u4EE5watch\u6A21\u5F0F\u6267\u884C\u5355\u5143\u6D4B\u8BD5",-1),B=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`varlet-cli test -w
or
varlet-cli test -wa
`)])],-1),D=s("h4",null,"\u68C0\u67E5\u4EE3\u7801",-1),I=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`varlet-cli lint
`)])],-1),P=s("h4",null,"\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u6587\u4EF6\u5939",-1),R=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`varlet-cli create <componentName>
`)])],-1),F=s("h4",null,"\u751F\u6210\u4E00\u4E2A\u9879\u76EE\u6A21\u677F",-1),J=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`varlet-cli gen <projectName>
`)])],-1),W={class:"card"},K=s("h3",null,"babel",-1),Q=s("p",null,[t("\u5BF9 "),s("code",null,"babel"),t(" \u8FDB\u884C\u914D\u7F6E\uFF0C\u9996\u5148\u5728 "),s("code",null,"package.json"),t(" \u4E2D\u6307\u5B9A\u76EE\u6807\u6D4F\u89C8\u5668")],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`{
  `),s("span",{class:"hljs-attr"},'"browserslist"'),t(`: [
    `),s("span",{class:"hljs-string"},'"Chrome >= 51"'),t(`,
    `),s("span",{class:"hljs-string"},'"iOS >= 10"'),t(`
  ]
}
`)])],-1),X=s("p",null,[t("\u521B\u5EFA "),s("code",null,"babel.config,js")],-1),Y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// babel.config.js"),t(`
`),s("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),s("span",{class:"hljs-attr"},"presets"),t(`: [
    [
      `),s("span",{class:"hljs-string"},"'@varlet/cli/preset'"),t(`,
      {
        `),s("span",{class:"hljs-attr"},"loose"),t(": "),s("span",null,"process.env"),t(".NODE_ENV === "),s("span",{class:"hljs-string"},"'compile'"),t(`,
      },
    ],
  ],
}
`)])],-1),Z={class:"card"},ss=a("<h3>git\u548Cnpm</h3><h4>git-hook</h4><p><code>husky</code>\uFF0C<code>lint-staged</code> \u914D\u5408 <code>eslint</code>\uFF0C<code>stylelint</code>\uFF0C<code>commitlint</code> \u505Acommit\u524D\u7684\u68C0\u67E5\uFF0C<code>package.json</code> \u914D\u7F6E\u5982\u4E0B</p>",3),ts=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`{
  `),s("span",{class:"hljs-attr"},'"scripts"'),t(`: {
    `),s("span",{class:"hljs-attr"},'"prepare"'),t(": "),s("span",{class:"hljs-string"},'"husky install"'),t(`,
    `),s("span",{class:"hljs-attr"},'"commit"'),t(": "),s("span",{class:"hljs-string"},'"git-cz"'),t(`
  },
  `),s("span",{class:"hljs-attr"},'"config"'),t(`: {
    `),s("span",{class:"hljs-attr"},'"commitizen"'),t(`: {
      `),s("span",{class:"hljs-attr"},'"path"'),t(": "),s("span",{class:"hljs-string"},'"cz-conventional-changelog"'),t(`
    }
  },
  `),s("span",{class:"hljs-attr"},'"lint-staged"'),t(`: {
    `),s("span",{class:"hljs-attr"},'"*.{ts,tsx,js,vue,less}"'),t(": "),s("span",{class:"hljs-string"},'"prettier --write"'),t(`,
    `),s("span",{class:"hljs-attr"},'"*.{ts,tsx,js,vue}"'),t(": "),s("span",{class:"hljs-string"},'"eslint --fix"'),t(`,
    `),s("span",{class:"hljs-attr"},'"*.{vue,css,less}"'),t(": "),s("span",{class:"hljs-string"},'"stylelint --fix"'),t(`
  },
  `),s("span",{class:"hljs-attr"},'"eslintConfig"'),t(`: {
    `),s("span",{class:"hljs-attr"},'"root"'),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    `),s("span",{class:"hljs-attr"},'"ignorePatterns"'),t(`: [
      `),s("span",{class:"hljs-string"},'"es/**"'),t(`,
      `),s("span",{class:"hljs-string"},'"umd/**"'),t(`,
      `),s("span",{class:"hljs-string"},'"site/**"'),t(`,
      `),s("span",{class:"hljs-string"},'"public/**"'),t(`,
      `),s("span",{class:"hljs-string"},'"src/*/__tests__/**"'),t(`,
      `),s("span",{class:"hljs-string"},'".varlet/**"'),t(`
    ],
    `),s("span",{class:"hljs-attr"},'"extends"'),t(`: [
      `),s("span",{class:"hljs-string"},'"@varlet"'),t(`
    ]
  },
  `),s("span",{class:"hljs-attr"},'"stylelint"'),t(`: {
    `),s("span",{class:"hljs-attr"},'"extends"'),t(`: [
      `),s("span",{class:"hljs-string"},'"@varlet/stylelint-config"'),t(`
    ],
    `),s("span",{class:"hljs-attr"},'"ignoreFiles"'),t(`: [
      `),s("span",{class:"hljs-string"},'"es/**"'),t(`,
      `),s("span",{class:"hljs-string"},'"umd/**"'),t(`,
      `),s("span",{class:"hljs-string"},'"site/**"'),t(`,
      `),s("span",{class:"hljs-string"},'"coverage/**"'),t(`,
      `),s("span",{class:"hljs-string"},'"public/**"'),t(`,
      `),s("span",{class:"hljs-string"},'"highlight/**"'),t(`
    ]
  }
}
`)])],-1),ls=s("p",null,[t("\u521B\u5EFA "),s("code",null,"commitlint.config.js")],-1),es=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-comment"},"// commitlint.config.js"),t(`
`),s("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),s("span",{class:"hljs-attr"},"extends"),t(": ["),s("span",{class:"hljs-string"},"'@commitlint/config-conventional'"),t(`],
}
`)])],-1),ns=s("p",null,[t("\u521B\u5EFA "),s("code",null,".prettierignore")],-1),as=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`// .prettierignore
coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
`)])],-1),cs={class:"card"},ds=s("h3",null,"typescript",-1),os=s("p",null,[t("\u521B\u5EFA "),s("code",null,"tsconfig.json")],-1),rs=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`{
  `),s("span",{class:"hljs-attr"},'"compilerOptions"'),t(`: {
    `),s("span",{class:"hljs-attr"},'"strict"'),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    `),s("span",{class:"hljs-attr"},'"downlevelIteration"'),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    `),s("span",{class:"hljs-attr"},'"declaration"'),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    `),s("span",{class:"hljs-attr"},'"skipLibCheck"'),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    `),s("span",{class:"hljs-attr"},'"esModuleInterop"'),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    `),s("span",{class:"hljs-attr"},'"allowJs"'),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    `),s("span",{class:"hljs-attr"},'"lib"'),t(": ["),s("span",{class:"hljs-string"},'"esnext"'),t(", "),s("span",{class:"hljs-string"},'"dom"'),t(`],
    `),s("span",{class:"hljs-attr"},'"allowSyntheticDefaultImports"'),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    `),s("span",{class:"hljs-attr"},'"jsx"'),t(": "),s("span",{class:"hljs-string"},'"preserve"'),t(`
  }
}
`)])],-1),hs={class:"card"},is=s("h3",null,"\u53D1\u5E03\u4EE3\u7801",-1),ps=s("p",null,[t("\u4F7F\u7528 "),s("code",null,"release-it"),t(" \u548C "),s("code",null,"conventional-changelog"),t(" \u8FDB\u884C\u4EE3\u7801\u53D1\u5E03\u548C\u66F4\u65B0\u65E5\u5FD7\u7684\u751F\u6210\uFF0C"),s("code",null,"package.json"),t(" \u914D\u7F6E\u5982\u4E0B")],-1),js=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),t(`{
  `),s("span",{class:"hljs-attr"},'"scripts"'),t(`: {
    `),s("span",{class:"hljs-attr"},'"genlog"'),t(": "),s("span",{class:"hljs-string"},'"conventional-changelog -p angular -i CHANGELOG.md -s"'),t(`,
    `),s("span",{class:"hljs-attr"},'"genAllLog"'),t(": "),s("span",{class:"hljs-string"},'"conventional-changelog -p angular -i CHANGELOG.md -s -r 0"'),t(`,
    `),s("span",{class:"hljs-attr"},'"release"'),t(": "),s("span",{class:"hljs-string"},'"yarn compile && release-it"'),t(`
  },
  `),s("span",{class:"hljs-attr"},'"release-it"'),t(`: {
    `),s("span",{class:"hljs-attr"},'"git"'),t(`: {
      `),s("span",{class:"hljs-attr"},'"changelog"'),t(": "),s("span",{class:"hljs-string"},'"git log --pretty=format:\\"* %s (%h)\\" ${from}...${to}"'),t(`,
      `),s("span",{class:"hljs-attr"},'"tagName"'),t(": "),s("span",{class:"hljs-string"},'"v${version}"'),t(`,
      `),s("span",{class:"hljs-attr"},'"commitMessage"'),t(": "),s("span",{class:"hljs-string"},'"chore: release ${version}"'),t(`,
      `),s("span",{class:"hljs-attr"},'"requireCleanWorkingDir"'),t(": "),s("span",{class:"hljs-literal"},"false"),t(`
    },
    `),s("span",{class:"hljs-attr"},'"plugins"'),t(`: {
      `),s("span",{class:"hljs-attr"},'"@release-it/conventional-changelog"'),t(`: {
        `),s("span",{class:"hljs-attr"},'"preset"'),t(": "),s("span",{class:"hljs-string"},'"angular"'),t(`,
        `),s("span",{class:"hljs-attr"},'"infile"'),t(": "),s("span",{class:"hljs-string"},'"CHANGELOG.md"'),t(`
      }
    }
  }
}
`)])],-1),gs=s("h4",null,"\u53D1\u5E03\u524D\u6CE8\u610F",-1),us=s("ul",null,[s("li",null,"1.npm \u548C yarn \u7684\u4ED3\u5E93\u6E90\u5FC5\u987B\u6307\u5411 npm \u5B98\u65B9\u955C\u50CF"),s("li",null,"2.npm \u548C yarn \u90FD\u5FC5\u987B\u6267\u884C login \u547D\u4EE4\u8FDB\u884C\u7528\u6237\u767B\u5F55")],-1);function _s(ms,bs,fs,ys,vs,ks){const l=d("var-site-code-example");return o(),r("div",i,[p,s("div",j,[g,e(l,null,{default:n(()=>[u]),_:1}),_]),m,s("div",b,[f,e(l,null,{default:n(()=>[y]),_:1}),v,e(l,null,{default:n(()=>[k]),_:1}),x,e(l,null,{default:n(()=>[C]),_:1}),N,e(l,null,{default:n(()=>[w]),_:1})]),s("div",S,[z,V,e(l,null,{default:n(()=>[$]),_:1}),A,e(l,null,{default:n(()=>[E]),_:1}),L,e(l,null,{default:n(()=>[M]),_:1}),T,e(l,null,{default:n(()=>[G]),_:1}),O,e(l,null,{default:n(()=>[q]),_:1}),H,e(l,null,{default:n(()=>[B]),_:1}),D,e(l,null,{default:n(()=>[I]),_:1}),P,e(l,null,{default:n(()=>[R]),_:1}),F,e(l,null,{default:n(()=>[J]),_:1})]),s("div",W,[K,Q,e(l,null,{default:n(()=>[U]),_:1}),X,e(l,null,{default:n(()=>[Y]),_:1})]),s("div",Z,[ss,e(l,null,{default:n(()=>[ts]),_:1}),ls,e(l,null,{default:n(()=>[es]),_:1}),ns,e(l,null,{default:n(()=>[as]),_:1})]),s("div",cs,[ds,os,e(l,null,{default:n(()=>[rs]),_:1})]),s("div",hs,[is,ps,e(l,null,{default:n(()=>[js]),_:1}),gs,us])])}var Ns=c(h,[["render",_s]]);export{Ns as default};
