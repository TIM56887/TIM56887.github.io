---
title: Pinia storeToRefs()
---
# Pinia精簡的取值方式，storeToRefs()
## 

### 這樣子寫的話，每次在模板上都要寫countStore，有沒有更精簡的寫法？
```js vue [] {5}
<template>
    <div>{{ countStore.sum }}</div>
</template>
<script setup>
    const countStore = useCountStore()
</script>
```
### 使用storeToRefs就可以省略countStore
```js vue [script] {5,6}
<template>
    <div>{{ sum }}</div>
</template>
<script setup>
    const countStore = useCountStore()
    const {sum} = storeToRefs(countStore)
</script>
```

### 請不要使用toRefs，雖然一樣可以運作，但這會把整個store的資料都變成refs，佔用大量資源
```js vue [script]
<template>
    <div>{{ sum }}</div>
</template>
<script setup>
    const countStore = useCountStore()
    const {sum} = toRefs(countStore) // [!code warning]
</script>
```

 
