
import NavBar from "@/Components/NavBar";
import SideNav from "@/Components/SideNav";
import SummaryCard from "@/Components/SummaryCard";


export default function DashboardLayout({ children }:any) {
    // Render your dashboard content here
    return <div className="mx-10">
            
            <NavBar/>
        <div className="flex flex-row justify-between ">

            <SummaryCard></SummaryCard>
            <SummaryCard></SummaryCard>
            <SummaryCard></SummaryCard>
        </div>
        <section className="flex flex-row">
                <SideNav />
                <table className="mx-2">
                {children}
                </table>
            </section>
        </div>
    
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
