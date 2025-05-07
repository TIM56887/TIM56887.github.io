

# 如何避免瀏覽器Reflow與Repaint
>瀏覽器的Reflow（重排）和Repaint（重繪）是網頁渲染的核心過程，對性能影響顯著。Reflow涉及重新計算元素的布局和幾何結構，Repaint則重新繪製視覺樣式（如顏色、背景）。兩者均為資源密集型操作，頻繁觸發可能導致頁面卡頓或響應緩慢。以下詳細闡述如何通過最佳實踐減少這些過程，提升網頁性能，參考了權威來源如Google Developers和SitePoint。

- **減少DOM操作**：批量更新，緩存樣式，降低Reflow次數。
- **優化CSS**：簡化規則，避免複雜選擇器，使用高效布局。
- **高效樣式與動畫**：利用硬體加速，脫離文檔流，隱藏修改。
- **工具分析**：借助DevTools檢測並優化渲染性能。

---



### 關鍵優化策略

## 1. 優化DOM結構與操作
DOM操作是Reflow的主要觸發因素，優化DOM結構和操作可顯著降低性能開銷。

- **減少DOM深度**：深層DOM樹增加Reflow影響範圍。淺層結構可減少受影響的元素數量，加快布局計算 ([Google Developers](https://developers.google.com/speed/docs/insights/browser-reflow))。
- **最小化DOM操作**：頻繁讀寫DOM屬性（如`offsetWidth`、`getBoundingClientRect`）會觸發Reflow，尤其在迴圈中。應緩存計算樣式，集中處理讀寫操作 ([DEV Community](https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg))。
  ```javascript
  // 不佳：迴圈內多次觸發Reflow
  elements.forEach(el => el.style.width = el.offsetWidth + 10 + 'px');

  // 優化：緩存樣式
  const widths = elements.map(el => el.offsetWidth + 10);
  elements.forEach((el, i) => el.style.width = widths[i] + 'px');
  ```
- **批量DOM變更**：使用`documentFragment`將多個DOM操作合併為一次插入，減少Reflow次數 ([SitePoint](https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/))。
  ```javascript
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
  }
  document.getElementById('container').appendChild(fragment);
  ```
- **不在迴圈中多次調用觸發Reflow的屬性**：在迴圈中反覆調用`getBoundingClientRect()`或`offsetWidth`等會觸發Reflow。應在迴圈外讀取並儲存結果。
  ```javascript
  // 不佳：迴圈內多次調用
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = elements[i].getBoundingClientRect().width + 10 + 'px';
  }

  // 優化：提前儲存
  const widths = elements.map(el => el.getBoundingClientRect().width);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = widths[i] + 10 + 'px';
  }
  ```
## 2. 優化CSS
CSS規則的數量和複雜性直接影響樣式計算和渲染性能。

- **精簡CSS規則**：過多或未使用的CSS規則增加樣式計算成本。使用工具如[Unused CSS](https://unused-css.com/)移除冗餘規則 ([SitePoint](https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/))。
- **簡單選擇器**：複雜選擇器（如`body div span`）需要遍歷更多DOM節點，降低效率。應使用具體的類或ID選擇器 ([Google Developers](https://developers.google.com/speed/docs/insights/browser-reflow))。
  ```css
  /* 不佳：多層選擇器 */
  body div span { color: blue; }

  /* 優化：直接選擇 */
  .my-span { color: blue; }
  ```
- **高效布局技術**：避免內聯樣式或表格布局，優先使用flexbox或grid，但需注意其在動態內容下的性能影響 ([SitePoint](https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/))。

## 3. 高效樣式與動畫處理
樣式變更和動畫是Reflow和Repaint的常見來源，需謹慎處理。

- **批量樣式變更**：避免逐一修改樣式，改用類名或`cssText`批量應用 ([DEV Community](https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg))。
  ```javascript
  // 不佳：多次修改
  el.style.width = '100px';
  el.style.height = '100px';

  // 優化：使用類名
  el.className = 'new-style';
  ```
- **硬體加速**：使用`transform`和`opacity`等屬性，這些屬性僅影響合成層，不觸發Reflow或Repaint ([SitePoint](https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/))。
  ```css
  .animated { transform: translateX(100px); }
  ```
- **脫離文檔流**：對動畫或頻繁變動的元素使用`position: absolute`或`fixed`，使其布局變更不影響其他元素，減少Reflow ([Google Developers](https://developers.google.com/speed/docs/insights/browser-reflow))。
  ```css
  .animated { position: absolute; transform: translateY(100px); }
  ```
- **隱藏修改**：在元素隱藏（如`display: none`）時進行變更，顯示前完成更新，避免中間Reflow和Repaint ([SitePoint](https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/))。

## 4. 利用瀏覽器工具
性能分析是優化的基礎，瀏覽器工具可幫助識別問題。

- **分析Reflow和Repaint**：使用Chrome DevTools的Performance面板錄製頁面活動，查看哪些操作觸發Reflow或Repaint ([SitePoint](https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/))。
- **啟用Paint Flashing**：在DevTools的Rendering面板中開啟Paint Flashing，觀察重繪區域，優化不必要的Repaint。
- **檢查布局偏移**：使用Layout Shift Visualization檢查意外的布局偏移（CLS），確保穩定性。

### 最佳實踐總結表

| **優化策略**           | **具體措施**                                                                 | **效果**                     |
|------------------------|------------------------------------------------------------------------------|------------------------------|
| 減少DOM深度           | 簡化DOM結構，減少嵌套層次                                                   | 降低Reflow影響範圍           |
| 批量DOM操作           | 使用`documentFragment`，合併多個插入或更新                                   | 減少Reflow次數               |
| 緩存計算樣式         | 避免迴圈內讀取`offsetWidth`等屬性，提前儲存結果                             | 防止不必要Reflow             |
| 精簡CSS規則           | 移除未用CSS，使用工具如[Unused CSS](https://unused-css.com/)                 | 加快樣式計算                 |
| 簡單選擇器           | 使用類或ID，避免多層選擇器                                                 | 減少選擇器匹配時間           |
| 硬體加速             | 使用`transform`和`opacity`                                                 | 避免Reflow和Repaint          |
| 脫離文檔流           | 動畫元素使用`position: absolute`或`fixed`                                   | 限制Reflow影響               |
| 隱藏修改             | 在`display: none`下變更，顯示前完成                                         | 避免中間Reflow和Repaint      |
| 工具分析             | 使用DevTools的Performance面板和Paint Flashing                               | 精準識別並優化性能瓶頸       |

### 總結
減少Reflow和Repaint需要從DOM結構、CSS規則、樣式變更和動畫處理多方面入手。通過批量操作、硬體加速、脫離文檔流及工具分析，開發者可打造高效、流暢的網頁。持續監控性能並根據設備和瀏覽器特性調整策略，是確保最佳用戶體驗的關鍵。

### 關鍵引用
- [Google Developers - Minimizing browser reflow](https://developers.google.com/speed/docs/insights/browser-reflow)
- [SitePoint - 10 Ways to Minimize Reflows and Improve Performance](https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/)
- [DEV Community - Understanding Reflow and Repaint in the browser](https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg)
- [Unused CSS - Tool to remove unused CSS](https://unused-css.com/)