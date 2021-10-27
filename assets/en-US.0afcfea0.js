import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const l={components:{}},e={class:"varlet-site-doc"},c=n(`<h1>Tabs</h1><div class="card"><h3>Intro</h3><p>Use <code>Tabs, Tab</code> to switch between tabbed groups and Use <code>TabsItems</code>, <code>TabItem</code> to achieve view linkage with Tabs.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Tabs, Tab, TabsItems, TabItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp()
  .use(Tabs)
  .use(Tab)
  .use(TabsItems)
  .use(TabItem)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option1<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option2<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option3<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> active = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">return</span> { active }
  }
}
</code></pre></div><div class="card"><h3>Named TAB</h3><p>The Tabs decide which tab is activated by default by matching the <code>active</code> to the Tab\u2019s <code>index</code> You can also name a Tab by setting the <code>name</code> to the Tab, in which case the Tabs will match the name first.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Option1&quot;</span>&gt;</span>Option1<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Option2&quot;</span>&gt;</span>Option2<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Option3&quot;</span>&gt;</span>Option3<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> active = ref(<span class="hljs-string">&#39;Option1&#39;</span>)

    <span class="hljs-keyword">return</span> { active }
  }
}
</code></pre></div><div class="card"><h3>Modify Style</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option1<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option2<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option3<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre></div><div class="card"><h3>Tab Disabled</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option1<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option2<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span> <span class="hljs-attr">disabled</span>&gt;</span>disabled<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre></div><div class="card"><h3>Enable Scroll</h3><p>Start scrolling automatically when the number of tabs is <code>more than four</code>. Click the Tab to scroll automatically to the center of the viewport.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option1<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option2<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option3<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option4<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option5<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option6<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option7<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option8<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre></div><div class="card"><h3>Tab Vertical Layout</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">item-direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active5&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Option1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Option2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;error&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Option3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.icon</span> {
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">5px</span>;
}
</code></pre></div><div class="card"><h3>Tabs Vertical Layout</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vertical-tabs&quot;</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">layout-direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option1<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option2<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option3<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.vertical-tabs</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">120px</span>;
}
</code></pre></div><div class="card"><h3>View Relation</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option1<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option2<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option3<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-tabs-items</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab-item</span>&gt;</span>
    The way she came into the place.
    I knew right then and there.
    there was something different about this girl.
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab-item</span>&gt;</span>
    The girl was persuasive.
    the girl I could not trust.
    The girl was bad.
    the girl was dangerous.
    I never know.
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab-item</span>&gt;</span>
    She&#39;s so dangerous.
    the girl is so dangerous.
    Take away my money, throw away my time.
    You can call me honey.
    but you&#39;re no damn good for me.
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs-items</span>&gt;</span>
</code></pre></div><div class="card"><h3>Sticky Layout</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">sticky</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;54&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option1<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option2<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>Option3<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>Tabs Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>The <code>active</code> tab identifier matches <code>name</code> first, followed by <code>index</code></td><td><em>string</em></td><td><code>index</code></td></tr><tr><td><code>layout-direction</code></td><td>The layout direction of the tabs, optional value of <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>The layout direction of the tab, optional value of <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>Whether fixed to the bottom of the window, can be used for bottom navigation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>The background color of the tabs</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>active-color</code></td><td>The primary color that the tab is activates</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>The primary color that the tab is not activated</td><td><em>string</em></td><td><code>#646566</code></td></tr><tr><td><code>disabled-color</code></td><td>The primary color that the tab is disabled</td><td><em>string</em></td><td><code>#e0e0e0</code></td></tr><tr><td><code>indicator-color</code></td><td>The tab activates the color of the indicator</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>indicator-size</code></td><td>Tab activates the size of the indicator</td><td><em>string | number</em></td><td><code>2px</code></td></tr><tr><td><code>elevation</code></td><td>Whether to enable shadows</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>Whether to enable sticky layouts</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>Distance offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Tab Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>tab\u2019s name</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable tab</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TabsItems Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>The identity of the active tab</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>Whether to allow swipe switch</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>Whether to allow cycle switching</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TabItem Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>view\u2019s name</td><td><em>string | number</em></td><td><code>index</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>You can call this method to redraw when a tabs changes position size</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>Tabs Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the tab is clicked, but not when the tab <code>disabled</code> status is <code>true</code></td><td><code>active: string | number</code></td></tr><tr><td><code>change</code></td><td>Triggered when switching tab</td><td><code>active: string | number</code></td></tr></tbody></table></div><div class="card"><h3>Tab Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the tab is clicked, but not when the tab <code>disabled</code> status is <code>true</code></td><td><code>active: string | number</code> <br> <code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>Tabs Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>tabs content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Tab Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>tab\u2019s content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>TabsItems Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>TabsItems content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>TabItem Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>tabItem\u2019s content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p></div><div class="card"><h3>Tabs Variables</h3><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tabs-item-horizontal-height</code></td><td><code>44px</code></td></tr><tr><td><code>--tabs-item-vertical-height</code></td><td><code>66px</code></td></tr><tr><td><code>--tabs-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tabs-indicator-size</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-indicator-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tabs-background</code></td><td><code>#fff</code></td></tr></tbody></table></div><div class="card"><h3>Tab Variables</h3><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tab-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--tab-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tab-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tab-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--tab-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--tab-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>`,30),p=[c];function d(o,h,r,i,j,g){return a(),t("div",e,p)}var m=s(l,[["render",d]]);export{m as default};
