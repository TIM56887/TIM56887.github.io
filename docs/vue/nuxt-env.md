---
title: 'Nuxt 3 環境變數設定教學：解決 .env 檔案不會動態更新的問題'
description: '完整解決 Nuxt 3 環境變數配置問題！包含 NUXT_PUBLIC 前綴用法、runtimeConfig 設定、production 環境配置等常見陷阱與解決方案。'
head:
  - - meta
    - name: keywords
      content: 'Nuxt 3, 環境變數, .env, runtimeConfig, NUXT_PUBLIC, Vue.js, 環境配置, production, development, GTM, Google Tag Manager'
  - - meta
    - name: author
      content: 'Tim Liu'
  - - meta
    - property: 'og:title'
      content: 'Nuxt 3 環境變數設定教學：解決 .env 檔案不會動態更新的問題'
  - - meta
    - property: 'og:description'
      content: '完整解決 Nuxt 3 環境變數配置問題！包含 NUXT_PUBLIC 前綴用法、runtimeConfig 設定、production 環境配置等常見陷阱與解決方案。'
  - - meta
    - property: 'og:type'
      content: 'article'
  - - meta
    - name: 'twitter:card'
      content: 'summary_large_image'
date: 2024-10-30
tags: ['Nuxt', 'Vue.js', '環境變數', 'Web開發', '教學']
categories: ['前端開發', 'Nuxt.js']
---

# Nuxt 3 環境變數設定完整教學

## Nuxt 環境變數常見問題與解決方案

### 問題一：.env 檔案環境變數無法動態更新

我想要把 `API_BASE` 存在 `.env` 檔案裡，這樣可以隨時更換，所以我這樣寫：
- nuxt.config.ts
```js
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE, // [!code warning]
    },
  },
})
```
- env
```env
API_BASE=/api
```
> ⚠️ **問題：** 這樣寫會造成只有在 build 時會讀取一次，之後不管怎麼改都不會跟著變動

**解決方式：** 把 `.env` 裡的變數改成 `NUXT_PUBLIC_API_BASE`
- nuxt.config.ts
```ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '', // [!code focus] ← 自動從env NUXT_PUBLIC_API_BASE 讀取
    },
  },
})
```
- env
```env
NUXT_PUBLIC_API_BASE=/api
```

這樣 Nuxt 就會跟著環境變數更改而動態更新。

因為Nuxt 有一個自動映射機制，會將環境變數自動對應到 runtimeConfig 中：

| 環境變數 | 對應到 runtimeConfig |
|---------|---------------------|
| `NUXT_PUBLIC_*` | `runtimeConfig.public.*` |
| `NUXT_PUBLIC_API_BASE` | `runtimeConfig.public.apiBase` |
| `NUXT_PUBLIC_GTM_ID` | `runtimeConfig.public.gtmId` |
:::

### 問題二：測試環境意外載入 Production 環境配置 (GTM)

我想要在 production 環境時才加上 GTM 的 script，所以我這樣寫：

```js
export default defineNuxtConfig({
  $production: {
    app: {
      head: {
        script: [
          {
            // Google Tag Manager - 放在 head
            innerHTML: `(function(w,d,s,l,i){w[l]=wX');`, // [!code warning]
            type: 'text/javascript',
            tagPosition: 'head', // 確保在 head 中
          },
        ],
      },
    },
  },
})
```

> ⚠️ **問題：** 執行 `npm run build` 後，測試機的頁面也會載入 GTM script，但測試機不應該有 GTM

**解決方式：** 在測試機 build 的時候使用特殊指令

```bash
npm run build --envName development # [!code focus]
```

這樣 build 起來就不會載入 `$production` 裡的設定。

## Nuxt 環境變數最佳實踐總結

### 關於 Runtime Config
> Nuxt runtime config 對 env 的變數命名有限制，要照著官方的方式命名才可以做到動態更換環境變數，不然會變成只有在 build time 作用一次。

### 關於環境配置
> `$production` 裡的東西預設只有在 `NODE_ENV=production` 時才會作用，`npm run build` 會強制設定 `NODE_ENV=production`，如果要 override 需要使用特殊指令：

```bash
npm run build --envName development # [!code focus]
```

## 參考資料

- [Nuxt Configuration - Environment Overrides](https://nuxt.com/docs/4.x/getting-started/configuration#environment-overrides)
- [GitHub Issue #357](https://github.com/nuxt/cli/issues/357)
- [GitHub PR #424](https://github.com/nuxt/cli/pull/424)

