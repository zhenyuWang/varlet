import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as e}from"./vendor.ea41cd30.js";const l={components:{}},n={class:"varlet-site-doc"},r=e(`<h1>Slider</h1><div class="card"><h3>Intro</h3><p>Used to take values within a given range.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Slider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Slider)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">3</span>)

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>Step size</h3><p>Set step increment by <code>step</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Dual thumb</h3><p>Open the double slider mode through the <code>range</code> attribute. Make sure the <code>value</code> is an <strong>array</strong>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">range</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref([<span class="hljs-number">3</span>, <span class="hljs-number">50</span>])

    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>Disable</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Readonly</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Slider size</h3><p>Control the size of slider through <code>track-height</code> and <code>thumb-size</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">track-height</span>=<span class="hljs-string">&quot;4&quot;</span> <span class="hljs-attr">thumb-size</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">range</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Custom style</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">label-color</span>=<span class="hljs-string">&quot;purple&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#e0732c&quot;</span>
  <span class="hljs-attr">track-color</span>=<span class="hljs-string">&quot;#3a68b4&quot;</span>
  <span class="hljs-attr">thumb-color</span>=<span class="hljs-string">&quot;#e25241&quot;</span>
  <span class="hljs-attr">label-text-color</span>=<span class="hljs-string">&quot;#ededed&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>Custom Button</h3><p>The props such as <code>label-visible</code>, <code>label-text-color</code>, <code>thumb-size</code> are invalid when using slot custom buttons.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">range</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#52af77&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>=<span class="hljs-string">&quot;currentValue&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slider-example_block&quot;</span>&gt;</span>{{ currentValue }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-slider</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.slider-example_block</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">24px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#52af77</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#52af77</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">24px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> -<span class="hljs-number">12px</span>;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">#ebebeb</span> <span class="hljs-number">0</span> <span class="hljs-number">2px</span> <span class="hljs-number">2px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
}
</code></pre></div><div class="card"><h3>Show label</h3><p>Control the display of labels through the <code>label-visible</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">label-visible</span>=<span class="hljs-string">&quot;never&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">label-visible</span>=<span class="hljs-string">&quot;always&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Validate value</h3><p>Verify the value through the <code>rules</code> attribute.</p><p><span style="font-size:12px;"><code>rules</code> is an array that accepts <code>functions</code>, <code>boolean</code>, and <code>string</code>. Functions pass an input value as an argument and must return either <code>true</code> / <code>false</code> or a <code>string</code> containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) <code>false</code> or is a <code>string</code>.</span></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> 
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v &gt; 35 || &#39;error message&#39;]&quot;</span> 
/&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of slider</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td><code>step</code></td><td>Step size. The value is an integer between <code>1 ~ 100</code></td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>range</code></td><td>Whether open the dual thumb mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-visible</code></td><td>Whether to display labels, the optional value is <code>always, normal, never</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>label-text-color</code></td><td>Color of label text</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>track-height</code></td><td>Height of slider</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>thumb-size</code></td><td>Size of thumb</td><td><em>string | number</em></td><td><code>12</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable slider</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether to readonly slider</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rules</code></td><td>Validation rules</td><td><em>array</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted after slider changed</td><td>value: current value</td></tr><tr><td><code>start</code></td><td>Emitted when start dragged</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>Emitted when end dragged</td><td>value: current value</td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>button</code></td><td>Custom button</td><td><code>currentValue</code>: current value</td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--slider-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--slider-track-background</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--slider-track-fill-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-block-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-ripple-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr></tbody></table></div>`,18),d=[r];function c(p,o,h,i,u,j){return a(),t("div",n,d)}var b=s(l,[["render",c]]);export{b as default};
