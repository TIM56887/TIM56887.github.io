---
title: '我常用的Vuetify Component'
---
# 我常用的Vuetify Component

## 遞迴側邊欄
::: code-group
```js vue [template]
<template>
    <v-navigation-drawer color="#446296" width="300">
        <v-list density="comfortable" nav>
            <template v-for="(item, index) in menuList" :key="item.path">
                <!--沒有子路由-->
                <template v-if="!item.children">
                    <v-list-item :to="item.path" :prepend-icon="item.icon" :title="item.title">
                        <!-- 如果有badge -->
                        <template v-slot:append v-if="item.badge">
                            <v-badge color="white" :content="item.badge" inline />
                        </template>
                    </v-list-item>
                </template>
                <!-- 有子路 -->
                <v-list-group v-if="item.children && item.children.length > 0">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.title" />
                    </template>
                    <Menu :menuList="item.children"></Menu>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
```
```js vue [script]
<script setup lang="ts">
    defineProps(['menuList']);
</script>

<script lang="ts">
    export default {
        name: 'Menu'
    }
</script>    
    // 資料格式
    /* const navbars = ref([
    {
        title: "首頁",
        icon: "mdi-home",
        path: "/Backend"
    },
    {
        title: "網路媒體不當",
        icon: "mdi-folder-cog-outline",
        path: "/Backend/Agenda",
        children:[
            {
                title: "申訴案件列表",
                icon: "mdi-folder-cog-outline",
                path: "/Backend/Agenda",
                children:[
                    {
                        title: "所有案件",
                        path: "/Backend/Agenda",
                        badge: 6
                    },
                    {
                        title: "待收發",
                        path: "/Backend/Agenda",
                        badge: 6
                    },
                    {
                        title: "辦理中",
                        path: "/Backend/Agenda",
                        badge: 6
                    },
                ]
            },
            {
                title: "統計報表",
                icon: "mdi-folder-cog-outline",
                path: "/Backend/Agenda",
            },
        ]
    }, */

```
:::