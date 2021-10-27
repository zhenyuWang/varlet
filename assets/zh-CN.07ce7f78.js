import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as d}from"./vendor.ea41cd30.js";const e={components:{}},n={class:"varlet-site-doc"},l=d(`<h1>\u9AA8\u67B6\u5C4F</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u663E\u793A\u4E00\u4E9B\u5E26\u8FC7\u6E21\u6548\u679C\u7684\u5360\u4F4D\u5143\u7D20\uFF0C\u4F18\u5316\u52A0\u8F7D\u8FC7\u7A0B\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Skeleton } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Skeleton)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>\u52A0\u8F7D\u7684\u6570\u636E<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">true</span>)

    <span class="hljs-keyword">return</span> { loading }
  }
}
</code></pre></div><div class="card"><h3>\u663E\u793A\u6807\u9898</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span> <span class="hljs-attr">title</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>\u52A0\u8F7D\u7684\u6570\u636E<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u6BB5\u843D\u9AD8\u5EA6</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span>
  <span class="hljs-attr">title</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:rows-width</span>=<span class="hljs-string">&quot;[&#39;200px&#39;, &#39;100px&#39;, &#39;50px&#39;]&quot;</span>
&gt;</span>
  \u52A0\u8F7D\u7684\u6570\u636E
<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u663E\u793A\u5934\u50CF</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span>
  <span class="hljs-attr">title</span>
  <span class="hljs-attr">avatar</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
&gt;</span>
  \u52A0\u8F7D\u7684\u6570\u636E
<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u663E\u793A\u5361\u7247</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span>
  <span class="hljs-attr">title</span>
  <span class="hljs-attr">avatar</span>
  <span class="hljs-attr">card</span>
  <span class="hljs-attr">:rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
&gt;</span>
  \u52A0\u8F7D\u7684\u6570\u636E
<span class="hljs-tag">&lt;/<span class="hljs-name">var-skeleton</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5168\u5C4F\u6A21\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;loading = !loading&quot;</span>&gt;</span>
  \u5207\u6362\u5168\u5C4F\u6A21\u5F0F
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-skeleton</span> <span class="hljs-attr">fullscreen</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> /&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>loading</code></td><td>\u52A0\u8F7D\u72B6\u6001\uFF0C\u8BBE\u7F6E\u4E3A <code>true</code> \u5F00\u542F\u9AA8\u67B6\u5C4F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>title</code></td><td>\u662F\u5426\u663E\u793A\u6807\u9898</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>card</code></td><td>\u662F\u5426\u663E\u793A\u5361\u7247</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>avatar</code></td><td>\u662F\u5426\u663E\u793A\u5934\u50CF</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>fullscreen</code></td><td>\u662F\u5426\u5F00\u542F\u5168\u5C4F\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title-width</code></td><td>\u6807\u9898\u5BBD\u5EA6</td><td><em>string | number</em></td><td><code>50%</code></td></tr><tr><td><code>card-height</code></td><td>\u5361\u7247\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>160px</code></td></tr><tr><td><code>avatar-size</code></td><td>\u5934\u50CF\u5C3A\u5BF8</td><td><em>string | number</em></td><td><code>34px</code></td></tr><tr><td><code>rows</code></td><td>\u6BB5\u843D\u884C\u6570</td><td><em>string | number</em></td><td><code>3</code></td></tr><tr><td><code>rows-width</code></td><td>\u6BB5\u843D\u6BCF\u4E00\u884C\u7684\u5BBD\u5EA6</td><td><em>number[] | string[]</em></td><td><code>[&#39;12px&#39;, &#39;12px&#39;, &#39;12px&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u52A0\u8F7D\u6210\u529F\u540E\u663E\u793A\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--skeleton-content-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-card-height</code></td><td><code>160px</code></td></tr><tr><td><code>--skeleton-card-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--skeleton-card-margin-bottom</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-card-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-animation-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr><tr><td><code>--skeleton-avatar-size</code></td><td><code>34px</code></td></tr><tr><td><code>--skeleton-avatar-border-radius</code></td><td><code>50%</code></td></tr><tr><td><code>--skeleton-avatar-margin-right</code></td><td><code>16px</code></td></tr><tr><td><code>--skeleton-avatar-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-title-width</code></td><td><code>50%</code></td></tr><tr><td><code>--skeleton-title-border-radius</code></td><td><code>10px</code></td></tr><tr><td><code>--skeleton-title-background-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--skeleton-row-height</code></td><td><code>12px</code></td></tr><tr><td><code>--skeleton-row-border-radius</code></td><td><code>10px</code></td></tr><tr><td><code>--skeleton-row-margin-top</code></td><td><code>10px</code></td></tr></tbody></table></div>`,13),o=[l];function c(r,p,h,i,g,j){return t(),a("div",n,o)}var k=s(e,[["render",c]]);export{k as default};
