import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const l={components:{}},e={class:"varlet-site-doc"},c=n(`<h1>\u7C98\u6027\u5E03\u5C40</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7C98\u6027\u5E03\u5C40\u9ED8\u8BA4\u4F7F\u7528\u76D1\u542C\u5BB9\u5668\u6EDA\u52A8\u4E8B\u4EF6\u7684<code>scroll</code>\u6A21\u5F0F\uFF0C\u5982\u6709\u9700\u8981\u53EF\u4EE5\u5207\u6362\u6210\u57FA\u4E8E<code>css sticky</code>\u7684\u6A21\u5F0F\u6765\u63D0\u5347\u6027\u80FD\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Sticky } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Sticky)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-sticky</span> <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;54&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u57FA\u672C\u4F7F\u7528<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-sticky</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5C40\u90E8\u5438\u9876</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;scroller&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-sticky</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u5C40\u90E8\u5438\u9876<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-sticky</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.scroller</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
  <span class="hljs-attribute">overflow</span>: auto;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#2979ff</span>;

  <span class="hljs-selector-class">.block</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#2979ff</span>;
    <span class="hljs-attribute">opacity</span>: .<span class="hljs-number">5</span>;
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>\u5438\u9876\u8DDD\u79BB</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>\u5438\u9876\u65F6\u7684\u5C42\u7EA7</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>css-mode</code></td><td>\u5F00\u542F\u539F\u751F<code>css sticky</code>\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u7981\u7528\u5438\u9876, \u8BBE\u7F6E\u4E3A<code>true</code>\u65F6, \u5143\u7D20\u4F1A\u56DE\u5230\u6587\u6863\u6D41\u4E2D</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>\u5F53\u6EDA\u52A8\u5BB9\u5668\u6EDA\u52A8\u65F6\u89E6\u53D1</td><td><code>offsetTop: number</code> \u8DDD\u79BB\u9876\u90E8px\u503C <br> <code>isFixed: boolean</code> \u662F\u5426\u5438\u9876</td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u7C98\u6027\u5E03\u5C40\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div>`,9),d=[c];function p(h,o,r,i,j,g){return a(),t("div",e,d)}var b=s(l,[["render",p]]);export{b as default};
