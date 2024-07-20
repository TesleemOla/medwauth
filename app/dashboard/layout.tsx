"use client"
import NavBar from "@/Components/NavBar";
import SideNav from "@/Components/SideNav";
import SummaryCard from "@/Components/SummaryCard";
import { Provider } from "../Provider";



export default function DashboardLayout({ children }:any) {
    // Render your dashboard content here


    return (
    <Provider>
        
        <div className="mx-10">
                <NavBar />
                <div className="flex flex-row gap-10 justify-left mr-5">
                <SideNav />
                <>
                {children}
                </>
                </div>
                
        </div>
     </Provider>
    )
    
}

// app/dashboard/layout.js

// import React from 'react';
// import { useSession } from 'next-auth/react'; // Make sure you import useSession
// import { SessionProvider } from 'next-auth/react'; // Import SessionProvider

// export default function RootLayout({ children }) {
//     const { data: session } = useSession();

//     if (!session) {
//         // Redirect to the login page if not authenticated
//         return <p>Please log in to access the dashboard.</p>;
//     }

//     return (
//         <SessionProvider session={session}> {/* Wrap SessionProvider */}
//             {children}
//         </SessionProvider>
//     );
// }
