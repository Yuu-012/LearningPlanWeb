# 學習計畫管理網站

## 1.專案簡介
本專案是個人學習計畫管理網站，可供使用者建立與管理學習計畫。<br/>
使用者可透過網站新增、修改、查詢與刪除計畫，並可設定計畫名稱、起迄日期與執行狀態。

## 2.使用技術
+ 前端：HTML、CSS、JavaScript
+ API溝通：Fetch API、RESTful API
+ 後端：Java、Spring Boot、Spring MVC、Spring JDBC
+ 資料庫：MySQL
+ 開發環境：Intellij IDEA
+ 版本管理：Github
+ AI輔助工具：ChatGPT

## 3.系統功能
- 新增計畫：提供使用者新增單一計畫，可設定計畫名稱、計畫起始日期、計畫結束日期與執行狀態。
- 修改計畫：提供使用者修改指定計畫，可修改計畫名稱、計畫起始日期、計畫結束日期與執行狀態。
- 查詢計畫：進入網站後，自動查詢並顯示所有既有學習計畫。
- 刪除計畫：提供使用者刪除指定計畫。

## 4.系統架構
* 前端：使用 HTML、CSS 建構前端網站，並透過 JavaScript 與 Fetch API 向後端發出 HTTP 請求。
* 後端：<br/>
  - Controller 層：使用 Spring MVC 建立 RESTful API。負責接收與處理前端發來的 HTTP 請求，以及將資料以 JSON 格式回傳。
  - Service 層：負責協調 Controller 層與 DAO 層之間的資料處理流程，作為 API 請求與資料庫操作之間的中介層。
  - DAO 層：透過 Spring JDBC 操作 MySQL 資料庫，執行資料的新增、修改、查詢與刪除。
