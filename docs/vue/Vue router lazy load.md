---
title: 關於vue router 懶加載
---
# Vue router Lazy Load
## Lazy Load 的設定
- 沒有設置 lazy load 的情況下，進入到任何一個頁面都會把所有頁面的資料加載，即使之後沒有要進入該頁，也會提前獲取該頁面的資料。
- 在設置了 lazy load 的路由時，只有在切換到對應路由時，才會發出請求獲取相應的 JavaScript 文件，可以顯著減少初始加載時間，並且只有在需要時才會加載相應的代碼。
- 不常被訪問的頁面可以設定lazyload
## 原理
 Lazy load 的實現原理是使用[webpack’s code splitting](https://webpack.js.org/guides/code-splitting/)

### 如何設置 Lazy Load
::: code-group 
``` js vue [正常] 
// router.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue' // [!code warning]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})

export default router
```
``` js vue [lazy load]
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import ('@/views/home/index.vue') // [!code warning]
    },
  ]
})

export default router
```
:::
## 如果是webpack，可以用這種方式更改打包檔案的名字
```js
    component: ()=> import (/* home */'@/views/home/index.vue') 
```
> 查了一下vite目前應該是沒有支援

## 參考
- [How to lazy load routes with Vue Router](https://vueschool.io/lessons/how-to-lazy-load-routes-with-vue-router?friend=vuerouter)

- [Load Vue Components Asynchronously](https://vueschool.io/lessons/dynamically-load-components)
