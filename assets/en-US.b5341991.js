import{_ as a}from"./elevation.f7de2a7a.js";import{e as o,o as c,c as r,a as e,i as d,j as l,m as s,U as n}from"./vendor.efca09d3.js";const i={components:{}},h={class:"varlet-site-doc"},p=e("h1",null,"Uploader",-1),u=e("div",{class:"card"},[e("h3",null,"Intro"),e("p",null,[s("It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for "),e("code",null,"after-read"),s(" events.")])],-1),f={class:"card"},j=e("h3",null,"Install",-1),g=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(" { Uploader } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Uploader)
`)])],-1),v={class:"card"},m=e("h3",null,"Basic Usage",-1),_=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s(" @"),e("span",{class:"hljs-attr"},"after-read"),s("="),e("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`)])],-1),y=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-keyword"},"import"),s(" { ref } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),s("("),e("span",{class:"hljs-params"}),s(")")]),s(` {
    `),e("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

    `),e("span",{class:"hljs-keyword"},"const"),s(" handleAfterRead = "),e("span",{class:"hljs-function"},[e("span",{class:"hljs-params"},"file"),s(" =>")]),s(),e("span",{class:"hljs-built_in"},"console"),s(`.log(file)

    `),e("span",{class:"hljs-keyword"},"return"),s(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),b={class:"card"},k=e("h3",null,"File Preview",-1),w=e("p",null,"By analyzing the file URL suffix name to determine the file type, support image and video preview.",-1),x=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`)])],-1),F=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-keyword"},"import"),s(" { ref } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),s("("),e("span",{class:"hljs-params"}),s(")")]),s(` {
    `),e("span",{class:"hljs-keyword"},"const"),s(` files = ref([
      {
        `),e("span",{class:"hljs-attr"},"url"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
        `),e("span",{class:"hljs-attr"},"cover"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`
      },
      {
        `),e("span",{class:"hljs-attr"},"url"),s(": "),e("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),s(`,
        `),e("span",{class:"hljs-attr"},"cover"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cover.jpg'"),s(`
      }
    ])

    `),e("span",{class:"hljs-keyword"},"return"),s(` { files }
  }
}
`)])],-1),V={class:"card"},R=e("h3",null,"Upload State",-1),T=e("p",null,[s("Three uploading states, "),e("code",null,"loading"),s(", "),e("code",null,"success"),s(" and "),e("code",null,"error"),s(", are provided, and tool functions are provided to quickly obtain files with corresponding states.")],-1),z=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s(" @"),e("span",{class:"hljs-attr"},"after-read"),s("="),e("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`)])],-1),A=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-keyword"},"import"),s(" { ref } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),s("("),e("span",{class:"hljs-params"}),s(")")]),s(` {
    `),e("span",{class:"hljs-keyword"},"const"),s(` files = ref([
      {
        `),e("span",{class:"hljs-attr"},"url"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
        `),e("span",{class:"hljs-attr"},"cover"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
        `),e("span",{class:"hljs-attr"},"state"),s(": "),e("span",{class:"hljs-string"},"'loading'"),s(`
      },
      {
        `),e("span",{class:"hljs-attr"},"url"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
        `),e("span",{class:"hljs-attr"},"cover"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
        `),e("span",{class:"hljs-attr"},"state"),s(": "),e("span",{class:"hljs-string"},"'success'"),s(`
      },
      {
        `),e("span",{class:"hljs-attr"},"url"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
        `),e("span",{class:"hljs-attr"},"cover"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
        `),e("span",{class:"hljs-attr"},"state"),s(": "),e("span",{class:"hljs-string"},"'error'"),s(`
      }
    ])

    `),e("span",{class:"hljs-keyword"},"const"),s(" handleAfterRead = "),e("span",{class:"hljs-function"},[s("("),e("span",{class:"hljs-params"},"file"),s(") =>")]),s(` {
      file.state = `),e("span",{class:"hljs-string"},"'loading'"),s(`

      `),e("span",{class:"hljs-built_in"},"setTimeout"),s("("),e("span",{class:"hljs-function"},"() =>"),s(` {
        file.state = `),e("span",{class:"hljs-string"},"'success'"),s(`
      }, `),e("span",{class:"hljs-number"},"1000"),s(`)
    }

    `),e("span",{class:"hljs-keyword"},"return"),s(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),S={class:"card"},U=e("h3",null,"File Maxlength",-1),D=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s(),e("span",{class:"hljs-attr"},":maxlength"),s("="),e("span",{class:"hljs-string"},'"1"'),s("/>")]),s(`
`)])],-1),B={class:"card"},C=e("h3",null,"File Size Limit",-1),P=e("p",null,[s("If the limit is exceeded, the file will be blocked. You can get the file by listening for the "),e("code",null,"oversize"),s(" event.")],-1),G=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s(),e("span",{class:"hljs-attr"},":maxsize"),s("="),e("span",{class:"hljs-string"},'"1024"'),s(" @"),e("span",{class:"hljs-attr"},"oversize"),s("="),e("span",{class:"hljs-string"},'"handleOversize"'),s(" />")]),s(`
`)])],-1),E=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-keyword"},"import"),s(" { ref } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),s("("),e("span",{class:"hljs-params"}),s(")")]),s(` {
    `),e("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

    `),e("span",{class:"hljs-keyword"},"const"),s(" handleOversize = "),e("span",{class:"hljs-function"},[e("span",{class:"hljs-params"},"file"),s(" =>")]),s(),e("span",{class:"hljs-built_in"},"console"),s(`.log(file)

    `),e("span",{class:"hljs-keyword"},"return"),s(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),I={class:"card"},M=e("h3",null,"Upload Preprocessing",-1),O=e("p",null,[s("Operate on a file by registering a "),e("code",null,"before-read"),s(" event that returns a false value to prevent the file from being read.")],-1),W=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s(" @"),e("span",{class:"hljs-attr"},"before-read"),s("="),e("span",{class:"hljs-string"},'"handleBeforeRead"'),s("/>")]),s(`
`)])],-1),N=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-keyword"},"import"),s(" { ref } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),s("("),e("span",{class:"hljs-params"}),s(")")]),s(` {
    `),e("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

    `),e("span",{class:"hljs-keyword"},"const"),s(" handleBeforeRead = "),e("span",{class:"hljs-function"},[e("span",{class:"hljs-params"},"file"),s(" =>")]),s(" file.file.size <= "),e("span",{class:"hljs-number"},"1024"),s(" * "),e("span",{class:"hljs-number"},"10"),s(`

    `),e("span",{class:"hljs-keyword"},"return"),s(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),L={class:"card"},$=e("h3",null,"Disabled",-1),q=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"disabled"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`)])],-1),H={class:"card"},Y=e("h3",null,"Readonly",-1),J=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"readonly"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`)])],-1),K={class:"card"},Q=e("h3",null,"Remove Preprocessing",-1),X=e("p",null,[s("Before deleting the file, the "),e("code",null,"before-remove"),s(" event is triggered, and a falsy value is returned to prevent the delete operation.")],-1),Z=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s(" @"),e("span",{class:"hljs-attr"},"remove"),s("="),e("span",{class:"hljs-string"},'"handleBeforeRemove"'),s(" />")]),s(`
`)])],-1),ee=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-keyword"},"import"),s(" { ref } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),s("("),e("span",{class:"hljs-params"}),s(")")]),s(` {
    `),e("span",{class:"hljs-keyword"},"const"),s(` files = ref([
      {
        `),e("span",{class:"hljs-attr"},"url"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
        `),e("span",{class:"hljs-attr"},"cover"),s(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
      }
    ])

    `),e("span",{class:"hljs-keyword"},"const"),s(" handleBeforeRemove = "),e("span",{class:"hljs-keyword"},"async"),s(` () => {
      `),e("span",{class:"hljs-keyword"},"const"),s(" action = "),e("span",{class:"hljs-keyword"},"await"),s(` Dialog({
        `),e("span",{class:"hljs-attr"},"title"),s(": "),e("span",{class:"hljs-string"},"'Delete or not?'"),s(`,
        `),e("span",{class:"hljs-attr"},"message"),s(": "),e("span",{class:"hljs-string"},"'Cannot be withdrawn after deletion'"),s(`
      })

      `),e("span",{class:"hljs-keyword"},"return"),s(" action === "),e("span",{class:"hljs-string"},"'confirm'"),s(`
    }

    `),e("span",{class:"hljs-keyword"},"return"),s(` {
      files,
      handleBeforeRemove
    }
  }
}
`)])],-1),se={class:"card"},te=e("h3",null,"Customize upload styles",-1),de=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-button"),s(),e("span",{class:"hljs-attr"},"type"),s("="),e("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Upload"),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
`)])],-1),le={class:"card"},ae=e("h3",null,"Validate",-1),oe=e("p",null,[s("The values are validated by passing in an array of validator, If the validator returns "),e("code",null,"true"),s(", the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.")],-1),ce=e("pre",{class:"hljs"},[e("code",null,[e("link",{rel:"stylesheet",href:"./highlight.css"}),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"var-uploader"),s(`
  `),e("span",{class:"hljs-attr"},":rules"),s("="),e("span",{class:"hljs-string"},`"[
    (v, u) => u.getError(v).length === 0 || 'There is a file that failed to upload'
  ]"`),s(`
  `),e("span",{class:"hljs-attr"},"v-model"),s("="),e("span",{class:"hljs-string"},'"files"'),s(`
