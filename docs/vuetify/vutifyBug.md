---
title:v-data-table 在有使用headers props時，run build會報typescript錯
---

# v-data-table 在有使用headers props時，run build會報typescript錯：

```error
Type '{ title: string; key: string; align: string; }[]' is not assignable to type 'readonly { readonly key?: "data-table-group" | "data-table-select" | "data-table-expand" | (string & {}); readonly value?: SelectItemKey<Record<string, any>>; ... 11 more ...; readonly children?: readonly any[]; }[] & readonly { ...; }[]'.
  Type '{ title: string; key: string; align: string; }[]' is not assignable to type 'readonly { readonly key?: "data-table-group" | "data-table-select" | "data-table-expand" | (string & {}); readonly value?: SelectItemKey<Record<string, any>>; ... 11 more ...; readonly children?: readonly any[]; }[]'.ts(2322)
index.d.mts(21300, 9): The expected type comes from property 'headers' which is declared here on type 'Partial<{ page: string | number; style: StyleValue; expanded: readonly string[]; tag: string; sticky: boolean; noDataText: string; loadingText: string; itemsPerPageText: string; sortBy: readonly SortItem[]; ... 27 more ...; fixedFooter: boolean; }> & ... 4 more ... & Record<...>'
(property) headers?: readonly {
    readonly key?: "data-table-group" | "data-table-select" | "data-table-expand" | (string & {});
    readonly value?: SelectItemKey<Record<string, any>>;
    ... 11 more ...;
    readonly children?: readonly any[];
}[] & readonly {
    ...;
}[]
```

## 解法：
> 在headers加上as const
```ts
const headers = ref([
  { title: 'Plant', align: 'start', sortable: false, key: 'name' },
  { title: 'Light', align: 'end', key: 'light' },
  { title: 'Height', align: 'end', key: 'height' },
  { title: 'Pet Friendly', align: 'end', key: 'petFriendly' },
  { title: 'Price ($)', align: 'end', key: 'price' },
] as const)
```

### 參考:
https://github.com/vuetifyjs/vuetify/issues/18901