# 阿曼玉髮廊官方網站 Amani Hair Salon

[線上預覽](https://salon-project-tawny.vercel.app/)

## 專案簡介

這是一個美髮沙龍的預約系統網站，提供線上預約服務、會員管理、以及預約查詢功能。網站支援會員和非會員用戶預約，並整合 Google 帳號登入功能，方便用戶管理預約。

## 技術架構

### 前端技術

- **框架與建置工具**
  - React 18.3 - 使用最新的 React 框架
  - Vite 6.0 - 現代化的前端建置工具
  - React Router DOM 7.0 - 處理前端路由
- **UI/UX 設計**
  - Material-UI (MUI) - 使用 Material Design 元件
  - CSS Flexbox & Grid - 實現響應式設計 (RWD)
  - CSS 動畫 - 提供流暢的使用者體驗
- **狀態管理**
  - Context API - 管理全局狀態
  - UserDataContext - 處理用戶資訊
  - SucessAppointmentContext - 管理預約狀態

### 後端服務 (Firebase)

- **Firebase Authentication**
  - Google OAuth 登入整合
  - FirebaseUI 實現無縫的身份驗證體驗
- **Cloud Firestore**
  - NoSQL 資料庫
  - 即時資料同步
  - 安全規則配置

### 開發工具與最佳實踐

- ESLint - 程式碼品質檢查
- 模組化設計 - 組件化開發
- 路由保護 - 確保安全訪問
- 環境變數管理 - 使用 .env 檔案

## 主要功能

### 1. 線上預約系統

- **非會員預約**
  - 簡單的姓名和電話預約流程
  - 即時時段查詢
  - 服務項目選擇
- **會員預約**
  - Google 帳號整合
  - 自動填充會員資訊
  - 預約歷史記錄

### 2. 會員系統

- Google 帳號登入/登出
- 會員資料管理
- 個人預約歷史查詢

### 3. 預約管理

- **查詢功能**
  - 非會員：透過姓名和電話查詢
  - 會員：自動顯示個人預約記錄
- **即時更新**
  - 預約狀態即時同步
  - 時段可用性檢查

### 4. 管理者後台

- 預約行事曆檢視
- 預約狀態管理
- 客戶資料管理

## 安裝與執行

```bash
# 安裝依賴
npm install

# 開發環境執行
npm run dev

# 建置專案
npm run build

# 預覽建置結果
npm run preview
```

## 環境要求

- Node.js 16+
- npm 7+
- Firebase 專案設定
- 必要的環境變數設定 (.env)
