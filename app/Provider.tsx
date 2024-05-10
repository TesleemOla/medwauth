"use client"
import { SessionProvider } from "next-auth/react";
import React from "react";

interface Comp{
    components: React.ReactNode,
    pageProps:{
        session: any
    }
}

const Provider =({ components, pageProps}: Comp)=>{
    return (
        <SessionProvider session={pageProps.session}>
            {components}
        </SessionProvider>
    )
}