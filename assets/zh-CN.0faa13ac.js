import{_ as l}from"./elevation.229458c1.js";import{e as c,o,c as n,a as s,i as d,j as a,m as t,U as r}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"\u6587\u4EF6\u4E0A\u4F20",-1),j=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,[t("\u63D0\u4F9B\u4E86\u6587\u4EF6\u8BFB\u53D6\u3001\u56FE\u7247/\u89C6\u9891\u9884\u89C8\u80FD\u529B\u3002 \u901A\u8FC7\u76D1\u542C "),s("code",null,"after-read"),t(" \u4E8B\u4EF6\u83B7\u53D6\u6587\u4EF6\u4E0A\u4F20\u670D\u52A1\u5668\u3002")])],-1),u={class:"card"},f=s("h3",null,"\u5F15\u5165",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Uploader } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Uploader)
`)])],-1),g={class:"card"},_=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t(" @"),s("span",{class:"hljs-attr"},"after-read"),t("="),s("span",{class:"hljs-string"},'"handleAfterRead"'),t("/>")]),t(`
`)])],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(` files = ref([])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleAfterRead = "),s("span",{class:"hljs-function"},[s("span",{class:"hljs-params"},"file"),t(" =>")]),t(),s("span",{class:"hljs-built_in"},"console"),t(`.log(file)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),y={class:"card"},w=s("h3",null,"\u6587\u4EF6\u9884\u89C8",-1),k=s("p",null,"\u901A\u8FC7\u5206\u6790\u6587\u4EF6\u7684 url \u540E\u7F00\u540D\u5224\u65AD\u6587\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301\u56FE\u7247\u548C\u89C6\u9891\u9884\u89C8\u3002",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t("/>")]),t(`
`)])],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(` files = ref([
      {
        `),s("span",{class:"hljs-attr"},"url"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),s("span",{class:"hljs-attr"},"cover"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`
      },
      {
        `),s("span",{class:"hljs-attr"},"url"),t(": "),s("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),t(`,
        `),s("span",{class:"hljs-attr"},"cover"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cover.jpg'"),t(`
      }
    ])

    `),s("span",{class:"hljs-keyword"},"return"),t(` { files }
  }
}
`)])],-1),F={class:"card"},z=s("h3",null,"\u4E0A\u4F20\u72B6\u6001",-1),R=s("p",null,[t("\u63D0\u4F9B\u4E86 "),s("code",null,"loading"),t("\u3001 "),s("code",null,"success"),t("\u3001 "),s("code",null,"error"),t(" \u4E09\u79CD\u4E0A\u4F20\u72B6\u6001\uFF0C\u5E76\u63D0\u4F9B\u4E86\u5DE5\u5177\u51FD\u6570\u5FEB\u901F\u83B7\u53D6\u5BF9\u5E94\u72B6\u6001\u7684\u6587\u4EF6\u3002")],-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t(" @"),s("span",{class:"hljs-attr"},"after-read"),t("="),s("span",{class:"hljs-string"},'"handleAfterRead"'),t("/>")]),t(`
`)])],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(` files = ref([
      {
        `),s("span",{class:"hljs-attr"},"url"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),s("span",{class:"hljs-attr"},"cover"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),s("span",{class:"hljs-attr"},"state"),t(": "),s("span",{class:"hljs-string"},"'loading'"),t(`
      },
      {
        `),s("span",{class:"hljs-attr"},"url"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),s("span",{class:"hljs-attr"},"cover"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),s("span",{class:"hljs-attr"},"state"),t(": "),s("span",{class:"hljs-string"},"'success'"),t(`
      },
      {
        `),s("span",{class:"hljs-attr"},"url"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),s("span",{class:"hljs-attr"},"cover"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),s("span",{class:"hljs-attr"},"state"),t(": "),s("span",{class:"hljs-string"},"'error'"),t(`
      }
    ])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleAfterRead = "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"file"),t(") =>")]),t(` {
      file.state = `),s("span",{class:"hljs-string"},"'loading'"),t(`

      `),s("span",{class:"hljs-built_in"},"setTimeout"),t("("),s("span",{class:"hljs-function"},"() =>"),t(` {
        file.state = `),s("span",{class:"hljs-string"},"'success'"),t(`
      }, `),s("span",{class:"hljs-number"},"1000"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),B={class:"card"},C=s("h3",null,"\u6587\u4EF6\u6570\u91CF\u9650\u5236",-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t(),s("span",{class:"hljs-attr"},":maxlength"),t("="),s("span",{class:"hljs-string"},'"1"'),t("/>")]),t(`
