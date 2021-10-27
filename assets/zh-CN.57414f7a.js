import{_ as s}from"./elevation.c2941a7c.js";import{o as e,c as a,L as c}from"./vendor.ea41cd30.js";const l={components:{}},o={class:"varlet-site-doc"},n=c(`<h1>\u56FD\u9645\u5316</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7EC4\u4EF6\u5E93\u4F7F\u7528\u4E2D\u6587\u4F5C\u4E3A\u9ED8\u8BA4\u8BED\u8A00\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u5207\u6362\uFF0C\u5185\u7F6E\u652F\u6301<code>\u4E2D\u6587</code>\uFF0C<code>\u82F1\u6587</code>\u3002</p></div><div class="card"><h3>\u591A\u8BED\u8A00\u5207\u6362</h3><p>\u5F15\u5165<code>Locale</code>\u7EC4\u4EF6\u5B9E\u73B0\u591A\u8BED\u8A00\u5207\u6362\uFF0C\u4F7F\u7528<code>Locale.add</code>\u8FDB\u884C\u8BED\u8A00\u6269\u5C55\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Locale } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui/es/locale/en-US&#39;</span>

Locale.add(<span class="hljs-string">&#39;en-US&#39;</span>, enUS)
</code></pre><p>\u4F7F\u7528<code>Locale.use</code>\u8FDB\u884C\u5207\u6362\u8BED\u8A00</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Locale.use(<span class="hljs-string">&#39;en-US&#39;</span>)
</code></pre><p>\u4F7F\u7528<code>Locale.merge</code>\u8FDB\u884C\u8BED\u8A00\u5408\u5E76</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Locale.merge(<span class="hljs-string">&#39;en-US&#39;</span>, {
  <span class="hljs-attr">dialogTitle</span>: <span class="hljs-string">&#39;Hello&#39;</span>
})
</code></pre></div>`,3),r=[n];function t(p,d,h,i,j,g){return e(),a("div",o,r)}var f=s(l,[["render",t]]);export{f as default};
