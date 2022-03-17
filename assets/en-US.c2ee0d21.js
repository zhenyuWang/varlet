import{_ as c}from"./elevation.69c766bc.js";import{e as o,o as l,c as n,a as t,i as d,j as a,m as e,U as r}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},i=t("h1",null,"DatePicker",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Used to select a date or date range.")],-1),j={class:"card"},u=t("h3",null,"Install",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" { DatePicker } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

createApp().use(DatePicker)
`)])],-1),f={class:"card"},y=t("h3",null,"Basic Usage",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-date-picker"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(" />")]),e(`
`)])],-1),_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" date = ref("),t("span",{class:"hljs-string"},"'2021-04-08'"),e(`)

    `),t("span",{class:"hljs-keyword"},"return"),e(` {
      date
    }
  }
}
`)])],-1),w={class:"card"},v=t("h3",null,"Month Picker",-1),b=t("p",null,[e("Use "),t("code",null,"type"),e(" prop to change the type of the picker. The default value of "),t("code",null,"type"),e(" is "),t("code",null,"date"),e(".")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-date-picker"),e(),t("span",{class:"hljs-attr"},"type"),e("="),t("span",{class:"hljs-string"},'"month"'),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(),t("span",{class:"hljs-attr"},"shadow"),e(" />")]),e(`
`)])],-1),Y={class:"card"},D=t("h3",null,"Multiple",-1),S=t("p",null,[e("Use "),t("code",null,"multiple"),e(" prop to select multiple dates, at this time, "),t("code",null,"date"),e(" is an array.")],-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-date-picker"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(),t("span",{class:"hljs-attr"},"multiple"),e(" />")]),e(`
`)])],-1),z={class:"card"},I=t("h3",null,"Range",-1),P=t("p",null,[e("Use "),t("code",null,"range"),e(" prop to select date range, at this time, "),t("code",null,"date"),e(" is "),t("code",null,"[startDate, endDate]"),e(".")],-1),C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-date-picker"),e(),t("span",{class:"hljs-attr"},"type"),e("="),t("span",{class:"hljs-string"},'"date"'),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(),t("span",{class:"hljs-attr"},"range"),e(" />")]),e(`
`)])],-1),U={class:"card"},A=t("h3",null,"Date Limit",-1),V=t("p",null,[e("Use "),t("code",null,"min"),e(" and "),t("code",null,"max"),e(" prop to allow the maximum and minimum date, and use "),t("code",null,"allowed-dates"),e(" prop to limit the dates that can be selected.")],-1),N=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-date-picker"),e(`
  `),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(`
  `),t("span",{class:"hljs-attr"},"min"),e("="),t("span",{class:"hljs-string"},'"2020-10-15"'),e(`
  `),t("span",{class:"hljs-attr"},"max"),e("="),t("span",{class:"hljs-string"},'"2021-01-15"'),e(`
  `),t("span",{class:"hljs-attr"},":allowed-dates"),e("="),t("span",{class:"hljs-string"},'"allowedDates"'),e(`
/>`)]),e(`
`)])],-1),B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" date = ref("),t("span",{class:"hljs-string"},"'2020-11-11'"),e(`)

    `),t("span",{class:"hljs-keyword"},"const"),e(" allowedDates = "),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"val"),e(") =>")]),e(` {
      `),t("span",{class:"hljs-keyword"},"return"),e(),t("span",{class:"hljs-built_in"},"parseInt"),e("(val.split("),t("span",{class:"hljs-string"},"'-'"),e(")["),t("span",{class:"hljs-number"},"2"),e("], "),t("span",{class:"hljs-number"},"10"),e(") % "),t("span",{class:"hljs-number"},"2"),e(" === "),t("span",{class:"hljs-number"},"1"),e(`
    }

    `),t("span",{class:"hljs-keyword"},"return"),e(` {
      date,
      allowedDates,
    }
  }
}
`)])],-1),E={class:"card"},$=t("h3",null,"Custom",-1),O=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-date-picker"),e(`
  `),t("span",{class:"hljs-attr"},"shadow"),e(`
  `),t("span",{class:"hljs-attr"},"type"),e("="),t("span",{class:"hljs-string"},'"month"'),e(`
  `),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"date"'),e(`
  `),t("span",{class:"hljs-attr"},"min"),e("="),t("span",{class:"hljs-string"},'"2016-07"'),e(`
  `),t("span",{class:"hljs-attr"},"max"),e("="),t("span",{class:"hljs-string"},'"2022-01"'),e(`
  `),t("span",{class:"hljs-attr"},"header-color"),e("="),t("span",{class:"hljs-string"},'"purple"'),e(`
  `),t("span",{class:"hljs-attr"},"color"),e("="),t("span",{class:"hljs-string"},'"#7bb872"'),e(`
  `),t("span",{class:"hljs-attr"},"first-day-of-week"),e("="),t("span",{class:"hljs-string"},'"1"'),e(`
  `),t("span",{class:"hljs-attr"},":allowed-dates"),e("="),t("span",{class:"hljs-string"},'"allowedDates"'),e(`
  @`),t("span",{class:"hljs-attr"},"change"),e("="),t("span",{class:"hljs-string"},'"change"'),e(`
