"use client"
import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren, ReactNode } from "react";



export const Provider =({children}: PropsWithChildren)=>{

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}