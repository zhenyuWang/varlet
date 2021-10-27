import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const l={components:{}},e={class:"varlet-site-doc"},c=n(`<h1>\u5012\u8BA1\u65F6</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5B9E\u65F6\u5C55\u793A\u5012\u8BA1\u65F6\u6570\u503C\uFF0C\u652F\u6301\u6BEB\u79D2\u7CBE\u5EA6\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Countdown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Countdown)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><p><code>time</code> \u5C5E\u6027\u8868\u793A\u5012\u8BA1\u65F6\u603B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">  <span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> time = ref(<span class="hljs-number">30</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>)

      <span class="hljs-keyword">return</span> {
        time
      }
    }
  }
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u683C\u5F0F</h3><p>\u901A\u8FC7 <code>format</code> \u5C5E\u6027\u8BBE\u7F6E\u5012\u8BA1\u65F6\u6587\u672C\u7684\u5185\u5BB9\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;DD \u5929 HH \u65F6 mm \u5206 ss \u79D2&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u663E\u793A\u6BEB\u79D2</h3><p>\u901A\u8FC7 <code>S</code> \u6587\u672C\u663E\u793A\u6BEB\u79D2\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;HH:mm:ss:SS&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><p>\u901A\u8FC7\u63D2\u69FD\u81EA\u5B9A\u4E49\u5012\u8BA1\u65F6\u7684\u6837\u5F0F\uFF0C<code>timeData</code> \u5BF9\u8C61\u683C\u5F0F\u89C1\u4E0B\u65B9\u8868\u683C\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;timeData&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-down</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u624B\u52A8\u63A7\u5236</h3><p>\u901A\u8FC7 ref \u83B7\u53D6\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u540E\uFF0C\u53EF\u4EE5\u8C03\u7528 <code>start</code>\u3001<code>pause</code>\u3001<code>reset</code> \u65B9\u6CD5\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">  <span class="hljs-tag">&lt;<span class="hljs-name">var-countdown</span>
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
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>time</code></td><td>\u5012\u8BA1\u65F6\u65F6\u957F(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>\u65F6\u95F4\u683C\u5F0F</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>\u662F\u5426\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>format \u683C\u5F0F</h3><table><thead><tr><th>\u683C\u5F0F</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>DD</code></td><td>\u5929\u6570</td></tr><tr><td><code>HH</code></td><td>\u5C0F\u65F6</td></tr><tr><td><code>mm</code></td><td>\u5206\u949F</td></tr><tr><td><code>ss</code></td><td>\u79D2\u6570</td></tr><tr><td><code>S</code></td><td>\u6BEB\u79D2\uFF081\u4F4D\uFF09</td></tr><tr><td><code>SS</code></td><td>\u6BEB\u79D2\uFF082\u4F4D\uFF09</td></tr><tr><td><code>SSS</code></td><td>\u6BEB\u79D2\uFF083\u4F4D\uFF09</td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>end</code></td><td>\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>\u5012\u8BA1\u65F6\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>TimeData \u683C\u5F0F</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td><code>days</code></td><td>\u5269\u4F59\u5929\u6570</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>\u5269\u4F59\u5C0F\u65F6</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>\u5269\u4F59\u5206\u949F</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>\u5269\u4F59\u79D2\u6570</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>\u5269\u4F59\u6BEB\u79D2</td><td><code>number</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CountDown \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>start</code></td><td>\u5F00\u59CB\u5012\u8BA1\u65F6</td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>\u6682\u505C\u5012\u8BA1\u65F6</td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u91CD\u8BBE\u5012\u8BA1\u65F6\uFF0C\u82E5 <code>auto-start</code> \u4E3A <code>true</code>\uFF0C\u91CD\u8BBE\u540E\u4F1A\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6</td><td><code>-</code></td></tr></tbody></table></div>`,15),p=[c];function d(o,h,r,i,j,u){return a(),t("div",e,p)}var b=s(l,[["render",d]]);export{b as default};
