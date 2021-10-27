import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as t}from"./vendor.ea41cd30.js";const e={components:{}},l={class:"varlet-site-doc"},c=t(`<h1>Icon</h1><div class="card"><h3>Intro</h3><p>Font based icon library, also support web images. Font icons are from <a href="https://materialdesignicons.com/">Material Design Icon</a>.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Icon)
</code></pre></div><div class="card"><h3>Icon Size</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;26&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Icon Color</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;26&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Use Image</h3><p>When the name passed in is a URL the <code>img</code> tag is displayed in <code>cover</code> mode. <code>size</code> is the width and height of the image.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;32&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Events</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> 
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox-marked-circle&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;Click success&#39;)&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> { Snackbar }
  }
}
</code></pre></div><div class="card"><h3>Icon Animation</h3><p>When <code>transition (ms)</code> is set, and the icon is toggled by its <code>name</code>, trigger a toggle animation.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">:transition</span>=<span class="hljs-string">&quot;300&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;30&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> name = ref(<span class="hljs-string">&#39;information&#39;</span>)
    
    <span class="hljs-keyword">const</span> toggle = <span class="hljs-function">() =&gt;</span> {
      name.value = name.value === <span class="hljs-string">&#39;information&#39;</span> 
        ? <span class="hljs-string">&#39;checkbox-marked-circle&#39;</span> 
        : <span class="hljs-string">&#39;information&#39;</span>
    }
    
    <span class="hljs-keyword">return</span> {
      name,
      toggle
    }
  }
}
</code></pre></div><div class="card"><h3>Custom Icons</h3><p>First you need to set up your own font and install it into your project. Let\u2019s assume that we extend a font named <code>my-icons</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">/* Set the font */</span>
<span class="hljs-keyword">@font-face</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&quot;my-icons&quot;</span>;
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.eot&quot;</span>);
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.eot&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;embedded-opentype&quot;</span>), 
    <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.woff2&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;woff2&quot;</span>), 
    <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.woff&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;woff&quot;</span>), 
    <span class="hljs-built_in">url</span>(<span class="hljs-string">&quot;https://xxx.my-icons.ttf&quot;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&quot;truetype&quot;</span>);
  <span class="hljs-attribute">font-weight</span>: normal;
  <span class="hljs-attribute">font-style</span>: normal;
}

<span class="hljs-comment">/* Font style */</span>
<span class="hljs-selector-class">.my-icon--set</span>,
<span class="hljs-selector-class">.my-icon--set</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-attribute">display</span>: inline-block;
  <span class="hljs-attribute">font</span>: normal normal normal <span class="hljs-number">14px</span>/<span class="hljs-number">1</span> <span class="hljs-string">&quot;my-icons&quot;</span>;
  <span class="hljs-attribute">font-size</span>: inherit;
  <span class="hljs-attribute">text-rendering</span>: auto;
  -webkit-<span class="hljs-attribute">font-smoothing</span>: antialiased;
}

<span class="hljs-comment">/* Font names map code points */</span>
<span class="hljs-selector-class">.my-icon-hot</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&quot;\\F000&quot;</span>;
}
</code></pre><p>Here you have successfully extended your icon library. So <code>my-icon</code> is your font <code>namespace</code>. You can use it this way:</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">namespace</span>=<span class="hljs-string">&quot;my-icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;hot&quot;</span> /&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>icon color, Only applies to font icons</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace, extensible custom icon library</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>transition</code></td><td>Transition animation time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when you click on the icon</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--icon-size</code></td><td><code>20px</code></td></tr></tbody></table></div>`,13),o=[c];function p(r,i,h,d,j,u){return a(),n("div",l,o)}var f=s(e,[["render",p]]);export{f as default};
