import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as t}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},e=t(`<h1>Form</h1><div class="card"><h3>Intro</h3><p>Provides the ability to control all form components.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Form } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Form)
</code></pre></div><div class="card"><h3>Form Example</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { reactive, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

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
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please input username&quot;</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;The username cannot be empty&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.username&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-input</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please input password&quot;</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;The password cannot be empty&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.password&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select department&quot;</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;The select cannot be empty&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.department&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat department&quot;</span>  /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep department&quot;</span>  /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Play game department&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>
    <span class="hljs-attr">multiple</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select group&quot;</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt;= 1 || &#39;The select cannot be empty&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.group&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat group&quot;</span>  /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep group&quot;</span>  /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Play game group&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio-group</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;The gender cannot be empty&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.gender&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Male<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Female<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox-group</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt; 0 || &#39;The select cannot be empty&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.like&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Eat<span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Sleep<span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>Play game<span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt;= 3 || It has to be greater than 2]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.score&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;You must turn on&#39;]&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.license&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt; 10 || &#39;It has to be greater than 10&#39;]&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.count&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt; 10 || &#39;It has to be greater than 10&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.range&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt;= 1 || &#39;Upload at least one picture&#39;]&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.files&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-form</span>&gt;</span>
</code></pre></div><div class="card"><h3>Form control</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;form.reset()&quot;</span>&gt;</span>
  Empty form
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;form.resetValidation()&quot;</span>&gt;</span>
  Empty the validation
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;form.validate()&quot;</span>&gt;</span>
  Trigger validation
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;disabled = !disabled&quot;</span>&gt;</span>
  Form disabled
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;readonly = !readonly&quot;</span>&gt;</span>
  Form readonly
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validation for all form components</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear the validation messages for all form components</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clears all form component bindings of values and validation messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Form content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--form-details-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--form-details-length-color</code></td><td><code>#888</code></td></tr><tr><td><code>--form-details-margin-top</code></td><td><code>6px</code></td></tr><tr><td><code>--form-details-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--form-details-message-margin-right</code></td><td><code>4px</code></td></tr></tbody></table></div>`,10),r=[e];function c(o,h,d,j,g,i){return a(),n("div",p,r)}var v=s(l,[["render",c]]);export{v as default};
