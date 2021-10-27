import{_ as t}from"./elevation.c2941a7c.js";import{o as s,c as e,L as d}from"./vendor.ea41cd30.js";const a={components:{}},c={class:"varlet-site-doc"},o=d(`<h1>TimePicker</h1><div class="card"><h3>Intro</h3><p>Used to select a time.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { TimePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(TimePicker)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;11:20&#39;</span>)
    
    <span class="hljs-keyword">return</span> {
      date
    }
  }
}
</code></pre></div><div class="card"><h3>24hr Format</h3><p>Use <code>format</code> prop to change the format of the picker. The default value of <code>format</code> is <code>ampm</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;24hr&quot;</span> <span class="hljs-attr">shadow</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Show Seconds</h3><p>use <code>use-seconds</code> prop to show seconds</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;24hr&quot;</span> <span class="hljs-attr">use-seconds</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Readonly</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">shadow</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Time Limit</h3><p>Use <code>min</code>, <code>max</code> and <code>allowed-time</code> prop to allow the maximum and minimum time.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span>
  <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;24hr&quot;</span>
  <span class="hljs-attr">use-seconds</span>
  <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;2:28:38&quot;</span>
  <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;19:40:22&quot;</span>
  <span class="hljs-attr">:allowed-time</span>=<span class="hljs-string">&quot;allowedTime&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;07:10:12&#39;</span>)

    <span class="hljs-keyword">const</span> allowedTime = {
      <span class="hljs-function"><span class="hljs-title">hours</span>(<span class="hljs-params">hour</span>)</span> {
        <span class="hljs-keyword">return</span> hour % <span class="hljs-number">2</span> === <span class="hljs-number">0</span>
      },
      <span class="hljs-function"><span class="hljs-title">minutes</span>(<span class="hljs-params">minute</span>)</span> {
        <span class="hljs-keyword">return</span> minute % <span class="hljs-number">15</span> !== <span class="hljs-number">0</span>
      },
      <span class="hljs-function"><span class="hljs-title">seconds</span>(<span class="hljs-params">second</span>)</span> {
        <span class="hljs-keyword">return</span> second % <span class="hljs-number">2</span> !== <span class="hljs-number">0</span>
      },
    }
    
    <span class="hljs-keyword">return</span> {
      date,
      allowedTime
    }
  }
}
</code></pre></div><div class="card"><h3>Custom</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span>
  <span class="hljs-attr">header-color</span>=<span class="hljs-string">&quot;purple&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7bb872&quot;</span>
  <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;2:28:38&quot;</span>
  <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;19:40:22&quot;</span>
  <span class="hljs-attr">shadow</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;05:10&#39;</span>)

    <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">time</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(time)
    }

    <span class="hljs-keyword">return</span> {
      date,
      change
    }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected time\uFF08ISO 8601 format, <code>HH:mm</code> or <code>HH:mm:ss</code>\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>format</code></td><td>Picker type, optional values <code>ampm, 24hr</code></td><td><em>string</em></td><td><code>ampm</code></td></tr><tr><td><code>color</code></td><td>Picker color</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>Color of picker header. If not specified it will use the color defined by color prop or the default picker color.</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>shadow</code></td><td>Whether to add a shadow</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>min</code></td><td>Minimum allowed time (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum allowed time (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>allowed-time</code></td><td>Restricts which time can be selected</td><td><em>AllowedTime</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>use-seconds</code></td><td>Whether to display seconds</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TimePicker AllowedTime</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>hours</code></td><td>Limit the optional <code>hour</code></td><td><em>Function: hour =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>minutes</code></td><td>Limit the optional <code>minute</code></td><td><em>Function: minute =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>seconds</code></td><td>Limit the optional <code>second</code></td><td><em>Function: second =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted after time changed</td><td><code>value: string</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--time-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--time-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--time-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--time-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--time-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-title-time-font-size</code></td><td><code>50px</code></td></tr><tr><td><code>--time-picker-title-time-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--time-picker-title-ampm-margin-left</code></td><td><code>5px</code></td></tr><tr><td><code>--time-picker-clock-left</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-right</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-top</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-bottom</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-container-width</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-height</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-background</code></td><td><code>#e0e0e0</code></td></tr><tr><td><code>--time-picker-clock-hand-height</code></td><td><code>calc(50% - 4px)</code></td></tr><tr><td><code>--time-picker-clock-hand-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-bottom</code></td><td><code>50%</code></td></tr><tr><td><code>--time-picker-clock-hand-left</code></td><td><code>calc(50% - 1px)</code></td></tr><tr><td><code>--time-picker-clock-hand-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-border-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-before-width</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-height</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-border-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-width</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-height</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-item-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-clock-item-disable-color</code></td><td><code>rgba(0, 0, 0, 0.26)</code></td></tr><tr><td><code>--time-picker-inner-left</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-right</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-top</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-bottom</code></td><td><code>36px</code></td></tr></tbody></table></div>`,14),n=[o];function r(l,p,i,h,m,j){return s(),e("div",c,n)}var g=t(a,[["render",r]]);export{g as default};
