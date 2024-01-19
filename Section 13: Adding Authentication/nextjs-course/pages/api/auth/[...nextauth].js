import NextAuth from 'next-auth';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions = {
  session: {
    jwt: true,
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: 'Credentials',
      async authorize(credentials, req) {
        const client = await connectToDatabase();

        const usersCollection = client.db('auth').collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();

        return { email: user.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);