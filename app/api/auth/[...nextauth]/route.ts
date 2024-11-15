
import NextAuth, { Session} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { hosturl } from "@/utils/host"



const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials){
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                
                const res = await fetch(`${hosturl}/login`, {
                    method: 'POST',
                    body: JSON.stringify({email: credentials?.username,
                        password: credentials?.password
                    }),
                    headers: { "Content-Type": "application/json" }
                })
               
                const user = await res.json()
              
                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user}){
            return { ...token, ...user}
        },
        
        async session({ session, user, token }){
            // session.user = token;
            return session
        }
    },
    pages:{
        signIn: "/login"
    },
})

export { handler as GET, handler as POST }