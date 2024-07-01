
# Angular Commit 規範介紹

Angular 專案使用了一套嚴格的提交訊息（commit message）格式，以確保提交紀錄的可讀性和一致性。這套規範基於 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 標準。以下是 Angular commit 規範的詳細介紹：

## Commit 規範的好處

1. **提高可讀性**：清晰的提交訊息使得每個變更的目的和內容一目了然，有助於開發者快速理解和定位問題。
2. **方便協作**：統一的提交格式使得團隊成員之間的合作更加順暢，減少因提交訊息不一致帶來的困惑。
3. **自動化工具**：許多自動化工具（如變更日誌生成、版本控制等）依賴於一致的提交訊息格式。
4. **歷史追溯**：清晰的提交記錄有助於日後追溯變更歷史，了解每次變更的背景和原因。

## 提交訊息格式

提交訊息由三個部分組成：標題、正文和腳註。每個部分都有其特定的格式和要求。

### 1. 標題（必需）

標題是提交訊息的第一行，應該簡潔且具描述性。格式如下：

```js
<type>(<scope>): <subject>
```

- `type`：提交的類型，如 `feat`、`fix`、`docs` 等。
- `scope`：變更的範圍（可選），通常是變更所影響的模組或功能。
- `subject`：簡短的變更描述，不超過50個字元。

常見的 `type` 類型有：

- `feat`：新增功能
- `fix`：修復錯誤
- `docs`：文件變更
- `style`：程式碼格式（不影響程式碼執行的變更）
- `refactor`：重構（既不是新增功能，也不是修復錯誤的程式碼變更）
- `test`：新增或修改測試
- `chore`：雜項（不影響程式碼的其他變更）

範例：

```
feat(auth): add JWT authentication
fix(user-profile): resolve avatar upload issue
docs(readme): update contributing guidelines
```

### 2. 正文（可選）

正文用於提供變更的詳細說明，特別是在變更較為複雜時。正文每行應限制在72個字元以內，並應至少包括以下內容：

- 為什麼需要這些變更
- 變更的具體內容
- 可能的影響（例如：性能、兼容性等）

範例：

```
feat(auth): add JWT authentication

This commit introduces JWT-based authentication to improve security.
Users can now log in using their credentials and receive a JWT token.
The token is then used to authenticate subsequent requests.
```

### 3. 腳註（可選）

腳註包含任何其他需要附帶的信息，如關聯的問題單號（issue）、斷言（BREAKING CHANGE）等。

範例：

```
fix(user-profile): resolve avatar upload issue

Previously, uploading an avatar would sometimes fail due to a
network timeout. This fix increases the timeout duration and
adds retry logic.

Closes #123
```

## 提交訊息範例

完整的提交訊息範例如下：

```
feat(auth): add JWT authentication

This commit introduces JWT-based authentication to improve security.
Users can now log in using their credentials and receive a JWT token.
The token is then used to authenticate subsequent requests.

BREAKING CHANGE: The login endpoint now requires a valid JWT token.
```

這樣的提交訊息不僅提供了變更的上下文，還有助於其他開發者理解變更的原因和影響。

## 結論

遵循 Angular commit 規範有助於保持提交歷史的整潔和一致性，並能自動生成變更日誌。透過這些規範，團隊可以更好地協作，並確保每個提交都是清晰且有意義的。

## 一些我常用的限制commit規範相關套件：
### [commitlint](https://commitlint.js.org/)
> commitlint可以做到：如果沒有按照規定打commit message，再提交commit時就會直接抱錯