>`)]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"template"),e(" #"),t("span",{class:"hljs-attr"},"year"),e("="),t("span",{class:"hljs-string"},'"{ year }"'),e(">")]),e(`
    `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"span"),e(">")]),e("{{ year }}"),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"span"),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"template"),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"template"),e(" #"),t("span",{class:"hljs-attr"},"month"),e("="),t("span",{class:"hljs-string"},'"{ year, month }"'),e(">")]),e(`
    `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"span"),e(">")]),e("{{ year }}-{{ month }}"),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"span"),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"template"),e(">")]),e(`
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-date-picker"),e(">")]),e(`
`)])],-1),T=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" date = ref("),t("span",{class:"hljs-string"},"'2021-02'"),e(`)

    `),t("span",{class:"hljs-keyword"},"const"),e(" allowedDates = "),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"val"),e(") =>")]),e(` {
      `),t("span",{class:"hljs-keyword"},"return"),e(),t("span",{class:"hljs-built_in"},"parseInt"),e("(val.split("),t("span",{class:"hljs-string"},"'-'"),e(")["),t("span",{class:"hljs-number"},"1"),e("], "),t("span",{class:"hljs-number"},"10"),e(") % "),t("span",{class:"hljs-number"},"2"),e(" === "),t("span",{class:"hljs-number"},"1"),e(`
    }

    `),t("span",{class:"hljs-keyword"},"const"),e(" change = "),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"date"),e(") =>")]),e(` {
      `),t("span",{class:"hljs-built_in"},"console"),e(`.log(date)
    }

    `),t("span",{class:"hljs-keyword"},"return"),e(` {
      date,
      change,
      allowedDates
    }
  }
}
`)])],-1),R=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected date\uFF08ISO 8601 format, <code>YYYY-MM-DD</code> or <code>YYYY-MM</code>\uFF09</td><td><em>string[] | string</em></td><td><code>undefined</code></td></tr><tr><td><code>type</code></td><td>Picker type, optional values<code>date, month</code></td><td><em>string</em></td><td><code>date</code></td></tr><tr><td><code>allowed-dates</code></td><td>Restricts which dates can be selected</td><td><em>function</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Picker color</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>Color of picker header. If not specified it will use the color defined by color prop or the default picker color.</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>shadow</code></td><td>Whether to add a shadow</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>first-day-of-week</code></td><td>Sets the first day of the week, starting with 0 for Sunday.</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>Minimum allowed date/month (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum allowed date/month (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>show-current</code></td><td>Whether to display the current date</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>multiple</code></td><td>Allow the selection of multiple dates</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>range</code></td><td>Allow the selection of date range</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>touchable</code></td><td>Allow switch panel by touch</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted after date changed</td><td><code>value: string | string[]</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><p><code>weekIndex</code> means the nth day of the week, starting with <code>0</code> for Sunday.</p><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>year</code></td><td>Custom the year in the title</td><td><code>year: YYYY</code></td></tr><tr><td><code>month</code></td><td>Custom the month in the title</td><td><code>year: YYYY</code> <br> <code>month: MM</code></td></tr><tr><td><code>date</code></td><td>Custom the date in the title</td><td><code>year: YYYY</code> <br> <code>month: MM</code> <br> <code>date: DD</code> <br> <code>week: weekIndex</code></td></tr><tr><td><code>range</code></td><td>Custom the range in the title</td><td><code>choose: [startData, endDate]</code></td></tr><tr><td><code>multiple</code></td><td>Custom the multiple in the title</td><td><code>choose: [&#39;YYYY-MM-DD&#39; | &#39;YYYY-MM&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--date-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--date-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--date-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--date-picker-main-color</code></td><td><code>rgba(0, 0, 0, .87)</code></td></tr><tr><td><code>--date-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--date-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--date-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--date-picker-title-year-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-title-year-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-year-margin-bottom</code></td><td><code>8px</code></td></tr><tr><td><code>--date-picker-title-date-height</code></td><td><code>48px</code></td></tr><tr><td><code>--date-picker-title-date-font-size</code></td><td><code>34px</code></td></tr><tr><td><code>--date-picker-title-date-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-date-range-font-size</code></td><td><code>20px</code></td></tr><tr><td><code>--date-picker-body-background-color</code></td><td><code>rgba(0, 0, 0, 0)</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--month-picker-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--month-picker-item-width</code></td><td><code>33%</code></td></tr><tr><td><code>--month-picker-item-height</code></td><td><code>56px</code></td></tr><tr><td><code>--month-picker-item-button-max-width</code></td><td><code>140px</code></td></tr><tr><td><code>--year-picker-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--year-picker-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--year-picker-item-active-font-size</code></td><td><code>26px</code></td></tr><tr><td><code>--year-picker-item-active-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--year-picker-item-active-font-padding</code></td><td><code>10px 0</code></td></tr><tr><td><code>--year-picker-item-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--day-picker-content-item-width</code></td><td><code>14.28%</code></td></tr><tr><td><code>--day-picker-content-item-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-content-item-padding</code></td><td><code>2px 0</code></td></tr><tr><td><code>--day-picker-content-item-button-width</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-height</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-head-item-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--day-picker-head-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--day-picker-head-item-font-weight</code></td><td><code>600</code></td></tr></tbody></table></div>',5);function W(H,L,q,F,G,J){const s=o("var-site-code-example");return l(),n("div",p,[i,m,t("div",j,[u,d(s,null,{default:a(()=>[g]),_:1})]),t("div",f,[y,d(s,null,{default:a(()=>[k]),_:1}),d(s,null,{default:a(()=>[_]),_:1})]),t("div",w,[v,b,d(s,null,{default:a(()=>[x]),_:1})]),t("div",Y,[D,S,d(s,null,{default:a(()=>[M]),_:1})]),t("div",z,[I,P,d(s,null,{default:a(()=>[C]),_:1})]),t("div",U,[A,V,d(s,null,{default:a(()=>[N]),_:1}),d(s,null,{default:a(()=>[B]),_:1})]),t("div",E,[$,d(s,null,{default:a(()=>[O]),_:1}),d(s,null,{default:a(()=>[T]),_:1})]),R])}var X=c(h,[["render",W]]);export{X as default};
