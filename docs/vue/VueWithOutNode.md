---
title: 沒有node環境時，vue的模板要寫在哪裡?
---
# 在沒有node js環境時，vue的模板要寫在哪裡?
## 可以寫在script標籤裡，type寫text/template，這樣瀏覽器不會抱錯也不會渲染。

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
