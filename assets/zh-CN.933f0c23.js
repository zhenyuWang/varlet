import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as l}from"./vendor.ea41cd30.js";const t={components:{}},p={class:"varlet-site-doc"},e=l(`<h1>\u6837\u5F0F\u5B9A\u5236</h1><p>\u7EC4\u4EF6\u5E93\u901A\u8FC7<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">css\u53D8\u91CF</a>\u6765\u7EC4\u7EC7\u6837\u5F0F\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\u5BF9\u5E94\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C \u60A8\u53EF\u4EE5\u901A\u8FC7css\u6587\u4EF6\u8986\u76D6\u7684\u65B9\u5F0F\u76F4\u63A5\u66FF\u6362\u6839\u8282\u70B9\u4E0A\u7684\u6837\u5F0F\u53D8\u91CF, \u6216\u8005\u4F7F\u7528StyleProvider\u7EC4\u4EF6\u3002</p><div class="card"><h3>\u57FA\u672C\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u662F\u7EC4\u4EF6\u5E93\u4E00\u4E9B\u57FA\u672C\u7684\u6837\u5F0F\u53D8\u91CF</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-pseudo">:root</span> {
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
</code></pre></div><div class="card"><h3>\u8FD0\u884C\u65F6\u4FEE\u6539\u6837\u5F0F</h3><p>\u53EF\u80FD\u60A8\u6709\u5728\u7A0B\u5E8F\u8FD0\u884C\u65F6\u66FF\u6362\u6837\u5F0F\u7684\u9700\u6C42\uFF0C\u6BD4\u5982\u4E00\u952E\u6362\u80A4\u4E4B\u7C7B\u7684\uFF0C\u7EC4\u4EF6\u5E93\u63D0\u4F9B\u4E86StyleProvider\u7EC4\u4EF6\u6765\u8F85\u52A9\u7BA1\u7406\u6837\u5F0F\uFF0C \u7EC4\u4EF6\u63D0\u4F9B\u4E86<code>\u7EC4\u4EF6\u5F0F\u8C03\u7528</code>\u548C<code>\u51FD\u6570\u5F0F\u8C03\u7528</code>\u548C\u4E24\u79CD\u8C03\u7528\u65B9\u5F0F\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { StyleProvider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(StyleProvider)
</code></pre></div><div class="card"><h3>\u5C40\u90E8\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { StyleProvider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [StyleProvider.Component.name]: StyleProvider
  }
}
</code></pre></div><div class="card"><h3>\u7EC4\u4EF6\u5F0F\u8C03\u7528</h3><p>\u7EC4\u4EF6\u5F0F\u8C03\u7528\u53EF\u4EE5\u6709\u8303\u56F4\u6027\u7684\u5B9A\u5236\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u907F\u514D\u4E86\u5168\u5C40\u6C61\u67D3\uFF0C\u9700\u8981\u6CE8\u610F\u662F\u6709\u4E9B\u4F7F\u7528<code>teleport</code>\u4F20\u9001\u5230<code>StyleProvider</code>\u5916\u7684\u5143\u7D20\u5C06\u4E0D\u4F1A\u751F\u6548\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-style-provider</span> <span class="hljs-attr">:style-vars</span>=<span class="hljs-string">&quot;styleVars&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.score&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.license&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-top: 10px&quot;</span> 
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
    <span class="hljs-attr">block</span>
    @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleTheme&quot;</span>
  &gt;</span>
    \u5207\u6362\u6837\u5F0F\u53D8\u91CF
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
</code></pre></div><div class="card"><h3>\u51FD\u6570\u5F0F\u8C03\u7528</h3><p>\u51FD\u6570\u5F0F\u7684\u8C03\u7528\u662F\u76F4\u63A5\u66F4\u65B0<code>:root</code>\u4E0A\u7684\u53D8\u91CF\uFF0C\u9002\u5408\u9700\u8981\u5168\u5C40\u66F4\u65B0\u6837\u5F0F\u7684\u60C5\u51B5\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleRootTheme&quot;</span>&gt;</span>\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
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
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>css\u53D8\u91CF</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u7EC4\u4EF6\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div>`,11),r=[e];function c(h,o,i,d,j,u){return a(),n("div",p,r)}var y=s(t,[["render",c]]);export{y as default};
