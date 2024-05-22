import Nextauth from "next-auth"


declare module "next-auth"{
    interface Session{
        user:{
            success: boolean,
            token: string,
            _id: string,
            email: string,
            firstName: string,
            lastName: string,
            access: string
        }
    }
}