import{_ as c}from"./elevation.229458c1.js";import{e as o,o as a,c as r,a as s,i as e,j as n,U as d,m as t}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=d('<h1>Varlet Cli</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5F00\u7BB1\u5373\u7528\u7684 <code>Vue3\u7EC4\u4EF6\u5E93</code> \u5FEB\u901F\u6210\u578B\u5DE5\u5177\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u547D\u4EE4\u548C\u5DE5\u5177\u53BB\u89E3\u51B3\u7EC4\u4EF6\u5E93\u5F00\u53D1\u4E0A\u7684\u95EE\u9898</p></div><div class="card"><h3>\u7279\u6027</h3><ul><li>\u{1F4E6} \u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u73AF\u5883</li><li>\u{1F4E6} \u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u7F16\u8BD1\u5DE5\u5177\uFF0C\u652F\u6301\u5BFC\u51FA <code>esm</code> \u548C <code>umd</code> \u4E24\u79CD\u6A21\u5757\u4EE3\u7801</li><li>\u{1F6E0}\uFE0F \u57FA\u4E8E\u914D\u7F6E\u6587\u4EF6\u7684\u7EC4\u4EF6\u5E93\u6587\u6863\u7AD9\u70B9\uFF0C\u652F\u6301\u767E\u5EA6\u7EDF\u8BA1\u548C\u4E3B\u9898\u5B9A\u5236</li><li>\u{1F6E0}\uFE0F \u652F\u6301 <code>\u5355\u6587\u4EF6\u7EC4\u4EF6(sfc)</code> \u548C <code>tsx\uFF0Cjsx</code> \u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u7F16\u5199\u98CE\u683C</li><li>\u{1F4E6} \u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177</li><li>\u{1F4E6} \u5F00\u7BB1\u5373\u7528\u7684\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177</li><li>\u{1F4E6} \u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u53D1\u5E03\u5DE5\u5177,\u53D1\u5E03\u5230 npm \u548C github, \u5E76\u81EA\u52A8\u751F\u6210\u66F4\u65B0\u65E5\u5FD7</li><li>\u{1F4AA} \u652F\u6301 <code>Typescript</code></li><li>\u{1F4AA} \u652F\u6301 <code>\u6697\u9ED1\u6A21\u5F0F</code></li><li>\u{1F680} \u57FA\u4E8E <code>pnpm</code></li></ul></div>',3),u={class:"card"},j=s("h3",null,"\u5FEB\u901F\u5F00\u59CB",-1),_=s("p",null,[s("code",null,"@varlet/cli"),t(" \u5185\u7F6E\u4E86 "),s("code",null,"\u5355\u6587\u4EF6\u7EC4\u4EF6(sfc)"),t(" \u548C "),s("code",null,"tsx\uFF0Cjsx"),t(" \u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u9879\u76EE\u6A21\u677F\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),s("code",null,"gen"),t(" \u547D\u4EE4\u76F4\u63A5\u751F\u6210\u3002 \u5E2E\u52A9\u7528\u6237\u76F4\u63A5\u8FDB\u5165\u7EC4\u4EF6\u672C\u8EAB\u7684\u5F00\u53D1\uFF0C\u63A8\u8350\u4F7F\u7528 "),s("code",null,"pnpm"),t(" \u4F5C\u4E3A\u5305\u7BA1\u7406\u5DE5\u5177\u3002")],-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," \u5B89\u88C5\u547D\u4EE4\u884C\u5DE5\u5177"),t(`
pnpm add @varlet/cli -g
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," \u4F7F\u7528 gen \u547D\u4EE4\u751F\u6210\u9879\u76EE"),t(`
varlet-cli gen \u9879\u76EE\u540D
cd \u9879\u76EE\u540D
pnpm install
pnpm dev
`)])],-1),g=s("p",null,"\u7136\u540E\u901A\u8FC7\u7B80\u5355\u4FEE\u6539\u4E00\u4E9B\u7EC4\u4EF6\u5E93\u6A21\u677F\u7684\u57FA\u7840\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u7EC4\u4EF6\u5E93\u7684\u5F00\u53D1\u4E86",-1),b=d('<h2>\u9AD8\u7EA7\u5B9A\u5236</h2><div class="card"><h3>\u914D\u7F6E\u6587\u4EF6</h3><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code>varlet.config.js</code> \u7528\u6765\u7BA1\u7406\u6574\u4E2A\u7EC4\u4EF6\u5E93\u9879\u76EE\u7684\u5177\u4F53\u7EC6\u8282</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>host</code></td><td>\u5F00\u53D1\u670D\u52A1\u5668\u4E3B\u673A</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>name</code></td><td>\u7EC4\u4EF6\u5E93\u5168\u540D</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>\u7EC4\u4EF6\u5E93\u547D\u540D\u7A7A\u95F4, \u4F1A\u4F5C\u4E3A\u7EC4\u4EF6\u524D\u7F00</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>title</code></td><td>\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684\u6807\u9898</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684logo</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>\u6587\u6863\u9ED8\u8BA4\u8BED\u8A00</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7\u624B\u673A\u9884\u89C8</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>themes</code></td><td>\u6587\u6863\u4E3B\u9898</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>darkThemes</code></td><td>\u6697\u9ED1\u6A21\u5F0F\u6587\u6863\u4E3B\u9898</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>\u6587\u6863\u4EE3\u7801\u7247\u6BB5\u6837\u5F0F\u76F8\u5173</td><td><em>SiteHighlight</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>\u6587\u6863\u7EDF\u8BA1\u76F8\u5173</td><td><em>SiteAnalysis</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>pc\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E</td><td><em>SitePC</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>mobile\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E</td><td><em>SiteMobile</em></td><td><code>-</code></td></tr><tr><td><code>moduleCompatible</code></td><td>\u6A21\u5757\u517C\u5BB9\u914D\u7F6E</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr></tbody></table></div>',2),v={class:"card"},f=s("h3",null,"\u6A21\u5757\u9002\u914D\u5BF9\u8C61",-1),y=s("p",null,[t("\u4E00\u4E9B\u5916\u90E8\u4F9D\u8D56\u53EF\u80FD\u9700\u8981\u8FDB\u884C\u6A21\u5757\u8BED\u6CD5\u7684\u9002\u914D\uFF0C\u4EE5\u8FBE\u5230\u53EF\u4EE5\u6B63\u786E\u7F16\u8BD1\u5230 "),s("code",null,"commonjs"),t(" \u548C "),s("code",null,"esmodule"),t(" \u7684\u76EE\u7684\uFF0C\u4F8B\u5982 "),s("code",null,"dayjs"),t(" \u7684 "),s("code",null,"esmodule"),t(" \u5199\u6CD5\u662F")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" dayjs "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'dayjs/esm'"),t(`
`)])],-1),k=s("p",null,[t("\u800C\u4E3A\u4E86\u6784\u5EFA "),s("code",null,"commonjs"),t(" \u65F6\u7684\u5199\u6CD5\u662F")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" * "),s("span",{class:"hljs-keyword"},"as"),t(" dayjs "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'dayjs'"),t(`
`)])],-1),w=s("p",null,[t("\u5728\u9879\u76EE\u4E2D\u6211\u4EEC\u62E5\u62B1 "),s("code",null,"esmodule"),t(" \u6A21\u5757\u4F7F\u7528\u7B2C\u4E00\u79CD\u5199\u6CD5\uFF0C\u5E76\u505A\u5982\u4E0B\u914D\u7F6E\u8FDB\u884C\u9002\u914D")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// varlet.config.js"),t(`
`),s("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),s("span",{class:"hljs-attr"},"moduleCompatible"),t(`: {
    `),s("span",{class:"hljs-string"},`"import dayjs from 'dayjs/esm'\\n"`),t(": "),s("span",{class:"hljs-string"},`"import * as dayjs from 'dayjs'\\n"`),t(`
  }
}
`)])],-1),S=d('<div class="card"><h3>SiteThemes</h3><p>\u4E3B\u9898\u53D8\u91CF\u76F8\u5173\uFF0C\u7531\u4E8E\u9ED8\u8BA4\u7684\u4E3B\u9898\u53D8\u91CF\u53EF\u80FD\u65F6\u5E38\u4FEE\u6539\uFF0C\u4EE5 <code>varlet</code> \u5B98\u65B9\u6587\u6863\u7684\u4E3B\u9898\u4E3A\u51C6</p><table><thead><tr><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>color-body</code></td></tr><tr><td><code>color-bar</code></td></tr><tr><td><code>color-sub-bar</code></td></tr><tr><td><code>color-text</code></td></tr><tr><td><code>color-sub-text</code></td></tr><tr><td><code>color-border</code></td></tr><tr><td><code>color-shadow</code></td></tr><tr><td><code>color-introduce-border</code></td></tr><tr><td><code>color-primary</code></td></tr><tr><td><code>color-link</code></td></tr><tr><td><code>color-type</code></td></tr><tr><td><code>color-progress</code></td></tr><tr><td><code>color-progress-track</code></td></tr><tr><td><code>color-side-bar</code></td></tr><tr><td><code>color-side-bar-active-background</code></td></tr><tr><td><code>color-app-bar</code></td></tr><tr><td><code>color-nav-button-hover-background</code></td></tr><tr><td><code>color-mobile-cell-hover</code></td></tr><tr><td><code>color-pc-language-active</code></td></tr><tr><td><code>color-pc-language-active-background</code></td></tr><tr><td><code>color-mobile-language-active</code></td></tr><tr><td><code>color-mobile-language-active-background</code></td></tr><tr><td><code>color-hl-background</code></td></tr><tr><td><code>color-hl-code</code></td></tr><tr><td><code>color-hl-border</code></td></tr><tr><td><code>color-hl-group-a</code></td></tr><tr><td><code>color-hl-group-b</code></td></tr><tr><td><code>color-hl-group-c</code></td></tr><tr><td><code>color-hl-group-d</code></td></tr><tr><td><code>color-hl-group-e</code></td></tr><tr><td><code>color-hl-group-f</code></td></tr><tr><td><code>color-hl-group-g</code></td></tr><tr><td><code>color-hl-group-h</code></td></tr><tr><td><code>color-hl-group-i</code></td></tr></tbody></table></div><div class="card"><h3>SiteHighlight</h3><p>\u4EE3\u7801\u7247\u6BB5\u9AD8\u4EAE\uFF0C\u57FA\u4E8E<a href="https://highlightjs.org/">highlight.js</a></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>style</code></td><td>highlight\u7684css\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>SiteAnalysis</h3><p>\u7EDF\u8BA1\u57CB\u70B9\u76F8\u5173</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>baidu</code></td><td>\u767E\u5EA6\u7EDF\u8BA1\u811A\u672C\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div>',3),V={class:"card"},z=s("h3",null,"SitePC, SiteMobile",-1),T=s("p",null,"\u6587\u6863\u7ED3\u6784\u90E8\u5206\u76F8\u5173\uFF0C\u793A\u4F8B\u914D\u7F6E\u5982\u4E0B",-1),M=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),s("span",{class:"hljs-attr"},"pc"),t(`: {
    `),s("span",{class:"hljs-attr"},"redirect"),t(": "),s("span",{class:"hljs-string"},"'/home'"),t(`,
    `),s("span",{class:"hljs-attr"},"title"),t(`: {
      `),s("span",{class:"hljs-string"},"'zh-CN'"),t(": "),s("span",{class:"hljs-string"},"'\u4E00\u4E2A\u7EC4\u4EF6\u5E93'"),t(`,
    },
    `),s("span",{class:"hljs-attr"},"header"),t(`: {
      `),s("span",{class:"hljs-attr"},"darkMode"),t(": "),s("span",{class:"hljs-literal"},"null"),t(`,
      `),s("span",{class:"hljs-attr"},"i18n"),t(": "),s("span",{class:"hljs-literal"},"null"),t(`,
      `),s("span",{class:"hljs-attr"},"github"),t(": "),s("span",{class:"hljs-string"},"'https://github.com/varletjs/varlet'"),t(`,
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
        `),s("span",{class:"hljs-comment"},"// \u7D22\u5F15\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684md\u6587\u6863"),t(`
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
        `),s("span",{class:"hljs-comment"},"// \u7D22\u5F15\u7EC4\u4EF6\u6839\u76EE\u5F55\u4E0B\u7684md\u6587\u6863"),t(`
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
      `),s("span",{class:"hljs-attr"},"playground"),t(": "),s("span",{class:"hljs-literal"},"null"),t(`,
      `),s("span",{class:"hljs-attr"},"github"),t(": "),s("span",{class:"hljs-string"},"'https://github.com/varletjs/varlet'"),t(`,
    },
  },
}
`)])],-1),B={class:"card"},$=s("h3",null,"\u547D\u4EE4\u76F8\u5173",-1),E=s("h4",null,"\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668",-1),A=s("pre",{class:"hljs"},[s("code",null,`varlet-cli dev
`)],-1),I=s("h4",null,"\u6784\u5EFA\u6587\u6863\u7AD9\u70B9",-1),L=s("pre",{class:"hljs"},[s("code",null,`varlet-cli build
`)],-1),O=s("h4",null,"\u9884\u89C8\u6587\u6863\u7AD9\u70B9",-1),P=s("pre",{class:"hljs"},[s("code",null,`varlet-cli preview
`)],-1),D=s("h4",null,"\u6784\u5EFA\u7EC4\u4EF6\u5E93\u4EE3\u7801",-1),G=s("pre",{class:"hljs"},[s("code",null,`varlet-cli compile
`)],-1),H=s("h4",null,"\u6267\u884C\u6240\u6709\u7684\u5355\u5143\u6D4B\u8BD5",-1),R=s("pre",{class:"hljs"},[s("code",null,`varlet-cli test
`)],-1),F=s("h4",null,"\u4EE5 watch \u6A21\u5F0F\u6267\u884C\u5355\u5143\u6D4B\u8BD5",-1),J=s("pre",{class:"hljs"},[s("code",null,`varlet-cli test -w
or
varlet-cli test -wa
`)],-1),U=s("h4",null,"\u68C0\u67E5\u4EE3\u7801",-1),q=s("pre",{class:"hljs"},[s("code",null,`varlet-cli lint
`)],-1),K=s("h4",null,"\u6821\u9A8C\u63D0\u4EA4\u4FE1\u606F",-1),Q=s("pre",{class:"hljs"},[s("code",null,`varlet-cli commit-lint
`)],-1),W=s("h4",null,"\u751F\u6210\u66F4\u65B0\u65E5\u5FD7",-1),X=s("pre",{class:"hljs"},[s("code",null,`varlet-cli changelog
`)],-1),Y=s("h4",null,"\u53D1\u5E03\u7EC4\u4EF6\u5E93",-1),Z=s("pre",{class:"hljs"},[s("code",null,`varlet-cli release
`)],-1),ss=s("h4",null,"\u751F\u6210\u4E00\u4E2A\u9879\u76EE\u6A21\u677F",-1),ts=s("pre",{class:"hljs"},[s("code",null,`varlet-cli gen <projectName>
`)],-1),ls={class:"card"},es=s("h3",null,"Babel",-1),ns=s("p",null,[t("\u5BF9 "),s("code",null,"babel"),t(" \u8FDB\u884C\u914D\u7F6E\uFF0C\u9996\u5148\u5728 "),s("code",null,"package.json"),t(" \u4E2D\u6307\u5B9A\u76EE\u6807\u6D4F\u89C8\u5668")],-1),ds=s("pre",{class:"hljs"},[s("code",null,[t(`{
  `),s("span",{class:"hljs-attr"},'"browserslist"'),t(`: [
    `),s("span",{class:"hljs-string"},'"Chrome >= 51"'),t(`,
    `),s("span",{class:"hljs-string"},'"iOS >= 10"'),t(`
  ]
}
`)])],-1),cs=s("p",null,[t("\u521B\u5EFA "),s("code",null,"babel.config,js")],-1),os=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// babel.config.js"),t(`
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
`)])],-1),as={class:"card"},rs=d("<h3>Git \u548C Npm</h3><h4>Git-hook</h4><p><code>simple-git-hooks</code>\uFF0C<code>lint-staged</code> \u914D\u5408 <code>eslint</code>\uFF0C<code>stylelint</code>\uFF0C<code>varlet-cli commit-lint</code> \u505Acommit\u524D\u7684\u68C0\u67E5\uFF0C<code>package.json</code> \u914D\u7F6E\u5982\u4E0B</p>",3),hs=s("pre",{class:"hljs"},[s("code",null,[t(`{
  `),s("span",{class:"hljs-attr"},'"simple-git-hooks"'),t(`: {
    `),s("span",{class:"hljs-attr"},'"pre-commit"'),t(": "),s("span",{class:"hljs-string"},'"pnpm exec lint-staged --allow-empty --concurrent false"'),t(`,
    `),s("span",{class:"hljs-attr"},'"commit-msg"'),t(": "),s("span",{class:"hljs-string"},'"npx --no-install varlet-cli commit-lint $1"'),t(`
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
`)])],-1),is=s("p",null,"\u6302\u8F7D\u94A9\u5B50",-1),ps=s("pre",{class:"hljs"},[s("code",null,`npx simple-git-hooks
`)],-1),us=s("p",null,[t("\u521B\u5EFA "),s("code",null,".prettierignore")],-1),js=s("pre",{class:"hljs"},[s("code",null,`// .prettierignore
coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
`)],-1),_s={class:"card"},ms=s("h3",null,"Typescript",-1),gs=s("p",null,[t("\u521B\u5EFA "),s("code",null,"tsconfig.json")],-1),bs=s("pre",{class:"hljs"},[s("code",null,[t(`{
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
`)])],-1),vs=s("div",{class:"card"},[s("h3",null,"\u53D1\u5E03\u524D\u6CE8\u610F"),s("ul",null,[s("li",null,[t("1."),s("code",null,"npm"),t(" \u7684\u4ED3\u5E93\u6E90\u5FC5\u987B\u6307\u5411 "),s("code",null,"npm"),t(" \u5B98\u65B9\u955C\u50CF")]),s("li",null,[t("2.\u6267\u884C "),s("code",null,"npm login"),t(" \u8FDB\u884C\u767B\u5F55")])])],-1);function fs(ys,xs,ks,Cs,ws,Ns){const l=o("var-site-code-example");return a(),r("div",i,[p,s("div",u,[j,_,e(l,null,{default:n(()=>[m]),_:1}),g]),b,s("div",v,[f,y,e(l,null,{default:n(()=>[x]),_:1}),k,e(l,null,{default:n(()=>[C]),_:1}),w,e(l,null,{default:n(()=>[N]),_:1})]),S,s("div",V,[z,T,e(l,null,{default:n(()=>[M]),_:1})]),s("div",B,[$,E,e(l,null,{default:n(()=>[A]),_:1}),I,e(l,null,{default:n(()=>[L]),_:1}),O,e(l,null,{default:n(()=>[P]),_:1}),D,e(l,null,{default:n(()=>[G]),_:1}),H,e(l,null,{default:n(()=>[R]),_:1}),F,e(l,null,{default:n(()=>[J]),_:1}),U,e(l,null,{default:n(()=>[q]),_:1}),K,e(l,null,{default:n(()=>[Q]),_:1}),W,e(l,null,{default:n(()=>[X]),_:1}),Y,e(l,null,{default:n(()=>[Z]),_:1}),ss,e(l,null,{default:n(()=>[ts]),_:1})]),s("div",ls,[es,ns,e(l,null,{default:n(()=>[ds]),_:1}),cs,e(l,null,{default:n(()=>[os]),_:1})]),s("div",as,[rs,e(l,null,{default:n(()=>[hs]),_:1}),is,e(l,null,{default:n(()=>[ps]),_:1}),us,e(l,null,{default:n(()=>[js]),_:1})]),s("div",_s,[ms,gs,e(l,null,{default:n(()=>[bs]),_:1})]),vs])}var zs=c(h,[["render",fs]]);export{zs as default};
