import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as e}from"./vendor.ea41cd30.js";const n={components:{}},l={class:"varlet-site-doc"},p=e(`<h1>Image</h1><div class="card"><h3>Intro</h3><p>Components provide more convenient size, fill mode, rounded corner Settings, ripple effect enhanced picture click interactive experience. Supports <code>Lazy load</code>, <code>loading images</code>, <code>error images</code>, and default Settings for applying Lazy instructions.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Image } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Image)
</code></pre></div><div class="card"><h3>Basic Use</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Fit Mode</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> 
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span> 
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;cover&quot;</span> 
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> 
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> 
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span> 
  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;contain&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> 
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> 
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;none&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> 
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span> 
  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;scale-down&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> 
/&gt;</span>
</code></pre></div><div class="card"><h3>Set Radius</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;cover&quot;</span>
  <span class="hljs-attr">:radius</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-image</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span>
  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;cover&quot;</span>
  <span class="hljs-attr">radius</span>=<span class="hljs-string">&quot;50%&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>Use Ripple</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">ripple</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Use LazyLoad</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Set the lazy loading state</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> 
  <span class="hljs-attr">lazy</span>
  <span class="hljs-attr">loading</span>=<span class="hljs-string">&quot;https://xxx.xxx/loading.png&quot;</span>
  <span class="hljs-attr">error</span>=<span class="hljs-string">&quot;https://xxx.xxx/error.png&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>Use local paths</h3><p>In the file <code>.vue</code>, the <code>Vue component</code> will not be automatically processed by the build tool like the native img module, so you need to import the image resources manually. Here\u2019s how the different build tools are used.</p><h4>Webpack</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;require(&#39;../../assets/logo.png&#39;)&quot;</span>/&gt;</span>
</code></pre><h4>Vite</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;logo&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> logo <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../assets/logo.png&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> { logo }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>src</code></td><td>Image src</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Image fit mode, optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>fill</code></td></tr><tr><td><code>alt</code></td><td>Image alt text</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>width</code></td><td>Image width</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>Image height</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>radius</code></td><td>Image radius</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lazy</code></td><td>Whether to enable lazy loading</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading</code></td><td>When lazy loading is enabled, the image displayed in loading</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>When lazy loading is enabled, the image displayed in error</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>block</code></td><td>Whether it is a block element</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click on Image</td><td><code>event: Event</code></td></tr><tr><td><code>load</code></td><td>Triggered when the image is successfully loaded (when the image fails in lazy loading mode, it will only be triggered when the image is successfully loaded)</td><td><code>event: Event</code></td></tr><tr><td><code>error</code></td><td>Triggered when an image fails to load (when an image fails in lazy loading mode, it will only be triggered when the number of attempts ends)</td><td><code>event: Event</code></td></tr></tbody></table></div>`,13),c=[p];function r(d,o,h,i,g,j){return t(),a("div",l,c)}var v=s(n,[["render",r]]);export{v as default};
