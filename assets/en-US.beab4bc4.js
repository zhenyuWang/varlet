import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as e}from"./vendor.ea41cd30.js";const d={components:{}},n={class:"varlet-site-doc"},l=e(`<h1>Skeleton</h1><div class="card"><h3>Intro</h3><p>Display some space occupying elements with transition effect to optimize the loading process.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Skeleton } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Skeleton)
</code></pre></div><div class="card"><h3>Basic Use</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>Loading Data<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">true</span>)

    <span class="hljs-keyword">return</span> { loading }
  }
}
</code></pre></div><div class="card"><h3>Display Title</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span> <span class="hljs-attr">title</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>Loading Data<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>Custom Rows Height</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span>
  <span class="hljs-attr">title</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:rows-width</span>=<span class="hljs-string">&quot;[&#39;200px&#39;, &#39;100px&#39;, &#39;50px&#39;]&quot;</span>
&gt;</span>
  Loading Data
<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>Display Avatar</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span>
  <span class="hljs-attr">title</span>
  <span class="hljs-attr">avatar</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
&gt;</span>
	Loading Data
<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>Display Card</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span>
  <span class="hljs-attr">title</span>
  <span class="hljs-attr">avatar</span>
  <span class="hljs-attr">card</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
&gt;</span>
  Loading Data
<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>Fullscreen Mode</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;loading = !loading&quot;</span>&gt;</span>
	Toggle Fullscreen Mode
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span> <span class="hljs-attr">fullscreen</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> /&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loading</code></td><td>Loading Status Set to <code>true</code> to turn on the skeleton</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>title</code></td><td>Whether to display the title</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>card</code></td><td>Whether to display the card</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>avatar</code></td><td>Whether to display the avatar</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>fullscreen</code></td><td>Whether to enable fullscreen mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title-width</code></td><td>Title Width</td><td><em>string | number</em></td><td><code>50%</code></td></tr><tr><td><code>card-height</code></td><td>Card Height</td><td><em>string | number</em></td><td><code>160px</code></td></tr><tr><td><code>avatar-size</code></td><td>Avatar size</td><td><em>string | number</em></td><td><code>34px</code></td></tr><tr><td><code>rows</code></td><td>The paragraph number of rows</td><td><em>string | number</em></td><td><code>3</code></td></tr><tr><td><code>rows-width</code></td><td>The width of each line of a paragraph</td><td><em>number[] | string[]</em></td><td><code>[&#39;12px&#39;, &#39;12px&#39;, &#39;12px&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u52A0\u8F7D\u6210\u529F\u540E\u663E\u793A\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--skeleton-content-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-card-height</code></td><td><code>160px</code></td></tr><tr><td><code>--skeleton-card-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--skeleton-card-margin-bottom</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-card-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-animation-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr><tr><td><code>--skeleton-avatar-size</code></td><td><code>34px</code></td></tr><tr><td><code>--skeleton-avatar-border-radius</code></td><td><code>50%</code></td></tr><tr><td><code>--skeleton-avatar-margin-right</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-avatar-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-title-width</code></td><td><code>50%</code></td></tr><tr><td><code>--skeleton-title-border-radius</code></td><td><code>10px</code></td></tr><tr><td><code>--skeleton-title-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-row-height</code></td><td><code>12px</code></td></tr><tr><td><code>--skeleton-row-border-radius</code></td><td><code>10px</code></td></tr><tr><td><code>--skeleton-row-margin-top</code></td><td><code>10px</code></td></tr></tbody></table></div>`,13),o=[l];function c(r,p,h,i,g,j){return t(),a("div",n,o)}var v=s(d,[["render",c]]);export{v as default};
