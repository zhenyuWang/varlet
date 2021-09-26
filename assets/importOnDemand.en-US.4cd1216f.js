import{_ as s}from"./IconSfc.fde87e76.js";import{o as a,c as n,a5 as e}from"./vendor.85536c59.js";const l={components:{}},p={class:"varlet-site-doc"},t=e(`<h1>Import On Demand</h1><div class="card"><h3>Intro</h3><p>The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.</p></div><div class="card"><h3>Install method</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/button/style/index.js&#39;</span>

createApp().use(Button)
</code></pre><p>The logical part and style part of the component are installed as above, but this setup is relatively tedious Best practices based on <code>Webpack</code> and <code>Vite</code> build tools are recommended here</p></div><div class="card"><h3>Webpack</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> Install plugin</span>
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
</code></pre><p>After the configuration is complete, the plugin automatically loads the style files required for the component when it is introduced, using the following method</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Button)
</code></pre></div><div class="card"><h3>Vite</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> Install plugin</span>
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
</code></pre><p>After the configuration is completed, all components declared in the template do not need to be registered. The plug-in will automatically introduce component styles and registered components.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Default Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre><p>Note that for functional components, you need to manually introduce styles, such as <code>Dialog</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/dialog/style/index.js&#39;</span>

Dialog(<span class="hljs-string">&#39;Varlet UI UP UP&#39;</span>)
</code></pre><p>Note that for directives, need to be manually registered, such as <code>Ripple</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Ripple } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Ripple)
</code></pre></div>`,5),r=[t];function o(c,i,h,d,m,j){return a(),n("div",p,r)}var y=s(l,[["render",o]]);export{y as default};
