---
title: '單元測試'
---


# 撰寫Vue單元測試的幾個注意點

## 1. 不要測試組件內部的數據
```javascript
// 不好的寫法
it("可以開啟搜尋框", async () => {
    const component = await mountSuspended(TableBox, { props: propsData });
    component.find('button[aria-label="toggle search"]').trigger("click");
    // 直接測試組件內部的數據
    expect(component.vm.searchExpanded.value).toBe(true);
  });
```

## 2. 在vite 打包時，移除測試用的HTML屬性(`data-testid`)
> https://github.com/vitejs/vite/issues/636

