---
title: '關於Vue組建拆分'
description: '關於vue組建拆分的設計模式'
---
# 關於vue組建拆分的設計模式
## Smart and Dumb Component

> 做了一陣子的前端開發，發現了一種對最有效的組建拆分模式就是這個，幾乎解決了所有維護上的問題
> 通常一個vue專案會有page和component資料夾，把page組建當成smart component，其他組建通通都是dumb component
> dumb component 是指這些組件沒有任何的api調用、路由轉換或是任何和業務邏輯有關的資料處理，他們只負責UI邏輯，其他通通拋出事件交由page組建處理
> 實現真正的UI和業務邏輯的關注點分離

### 參考資料
[Smart and Dumb Component](https://dev.to/chris_bertrand/coding-concepts-smart-vs-dumb-components-112g)