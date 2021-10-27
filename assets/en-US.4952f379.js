import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as l}from"./vendor.ea41cd30.js";const t={components:{}},p={class:"varlet-site-doc"},e=l(`<h1>Menu</h1><div class="card"><h3>Intro</h3><p>Enable elements to display a menu when clicked, freely control the display position of the menu by controlling the alignment and offset of the menu.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Menu)
</code></pre></div><div class="card"><h3>Attention</h3><p>Menu is an <code>inline block</code> element. When you click through the default slot, the menu will be displayed. If you want menu to monopolize a line, it is recommended to package a <code>block</code> element Menu is automatically closed in the area beyond the scope of the component, so you can\u2019t use the same state to bind <code>v-model:show</code>. Otherwise, when the display is triggered, other menu pairs are also triggered Menu cannot be displayed due to the modification of <code>v-model:show</code>.</p></div><div class="card"><h3>Alignment Methods</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;top = true&quot;</span>&gt;</span>Top Alignment<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-mt&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">alignment</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;bottom = true&quot;</span>&gt;</span>Bottom Alignment<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
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
</code></pre></div><div class="card"><h3>Offset</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-x</span>=<span class="hljs-string">&quot;72&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetX&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetX = true&quot;</span>&gt;</span>Offset Right<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-x</span>=<span class="hljs-string">&quot;-72&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetX1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetX1 = true&quot;</span>&gt;</span>Offset Left<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-y</span>=<span class="hljs-string">&quot;36&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetY&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetY = true&quot;</span>&gt;</span>Offset Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-menu</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">var-menu</span> <span class="hljs-attr">:offset-y</span>=<span class="hljs-string">&quot;-36&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;offsetY1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;offsetY1 = true&quot;</span>&gt;</span>Offset Top<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
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
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;event = true&quot;</span>&gt;</span>Events<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-list&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Menu Option<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
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
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the menu</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>alignment</code></td><td>The alignment of the menu, The optional value is\u2019 <code>top</code> <code>bottom</code>, the origin is the top left corner of the default slot,top is the top of the menu to align the origin,bottom is the bottom of the menu to align the origin</td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>offset-x</code></td><td>offset x, Relative to the aligned position of the menu</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>offset y, Relative to the aligned position of the menu</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Menu to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>body</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>You can call this method to redraw when a default slot element changes position size</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the menu is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the menu is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when close-animation ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>The trigger element associated with the menu</td><td><code>-</code></td></tr><tr><td><code>menu</code></td><td>Menu content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-background</code></td><td><code>#fff</code></td></tr></tbody></table></div>`,13),c=[e];function h(o,r,j,d,g,i){return a(),n("div",p,c)}var v=s(t,[["render",h]]);export{v as default};
