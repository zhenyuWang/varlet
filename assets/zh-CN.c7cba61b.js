import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as a,L as d}from"./vendor.ea41cd30.js";const e={components:{}},n={class:"varlet-site-doc"},c=d(`<h1>\u5BF9\u8BDD\u6846</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u4E00\u4E2A\u5BF9\u8BDD\u6846\u5C55\u793A\u5185\u5BB9\u5E76\u5904\u7406\u7528\u6237\u4EA4\u4E92\u3002 <code>Dialog</code>\u63D0\u4F9B\u4E86\u51FD\u6570\u5F0F\u548C\u7EC4\u4EF6\u5F0F\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4E24\u79CD\u4F7F\u7528\u6548\u679C\u548C\u53C2\u6570\u5E76\u6CA1\u6709\u672C\u8D28\u533A\u522B\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Dialog)
</code></pre></div><div class="card"><h3>\u5C40\u90E8\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [Dialog.Component.name]: Dialog
  }
}
</code></pre></div><div class="card"><h3>\u51FD\u6570\u8C03\u7528</h3><h4>\u57FA\u672C\u4F7F\u7528</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Dialog(<span class="hljs-string">&#39;\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34&#39;</span>)
</code></pre><h4>\u4FEE\u6539\u6807\u9898</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Dialog({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5170\u4EAD\u5E8F&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34&#39;</span>,
})
</code></pre><h4>\u9690\u85CF\u6309\u94AE</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Dialog({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34&#39;</span>,
  <span class="hljs-attr">confirmButton</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">cancelButton</span>: <span class="hljs-literal">false</span>,
})
</code></pre><h4>\u5904\u7406\u7528\u6237\u884C\u4E3A</h4><p>\u53EF\u4EE5\u901A\u8FC7<code>Dialog</code>\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u83B7\u53D6\u7528\u6237\u884C\u4E3A, \u8FD4\u56DE\u503C\u662F\u4E00\u4E2A<code>promise</code>\u3002 \u5305\u542B<code>confirm(\u786E\u8BA4)</code>\u3001<code>cancel(\u53D6\u6D88)</code>\u3001<code>close(\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5C42\u89E6\u53D1\u5173\u95ED)</code>\u4E09\u79CD\u72B6\u6001\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">const</span> actions = {
  <span class="hljs-attr">confirm</span>: <span class="hljs-function">() =&gt;</span> Snackbar.success(<span class="hljs-string">&#39;confirm&#39;</span>),
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> Snackbar.error(<span class="hljs-string">&#39;cancel&#39;</span>),
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> Snackbar.info(<span class="hljs-string">&#39;close&#39;</span>),
}

actions[<span class="hljs-keyword">await</span> Dialog(<span class="hljs-string">&#39;\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34&#39;</span>)]()
</code></pre></div><div class="card"><h3>\u5F02\u6B65\u5173\u95ED</h3><p><code>Dialog</code>\u53EF\u4EE5\u901A\u8FC7<code>onBeforeClose</code>\u8FDB\u884C\u5173\u95ED\u524D\u7684\u62E6\u622A\uFF0C\u53EF\u4EE5\u4ECE\u53C2\u6570\u4E2D\u5F97\u5230\u7528\u6237\u884C\u4E3A\u548C\u89E6\u53D1\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">const</span> actions = {
  <span class="hljs-attr">confirm</span>: <span class="hljs-function">() =&gt;</span> Snackbar.success(<span class="hljs-string">&#39;confirm&#39;</span>),
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> Snackbar.error(<span class="hljs-string">&#39;cancel&#39;</span>),
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> Snackbar.info(<span class="hljs-string">&#39;close&#39;</span>),
}

<span class="hljs-keyword">const</span> onBeforeClose = <span class="hljs-function">(<span class="hljs-params">action, done</span>) =&gt;</span> {
  Snackbar.loading(<span class="hljs-string">&#39;\u6B63\u5728\u5F02\u6B65\u5173\u95ED&#39;</span>)
  
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    actions[action]()
    done()
  }, <span class="hljs-number">1000</span>)
}

Dialog({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34&#39;</span>,
  onBeforeClose
})
</code></pre></div><div class="card"><h3>\u7EC4\u4EF6\u8C03\u7528</h3><h4>\u57FA\u672C\u4F7F\u7528</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\u57FA\u672C\u4F7F\u7528<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5170\u4EAD\u5E8F&quot;</span>
  <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;confirm&#39;)&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.error(&#39;cancel&#39;)&quot;</span>
  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.info(&#39;closed&#39;)&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      show,
      Snackbar,
    }
  }
}
</code></pre><h4>\u5F02\u6B65\u5173\u95ED</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\u5F02\u6B65\u5173\u95ED<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5170\u4EAD\u5E8F&quot;</span>
  <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  @<span class="hljs-attr">before-close</span>=<span class="hljs-string">&quot;onBeforeClose&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">const</span> actions = {
  <span class="hljs-attr">confirm</span>: <span class="hljs-function">() =&gt;</span> Snackbar.success(<span class="hljs-string">&#39;confirm&#39;</span>),
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> Snackbar.error(<span class="hljs-string">&#39;cancel&#39;</span>),
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> Snackbar.info(<span class="hljs-string">&#39;close&#39;</span>),
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">const</span> onBeforeClose = <span class="hljs-function">(<span class="hljs-params">action, done</span>) =&gt;</span> {
      Snackbar.loading(<span class="hljs-string">&#39;\u6B63\u5728\u5F02\u6B65\u5173\u95ED&#39;</span>)

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        actions[action]()
        done()
      }, <span class="hljs-number">1000</span>)
    }

    <span class="hljs-keyword">return</span> {
      show,
      Snackbar,
      onBeforeClose,
    }
  }
}
</code></pre><h4>\u81EA\u5B9A\u4E49\u63D2\u69FD</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u63D2\u69FD<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-dialog</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-dialog</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> { show }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>\u662F\u5426\u663E\u793A\u5BF9\u8BDD\u6846</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>\u5BF9\u8BDD\u6846\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>message</code></td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>message-align</code></td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C <code>center</code>, <code>left</code>, <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirm-button</code></td><td>\u662F\u5426\u663E\u793A\u786E\u8BA4\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancel-button</code></td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirm-button-text</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancel-button-text</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-color</code></td><td>\u786E\u8BA4\u6309\u94AE\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-color</code></td><td>\u53D6\u6D88\u6309\u94AE\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1body\u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00\u5BF9\u8BDD\u6846\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>\u6253\u5F00\u5BF9\u8BDD\u6846\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>before-close</code></td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u524D\u89E6\u53D1\uFF0C\u4F1A\u963B\u6B62\u5173\u95ED</td><td><code>action: confirm | cancel | close</code> <br> <code>done: Function</code></td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u5BF9\u8BDD\u6846\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>\u5173\u95ED\u5BF9\u8BDD\u6846\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>\u786E\u8BA4\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>\u53D6\u6D88\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Dialog Options</h3><h4>\u51FD\u6570\u5F0F\u8C03\u7528\u65F6\u4F20\u5165\u7684\u9009\u9879</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>title</code></td><td>\u5BF9\u8BDD\u6846\u6807\u9898</td><td><em>string</em></td><td><code>\u63D0\u793A</code></td></tr><tr><td><code>message</code></td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>messageAlign</code></td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirmButton</code></td><td>\u662F\u5426\u663E\u793A\u786E\u8BA4\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancelButton</code></td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirmButtonText</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancelButtonText</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonColor</code></td><td>\u786E\u8BA4\u6309\u94AE\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonColor</code></td><td>\u53D6\u6D88\u6309\u94AE\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1body\u7684\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>\u5BF9\u8BDD\u6846\u5F00\u542F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>\u5BF9\u8BDD\u6846\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onBeforeClose</code></td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u524D\u56DE\u8C03\uFF0C\u4F1A\u963B\u6B62\u5173\u95ED</td><td><em>(action: confirm | cancel | close, done: Function) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>\u5BF9\u8BDD\u6846\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onConfirm</code></td><td>\u786E\u8BA4\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onCancel</code></td><td>\u53D6\u6D88\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>\u906E\u7F69\u5C42\u70B9\u51FB\u56DE\u8C03</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u5BF9\u8BDD\u6846\u4E3B\u8981\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u5BF9\u8BDD\u6846\u6807\u9898</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td><code>280px</code></td></tr><tr><td><code>--dialog-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--dialog-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--dialog-title-padding</code></td><td><code>20px 20px 0</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--dialog-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--dialog-message-padding</code></td><td><code>12px 20px</code></td></tr><tr><td><code>--dialog-message-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--dialog-message-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--dialog-actions-padding</code></td><td><code>0 12px 12px</code></td></tr><tr><td><code>--dialog-button-margin-left</code></td><td><code>6px</code></td></tr><tr><td><code>--dialog-confirm-button-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--dialog-cancel-button-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table></div>`,13),o=[c];function l(r,p,h,i,g,j){return t(),a("div",n,o)}var f=s(e,[["render",l]]);export{f as default};
