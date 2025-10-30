---
title: 關於nuxt env用法
---


錯誤一
我想要把API_BASE存在.env 檔案裡，這樣可以隨時更換，所以我這樣寫
--- 
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
  },
})
---
但是之後我發現我更改.env了，apiBase卻沒有更著變動，這是因為這樣寫造成只有在build時會讀取一次，之後不管怎麼改都不會更著變動，解決的方式很簡單，把.env裡的變數改成 NUXT_PUBLIC_API_BASE就可以了，這樣nuxt就會更著更改

錯誤二
我想要在production環境時才加上gtm的script，所以我這樣寫，但我發現只是執行npm run build後 server的頁面都會有加上gtm script，npm run dev的情況下沒有（這很好），但是我在測試機也需要npm run build放上去啊，但是測試機不行有gtm啊，要怎麼辦？
--- 
export default defineNuxtConfig({
  $production: {
    app: {
      head: {
        script: [
          {
            // Google Tag Manager - 放在 head
            innerHTML: `(function(w,d,s,l,i){w[l]=wX');`,
            type: 'text/javascript',
            tagPosition: 'head', // 確保在 head 中
          },
        ],
      },
    },
  },
})
---
只要在測試機build的時候把指令改成 `npm build --envName development` 就可以了

結論

nuxt runtime confing對env的變數命名有限制，要照著他的方式命名才可以做到更換env，不然會變成只有在build time作用一次

$production裡的東西預設只有在NODE_ENV=productoin 時才會作用，run build 強制設定 NODE_ENV=production，如果要override需要使用特殊指令build
`npm build --envName development`
這樣build起來就不會吃到$production裡的設定


參考資料
- https://nuxt.com/docs/4.x/getting-started/configuration#environment-overrides
- https://github.com/nuxt/cli/issues/357
- https://github.com/nuxt/cli/pull/424

