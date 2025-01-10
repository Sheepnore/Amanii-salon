# 阿曼玉髮廊官方網站

[連結觀看](https://salon-project-tawny.vercel.app/)

# 專案技術使用
* 利用React.js 和 Vite 建造專案
* CSS flexbox、Grid 和 Material UI 設計畫面並遵循Responsive Web Design (RWD)
* 使用Context API 作狀態管理
* 使用Firebase 搭建後端

# 功能說明

* 線上預約
  - 非註冊用戶輸入姓名和電話預約
  - 網站利用Google帳號資訊，會員用戶只需選填時間和服務即可完成預約
  - 使用Cloud Firestore 儲存非註冊和會員用戶預約資料

* 會員登入系統
  - 使用Firebase Authentication 管理用戶
  - 提供第三方Google Auth Provider進行登入，用戶省去記憶帳號密碼，只需一個Google帳戶便可預約

* 預約查詢
  - 非會員的用戶輸入姓名和電話即可查詢
  - 會員用戶在登入後不必輸入任何訊息，後端即可利用Firebase Authentication為每個帳戶生成的ID進行query並取得預約資料