`)])],-1),U={class:"card"},E=s("h3",null,"\u6587\u4EF6\u5927\u5C0F\u9650\u5236",-1),$=s("p",null,[t("\u8D85\u8FC7\u9650\u5236\u4F1A\u88AB\u963B\u6B62\u8BFB\u53D6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u542C "),s("code",null,"oversize"),t(" \u4E8B\u4EF6\u83B7\u53D6\u6587\u4EF6\u3002")],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t(),s("span",{class:"hljs-attr"},":maxsize"),t("="),s("span",{class:"hljs-string"},'"1024"'),t(" @"),s("span",{class:"hljs-attr"},"oversize"),t("="),s("span",{class:"hljs-string"},'"handleOversize"'),t(" />")]),t(`
`)])],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(` files = ref([])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleOversize = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      Snackbar.warning(`),s("span",{class:"hljs-string"},"'\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236'"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleAfterRead
    }
  },
}
`)])],-1),L={class:"card"},M=s("h3",null,"\u4E0A\u4F20\u9884\u5904\u7406",-1),O=s("p",null,[t("\u901A\u8FC7\u6CE8\u518C "),s("code",null,"before-read"),t(" \u4E8B\u4EF6\u5BF9\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u8BFB\u53D6\u3002")],-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t(" @"),s("span",{class:"hljs-attr"},"before-read"),t("="),s("span",{class:"hljs-string"},'"handleBeforeRead"'),t("/>")]),t(`
`)])],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(` files = ref([])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleBeforeRead = "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"file"),t(") =>")]),t(` {
      `),s("span",{class:"hljs-keyword"},"if"),t(" (file.file.size <= "),s("span",{class:"hljs-number"},"1"),t(" * "),s("span",{class:"hljs-number"},"1024"),t(" * "),s("span",{class:"hljs-number"},"1024"),t(`) {
        Snackbar.success(`),s("span",{class:"hljs-string"},"'\u6587\u4EF6\u5C0F\u4E8E1M\uFF0C\u4E0A\u4F20\u6210\u529F'"),t(`)
        `),s("span",{class:"hljs-keyword"},"return"),t(),s("span",{class:"hljs-literal"},"true"),t(`
      } `),s("span",{class:"hljs-keyword"},"else"),t(` {
        Snackbar.warning(`),s("span",{class:"hljs-string"},"'\u6587\u4EF6\u5927\u4E8E1M\uFF0C\u4E0D\u80FD\u4E0A\u4F20'"),t(`)
        `),s("span",{class:"hljs-keyword"},"return"),t(),s("span",{class:"hljs-literal"},"false"),t(`
      }
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),q={class:"card"},G=s("h3",null,"\u7981\u7528",-1),H=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"disabled"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t("/>")]),t(`
`)])],-1),J={class:"card"},K=s("h3",null,"\u53EA\u8BFB",-1),Q=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"readonly"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t("/>")]),t(`
`)])],-1),W={class:"card"},X=s("h3",null,"\u5220\u9664\u524D\u5904\u7406",-1),Y=s("p",null,[t("\u5220\u9664\u6587\u4EF6\u4E4B\u524D\u4F1A\u89E6\u53D1 "),s("code",null,"before-remove"),t(" \u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u5220\u9664\u64CD\u4F5C\u3002")],-1),Z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t(" @"),s("span",{class:"hljs-attr"},"before-remove"),t("="),s("span",{class:"hljs-string"},'"handleBeforeRemove"'),t(" />")]),t(`
`)])],-1),ss=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(` files = ref([
      {
        `),s("span",{class:"hljs-attr"},"url"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),s("span",{class:"hljs-attr"},"cover"),t(": "),s("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`
      }
    ])

    `),s("span",{class:"hljs-keyword"},"const"),t(" handleBeforeRemove = "),s("span",{class:"hljs-keyword"},"async"),t(` () => {
      `),s("span",{class:"hljs-keyword"},"const"),t(" action = "),s("span",{class:"hljs-keyword"},"await"),t(` Dialog({
        `),s("span",{class:"hljs-attr"},"title"),t(": "),s("span",{class:"hljs-string"},"'\u662F\u5426\u5220\u9664?'"),t(`,
        `),s("span",{class:"hljs-attr"},"message"),t(": "),s("span",{class:"hljs-string"},"'\u5220\u9664\u540E\u65E0\u6CD5\u64A4\u56DE'"),t(`
      })

      `),s("span",{class:"hljs-keyword"},"return"),t(" action === "),s("span",{class:"hljs-string"},"'confirm'"),t(`
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleBeforeRemove
    }
  }
}
`)])],-1),ts={class:"card"},es=s("h3",null,"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",-1),ds=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(">")]),t("\u4E0A\u4F20"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-uploader"),t(">")]),t(`
`)])],-1),as={class:"card"},ls=s("h3",null,"\u5B57\u6BB5\u6821\u9A8C",-1),cs=s("p",null,[t("\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u6821\u9A8C\u5668\u6570\u7EC4\u53EF\u4EE5\u5BF9\u503C\u8FDB\u884C\u6821\u9A8C\uFF0C\u6821\u9A8C\u5668\u8FD4\u56DE "),s("code",null,"true"),t(" \u5219\u4E3A\u6821\u9A8C\u901A\u8FC7\u3002 \u4EE5\u5916\u7684\u503C\u5C06\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A\u3002 \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\u96C6\u5408\uFF0C\u53EF\u4EE5\u5FEB\u901F\u83B7\u53D6\u7B26\u5408\u72B6\u6001\u7684\u6587\u4EF6\u96C6\u5408\u3002")],-1),os=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(`
  `),s("span",{class:"hljs-attr"},":rules"),t("="),s("span",{class:"hljs-string"},`"[(v, u) => u.getError(v).length === 0 || '\u5B58\u5728\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6']"`),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t(`
