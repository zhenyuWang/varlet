import{_ as s}from"./IconSfc.cbcd63c5.js";import{o as a,c as n,a6 as t}from"./vendor.cfbfc887.js";const l={components:{}},p={class:"varlet-site-doc"},e=t(`<h1>\u8868\u683C</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5C55\u793A\u884C\u5217\u6570\u636E\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Table } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Table)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-table</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>\u59D3\u540D<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>\u6570\u5B66<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>\u82F1\u8BED<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>\u8017\u5B50\u541B<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>124<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>38<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span> 
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>\u706B\u732B\u6851<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>100<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>135<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-table</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u63D2\u69FD</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-table</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 16px 8px&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;isAllCheck&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleAllCheckChange&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>\u59D3\u540D<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;sortBy(data, &#39;math&#39;)&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: inline-flex&quot;</span>&gt;</span>
          \u6570\u5B66
          <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;getIconName(&#39;math&#39;)&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;sortBy(data, &#39;english&#39;)&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: inline-flex&quot;</span>&gt;</span>
          \u82F1\u8BED
          <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;getIconName(&#39;english&#39;)&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in data&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.name&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 16px 8px&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;item.isCheck&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ item.math }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ item.english }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>\u603B\u5206<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ getTotal(data, &#39;math&#39;) }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ getTotal(data, &#39;english&#39;) }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
  
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;footer-container&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>footer slot<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-table</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> data = reactive([
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u706B\u732B\u6851&#39;</span>,
        <span class="hljs-attr">math</span>: <span class="hljs-number">100</span>,
        <span class="hljs-attr">english</span>: <span class="hljs-number">135</span>,
        <span class="hljs-attr">isCheck</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u8017\u5B50\u541B&#39;</span>,
        <span class="hljs-attr">math</span>: <span class="hljs-number">124</span>,
        <span class="hljs-attr">english</span>: <span class="hljs-number">38</span>,
        <span class="hljs-attr">isCheck</span>: <span class="hljs-literal">false</span>
      }
    ])
    <span class="hljs-keyword">const</span> currentSort = ref([<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-string">&#39;&#39;</span>])

    <span class="hljs-keyword">const</span> isAllCheck = computed(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> checkedCount = data.reduce(<span class="hljs-function">(<span class="hljs-params">count, item</span>) =&gt;</span> (item.isCheck ? count + <span class="hljs-number">1</span> : count), <span class="hljs-number">0</span>)
      <span class="hljs-keyword">return</span> data.length === checkedCount
    })

    <span class="hljs-keyword">const</span> getTotal = <span class="hljs-function">(<span class="hljs-params">list, key</span>) =&gt;</span> list.reduce(<span class="hljs-function">(<span class="hljs-params">total, item</span>) =&gt;</span> item[key] + total, <span class="hljs-number">0</span>)

    <span class="hljs-keyword">const</span> sortBy = <span class="hljs-function">(<span class="hljs-params">list, key</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> sortMethods = {
        <span class="hljs-attr">asc</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a[key] - b[key],
        <span class="hljs-attr">desc</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> b[key] - a[key]
      }
      <span class="hljs-keyword">const</span> [currentSortKey, currentSortValue] = currentSort.value
      <span class="hljs-keyword">let</span> sortMethod

      <span class="hljs-keyword">if</span> (currentSortKey !== key) {
        sortMethod = <span class="hljs-string">&#39;asc&#39;</span>
      }

      <span class="hljs-keyword">if</span> (currentSortKey === key) {
        sortMethod = currentSortValue === <span class="hljs-string">&#39;asc&#39;</span> ? <span class="hljs-string">&#39;desc&#39;</span> : <span class="hljs-string">&#39;asc&#39;</span>
      }

      list.sort(sortMethods[sortMethod])

      currentSort.value = [key, sortMethod]
    }

    <span class="hljs-keyword">const</span> getIconName = <span class="hljs-function">(<span class="hljs-params">key</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> [currentSortKey, currentSortValue] = currentSort.value

      <span class="hljs-keyword">if</span> (currentSortKey !== key) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">&#39;dots-vertical&#39;</span>
      }

      <span class="hljs-keyword">return</span> currentSortValue === <span class="hljs-string">&#39;asc&#39;</span> ? <span class="hljs-string">&#39;chevron-up&#39;</span> : <span class="hljs-string">&#39;chevron-down&#39;</span>
    }
    
    <span class="hljs-keyword">const</span> handleAllCheckChange = <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> check = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
        item.isCheck = <span class="hljs-literal">true</span>
      }
      <span class="hljs-keyword">const</span> unCheck = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
        item.isCheck = <span class="hljs-literal">false</span>
      }
      data.forEach(value ? check : unCheck)
    }
    
    <span class="hljs-keyword">return</span> {
      data,
      isAllCheck,
      sortBy,
      getTotal,
      getIconName,
      handleAllCheckChange
    }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.footer-container</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">54px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">24px</span>;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">justify-content</span>: flex-end;
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>fullWidth</code></td><td><code>table</code> \u7684\u5BBD\u5EA6</td><td><em>string | number</em></td><td><code>100%</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>Table\u7684\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>footer</code></td><td>Table\u5E95\u90E8\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--table-background</code></td><td><code>@table-background</code></td></tr><tr><td><code>--table-border-radius</code></td><td><code>@table-border-radius</code></td></tr><tr><td><code>--table-thead-border-bottom</code></td><td><code>@table-thead-border-bottom</code></td></tr><tr><td><code>--table-thead-th-text-color</code></td><td><code>@table-thead-th-text-color</code></td></tr><tr><td><code>--table-thead-th-font-size</code></td><td><code>@table-thead-th-font-size</code></td></tr><tr><td><code>--table-thead-tr-border-bottom</code></td><td><code>@table-thead-tr-border-bottom</code></td></tr><tr><td><code>--table-tbody-tr-hover-background</code></td><td><code>@table-tbody-tr-hover-background</code></td></tr><tr><td><code>--table-tbody-tr-border-bottom</code></td><td><code>@table-tbody-tr-border-bottom</code></td></tr><tr><td><code>--table-footer-min-height</code></td><td><code>@table-footer-min-height</code></td></tr><tr><td><code>--table-footer-border-top</code></td><td><code>@table-footer-border-top</code></td></tr></tbody></table></div>`,9),c=[e];function h(r,o,d,j,g,i){return a(),n("div",p,c)}var b=s(l,[["render",h]]);export{b as default};
