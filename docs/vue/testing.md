---
title: '單元測試'
---


# 撰寫Vue單元測試的幾個注意點

## 1. 不要直接測試組件內部的數據(Unit of behavior, Test behavior, not implementation)
> 直接測試組件內部的數據，會導致測試的覆蓋率降低，且不易維護
```javascript 
// vue instance
const searchExpanded = ref(false)
// ...
// test.ts
it("可以開啟搜尋框", async () => {
    const component = await mountSuspended(TableBox, { props: propsData });
    component.find('button[aria-label="toggle search"]').trigger("click");
    // 直接測試組件內部的數據
    expect(component.vm.searchExpanded.value).toBe(true); // [!code error]
    // 測試行為
    expect(component.find('.search-box').exists()).toBe(true); // [!code warning]
  });
```

## 2. 可以在vite 打包時，移除測試用的HTML屬性(`data-testid`)
> https://github.com/vitejs/vite/issues/636

