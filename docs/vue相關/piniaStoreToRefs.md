---
title: pinia精簡的取值方式
---
# pinia精簡的取值方式
## 

### 這樣子寫每次都要寫countStore
```js vue []
<div>{{ countStore.sum }}</div>
const countStore = useCountStore()
```
### 使用storeToRefs就可以省略countStore
```js vue [script]
<div>{{ countStore.sum }}</div>
const countStore = useCountStore()
const {sum} = storeToRefs(countStore)
```

### 請不要使用toRefs，這會把整個store都資料都變成refs浪費大量效能
```js vue [script]
<div>{{ countStore.sum }}</div>
const countStore = useCountStore()
const {sum} = toRefs(countStore)
```

 
