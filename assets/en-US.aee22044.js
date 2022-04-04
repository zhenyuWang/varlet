import{_ as d}from"./elevation.229458c1.js";import{e as o,o as n,c,a as s,i as a,j as l,m as e,U as r}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=s("h1",null,"Uploader",-1),u=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[e("It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for "),s("code",null,"after-read"),e(" events.")])],-1),j={class:"card"},f=s("h3",null,"Install",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'vue'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" { Uploader } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

createApp().use(Uploader)
`)])],-1),m={class:"card"},v=s("h3",null,"Basic Usage",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e(" @"),s("span",{class:"hljs-attr"},"after-read"),e("="),s("span",{class:"hljs-string"},'"handleAfterRead"'),e("/>")]),e(`
`)])],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { ref } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'vue'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),e("("),s("span",{class:"hljs-params"}),e(")")]),e(` {
    `),s("span",{class:"hljs-keyword"},"const"),e(` files = ref([])

    `),s("span",{class:"hljs-keyword"},"const"),e(" handleAfterRead = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"file"),e(" =>")]),e(),s("span",{class:"hljs-built_in"},"console"),e(`.log(file)

    `),s("span",{class:"hljs-keyword"},"return"),e(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),y={class:"card"},w=s("h3",null,"File Preview",-1),k=s("p",null,"By analyzing the file URL suffix name to determine the file type, support image and video preview.",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e("/>")]),e(`
`)])],-1),F=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { ref } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'vue'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),e("("),s("span",{class:"hljs-params"}),e(")")]),e(` {
    `),s("span",{class:"hljs-keyword"},"const"),e(` files = ref([
      {
        `),s("span",{class:"hljs-attr"},"url"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
        `),s("span",{class:"hljs-attr"},"cover"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`
      },
      {
        `),s("span",{class:"hljs-attr"},"url"),e(": "),s("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),e(`,
        `),s("span",{class:"hljs-attr"},"cover"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cover.jpg'"),e(`
      }
    ])

    `),s("span",{class:"hljs-keyword"},"return"),e(` { files }
  }
}
`)])],-1),V={class:"card"},z=s("h3",null,"Upload State",-1),R=s("p",null,[e("Three uploading states, "),s("code",null,"loading"),e(", "),s("code",null,"success"),e(" and "),s("code",null,"error"),e(", are provided, and tool functions are provided to quickly obtain files with corresponding states.")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e(" @"),s("span",{class:"hljs-attr"},"after-read"),e("="),s("span",{class:"hljs-string"},'"handleAfterRead"'),e("/>")]),e(`
`)])],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { ref } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'vue'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),e("("),s("span",{class:"hljs-params"}),e(")")]),e(` {
    `),s("span",{class:"hljs-keyword"},"const"),e(` files = ref([
      {
        `),s("span",{class:"hljs-attr"},"url"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
        `),s("span",{class:"hljs-attr"},"cover"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
        `),s("span",{class:"hljs-attr"},"state"),e(": "),s("span",{class:"hljs-string"},"'loading'"),e(`
      },
      {
        `),s("span",{class:"hljs-attr"},"url"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
        `),s("span",{class:"hljs-attr"},"cover"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
        `),s("span",{class:"hljs-attr"},"state"),e(": "),s("span",{class:"hljs-string"},"'success'"),e(`
      },
      {
        `),s("span",{class:"hljs-attr"},"url"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
        `),s("span",{class:"hljs-attr"},"cover"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
        `),s("span",{class:"hljs-attr"},"state"),e(": "),s("span",{class:"hljs-string"},"'error'"),e(`
      }
    ])

    `),s("span",{class:"hljs-keyword"},"const"),e(" handleAfterRead = "),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},"file"),e(") =>")]),e(` {
      file.state = `),s("span",{class:"hljs-string"},"'loading'"),e(`

      `),s("span",{class:"hljs-built_in"},"setTimeout"),e("("),s("span",{class:"hljs-function"},"() =>"),e(` {
        file.state = `),s("span",{class:"hljs-string"},"'success'"),e(`
      }, `),s("span",{class:"hljs-number"},"1000"),e(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),e(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),A={class:"card"},U=s("h3",null,"File Maxlength",-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e(),s("span",{class:"hljs-attr"},":maxlength"),e("="),s("span",{class:"hljs-string"},'"1"'),e("/>")]),e(`
`)])],-1),B={class:"card"},C=s("h3",null,"File Size Limit",-1),P=s("p",null,[e("If the limit is exceeded, the file will be blocked. You can get the file by listening for the "),s("code",null,"oversize"),e(" event.")],-1),G=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e(),s("span",{class:"hljs-attr"},":maxsize"),e("="),s("span",{class:"hljs-string"},'"1024"'),e(" @"),s("span",{class:"hljs-attr"},"oversize"),e("="),s("span",{class:"hljs-string"},'"handleOversize"'),e(" />")]),e(`
`)])],-1),M=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { ref } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'vue'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),e("("),s("span",{class:"hljs-params"}),e(")")]),e(` {
    `),s("span",{class:"hljs-keyword"},"const"),e(` files = ref([])

    `),s("span",{class:"hljs-keyword"},"const"),e(" handleOversize = "),s("span",{class:"hljs-function"},"() =>"),e(` {
      Snackbar.warning(`),s("span",{class:"hljs-string"},"'file size exceeds limit'"),e(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),e(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),W={class:"card"},E=s("h3",null,"Upload Preprocessing",-1),I=s("p",null,[e("Operate on a file by registering a "),s("code",null,"before-read"),e(" event that returns a false value to prevent the file from being read.")],-1),O=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e(" @"),s("span",{class:"hljs-attr"},"before-read"),e("="),s("span",{class:"hljs-string"},'"handleBeforeRead"'),e("/>")]),e(`
`)])],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { ref } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'vue'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),e("("),s("span",{class:"hljs-params"}),e(")")]),e(` {
    `),s("span",{class:"hljs-keyword"},"const"),e(` files = ref([])

    `),s("span",{class:"hljs-keyword"},"const"),e(" handleBeforeRead = "),s("span",{class:"hljs-function"},[e("("),s("span",{class:"hljs-params"},"file"),e(") =>")]),e(` {
      `),s("span",{class:"hljs-keyword"},"if"),e(" (file.file.size <= "),s("span",{class:"hljs-number"},"1"),e(" * "),s("span",{class:"hljs-number"},"1024"),e(" * "),s("span",{class:"hljs-number"},"1024"),e(`) {
        Snackbar.success(`),s("span",{class:"hljs-string"},"'the file is less than 1M, the upload is successful'"),e(`)
        `),s("span",{class:"hljs-keyword"},"return"),e(),s("span",{class:"hljs-literal"},"true"),e(`
      } `),s("span",{class:"hljs-keyword"},"else"),e(` {
        Snackbar.warning(`),s("span",{class:"hljs-string"},"'the file is larger than 1M and cannot be uploaded'"),e(`)
        `),s("span",{class:"hljs-keyword"},"return"),e(),s("span",{class:"hljs-literal"},"false"),e(`
      }
    }

    `),s("span",{class:"hljs-keyword"},"return"),e(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),L={class:"card"},$=s("h3",null,"Disabled",-1),q=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"disabled"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e("/>")]),e(`
`)])],-1),Y={class:"card"},H=s("h3",null,"Readonly",-1),J=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"readonly"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e("/>")]),e(`
`)])],-1),K={class:"card"},Q=s("h3",null,"Remove Preprocessing",-1),X=s("p",null,[e("Before deleting the file, the "),s("code",null,"before-remove"),e(" event is triggered, and a falsy value is returned to prevent the delete operation.")],-1),Z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e(" @"),s("span",{class:"hljs-attr"},"remove"),e("="),s("span",{class:"hljs-string"},'"handleBeforeRemove"'),e(" />")]),e(`
`)])],-1),ss=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { ref } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'vue'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),e("("),s("span",{class:"hljs-params"}),e(")")]),e(` {
    `),s("span",{class:"hljs-keyword"},"const"),e(` files = ref([
      {
        `),s("span",{class:"hljs-attr"},"url"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
        `),s("span",{class:"hljs-attr"},"cover"),e(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),e(`,
      }
    ])

    `),s("span",{class:"hljs-keyword"},"const"),e(" handleBeforeRemove = "),s("span",{class:"hljs-keyword"},"async"),e(` () => {
      `),s("span",{class:"hljs-keyword"},"const"),e(" action = "),s("span",{class:"hljs-keyword"},"await"),e(` Dialog({
        `),s("span",{class:"hljs-attr"},"title"),e(": "),s("span",{class:"hljs-string"},"'Delete or not?'"),e(`,
        `),s("span",{class:"hljs-attr"},"message"),e(": "),s("span",{class:"hljs-string"},"'Cannot be withdrawn after deletion'"),e(`
      })

      `),s("span",{class:"hljs-keyword"},"return"),e(" action === "),s("span",{class:"hljs-string"},"'confirm'"),e(`
    }

    `),s("span",{class:"hljs-keyword"},"return"),e(` {
      files,
      handleBeforeRemove
    }
  }
}
`)])],-1),es={class:"card"},ts=s("h3",null,"Customize upload styles",-1),as=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e(">")]),e(`
  `),s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-button"),e(),s("span",{class:"hljs-attr"},"type"),e("="),s("span",{class:"hljs-string"},'"primary"'),e(">")]),e("Upload"),s("span",{class:"hljs-tag"},[e("</"),s("span",{class:"hljs-name"},"var-button"),e(">")]),e(`
`),s("span",{class:"hljs-tag"},[e("</"),s("span",{class:"hljs-name"},"var-uploader"),e(">")]),e(`
`)])],-1),ls={class:"card"},ds=s("h3",null,"Validate",-1),os=s("p",null,[e("The values are validated by passing in an array of validator, If the validator returns "),s("code",null,"true"),e(", the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.")],-1),ns=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(`
  `),s("span",{class:"hljs-attr"},":rules"),e("="),s("span",{class:"hljs-string"},`"[
    (v, u) => u.getError(v).length === 0 || 'There is a file that failed to upload'
  ]"`),e(`
  `),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e(`
/>`)]),e(`
`)])],-1),cs={class:"card"},rs=s("h3",null,"Custom render file list",-1),is=s("p",null,[e("You can use the "),s("code",null,"hide-list"),e(" to hide component files list, then you can render this list by custom.")],-1),hs=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-space"),e(">")]),e(`
  `),s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"img"),e(`
    `),s("span",{class:"hljs-attr"},"class"),e("="),s("span",{class:"hljs-string"},'"custom-uploader-file"'),e(`
    `),s("span",{class:"hljs-attr"},"v-for"),e("="),s("span",{class:"hljs-string"},'"f in files"'),e(`
    `),s("span",{class:"hljs-attr"},":key"),e("="),s("span",{class:"hljs-string"},'"f.id"'),e(`
    `),s("span",{class:"hljs-attr"},":src"),e("="),s("span",{class:"hljs-string"},'"f.cover"'),e(`
  />`)]),e(`
  `),s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-uploader"),e(),s("span",{class:"hljs-attr"},"hide-list"),e(),s("span",{class:"hljs-attr"},"v-model"),e("="),s("span",{class:"hljs-string"},'"files"'),e(">")]),e(`
    `),s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-button"),e(),s("span",{class:"hljs-attr"},"round"),e(),s("span",{class:"hljs-attr"},"type"),e("="),s("span",{class:"hljs-string"},'"primary"'),e(">")]),e(`
      `),s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-icon"),e(),s("span",{class:"hljs-attr"},":size"),e("="),s("span",{class:"hljs-string"},'"28"'),e(),s("span",{class:"hljs-attr"},"name"),e("="),s("span",{class:"hljs-string"},'"upload"'),e(" />")]),e(`
    `),s("span",{class:"hljs-tag"},[e("</"),s("span",{class:"hljs-name"},"var-button"),e(">")]),e(`
  `),s("span",{class:"hljs-tag"},[e("</"),s("span",{class:"hljs-name"},"var-uploader"),e(">")]),e(`
`),s("span",{class:"hljs-tag"},[e("</"),s("span",{class:"hljs-name"},"var-space"),e(">")]),e(`
`)])],-1),ps=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-class"},".custom-uploader-file"),e(` {
  `),s("span",{class:"hljs-attribute"},"width"),e(": "),s("span",{class:"hljs-number"},"40px"),e(`;
  `),s("span",{class:"hljs-attribute"},"height"),e(": "),s("span",{class:"hljs-number"},"40px"),e(`;
  `),s("span",{class:"hljs-attribute"},"border-radius"),e(": "),s("span",{class:"hljs-number"},"50%"),e(`;
  `),s("span",{class:"hljs-attribute"},"font-size"),e(": "),s("span",{class:"hljs-number"},"12px"),e(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),e(`: cover;
}
`)])],-1),us=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>File list</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>Accepted file type, consistent with the native attribute</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>Get the file, the same as the native property</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple files</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>removable</code></td><td>Whether the removable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>Maximum number of files</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>Maximum file size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>Whether to allow preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide the file list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation\uFF0C The optional value is <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFile</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>file</code></td><td>Native file</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>File name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>File url</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>File cover image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Cover image fill mode, Optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload state, Optional value is <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFileUtils</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-read</code></td><td>Trigger returns a false value before a file is read to prevent the file from being read(support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>Triggered after the file is read</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>Triggered when the file size limit is exceeded</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>Triggered before file deletion, return false value to prevent file deletion (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>Triggered when deleting a file. There is a true value to prevent deleting a file (support promise)</td><td><code>file: VarFile</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Upload action content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table></div>',8);function js(fs,gs,ms,vs,_s,bs){const t=o("var-site-code-example");return n(),c("div",h,[p,u,s("div",j,[f,a(t,null,{default:l(()=>[g]),_:1})]),s("div",m,[v,a(t,null,{default:l(()=>[_]),_:1}),a(t,null,{default:l(()=>[b]),_:1})]),s("div",y,[w,k,a(t,null,{default:l(()=>[x]),_:1}),a(t,null,{default:l(()=>[F]),_:1})]),s("div",V,[z,R,a(t,null,{default:l(()=>[T]),_:1}),a(t,null,{default:l(()=>[S]),_:1})]),s("div",A,[U,a(t,null,{default:l(()=>[D]),_:1})]),s("div",B,[C,P,a(t,null,{default:l(()=>[G]),_:1}),a(t,null,{default:l(()=>[M]),_:1})]),s("div",W,[E,I,a(t,null,{default:l(()=>[O]),_:1}),a(t,null,{default:l(()=>[N]),_:1})]),s("div",L,[$,a(t,null,{default:l(()=>[q]),_:1})]),s("div",Y,[H,a(t,null,{default:l(()=>[J]),_:1})]),s("div",K,[Q,X,a(t,null,{default:l(()=>[Z]),_:1}),a(t,null,{default:l(()=>[ss]),_:1})]),s("div",es,[ts,a(t,null,{default:l(()=>[as]),_:1})]),s("div",ls,[ds,os,a(t,null,{default:l(()=>[ns]),_:1})]),s("div",cs,[rs,is,a(t,null,{default:l(()=>[hs]),_:1}),a(t,null,{default:l(()=>[ps]),_:1})]),us])}var ks=d(i,[["render",js]]);export{ks as default};
