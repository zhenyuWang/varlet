import{_ as s}from"./elevation.c2941a7c.js";import{o as a,c as n,L as t}from"./vendor.ea41cd30.js";const l={components:{}},p={class:"varlet-site-doc"},e=t(`<h1>Popup</h1><div class="card"><h3>Intro</h3><p>Create a container that can pop up from top, bottom, left, right and center. <code>teleport</code> inserts into the end of the <code>body</code> by default.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Popup)
</code></pre></div><div class="card"><h3>Popup Position</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;center = true&quot;</span>
&gt;</span>
  Center Popup
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;bottom = true&quot;</span>
&gt;</span>
  Below Popup
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;top = true&quot;</span>
&gt;</span>
  Above Popup
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;left = true&quot;</span>
&gt;</span>
  Left Popup
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span> 
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;right = true&quot;</span>
&gt;</span>
  Right Popup
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

// Center Popup
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// Below Popup
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    As he came into the window. 
    It was the sound of a crescendo. 
    He came into her apartment. 
    He left the bloodstains on the carpet.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// Above Popup
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// Left Popup
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// Right Popup
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
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
</code></pre></div><div class="card"><h3>Overlay Style</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;overlayClass = true&quot;</span>
&gt;</span>
  Overlay Style
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> 
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span> 
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;overlayStyle = true&quot;</span>
&gt;</span>
  Overlay Style
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

// Overlay Class
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> 
  <span class="hljs-attr">overlay-class</span>=<span class="hljs-string">&quot;custom-overlay&quot;</span> 
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;overlayClass&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>

// Overlay style
<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> 
  <span class="hljs-attr">:overlay-style</span>=<span class="hljs-string">&quot;{
    backgroundColor: &#39;rgba(0, 0, 0, 0.3)&#39; 
  }&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;overlayStyle&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
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
</code></pre></div><div class="card"><h3>Events</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">block</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;event = true&quot;</span>
&gt;</span>
  Event
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;event&quot;</span>
  @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.info(&#39;open&#39;)&quot;</span>
  @<span class="hljs-attr">opened</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;opened&#39;)&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.warning(&#39;close&#39;)&quot;</span>
  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.error(&#39;closed&#39;)&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>
    As he came into the window.
    It was the sound of a crescendo.
    He came into her apartment.
    He left the bloodstains on the carpet.
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
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the Popup</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>position</code></td><td>Popup position with optional value of <code>top</code> <code>bottom</code> <code>right</code> <code>left</code> <code>center</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>transition</code></td><td>Transition animation name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Popup when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the Popup</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Popup to mount</td><td><em>TeleportProps[\u2018to\u2019]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the Popup is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the Popup open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the Popup is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the Popup close-animation ends</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when you click on overlay</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Popup content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--popup-overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr><tr><td><code>--popup-content-background-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>`,11),o=[e];function c(r,h,d,j,i,u){return a(),n("div",p,o)}var v=s(l,[["render",c]]);export{v as default};
