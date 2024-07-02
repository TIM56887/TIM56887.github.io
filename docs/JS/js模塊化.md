# js模塊化

## require 導入文件的基本規則

```js 
const test = require('./test')
```

### 假設test是一個資料夾
--- 
#### 首先會檢測test下的`package.json`文件中的main屬性對應的文件，會直接導入該文件，如果 文件不存在會直接報錯，如果main屬性不存在會導入資料夾下的index.js或index.json，都沒有也會直接報錯
```js
{
    "main": "./good.js"
} 
```
> 像這樣就會直接導入good.js


