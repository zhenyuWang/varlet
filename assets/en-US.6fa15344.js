import{_ as s}from"./elevation.548891b7.js";import{o as a,c as e,K as n}from"./vendor.8a125dba.js";const l={components:{}},t={class:"varlet-site-doc"},r=n(`<h1>Dark Mode</h1><p>The first party of the component library provides the theme of dark mode. The advantage of dark mode is that it has higher readability in low light environments.</p><div class="card"><h3>Toggle Theme</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleTheme&quot;</span>&gt;</span>Toggle Theme<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
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
</code></pre><p>Inject the <code>text color</code> and <code>background color</code> variables recommended by the component library to control the overall color</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">transition</span>: background-color .<span class="hljs-number">25s</span>;
  <span class="hljs-attribute">color</span>: var(--<span class="hljs-attribute">color</span>-text);
  <span class="hljs-attribute">background-color</span>: var(--<span class="hljs-attribute">color</span>-body);
}
</code></pre></div>`,3),o=[r];function c(p,h,i,d,j,m){return a(),e("div",t,o)}var k=s(l,[["render",c]]);export{k as default};
