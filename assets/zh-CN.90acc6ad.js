import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as e,L as a}from"./vendor.ea41cd30.js";const d={components:{}},n={class:"varlet-site-doc"},o=a(`<h1>\u56FE\u7247\u9884\u89C8</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u56FE\u7247\u653E\u5927\u9884\u89C8\uFF0C\u652F\u6301\u53CC\u51FB\u500D\u6570\u653E\u5927\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(ImagePreview)
</code></pre></div><div class="card"><h3>\u5C40\u90E8\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-comment">// \u5C40\u90E8\u6CE8\u518C</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
</code></pre></div><div class="card"><h3>\u51FD\u6570\u8C03\u7528</h3></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">ImagePreview(<span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>)
</code></pre></div><div class="card"><h3>\u5904\u7406\u56DE\u8C03\u51FD\u6570</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">const</span> images = [
  <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
  <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat2.jpg&#39;</span>
]

ImagePreview({
  images,
  <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">index</span>)</span> {
    <span class="hljs-built_in">console</span>.log(index)
  }
})
</code></pre></div><h2>\u7EC4\u4EF6\u4F7F\u7528</h2><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
&gt;</span>
  \u57FA\u672C\u4F7F\u7528
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> 
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;currentShow = true&quot;</span>
&gt;</span>
  \u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span>
  <span class="hljs-attr">current</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>
  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;currentShow&quot;</span> 
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> 
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeShow = true&quot;</span>
&gt;</span>
  \u5C55\u793A\u5173\u95ED\u6309\u94AE
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;closeShow&quot;</span> 
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">block</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeEventShow = true&quot;</span>
&gt;</span>
  \u76D1\u542C\u5173\u95ED\u4E8B\u4EF6
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span> 
  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;closeEventShow&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleCloseEvent&quot;</span> 
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> currentShow = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> closeShow = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> closeEventShow = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> images = ref([
      <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
      <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat2.jpg&#39;</span>,
    ])

    <span class="hljs-keyword">const</span> handleCloseEvent = <span class="hljs-function">() =&gt;</span> Snackbar(<span class="hljs-string">&#39;\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002&#39;</span>)
    
    <span class="hljs-keyword">return</span> {
      show,
      currentShow,
      closeShow,
      closeEventShow,
      images,
      handleCloseEvent,
    }
  },
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>show</code></td><td>\u662F\u5426\u663E\u793A</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL\u6570\u7EC4</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u9501\u5B9A\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15</td><td><code>index: number</code> \u56FE\u7247\u7D22\u5F15</td></tr><tr><td><code>open</code></td><td>\u6253\u5F00image-preview\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00image-preview\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95EDimage-preview\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95EDimage-preview\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>\u5206\u9875\u6307\u793A\u5668</td><td><code>index: number</code> \u56FE\u7247\u7D22\u5F15 <br> <code>length: number</code> \u56FE\u7247\u603B\u6570</td></tr><tr><td><code>close-icon</code></td><td>\u5173\u95ED\u6309\u94AE</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>images</code></td><td>\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247URL\u6570\u7EC4\u6216\u8005\u5355\u4E2A\u56FE\u7247\u7684url</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>\u53CC\u51FB\u653E\u5927\u500D\u6570</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>\u9501\u5B9A\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>image-preview\u5F00\u542F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>image-preview\u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>image-preview\u65F6\u5173\u95ED\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>image-preview\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code> #ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code> #000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>13px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code> 14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>`,15),c=[o];function l(r,p,h,i,g,m){return t(),e("div",n,c)}var u=s(d,[["render",l]]);export{u as default};
