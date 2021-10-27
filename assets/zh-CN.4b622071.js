import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as t}from"./vendor.ea41cd30.js";const l={components:{}},e={class:"varlet-site-doc"},c=t(`<h1>\u56FE\u6807</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u57FA\u4E8E\u5B57\u4F53\u7684\u56FE\u6807\u5E93, \u4E5F\u652F\u6301\u7F51\u7EDC\u56FE\u7247\u3002 \u5B57\u4F53\u56FE\u6807\u6765\u81EA <a href="https://materialdesignicons.com/">Material Design Icon</a></p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Icon)
</code></pre></div><div class="card"><h3>\u56FE\u6807\u5C3A\u5BF8</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;26&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u56FE\u6807\u989C\u8272</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;26&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u4F7F\u7528\u56FE\u7247</h3><p>\u5F53\u4F20\u5165\u7684<code>name</code>\u662F\u4E00\u4E2A\u7F51\u7EDC\u5730\u5740\u65F6,\u5C06\u4F1A\u4F7F\u7528<code>img</code>\u6807\u7B7E\u4EE5<code>cover</code>\u6A21\u5F0F\u663E\u793A\u3002<code>size</code>\u4E3A\u56FE\u7247\u7684\u5BBD\u9AD8\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;32&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u6CE8\u518C\u4E8B\u4EF6</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> 
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;\u70B9\u51FB\u6210\u529F&#39;)&quot;</span> 
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> { Snackbar }
  }
}
</code></pre></div><div class="card"><h3>\u56FE\u6807\u5207\u6362\u52A8\u753B</h3><p>\u5F53\u8BBE\u7F6E\u4E86<code>transition(ms)</code>\u5E76\u901A\u8FC7\u56FE\u6807\u7684<code>name</code>\u5207\u6362\u56FE\u6807\u65F6, \u53EF\u4EE5\u89E6\u53D1\u5207\u6362\u52A8\u753B\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> 
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;name&quot;</span> 
  <span class="hljs-attr">:transition</span>=<span class="hljs-string">&quot;300&quot;</span> 
  <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;30&quot;</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> name = ref(<span class="hljs-string">&#39;information&#39;</span>)
    
    <span class="hljs-keyword">const</span> toggle = <span class="hljs-function">() =&gt;</span> {
      name.value = name.value === <span class="hljs-string">&#39;information&#39;</span> 
        ? <span class="hljs-string">&#39;checkbox-marked-circle&#39;</span> 
        : <span class="hljs-string">&#39;information&#39;</span>
    }
    
    <span class="hljs-keyword">return</span> {
      name,
      toggle
    }
  }
}
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u56FE\u6807\u5E93</h3><p>\u9996\u5148\u60A8\u9700\u8981\u8BBE\u7F6E\u60A8\u81EA\u5DF1\u7684\u5B57\u4F53\uFF0C\u5E76\u5F15\u5165\u5230\u60A8\u7684\u9879\u76EE\u3002 \u8FD9\u91CC\u5047\u8BBE\u6269\u5C55\u4E00\u4E2A\u540D\u4E3A<code>my-icons</code>\u7684\u5B57\u4F53\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">/* \u8BBE\u7F6E\u5B57\u4F53 */</span>
<span class="hljs-keyword">@font-face</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&quot;my-icons&quot;</span>;
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.eot&quot;</span>);
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.eot&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;embedded-opentype&quot;</span>), 
    <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.woff2&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;woff2&quot;</span>), 
    <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.woff&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;woff&quot;</span>), 
    <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.ttf&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;truetype&quot;</span>);
  <span class="hljs-attribute">font-weight</span>: normal;
  <span class="hljs-attribute">font-style</span>: normal;
}

<span class="hljs-comment">/* \u5B57\u4F53\u6837\u5F0F */</span>
<span class="hljs-selector-class">.my-icon--set</span>,
<span class="hljs-selector-class">.my-icon--set</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-attribute">display</span>: inline-block;
  <span class="hljs-attribute">font</span>: normal normal normal <span class="hljs-number">14px</span>/<span class="hljs-number">1</span> <span class="hljs-string">&quot;my-icons&quot;</span>;
  <span class="hljs-attribute">font-size</span>: inherit;
  <span class="hljs-attribute">text-rendering</span>: auto;
  -webkit-<span class="hljs-attribute">font-smoothing</span>: antialiased;
}

<span class="hljs-comment">/* \u5B57\u4F53\u540D\u79F0\u6620\u5C04\u7801\u70B9 */</span>
<span class="hljs-selector-class">.my-icon-hot</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&quot;\\F000&quot;</span>;
}
</code></pre><p>\u5230\u8FD9\u91CC\u4F60\u5C31\u6210\u529F\u7684\u6269\u5C55\u4E86\u81EA\u5DF1\u7684\u56FE\u6807\u5E93\uFF0C<code>my-icon</code>\u5C31\u662F\u4F60\u7684\u5B57\u4F53<code>\u547D\u540D\u7A7A\u95F4(namespace)</code>\uFF0C\u60A8\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">namespace</span>=<span class="hljs-string">&quot;my-icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;hot&quot;</span> /&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u56FE\u6807\u540D\u79F0</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>\u5C3A\u5BF8</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>\u56FE\u6807\u989C\u8272, \u53EA\u9002\u7528\u4E8E\u5B57\u4F53\u56FE\u6807</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>\u56FE\u6807\u7684\u547D\u540D\u7A7A\u95F4, \u53EF\u6269\u5C55\u81EA\u5B9A\u4E49\u56FE\u6807\u5E93</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>transition</code></td><td>\u8FC7\u6E21\u52A8\u753B\u65F6\u95F4(\u6BEB\u79D2)</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u56FE\u6807\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--@icon-size</code></td><td><code>20px</code></td></tr></tbody></table></div>`,13),p=[c];function o(r,h,i,d,j,u){return a(),n("div",e,p)}var q=s(l,[["render",o]]);export{q as default};
