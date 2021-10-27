import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as p}from"./vendor.ea41cd30.js";const l={components:{}},t={class:"varlet-site-doc"},e=p(`<h1>\u5FEB\u901F\u5F00\u59CB</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u8FD9\u91CC\u4E3A\u60A8\u4ECB\u7ECD\u5E38\u89C1\u5F00\u53D1\u6A21\u5F0F\u4E0B\u63A5\u5165\u7EC4\u4EF6\u5E93\u7684\u6700\u57FA\u672C\u65B9\u5F0F\u3002</p></div><div class="card"><h3>\u5B89\u88C5</h3></div><div class="card"><h3>CDN</h3><p><code>varlet.js</code>\u5305\u542B\u7EC4\u4EF6\u5E93\u7684\u6240\u6709\u6837\u5F0F\u548C\u903B\u8F91, \u5F15\u5165\u5373\u53EF\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;app&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> app = Vue.createApp({
    <span class="hljs-attr">template</span>: <span class="hljs-string">&#39;&lt;var-button&gt;\u6309\u94AE&lt;/var-button&gt;&#39;</span>
  })
  app.use(Varlet).mount(<span class="hljs-string">&#39;#app&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div><div class="card"><h3>Webpack/Vite</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> \u901A\u8FC7npm\u6216yarn\u5B89\u88C5</span>
<span class="hljs-meta">#</span><span class="bash"> npm</span>
npm i @varlet/ui -S
<span class="hljs-meta">#</span><span class="bash"> yarn</span>
yarn add @varlet/ui
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>
<span class="hljs-keyword">import</span> Varlet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/style.js&#39;</span>

createApp(App).use(Varlet).mount(<span class="hljs-string">&#39;#app&#39;</span>)
</code></pre></div>`,5),c=[e];function r(h,i,o,j,d,g){return a(),n("div",t,c)}var u=s(l,[["render",r]]);export{u as default};
