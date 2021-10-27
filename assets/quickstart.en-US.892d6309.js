import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as p}from"./vendor.ea41cd30.js";const t={components:{}},l={class:"varlet-site-doc"},e=p(`<h1>Quickstart</h1><div class="card"><h3>Intro</h3><p>Here are the most basic ways to access component libraries in common development patterns.</p></div><div class="card"><h3>Install</h3></div><div class="card"><h3>CDN</h3><p><code>varlet.js</code> contain all the styles and logic of the component library, and you can import them.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;app&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> app = Vue.createApp({
    <span class="hljs-attr">template</span>: <span class="hljs-string">&#39;&lt;var-button&gt;Button&lt;/var-button&gt;&#39;</span>
  })
  app.use(Varlet).mount(<span class="hljs-string">&#39;#app&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div><div class="card"><h3>Webpack/Vite</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> Install with npm or yarn</span>
<span class="hljs-meta">#</span><span class="bash"> npm</span>
npm i @varlet/ui -S
<span class="hljs-meta">#</span><span class="bash"> yarn</span>
yarn add @varlet/ui
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>
<span class="hljs-keyword">import</span> Varlet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/style.js&#39;</span>

createApp(App).use(Varlet).mount(<span class="hljs-string">&#39;#app&#39;</span>)
</code></pre></div>`,5),c=[e];function r(h,o,i,d,j,m){return a(),n("div",l,c)}var u=s(t,[["render",r]]);export{u as default};
