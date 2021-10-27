import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as t}from"./vendor.ea41cd30.js";const l={components:{}},c={class:"varlet-site-doc"},e=t(`<h1>\u52A8\u4F5C\u9762\u677F</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u4E00\u4E2A\u52A8\u4F5C\u9762\u677F\u63D0\u4F9B\u7528\u6237\u9009\u62E9\u9009\u9879\u7684\u80FD\u529B\u3002 <code>ActionSheet</code>\u63D0\u4F9B\u4E86\u51FD\u6570\u5F0F\u548C\u7EC4\u4EF6\u5F0F\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4E24\u79CD\u4F7F\u7528\u6548\u679C\u548C\u53C2\u6570\u5E76\u6CA1\u6709\u672C\u8D28\u533A\u522B\u3002 \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A<code>Promise</code>\uFF0C\u9009\u62E9\u65F6\u8FD4\u56DE<code>\u5F53\u524D\u9009\u62E9\u7684action</code>\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u8FD4\u56DE<code>close</code>\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { ActionSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(ActionSheet)
</code></pre></div><div class="card"><h3>\u5C40\u90E8\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ActionSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [ActionSheet.Component.name]: ActionSheet
  }
}
</code></pre></div><div class="card"><h3>\u51FD\u6570\u8C03\u7528</h3><h4>\u57FA\u672C\u4F7F\u7528</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">const</span> action = <span class="hljs-keyword">await</span> ActionSheet({
  <span class="hljs-attr">actions</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
    }
  ]
})

action !== <span class="hljs-string">&#39;close&#39;</span> &amp;&amp; Snackbar(<span class="hljs-string">\`\u60A8\u9009\u62E9\u7684\u662F:<span class="hljs-subst">\${action.name}</span>\`</span>)
</code></pre><h4>\u4FEE\u6539\u6807\u9898</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">ActionSheet({
  <span class="hljs-attr">actions</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
    }
  ],
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427&#39;</span>
})
</code></pre><h4>\u7981\u7528\u9009\u9879</h4><p>\u9009\u9879\u4F20\u5165<code>disabled</code>\u53EF\u4EE5\u4F7F\u9009\u9879\u5904\u4E8E\u7981\u7528\u72B6\u6001\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">ActionSheet({
  <span class="hljs-attr">actions</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
    },
  ]
})
</code></pre><h4>\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F</h4><p>\u65B9\u6CD5\u4F20\u5165<code>closeOnClickAction</code>\u53EF\u4EE5\u7981\u7528\u5728\u9009\u62E9\u9009\u9879\u65F6<code>ActionSheet</code>\u81EA\u52A8\u5173\u95ED\u7684\u884C\u4E3A\uFF0C\u7528\u6237\u53EF\u4EE5\u591A\u6B21\u9009\u62E9\uFF0C \u7531\u4E8E<code>Promise</code>\u53EA\u4F1A\u88AB<code>resolve</code>\u4E00\u6B21\uFF0C\u6240\u4EE5\u63A8\u8350\u4F7F\u7528<code>onSelect</code>\u76D1\u542C\u7528\u6237\u9009\u62E9\u884C\u4E3A\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

ActionSheet({
  <span class="hljs-attr">actions</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
    },
  ],
  <span class="hljs-attr">closeOnClickAction</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">onSelect</span>: <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`\u60A8\u9009\u62E9\u7684\u662F:<span class="hljs-subst">\${action.name}</span>\`</span>),
})
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F</h3><p>\u9009\u9879\u63D0\u4F9B\u4E86\u53EF\u4EE5\u914D\u7F6E\u6837\u5F0F\u7684\u53C2\u6570\uFF0C\u5177\u4F53\u9009\u9879\u7684\u53C2\u6570\u53EF\u9009\u9879\u89C1<code>Action\u7684\u6570\u636E\u7ED3\u6784</code>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

ActionSheet({
  <span class="hljs-attr">actions</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
      <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#00c48f&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
      <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ff9800&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
      <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#00afef&#39;</span>,
    },
  ]
})
</code></pre></div><div class="card"><h3>\u7EC4\u4EF6\u8C03\u7528</h3><h4>\u57FA\u672C\u4F7F\u7528</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\u57FA\u672C\u4F7F\u7528<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-action-sheet</span> 
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelect&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> actions = reactive([
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
      },
    ])
    
    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`\u4F60\u9009\u62E9\u7684\u662F:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre><h4>\u4FEE\u6539\u6807\u9898</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\u4FEE\u6539\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-action-sheet</span> 
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427&quot;</span> 
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> 
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> 
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelect&quot;</span> 
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> actions = reactive([
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
      },
    ])

    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`\u4F60\u9009\u62E9\u7684\u662F:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre><h4>\u7981\u7528\u9009\u9879</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\u7981\u7528\u9009\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-action-sheet</span> 
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> 
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelect&quot;</span> 
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> actions = reactive([
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
        <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
      },
    ])

    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`\u4F60\u9009\u62E9\u7684\u662F:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre><h4>\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-action-sheet</span> 
  <span class="hljs-attr">:close-on-click-action</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> 
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> 
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelect&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> actions = reactive([
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
      },
    ])

    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`\u4F60\u9009\u62E9\u7684\u662F:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre><h4>\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-action-sheet</span> 
  <span class="hljs-attr">:close-on-click-action</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> 
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> 
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelect&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> actions = reactive([
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 01&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;account-circle&#39;</span>,
        <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#00c48f&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 02&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;notebook&#39;</span>,
        <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ff9800&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Item 03&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wifi&#39;</span>,
        <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#00afef&#39;</span>,
      },
    ])

    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`\u4F60\u9009\u62E9\u7684\u662F:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>\u9009\u9879\u5217\u8868</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>\u52A8\u4F5C\u9762\u677F\u6807\u9898</td><td><em>string</em></td><td><code>\u8BF7\u9009\u62E9</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1body\u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>\u662F\u5426\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u52A8\u4F5C\u9762\u677F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u52A8\u4F5C\u9762\u677F\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>select</code></td><td>\u9009\u62E9\u9009\u9879\u65F6\u51FA\u53D1</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u52A8\u4F5C\u9762\u677F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED\u52A8\u4F5C\u9762\u677F\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Options</h3><h4>\u51FD\u6570\u5F0F\u8C03\u7528\u65F6\u4F20\u5165\u7684\u9009\u9879</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>title</code></td><td>\u52A8\u4F5C\u9762\u677F\u6807\u9898</td><td><em>string</em></td><td><code>\u8BF7\u9009\u62E9</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1body\u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>\u52A8\u4F5C\u9762\u677F\u5F00\u542F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>\u52A8\u4F5C\u9762\u677F\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>\u52A8\u4F5C\u9762\u677F\u5173\u95ED\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>\u52A8\u4F5C\u9762\u677F\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>\u9009\u9879\u9009\u62E9\u65F6\u56DE\u8C03</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>\u906E\u7F69\u5C42\u70B9\u51FB\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Action</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u9009\u9879\u540D\u79F0</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>\u9009\u9879\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon\u56FE\u6807\uFF0C\u652F\u6301\u7F51\u7EDC\u56FE\u7247\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>\u56FE\u6807\u5C3A\u5BF8</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>\u9009\u9879\u9644\u52A0\u7C7B\u540D</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u9009\u9879</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>actions</code></td><td>\u9009\u9879\u5217\u8868</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u52A8\u4F5C\u9762\u677F\u6807\u9898</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>`,14),p=[e];function o(d,r,h,i,j,g){return a(),n("div",c,p)}var k=s(l,[["render",o]]);export{k as default};
