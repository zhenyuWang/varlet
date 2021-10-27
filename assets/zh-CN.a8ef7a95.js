import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const e={components:{}},l={class:"varlet-site-doc"},p=n(`<h1>\u56FE\u7247\u61D2\u52A0\u8F7D</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5728\u56FE\u7247\u53EF\u89C1\u65F6\u8FDB\u884C\u52A0\u8F7D</p><h4></h4></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Lazy } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Lazy)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u7528\u6CD5</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;&quot;</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u80CC\u666F\u56FE\u61D2\u52A0\u8F7D</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-lazy:background-image</span>=<span class="hljs-string">&quot;&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5185\u8054\u5C5E\u6027</h3><p>\u53EF\u4EE5\u901A\u8FC7\u5185\u8054\u5C5E\u6027\u4FEE\u6539<code>loading</code>\u3001<code>error</code>\u56FE\u7247\u548C<code>\u52A0\u8F7D\u5931\u8D25\u65F6\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D\u7684\u6B21\u6570</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> 
  <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;&quot;</span>
  <span class="hljs-attr">lazy-loading</span>=<span class="hljs-string">&quot;https://xxx.cn/loading.png&quot;</span>
  <span class="hljs-attr">lazy-error</span>=<span class="hljs-string">&quot;https://xxx.cn/error.png&quot;</span>
  <span class="hljs-attr">lazy-attempt</span>=<span class="hljs-string">&quot;3&quot;</span>
&gt;</span>
</code></pre></div><div class="card"><h3>\u63D2\u4EF6</h3><p><code>Lazy</code>\u63D0\u4F9B\u4E86\u5728\u63D2\u4EF6\u6CE8\u518C\u65F6\u4F20\u5165\u7684\u9009\u9879\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u61D2\u52A0\u8F7D\u9009\u9879\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Lazy } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Lazy, {
  <span class="hljs-attr">loading</span>: <span class="hljs-string">&#39;https://xxx.cn/loading.png&#39;</span>,
  <span class="hljs-attr">error</span>: <span class="hljs-string">&#39;https://xxx.cn/error.png&#39;</span>,
  <span class="hljs-attr">attempt</span>: <span class="hljs-number">3</span>,
  <span class="hljs-attr">throttleWait</span>: <span class="hljs-number">300</span>,
  <span class="hljs-attr">events</span>: [
    <span class="hljs-string">&#39;scroll&#39;</span>, 
    <span class="hljs-string">&#39;wheel&#39;</span>, 
    <span class="hljs-string">&#39;mousewheel&#39;</span>, 
    <span class="hljs-string">&#39;resize&#39;</span>,
    <span class="hljs-string">&#39;animationend&#39;</span>,
    <span class="hljs-string">&#39;transitionend&#39;</span>, 
    <span class="hljs-string">&#39;touchmove&#39;</span>
  ],
  <span class="hljs-function"><span class="hljs-title">filter</span>(<span class="hljs-params">lazy</span>)</span> {
    <span class="hljs-comment">// \u53EF\u4EE5\u8BBF\u95EElazy\u4E0A\u4E0B\u6587\u7684\u6240\u6709\u5C5E\u6027,\u6267\u884C\u4E00\u4E9B\u5C5E\u6027\u62E6\u622A, </span>
    <span class="hljs-comment">// \u6BD4\u5982\u7B80\u5355\u4FEE\u6539\u6240\u6709\u7684\u56FE\u7247\u5730\u5740http -&gt; https</span>
    lazy.src.replace(<span class="hljs-string">&#39;http://&#39;</span>, <span class="hljs-string">&#39;https://&#39;</span>)
  }
})
</code></pre></div><h2>API</h2><div class="card"><h3>\u63D2\u4EF6\u9009\u9879</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>loading</code></td><td>\u52A0\u8F7D\u4E2D\u7684\u56FE\u7247\uFF0C\u5C3D\u53EF\u80FD\u9009\u62E9\u52A0\u8F7D\u901F\u5EA6\u5F88\u5FEB\u7684\u56FE\u7247</td><td><em>string</em></td><td><code>1\u50CF\u7D20\u900F\u660E\u56FE\u7247</code></td></tr><tr><td><code>error</code></td><td>\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u7684\u56FE\u7247</td><td><em>string</em></td><td><code>1\u50CF\u7D20\u900F\u660E\u56FE\u7247</code></td></tr><tr><td><code>attempt</code></td><td>\u52A0\u8F7D\u5931\u8D25\u65F6\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D\u7684\u6B21\u6570</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>\u8282\u6D41\u65F6\u95F4\uFF0C\u6570\u503C\u8D8A\u5927\u4E8B\u4EF6\u89E6\u53D1\u9891\u7387\u8D8A\u4F4E</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>\u89E6\u53D1\u53EF\u89C1\u6027\u68C0\u6D4B\u6CE8\u518C\u7684\u4E8B\u4EF6\u5217\u8868</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>\u5C5E\u6027\u62E6\u622A\u51FD\u6570</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div>`,9),c=[p];function r(d,h,o,i,g,j){return a(),t("div",l,c)}var u=s(e,[["render",r]]);export{u as default};
