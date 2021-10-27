import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as n}from"./vendor.ea41cd30.js";const l={components:{}},e={class:"varlet-site-doc"},p=n(`<h1>\u56FE\u7247</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u66F4\u65B9\u4FBF\u7684\u5C3A\u5BF8\uFF0C\u586B\u5145\u6A21\u5F0F\uFF0C\u5706\u89D2\u7684\u8BBE\u7F6E\u65B9\u5F0F\uFF0C\u6C34\u6CE2\u6548\u679C\u589E\u5F3A\u56FE\u7247\u70B9\u51FB\u4EA4\u4E92\u4F53\u9A8C\u3002 \u652F\u6301<code>\u61D2\u52A0\u8F7D</code>\u3001<code>loading\u56FE\u7247</code>\u3001 <code>error\u56FE\u7247</code>\u3001\u5E94\u7528<code>Lazy</code>\u6307\u4EE4\u7684\u9ED8\u8BA4\u8BBE\u7F6E\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Image } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Image)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u586B\u5145\u6A21\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;85px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;85px&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> /&gt;</span>

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
</code></pre></div><div class="card"><h3>\u8BBE\u7F6E\u5706\u89D2</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span>
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
</code></pre></div><div class="card"><h3>\u5F00\u542F\u6C34\u6CE2</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">ripple</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u5F00\u542F\u61D2\u52A0\u8F7D</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">lazy</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u8BBE\u7F6E\u61D2\u52A0\u8F7D\u72B6\u6001\u56FE\u7247</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> 
  <span class="hljs-attr">lazy</span>
  <span class="hljs-attr">loading</span>=<span class="hljs-string">&quot;https://xxx.xxx/loading.png&quot;</span>
  <span class="hljs-attr">error</span>=<span class="hljs-string">&quot;https://xxx.xxx/error.png&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>\u4F7F\u7528\u672C\u5730\u8DEF\u5F84</h3><p>\u5728<code>.vue</code>\u6587\u4EF6\u4E2D,<code>Vue\u7EC4\u4EF6</code>\u4E0D\u4F1A\u5982\u540C\u539F\u751Fimg\u4E00\u6837\u88AB\u6784\u5EFA\u5DE5\u5177\u81EA\u52A8\u5904\u7406\u6A21\u5757\u8BF7\u6C42\uFF0C\u6240\u4EE5\u9700\u8981\u624B\u52A8\u5BFC\u5165\u56FE\u7247\u8D44\u6E90\u3002 \u4E0B\u9762\u662F\u4E0D\u540C\u6784\u5EFA\u5DE5\u5177\u7684\u4F7F\u7528\u65B9\u5F0F\u3002</p><h4>Webpack</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;require(&#39;../../assets/logo.png&#39;)&quot;</span>/&gt;</span>
</code></pre><h4>Vite</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;logo&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> logo <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../../assets/logo.png&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> { logo }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>src</code></td><td>\u56FE\u7247\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>\u586B\u5145\u6A21\u5F0F, \u53EF\u9009\u503C\u4E3A <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>fill</code></td></tr><tr><td><code>alt</code></td><td>\u66FF\u4EE3\u6587\u672C</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>width</code></td><td>\u56FE\u7247\u5BBD\u5EA6</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>\u56FE\u7247\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>radius</code></td><td>\u56FE\u7247\u5706\u89D2</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lazy</code></td><td>\u662F\u5426\u5F00\u542F\u61D2\u52A0\u8F7D</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading</code></td><td>\u5F53\u5F00\u542F\u61D2\u52A0\u8F7D\u65F6, \u52A0\u8F7D\u4E2D\u663E\u793A\u7684\u56FE\u7247</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>\u5F53\u5F00\u542F\u61D2\u52A0\u8F7D\u65F6, \u52A0\u8F7D\u5931\u8D25\u663E\u793A\u7684\u56FE\u7247</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>\u662F\u5426\u5F00\u542F\u6C34\u6CE2</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>block</code></td><td>\u662F\u5426\u662F\u5757\u7EA7\u5143\u7D20</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u56FE\u7247\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td><code>load</code></td><td>\u56FE\u7247\u6210\u529F\u52A0\u8F7D\u65F6\u89E6\u53D1(\u61D2\u52A0\u8F7D\u6A21\u5F0F\u4E0B\u5931\u8D25\u65F6\u4F1A\u591A\u6B21\u5C1D\u8BD5\u52A0\u8F7D\u56FE\u7247\uFF0C\u53EA\u4F1A\u5728\u6210\u529F\u52A0\u8F7D\u65F6\u89E6\u53D1)</td><td><code>event: Event</code></td></tr><tr><td><code>error</code></td><td>\u56FE\u7247\u5931\u8D25\u52A0\u8F7D\u65F6\u89E6\u53D1(\u61D2\u52A0\u8F7D\u6A21\u5F0F\u4E0B\u5931\u8D25\u65F6\u4F1A\u591A\u6B21\u5C1D\u8BD5\u52A0\u8F7D\u56FE\u7247\uFF0C\u53EA\u4F1A\u5728\u5C1D\u8BD5\u6B21\u6570\u7ED3\u675F\u65F6\u89E6\u53D1)</td><td><code>event: Event</code></td></tr></tbody></table></div>`,13),c=[p];function r(d,h,o,i,g,j){return t(),a("div",e,c)}var v=s(l,[["render",r]]);export{v as default};
