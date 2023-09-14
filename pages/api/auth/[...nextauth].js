import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/helpers/db";
import { verifyPassword } from "@/helpers/auth";

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: 'asd',
  providers: [
     CredentialsProvider({
      name: 'credentials',
      async authorize(credentials) {
        const client = await connectToDatabase();
        
        const usersCollection = client.db().collection('auth-pizza');

        const user = await usersCollection.findOne({name: credentials.name});

        if (!user) {
          client.close();
          throw new Error('Користувача не знайдено');
        }

        const isValid = await verifyPassword(credentials.phone, user.phone);

        if (!isValid) {
          client.close();
          throw new Error('Вхід не дозволено')
        }

        client.close();

        return {phone: user.phone}
      },
      credentials: {
        name: {},
        phone: {},
      },
     })
  ]
}

export default NextAuth(authOptions)