/>`)]),t(`
`)])],-1),ns={class:"card"},rs=s("h3",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3",-1),hs=s("p",null,[t("\u901A\u8FC7 "),s("code",null,"hide-list"),t(" \u9690\u85CF\u7EC4\u4EF6\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u81EA\u5B9A\u4E49\u6587\u4EF6\u5217\u8868\u7684\u6E32\u67D3\u903B\u8F91")],-1),ps=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-space"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"img"),t(`
    `),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"custom-uploader-file"'),t(`
    `),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"f in files"'),t(`
    `),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"f.id"'),t(`
    `),s("span",{class:"hljs-attr"},":src"),t("="),s("span",{class:"hljs-string"},'"f.cover"'),t(`
  />`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-uploader"),t(),s("span",{class:"hljs-attr"},"hide-list"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"files"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"round"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},":size"),t("="),s("span",{class:"hljs-string"},'"28"'),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"upload"'),t(" />")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-uploader"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-space"),t(">")]),t(`
`)])],-1),is=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-class"},".custom-uploader-file"),t(` {
  `),s("span",{class:"hljs-attribute"},"width"),t(": "),s("span",{class:"hljs-number"},"40px"),t(`;
  `),s("span",{class:"hljs-attribute"},"height"),t(": "),s("span",{class:"hljs-number"},"40px"),t(`;
  `),s("span",{class:"hljs-attribute"},"border-radius"),t(": "),s("span",{class:"hljs-number"},"50%"),t(`;
  `),s("span",{class:"hljs-attribute"},"font-size"),t(": "),s("span",{class:"hljs-number"},"12px"),t(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),t(`: cover;
}
`)])],-1),js=r('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u6587\u4EF6\u5217\u8868</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>\u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u4E0E\u539F\u751F\u5C5E\u6027\u4E00\u81F4</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>\u83B7\u53D6\u6587\u4EF6\u65B9\u5F0F\uFF0C\u4E0E\u539F\u751F\u5C5E\u6027\u4E00\u81F4</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>\u662F\u5426\u591A\u9009\u6587\u4EF6</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>removable</code></td><td>\u662F\u5426\u53EF\u4EE5\u5220\u9664</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>\u6700\u5927\u6587\u4EF6\u4E2A\u6570</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>\u6700\u5927\u6587\u4EF6\u5927\u5C0F</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>\u662F\u5426\u5141\u8BB8\u9884\u89C8</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>\u662F\u5426\u5F00\u542F\u6C34\u6CE2\u7EB9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>\u662F\u5426\u9690\u85CF\u6587\u4EF6\u5217\u8868</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>\u89E6\u53D1\u9A8C\u8BC1\u7684\u65F6\u673A\uFF0C \u53EF\u9009\u503C\u4E3A <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE <code>true</code> \u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFile</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>file</code></td><td>\u539F\u751F\u6587\u4EF6</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>\u6587\u4EF6\u540D</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>\u6587\u4EF6\u5730\u5740</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>\u5C01\u9762\u56FE</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>\u5C01\u9762\u56FE\u586B\u5145\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>\u6587\u4EF6\u4E0A\u4F20\u72B6\u6001\uFF0C\u53EF\u9009\u503C\u4E3A <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFileUtils</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>loading</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>success</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>error</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>loading</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>success</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>\u83B7\u53D6 <code>state</code> \u7B49\u4E8E <code>error</code> \u7684\u6587\u4EF6\u96C6\u5408</td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>\u89E6\u53D1\u6821\u9A8C</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u6E05\u7A7A\u7ED1\u5B9A\u7684\u503C(\u8BBE\u7F6E\u4E3A <code>[]</code>)\u548C\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>before-read</code></td><td>\u6587\u4EF6\u8BFB\u53D6\u524D\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u8BFB\u53D6(\u652F\u6301 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>\u6587\u4EF6\u8BFB\u53D6\u540E\u89E6\u53D1</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>\u6587\u4EF6\u8D85\u8FC7\u9650\u5236\u5927\u5C0F\u65F6\u89E6\u53D1</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>\u6587\u4EF6\u5220\u9664\u524D\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u5220\u9664(\u652F\u6301 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>\u6587\u4EF6\u5220\u9664\u65F6\u89E6\u53D1</td><td><code>file: VarFile</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u4E0A\u4F20\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table></div>',8);function us(fs,ms,gs,_s,vs,bs){const e=c("var-site-code-example");return o(),n("div",p,[i,j,s("div",u,[f,d(e,null,{default:a(()=>[m]),_:1})]),s("div",g,[_,d(e,null,{default:a(()=>[v]),_:1}),d(e,null,{default:a(()=>[b]),_:1})]),s("div",y,[w,k,d(e,null,{default:a(()=>[x]),_:1}),d(e,null,{default:a(()=>[V]),_:1})]),s("div",F,[z,R,d(e,null,{default:a(()=>[A]),_:1}),d(e,null,{default:a(()=>[S]),_:1})]),s("div",B,[C,d(e,null,{default:a(()=>[N]),_:1})]),s("div",U,[E,$,d(e,null,{default:a(()=>[P]),_:1}),d(e,null,{default:a(()=>[T]),_:1})]),s("div",L,[M,O,d(e,null,{default:a(()=>[D]),_:1}),d(e,null,{default:a(()=>[I]),_:1})]),s("div",q,[G,d(e,null,{default:a(()=>[H]),_:1})]),s("div",J,[K,d(e,null,{default:a(()=>[Q]),_:1})]),s("div",W,[X,Y,d(e,null,{default:a(()=>[Z]),_:1}),d(e,null,{default:a(()=>[ss]),_:1})]),s("div",ts,[es,d(e,null,{default:a(()=>[ds]),_:1})]),s("div",as,[ls,cs,d(e,null,{default:a(()=>[os]),_:1})]),s("div",ns,[rs,hs,d(e,null,{default:a(()=>[ps]),_:1}),d(e,null,{default:a(()=>[is]),_:1})]),js])}var ks=l(h,[["render",us]]);export{ks as default};
