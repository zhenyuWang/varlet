import{B as c,F as h}from"./FooterSlots.91f1013b.js";import{_ as o}from"./elevation.c2941a7c.js";import{d as t,o as d,c as r,a as s,h as n,L as a,l}from"./vendor.ea41cd30.js";import"./index.fe3c50bd.js";import"./elements.1c3a8437.js";import"./shared.2d2ec151.js";import"./index.aef00817.js";import"./Pagination.98e1cf52.js";import"./index.d9b6be6d.js";import"./zIndex.c624737f.js";import"./index.510439cf.js";import"./index.931337ba.js";import"./index.8afb1785.js";import"./index.043437d0.js";import"./index.2a06e007.js";import"./provide.d55b06dc.js";import"./components.c996eb06.js";import"./en-US.fc126591.js";import"./AppType.44c77136.js";const j={components:{BasicExample:c,FooterSlots:h}},i={class:"varlet-site-doc"},g=a(`<h1>Table</h1><div class="card"><h3>Intro</h3><p>A minimal table, when you need to display some data in the form of a table, you may use it.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Table } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Table)
</code></pre></div>`,3),m={class:"card"},b=s("h3",null,"Basic Usage",-1),u={class:"varlet-component-preview"},f=a(`<pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-table</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Math<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>English<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Jerry<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>124<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>38<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span> 
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Tom<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>100<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>135<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-table</span>&gt;</span>
</code></pre>`,1),y={class:"card"},v=s("h3",null,"Footer Slots",-1),_=s("p",null,[l("You can insert something in the tail slot, the most common is to insert a "),s("code",null,"Pagination"),l(".")],-1),x={class:"varlet-component-preview"},k=a(`<pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-table</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Math<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>English<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;l in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;l.name&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ l.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ l.math }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ l.english }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;footer&quot;</span>&gt;</span>
      <span class="hljs-comment">&lt;!-- Paging in the mobile preview mode uses the simple true mode, which is more friendly to small screen devices --&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">var-pagination</span>
        <span class="hljs-attr">:simple</span>=<span class="hljs-string">&quot;false&quot;</span>
        <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;1&quot;</span>
        <span class="hljs-attr">:total</span>=<span class="hljs-string">&quot;100&quot;</span>
        <span class="hljs-attr">:size-option</span>=<span class="hljs-string">&quot;[5, 10]&quot;</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;get&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-table</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">const</span> gen = <span class="hljs-function">(<span class="hljs-params">current, size</span>) =&gt;</span> {
  <span class="hljs-keyword">return</span> <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: size }).map(<span class="hljs-function">(<span class="hljs-params">_, index</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> id = (current - <span class="hljs-number">1</span>) * size + index + <span class="hljs-number">1</span>

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">name</span>: <span class="hljs-string">\`Name <span class="hljs-subst">\${id}</span>\`</span>,
      <span class="hljs-attr">math</span>: id,
      <span class="hljs-attr">english</span>: id,
    }
  })
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> list = ref(gen(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>))

    <span class="hljs-keyword">const</span> get = <span class="hljs-function">(<span class="hljs-params">current, size</span>) =&gt;</span> {
      list.value = gen(current, size)
    }
    
    <span class="hljs-keyword">return</span> {
      list,
      get
    }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.footer</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">justify-content</span>: flex-end;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">60px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">16px</span>;
}
</code></pre>`,3),w=a('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>full-Width</code></td><td>The width of the <code>table</code> (including the scrollable part)</td><td><em>string | number</em></td><td><code>100%</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of <code>table</code></td><td><code>-</code></td></tr><tr><td><code>footer</code></td><td>Footer of <code>table</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--table-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--table-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--table-thead-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-thead-th-text-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--table-thead-th-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--table-thead-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-tr-hover-background</code></td><td><code>#eee</code></td></tr><tr><td><code>--table-tbody-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-td-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--table-row-height</code></td><td><code>46px</code></td></tr><tr><td><code>--table-row-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--table-footer-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table></div>',4);function q(S,z,T,A,N,P){const e=t("basic-example"),p=t("footer-slots");return d(),r("div",i,[g,s("div",m,[b,s("div",u,[n(e)]),f]),s("div",y,[v,_,s("div",x,[n(p)]),k]),w])}var R=o(j,[["render",q]]);export{R as default};
