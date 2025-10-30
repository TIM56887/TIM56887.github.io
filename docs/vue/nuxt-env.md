---
title: 關於nuxt env用法
---

# 關於 Nuxt Env 用法

## 常見錯誤與解決方案

### 錯誤一：環境變數不會動態更新

我想要把 `API_BASE` 存在 `.env` 檔案裡，這樣可以隨時更換，所以我這樣寫：

```js
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE, // [!code warning]
    },
  },
})
```

> ⚠️ **問題：** 這樣寫會造成只有在 build 時會讀取一次，之後不管怎麼改都不會跟著變動

**解決方式：** 把 `.env` 裡的變數改成 `NUXT_PUBLIC_API_BASE`

```js
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE, // [!code focus]
    },
  },
})
```

這樣 Nuxt 就會跟著環境變數更改而動態更新。

### 錯誤二：測試環境也載入了 GTM

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

## 總結

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

