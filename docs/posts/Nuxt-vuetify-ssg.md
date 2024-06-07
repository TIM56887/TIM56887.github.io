---
next:
  text: '如何使用nuxt、vuetify開發靜態頁面(ssg)'
  link: '/posts/vue-vuetify-without-nodejs'
---

# 使用Nuxt、Vuetify開發靜態頁面

## 建立Nuxt專案
- 在桌面開啟終端機輸入 (請將project-name替換成專案名稱)：
```js-vue
npx nuxi@latest init project-name
```
- 選擇npm
```js-vue
❯ Which package manager would you like to use?
● npm
○ pnpm
○ yarn
○ bun
```
- 建立完成後，進入專案資料夾並輸入：
```js-vue
cd 專案名稱
npm run dev         
```
- 開啟 http://localhost:3000/

## 安裝Vuetify
- 點擊Nuxt開發工具 (再次點擊可關閉)
![result!](/asset/nuxtDevTool.png)

- 點擊左側modules，點選install New Module，搜尋vuetify-nuxt-module並安裝
![result!](/asset/nuxtModules.png)

> 安裝完成後，在組件中可直接使用vuetify組件
## 撰寫Vuetify組件
- 打開app.vue並貼上：
```js-vue
<template>
  <v-app>
    <NuxtPage />
  </v-app>
</template>
```
- 在根目錄下創建pages資料夾、index.vue
![result!](/asset/nuxtFolder.png)

- 在index.vue中開始撰寫vuetify

```js-vue
<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      Main Content
    </v-main>
  </v-layout>
</template>
```
### 打包
```js-vue
npm run generate
```

> 完成後在dist資料夾中可以看到編譯完成的HTML及靜態資源
### 檢視
```js
npm run preview
```
## 幾個注意點
### 在nuxt中，pages資料夾中的一個.vue文件代表一個頁面
```
pages/
├── index.vue     -> /
├── about.vue     -> /about
```
### 關於動態路由

- 只需要一個array和一個.vue檔，就可以生成多個靜態頁面，並且每個頁面可以有不同的資料

nuxt.config.ts：
```js
// https://v3.nuxtjs.org/api/configuration/nuxt.config

import path from "path";
import route from "./data.json"


const getPostRoutes = async () => {
    let articles = route
    let slugs = articles.map((each) => {
        return '/articles/' + each.title
    })
    return slugs
}

export default defineNuxtConfig({
    modules: ["vuetify-nuxt-module"],
    alias: {
        'components': path.resolve('components'),
    },
    hooks: {
        async 'nitro:config'(nitroConfig) {
            if (nitroConfig.dev) {
                return
            }
            let slugs = await getPostRoutes();
            nitroConfig.prerender.routes.push(...slugs)
            return
        }
    }
})
```

> 相關討論https://github.com/nuxt/nuxt/issues/13949