import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as l}from"./vendor.ea41cd30.js";const e={components:{}},t={class:"varlet-site-doc"},p=l(`<h1>Style Provider</h1><p>Component libraries organize styles through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>. Each component has a corresponding style variable, you can directly replace the style variable on the root node by overriding it with a CSS file. Or use StyleProvider components.</p><div class="card"><h3>Basic style variable</h3><p>Here are some basic style variables for the component library</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-pseudo">:root</span> {
  --<span class="hljs-attribute">font-size</span>-xs: <span class="hljs-number">10px</span>;
  --<span class="hljs-attribute">font-size</span>-sm: <span class="hljs-number">12px</span>;
  --<span class="hljs-attribute">font-size</span>-md: <span class="hljs-number">14px</span>;
  --<span class="hljs-attribute">font-size</span>-lg: <span class="hljs-number">16px</span>;
  --<span class="hljs-attribute">icon</span>-size-xs: <span class="hljs-number">16px</span>;
  --<span class="hljs-attribute">icon</span>-size-sm: <span class="hljs-number">18px</span>;
  --<span class="hljs-attribute">icon</span>-size-md: <span class="hljs-number">20px</span>;
  --<span class="hljs-attribute">icon</span>-size-lg: <span class="hljs-number">22px</span>;
  --<span class="hljs-attribute">color</span>-primary: <span class="hljs-number">#3a7afe</span>;
  --<span class="hljs-attribute">color</span>-info: <span class="hljs-number">#00afef</span>;
  --<span class="hljs-attribute">color</span>-success: <span class="hljs-number">#00c48f</span>;
  --<span class="hljs-attribute">color</span>-warning: <span class="hljs-number">#ff9f00</span>;
  --<span class="hljs-attribute">color</span>-danger: <span class="hljs-number">#f44336</span>;
  --<span class="hljs-attribute">color</span>-disabled: <span class="hljs-number">#e0e0e0</span>;
  --<span class="hljs-attribute">color</span>-text-disabled: <span class="hljs-number">#aaa</span>;
  --cubic-bezier: <span class="hljs-built_in">cubic-bezier</span>(<span class="hljs-number">0.25</span>, <span class="hljs-number">0.8</span>, <span class="hljs-number">0.5</span>, <span class="hljs-number">1</span>);
}
</code></pre></div><div class="card"><h3>Modify styles at runtime</h3><p>Maybe you have a need to replace the style while the program is runtime\uFF0Clike a one-click skin change or something. The component library provides a StyleProvider component to assist in managing styles, Component provides\u2019 <code>component call</code> and <code>function call</code> and two invocation modes.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { StyleProvider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(StyleProvider)
</code></pre></div><div class="card"><h3>Scoped Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { StyleProvider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [StyleProvider.Component.name]: StyleProvider
  }
}
</code></pre></div><div class="card"><h3>Component Call</h3><p>Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the <code>teleport</code> will not work</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-style-provider</span> <span class="hljs-attr">:style-vars</span>=<span class="hljs-string">&quot;styleVars&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.score&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.license&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-top: 10px&quot;</span> 
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
    <span class="hljs-attr">block</span>
    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleTheme&quot;</span>
  &gt;</span>
    Toggle Theme
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-style-provider</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">score</span>: <span class="hljs-number">5</span>,
      <span class="hljs-attr">license</span>: <span class="hljs-literal">true</span>,
    })
    <span class="hljs-keyword">const</span> primaryTheme = {
      <span class="hljs-string">&#39;--theme-name&#39;</span>: <span class="hljs-string">&#39;primary&#39;</span>,
      <span class="hljs-string">&#39;--rate-primary-color&#39;</span>: <span class="hljs-string">&#39;var(--color-primary)&#39;</span>,
      <span class="hljs-string">&#39;--button-primary-color&#39;</span>: <span class="hljs-string">&#39;var(--color-primary)&#39;</span>,
      <span class="hljs-string">&#39;--switch-handle-active-background&#39;</span>: <span class="hljs-string">&#39;var(--color-primary)&#39;</span>,
      <span class="hljs-string">&#39;--switch-track-active-background&#39;</span>: <span class="hljs-string">&#39;var(--color-primary)&#39;</span>,
    }
    <span class="hljs-keyword">const</span> successTheme = {
      <span class="hljs-string">&#39;--theme-name&#39;</span>: <span class="hljs-string">&#39;success&#39;</span>,
      <span class="hljs-string">&#39;--rate-primary-color&#39;</span>: <span class="hljs-string">&#39;var(--color-success)&#39;</span>,
      <span class="hljs-string">&#39;--button-primary-color&#39;</span>: <span class="hljs-string">&#39;var(--color-success)&#39;</span>,
      <span class="hljs-string">&#39;--switch-handle-active-background&#39;</span>: <span class="hljs-string">&#39;var(--color-success)&#39;</span>,
      <span class="hljs-string">&#39;--switch-track-active-background&#39;</span>: <span class="hljs-string">&#39;var(--color-success)&#39;</span>,
    }
    <span class="hljs-keyword">const</span> styleVars = ref(primaryTheme)

    <span class="hljs-keyword">const</span> toggleTheme = <span class="hljs-function">() =&gt;</span> {
      styleVars.value = styleVars.value[<span class="hljs-string">&#39;--theme-name&#39;</span>] === <span class="hljs-string">&#39;primary&#39;</span> ? successTheme : primaryTheme
    }

    <span class="hljs-keyword">return</span> {
      state,
      styleVars,
      toggleTheme
    }
  }
}
</code></pre></div><div class="card"><h3>Function Call</h3><p>A functional call is to update variables directly on <code>:root</code>, which is suitable for situations where a global update style is required</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRootTheme&quot;</span>&gt;</span>Toggle Root Theme<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> toggleRootTheme = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> color = <span class="hljs-built_in">window</span>
        .getComputedStyle(<span class="hljs-built_in">document</span>.documentElement)
        .getPropertyValue(<span class="hljs-string">&#39;--color-primary&#39;</span>)
        .trim()
      
      StyleProvider({
        <span class="hljs-string">&#39;--color-primary&#39;</span>: color === <span class="hljs-string">&#39;#3a7afe&#39;</span> ? <span class="hljs-string">&#39;#000&#39;</span> : <span class="hljs-string">&#39;#3a7afe&#39;</span>,
      })
    }

    <span class="hljs-keyword">return</span> { toggleRootTheme }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Component content</td><td><code>-</code></td></tr></tbody></table></div>`,11),r=[p];function c(o,h,i,d,j,m){return a(),n("div",t,r)}var y=s(e,[["render",c]]);export{y as default};
