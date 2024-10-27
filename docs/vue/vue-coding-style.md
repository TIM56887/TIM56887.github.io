---
title: Vue Coding Style
---

# Vue Coding Style

## 如何寫出易於維護的 Vue 應用程式？

### 1. 建立代碼規範
> 如果所有人都按照相同的規範開發，所有人的想法都一樣，別人寫出來的代碼就像是你自己寫的，這樣會有多簡單。
>透過建立代碼規範，讓開發者更容易理解程式碼的行為，花更少的時間去理解程式碼，使開發者更專注於業務邏輯。
- 統一使用 PascalCase 命名 component 組件
- 限制 component 組件名稱要有兩個單字，用以和原生 HTML 元素區分
- 不要同時在同一個標籤上使用 `v-if` 和 `v-for`
- 統一使用對象語法定義 props ，讓組件更易於閱讀
    ::: danger 不好的寫法
    ```js
    defineProps(['foo'])
    ```
    :::
    ::: tip 好的寫法
    ```vue
    defineProps<{
    foo: string
    }>(), {
    foo: 'default value'
    })
    ```
    :::
- 共用組件需要寫api文件，讓開發者更容易理解組件的功能。
- 使用縮寫 (`:` for `v-bind:`, `@` for `v-on:` and `#` for `v-slot`)
- 保持 props 單一性，不要只是為了讓代碼更少而將所有 props 組成一個物件，這樣會讓組件更難以閱讀。

    ::: danger 不好的寫法
    ```vue
    <range-slider :config="complexConfigObject"></range-slider>
    ```
    :::
    ::: tip 好的寫法
    ```vue
    <range-slider
      :values="[10, 20]"
      :min="0"
      :max="100"
      :step="5"
      @on-slide="updateInputs"
      @on-end="updateResults">
    </range-slider>
    ```
    :::

### 2. 路由命名
- 使用資源命名路由，讓開發者更容易理解路由的意義，花更少的時間去理解路由。

| 動作 | 路徑 |
| ------------- | :-----------: |
| 新增 | /student/create |
| 編輯 | /student/edit/:id |
| 單筆詳細 | /student/detail/:id |
| 刪除 | /student/delete/:id |



## 參考資料

[VueConf US 2023 - Patterns for Large Scale Vue.js Applications](https://www.youtube.com/watch?v=nhKCRYJQO_4)

[vuejs.org/style-guide](https://vuejs.org/style-guide/)

[vuejs-component-style-guide](https://github.com/pablohpsilva/vuejs-component-style-guide)

[大廠Code Review總結Vue開發規範經驗「值得學習」](https://kknews.cc/zh-tw/code/8k62xk4.html)

