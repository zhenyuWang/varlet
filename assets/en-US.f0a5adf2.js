import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as e}from"./vendor.ea41cd30.js";const l={components:{}},n={class:"varlet-site-doc"},c=e(`<h1>Select</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Select, Option } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Select).use(Option)
</code></pre></div><div class="card"><h3>Basic Usage</h3><p>The component uses the option\u2019s <code>label</code> as the displayed text. The component uses the <code>value</code> of the option first as the value of the option, followed by the <code>label</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)

    <span class="hljs-keyword">return</span> { value }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select one the options&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Plain Mode</h3><p>If you only need the basic functionality of the component, you can remove some styles through attributes.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">:hint</span>=<span class="hljs-string">&quot;false&quot;</span> 
  <span class="hljs-attr">:line</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select one the options&quot;</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Label relation value</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select one the options&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Disabled</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select one the options&quot;</span> 
  <span class="hljs-attr">disabled</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Readonly</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select one the options&quot;</span>
  <span class="hljs-attr">readonly</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Clearable</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select one the options&quot;</span> 
  <span class="hljs-attr">clearable</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Display Icon</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Icon)
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select one the options&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prepend-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;plus&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">append-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;minus&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Multiple Selection</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref([])

    <span class="hljs-keyword">return</span> { value }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select multiple options&quot;</span> 
  <span class="hljs-attr">multiple</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Play game&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Coding&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Multiple choice of paper style</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select multiple options&quot;</span>
  <span class="hljs-attr">chip</span>
  <span class="hljs-attr">multiple</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Play game&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Coding&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Validate</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span> 
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select one the options&quot;</span> 
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v === &#39;Rest&#39; || &#39;You must choose to rest&#39;]&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Rest&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><div class="card"><h3>Multiple Validate</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please select multiple options&quot;</span>
  <span class="hljs-attr">multiple</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v.length &gt;= 2 || &#39;You select at least two options&#39;]&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Eat&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sleep&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Play game&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Coding&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>Select Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to enable multiple selection</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>chip</code></td><td>Whether to use chip style (multiple choices only)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholders as prompts</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation\uFF0C Optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onClose</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onClear&#39;, &#39;onClose&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: any | any[]) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Option Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text that the option displays</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of the option binding</td><td><em>any</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3></div><div class="card"><h3>Select Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding (single set to \u2018undefined\u2019, multiple set to \u2018[]\u2019) and the validation messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>Select Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Trigger while focusing</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>Triggered on click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on clearance</td><td><code>value: any | any[]</code></td></tr><tr><td><code>close</code></td><td>Triggered on close</td><td><code>value: any | any[]</code></td></tr><tr><td><code>change</code></td><td>Triggered when change</td><td><code>value: any | any[]</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>Select Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Option Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Options to display the content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p></div><div class="card"><h3>Select Variables</h3><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--select-select-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--select-select-padding</code></td><td><code>5px 0</code></td></tr><tr><td><code>--select-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--select-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--select-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--select-scroller-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--select-scroller-padding</code></td><td><code>6px 0</code></td></tr><tr><td><code>--select-scroller-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--select-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--select-icon-padding</code></td><td><code>16px 0 0</code></td></tr><tr><td><code>--select-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-select-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--select-chip-margin</code></td><td><code>5px 5px 0</code></td></tr><tr><td><code>--select-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--select-line-spread-size</code></td><td><code>2px</code></td></tr><tr><td><code>--select-arrow-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table></div><div class="card"><h3>Option Variables</h3><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--option-height</code></td><td><code>38px</code></td></tr><tr><td><code>--option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--option-selected-background</code></td><td><code>var(--select-focus-color)</code></td></tr></tbody></table></div>`,27),d=[c];function p(o,r,h,i,j,g){return a(),t("div",n,d)}var m=s(l,[["render",p]]);export{m as default};
