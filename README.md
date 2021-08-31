# 1797 一起揪起
web: https://dear17530.github.io/1797-front/#/
## 架構
```
├── 前台    
│   ├── 首頁
│   ├── 揪活動     
│   ├── 集團購
│   ├── 購物車
│   ├── 會員中心
│   ├── 私人訊息
│   ├── 註冊
│   └── 登入 / 登出
│
├── 後台
│   ├── 商品管理
│   ├── 訂單管理   
│   └── 營運分析
└── 
```
## 前台
1. 揪活動版面
    - 新增活動
    - 瀏覽活動
    - 參與活動
    - 私訊主辦者
2. 集團購版面
    - 瀏覽商品
    - 商品單獨頁面
        - 商品資料
        - 目前集資狀況 
        - 加入購物車
3. 購物車
    - 變更購買的商品數量
    - 刪除商品
    - 結帳
        - 現金結帳
        - 信用卡結帳
5. 會員中心
    - 查看個人所發起的活動
        - 編輯活動內容
        - 刪除活動
        - 查看參與者
    - 查看個人所參與的活動
        - 取消參加活動
        - 私密主辦者
6. 私人訊息
    - 聯絡管理員
        - 點選查詢常見問題
    - 查看個人訊息
    - 回覆個人訊息
7. 註冊 / 登入 / 登出
## 後台
1. 商品管理
    - 新增商品
    - 編輯商品
    - 發放回饋點數
2. 訂單管理
    - 編輯訂單基本資料
    - 編輯訂單狀態
3. 營運分析
    - 業績查詢
    - 商品業績查詢
    - 類別業績查詢
    - 目標業績設定
## 使用技術
1. 前端
    - Vue.js
    - Vuetify
    - Vuex
    - Eslint 
    - Axios
    - apexcharts
    - Sass
    - Pug
    - RWD
    - Google analytics
    - Open Graph Tag 
    - PWA
1. 後端
    - Node.js
    - Express
    - Restful API
    - JWT
    - MongoDB
    - Mongoose
## Demo
1. 管理員帳號: admin
    管理員密碼: 1234
2. 會員帳號: user1
    管理員密碼: 1234
    
    會員帳號: user2
    管理員密碼: 1234 
    
    會員帳號: user3
    管理員密碼: 1234
