import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/model/user-model";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials == null) return null;

        try {
            const user = await User.findOne({email: credentials?.email});
            
            if (user) {
              const isMatch = await bcrypt.compare(
                credentials?.password,
                user?.password
              );
  
              if (isMatch) {
                return user;
              } else {
                throw new Error("Try your password again");
              }
            } else {
              throw new Error("User not found");
            }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
});
