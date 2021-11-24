import{_ as s}from"./elevation.7076906a.js";import{o as a,c as t,K as e}from"./vendor.8a125dba.js";const l={components:{}},c={class:"varlet-site-doc"},n=e(`<h1>\u6C34\u6CE2\u6307\u4EE4</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u4F7F\u5143\u7D20\u70B9\u51FB\u65F6\u751F\u6210\u4E00\u4E2A\u6C34\u6CE2\u6269\u6563\u7684\u6548\u679C\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Ripple } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Ripple)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block var-elevation--2&quot;</span> <span class="hljs-attr">v-ripple</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u4FEE\u6539\u989C\u8272</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block var-elevation--2&quot;</span> <span class="hljs-attr">v-ripple</span>=<span class="hljs-string">&quot;{ color: &#39;#2979ff&#39; }&quot;</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u7981\u7528\u6C34\u6CE2</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block var-elevation--2&quot;</span> <span class="hljs-attr">v-ripple</span>=<span class="hljs-string">&quot;{ disabled: true }&quot;</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u9009\u9879</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>color</code></td><td>\u6C34\u6CE2\u7EB9\u7684\u989C\u8272</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>disabled</code></td><td>\u7981\u7528\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--ripple-cubic-bezier</code></td><td><code>cubic-bezier(0.68, 0.01, 0.62, 0.6)</code></td></tr></tbody></table></div>`,9),p=[n];function d(r,h,o,i,v,j){return a(),t("div",c,p)}var u=s(l,[["render",d]]);export{u as default};