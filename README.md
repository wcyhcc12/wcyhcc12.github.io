# 陳宥宏攝影 Yu-Hung Chen Photography

個人攝影商店網站（GitHub Pages）。

## 檔案說明

| 檔案 | 用途 |
|---|---|
| `index.html` | 網頁本體（關於、服務與價格、作品販售、購買須知、聯絡） |
| `works.js` | 作品清單，新增／刪除作品只改這裡 |
| `images/` | 作品照片與大頭貼 `avatar.svg` |

## 新增作品（在 GitHub 網頁上就能做）

1. 進入 `images` 資料夾 → 右上角 **Add file → Upload files**，上傳照片（建議 JPG、長邊 1800px 以內）。
2. 打開 `works.js` → 點鉛筆圖示編輯，把預留的空位
   `{ src: "", title: "新作品", category: "", forSale: false },`
   改成例如
   `{ src: "images/new-01.jpg", title: "作品名稱", category: "城市街拍", forSale: true },`
3. 按 **Commit changes**，約 1 分鐘後網站自動更新。

## 常改的地方

- 價格、方案內容：`index.html` 的「服務與價格」「作品販售」區塊
- 大頭貼：把 `images/avatar.svg` 換成自己的照片，並把 `index.html` 中的 `avatar.svg` 改成新檔名
- 電話：`index.html` 聯絡區塊有一段註解掉的電話欄位，填好後拿掉註解即可
