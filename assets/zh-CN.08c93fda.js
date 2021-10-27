import{_ as s}from"./elevation.c2941a7c.js";import{o as t,c as e,L as d}from"./vendor.ea41cd30.js";const a={components:{}},l={class:"varlet-site-doc"},c=d(`<h1>\u6587\u4EF6\u4E0A\u4F20</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u4E86\u6587\u4EF6\u8BFB\u53D6\u3001\u56FE\u7247/\u89C6\u9891\u9884\u89C8\u80FD\u529B\u3002 \u901A\u8FC7\u76D1\u542C<code>after-read</code>\u4E8B\u4EF6\u83B7\u53D6\u6587\u4EF6\u4E0A\u4F20\u670D\u52A1\u5668\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Uploader } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Uploader)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> @<span class="hljs-attr">after-read</span>=<span class="hljs-string">&quot;handleAfterRead&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([])

    <span class="hljs-keyword">const</span> handleAfterRead = <span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(file)

    <span class="hljs-keyword">return</span> {
      files,
      handleAfterRead
    }
  }
}
</code></pre></div><div class="card"><h3>\u6587\u4EF6\u9884\u89C8</h3><p>\u901A\u8FC7\u5206\u6790\u6587\u4EF6\u7684url\u540E\u7F00\u540D\u5224\u65AD\u6587\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301\u56FE\u7247\u548C\u89C6\u9891\u9884\u89C8\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://www.runoob.com/try/demo_source/mov_bbb.mp4&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cover.jpg&#39;</span>
      }
    ])

    <span class="hljs-keyword">return</span> { files }
  }
}
</code></pre></div><div class="card"><h3>\u4E0A\u4F20\u72B6\u6001</h3><p>\u63D0\u4F9B\u4E86<code>loading</code>\u3001 <code>success</code>\u3001<code>error</code>\u4E09\u79CD\u4E0A\u4F20\u72B6\u6001\uFF0C\u5E76\u63D0\u4F9B\u4E86\u5DE5\u5177\u51FD\u6570\u5FEB\u901F\u83B7\u53D6\u5BF9\u5E94\u72B6\u6001\u7684\u6587\u4EF6\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> @<span class="hljs-attr">after-read</span>=<span class="hljs-string">&quot;handleAfterRead&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">state</span>: <span class="hljs-string">&#39;loading&#39;</span>
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">state</span>: <span class="hljs-string">&#39;success&#39;</span>
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">state</span>: <span class="hljs-string">&#39;error&#39;</span>
      }
    ])

    <span class="hljs-keyword">const</span> handleAfterRead = <span class="hljs-function">(<span class="hljs-params">file</span>) =&gt;</span> {
      file.state = <span class="hljs-string">&#39;loading&#39;</span>

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        file.state = <span class="hljs-string">&#39;success&#39;</span>
      }, <span class="hljs-number">1000</span>)
    }

    <span class="hljs-keyword">return</span> { 
      files,
      handleAfterRead
    }
  }
}
</code></pre></div><div class="card"><h3>\u6587\u4EF6\u6570\u91CF\u9650\u5236</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;1&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u6587\u4EF6\u5927\u5C0F\u9650\u5236</h3><p>\u8D85\u8FC7\u9650\u5236\u4F1A\u88AB\u963B\u6B62\u8BFB\u53D6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u542C<code>oversize</code>\u4E8B\u4EF6\u83B7\u53D6\u6587\u4EF6\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> <span class="hljs-attr">:maxsize</span>=<span class="hljs-string">&quot;1024&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;handleOversize&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([])

    <span class="hljs-keyword">const</span> handleOversize = <span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(file)

    <span class="hljs-keyword">return</span> { 
      files,
      handleAfterRead
    }
  },
}
</code></pre></div><div class="card"><h3>\u4E0A\u4F20\u9884\u5904\u7406</h3><p>\u901A\u8FC7\u6CE8\u518C<code>before-read</code>\u4E8B\u4EF6\u5BF9\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u8BFB\u53D6\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> @<span class="hljs-attr">before-read</span>=<span class="hljs-string">&quot;handleBeforeRead&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([])

    <span class="hljs-keyword">const</span> handleBeforeRead = <span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> file.file.size &lt;= <span class="hljs-number">1024</span> * <span class="hljs-number">10</span>

    <span class="hljs-keyword">return</span> { 
      files,
      handleAfterRead
    }
  }
}
</code></pre></div><div class="card"><h3>\u7981\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u53EA\u8BFB</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u5B57\u6BB5\u6821\u9A8C</h3><p>\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u6821\u9A8C\u5668\u6570\u7EC4\u53EF\u4EE5\u5BF9\u503C\u8FDB\u884C\u6821\u9A8C\uFF0C\u6821\u9A8C\u5668\u8FD4\u56DE<code>true</code>\u5219\u4E3A\u6821\u9A8C\u901A\u8FC7\u3002 \u4EE5\u5916\u7684\u503C\u5C06\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A\u3002 \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\u96C6\u5408\uFF0C\u53EF\u4EE5\u5FEB\u901F\u83B7\u53D6\u7B26\u5408\u72B6\u6001\u7684\u6587\u4EF6\u96C6\u5408\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v, u) =&gt; u.getError(v).length === 0 || &#39;\u5B58\u5728\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6&#39;]&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E0A\u4F20<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-uploader</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u6587\u4EF6\u5217\u8868</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>\u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u4E0E\u539F\u751F\u5C5E\u6027\u4E00\u81F4</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>\u83B7\u53D6\u6587\u4EF6\u65B9\u5F0F\uFF0C\u4E0E\u539F\u751F\u5C5E\u6027\u4E00\u81F4</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>\u662F\u5426\u591A\u9009\u6587\u4EF6</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>removable</code></td><td>\u662F\u5426\u53EF\u4EE5\u5220\u9664</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>maxlength</code></td><td>\u6700\u5927\u6587\u4EF6\u4E2A\u6570</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>\u6700\u5927\u6587\u4EF6\u5927\u5C0F</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>\u662F\u5426\u5141\u8BB8\u9884\u89C8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>\u662F\u5426\u5F00\u542F\u6C34\u6CE2\u7EB9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>validate-trigger</code></td><td>\u89E6\u53D1\u9A8C\u8BC1\u7684\u65F6\u673A\uFF0C \u53EF\u9009\u503C\u4E3A <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE<code>true</code>\u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFile</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>file</code></td><td>\u539F\u751F\u6587\u4EF6</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>\u6587\u4EF6\u540D</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>\u6587\u4EF6\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>\u5C01\u9762\u56FE</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>\u5C01\u9762\u56FE\u586B\u5145\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>\u6587\u4EF6\u4E0A\u4F20\u72B6\u6001\uFF0C\u53EF\u9009\u503C\u4E3A <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFileUtils</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>\u83B7\u53D6<code>state</code>\u7B49\u4E8E<code>loading</code>\u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>\u83B7\u53D6<code>state</code>\u7B49\u4E8E<code>success</code>\u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>\u83B7\u53D6<code>state</code>\u7B49\u4E8E<code>error</code>\u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>\u83B7\u53D6<code>state</code>\u7B49\u4E8E<code>loading</code>\u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>\u83B7\u53D6<code>state</code>\u7B49\u4E8E<code>success</code>\u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>\u83B7\u53D6<code>state</code>\u7B49\u4E8E<code>error</code>\u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>\u89E6\u53D1\u6821\u9A8C</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u6E05\u7A7A\u7ED1\u5B9A\u7684\u503C(\u8BBE\u7F6E\u4E3A<code>[]</code>)\u548C\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>before-read</code></td><td>\u6587\u4EF6\u8BFB\u53D6\u524D\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u8BFB\u53D6(\u652F\u6301promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>\u6587\u4EF6\u8BFB\u53D6\u540E\u89E6\u53D1</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>\u6587\u4EF6\u8D85\u8FC7\u9650\u5236\u5927\u5C0F\u65F6\u89E6\u53D1</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>\u6587\u4EF6\u5220\u9664\u65F6\u89E6\u53D1</td><td><code>file: VarFile</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u4E0A\u4F20\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table></div>`,21),o=[c];function n(r,p,h,i,j,g){return t(),e("div",l,o)}var v=s(a,[["render",n]]);export{v as default};
