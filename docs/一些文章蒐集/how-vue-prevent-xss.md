---
title: How to prevent xss
date: 2022-10-01T00:00:00Z
---


# 關於防止XSS
## Meta標籤中新增 CSP header 可以設定要執行哪一些來源的script、阻止inline script的執行，做為xss的最後一道防線
::: code-group
```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; child-src 'none'; script-src 'self';" 
/>

```
:::
## 小心使用vue v-html和:href
### 相關資訊
> [Vue中是如何防御XSS（注入攻击）的](https://segmentfault.com/a/1190000039713551)<br>
> [政府網站漏洞提報的紀錄](https://zeroday.hitcon.org/vulnerability/all)<br>
> [Cymetrics Tech Blog](https://tech-blog.cymetrics.io/)