import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const e={components:{}},l={class:"varlet-site-doc"},d=n(`<h1>List</h1><div class="card"><h3>Intro</h3><p>Unlimited scroll load list, touch bottom load, support manual check position load. Support custom loading state, error state, data loading completed state.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { List } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(List)
</code></pre></div><div class="card"><h3>Basic Use</h3><p>The <code>load</code> event is emitted when a scroll container is detected scrolling to the bottom\uFF0Cand will be set <code>loading</code> to <code>true</code>, you need to manually set <code>loading</code> to <code>false</code> at the end of loading, that\u2019s the end of the load.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-list</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;load&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span>&gt;</span>
    List Item: {{ item }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-list</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> finished = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> list = reactive([])
    
    <span class="hljs-keyword">const</span> load = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">20</span>; i++) {
          list.push(list.length + <span class="hljs-number">1</span>)
        }

        loading.value = <span class="hljs-literal">false</span>

        <span class="hljs-keyword">if</span> (list.length &gt;= <span class="hljs-number">60</span>) {
          finished.value = <span class="hljs-literal">true</span>
        }
      }, <span class="hljs-number">1000</span>)
    }

    <span class="hljs-keyword">return</span> {
      list,
      loading,
      finished,
      load
    }
  }
}
</code></pre></div><div class="card"><h3>Load Fail</h3><p>You can manually set the error status using <code>v-model:error</code>, an error message is displayed. Clicking on the error message will help you set the <code>error</code> to <code>false</code> and trigger the <code>load</code> event again.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-list</span>
  <span class="hljs-attr">v-model:error</span>=<span class="hljs-string">&quot;error&quot;</span>
  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;load&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span>&gt;</span>
    List Item: {{ item }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-list</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> error = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> list = reactive([])
    
    <span class="hljs-keyword">const</span> load = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">if</span> (list.length === <span class="hljs-number">40</span>) {
          error.value = <span class="hljs-literal">true</span>
          loading.value = <span class="hljs-literal">false</span>
          <span class="hljs-keyword">return</span>
        }

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">20</span>; i++) {
          list.push(list.length + <span class="hljs-number">1</span>)
        }

        loading.value = <span class="hljs-literal">false</span>
      }, <span class="hljs-number">1000</span>)
    }

    <span class="hljs-keyword">return</span> {
      list,
      loading,
      error,
      load
    }
  }
}
</code></pre></div><div class="card"><h3>Tip Text</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-list</span> 
  <span class="hljs-attr">loading-text</span>=<span class="hljs-string">&quot;loading QAQ&quot;</span> 
  <span class="hljs-attr">finished-text</span>=<span class="hljs-string">&quot;finished ORZ&quot;</span> 
  <span class="hljs-attr">error-text</span>=<span class="hljs-string">&quot;error TNT&quot;</span> 
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span> 
  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> 
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;load&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span>&gt;</span>
    List Item: {{ item }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-list</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> loading = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> finished = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> list = reactive([])
    
    <span class="hljs-keyword">const</span> load = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">20</span>; i++) {
          list.push(list.length + <span class="hljs-number">1</span>)
        }

        loading.value = <span class="hljs-literal">false</span>

        <span class="hljs-keyword">if</span> (list.length &gt;= <span class="hljs-number">60</span>) {
          finished.value = <span class="hljs-literal">true</span>
        }
      }, <span class="hljs-number">1000</span>)
    }

    <span class="hljs-keyword">return</span> {
      list,
      loading,
      finished,
      load
    }
  }
}
</code></pre></div><div class="card"><h3>Be Careful</h3><p>We detect bottoming by listening for the scroll event of the scroll container and perform the load. A scroll container is the nearest element that <code>overflow-y=&#39;auto&#39;</code> or <code>scroll</code> When you set an element\u2019s <code>overflow-x</code> to a value other than <code>visible</code>, The browser will fix your <code>overflow-y</code> to <code>auto</code> in order to maintain a <code>BFC</code> structure. This can be mistaken for a scroll container, so avoid it.</p></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>error state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>Whether the location is detected immediately when the List is initialized</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>Whether the load is complete</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Trigger distance from the bottom</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>Loading text</td><td><em>string</em></td><td><code>Loading</code></td></tr><tr><td><code>finished-text</code></td><td>Finished text</td><td><em>string</em></td><td><code>No more</code></td></tr><tr><td><code>error-text</code></td><td>Error text</td><td><em>string</em></td><td><code>Load fail</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>check</code></td><td>Trigger position check, touch bottom trigger load event</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>load</code></td><td>Triggered when it hit bottom</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>List content</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>Loading content</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>Error content</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>Finished content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>`,13),o=[d];function c(r,p,i,h,j,g){return a(),t("div",l,o)}var f=s(e,[["render",c]]);export{f as default};
