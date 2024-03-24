import { connectMongoDB } from '@/lib/mongodb';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../../models/user';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        // const user = { id: '1' };
        const { username, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ username });
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
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
};

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
