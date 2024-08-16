"use client"
import { hosturl } from "@/utils/host";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";


export default function Home() {

 
  return (
    
    <div className="flex flex-col">
    <Link href="/">
      Home
    </Link>
    <Link href="dashboard">
      Dashboard 
    </Link>
      <button onClick={() => signOut()} className="text-black border-white">Log Out</button>:
      <button onClick={() => signIn('email', { email, callbackUrl: `${hosturl}/dashboard` })
      } className="text-black border-white">Log In</button>
    </div>
    
  );
}
