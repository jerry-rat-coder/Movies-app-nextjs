import NextAuth, { AuthOptions } from 'next-auth';

import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';


import Credentials from 'next-auth/providers/credentials';

import { compare } from 'bcrypt';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prismadb from '@/app/libs/prismadb';

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'passord'
        }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }

        const user = await prismadb.user.findUnique({ where: {
          email: credentials.email
        }});

        if (!user || !user.hashedPassword) {
          throw new Error('Email does not exist');
        }

        const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

        if (!isCorrectPassword) {
          throw new Error('Incorrect password');
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/auth'
  },
  debug: process.env.NODE_ENV === 'development',
  adapter: PrismaAdapter(prismadb),
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// 这段代码实现了一个Next.js的API，用于管理身份验证。它使用了next-auth库，是一个非常流行的用于Next.js的身份验证库。它支持各种身份验证策略和提供商，如Google, Github以及自定义的用户名/密码登录。

// 下面是这个API的基本构成：

// 依赖导入: 导入了所有需要的库和模块，包括NextAuth，NextAuth的提供者(Github、Google和Credentials)，Prisma的适配器，以及bcrypt库进行密码比较。还导入了一个名为prismadb的自定义库。

// 身份验证选项（AuthOptions）: 这是一个对象，定义了该应用程序使用NextAuth时的配置选项。这里主要配置了几个部分：

// providers: 用于设置身份验证提供商。这个代码使用了Github、Google和凭证登录。Github和Google提供商需要在环境变量中设置相应的clientId和clientSecret。凭证登录提供商被配置为接受一个电子邮件和密码，并与存储在prismadb中的用户数据进行比较。

// pages: 配置signIn页面的路由。

// debug: 如果处于开发环境，启动调试模式。

// adapter: 使用Prisma适配器将NextAuth连接到prismadb。

// session and jwt: 会话和jwt选项用于配置how user sessions and JWTs are handled。此代码将策略设置为jwt，并使用环境变量中的NEXTAUTH_JWT_SECRET作为JWT的秘密。

// secret: 使用环境变量中的NEXTAUTH_SECRET作为应用的秘密。

// 默认导出: 最后，NextAuth函数被调用，并传入上面定义的身份验证选项作为参数。这将初始化并配置NextAuth，使其在此应用程序中可用。

// 总的来说，这段代码配置了NextAuth库以在Next.js应用中处理身份验证，具体处理方式包括GitHub，Google以及基于凭证的登录方式。





// User
// "how user sessions and JWTs are handled"是什么
// ChatGPT
// "how user sessions and JWTs are handled"（用户会话和JWT如何处理）是指在应用程序中如何管理和处理用户会话以及JSON Web Tokens (JWT)的方式。

// 在Web应用中，用户会话和JWT是常用的身份验证和授权机制。以下是它们的简单概述：

// 用户会话（User sessions）: 用户会话是在用户与应用交互期间持续存在的状态。当用户登录应用时，会创建一个新的会话，该会话会持续到用户注销或会话超时为止。会话通常使用cookies在客户端和服务器之间进行追踪。会话ID会存储在cookie中，然后在每次请求时发送到服务器，以验证用户的身份并提供个性化的体验。

// JSON Web Tokens (JWT): JWT是一种开放标准 (RFC 7519)，它定义了一种紧凑且自包含的方式，用于在各方之间安全地传输信息作为JSON对象。此信息可以被验证和信任，因为它是数字签名的。JWT可以使用密钥 (使用HMAC算法) 或使用公/私钥对 (使用RSA或ECDSA) 进行签名。JWTs通常用于身份验证和信息交换。

// "how user sessions and JWTs are handled"通常涉及以下方面的决策：

// 会话管理: 你会选择使用服务器端会话（如Express的会话中间件）还是客户端会话（如JWT）？如何在用户注销时结束会话？会话应该多久过期？

// JWT管理: JWT的使用和刷新策略是什么？JWT应该在哪里存储（例如，在HTTP只读cookie中，还是在浏览器的localStorage或sessionStorage中）？JWT应该如何结构化，以携带哪些数据？

// 安全性: 如何防止跨站请求伪造(CSRF)攻击？如何防止跨站脚本(XSS)攻击？是否应该使用HTTP Secure cookies，它们只能通过HTTPS连接发送？

// 在你的代码示例中，session: { strategy: 'jwt' }告诉NextAuth使用JWT策略进行会话管理。也就是说，身份验证信息将被编码到JWT中，并在每个请求中发送到服务器。