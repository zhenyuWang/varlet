import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as t}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},c=t(`<h1>\u5BFC\u822A\u680F</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { AppBar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(AppBar)
</code></pre></div><div class="card"><h3>\u57FA\u7840\u5BFC\u822A\u680F</h3><p>\u901A\u8FC7<code>title</code>\u5C5E\u6027\u8BBE\u7F6E\u5BFC\u822A\u680F\u6807\u9898\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><p>\u901A\u8FC7<code>title-position</code>\u3001<code>color</code>\u5C5E\u6027\u8BBE\u7F6E\u6807\u9898\u6240\u5904\u4F4D\u7F6E\u3001\u5BFC\u822A\u680F\u989C\u8272\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> 
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span> 
  <span class="hljs-attr">title-position</span>=<span class="hljs-string">&quot;center&quot;</span> 
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> 
/&gt;</span>
</code></pre></div><div class="card"><h3>\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span>&gt;</span>\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">var-app-bar</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
      <span class="hljs-attr">round</span>
      <span class="hljs-attr">text</span>
      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;transparent&quot;</span>
      <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;goBack&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chevron-left&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-app-bar</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> goBack = <span class="hljs-function">() =&gt;</span> {
      Snackbar({
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;\u8FD4\u56DE&#39;</span>,
        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>
      })
    }

    <span class="hljs-keyword">return</span> {
      goBack
    }
  }
}
</code></pre></div><div class="card"><h3>\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
      <span class="hljs-attr">round</span>
      <span class="hljs-attr">text</span>
      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;transparent&quot;</span>
      <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;searchData&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;magnify&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-app-bar</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> searchData = <span class="hljs-function">() =&gt;</span> {
      Snackbar({
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;\u641C\u7D22&#39;</span>,
        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>
      })
    }

    <span class="hljs-keyword">return</span> {
      searchData
    }
  }
}
</code></pre></div><div class="card"><h3>\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
      <span class="hljs-attr">round</span>
      <span class="hljs-attr">text</span>
      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;transparent&quot;</span>
      <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;goBack&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chevron-left&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-y</span>=<span class="hljs-string">&quot;42&quot;</span> <span class="hljs-attr">:offset-x</span>=<span class="hljs-string">&quot;-20&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetY&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
        <span class="hljs-attr">round</span>
        <span class="hljs-attr">text</span>
        <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;transparent&quot;</span>
        <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span>
        @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetY = true&quot;</span>
      &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;menu&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-list&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>
            <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-cell&quot;</span>
            <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;value in menuList&quot;</span>
            <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;value.value&quot;</span>
            <span class="hljs-attr">v-ripple</span>
          &gt;</span>
            {{ value.label }}
          <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-app-bar</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> offsetY = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> menuList = ref([
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;menu1&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;menu2&#39;</span> }
    ])

    <span class="hljs-keyword">const</span> goBack = <span class="hljs-function">() =&gt;</span> {
      Snackbar({
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;\u8FD4\u56DE&#39;</span>,
        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>
      })
    }

    <span class="hljs-keyword">return</span> {
      offsetY,
      menuList,
      goBack
    }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.var-menu</span> {
  <span class="hljs-attribute">background</span>: transparent;
}

<span class="hljs-selector-class">.menu-list</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
}

<span class="hljs-selector-class">.menu-list</span> <span class="hljs-selector-class">.menu-cell</span> {
  <span class="hljs-attribute">display</span>: block;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>color</code></td><td>\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>\u6807\u9898\u4F4D\u7F6E,\u53EF\u9009\u503C\u4E3A <code>left</code>,<code>center</code>,<code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>\u662F\u5426\u7ED9\u5BFC\u822A\u680F\u8BBE\u7F6E\u6D77\u62D4</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9,\u4F1A\u8986\u76D6<code>title</code>\u7684\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>\u63D2\u5165\u81F3\u5BFC\u822A\u680F\u5DE6\u4FA7\u7684\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>\u63D2\u5165\u81F3\u5BFC\u822A\u680F\u53F3\u4FA7\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>54px</code></td></tr><tr><td><code>--app-bar-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--app-bar-left-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-right-gap</code></td><td><code>6px</code></td></tr></tbody></table></div>`,12),e=[c];function r(h,o,d,j,i,g){return a(),n("div",p,e)}var f=s(l,[["render",r]]);export{f as default};
