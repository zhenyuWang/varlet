import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as d}from"./vendor.ea41cd30.js";const e={components:{}},n={class:"varlet-site-doc"},l=d(`<h1>\u7D22\u5F15\u680F</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u8DF3\u8F6C\u5230\u9875\u9762\u6307\u5B9A\u4F4D\u7F6E\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { IndexBar, IndexAnchor } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(IndexBar).use(IndexAnchor)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><p>\u70B9\u51FB\u7D22\u5F15\u680F\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684 <code>IndexAnchor</code> \u951A\u70B9\u4F4D\u7F6E\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-index-bar</span> 
  <span class="hljs-attr">duration</span>=<span class="hljs-string">&quot;300&quot;</span> 
  <span class="hljs-attr">:sticky-offset-top</span>=<span class="hljs-string">&quot;54&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> 
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-index-anchor</span> 
      <span class="hljs-attr">:index</span>=<span class="hljs-string">&quot;item&quot;</span> 
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;var-index-anchor__example&quot;</span>
    &gt;</span> 
      \u6807\u9898 {{ item }} 
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-index-anchor</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>{{ item }} \u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>{{ item }} \u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>{{ item }} \u6587\u672C<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-index-bar</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> list = ref([])

      onMounted(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">26</span>; i++) {
          list.value.push(<span class="hljs-built_in">String</span>.fromCharCode(<span class="hljs-number">65</span> + i))
        }
      })

      <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(value)
      }

      <span class="hljs-keyword">return</span> {
        list,
        change
      }
    }
  }
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3></div><div class="card"><h3>IndexBar \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>sticky</code></td><td>\u662F\u5426\u5F00\u542F\u951A\u70B9\u5438\u9876</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>sticky-offset-top</code></td><td>\u951A\u70B9\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>hide-list</code></td><td>\u662F\u5426\u9690\u85CF\u951A\u70B9\u5217\u8868</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>css-mode</code></td><td>\u5F00\u542F\u539F\u751F<code>css sticky</code>\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>z-index \u5C42\u7EA7</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td><code>highlight-color</code></td><td>\u7D22\u5F15\u5B57\u7B26\u9AD8\u4EAE\u989C\u8272</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td><code>duration</code></td><td>\u52A8\u753B\u6301\u7EED\u65F6\u95F4</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>IndexAnchor \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>index</code></td><td>\u7D22\u5F15\u5B57\u7B26</td><td><em>number | string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3></div><div class="card"><h3>IndexBar \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u7D22\u5F15\u680F\u7684\u5B57\u7B26\u65F6\u89E6\u53D1</td><td><code>index: number | string</code></td></tr><tr><td><code>change</code></td><td>\u5F53\u524D\u9AD8\u4EAE\u7684\u7D22\u5F15\u5B57\u7B26\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3></div><div class="card"><h3>IndexAnchor \u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u7D22\u5F15\u5B57\u7B26</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 IndexBar \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>scrollTo</code></td><td>\u6EDA\u52A8\u5230\u6307\u5B9A\u951A\u70B9</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--index-bar-list-item-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--index-bar-list-item-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--index-bar-list-item-active-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--index-bar-list-item-height</code></td><td><code>14px</code></td></tr><tr><td><code>--index-bar-list-item-padding</code></td><td><code>0 10px</code></td></tr></tbody></table></div>`,14),c=[l];function r(o,h,p,i,j,m){return t(),a("div",n,c)}var u=s(e,[["render",r]]);export{u as default};
