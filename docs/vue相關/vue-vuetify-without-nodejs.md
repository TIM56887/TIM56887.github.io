---
title: '如何在HTML中直接使用Vue及Vuetify'
next:
  text: '如何使用nuxt、vuetify開發靜態頁面(ssg)'
  link: '/posts/Nuxt-vuetify-ssg'
---

# 如何在HTML中直接使用Vue及Vuetify

## 在HTML中，使用CDN引入Vue、Vuetify、Vuetify icon包
```js-vue
<link href="https://cdn.jsdelivr.net/npm/vuetify@3.6.8/dist/vuetify-labs.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" rel="stylesheet">
<script src="https://unpkg.com/vue@3"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@3.6.8/dist/vuetify.min.js"></script>
```

## 創建vue實例並引用vuetify
```js-vue
const { createApp, ref, computed } = Vue
const { createVuetify, useDisplay } = Vuetify
const vuetify = createVuetify()
createApp(App).use(vuetify).mount('#app');
```
## 開始撰寫vuetify組件
```js-vue
<div id="app">
    <v-app>
        <v-container>
            <v-row>
                <v-col>
                    <v-btn color="primary" prepend-icon="mdi-menu-down">{{message}}</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</div>
```

## 結果
![result!](/asset/vuetifyResult.png)
## 範例代碼
```js-vue
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/vuetify@3.6.8/dist/vuetify-labs.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <v-app>
                <v-container>
                    <v-row>
                    <v-col>
                        <v-btn color="primary" prepend-icon="mdi-menu-down">{{message}}</v-btn>
                    </v-col>
                    </v-row>
                </v-container>
            </v-app>
        </div>
        <!-- Vue.js -->
        <script src="https://unpkg.com/vue@3"></script>
        <!-- Vuetify JS -->
        <script src="https://cdn.jsdelivr.net/npm/vuetify@3.6.8/dist/vuetify.min.js"></script>
        <script>
            const { createApp, ref, computed } = Vue
            const { createVuetify, useDisplay } = Vuetify
            const vuetify = createVuetify()

            const App = {
                setup() {
                    const message = ref('Hello, Vuetify with Vue 3!');
                    return { message };
                },
            };
            createApp(App).use(vuetify).mount('#app');
        </script>
    </body>
</html>
```