3. 自行註冊
## 頁面瀏覽
### 前台
1. 首頁
![](https://i.imgur.com/S9f1ItL.png)

2. 註冊
![](https://i.imgur.com/shzZzM7.png)

3. 揪活動
![](https://i.imgur.com/JAeZL4M.png)

4. 集團購
![](https://i.imgur.com/hQqwtZ0.png)

5. 商品單獨頁面
![](https://i.imgur.com/ewALGEn.png)

6. 購物車
![](https://i.imgur.com/dpKyb8x.png)

7. 會員中心
![](https://i.imgur.com/bf0bmGL.png)

8. 訂單資料
![](https://i.imgur.com/5V1U2U9.png)

9. 私人訊息
![](https://i.imgur.com/BLchQiI.png)

### 後台
1. 訂單管理
![](https://i.imgur.com/Pno46LC.png)

2. 商品管理
![](https://i.imgur.com/HJMBxAR.png)

3. 營運分析
![](https://i.imgur.com/JE9baZ6.png)

## API
### 使用者
#### 註冊
- 請求方式 Post
- 路徑 `/users`
```json
{
  "account": 帳號,
  "password": 密碼,
  "email": 信箱,
  "birthday": 生日,
  "name"： 姓名,
  "userId": 暱稱,
  "gender": 性別
}
```

#### 登入
- 請求方式 Post
- 路徑 `/users/login`
- 獲取 token
```json
{
  "account": 帳號,
  "password": 密碼
}
```

#### 登出
- 請求方式 Delete
- 路徑 `/users/:id`
```json
{
  "account": 帳號,
  "password": 密碼
}
```
### 揪活動
#### 取得貼文
- 請求方式 Get
- 路徑 `/posts`

#### 新增貼文
- 請求方式 post
- 路徑 `/posts`
```json
{
  "userId": 使用者id,
  "avatar": 頭貼,
  "title": 標題,
  "categories": 分類,
  "city": 城市,
  "activeDate": 活動日期,
  "description": 活動描述,
  "activeImage": 活動圖片,
  "member": 參加者
}
```

#### 加入好友
- 請求方式 Post
- 路徑 `/users/:id`
```json=
{
  "userId": po文者id
}
```

#### 跟團
- 請求方式 patch
- 路徑 `/users/:id`
```json=
{
  "follow": po文id
}
```
### 聊天室
#### 取得好友
- 請求方式 get
- 路徑 `/users/:id/friend`
- 驗證 token

#### 取得聊天訊息
- 請求方式 get
- 路徑 `/messages/:id`
- 驗證 token

### 集團購
#### 取得商品
- 請求方式 Get
- 路徑 `/products`
:::info
取出上架中 sell: true 的商品
:::

#### 商品單獨頁
- 請求方式 Get
- 路徑 `/products/:id`

#### 加入購物車
- 請求方式 Post
- 路徑 `/users/cart`
```json
{
  "product": 商品id,
  "option": 品項,
  "amount": 數量
}
```

### 購物車
#### 取得購物車
- 請求方式 Get
- 路徑 `/users/cart`
- 驗證 token 取得 user 內的 cart
- 也把 user 內的 coupon 回饋點數欄位帶出

#### 刪除購物車商品
- 請求方式 Patch
- 路徑 `/users/cart`
- 需驗證 token
```json
{
  "account": 帳號,
  "product": 商品id,
  "amount": 0,
  "option": 品項
}
```

#### 編輯購物車商品
- 請求方式 Patch
- 路徑 `/users/cart`
- 需驗證 token
```json
{
  "account": 帳號,
  "product": 商品id,
  "amount": 數量,
  "option": 品項
}
```

#### 送出訂單
- 請求方式 Post
- 路徑 `/orders`
```json
{
  "delivery_method": 宅配,
  "address": 地址,
  "contact_number": 手機,
  "payment": 付款狀態,
  "payment_method": 付款方式,
  "valueFields": 信用卡資料,
  "redeem": 使用點數,
  "sum": 總金額,
  "state": 訂單狀況
}
```

#### 結帳扣除回饋點數
- 請求方式 Patch
- 驗證
- 路徑 `/users`
```json
{
  "_id": 使用者 id,
  "coupon": 原本點數 - 本訂單折抵點數
}
```

### 會員中心
#### 取得使用者資料
- 請求方式 Get
- 路徑 `/users/id`

#### 編輯使用者資料
- 請求方式 Patch
- 路徑 `/users/:id`
```json
{
  "name"： 姓名,
  "userId": 暱稱,
  "introduction": 自我介紹,
}
```

#### 取得使用者活動貼文
- 請求方式 Get
- 路徑 `/users/post`
- 需驗證 token

#### 取得使用者跟隨活動貼文
- 請求方式 Get
- 路徑 `/users/follow`
- 需驗證 token
#### 訂單查詢
- 請求方式 Get
- 路徑 `/orders/getorders`
- 驗證 token 確認 role: 0

#### 更改訂單狀態
- 請求方式 Patch
- 路徑 `/orders/:id`

#### 已完成訂單內商品
- 請求方式 Patch
- 路徑 `/products/:id`

#### 取得商品數量
- 請求方式 Get
- 路徑 `/products/orderQuantity`
- 驗證 token 確認 role: 1


### 後台商品管理
#### 取得所有商品
- 請求方式 Get
- 路徑 `/products/all`
- 驗證 token 確認 role: 1

#### 新增商品
- 請求方式 Post
- 路徑 `/products`
- 驗證 token 確認 role: 1
```json
{
  "name": 品名,
  "price": 價格,
  "category": 分類,
  "description": 敘述,
  "image": 商品圖片,
  "sell": 上下架狀態,
  "count": 優惠門檻,
  "coupon": 回饋點數,
  "options": 品項
}
```

#### 修改商品
- 請求方式 Patch
- 路徑 `/products/id`
- 驗證 token 確認 role: 1
```json
{
  "name": 品名,
  "price": 價格,
  "category": 分類,
  "description": 敘述,
  "image": 商品圖片,
  "sell": 上下架狀態,
  "count": 優惠門檻,
  "coupon": 回饋點數,
  "options": 品項
}
```

#### 發放回饋點數
- 請求方式 Patch
- 路徑 `/users/sendCoupon`
```json
{
  "id": 商品 id
}
```
###  後台訂單管理
#### 取得所有訂單
- 請求方式 Get
- 路徑 `/orders/getorders`
- 驗證 token 確認 role: 1

#### 回壓宅配單號
- 請求方式 Patch
- 路徑 `/orders/:id`
- 驗證 token 確認 role: 1
```json
{
  "state": 已出貨
}
```
### 後台營運分析
#### 取得已完成訂單資料
- 請求方式 Get
- 路徑 `/orders/getOrdersQuantity`
- 驗證 token 確認 role: 1

#### 取得各類別業績
- 請求方式 Get
- 路徑 `/orders/getCategorySales`
- 驗證 token 確認 role: 1

#### 取得商品
- 請求方式 Get
- 路徑 `/orders/getProductSales`
- 驗證 token 確認 role: 1

#### 目標業績
- 請求方式 Get
- 路徑 `/admins`
- 驗證 token 確認 role: 1
