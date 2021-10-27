import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as l}from"./vendor.ea41cd30.js";const n={components:{}},e={class:"varlet-site-doc"},p=l(`<h1>Collapse</h1><div class="card"><h3>Intro</h3><p>A content area which can be collapsed and expanded.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Collapse, CollapseItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Collapse).use(CollapseItem)
</code></pre></div><div class="card"><h3>Basic Usage</h3><p>Use <code>v-model</code> to control the name of active panels. <code>value</code> is an Array.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeHandle&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Hello World<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Hello World<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref([<span class="hljs-string">&#39;1&#39;</span>])

    <span class="hljs-keyword">const</span> changeHandle = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(val)
    }
    
    <span class="hljs-keyword">return</span> {
      value,
      changeHandle
    }
  }
}
</code></pre></div><div class="card"><h3>Hide The Margin</h3><p>Use <code>offset</code> prop to hide the margin.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Hello World<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Hello World<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre></div><div class="card"><h3>Accordion Mode</h3><p>Use <code>accordion</code> prop to open accordion mode, In this case <code>value</code> is a String.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">accordion</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Hello World<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Hello World<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
    
    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>Disabled</h3><p>Use the <code>disabled</code> prop to disable CollapseItem.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;disabled = !disabled&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 8px&quot;</span>&gt;</span>
  {{ disabled ? &#39;enable&#39; : &#39;disable&#39; }}
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>
    Hello World
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>
    Hello World
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref([<span class="hljs-number">1</span>])
    <span class="hljs-keyword">const</span> disabled = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      value,
      disabled
    }
  }
}
</code></pre></div><div class="card"><h3>Custom Content</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;account-circle&quot;</span>&gt;</span>
    Hello World
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-collapse-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>^_^<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    Hello World
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-collapse</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>Collapse Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Names of current active panels</td><td>accordion mode\uFF1A <em>string | number</em> <br> non-accordion mode\uFF1A<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>Whether to be accordion mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Whether to show margin</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>CollapseItem Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Name</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disabled collapse</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>Collapse Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>value</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>CollapseItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom right icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr></tbody></table></div>`,17),c=[p];function o(d,r,h,i,j,g){return a(),t("div",e,c)}var v=s(n,[["render",o]]);export{v as default};
