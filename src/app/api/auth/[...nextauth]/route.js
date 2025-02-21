import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectionDB } from '@/utils/database'
import User from '@/models/user'
// alert("hello");
// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// })
const handler = NextAuth({
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // redirectUri: `${process.env.NEXT_AUTH_URI}/api/auth/callback`,
        })
    ],
    
  callbacks: {
    async session({session}){
        const sessionUser = await User.findOne({
            email: session.user.email
        })
        session.user.id = sessionUser._id.toString();

        return session;
    },
    async signIn({profile}) {
        try {
            await connectionDB();
 
            const userExists = await User.findOne({
                email: profile.email
            });

            if(!userExists){
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })
            }

            return true;

        } catch (error) {
            console.log("error checking if user exists---",error);
        }
    }
}
})

export { handler as GET, handler as POST};