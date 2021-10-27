import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as n}from"./vendor.ea41cd30.js";const e={components:{}},l={class:"varlet-site-doc"},o=n(`<h1>@varlet/cli</h1><p>\u5F00\u7BB1\u5373\u7528\u7684<code>Vue3\u7EC4\u4EF6\u5E93</code>\u5FEB\u901F\u6210\u578B\u5DE5\u5177\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u547D\u4EE4\u548C\u5DE5\u5177\u53BB\u89E3\u51B3\u7EC4\u4EF6\u5E93\u5F00\u53D1\u4E0A\u7684\u95EE\u9898</p><div class="card"><h3>\u7279\u6027</h3><ul><li>1.\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u73AF\u5883</li><li>2.\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u7F16\u8BD1\u5DE5\u5177\uFF0C\u652F\u6301\u5BFC\u51FA<code>esm</code>\u548C<code>umd</code>\u4E24\u79CD\u6A21\u5757\u4EE3\u7801</li><li>3.\u57FA\u4E8E\u914D\u7F6E\u6587\u4EF6\u7684\u7EC4\u4EF6\u5E93\u6587\u6863\u7AD9\u70B9,\u652F\u6301\u767E\u5EA6\u7EDF\u8BA1\u548C\u4E3B\u9898\u5B9A\u5236</li><li>4.\u652F\u6301<code>\u5355\u6587\u4EF6\u7EC4\u4EF6(sfc)</code>\u548C<code>tsx,jsx</code>\u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u7F16\u5199\u98CE\u683C</li><li>5.\u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177</li><li>6.\u5F00\u7BB1\u5373\u7528\u7684\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177</li><li>7.\u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u53D1\u5E03\u5DE5\u5177,\u53D1\u5E03\u5230npm\u548Cgithub,\u5E76\u81EA\u52A8\u751F\u6210\u66F4\u65B0\u65E5\u5FD7</li><li>8.\u652F\u6301<code>Typescript</code></li></ul></div><div class="card"><h3>\u5FEB\u901F\u5F00\u59CB</h3><p><code>@varlet/cli</code>\u5185\u7F6E\u4E86<code>\u5355\u6587\u4EF6\u7EC4\u4EF6(sfc)</code>\u548C<code>tsx, jsx</code>\u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u9879\u76EE\u6A21\u677F\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>gen</code>\u547D\u4EE4\u76F4\u63A5\u751F\u6210\u3002 \u5E2E\u52A9\u7528\u6237\u76F4\u63A5\u8FDB\u5165\u7EC4\u4EF6\u672C\u8EAB\u7684\u5F00\u53D1\uFF0C\u8FD9\u91CC\u63A8\u8350\u4F7F\u7528<code>yarn</code>\u4F5C\u4E3A\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u9996\u5148\u786E\u4FDD\u5B89\u88C5\u4E86<code>yarn</code>\u5E76\u4E14\u6DFB\u52A0\u5230\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\u4E2D\u53BB\uFF0C\u8FD9\u91CC\u4E0D\u5C55\u5F00\u4ECB\u7ECD<code>yarn</code>\u7684\u5B89\u88C5\u548C\u914D\u7F6E\u65B9\u6CD5\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> \u5B89\u88C5\u547D\u4EE4\u884C\u5DE5\u5177</span>
yarn global add @varlet/cli
<span class="hljs-meta">#</span><span class="bash"> \u4F7F\u7528gen\u547D\u4EE4\u751F\u6210\u9879\u76EE</span>
varlet-cli gen \u9879\u76EE\u540D
cd \u9879\u76EE\u540D
yarn
yarn dev
</code></pre><p>\u7136\u540E\u901A\u8FC7\u7B80\u5355\u4FEE\u6539\u4E00\u4E9B\u7EC4\u4EF6\u5E93\u6A21\u677F\u7684\u57FA\u7840\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u7EC4\u4EF6\u5E93\u7684\u5F00\u53D1\u4E86</p></div><h2>\u9AD8\u7EA7\u5B9A\u5236</h2><div class="card"><h3>\u914D\u7F6E\u6587\u4EF6</h3><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684<code>varlet.config.js</code>\u7528\u6765\u7BA1\u7406\u6574\u4E2A\u7EC4\u4EF6\u5E93\u9879\u76EE\u7684\u5177\u4F53\u7EC6\u8282</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>host</code></td><td>\u5F00\u53D1\u670D\u52A1\u5668\u4E3B\u673A</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>name</code></td><td>\u7EC4\u4EF6\u5E93\u5168\u540D</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>\u7EC4\u4EF6\u5E93\u547D\u540D\u7A7A\u95F4, \u4F1A\u4F5C\u4E3A\u7EC4\u4EF6\u524D\u7F00</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>title</code></td><td>\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684\u6807\u9898</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684logo</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>\u6587\u6863\u9ED8\u8BA4\u8BED\u8A00</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7\u624B\u673A\u9884\u89C8</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>themes</code></td><td>\u6587\u6863\u4E3B\u9898</td><td><em>SiteThemes</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>\u6587\u6863\u4EE3\u7801\u7247\u6BB5\u6837\u5F0F\u76F8\u5173</td><td><em>SiteHighlight</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>\u6587\u6863\u7EDF\u8BA1\u76F8\u5173</td><td><em>SiteAnalysis</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>pc\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E</td><td><em>SitePC</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>mobile\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E</td><td><em>SiteMobile</em></td><td><code>-</code></td></tr></tbody></table><h4>SiteThemes</h4><p>\u4E3B\u9898\u53D8\u91CF\u76F8\u5173\uFF0C\u7531\u4E8E\u9ED8\u8BA4\u7684\u4E3B\u9898\u53D8\u91CF\u53EF\u80FD\u65F6\u5E38\u4FEE\u6539\uFF0C\u4EE5<code>varlet</code>\u5B98\u65B9\u6587\u6863\u7684\u4E3B\u9898\u4E3A\u51C6</p><table><thead><tr><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>color-primary</code></td></tr><tr><td><code>color-link</code></td></tr><tr><td><code>color-type</code></td></tr><tr><td><code>color-progress</code></td></tr><tr><td><code>color-progress-track</code></td></tr><tr><td><code>color-side-bar</code></td></tr><tr><td><code>color-side-bar-active-background</code></td></tr><tr><td><code>color-app-bar</code></td></tr><tr><td><code>color-mobile-cell-hover</code></td></tr><tr><td><code>color-mobile-cell-hover-background</code></td></tr><tr><td><code>color-pc-language-active</code></td></tr><tr><td><code>color-pc-language-active-background</code></td></tr><tr><td><code>color-mobile-language-active</code></td></tr><tr><td><code>color-mobile-language-active-background</code></td></tr></tbody></table><h4>SiteHighlight</h4><p>\u4EE3\u7801\u7247\u6BB5\u9AD8\u4EAE\uFF0C\u57FA\u4E8E<a href="https://highlightjs.org/">highlight.js</a></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>style</code></td><td>highlight\u7684css\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>SiteAnalysis</h4><p>\u7EDF\u8BA1\u57CB\u70B9\u76F8\u5173</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>baidu</code></td><td>\u767E\u5EA6\u7EDF\u8BA1\u811A\u672C\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>SitePC, SiteMobile</h4><p>\u6587\u6863\u7ED3\u6784\u90E8\u5206\u76F8\u5173\uFF0C\u793A\u4F8B\u914D\u7F6E\u5982\u4E0B</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">pc</span>: {
    <span class="hljs-attr">redirect</span>: <span class="hljs-string">&#39;/home&#39;</span>,
    <span class="hljs-attr">title</span>: {
      <span class="hljs-string">&#39;zh-CN&#39;</span>: <span class="hljs-string">&#39;\u4E00\u4E2A\u7EC4\u4EF6\u5E93&#39;</span>,
    },
    <span class="hljs-attr">header</span>: {
      <span class="hljs-attr">i18n</span>: <span class="hljs-literal">null</span>,
      <span class="hljs-attr">github</span>: <span class="hljs-string">&#39;https://github.com/haoziqaq/varlet&#39;</span>,
    },
    <span class="hljs-attr">menu</span>: [
      {
        <span class="hljs-attr">text</span>: {
          <span class="hljs-string">&#39;zh-CN&#39;</span>: <span class="hljs-string">&#39;\u5F00\u53D1\u6307\u5357&#39;</span>,
        },
        <span class="hljs-comment">// \u4FA7\u8FB9\u680F\u83DC\u5355\u76EE\u5F55</span>
        <span class="hljs-attr">type</span>: <span class="hljs-number">1</span>,
      },
      {
        <span class="hljs-attr">text</span>: {
          <span class="hljs-string">&#39;zh-CN&#39;</span>: <span class="hljs-string">&#39;\u57FA\u672C\u4ECB\u7ECD&#39;</span>,
        },
        <span class="hljs-attr">doc</span>: <span class="hljs-string">&#39;home&#39;</span>,
        <span class="hljs-comment">// \u7D22\u5F15\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684md\u6587\u6863</span>
        <span class="hljs-attr">type</span>: <span class="hljs-number">3</span>,
      },
      {
        <span class="hljs-attr">text</span>: {
          <span class="hljs-string">&#39;zh-CN&#39;</span>: <span class="hljs-string">&#39;\u57FA\u7840\u7EC4\u4EF6&#39;</span>,
        },
        <span class="hljs-attr">type</span>: <span class="hljs-number">1</span>,
      },
      {
        <span class="hljs-attr">text</span>: {
          <span class="hljs-string">&#39;zh-CN&#39;</span>: <span class="hljs-string">&#39;Button \u6309\u94AE&#39;</span>,
        },
        <span class="hljs-attr">doc</span>: <span class="hljs-string">&#39;button&#39;</span>,
        <span class="hljs-comment">// \u7D22\u5F15\u7EC4\u4EF6\u6839\u76EE\u5F55\u4E0B\u7684md\u6587\u6863</span>
        <span class="hljs-attr">type</span>: <span class="hljs-number">2</span>,
      },
    ],
  },
  <span class="hljs-attr">mobile</span>: {
    <span class="hljs-attr">redirect</span>: <span class="hljs-string">&#39;/home&#39;</span>,
    <span class="hljs-attr">title</span>: {
      <span class="hljs-string">&#39;zh-CN&#39;</span>: <span class="hljs-string">&#39;\u4E00\u4E2A\u7EC4\u4EF6\u5E93&#39;</span>,
    },
    <span class="hljs-attr">header</span>: {
      <span class="hljs-attr">i18n</span>: <span class="hljs-literal">null</span>,
      <span class="hljs-attr">github</span>: <span class="hljs-string">&#39;https://github.com/haoziqaq/varlet&#39;</span>,
    },
  },
}
</code></pre></div><div class="card"><h3>\u547D\u4EE4\u76F8\u5173</h3><h4>\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli dev
</code></pre><h4>\u6784\u5EFA\u6587\u6863\u7AD9\u70B9</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli build
</code></pre><h4>\u9884\u89C8\u6587\u6863\u7AD9\u70B9</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli preview
</code></pre><h4>\u6784\u5EFA\u7EC4\u4EF6\u5E93\u4EE3\u7801</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli compile
</code></pre><h4>\u6267\u884C\u6240\u6709\u7684\u5355\u5143\u6D4B\u8BD5</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli test
</code></pre><h4>\u4EE5watch\u6A21\u5F0F\u6267\u884C\u5355\u5143\u6D4B\u8BD5</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli test -w
</code></pre><h4>\u68C0\u67E5\u4EE3\u7801</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli lint
</code></pre><h4>\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u6587\u4EF6\u5939</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli create &lt;componentName&gt;
</code></pre><h4>\u751F\u6210\u4E00\u4E2A\u9879\u76EE\u6A21\u677F</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">varlet-cli gen &lt;projectName&gt;
</code></pre></div><div class="card"><h3>babel</h3><p>\u5BF9<code>babel</code>\u8FDB\u884C\u914D\u7F6E\uFF0C\u9996\u5148\u5728<code>package.json</code>\u4E2D\u6307\u5B9A\u76EE\u6807\u6D4F\u89C8\u5668</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">{
  <span class="hljs-attr">&quot;browserslist&quot;</span>: [
    <span class="hljs-string">&quot;Chrome &gt;= 51&quot;</span>,
    <span class="hljs-string">&quot;iOS &gt;= 10&quot;</span>
  ]
}
</code></pre><p>\u521B\u5EFA<code>babel.config,js</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// babel.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">presets</span>: [
    [
      <span class="hljs-string">&#39;@varlet/cli/preset&#39;</span>,
      {
        <span class="hljs-attr">loose</span>: <span>process.env</span>.NODE_ENV === <span class="hljs-string">&#39;compile&#39;</span>,
      },
    ],
  ],
}
</code></pre></div><div class="card"><h3>git\u548Cnpm</h3><h4>git-hook</h4><p><code>husky</code>\uFF0C<code>lint-staged</code>\u914D\u5408<code>eslint</code>\uFF0C<code>stylelint</code>\uFF0C<code>commitlint</code>\u505Acommit\u524D\u7684\u68C0\u67E5\uFF0C<code>package.json</code>\u914D\u7F6E\u5982\u4E0B</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">{
  <span class="hljs-attr">&quot;scripts&quot;</span>: {
    <span class="hljs-attr">&quot;prepare&quot;</span>: <span class="hljs-string">&quot;husky install&quot;</span>,
    <span class="hljs-attr">&quot;commit&quot;</span>: <span class="hljs-string">&quot;git-cz&quot;</span>
  },
  <span class="hljs-attr">&quot;config&quot;</span>: {
    <span class="hljs-attr">&quot;commitizen&quot;</span>: {
      <span class="hljs-attr">&quot;path&quot;</span>: <span class="hljs-string">&quot;cz-conventional-changelog&quot;</span>
    }
  },
  <span class="hljs-attr">&quot;lint-staged&quot;</span>: {
    <span class="hljs-attr">&quot;*.{ts,tsx,js,vue,less}&quot;</span>: <span class="hljs-string">&quot;prettier --write&quot;</span>,
    <span class="hljs-attr">&quot;*.{ts,tsx,js,vue}&quot;</span>: <span class="hljs-string">&quot;eslint --fix&quot;</span>,
    <span class="hljs-attr">&quot;*.{vue,css,less}&quot;</span>: <span class="hljs-string">&quot;stylelint --fix&quot;</span>
  },
  <span class="hljs-attr">&quot;eslintConfig&quot;</span>: {
    <span class="hljs-attr">&quot;root&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;ignorePatterns&quot;</span>: [
      <span class="hljs-string">&quot;es/**&quot;</span>,
      <span class="hljs-string">&quot;umd/**&quot;</span>,
      <span class="hljs-string">&quot;site/**&quot;</span>,
      <span class="hljs-string">&quot;public/**&quot;</span>,
      <span class="hljs-string">&quot;src/*/__tests__/**&quot;</span>,
      <span class="hljs-string">&quot;.varlet/**&quot;</span>
    ],
    <span class="hljs-attr">&quot;extends&quot;</span>: [
      <span class="hljs-string">&quot;@varlet&quot;</span>
    ]
  },
  <span class="hljs-attr">&quot;stylelint&quot;</span>: {
    <span class="hljs-attr">&quot;extends&quot;</span>: [
      <span class="hljs-string">&quot;@varlet/stylelint-config&quot;</span>
    ],
    <span class="hljs-attr">&quot;ignoreFiles&quot;</span>: [
      <span class="hljs-string">&quot;es/**&quot;</span>,
      <span class="hljs-string">&quot;umd/**&quot;</span>,
      <span class="hljs-string">&quot;site/**&quot;</span>,
      <span class="hljs-string">&quot;coverage/**&quot;</span>,
      <span class="hljs-string">&quot;public/**&quot;</span>,
      <span class="hljs-string">&quot;highlight/**&quot;</span>
    ]
  }
}
</code></pre><p>\u521B\u5EFA<code>commitlint.config.js</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// commitlint.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">extends</span>: [<span class="hljs-string">&#39;@commitlint/config-conventional&#39;</span>],
}
</code></pre><p>\u521B\u5EFA<code>.prettierignore</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">// .prettierignore
coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
</code></pre></div><div class="card"><h3>typescript</h3><p>\u521B\u5EFA<code>tsconfig.json</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">{
  <span class="hljs-attr">&quot;compilerOptions&quot;</span>: {
    <span class="hljs-attr">&quot;strict&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;downlevelIteration&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;declaration&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;skipLibCheck&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;esModuleInterop&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;allowJs&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;lib&quot;</span>: [<span class="hljs-string">&quot;esnext&quot;</span>, <span class="hljs-string">&quot;dom&quot;</span>],
    <span class="hljs-attr">&quot;allowSyntheticDefaultImports&quot;</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">&quot;jsx&quot;</span>: <span class="hljs-string">&quot;preserve&quot;</span>
  }
}
</code></pre></div><div class="card"><h3>\u53D1\u5E03\u4EE3\u7801</h3><p>\u4F7F\u7528<code>release-it</code>\u548C<code>conventional-changelog</code>\u8FDB\u884C\u4EE3\u7801\u53D1\u5E03\u548C\u66F4\u65B0\u65E5\u5FD7\u7684\u751F\u6210\uFF0C<code>package.json</code>\u914D\u7F6E\u5982\u4E0B</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">{
  <span class="hljs-attr">&quot;scripts&quot;</span>: {
    <span class="hljs-attr">&quot;genlog&quot;</span>: <span class="hljs-string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;</span>,
    <span class="hljs-attr">&quot;genAllLog&quot;</span>: <span class="hljs-string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s -r 0&quot;</span>,
    <span class="hljs-attr">&quot;release&quot;</span>: <span class="hljs-string">&quot;yarn compile &amp;&amp; release-it&quot;</span>
  },
  <span class="hljs-attr">&quot;release-it&quot;</span>: {
    <span class="hljs-attr">&quot;git&quot;</span>: {
      <span class="hljs-attr">&quot;changelog&quot;</span>: <span class="hljs-string">&quot;git log --pretty=format:\\&quot;* %s (%h)\\&quot; \${from}...\${to}&quot;</span>,
      <span class="hljs-attr">&quot;tagName&quot;</span>: <span class="hljs-string">&quot;v\${version}&quot;</span>,
      <span class="hljs-attr">&quot;commitMessage&quot;</span>: <span class="hljs-string">&quot;chore: release \${version}&quot;</span>,
      <span class="hljs-attr">&quot;requireCleanWorkingDir&quot;</span>: <span class="hljs-literal">false</span>
    },
    <span class="hljs-attr">&quot;plugins&quot;</span>: {
      <span class="hljs-attr">&quot;@release-it/conventional-changelog&quot;</span>: {
        <span class="hljs-attr">&quot;preset&quot;</span>: <span class="hljs-string">&quot;angular&quot;</span>,
        <span class="hljs-attr">&quot;infile&quot;</span>: <span class="hljs-string">&quot;CHANGELOG.md&quot;</span>
      }
    }
  }
}
</code></pre><h4>\u53D1\u5E03\u524D\u6CE8\u610F</h4><ul><li>1.npm\u548Cyarn\u7684\u4ED3\u5E93\u6E90\u5FC5\u987B\u6307\u5411npm\u5B98\u65B9\u955C\u50CF</li><li>2.npm\u548Cyarn\u90FD\u5FC5\u987B\u6267\u884Clogin\u547D\u4EE4\u8FDB\u884C\u7528\u6237\u767B\u5F55</li></ul></div>`,11),c=[o];function r(p,d,h,i,u,g){return t(),a("div",l,c)}var m=s(e,[["render",r]]);export{m as default};
