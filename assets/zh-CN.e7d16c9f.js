import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as l}from"./vendor.ea41cd30.js";const t={components:{}},p={class:"varlet-site-doc"},c=l(`<h1>\u83DC\u5355</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u4F7F\u5143\u7D20\u70B9\u51FB\u65F6\u663E\u793A\u4E00\u4E2A\u83DC\u5355\uFF0C\u901A\u8FC7\u63A7\u5236\u83DC\u5355\u7684\u5BF9\u9F50\u65B9\u5F0F\u548C\u504F\u79FB\u91CF\u81EA\u7531\u7684\u63A7\u5236\u83DC\u5355\u7684\u663E\u793A\u4F4D\u7F6E\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Menu)
</code></pre></div><div class="card"><h3>\u6CE8\u610F</h3><p>Menu\u662F\u4E00\u4E2A<code>inline-block</code>\u5143\u7D20\uFF0C\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u70B9\u51FB\u65F6\u663E\u793A\u83DC\u5355\uFF0C\u5982\u679C\u5E0C\u671BMenu\u72EC\u5360\u4E00\u884C\u63A8\u8350\u5305\u88F9\u4E00\u4E2A<code>block</code>\u5143\u7D20\u3002 Menu\u5728\u70B9\u51FB\u7EC4\u4EF6\u8303\u56F4\u4EE5\u5916\u7684\u533A\u57DF\u81EA\u52A8\u5173\u95ED\uFF0C\u6240\u4EE5\u4E0D\u53EF\u4EE5\u4F7F\u7528\u540C\u4E00\u4E2A\u72B6\u6001\u7ED1\u5B9A\u591A\u4E2AMenu\u7684<code>v-model:show</code>\uFF0C\u5426\u5219\u5728\u89E6\u53D1\u663E\u793A\u65F6\u4E5F\u540C\u65F6\u89E6\u53D1\u4E86\u5176\u4ED6Menu\u5BF9<code>v-model:show</code>\u7684\u4FEE\u6539\uFF0C\u5BFC\u81F4Menu\u65E0\u6CD5\u663E\u793A\u3002</p></div><div class="card"><h3>\u5BF9\u9F50\u65B9\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;top = true&quot;</span>&gt;</span>\u9876\u90E8\u5BF9\u9F50<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-mt&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">alignment</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;bottom = true&quot;</span>&gt;</span>\u5E95\u90E8\u5BF9\u9F50<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> top = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> bottom = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> { 
      top,
      bottom
    }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.block</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: space-between;
}

<span class="hljs-selector-class">.block-mt</span> {
  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">130px</span>;
}

<span class="hljs-selector-class">.cell-list</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
}
</code></pre></div><div class="card"><h3>\u504F\u79FB\u91CF</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-x</span>=<span class="hljs-string">&quot;72&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetX&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetX = true&quot;</span>&gt;</span>\u53F3\u504F\u79FB<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-x</span>=<span class="hljs-string">&quot;-72&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetX1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetX1 = true&quot;</span>&gt;</span>\u5DE6\u504F\u79FB<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-y</span>=<span class="hljs-string">&quot;36&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetY&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetY = true&quot;</span>&gt;</span>\u4E0B\u504F\u79FB<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-y</span>=<span class="hljs-string">&quot;-36&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetY1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetY1 = true&quot;</span>&gt;</span>\u4E0A\u504F\u79FB<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> offsetX = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> offsetX1 = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> offsetY = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> offsetY1 = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      offsetX,
      offsetX1,
      offsetY,
      offsetY1
    }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.block-1</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: space-between;
}

<span class="hljs-selector-class">.block-2</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: space-between;
  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">130px</span>;
}
</code></pre></div><div class="card"><h3>\u6CE8\u518C\u4E8B\u4EF6</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;event&quot;</span>
  @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.info(&#39;open&#39;)&quot;</span>
  @<span class="hljs-attr">opened</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;opened&#39;)&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.warning(&#39;close&#39;)&quot;</span>
  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.error(&#39;closed&#39;)&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;event = true&quot;</span>&gt;</span>\u6CE8\u518C\u4E8B\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u83DC\u5355\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> event = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      event,
      Snackbar
    }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.cell-list</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A\u83DC\u5355</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>alignment</code></td><td>\u83DC\u5355\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C \u53EF\u9009\u503C\u4E3A <code>top</code> <code>bottom</code>\uFF0C \u6E90\u70B9\u4E3A\u9ED8\u8BA4\u63D2\u69FD\u7684\u5DE6\u4E0A\u89D2\uFF0Ctop\u4E3A\u83DC\u5355\u9876\u90E8\u5BF9\u9F50\u6E90\u70B9\uFF0Cbottom\u4E3A\u83DC\u5355\u5E95\u90E8\u5BF9\u9F50</td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>offset-x</code></td><td>x\u8F74\u504F\u79FB\u91CF\uFF0C \u76F8\u5BF9\u4E8E\u83DC\u5355\u5BF9\u9F50\u540E\u7684\u4F4D\u7F6E</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>y\u8F74\u504F\u79FB\u91CF\uFF0C \u76F8\u5BF9\u4E8E\u83DC\u5355\u5BF9\u9F50\u540E\u7684\u4F4D\u7F6E</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>\u83DC\u5355\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>body</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>resize</code></td><td>Menu\u9ED8\u8BA4\u63D2\u69FD\u5143\u7D20\u4EA7\u751F\u4F4D\u7F6E\u5927\u5C0F\u53D8\u5316\u65F6\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u8FDB\u884C\u91CD\u7ED8</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00\u83DC\u5355\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00\u83DC\u5355\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u83DC\u5355\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED\u83DC\u5355\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u83DC\u5355\u5173\u8054\u7684\u89E6\u53D1\u5143\u7D20</td><td><code>-</code></td></tr><tr><td><code>menu</code></td><td>\u83DC\u5355\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--menu-background</code></td><td><code>#fff</code></td></tr></tbody></table></div>`,13),e=[c];function h(r,j,o,d,g,m){return a(),n("div",p,e)}var v=s(t,[["render",h]]);export{v as default};
