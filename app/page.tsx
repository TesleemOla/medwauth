"use client"
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
      <button onClick={() => signOut()} >Log Out</button>
      <button onClick={() => signIn()} >Log In</button>
     
    </div>
    
  );
}
