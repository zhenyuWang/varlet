import{_ as t}from"./elevation.c2941a7c.js";import{o as s,c as e,L as d}from"./vendor.ea41cd30.js";const c={components:{}},a={class:"varlet-site-doc"},o=d(`<h1>\u65F6\u95F4\u9009\u62E9\u5668</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u9009\u62E9\u65F6\u95F4\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { TimePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(TimePicker)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;11:20&#39;</span>)
    
    <span class="hljs-keyword">return</span> {
      date
    }
  }
}
</code></pre></div><div class="card"><h3>24\u5C0F\u65F6\u683C\u5F0F</h3><p>\u4F7F\u7528 <code>format</code> \u5C5E\u6027\u5207\u6362\u9009\u62E9\u5668\u7684\u65F6\u95F4\u683C\u5F0F\uFF0C<code>format</code> \u9ED8\u8BA4\u503C\u4E3A <code>ampm</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;24hr&quot;</span> <span class="hljs-attr">shadow</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u663E\u793A\u79D2</h3><p>\u4F7F\u7528 <code>use-seconds</code> \u5C5E\u6027\u663E\u793A\u79D2</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;24hr&quot;</span> <span class="hljs-attr">use-seconds</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u53EA\u8BFB</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">shadow</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u65F6\u95F4\u9650\u5236</h3><p>\u901A\u8FC7 <code>min</code>\u3001<code>max</code> \u548C <code>allowed-time</code> \u5C5E\u6027\u6765\u63A7\u5236\u53EF\u9009\u62E9\u7684\u65F6\u95F4\u8303\u56F4\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span>
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
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-time-picker</span>
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
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u88AB\u9009\u62E9\u7684\u65F6\u95F4\uFF08ISO 8601 \u683C\u5F0F\uFF0C<code>HH:mm</code> \u6216 <code>HH:mm:ss</code>\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>format</code></td><td>\u9009\u62E9\u5668\u65F6\u95F4\u683C\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A<code>ampm, 24hr</code></td><td><em>string</em></td><td><code>ampm</code></td></tr><tr><td><code>color</code></td><td>\u9009\u62E9\u5668\u7684\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>\u6807\u9898\u80CC\u666F\u8272\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u4F7F\u7528\u7531 color \u5C5E\u6027\u6216\u9ED8\u8BA4\u989C\u8272\u3002</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>shadow</code></td><td>\u662F\u5426\u6DFB\u52A0\u9634\u5F71</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>min</code></td><td>\u5141\u8BB8\u7684\u6700\u5C0F\u65F6\u95F4\uFF08ISO 8601\u683C\u5F0F\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>\u5141\u8BB8\u7684\u6700\u5927\u65F6\u95F4\uFF08ISO 8601\u683C\u5F0F\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>allowed-time</code></td><td>\u9650\u5236\u53EF\u4EE5\u9009\u62E9\u7684\u65F6\u95F4</td><td><em>AllowedTime</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>use-seconds</code></td><td>\u662F\u5426\u663E\u793A\u79D2</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TimePicker AllowedTime</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>hours</code></td><td>\u9650\u5236\u53EF\u9009\u7684 <code>hour</code></td><td><em>Function: hour =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>minutes</code></td><td>\u9650\u5236\u53EF\u9009\u7684 <code>minute</code></td><td><em>Function: minute =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>seconds</code></td><td>\u9650\u5236\u53EF\u9009\u7684 <code>second</code></td><td><em>Function: second =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>value: string</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--time-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--time-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--time-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--time-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--time-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-title-time-font-size</code></td><td><code>50px</code></td></tr><tr><td><code>--time-picker-title-time-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--time-picker-title-ampm-margin-left</code></td><td><code>5px</code></td></tr><tr><td><code>--time-picker-clock-left</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-right</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-top</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-bottom</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-container-width</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-height</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-background</code></td><td><code>#e0e0e0</code></td></tr><tr><td><code>--time-picker-clock-hand-height</code></td><td><code>calc(50% - 4px)</code></td></tr><tr><td><code>--time-picker-clock-hand-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-bottom</code></td><td><code>50%</code></td></tr><tr><td><code>--time-picker-clock-hand-left</code></td><td><code>calc(50% - 1px)</code></td></tr><tr><td><code>--time-picker-clock-hand-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-border-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-before-width</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-height</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-border-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-width</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-height</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-item-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-clock-item-disable-color</code></td><td><code>rgba(0, 0, 0, 0.26)</code></td></tr><tr><td><code>--time-picker-inner-left</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-right</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-top</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-bottom</code></td><td><code>36px</code></td></tr></tbody></table></div>`,14),n=[o];function r(l,p,h,i,m,j){return s(),e("div",a,n)}var g=t(c,[["render",r]]);export{g as default};
