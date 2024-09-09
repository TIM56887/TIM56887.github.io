---
title: vue router 傳參
---

# 問題：要如何做到在搜尋頁面搜尋時，在網址加上參數，這樣回到上一頁時就可以保留之前的搜尋狀態?
### 當在搜尋頁面進行搜尋時，使用 router.push() 將搜尋參數加到 URL 上。<br>在 mounted 取得這些參數。這樣，即使切換到其他頁面，再回到搜尋頁面時，網址也會保留先前的搜尋參數。
::: code-group
```js vue [script]:line-numbers {1}
const route = useRoute()
const router = useRouter()

const search1 = ref('')
const search = ref('')

const go = () => {
    search.value = search1.value
    router.push({ name: 'domainname', query: { keyword: search.value,keyword1: search.value, } }) // [!code warning]
}
onMounted(() => {
    search1.value = route.query.keyword
    search.value = route.query.keyword
})
```
```js vue [template]
<v-layout row wrap>
    <v-text-field
        v-model="search1"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
    ></v-text-field>
    <v-btn color="success" @click="go">go</v-btn>
    <v-data-table 
        :items="data"
        hover
        :headers="headers"
        item-key="name"
        :search="search"
    >
        <template v-slot:item.link="{ value }">
            <v-btn :to="value" nuxt>
                go see
            </v-btn>
        </template>
    </v-data-table>    
</v-layout>
```
:::
---
::: danger 提醒
使用i18n相關套件要注意route name是否被改，如domainname被改成domainname___18n
:::


> 