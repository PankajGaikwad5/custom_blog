import { connectMongoDB } from '@/lib/mongodb';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import { loginSchema } from '@/components/loginSchema';
import { SessionStrategy } from 'next-auth';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
        },
        username: {
          label: 'username',
          type: 'text',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        // const user = { id: '1' };
        const creds = await loginSchema.parseAsync(credentials);
        const { email, password } = creds;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }

          const matchPasswords = await bcrypt.compare(password, user.password);

          if (!matchPasswords) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      if (token) {
        session.user = { ...session.user, ...token };
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: '/',
  },
};

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
