import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as e}from"./vendor.ea41cd30.js";const n={components:{}},l={class:"varlet-site-doc"},c=e(`<h1>Sticky</h1><div class="card"><h3>Intro</h3><p>The sticky layout uses the <code>scroll</code> layout mode that listens to container scroll events by default. If necessary, you can switch to the <code>css sticky</code> layout mode to improve performance.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Sticky } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Sticky)
</code></pre></div><div class="card"><h3>Basic Use</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-sticky</span> <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;54&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Basic Use<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-sticky</span>&gt;</span>
</code></pre></div><div class="card"><h3>Local Sticky</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;scroller&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-sticky</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Local Sticky<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
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
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>Sticky offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>Sticky z-index</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>css-mode</code></td><td>Enable native <code>css sticky</code> mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Disable sticky, when set to <code>true</code>, the element will return to the document flow</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>Triggered when the scroll container rolls</td><td><code>offsetTop: number</code> <br> <code>isFixed: boolean</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Sticky content</td><td><code>-</code></td></tr></tbody></table></div>`,9),o=[c];function d(p,r,h,i,j,u){return t(),a("div",l,o)}var b=s(n,[["render",d]]);export{b as default};
