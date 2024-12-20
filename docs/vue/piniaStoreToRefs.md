---
title: Pinia storeToRefs()
---
# Pinia storeToRefs()

### 一開始我使用pinia的時候常常會這樣寫
 `const countStore = useCountStore()` 
### 但這種寫法每次使用時，前面都要寫countStore.sum countStore.count countStore.add ，每次前面都要加上什麼點什麼，很麻煩。
### 有沒有更精簡的寫法，能直接寫sum就好？
### 有的！改成這樣就可以了 !
`const countStore = storeToRefs(useCountStore())`

- #### 使用storeToRefs就可以省略countStore
```js vue [script] {}
<template>
    <div>{{ sum }}</div> // [!code focus]
</template>
<script setup>
    // 這樣每次用的時候前面都要加上countStore 
    // const countStore = useCountStore() // [!code warning]    

    // 這樣寫前面就不用寫countStore，而且可以保有響應式 
    const { sum } = storeToRefs(useCountStore()) // [!code focus]

    // 不寫storeToRefs會失去響應式 
    // const { sum } = useCountStore() // [!code error]
</script>
```

- ####  注意點
> - 請不要使用toRefs，雖然一樣可以運作，但這會把整個store的資料都變成refs，佔用大量資源
> - 不寫storeToRefs會失去響應式
```js vue [script]
<template>
    <div>{{ sum }}</div>
</template>
<script setup>
    const countStore = useCountStore()
    const {sum} = toRefs(countStore) // [!code error]

    // 不寫storeToRefs會失去響應式 
    // const { sum } = useCountStore() // [!code error]
</script>
```

 
