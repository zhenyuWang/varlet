import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as l}from"./vendor.ea41cd30.js";const p={components:{}},e={class:"varlet-site-doc"},c=l(`<h1>\u4E3B\u9898\u5B9A\u5236</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7EC4\u4EF6\u5E93\u4F7F\u7528<code>Less</code>\u4F5C\u4E3Acss\u9884\u5904\u7406\u5668\uFF0C\u5E76\u5728\u7EC4\u4EF6\u5E93\u4E2D\u5B9A\u4E49\u4E86\u8BB8\u591A<code>Less\u53D8\u91CF</code>\u3002 \u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u5728\u6784\u5EFA\u65F6\u4FEE\u6539\u53D8\u91CF\u6765\u5B9A\u5236\u4E3B\u9898\u3002</p></div><div class="card"><h3>\u901A\u7528\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u662F\u6574\u4E2A\u7EC4\u4EF6\u5E93\u7528\u5230\u7684\u901A\u7528\u53D8\u91CF\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\u4E00\u4EFD\u81EA\u5DF1\u7684\u53D8\u91CF\u53EF\u4F9B\u66FF\u6362\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// \u6587\u5B57</span>
<span class="hljs-variable">@font-size-xs:</span> <span class="hljs-number">10px</span>;
<span class="hljs-variable">@font-size-sm:</span> <span class="hljs-number">12px</span>;
<span class="hljs-variable">@font-size-md:</span> <span class="hljs-number">14px</span>;
<span class="hljs-variable">@font-size-lg:</span> <span class="hljs-number">16px</span>;

<span class="hljs-comment">// \u56FE\u6807</span>
<span class="hljs-variable">@icon-size-xs:</span> <span class="hljs-number">16px</span>;
<span class="hljs-variable">@icon-size-sm:</span> <span class="hljs-number">18px</span>;
<span class="hljs-variable">@icon-size-md:</span> <span class="hljs-number">20px</span>;
<span class="hljs-variable">@icon-size-lg:</span> <span class="hljs-number">22px</span>;

<span class="hljs-comment">//\u989C\u8272</span>
<span class="hljs-variable">@color-primary:</span> <span class="hljs-number">#2979ff</span>;
<span class="hljs-variable">@color-info:</span> <span class="hljs-number">#00bcd4</span>;
<span class="hljs-variable">@color-success:</span> <span class="hljs-number">#4caf50</span>;
<span class="hljs-variable">@color-warning:</span> <span class="hljs-number">#ff9800</span>;
<span class="hljs-variable">@color-danger:</span> <span class="hljs-number">#f44336</span>;
<span class="hljs-variable">@color-disabled:</span> <span class="hljs-number">#e0e0e0</span>;

<span class="hljs-comment">// \u52A8\u753B\u51FD\u6570</span>
<span class="hljs-variable">@cubic-bezier:</span> cubic-bezier(<span class="hljs-number">0.25</span>, <span class="hljs-number">0.8</span>, <span class="hljs-number">0.5</span>, <span class="hljs-number">1</span>);
</code></pre></div><div class="card"><h3>\u5B9A\u5236\u65B9\u6CD5</h3><p>\u9996\u5148\u786E\u4FDD\u60A8\u7684\u6784\u5EFA\u5DE5\u5177\u652F\u6301<code>less</code>\uFF0C\u4E0D\u540C\u7684\u7EC4\u4EF6\u5F15\u5165\u65B9\u5F0F\u9700\u8981\u4E0D\u540C\u7684\u5B9A\u5236\u65B9\u6CD5\uFF0C \u4EE5\u4E0B\u4ECB\u7ECD<code>\u5168\u91CF\u5BFC\u5165</code>\uFF0C<code>\u57FA\u4E8E\u63D2\u4EF6\u7684\u5F15\u5165\u65B9\u5F0F</code>\uFF0C<code>\u57FA\u4E8Ees\u6A21\u5757\u7684\u624B\u52A8\u5F15\u5165\u65B9\u5F0F</code>\u7684\u5B9A\u5236\u65B9\u6CD5\u3002</p></div><div class="card"><h3>\u5168\u91CF\u5BFC\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/less&#39;</span>
</code></pre></div><div class="card"><h3>\u57FA\u4E8E\u63D2\u4EF6\u7684\u5F15\u5165\u65B9\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// babel.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">plugins</span>: [
    [
      <span class="hljs-string">&#39;import&#39;</span>,
      {
        <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;@varlet/ui&#39;</span>,
        <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&#39;es&#39;</span>,
        <span class="hljs-attr">style</span>: <span class="hljs-function"><span class="hljs-params">name</span> =&gt;</span> <span class="hljs-string">\`<span class="hljs-subst">\${name}</span>/style/less\`</span>,
      },
      <span class="hljs-string">&#39;@varlet/ui&#39;</span>,
    ]
  ]
}
</code></pre></div><div class="card"><h3>\u57FA\u4E8Ees\u6A21\u5757\u7684\u624B\u52A8\u5F15\u5165\u65B9\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/button/style/less&#39;</span>
</code></pre></div><div class="card"><h3>\u4FEE\u6539\u53D8\u91CF</h3><p>\u4F7F\u7528<code>less</code>\u63D0\u4F9B\u7684<code>modifyVars</code>\u8FDB\u884C\u6784\u5EFA\u65F6\u7684\u53D8\u91CF\u66FF\u6362\uFF0C\u4EE5\u4E0B\u662F\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u914D\u7F6E\u3002</p></div><div class="card"><h3>Webpack</h3><p>\u8FD9\u91CC\u4F7F\u7528<code>less-loader</code>\u7684\u7248\u672C<code>&lt; 6</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// webpack.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">rules</span>: [
    {
      <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.less$/</span>,
      use: [
        {
          <span class="hljs-attr">loader</span>: <span class="hljs-string">&#39;less-loader&#39;</span>,
          <span class="hljs-attr">options</span>: {
            <span class="hljs-attr">modifyVars</span>: {
              <span class="hljs-string">&#39;color-primary&#39;</span>: <span class="hljs-string">&#39;#009688&#39;</span>,
            }
          }
        }
      ]
    }
  ]
}
</code></pre></div><div class="card"><h3>Vue cli</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// vue.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">loaderOptions</span>: {
      <span class="hljs-attr">less</span>: {
        <span class="hljs-attr">modifyVars</span>: {
          <span class="hljs-string">&#39;color-primary&#39;</span>: <span class="hljs-string">&#39;#009688&#39;</span>,
        }
      }
    }
  }
}
</code></pre></div><div class="card"><h3>Vite</h3><p>Vite\u4E0D\u652F\u6301<code>~</code>\u8BED\u6CD5\uFF0C\u9700\u8981\u5BF9<code>~</code>\u8FDB\u884C\u8986\u76D6\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// vite.config.js</span>
<span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">preprocessorOptions</span>: {
      <span class="hljs-attr">less</span>: {
        <span class="hljs-attr">modifyVars</span>: {
          <span class="hljs-string">&#39;color-primary&#39;</span>: <span class="hljs-string">&#39;#009688&#39;</span>,
        }
      }
    }
  },
  <span class="hljs-attr">resolve</span>: {
    <span class="hljs-attr">alias</span>: [
      { <span class="hljs-attr">find</span>: <span class="hljs-regexp">/^~/</span>, replacement: <span class="hljs-string">&#39;&#39;</span> }
    ],
  }
})
</code></pre></div>`,11),r=[c];function h(t,i,o,d,j,m){return a(),n("div",e,r)}var u=s(p,[["render",h]]);export{u as default};
