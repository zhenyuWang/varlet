import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as t}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},c=t(`<h1>\u8868\u5355</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u4E86\u5BF9\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u8FDB\u884C\u63A7\u5236\u7684\u80FD\u529B\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Form } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Form)
</code></pre></div><div class="card"><h3>\u8868\u5355\u793A\u4F8B</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { reactive, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> formData = reactive({
      <span class="hljs-attr">username</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">password</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">department</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">gender</span>: <span class="hljs-literal">undefined</span>,
      <span class="hljs-attr">license</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">range</span>: <span class="hljs-number">10</span>,
      <span class="hljs-attr">count</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">group</span>: [],
      <span class="hljs-attr">score</span>:<span class="hljs-number">0</span>,
      <span class="hljs-attr">like</span>: [],
      <span class="hljs-attr">files</span>: []
    })

    <span class="hljs-keyword">const</span> form = ref(<span class="hljs-literal">null</span>)
    <span class="hljs-keyword">const</span> disabled = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> readonly = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      form,
      formData,
      disabled,
      readonly
    }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;form&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">:readonly</span>=<span class="hljs-string">&quot;readonly&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-input</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.username&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-input</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.password&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u90E8\u95E8&quot;</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.department&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D\u90E8&quot;</span>  /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9\u90E8&quot;</span>  /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6253\u6E38\u620F\u90E8&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>
    <span class="hljs-attr">multiple</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u7EC4\u7EC7&quot;</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt;= 1 || &#39;\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.group&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5403\u996D\u7EC4&quot;</span>  /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7761\u89C9\u7EC4&quot;</span>  /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6253\u6E38\u620F\u7EC4&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio-group</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.gender&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u7537<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u5973<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox-group</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt; 0 || &#39;\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.like&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u5403\u996D<span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u7761\u89C9<span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\u6253\u6E38\u620F<span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> 
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt;= 3 || \u5FC5\u987B\u5927\u4E8E2]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.score&quot;</span> 
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;\u60A8\u5FC5\u987B\u5F00\u542F&#39;]&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.license&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt; 10 || &#39;\u5FC5\u987B\u5927\u4E8E10&#39;]&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.count&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt; 10 || &#39;\u5FC5\u987B\u5927\u4E8E10&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.range&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt;= 1 || &#39;\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.files&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-form</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u8868\u5355\u63A7\u5236</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;form.reset()&quot;</span>&gt;</span>
  \u6E05\u7A7A\u8868\u5355
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;form.resetValidation()&quot;</span>&gt;</span>
  \u6E05\u7A7A\u9A8C\u8BC1
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;form.validate()&quot;</span>&gt;</span>
  \u89E6\u53D1\u9A8C\u8BC1
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;disabled = !disabled&quot;</span>&gt;</span>
  \u8868\u5355\u7981\u7528
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;readonly = !readonly&quot;</span>&gt;</span>
  \u8868\u5355\u53EA\u8BFB
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>validate</code></td><td>\u89E6\u53D1\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7684\u6821\u9A8C</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7684\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\u4EF6\u7ED1\u5B9A\u7684\u503C\u548C\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u8868\u5355\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--form-details-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--form-details-length-color</code></td><td><code>#888</code></td></tr><tr><td><code>--form-details-margin-top</code></td><td><code>6px</code></td></tr><tr><td><code>--form-details-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--form-details-message-margin-right</code></td><td><code>4px</code></td></tr></tbody></table></div>`,10),r=[c];function e(h,o,d,j,g,i){return a(),n("div",p,r)}var v=s(l,[["render",e]]);export{v as default};
