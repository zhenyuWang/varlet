import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as e,L as a}from"./vendor.ea41cd30.js";const d={components:{}},n={class:"varlet-site-doc"},l=a(`<h1>\u4E0B\u62C9\u5237\u65B0</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u63D0\u4F9B\u4E0B\u62C9\u5237\u65B0\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { PullRefresh } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(PullRefresh)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><p>\u4E0B\u62C9\u5230\u5237\u65B0\u4F4D\u7F6E\u65F6\u677E\u5F00\u4F1A\u89E6\u53D1<code>refresh</code>\u4E8B\u4EF6\uFF0C \u5728\u4E8B\u4EF6\u5F00\u59CB\u65F6\u5C06<code>v-model</code>\u8BBE\u7F6E\u4E3A<code>true</code>\u8868\u793A\u6B63\u5728\u52A0\u8F7D\uFF0C\u5B8C\u6210\u540E\u5C06<code>v-model</code>\u8BBE\u7F6E\u4E3A<code>false</code>\u8868\u793A\u52A0\u8F7D\u7ED3\u675F\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isRefresh&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;refresh&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in data&quot;</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>
    <span class="hljs-attr">border</span>
  &gt;</span>
    {{ item + &#39; &#39; + (index + 1) }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-pull-refresh</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> data1 = <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>).fill(<span class="hljs-string">&#39;List Item&#39;</span>)
<span class="hljs-keyword">const</span> data2 = <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>).fill(<span class="hljs-string">&#39;This is new List Item&#39;</span>)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> isRefresh = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> data = ref(data1)

    <span class="hljs-keyword">const</span> refresh = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        data.value = data.value[<span class="hljs-number">0</span>] === <span class="hljs-string">&#39;List Item&#39;</span> ? data2 : data1
        isRefresh.value = <span class="hljs-literal">false</span>
      }, <span class="hljs-number">2000</span>)
    }

    <span class="hljs-keyword">return</span> {
      refresh,
      isRefresh,
      data
    }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u4E2D\u72B6\u6001</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u4E0B\u62C9\u5237\u65B0</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>animation-duration</code></td><td>\u52A0\u8F7D\u7ED3\u675F\u540E\u56DE\u5230\u521D\u59CB\u4F4D\u7F6E\u7684\u52A8\u753B\u65F6\u957F(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>\u6210\u529F\u63D0\u793A\u5C55\u793A\u65F6\u957F(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bgColor</code></td><td>control\u7684\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>control \u7684\u989C\u8272</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>successBgColor</code></td><td>\u6210\u529F\u72B6\u6001\u4E0Bcontrol\u7684\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>successColor</code></td><td>\u6210\u529F\u72B6\u6001\u4E0Bcontrol\u7684\u989C\u8272</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9ED8\u8BA4\u63D2\u69FD</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table></div>`,9),c=[l];function r(o,h,p,i,f,j){return t(),e("div",n,c)}var v=s(d,[["render",r]]);export{v as default};
