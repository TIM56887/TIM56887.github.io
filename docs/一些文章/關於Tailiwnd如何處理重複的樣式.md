---
title: '關於Tailiwnd如何處理重複的樣式'
description: '關於Tailiwnd如何處理重複的樣式'
---

# 關於Tailiwnd如何處理重複的樣式
## 當頁面有結構相同時，有大量的樣式需要重複使用時，該如何處理？

### 1.使用 `@apply` 指令可以做到
> `@apply` 指令允許你在 CSS 中使用 Tailwind 的工具類。它可以幫助你將重複的樣式抽象成可重用的 CSS 類。
### 2.使用v-for 或是拆成組件
> 官方建議不要只是為了讓代碼看起來更乾淨而使用 `@apply`。
> 如果有大量的style需要重複用，應該考慮使用v-for 或是拆成組件，HTML結構和CSS樣式同樣重要
> 如果全部都使用 `@apply` ，那就失去Tailwind的好處了。

[官方文件](https://tailwindcss.com/docs/reusing-styles)
