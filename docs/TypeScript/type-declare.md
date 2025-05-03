---
title: TypeScript 型別宣告技巧
---
# TypeScript 型別宣告技巧

### 當專案變大時，資料間的關係會變複雜，宣告型別的方式就會變得很重要，以下是一些型別宣告的技巧：

## 1. `Partial`、`Pick`、`Omit`
> Partial 將型別的屬性變為可選的<br>
> Pick 從型別中選擇某些屬性<br>
> Omit 從型別中排除某些屬性 <br>
```typescript
interface User {
    id: number;
    name: string;
    email: string;
}
// 將 User 型別的所有屬性變為可選的，Partial 是 TypeScript 2.1 新增的工具型別，用來將一個型別的所有屬性變為可選的。
type PartialUser = Partial<User>;
// 從 User 型別中選擇 name 和 email 屬性，Pick 是 TypeScript 2.1 新增的工具型別，用來從一個型別中選擇某些屬性。
type UserNameAndEmail = Pick<User, 'name' | 'email'>;
// 從 User 型別中排除 email 屬性，Omit 是 TypeScript 4.1 新增的工具型別，用來從一個型別中排除某些屬性。
type UserWithoutEmail = Omit<User, 'email'>;
```
## 2. `Extract` 
> 從聯合型別中提取特定型別
```typescript
type UserInput = string | number | Date | string[];
type TextualInput = Extract<UserInput, string | string[]>;

function handleText(input: TextualInput) {
    console.log(`Handling text: ${input}`);
}

// 正確的用法
// 不會有 TypeScript 類型錯誤
handleText("Hello, world!");
handleText(["Hello", "world!"]);

// 錯誤的用法
handleText(42); // TypeScript 類型錯誤
handleText(new Date()); // TypeScript 類型錯誤
```
## 3. `Exclude`
> 從聯合型別中排除某些型別
```typescript
type UserInput = string | number | Date | string[];
type NonTextualInput = Exclude<UserInput, string | string[]>;

function handleNonText(input: NonTextualInput) {
    console.log(`Handling non-textual input: ${input}`);
}
``` 
## 4. `readonly` 
> 使屬性不可變
```typescript
interface User {
    readonly id: number;
    name: string;
    email: string;
}
```
## 5. `Record`
> 將一組 key 與 value 型別組合成一個物件型別。
```typescript
type User = {
    id: number;
    name: string;
    email: string;
};
type UserRecord = Record<string, User>;
const users: UserRecord = {
    "1": { id: 1, name: "John", email: "john@example.com" },
    "2": { id: 2, name: "Jane", email: "jane@example.com" },
};
```
> Record<string, User> 表示這是一個物件，其所有的鍵（key）都是 string，而對應的值（value）都是 User 型別。
## 6. `Creating types from values in array`
> 限制一個變數的值必須在陣列中<br>
> https://github.com/microsoft/TypeScript/issues/28046
```typescript
const animals = ['cat', 'dog', 'mouse'] as const
type Animal = typeof animals[number]

// type Animal = 'cat' | 'dog' | 'mouse'
```


