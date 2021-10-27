import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as l}from"./vendor.ea41cd30.js";const n={components:{}},e={class:"varlet-site-doc"},p=l(`<h1>\u6298\u53E0\u9762\u677F</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Collapse, CollapseItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Collapse).use(CollapseItem)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><p>\u901A\u8FC7 <code>v-model</code> \u63A7\u5236\u5C55\u5F00\u7684\u9762\u677F\u5217\u8868\uFF0C<code>value</code> \u4E3A\u6570\u7EC4\u683C\u5F0F\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeHandle&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref([<span class="hljs-string">&#39;1&#39;</span>])

    <span class="hljs-keyword">const</span> changeHandle = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(val)
    }
    
    <span class="hljs-keyword">return</span> {
      value,
      changeHandle
    }
  }
}
</code></pre></div><div class="card"><h3>\u9690\u85CF\u8FB9\u8DDD</h3><p>\u4F7F\u7528 <code>offset</code> \u5C5E\u6027\u9690\u85CF\u8FB9\u8DDD\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u624B\u98CE\u7434\u6A21\u5F0F</h3><p>\u4F7F\u7528 <code>accordion</code> \u5C5E\u6027\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u6B64\u65F6<code>value</code>\u4E3A\u5B57\u7B26\u4E32\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">accordion</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
    
    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>\u7981\u7528</h3><p>\u5728 <code>collapse-item</code> \u4E0A\u4F7F\u7528 <code>disabled</code> \u5C5E\u6027\u7981\u7528\u5F53\u524D\u9762\u677F\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;disabled = !disabled&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 8px&quot;</span>&gt;</span>
  {{ disabled ? &#39;\u542F\u7528&#39; : &#39;\u7981\u7528&#39; }}
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>
    \u5185\u5BB9
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>
    \u5185\u5BB9
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref([<span class="hljs-number">1</span>])
    <span class="hljs-keyword">const</span> disabled = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      value,
      disabled
    }
  }
}
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;account-circle&quot;</span>&gt;</span>
    \u8FD9\u662F\u5185\u5BB9
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>\u8FD9\u662F\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>^_^<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u8FD9\u662F\u5185\u5BB9
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3></div><div class="card"><h3>Collapse \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u5F53\u524D\u5C55\u5F00\u9762\u677F\u7684 name</td><td>\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A <em>string | number</em><br> \u975E\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u8DDD</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>CollapseItem \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u7D22\u5F15\u503C</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>\u9762\u677F\u6807\u9898</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon\u7684\u540D\u79F0</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u9762\u677F</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3></div><div class="card"><h3>Collapse \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1</td><td><code>value: \u7C7B\u578B\u4E0E v-model \u7ED1\u5B9A\u7684\u503C\u4E00\u81F4</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3></div><div class="card"><h3>CollapseItem \u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9762\u677F\u7684\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u9762\u677F\u7684\u6807\u9898</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr></tbody></table></div>`,17),c=[p];function d(o,h,r,i,j,g){return a(),t("div",e,c)}var v=s(n,[["render",d]]);export{v as default};
