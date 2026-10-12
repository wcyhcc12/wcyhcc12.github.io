/*
 * 作品清單｜要新增作品只要改這個檔案
 * ------------------------------------------------------------
 * 1. 把照片上傳到 images/ 資料夾（建議長邊 1800px 以內的 JPG）
 * 2. 在下面清單加一行，例如：
 *    { src: "images/new-01.jpg", title: "作品名稱", category: "城市街拍", forSale: true },
 * 3. 若要先保留空位，用 src: "" 就會顯示「待上傳」的空框
 *
 * category 可用：舞台演出、城市街拍、天空自然、人文廟宇、活動紀錄（也可以自己新增分類）
 * forSale：true = 可購買數位檔／輸出；false = 僅展示（例如有可辨識人物的演出照）
 */
const WORKS = [
  { src: "images/work-04.jpg", title: "跨年煙火", category: "城市街拍", forSale: true },
  { src: "images/work-13.jpg", title: "舞台之光", category: "舞台演出", forSale: false },
  { src: "images/work-06.jpg", title: "暮色殿堂", category: "城市街拍", forSale: true },
  { src: "images/work-17.jpg", title: "海岸雲層", category: "天空自然", forSale: true },
  { src: "images/work-12.jpg", title: "律動", category: "舞台演出", forSale: false },
  { src: "images/work-15.jpg", title: "廟埕", category: "人文廟宇", forSale: true },
  { src: "images/work-01.jpg", title: "滿月", category: "天空自然", forSale: true },
  { src: "images/work-09.jpg", title: "吉他手", category: "舞台演出", forSale: false },
  { src: "images/work-14.jpg", title: "火光", category: "人文廟宇", forSale: true },
  { src: "images/work-08.jpg", title: "城市車流", category: "城市街拍", forSale: true },
  { src: "images/work-21.jpg", title: "樂團", category: "舞台演出", forSale: false },
  { src: "images/work-05.jpg", title: "交會", category: "城市街拍", forSale: true },
  { src: "images/work-16.jpg", title: "落日", category: "天空自然", forSale: true },
  { src: "images/work-02.jpg", title: "燭光", category: "活動紀錄", forSale: false },
  { src: "images/work-07.jpg", title: "簷下", category: "城市街拍", forSale: true },
  { src: "images/work-18.jpg", title: "逆光", category: "舞台演出", forSale: false },
  { src: "images/work-10.jpg", title: "紅月", category: "天空自然", forSale: true },
  { src: "images/work-03.jpg", title: "台前", category: "舞台演出", forSale: false },
  { src: "images/work-19.jpg", title: "藍霧", category: "舞台演出", forSale: false },
  { src: "images/work-11.jpg", title: "合影", category: "活動紀錄", forSale: false },
  { src: "images/work-20.jpg", title: "速度", category: "舞台演出", forSale: false },

  // ↓ 預留空位：之後把 src 換成照片路徑即可
  { src: "", title: "新作品", category: "", forSale: false },
  { src: "", title: "新作品", category: "", forSale: false },
  { src: "", title: "新作品", category: "", forSale: false },
];