/>`)]),s(`
`)])],-1),re=n('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>File list</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>Accepted file type, consistent with the native attribute</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>Get the file, the same as the native property</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple files</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>removable</code></td><td>Whether the removable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>Maximum number of files</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>Maximum file size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>Whether to allow preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation\uFF0C The optional value is <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFile</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>file</code></td><td>Native file</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>File name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>File url</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>File cover image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Cover image fill mode, Optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload state, Optional value is <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFileUtils</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-read</code></td><td>Trigger returns a false value before a file is read to prevent the file from being read(support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>Triggered after the file is read</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>Triggered when the file size limit is exceeded</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>Triggered before file deletion, return false value to prevent file deletion (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>Triggered when deleting a file. There is a true value to prevent deleting a file (support promise)</td><td><code>file: VarFile</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Upload action content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table></div>',8);function ne(ie,he,pe,ue,fe,je){const t=o("var-site-code-example");return c(),r("div",h,[p,u,e("div",f,[j,d(t,null,{default:l(()=>[g]),_:1})]),e("div",v,[m,d(t,null,{default:l(()=>[_]),_:1}),d(t,null,{default:l(()=>[y]),_:1})]),e("div",b,[k,w,d(t,null,{default:l(()=>[x]),_:1}),d(t,null,{default:l(()=>[F]),_:1})]),e("div",V,[R,T,d(t,null,{default:l(()=>[z]),_:1}),d(t,null,{default:l(()=>[A]),_:1})]),e("div",S,[U,d(t,null,{default:l(()=>[D]),_:1})]),e("div",B,[C,P,d(t,null,{default:l(()=>[G]),_:1}),d(t,null,{default:l(()=>[E]),_:1})]),e("div",I,[M,O,d(t,null,{default:l(()=>[W]),_:1}),d(t,null,{default:l(()=>[N]),_:1})]),e("div",L,[$,d(t,null,{default:l(()=>[q]),_:1})]),e("div",H,[Y,d(t,null,{default:l(()=>[J]),_:1})]),e("div",K,[Q,X,d(t,null,{default:l(()=>[Z]),_:1}),d(t,null,{default:l(()=>[ee]),_:1})]),e("div",se,[te,d(t,null,{default:l(()=>[de]),_:1})]),e("div",le,[ae,oe,d(t,null,{default:l(()=>[ce]),_:1})]),re])}var me=a(i,[["render",ne]]);export{me as default};
