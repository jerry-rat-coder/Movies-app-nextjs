Netflix精简版，技术栈：nextjs(app router)  ts  tailwindcss prisma nextauth  

![image](https://user-images.githubusercontent.com/23248726/220005380-ede4fb14-0b8d-4582-a063-3cc4beeccfb7.png)

Features:

- video动画播放
- 主页随机动画
- 详细信息card
- 收藏夹
- 环境变量， Typescript， Nextjs app router
- MongoDB Prisma 操作数据库
- 使用 NextAuth、Google 和 Github 登录，身份验证，会话管理
- 响应式
- 基于 Cookie 的身份验证
- API 和控制器创建
- 使用TailwindCSS的注重细节的效果和动画
- useSWR 数据获取与缓存
- zustand状态管理

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone git@github.com:jerry-rat-coder/Movies-app-nextjs.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
