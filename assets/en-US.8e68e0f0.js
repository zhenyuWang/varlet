import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as e}from"./vendor.ea41cd30.js";const n={components:{}},c={class:"varlet-site-doc"},l=e(`<h1>Steps</h1><div class="card"><h3>Intro</h3><p>Steps is a navigation bar that guides users through the steps of a task.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Steps, Step } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Steps).use(Step)
</code></pre></div><div class="card"><h3>Basic Usage</h3><p>Use <code>active</code> prop to control the progress of step, value is index of step and is counted from <code>0</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>Step1<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>Step2<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>Step3<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>Step4<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-steps</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;next&quot;</span>&gt;</span>next<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> active = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">const</span> next = <span class="hljs-function">() =&gt;</span> {
      active.value = (active.value + <span class="hljs-number">1</span>) % <span class="hljs-number">4</span>
    }
    
    <span class="hljs-keyword">return</span> {
      active,
      next
    }
  }
}
</code></pre></div><div class="card"><h3>Custom Style</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-steps</span> 
  <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#f44336&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;#e99eb4&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">current-icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">inactive-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span>&gt;</span>
    Step1
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">current-icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">inactive-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span>&gt;</span>
    Step2
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">current-icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">inactive-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span>&gt;</span>
    Step3
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">current-icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">inactive-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span>&gt;</span>
    Step4
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-steps</span>&gt;</span>
</code></pre></div><div class="card"><h3>Vertical Mode</h3><p>Change the display direction of the step bar through the <code>direction</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-steps</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>Step1<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>Step2<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>Step3<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-step</span>&gt;</span>Step4<span class="hljs-tag">&lt;/<span class="hljs-name">var-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-steps</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>Steps Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>active</code></td><td>Active step</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>Mode of steps, Can be set to <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>active-color</code></td><td>Active step color</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>Inactive step color</td><td><em>string</em></td><td><code>#9e9e9e</code></td></tr></tbody></table></div><div class="card"><h3>Step Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>active-icon</code></td><td>Active icon name</td><td><em>string</em></td><td><code>check</code></td></tr><tr><td><code>current-icon</code></td><td>Icon name of current ste</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-icon</code></td><td>Inactive icon name</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>Steps Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click-step</code></td><td>Emitted after click step</td><td><code>index: number</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>Step Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of step</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--step-tag-size</code></td><td><code>20px</code></td></tr><tr><td><code>--step-tag-background</code></td><td><code>#9e9e9e</code></td></tr><tr><td><code>--step-tag-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-tag-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--step-tag-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--step-tag-margin</code></td><td><code>4px 0</code></td></tr><tr><td><code>--step-tag-icon-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--step-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-content-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--step-content-active-color</code></td><td><code>#000</code></td></tr><tr><td><code>--step-line-background</code></td><td><code>#000</code></td></tr><tr><td><code>--step-vertical-min-height</code></td><td><code>30px</code></td></tr><tr><td><code>--step-vertical-tag-margin</code></td><td><code>0 4px</code></td></tr><tr><td><code>--step-vertical-line-height</code></td><td><code>calc(100% - 30px)</code></td></tr><tr><td><code>--step-vertical-line-min-height</code></td><td><code>20px</code></td></tr></tbody></table></div>`,15),p=[l];function d(r,o,h,i,j,g){return t(),a("div",c,p)}var m=s(n,[["render",d]]);export{m as default};
