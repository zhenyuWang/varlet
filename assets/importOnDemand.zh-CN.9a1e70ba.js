import{_ as s}from"./IconSfc.2f05a1db.js";import{o as a,c as n,a5 as l}from"./vendor.bac705d4.js";const p={components:{}},e={class:"varlet-site-doc"},r=l(`<h1>\u6309\u9700\u5F15\u5165</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u6309\u9700\u5F15\u5165\u907F\u514D\u4E86\u7EC4\u4EF6\u7684\u5168\u91CF\u5BFC\u5165\uFF0C\u53EF\u4EE5\u6709\u6548\u7684\u51CF\u5C11\u53D1\u5E03\u5305\u7684\u5927\u5C0F\u3002</p></div><div class="card"><h3>\u5F15\u5165\u65B9\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/button/style/index.js&#39;</span>

createApp().use(Button)
</code></pre><p>\u4F46\u662F\u8FD9\u6837\u7684\u5F15\u5165\u65B9\u5F0F\u662F\u76F8\u5BF9\u7E41\u7410\u7684\uFF0C \u63A5\u4E0B\u6765\u63A8\u8350\u57FA\u4E8E<code>Webpack</code>\u548C<code>Vite</code>\u4E24\u79CD\u6784\u5EFA\u5DE5\u5177\u7684\u6700\u4F73\u5B9E\u8DF5\u3002</p></div><div class="card"><h3>Webpack</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> \u5B89\u88C5\u63D2\u4EF6</span>
<span class="hljs-meta">#</span><span class="bash"> npm</span>
npm i babel-plugin-import -D 
<span class="hljs-meta">#</span><span class="bash"> yarn</span>
yarn add babel-plugin-import -D
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// babel.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">plugins</span>: [
    [
      <span class="hljs-string">&#39;import&#39;</span>,
      {
        <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;@varlet/ui&#39;</span>,
        <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&#39;es&#39;</span>,
        <span class="hljs-attr">style</span>: <span class="hljs-literal">true</span>,
      },
      <span class="hljs-string">&#39;@varlet/ui&#39;</span>,
    ],
  ],
};
</code></pre><p>\u5B8C\u6210\u914D\u7F6E\u4E4B\u540E\uFF0C\u5728\u5F15\u5165\u7EC4\u4EF6\u65F6\u63D2\u4EF6\u4F1A\u81EA\u52A8\u52A0\u8F7D\u7EC4\u4EF6\u6240\u9700\u7684\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Button)
</code></pre></div><div class="card"><h3>Vite</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> \u5B89\u88C5\u63D2\u4EF6</span>
<span class="hljs-meta">#</span><span class="bash"> npm</span>
npm i unplugin-vue-components -D
<span class="hljs-meta">#</span><span class="bash"> yarn</span>
yarn add unplugin-vue-components -D
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// vite.config.js</span>
<span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="hljs-keyword">import</span> viteComponents <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="hljs-keyword">import</span> { VarletUIResolver } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/resolvers&#39;</span>
<span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({
  <span class="hljs-attr">plugins</span>: [
    vue(),
    viteComponents({
      <span class="hljs-attr">resolvers</span>: [VarletUIResolver()],
      <span class="hljs-attr">dts</span>: <span class="hljs-literal">true</span>,
    })
  ]
})
</code></pre><p>\u5B8C\u6210\u914D\u7F6E\u4E4B\u540E\uFF0C\u6240\u6709\u58F0\u660E\u5728\u6A21\u677F\u91CC\u7684\u7EC4\u4EF6\uFF0C\u65E0\u987B\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5F15\u5165\u7EC4\u4EF6\u6837\u5F0F\u548C\u6CE8\u518C\u7EC4\u4EF6\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>\u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre><p>\u6CE8\u610F\u51FD\u6570\u7EC4\u4EF6\uFF0C\u9700\u8981\u624B\u52A8\u5F15\u5165\u6837\u5F0F\uFF0C\u5982<code>Dialog</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/dialog/style/index.js&#39;</span>

Dialog(<span class="hljs-string">&#39;Varlet UI UP UP&#39;</span>)
</code></pre><p>\u81EA\u5B9A\u4E49\u6307\u4EE4\uFF0C\u9700\u8981\u624B\u52A8\u6CE8\u518C\uFF0C\u5982<code>Ripple</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Ripple } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Ripple)
</code></pre></div>`,5),t=[r];function c(o,h,i,d,j,m){return a(),n("div",e,t)}var y=s(p,[["render",c]]);export{y as default};
