import{_ as t}from"./elevation.c2941a7c.js";import{o as s,c as e,L as d}from"./vendor.ea41cd30.js";const a={components:{}},c={class:"varlet-site-doc"},n=d(`<h1>\u65E5\u671F\u9009\u62E9\u5668</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u9009\u62E9\u65E5\u671F\u6216\u65E5\u671F\u8303\u56F4\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { DatePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(DatePicker)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;2021-04-08&#39;</span>)
    
    <span class="hljs-keyword">return</span> {
      date
    }
  }
}
</code></pre></div><div class="card"><h3>\u6708\u4EFD\u9009\u62E9\u5668</h3><p>\u4F7F\u7528 <code>type</code> \u5C5E\u6027\u5207\u6362\u9009\u62E9\u5668\u7684\u7C7B\u578B\uFF0C<code>type</code> \u9ED8\u8BA4\u503C\u4E3A <code>date</code></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">shadow</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u591A\u9009</h3><p>\u901A\u8FC7 <code>multiple</code> \u5C5E\u6027\u9009\u62E9\u591A\u4E2A\u65E5\u671F\uFF0C\u6B64\u65F6 <code>date</code> \u4E3A\u4E00\u4E2A\u6570\u7EC4\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">multiple</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u9009\u62E9\u8303\u56F4</h3><p>\u901A\u8FC7 <code>range</code> \u5C5E\u6027\u9009\u62E9\u4E00\u4E2A\u65E5\u671F\u8303\u56F4\uFF0C\u6B64\u65F6 <code>date</code> \u4E3A <code>[startDate, endDate]</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">range</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u65E5\u671F\u9650\u5236</h3><p>\u901A\u8FC7 <code>min</code> \u548C <code>max</code> \u5C5E\u6027\u6765\u63A7\u5236\u53EF\u9009\u62E9\u7684\u65E5\u671F\u8303\u56F4\uFF0C\u4F7F\u7528 <code>allowed-dates</code> \u5C5E\u6027\u9650\u5236\u53EF\u4EE5\u9009\u62E9\u7684\u65E5\u671F\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> 
  <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;2020-10-15&quot;</span>
  <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;2021-01-15&quot;</span> 
  <span class="hljs-attr">:allowed-dates</span>=<span class="hljs-string">&quot;allowedDates&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;2020-11-11&#39;</span>)

    <span class="hljs-keyword">const</span> allowedDates = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">parseInt</span>(val.split(<span class="hljs-string">&#39;-&#39;</span>)[<span class="hljs-number">2</span>], <span class="hljs-number">10</span>) % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>
    }
    
    <span class="hljs-keyword">return</span> {
      date,
      allowedDates,
    }
  }
}
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span>
  <span class="hljs-attr">shadow</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span>
  <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;2016-07&quot;</span>
  <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;2022-01&quot;</span>
  <span class="hljs-attr">header-color</span>=<span class="hljs-string">&quot;purple&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7bb872&quot;</span>
  <span class="hljs-attr">first-day-of-week</span>=<span class="hljs-string">&quot;1&quot;</span>
  <span class="hljs-attr">:allowed-dates</span>=<span class="hljs-string">&quot;allowedDates&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">year</span>=<span class="hljs-string">&quot;{ year }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ year }}\u5E74<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">month</span>=<span class="hljs-string">&quot;{ year, month }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ year }}\u5E74{{ month }}\u6708<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-date-picker</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;2021-02&#39;</span>)

    <span class="hljs-keyword">const</span> allowedDates = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">parseInt</span>(val.split(<span class="hljs-string">&#39;-&#39;</span>)[<span class="hljs-number">1</span>], <span class="hljs-number">10</span>) % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>
    }

    <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">date</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(date)
    }
    
    <span class="hljs-keyword">return</span> {
      date,
      change,
      allowedDates
    }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u88AB\u9009\u62E9\u7684\u65E5\u671F\uFF08ISO 8601 \u683C\u5F0F\uFF0C<code>YYYY-MM-DD</code> \u6216 <code>YYYY-MM</code>\uFF09</td><td><em>string[] | string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>\u9009\u62E9\u5668\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A<code>date, month</code></td><td><em>string</em></td><td><code>date</code></td></tr><tr><td><code>allowed-dates</code></td><td>\u9650\u5236\u53EF\u4EE5\u9009\u62E9\u7684\u65E5\u671F</td><td><em>function</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>\u9009\u62E9\u5668\u7684\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>\u6807\u9898\u80CC\u666F\u8272\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5C06\u4F7F\u7528\u7531 color \u5C5E\u6027\u6216\u9ED8\u8BA4\u989C\u8272\u3002</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>shadow</code></td><td>\u662F\u5426\u6DFB\u52A0\u9634\u5F71</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>first-day-of-week</code></td><td>\u8BBE\u7F6E\u4E00\u5468\u7684\u7B2C\u4E00\u5929\uFF0C\u4ECE\u5468\u65E5\u7684 0 \u5F00\u59CB\u3002</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>\u5141\u8BB8\u7684\u6700\u5C0F\u65E5\u671F/\u6708\u4EFD\uFF08ISO 8601\u683C\u5F0F\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>\u5141\u8BB8\u7684\u6700\u5927\u65E5\u671F/\u6708\u4EFD\uFF08ISO 8601\u683C\u5F0F\uFF09</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>show-current</code></td><td>\u662F\u5426\u663E\u793A\u5F53\u524D\u65E5\u671F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>multiple</code></td><td>\u662F\u5426\u652F\u6301\u9009\u62E9\u591A\u4E2A\u65E5\u671F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>range</code></td><td>\u662F\u5426\u652F\u6301\u9009\u62E9\u4E00\u4E2A\u8303\u56F4</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u65E5\u671F\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>value: string | string[]</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><p><code>weekIndex</code> \u8868\u793A\u4E00\u5468\u7684\u7B2Cn\u5929\uFF0C\u4ECE\u5468\u672B\u7684<code>0</code>\u5F00\u59CB</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>year</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u4E2D\u7684\u5E74</td><td><code>year: YYYY</code></td></tr><tr><td><code>month</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u4E2D\u7684\u6708</td><td><code>year: YYYY</code> <br> <code>month: MM</code></td></tr><tr><td><code>date</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u4E2D\u7684\u65E5\u671F</td><td><code>year: YYYY</code> <br> <code>month: MM</code> <code>date: DD</code> <br> <code>week: weekIndex</code></td></tr><tr><td><code>range</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u4E2D\u7684\u8303\u56F4</td><td><code>choose: [startData, endDate]</code></td></tr><tr><td><code>multiple</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u4E2D\u7684\u591A\u9009</td><td><code>choose: [&#39;YYYY-MM-DD&#39; | &#39;YYYY-MM&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--date-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--date-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--date-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--date-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--date-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--date-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--date-picker-title-year-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-title-year-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-year-margin-bottom</code></td><td><code>8px</code></td></tr><tr><td><code>--date-picker-title-date-height</code></td><td><code>48px</code></td></tr><tr><td><code>--date-picker-title-date-font-size</code></td><td><code>34px</code></td></tr><tr><td><code>--date-picker-title-date-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-date-range-font-size</code></td><td><code>20px</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--month-picker-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--month-picker-item-width</code></td><td><code>33%</code></td></tr><tr><td><code>--month-picker-item-height</code></td><td><code>56px</code></td></tr><tr><td><code>--month-picker-item-button-max-width</code></td><td><code>140px</code></td></tr><tr><td><code>--year-picker-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--year-picker-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--year-picker-item-active-font-size</code></td><td><code>26px</code></td></tr><tr><td><code>--year-picker-item-active-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--year-picker-item-active-font-padding</code></td><td><code>10px 0</code></td></tr><tr><td><code>--year-picker-item-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--day-picker-content-item-width</code></td><td><code>14.28%</code></td></tr><tr><td><code>--day-picker-content-item-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-content-item-padding</code></td><td><code>2px 0</code></td></tr><tr><td><code>--day-picker-content-item-button-width</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-height</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-head-item-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--day-picker-head-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--day-picker-head-item-font-weight</code></td><td><code>600</code></td></tr></tbody></table></div>`,14),o=[n];function l(r,p,h,i,j,m){return s(),e("div",c,o)}var k=t(a,[["render",l]]);export{k as default};
