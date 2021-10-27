import{_ as s}from"./elevation.c2941a7c.js";import{o as n,c as a,L as e}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},t=e(`<h1>Import On Demand</h1><div class="card"><h3>Intro</h3><p>The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.</p></div><div class="card"><h3>Manual Import</h3><p>Each component is a <code>Vue plugin</code> and is composed of <code>component logic</code> and <code>style files</code>. It is manually install and used as follows.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/button/style/index.js&#39;</span>

createApp().use(Button)
</code></pre></div><div class="card"><h3>Auto Import</h3><p>All components declared in the template are automatically scanned by the plug-in. The <a href="https://github.com/antfu/unplugin-vue-components">unplugin-vue-components</a> will automatically import <code>component logic</code> and <code>style files</code> and <code>use components</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> Install plugin</span>
<span class="hljs-meta">#</span><span class="bash"> npm</span>
npm i babel-plugin-import -D 
<span class="hljs-meta">#</span><span class="bash"> yarn</span>
yarn add babel-plugin-import -D
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
</code></pre><p>After completing the configuration, you can use it as follows</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Default Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><p>Note: Components or directive used outside the template cannot be scanned by the plugin and still need to be imported manually. For example, the function call method of the component <code>Snackbar.loading</code> or <code>v-ripple</code></p></div>`,4),o=[t];function c(r,i,h,d,m,u){return n(),a("div",p,o)}var f=s(l,[["render",c]]);export{f as default};
