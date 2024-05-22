import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

// interface Comp{
//     components: React.ReactNode,
//     pageProps:{
//         session: any
//     }
// }

interface Props{
    children: ReactNode;
}

// export const Provider =({ components, pageProps}: Comp)=>{
//     return (
//         <SessionProvider session={pageProps.session}>
//             {components}
//         </SessionProvider>
//     )
// }

export const Provider =({children}: Props)=>{

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}