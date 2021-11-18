import{_ as s}from"./elevation.548891b7.js";import{o as a,c as n,K as e}from"./vendor.8a125dba.js";const l={components:{}},t={class:"varlet-site-doc"},r=e(`<h1>\u6697\u9ED1\u6A21\u5F0F</h1><p>\u7EC4\u4EF6\u5E93\u7B2C\u4E00\u65B9\u63D0\u4F9B\u4E86\u6697\u9ED1\u6A21\u5F0F\u7684\u4E3B\u9898\uFF0C\u6697\u9ED1\u6A21\u5F0F\u7684\u4F18\u52BF\u5728\u4E8E\u5728\u5F31\u5149\u73AF\u5883\u4E0B\u5177\u6709\u66F4\u9AD8\u7684\u53EF\u8BFB\u6027\u3002</p><div class="card"><h3>\u5207\u6362\u4E3B\u9898</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleTheme&quot;</span>&gt;</span>\u5207\u6362\u4E3B\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> dark <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui/es/themes/dark&#39;</span>
<span class="hljs-keyword">import</span> { StyleProvider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">let</span> currentTheme
    
    <span class="hljs-keyword">const</span> toggleTheme = <span class="hljs-function">() =&gt;</span> {
      currentTheme = currentTheme ? <span class="hljs-literal">null</span> : dark
      StyleProvider(currentTheme)
    }
    
    <span class="hljs-keyword">return</span> { toggleTheme }
  }
}
</code></pre><p>\u6CE8\u5165\u7EC4\u4EF6\u5E93\u63A8\u8350\u7684<code>\u6587\u5B57\u989C\u8272</code>\u548C<code>\u80CC\u666F\u989C\u8272</code>\u53D8\u91CF\u6765\u63A7\u5236\u6574\u4F53\u989C\u8272</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">transition</span>: background-color .<span class="hljs-number">25s</span>;
  <span class="hljs-attribute">color</span>: var(--<span class="hljs-attribute">color</span>-text);
  <span class="hljs-attribute">background-color</span>: var(--<span class="hljs-attribute">color</span>-body);
}
</code></pre></div>`,3),c=[r];function p(o,h,d,i,j,u){return a(),n("div",t,c)}var k=s(l,[["render",p]]);export{k as default};
