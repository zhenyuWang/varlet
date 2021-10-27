import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},e=n(`<h1>AppBar</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { AppBar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(AppBar)
</code></pre></div><div class="card"><h3>Basic AppBar</h3><p>Set the navigation bar title through the <code>title</code> attribute.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Custom Style</h3><p>Set the position of the title and the color of the navigation bar through the <code>title-position</code> and <code>color</code> attributes.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> 
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> 
  <span class="hljs-attr">title-position</span>=<span class="hljs-string">&quot;center&quot;</span> 
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> 
/&gt;</span>
</code></pre></div><div class="card"><h3>Add Slots At Title</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span>&gt;</span>Add the title from the slot<span class="hljs-tag">&lt;/<span class="hljs-name">var-app-bar</span>&gt;</span>
</code></pre></div><div class="card"><h3>Add Left Slot</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
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
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;Go Back&#39;</span>,
        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>
      })
    }

    <span class="hljs-keyword">return</span> {
      goBack
    }
  }
}
</code></pre></div><div class="card"><h3>Add Right Slot</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
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
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;search&#39;</span>,
        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>
      })
    }

    <span class="hljs-keyword">return</span> {
      searchData
    }
  }
}
</code></pre></div><div class="card"><h3>Add Left And Right Slot</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-app-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
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
    <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-y</span>=<span class="hljs-string">&quot;38&quot;</span> <span class="hljs-attr">:offset-x</span>=<span class="hljs-string">&quot;-20&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetY&quot;</span>&gt;</span>
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
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;options1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;menu1&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;options2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;menu2&#39;</span> }
    ])

    <span class="hljs-keyword">const</span> goBack = <span class="hljs-function">() =&gt;</span> {
      Snackbar({
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;Go Back&#39;</span>,
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
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Background</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>Title location,Can be set to <code>left</code>,<code>center</code>,<code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>Set altitude for navigation bar</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Customize the title content to override the <code>title</code> content</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>Insert the content to the left of the AppBar</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>Insert the content to the right of the AppBar</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>54px</code></td></tr><tr><td><code>--app-bar-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--app-bar-left-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-right-gap</code></td><td><code>6px</code></td></tr></tbody></table></div>`,12),c=[e];function r(h,o,d,j,i,g){return a(),t("div",p,c)}var f=s(l,[["render",r]]);export{f as default};
