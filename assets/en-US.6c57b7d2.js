import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},e=n(`<h1>Swipe</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Swipe, SwipeItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Swipe).use(SwipeItem)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.swipe</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">160px</span>;
}

<span class="hljs-selector-class">.swipe-item</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">object-fit</span>: cover;
}
</code></pre></div><div class="card"><h3>Forbid Loop</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre></div><div class="card"><h3>Autoplay</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;2000&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre></div><div class="card"><h3>Vertical Swipe</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre></div><div class="card"><h3>Handle Change</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;Snackbar&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> { Snackbar }
  }
}
</code></pre></div><div class="card"><h3>Custom Indicator</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">indicator</span>=<span class="hljs-string">&quot;{ index, length }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;indicators&quot;</span>&gt;</span>
      {{ index + 1 }} / {{ length }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.swipe</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">160px</span>;
}

<span class="hljs-selector-class">.swipe-item</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">object-fit</span>: cover;
}

<span class="hljs-selector-class">.indicators</span> {
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">text-align</span>: center;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span> <span class="hljs-number">0</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.6</span>);
}
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loop</code></td><td>Whether to swipe the loop</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>autoplay</code></td><td>Auto play interval time(ms)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>duration</code></td><td>Transition time</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>initial-index</code></td><td>Initializes the index displayed</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>indicator</code></td><td>Whether to display the indicator</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator-color</code></td><td>Indicator color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to enable vertical swipe</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>touchable</code></td><td>Whether to enable touch</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>You can call this method to redraw when a tabs changes position size</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>prev</code></td><td>Previous page</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>Next page</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>to</code></td><td>To index page</td><td><code>index: number</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when change swipe</td><td><code>index: number</code> swipe index</td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Swipe content</td><td><code>-</code></td></tr><tr><td><code>indicator</code></td><td>Swipe indicator content</td><td><code>index: number</code> <br> <code>length: number</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--swipe-indicator-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--swipe-indicators-offset</code></td><td><code>10px</code></td></tr><tr><td><code>--swipe-indicator-offset</code></td><td><code>4px</code></td></tr></tbody></table></div>`,14),c=[e];function h(r,i,o,d,j,g){return a(),t("div",p,c)}var v=s(l,[["render",h]]);export{v as default};
