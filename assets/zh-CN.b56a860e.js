import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},e=n(`<h1>\u8F6E\u64AD</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Swipe, SwipeItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Swipe).use(SwipeItem)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.swipe</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">160px</span>;
}

<span class="hljs-selector-class">.swipe-item</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">object-fit</span>: cover;
}
</code></pre></div><div class="card"><h3>\u7981\u6B62\u5FAA\u73AF\u8F6E\u64AD</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5F00\u542F\u81EA\u52A8\u64AD\u653E</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;2000&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5782\u76F4\u8F6E\u64AD</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u76D1\u542C\u5207\u6362</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;Snackbar&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> { Snackbar }
  }
}
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u6307\u793A\u5668</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;swipe-item&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat3.jpg&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">indicator</span>=<span class="hljs-string">&quot;{ index, length }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;indicators&quot;</span>&gt;</span>
      {{ index + 1 }} / {{ length }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-swipe</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.swipe</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">160px</span>;
}

<span class="hljs-selector-class">.swipe-item</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">object-fit</span>: cover;
}

<span class="hljs-selector-class">.indicators</span> {
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">text-align</span>: center;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span> <span class="hljs-number">0</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.6</span>);
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>loop</code></td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u8F6E\u64AD</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>autoplay</code></td><td>\u81EA\u52A8\u64AD\u653E\u95F4\u9694\u65F6\u95F4(ms)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>duration</code></td><td>\u5207\u6362\u8FC7\u5EA6\u65F6\u95F4</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>initial-index</code></td><td>\u521D\u59CB\u5316\u663E\u793A\u7684\u7D22\u5F15</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>indicator</code></td><td>\u662F\u5426\u663E\u793A\u6307\u793A\u5668</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator-color</code></td><td>\u6307\u793A\u5668\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>\u662F\u5426\u5F00\u542F\u5782\u76F4\u8F6E\u64AD</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>touchable</code></td><td>\u662F\u5426\u53EF\u4EE5\u62D6\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>resize</code></td><td>\u4EA7\u751F\u4F4D\u7F6E\u5927\u5C0F\u53D8\u5316\u65F6\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u8FDB\u884C\u91CD\u7ED8</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>prev</code></td><td>\u4E0A\u4E00\u9875</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>\u4E0B\u4E00\u9875</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>to</code></td><td>\u8DF3\u8F6C\u5230\u6307\u5B9A\u4E0B\u6807</td><td><code>index: number</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u5207\u6362\u8F6E\u64AD\u65F6\u89E6\u53D1</td><td><code>index: number</code> \u8F6E\u64AD\u7D22\u5F15</td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u8F6E\u64AD\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>indicator</code></td><td>\u6307\u793A\u5668\u5185\u5BB9</td><td><code>index: number</code> \u8F6E\u64AD\u7D22\u5F15 <br> <code>length: number</code> \u8F6E\u64AD\u603B\u6570</td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--swipe-indicator-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--swipe-indicators-offset</code></td><td><code>10px</code></td></tr><tr><td><code>--swipe-indicator-offset</code></td><td><code>4px</code></td></tr></tbody></table></div>`,14),c=[e];function h(r,i,d,j,o,g){return a(),t("div",p,c)}var v=s(l,[["render",h]]);export{v as default};
