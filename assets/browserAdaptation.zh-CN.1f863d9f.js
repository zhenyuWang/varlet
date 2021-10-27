import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as e,L as c}from"./vendor.ea41cd30.js";const n={components:{}},t={class:"varlet-site-doc"},o=c(`<h1>\u6D4F\u89C8\u5668\u9002\u914D</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7EC4\u4EF6\u5E93\u63D0\u4F9B\u79FB\u52A8\u7AEF\u548C\u684C\u9762\u7AEF\u9002\u914D\u65B9\u6848, \u79FB\u52A8\u7AEF\u4F7F\u7528<code>postcss-px-to-viewport</code>\u65B9\u6848\u8FDB\u884C\u9002\u914D, \u684C\u9762\u7AEF\u4F7F\u7528<code>@varlet/touch-emulator</code>\u65B9\u6848\u8FDB\u884C\u9002\u914D\u3002</p></div><div class="card"><h3>\u79FB\u52A8\u7AEF\u9002\u914D</h3><p>\u7EC4\u4EF6\u5E93\u8BBE\u8BA1\u57FA\u4E8E<code>375px</code>\u5BBD\u5EA6\u8BBE\u8BA1\u7A3F\uFF0C\u63A8\u8350\u4F7F\u7528postcss\u63D2\u4EF6\u5C06<code>px</code>\u5355\u4F4D\u8F6C\u6362\u6210<code>vw</code>\u5355\u4F4D\u4ECE\u800C\u5B9E\u73B0\u79FB\u52A8\u7AEF\u9002\u914D\u3002 \u5728<code>Webpack/Vite</code>\u9879\u76EE\u6839\u8DEF\u5F84\u4E0B\u521B\u5EFA<code>postcss.config.js</code>\u5E76\u505A\u5982\u4E0B\u914D\u7F6E\u4E4B\u540E<code>375px -&gt; 100vw</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> npm</span>
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
</code></pre></div><div class="card"><h3>\u684C\u9762\u7AEF\u9002\u914D</h3><p>\u7531\u4E8E\u7EC4\u4EF6\u5E93\u4EA4\u4E92\u4E8B\u4EF6\u4F7F\u7528<code>touch</code>\u4E8B\u4EF6\u8FDB\u884C\u5F00\u53D1\uFF0C\u4E0D\u652F\u6301\u684C\u9762\u7AEF\u7684<code>mouse</code>\u4E8B\u4EF6\uFF0C \u63A8\u8350\u4F7F\u7528<code>@varlet/touch-emulator</code>\u5C06<code>touch -&gt; mouse</code>\u4ECE\u800C\u5B9E\u73B0\u684C\u9762\u7AEF\u9002\u914D\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-meta">#</span><span class="bash"> npm</span>
npm i @varlet/touch-emulator
<span class="hljs-meta">#</span><span class="bash"> yarn</span>
yarn add @varlet/touch-emulator
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/touch-emulator&#39;</span>
</code></pre></div>`,4),p=[o];function l(r,h,d,i,m,j){return a(),e("div",t,p)}var g=s(n,[["render",l]]);export{g as default};
