import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as n}from"./vendor.ea41cd30.js";const l={components:{}},e={class:"varlet-site-doc"},c=n(`<h1>Countdown</h1><div class="card"><h3>Intro</h3><p>For real-time display of countdown values, support millisecond precision.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Countdown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Countdown)
</code></pre></div><div class="card"><h3>Basic Usage</h3><p>Use <code>time</code> to set countdown time(ms).</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">  <span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> time = ref(<span class="hljs-number">30</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>)

      <span class="hljs-keyword">return</span> {
        time
      }
    }
  }
</code></pre></div><div class="card"><h3>Custom Format</h3><p>Use <code>format</code> to set time text.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;DD Day, HH:mm:ss&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Show Millisecond</h3><p>Use <code>S</code> text to show millisecond.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;HH:mm:ss:SS&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Custom Style</h3><p>Use <code>slot</code> to set custom countdown style.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;timeData&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-down</span>&gt;</span>
</code></pre></div><div class="card"><h3>Manual Control</h3><p>Use <code>ref</code> to get countdown instance, you can call the <code>start</code>, <code>pause</code>, and <code>reset</code> methods.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">  <span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span>
    <span class="hljs-attr">time</span>=<span class="hljs-string">&quot;3000&quot;</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;countdown&quot;</span>
    <span class="hljs-attr">:auto-start</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;ss : SSS&quot;</span>
    @<span class="hljs-attr">end</span>=<span class="hljs-string">&quot;end&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn-container&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.countdown.start()&quot;</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.countdown.pause()&quot;</span>&gt;</span>pause<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;$refs.countdown.reset()&quot;</span>&gt;</span>reset<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> countdown = ref(<span class="hljs-literal">null</span>)

      <span class="hljs-keyword">const</span> end = <span class="hljs-function">() =&gt;</span> {
        Snackbar.info(<span class="hljs-string">&#39;end!&#39;</span>)
      }

      <span class="hljs-keyword">const</span> change = <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change&#39;</span>)
      }

      <span class="hljs-keyword">return</span> {
        countdown,
        end,
        change
      }
    }
  }
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">  <span class="hljs-selector-class">.btn-container</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">align-items</span>: center;
    <span class="hljs-attribute">justify-content</span>: space-between;
    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">10px</span>;
  }
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>time</code></td><td>Total time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>Time format</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>Whether to auto start count down</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Available formats</h3><table><thead><tr><th>Format</th><th>Description</th></tr></thead><tbody><tr><td><code>DD</code></td><td>Day</td></tr><tr><td><code>HH</code></td><td>Hour</td></tr><tr><td><code>mm</code></td><td>Minute</td></tr><tr><td><code>ss</code></td><td>Second</td></tr><tr><td><code>S</code></td><td>Millisecond, 1-digit</td></tr><tr><td><code>SS</code></td><td>Millisecond, 2-digit</td></tr><tr><td><code>SSS</code></td><td>Millisecond, 3-digit</td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>end</code></td><td>Emitted after countdown ended</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>Emitted after countdown changed</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom content</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>TimeData Structure</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>days</code></td><td>Remain days</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>Remain hours</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>Remain minutes</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>Remain seconds</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>Remain milliseconds</td><td><code>number</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>Use ref to get CountDown instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>start</code></td><td>Start countdown</td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>Pause countdown</td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Reset countdown</td><td><code>-</code></td></tr></tbody></table></div>`,15),d=[c];function p(o,r,h,i,j,u){return t(),a("div",e,d)}var b=s(l,[["render",p]]);export{b as default};
