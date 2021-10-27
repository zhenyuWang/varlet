import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as l}from"./vendor.ea41cd30.js";const n={components:{}},e={class:"varlet-site-doc"},d=l(`<h1>\u9009\u62E9\u6846</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Select, Option } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Select).use(Option)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><p>\u7EC4\u4EF6\u4F1A\u4F7F\u7528option\u7684<code>label</code>\u4F5C\u4E3A\u663E\u793A\u7684\u6587\u672C\u3002 \u7EC4\u4EF6\u4F1A\u4F18\u5148\u4F7F\u7528option\u7684<code>value</code>\u4F5C\u4E3A\u9009\u9879\u7684\u503C\uFF0C\u5176\u6B21\u4F7F\u7528<code>label</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)

    <span class="hljs-keyword">return</span> { value }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u6734\u7D20\u6A21\u5F0F</h3><p>\u5982\u679C\u53EA\u9700\u8981\u7EC4\u4EF6\u7684\u57FA\u672C\u529F\u80FD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5C5E\u6027\u53BB\u9664\u90E8\u5206\u6837\u5F0F\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">:hint</span>=<span class="hljs-string">&quot;false&quot;</span> 
  <span class="hljs-attr">:line</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879&quot;</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u6587\u672C\u5173\u8054\u503C</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u7981\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879&quot;</span> 
  <span class="hljs-attr">disabled</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u53EA\u8BFB</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879&quot;</span>
  <span class="hljs-attr">readonly</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u53EF\u6E05\u9664</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879&quot;</span> 
  <span class="hljs-attr">clearable</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u663E\u793A\u56FE\u6807</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Icon)
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prepend-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;plus&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">append-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;minus&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u591A\u9009</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref([])

    <span class="hljs-keyword">return</span> { value }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879&quot;</span> 
  <span class="hljs-attr">multiple</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6253\u6E38\u620F&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5199\u4EE3\u7801&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u7EB8\u7247\u98CE\u683C\u7684\u591A\u9009</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879&quot;</span>
  <span class="hljs-attr">chip</span>
  <span class="hljs-attr">multiple</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6253\u6E38\u620F&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5199\u4EE3\u7801&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5355\u9009\u503C\u6821\u9A8C</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879&quot;</span> 
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v === &#39;\u6478\u9C7C&#39; || &#39;\u60A8\u4E00\u5B9A\u5F97\u9009\u62E9\u6478\u9C7C&#39;]&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6478\u9C7C&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u591A\u9009\u503C\u6821\u9A8C</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879&quot;</span>
  <span class="hljs-attr">multiple</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v.length &gt;= 2 || &#39;\u60A8\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u9009\u9879&#39;]&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6253\u6E38\u620F&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5199\u4EE3\u7801&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3></div><div class="card"><h3>Select Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u7ED1\u5B9A\u7684\u503C</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>\u5360\u4F4D\u7B26</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>\u662F\u5426\u5F00\u542F\u591A\u9009</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>chip</code></td><td>\u662F\u5426\u4F7F\u7528\u7EB8\u7247\u98CE\u683C(\u4EC5\u9650\u591A\u9009)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>\u662F\u5426\u663E\u793A\u5206\u5272\u7EBF</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>\u662F\u5426\u4F7F\u7528\u5360\u4F4D\u7B26\u4F5C\u4E3A\u63D0\u793A</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>\u805A\u7126\u65F6\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>\u5931\u7126\u65F6\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>\u662F\u5426\u53EF\u6E05\u9664</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>\u89E6\u53D1\u9A8C\u8BC1\u7684\u65F6\u673A\uFF0C \u53EF\u9009\u503C\u4E3A <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onClose</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onClear&#39;, &#39;onClose&#39;]</code></td></tr><tr><td><code>rules</code></td><td>\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE<code>true</code>\u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A</td><td><em>Array&lt;(v: any | any[]) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Option Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>label</code></td><td>\u9009\u9879\u663E\u793A\u7684\u6587\u672C</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>\u9009\u9879\u7ED1\u5B9A\u7684\u503C</td><td><em>any</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3></div><div class="card"><h3>Select Methods</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>focus</code></td><td>\u805A\u7126</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>\u5931\u7126</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>\u89E6\u53D1\u6821\u9A8C</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u6E05\u7A7A\u7ED1\u5B9A\u7684\u503C(\u5355\u9009\u8BBE\u7F6E\u4E3A<code>undefined</code>,\u591A\u9009\u8BBE\u7F6E\u4E3A<code>[]</code>)\u548C\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3></div><div class="card"><h3>Select Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>focus</code></td><td>\u805A\u7126\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>\u5931\u7126\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>\u6E05\u9664\u65F6\u89E6\u53D1</td><td><code>value: any | any[]</code></td></tr><tr><td><code>close</code></td><td>\u8F93\u5165\u65F6\u89E6\u53D1</td><td><code>value: any | any[]</code></td></tr><tr><td><code>change</code></td><td>\u66F4\u65B0\u65F6\u89E6\u53D1</td><td><code>value: any | any[]</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3></div><div class="card"><h3>Select Slots</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>\u524D\u7F6E\u56FE\u6807</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>\u540E\u7F6E\u56FE\u6807</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Option Slots</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9009\u9879\u663E\u793A\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p></div><div class="card"><h3>Select Variables</h3><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--select-select-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--select-select-padding</code></td><td><code>5px 0</code></td></tr><tr><td><code>--select-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--select-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--select-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--select-scroller-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--select-scroller-padding</code></td><td><code>6px 0</code></td></tr><tr><td><code>--select-scroller-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--select-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--select-icon-padding</code></td><td><code>16px 0 0</code></td></tr><tr><td><code>--select-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-select-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--select-chip-margin</code></td><td><code>5px 5px 0</code></td></tr><tr><td><code>--select-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--select-line-spread-size</code></td><td><code>2px</code></td></tr><tr><td><code>--select-arrow-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table></div><div class="card"><h3>Option Variables</h3><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--option-height</code></td><td><code>38px</code></td></tr><tr><td><code>--option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--option-selected-background</code></td><td><code>var(--select-focus-color)</code></td></tr></tbody></table></div>`,27),c=[d];function p(o,r,h,j,i,g){return a(),t("div",e,c)}var m=s(n,[["render",p]]);export{m as default};
