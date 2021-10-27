import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as t}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},c=t(`<h1>\u5F39\u51FA\u5C42</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u4ECE\u4E0A\u3001\u4E0B\u3001\u5DE6\u3001\u53F3\u3001\u4E2D\u5FC3\u5F39\u51FA\u7684\u5BB9\u5668\uFF0C \u7528\u4E8E\u5C55\u793A\u4FE1\u606F\u3002\u9ED8\u8BA4\u4F7F\u7528<code>teleport</code>\u63D2\u5165\u5230<code>body</code>\u5C3E\u90E8\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Popup)
</code></pre></div><div class="card"><h3>\u5F39\u51FA\u4F4D\u7F6E</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;center = true&quot;</span>
&gt;</span>
  \u5C45\u4E2D\u5F39\u51FA
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;bottom = true&quot;</span>
&gt;</span>
  \u4E0B\u65B9\u5F39\u51FA
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;top = true&quot;</span>
&gt;</span>
  \u4E0A\u65B9\u5F39\u51FA
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;left = true&quot;</span>
&gt;</span>
  \u5DE6\u4FA7\u5F39\u51FA
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;right = true&quot;</span>
&gt;</span>
  \u53F3\u4FA7\u5F39\u51FA
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

// \u5C45\u4E2D\u5F39\u51FA
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, 
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, 
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, 
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// \u4E0B\u65B9\u5F39\u51FA
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, 
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, 
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, 
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// \u4E0A\u65B9\u5F39\u51FA
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, 
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, 
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, 
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// \u5DE6\u4FA7\u5F39\u51FA
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, 
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, 
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// \u53F3\u4FA7\u5F39\u51FA
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, 
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, 
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, 
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> center = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> top = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> bottom = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> left = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> right = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      center,
      top,
      bottom,
      left,
      right
    }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.mt-10</span> {
  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">10px</span>;
}

<span class="hljs-selector-class">.block</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span> <span class="hljs-number">24px</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">250px</span>;
}
</code></pre></div><div class="card"><h3>\u906E\u7F69\u5C42\u6837\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;overlayClass = true&quot;</span>
&gt;</span>
  \u906E\u7F69\u5C42class
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;overlayStyle = true&quot;</span>
&gt;</span>
  \u906E\u7F69\u5C42style
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

// \u906E\u7F69\u5C42class
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> 
  <span class="hljs-attr">overlay-class</span>=<span class="hljs-string">&quot;custom-overlay&quot;</span> 
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;overlayClass&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, 
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, 
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// \u906E\u7F69\u5C42style
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> 
  <span class="hljs-attr">:overlay-style</span>=<span class="hljs-string">&quot;{
    backgroundColor: &#39;rgba(0, 0, 0, 0.3)&#39; 
  }&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;overlayStyle&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, 
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, 
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, 
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> overlayClass = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> overlayStyle = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      overlayClass,
      overlayStyle
    }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">/* normal css */</span>
<span class="hljs-selector-class">.custom-overlay</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);
}

<span class="hljs-comment">/* scoped css */</span>
<span class="hljs-selector-class">.mt-10</span> {
  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">10px</span>;
}

<span class="hljs-selector-class">.block</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span> <span class="hljs-number">24px</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">250px</span>;
}
</code></pre></div><div class="card"><h3>\u6CE8\u518C\u4E8B\u4EF6</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;event = true&quot;</span>
&gt;</span>
  \u6CE8\u518C\u4E8B\u4EF6
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;event&quot;</span>
  @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.info(&#39;open&#39;)&quot;</span>
  @<span class="hljs-attr">opened</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;opened&#39;)&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.warning(&#39;close&#39;)&quot;</span>
  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.error(&#39;closed&#39;)&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    \u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1,
    \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986,
    \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, 
    \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>
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
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>position</code></td><td>\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top</code> <code>bottom</code> <code>right</code> <code>left</code> <code>center</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>transition</code></td><td>\u8FC7\u5EA6\u52A8\u753B\u7684\u540D\u79F0</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1body\u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u5F39\u51FA\u5C42\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--popup-overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr><tr><td><code>--popup-content-background-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>`,11),e=[c];function o(r,h,d,j,i,u){return a(),n("div",p,e)}var v=s(l,[["render",o]]);export{v as default};
