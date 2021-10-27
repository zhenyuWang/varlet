import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as e}from"./vendor.ea41cd30.js";const n={components:{}},l={class:"varlet-site-doc"},p=e(`<h1>Lazy</h1><div class="card"><h3>Intro</h3><p>Load when the image is visible</p><h4></h4></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Lazy } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Lazy)
</code></pre></div><div class="card"><h3>Basic Use</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;&quot;</span>&gt;</span>
</code></pre></div><div class="card"><h3>Background Image Lazy Load</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-lazy:background-image</span>=<span class="hljs-string">&quot;&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="card"><h3>Inline Attributes</h3><p>You can modify the <code>loading</code>, <code>error</code> image, and <code>reload attempts</code> by using inline properties.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> 
  <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;&quot;</span>
  <span class="hljs-attr">lazy-loading</span>=<span class="hljs-string">&quot;https://xxx.cn/loading.png&quot;</span>
  <span class="hljs-attr">lazy-error</span>=<span class="hljs-string">&quot;https://xxx.cn/error.png&quot;</span>
  <span class="hljs-attr">lazy-attempt</span>=<span class="hljs-string">&quot;3&quot;</span>
&gt;</span>
</code></pre></div><div class="card"><h3>Plugin</h3><p>The option to set the default <code>Lazy</code> load option is provided, which is passed in at plugin registration.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Lazy } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Lazy, {
  <span class="hljs-attr">loading</span>: <span class="hljs-string">&#39;https://xxx.cn/loading.png&#39;</span>,
  <span class="hljs-attr">error</span>: <span class="hljs-string">&#39;https://xxx.cn/error.png&#39;</span>,
  <span class="hljs-attr">attempt</span>: <span class="hljs-number">3</span>,
  <span class="hljs-attr">throttleWait</span>: <span class="hljs-number">300</span>,
  <span class="hljs-attr">events</span>: [
    <span class="hljs-string">&#39;scroll&#39;</span>, 
    <span class="hljs-string">&#39;wheel&#39;</span>, 
    <span class="hljs-string">&#39;mousewheel&#39;</span>, 
    <span class="hljs-string">&#39;resize&#39;</span>,
    <span class="hljs-string">&#39;animationend&#39;</span>,
    <span class="hljs-string">&#39;transitionend&#39;</span>, 
    <span class="hljs-string">&#39;touchmove&#39;</span>
  ],
  <span class="hljs-function"><span class="hljs-title">filter</span>(<span class="hljs-params">lazy</span>)</span> {
    <span class="hljs-comment">// All properties of the context can be accessed, and some property interceptions can be performed.</span>
    <span class="hljs-comment">// Such as simply modifying all image addresses http-&gt; https</span>
    lazy.src.replace(<span class="hljs-string">&#39;http://&#39;</span>, <span class="hljs-string">&#39;https://&#39;</span>)
  }
})
</code></pre></div><h2>API</h2><div class="card"><h3>Plugin Options</h3><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loading</code></td><td>Loading images, if possible, select images that load quickly</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>error</code></td><td>Load failed to display the picture</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>attempt</code></td><td>The number of times a load failed to reload</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>throttle wait time, The higher the value, the lower the trigger frequency</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>A list of events that trigger visibility detection registration</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>Attribute interceptor function</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div>`,9),r=[p];function c(d,o,i,h,g,j){return t(),a("div",l,r)}var v=s(n,[["render",c]]);export{v as default};
