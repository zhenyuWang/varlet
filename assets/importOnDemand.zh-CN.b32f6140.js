import{_ as s}from"./elevation.c2941a7c.js";import{o as n,c as a,L as e}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},t=e(`<h1>\u6309\u9700\u5F15\u5165</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u6309\u9700\u5F15\u5165\u907F\u514D\u4E86\u7EC4\u4EF6\u7684\u5168\u91CF\u5BFC\u5165\uFF0C\u53EF\u4EE5\u6709\u6548\u7684\u51CF\u5C11\u53D1\u5E03\u5305\u7684\u5927\u5C0F\u3002</p></div><div class="card"><h3>\u624B\u52A8\u5F15\u5165</h3><p>\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u90FD\u662F\u4E00\u4E2A<code>Vue\u63D2\u4EF6</code>\uFF0C\u5E76\u7531<code>\u7EC4\u4EF6\u903B\u8F91</code>\u548C<code>\u6837\u5F0F\u6587\u4EF6</code>\u7EC4\u6210\uFF0C\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u624B\u52A8\u5F15\u5165\u4F7F\u7528\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/button/style/index.js&#39;</span>

createApp().use(Button)
</code></pre></div><div class="card"><h3>\u81EA\u52A8\u5F15\u5165</h3><p>\u6240\u6709\u58F0\u660E\u5728\u6A21\u677F\u4E2D\u7684\u7EC4\u4EF6\uFF0C\u90FD\u4F1A\u88AB<a href="https://github.com/antfu/unplugin-vue-components">unplugin-vue-components</a>\u63D2\u4EF6\u81EA\u52A8\u626B\u63CF\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5F15\u5165<code>\u7EC4\u4EF6\u903B\u8F91</code>\u548C<code>\u6837\u5F0F\u6587\u4EF6</code>\u5E76<code>\u6CE8\u518C\u7EC4\u4EF6</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> \u5B89\u88C5\u63D2\u4EF6</span>
<span class="hljs-meta">#</span><span class="bash"> npm</span>
npm i unplugin-vue-components -D 
<span class="hljs-meta">#</span><span class="bash"> yarn</span>
yarn add unplugin-vue-components -D
</code></pre><h4>Vue Cli</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// vue.config.js</span>
<span class="hljs-keyword">const</span> Components = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>)
<span class="hljs-keyword">const</span> { VarletUIResolver } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/resolvers&#39;</span>)

<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">configureWebpack</span>: {
    <span class="hljs-attr">plugins</span>: [
      Components({
        <span class="hljs-attr">resolvers</span>: [VarletUIResolver()],
        <span class="hljs-attr">dts</span>: <span class="hljs-literal">true</span>
      })
    ]
  }
}
</code></pre><h4>Vite</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// vite.config.js</span>
<span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="hljs-keyword">import</span> components <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="hljs-keyword">import</span> { VarletUIResolver } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/resolvers&#39;</span>
<span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({
  <span class="hljs-attr">plugins</span>: [
    vue(),
    components({
      <span class="hljs-attr">resolvers</span>: [VarletUIResolver()],
      <span class="hljs-attr">dts</span>: <span class="hljs-literal">true</span>,
    })
  ]
})
</code></pre><p>\u5B8C\u6210\u914D\u7F6E\u540E\u5982\u4E0B\u4F7F\u7528\u5373\u53EF</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>\u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><p>\u6CE8\u610F: \u5728\u6A21\u677F\u4EE5\u5916\u4F7F\u7528\u7684\u7EC4\u4EF6\u6216\u8005\u81EA\u5B9A\u4E49\u6307\u4EE4\u65E0\u6CD5\u88AB\u63D2\u4EF6\u626B\u63CF\uFF0C\u4ECD\u9700\u8981\u624B\u52A8\u5F15\u5165\u3002\u4F8B\u5982\u7EC4\u4EF6\u7684\u51FD\u6570\u8C03\u7528\u65B9\u5F0F <code>Snackbar.loading</code>\u6216\u8005<code>v-ripple</code></p></div>`,4),c=[t];function o(r,h,i,d,j,u){return n(),a("div",p,c)}var v=s(l,[["render",o]]);export{v as default};
