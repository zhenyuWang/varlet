import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as t}from"./vendor.ea41cd30.js";const e={components:{}},l={class:"varlet-site-doc"},c=t(`<h1>ActionSheet</h1><div class="card"><h3>Intro</h3><p>An action sheet pops up to give the user the ability to select options. <code>ActionSheet</code> Functional and component use methods are provided, and there is no essential difference between the two effects and parameters. The function returns a <code>Promise</code>\uFF0Con selection return <code>action</code>\uFF0CClick modal close to return <code>close</code>.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { ActionSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(ActionSheet)
</code></pre></div><div class="card"><h3>Scoped Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ActionSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [ActionSheet.Component.name]: ActionSheet
  }
}
</code></pre></div><div class="card"><h3>Functional</h3><h4>Basic Use</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

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

action !== <span class="hljs-string">&#39;close&#39;</span> &amp;&amp; Snackbar(<span class="hljs-string">\`Your selected is:<span class="hljs-subst">\${action.name}</span>\`</span>)
</code></pre><h4>Modify Title</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">ActionSheet({
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
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Choose whichever you like&#39;</span>
})
</code></pre><h4>Action Disabled</h4><p>The option is passed <code>disabled</code> to leave the action in the disabled state</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">ActionSheet({
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
</code></pre><h4>Disable Close On Click Action</h4><p>Passing in <code>CloseOnClickAction</code> disallows the action of <code>ActionSheet</code> closing automatically when the option is selected. The user can select the action multiple times. Because <code>Promise</code> is only resolved once, it is recommended to use <code>onSelect</code> to listen for the action of the user</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

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
  <span class="hljs-attr">onSelect</span>: <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`Your selected is:<span class="hljs-subst">\${action.name}</span>\`</span>),
})
</code></pre></div><div class="card"><h3>Custom Action Styles</h3><p>Options provide parameters to configure the style. See the <code>Action</code> data structure for options</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

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
</code></pre></div><div class="card"><h3>Component Call</h3><h4>Basic Usage</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Basic Usage<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
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
    
    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`Your selected is:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre><h4>Modify Title</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Modify Title<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-action-sheet</span> 
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose whichever you like&quot;</span> 
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

    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`Your selected is:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre><h4>Action Disabled</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Action Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
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

    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`Your selected is:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre><h4>Disable close on click action</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Disable close on click action<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
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

    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`Your selected is:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre><h4>Custom Action Styles</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Custom Action Styles<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
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

    <span class="hljs-keyword">const</span> handleSelect = <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> Snackbar(<span class="hljs-string">\`Your selected is:<span class="hljs-subst">\${action.name}</span>\`</span>)

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      handleSelect
    }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the action sheet</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>Action list</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>Whether to close the actions sheet when clicking action</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the action sheet to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>select</code></td><td>Triggered when the action is click</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>Triggered when the action sheet is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the action sheet open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the action sheet is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the action sheet close-animation ends</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when you click on overlay</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Options</h3><h4>Options passed in for a functional call</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the action sheet when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>Action sheet open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Action sheet open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Action sheet close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Action sheet close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>Action sheet click action callback</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ActionSheet Action</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Action name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Action text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon\uFF0Csupport network image address</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>Icon size</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>Class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Disable or not option</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>actions</code></td><td>Action list</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>`,14),o=[c];function p(d,r,h,i,j,g){return a(),n("div",l,o)}var k=s(e,[["render",p]]);export{k as default};
