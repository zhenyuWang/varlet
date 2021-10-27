import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as e}from"./vendor.ea41cd30.js";const d={components:{}},l={class:"varlet-site-doc"},n=e(`<h1>Radio</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Radio, RadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(RadioGroup).use(Radio)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>Current value: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>Set State value</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span>
  <span class="hljs-attr">:unchecked-value</span>=<span class="hljs-string">&quot;0&quot;</span>
  <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  Current value: {{ value }}
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>Modify the icon and color</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span>
  <span class="hljs-attr">unchecked-color</span>=<span class="hljs-string">&quot;#e99eb4&quot;</span>
  <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#f44336&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">unchecked-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">checked-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>&gt;</span>
    Current value: {{ value }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre></div><div class="card"><h3>Disabled</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>Current value: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre></div><div class="card"><h3>Readonly</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>Current value: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre></div><div class="card"><h3>RadioGroup</h3><p>In the radio group, you must set the <code>checked-value</code> to identify the <code>radio</code>, The radio group bind group checked identifiers.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>Eat<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Sleep<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio-group</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>Radio validation</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v || &#39;Please check your choice&#39;]&quot;</span>
&gt;</span>
  Current value: {{ value }}
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre></div><div class="card"><h3>RadioGroup validate</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio-group</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v === 0 || &#39;Please check eat&#39;]&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>Eat<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Sleep<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio-group</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>RadioGroup Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>direction</code></td><td>The layout direction\uFF0COptional value is <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Radio Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>Checked value</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>Unchecked value</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>Checked color</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>Unchecked color</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>Icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3></div><div class="card"><h3>RadioGroup Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>undefined</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Radio Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>unchecked-value</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>toggle</code></td><td>Toggle the checked state, pass <code>checked-value</code> to check, <code>unchecked-value</code> to uncheck, do not pass or other cases to reverse</td><td><code>value: any</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>RadioGroup Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Trigger on change</td><td><code>value: any</code></td></tr></tbody></table></div><div class="card"><h3>Radio Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>Trigger on change</td><td><code>value: any</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>RadioGroup Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Radio group content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Radio Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>Checked icon</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>Unchecked icon</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>Displayed text</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p></div><div class="card"><h3>Radio Variables</h3><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--radio-checked-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--radio-unchecked-color</code></td><td><code>#555</code></td></tr><tr><td><code>--radio-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--radio-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--radio-action-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--radio-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>`,25),c=[n];function o(r,h,p,i,u,v){return a(),t("div",l,c)}var m=s(d,[["render",o]]);export{m as default};
