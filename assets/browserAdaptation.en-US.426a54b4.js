import{_ as s}from"./elevation.c2941a7c.js";import{o as e,c as a,L as t}from"./vendor.ea41cd30.js";const o={components:{}},n={class:"varlet-site-doc"},c=t(`<h1>Browser Adaptation</h1><div class="card"><h3>Intro</h3><p>The component library provides mobile and desktop adaptations, scheme <code>varlet-touch-emulator</code> is used for mobile terminal adaptation, scheme <code>varlet-touch-emulator</code> is used for mobile terminal adaptation.</p></div><div class="card"><h3>Mobile Adaptation</h3><p>The component library design is based on the <code>375px</code> width design draft. It is recommended to use PostCSS plugin to convert <code>px</code> units into <code>vw</code> units to achieve mobile terminal adaptation. Create <code>postcss.config.js</code> under the <code>Webpack/Vite</code> project root path And do the following configuration <code>375px -&gt; 100vw</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> npm</span>
npm i postcss-px-to-viewport -D
<span class="hljs-meta">#</span><span class="bash"> yarn</span>
yarn add postcss-px-to-viewport -D
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-string">&#39;postcss-px-to-viewport&#39;</span>: {
      <span class="hljs-attr">viewportWidth</span>: <span class="hljs-number">375</span>,
      <span class="hljs-attr">unitPrecision</span>: <span class="hljs-number">6</span>,
      <span class="hljs-attr">unitToConvert</span>: <span class="hljs-string">&#39;px&#39;</span>,
      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#39;*&#39;</span>],
    }
  }
}
</code></pre></div><div class="card"><h3>Desktop Adaptation</h3><p>Because component library interaction events are developed using <code>touch</code> events, <code>mouse</code> events on the desktop side are not supported. It is recommended to use <code>@varlet/touch-emulator</code> to set <code>touch -&gt; mouse</code> for desktop adaptation.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> npm</span>
npm i @varlet/touch-emulator
<span class="hljs-meta">#</span><span class="bash"> yarn</span>
yarn add @varlet/touch-emulator
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/touch-emulator&#39;</span>
</code></pre></div>`,4),p=[c];function r(l,i,d,h,m,u){return e(),a("div",n,p)}var g=s(o,[["render",r]]);export{g as default};
