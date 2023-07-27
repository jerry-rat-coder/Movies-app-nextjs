import { compare } from "bcrypt";
import NextAuth, {AuthOptions} from "next-auth";
// import {PrismaAdapter} from 'next-auth/'
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import prismadb from '@/lib/prismadb'
import { PrismaAdapter }  from '@next-auth/prisma-adapter'

export const authOptions: AuthOptions = {
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                },
                password: {
                    label: 'password',
                    type: 'text',
                }
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    throw new Error('Email and password required');
                }

                const user = await prismadb.user.findUnique({ where: {
                    email: credentials.email
                }})


                if(!user || !user?.hashedPassword ){
                    throw new Error('User does not exit');
                }

                const isCorrectPassword = compare(credentials.password, user.hashedPassword);

                if(!isCorrectPassword) {
                    throw new Error('Incorrect password')
                }

                return user;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        })
    ],
    pages: {
        signIn: '/auth',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    adapter: PrismaAdapter(prismadb),
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET
}
 
export default NextAuth(authOptions)