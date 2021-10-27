import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const l={components:{}},c={class:"varlet-site-doc"},e=n(`<h1>\u9009\u9879\u5361\u7EC4</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u4F7F\u7528<code>Tabs</code>\u3001<code>Tab</code>\u5B9E\u73B0\u9009\u9879\u5361\u7EC4\u7684\u5207\u6362\u3002\u4F7F\u7528<code>TabsItems</code>\u3001<code>TabItem</code>\u5B9E\u73B0\u548C\u9009\u9879\u5361\u7EC4\u7684\u89C6\u56FE\u8054\u52A8\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Tabs, Tab, TabsItems, TabItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp()
  .use(Tabs)
  .use(Tab)
  .use(TabsItems)
  .use(TabItem)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> active = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">return</span> { active }
  }
}
</code></pre></div><div class="card"><h3>\u5177\u540D\u9009\u9879\u5361</h3><p>Tabs\u9ED8\u8BA4\u901A\u8FC7<code>active</code>\u53BB\u5339\u914DTab\u7684<code>index</code>\u6765\u51B3\u5B9A\u54EA\u4E2A\u9009\u9879\u5361\u88AB\u6FC0\u6D3B\u3002 \u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7ED9Tab\u8BBE\u7F6E<code>name</code>\u6765\u547D\u540D\u9009\u9879\u5361\uFF0C\u8FD9\u65F6Tabs\u4F1A\u4F18\u5148\u5339\u914D<code>name</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u9009\u98791&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u9009\u98792&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u9009\u98793&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> active = ref(<span class="hljs-string">&#39;\u9009\u98791&#39;</span>)

    <span class="hljs-keyword">return</span> { active }
  }
}
</code></pre></div><div class="card"><h3>\u4FEE\u6539\u6837\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u7981\u7528\u9009\u9879</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span> <span class="hljs-attr">disabled</span>&gt;</span>\u7981\u7528\u9009\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5F00\u542F\u6EDA\u52A8</h3><p>\u5728\u9009\u9879\u5361\u6570\u91CF\u5728<code>\u56DB\u4E2A\u4EE5\u4E0A</code>\u65F6\u81EA\u52A8\u5F00\u542F\u6EDA\u52A8\uFF0C\u70B9\u51FB\u9009\u9879\u5361\u81EA\u52A8\u6EDA\u52A8\u5230\u89C6\u53E3\u4E2D\u592E\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98794<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98795<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98796<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98797<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98798<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u9009\u9879\u5782\u76F4\u5E03\u5C40</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">item-direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active5&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;error&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.icon</span> {
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">5px</span>;
}
</code></pre></div><div class="card"><h3>\u5BB9\u5668\u5782\u76F4\u5E03\u5C40</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vertical-tabs&quot;</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">layout-direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.vertical-tabs</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">120px</span>;
}
</code></pre></div><div class="card"><h3>\u89C6\u56FE\u8054\u52A8</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-tabs-items</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab-item</span>&gt;</span>
    \u545C\u5566\u5566\u5566\u706B\u8F66\u7B1B\uFF0C\u968F\u7740\u5954\u817E\u7684\u9A6C\u8E44\u3002
    \u5C0F\u59B9\u59B9\u5439\u7740\u53E3\u7434\uFF0C\u5915\u9633\u4E0B\u7F8E\u4E86\u526A\u5F71\u3002
    \u6211\u7528\u5B50\u5F39\u5199\u65E5\u8BB0\uFF0C\u4ECB\u7ECD\u5B8C\u4E86\u98CE\u666F\u3002
    \u63A5\u4E0B\u6765\u6362\u4ECB\u7ECD\u6211\u81EA\u5DF1\u3002
    \u6211\u867D\u7136\u662F\u4E2A\u725B\u4ED4\uFF0C\u5728\u9152\u5427\u53EA\u70B9\u725B\u5976\u3002
    \u4E3A\u4EC0\u4E48\u4E0D\u559D\u5564\u9152\uFF0C\u56E0\u4E3A\u5564\u9152\u4F24\u8EAB\u4F53\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab-item</span>&gt;</span>
    \u5F88\u591A\u4EBA\u4E0D\u957F\u773C\u775B\uFF0C\u56A3\u5F20\u90FD\u9760\u6B66\u5668\u3002
    \u8D64\u624B\u7A7A\u62F3\u5C31\u7F29\u6210\u8682\u8681\u3002
    \u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
    \u4E0D\u7528\u9EBB\u70E6\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab-item</span>&gt;</span>
    \u4F60\u4EEC\u4E00\u8D77\u4E0A\uFF0C\u6211\u5728\u8D76\u65F6\u95F4\u3002
    \u6BCF\u5929\u51B3\u6597\u89C2\u4F17\u90FD\u7D2F\u4E86\uFF0C\u82F1\u96C4\u4E5F\u7D2F\u4E86\u3002
    \u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
    \u526F\u6B4C\u4E0D\u957F\u4F60\u4EEC\u6709\u51E0\u4E2A\uFF0C\u4E00\u8D77\u4E0A\u597D\u4E86\u3002
    \u6B63\u4E49\u547C\u5524\u6211\uFF0C\u7F8E\u5973\u9700\u8981\u6211\u3002
    \u725B\u4ED4\u5F88\u5FD9\u7684\u3002
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-tab-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs-items</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5F00\u542F\u7C98\u6027\u5E03\u5C40</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-tabs</span>
  <span class="hljs-attr">sticky</span>
  <span class="hljs-attr">elevation</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;hsla(0, 0%, 100%, .6)&quot;</span>
  <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;54&quot;</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-tab</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">var-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-tabs</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3></div><div class="card"><h3>Tabs Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>\u6FC0\u6D3B\u7684\u9009\u9879\u5361\u6807\u8BC6, \u4F18\u5148\u5339\u914Dname\uFF0C\u5176\u6B21\u662Findex</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>layout-direction</code></td><td>\u9009\u9879\u5361\u7EC4\u7684\u5E03\u5C40\u65B9\u5411\uFF0C \u53EF\u9009\u503C\u4E3A <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>\u9009\u9879\u5361\u7684\u5E03\u5C40\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>\u662F\u5426\u56FA\u5B9A\u5728\u7A97\u53E3\u5E95\u90E8, \u53EF\u7528\u505A\u5E95\u90E8\u5BFC\u822A</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>\u9009\u9879\u5361\u7684\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>active-color</code></td><td>\u9009\u9879\u5361\u6FC0\u6D3B\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>\u9009\u9879\u5361\u672A\u6FC0\u6D3B\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>#646566</code></td></tr><tr><td><code>disabled-color</code></td><td>\u9009\u9879\u5361\u7981\u7528\u65F6\u7684\u4E3B\u8981\u989C\u8272</td><td><em>string</em></td><td><code>#e0e0e0</code></td></tr><tr><td><code>indicator-color</code></td><td>\u9009\u9879\u5361\u6FC0\u6D3B\u6307\u793A\u5668\u7684\u989C\u8272</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>indicator-size</code></td><td>\u9009\u9879\u5361\u6FC0\u6D3B\u6307\u793A\u5668\u7684\u5C3A\u5BF8</td><td><em>string | number</em></td><td><code>2px</code></td></tr><tr><td><code>elevation</code></td><td>\u662F\u5426\u542F\u7528\u9634\u5F71</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>\u662F\u5426\u542F\u7528\u7C98\u6027\u5E03\u5C40</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>\u5438\u9876\u8DDD\u79BB</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Tab Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u9009\u9879\u5361\u7684\u540D\u5B57</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u9009\u9879\u5361</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TabsItems Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>\u6FC0\u6D3B\u7684\u9009\u9879\u5361\u7684\u6807\u8BC6</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>\u662F\u5426\u5141\u8BB8\u6ED1\u52A8\u5207\u6362</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>\u662F\u5426\u5141\u8BB8\u5FAA\u73AF\u5207\u6362</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TabItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u89C6\u56FE\u7684\u540D\u5B57</td><td><em>string | number</em></td><td><code>index</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>resize</code></td><td>\u4EA7\u751F\u4F4D\u7F6E\u5927\u5C0F\u53D8\u5316\u65F6\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u8FDB\u884C\u91CD\u7ED8</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3></div><div class="card"><h3>Tabs Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u9009\u9879\u5361\u65F6\u89E6\u53D1, \u5728\u9009\u9879\u5361<code>disabled</code> \u72B6\u6001\u4E3A <code>true</code> \u65F6\u4E0D\u89E6\u53D1</td><td><code>active: string | number</code></td></tr><tr><td><code>change</code></td><td>\u5207\u6362\u9009\u9879\u5361\u65F6\u89E6\u53D1</td><td><code>active: string | number</code></td></tr></tbody></table></div><div class="card"><h3>Tab Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u9009\u9879\u5361\u65F6\u89E6\u53D1, \u5728 <code>disabled</code> \u72B6\u6001\u4E3A <code>true</code> \u65F6\u4E0D\u89E6\u53D1</td><td><code>active: string | number</code> <br> <code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3></div><div class="card"><h3>Tabs Slots</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9009\u9879\u5361\u7EC4\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Tab Slots</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9009\u9879\u5361\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>TabsItems Slots</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u89C6\u56FE\u7EC4\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>TabItem Slots</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u89C6\u56FE\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p></div><div class="card"><h3>Tabs Variables</h3><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--tabs-item-horizontal-height</code></td><td><code>44px</code></td></tr><tr><td><code>--tabs-item-vertical-height</code></td><td><code>66px</code></td></tr><tr><td><code>--tabs-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tabs-indicator-size</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-indicator-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tabs-background</code></td><td><code>#fff</code></td></tr></tbody></table></div><div class="card"><h3>Tab Variables</h3><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--tab-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--tab-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tab-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tab-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--tab-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--tab-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>`,30),p=[e];function d(h,r,o,j,i,g){return a(),t("div",c,p)}var m=s(l,[["render",d]]);export{m as default};
