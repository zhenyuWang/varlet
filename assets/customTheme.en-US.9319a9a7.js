import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as l}from"./vendor.ea41cd30.js";const e={components:{}},p={class:"varlet-site-doc"},c=l(`<h1>Custom Theme</h1><div class="card"><h3>Intro</h3><p>The component library uses <code>Less</code> as the CSS preprocessor and defines a number of <code>Less</code> variables in the component library Themes can be customized through plugins that modify variables at build time.</p></div><div class="card"><h3>Common Variables</h3><p>The following are the common variables used throughout the component library. Each component has its own set of variables to replace.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// text</span>
<span class="hljs-variable">@font-size-xs:</span> <span class="hljs-number">10px</span>;
<span class="hljs-variable">@font-size-sm:</span> <span class="hljs-number">12px</span>;
<span class="hljs-variable">@font-size-md:</span> <span class="hljs-number">14px</span>;
<span class="hljs-variable">@font-size-lg:</span> <span class="hljs-number">16px</span>;

<span class="hljs-comment">// icon</span>
<span class="hljs-variable">@icon-size-xs:</span> <span class="hljs-number">16px</span>;
<span class="hljs-variable">@icon-size-sm:</span> <span class="hljs-number">18px</span>;
<span class="hljs-variable">@icon-size-md:</span> <span class="hljs-number">20px</span>;
<span class="hljs-variable">@icon-size-lg:</span> <span class="hljs-number">22px</span>;

<span class="hljs-comment">// color</span>
<span class="hljs-variable">@color-primary:</span> <span class="hljs-number">#2979ff</span>;
<span class="hljs-variable">@color-info:</span> <span class="hljs-number">#00bcd4</span>;
<span class="hljs-variable">@color-success:</span> <span class="hljs-number">#4caf50</span>;
<span class="hljs-variable">@color-warning:</span> <span class="hljs-number">#ff9800</span>;
<span class="hljs-variable">@color-danger:</span> <span class="hljs-number">#f44336</span>;
<span class="hljs-variable">@color-disabled:</span> <span class="hljs-number">#e0e0e0</span>;

<span class="hljs-comment">// animation</span>
<span class="hljs-variable">@cubic-bezier:</span> cubic-bezier(<span class="hljs-number">0.25</span>, <span class="hljs-number">0.8</span>, <span class="hljs-number">0.5</span>, <span class="hljs-number">1</span>);
</code></pre></div><div class="card"><h3>Custom methods</h3><p>First, make sure your build tools support <code>less</code>, different ways of introducing components require different customizations, the customization methods of <code>Full import</code>, <code>Plugin based import</code>, <code>ES module based manual import</code> are described below.</p></div><div class="card"><h3>Full import</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/less&#39;</span>
</code></pre></div><div class="card"><h3>Plugin based import</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// babel.config.js</span>
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
</code></pre></div><div class="card"><h3>ES module based manual import</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/button/style/less&#39;</span>
</code></pre></div><div class="card"><h3>Modify Variables</h3><p>Use the <code>modifyVars</code> provided by <code>less</code> for variable substitution at build time. The following is the configuration for different scenarios.</p></div><div class="card"><h3>Webpack</h3><p>Here <code>less-loader</code> is used for version <code>&lt; 6</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// webpack.config.js</span>
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
</code></pre></div><div class="card"><h3>Vite</h3><p>Vite do not support <code>~</code> syntax and need to override <code>~</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// vite.config.js</span>
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
</code></pre></div>`,11),r=[c];function o(t,i,h,d,j,m){return a(),n("div",p,r)}var f=s(e,[["render",o]]);export{f as default};
