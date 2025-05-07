---
title: 沒有構建工具（如 Vite 或 Webpack）的情況下，vue的模板要寫在哪裡?
---
# 沒有構建工具（如 Vite 或 Webpack）的情況下，vue的模板要寫在哪裡?
## 可以將模板寫在 `<script> 標籤中，並設定 type="text/template"，這樣瀏覽器不會解析也不會渲染這段內容`

```js vue [template]
<script type="text/template" id="template">
    <div>
        {{message}}
    </div>
</script>
<div id="app"></div>
<script>
    const { createApp, ref } = Vue
    createApp({
        template:'#template',
        setup() {
        const message = ref('Hello vue!')
        return {
            message
        }
        }
    }).mount('#app')
</script>
```
