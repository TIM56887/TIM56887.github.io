---
title: 'Vuetify Component'
---
# Some vuetify component I use
## Navigation drawer

![1683180258710](/asset/vuetify_component/navigation.png)
::: code-group
``` js vue [template]
<template>
    <v-navigation-drawer
        permanent
        v-model:rail="drawerClose"
    >
        <v-btn @click="modifyDrawer">>></v-btn>
        <v-list>
            <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
            <v-list-group value="Users">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-account-circle"
                        title="Users"
                    ></v-list-item>
                </template>       
                <v-divider></v-divider>
                <v-list-item title="Setting" to="/ren"></v-list-item>
                <v-list-item title="Setting"></v-list-item>
                <v-divider></v-divider>    
            </v-list-group>
            <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
        </v-list>
        
    </v-navigation-drawer>
</template>
```
``` js vue [script]
<script setup lang="ts">
    const drawerClose = ref(true)
    const modifyDrawer = () => {
        drawerClose.value = !drawerClose.value
    }
    let open =  reactive(['Users'])
    const admins =  reactive([
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ])
    const cruds = reactive([
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ])
</script>
```
:::