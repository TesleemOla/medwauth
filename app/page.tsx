"use client"
import { SessionProvider, signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    
    <div>
    <h1>
      Home
    </h1>
      <button onClick={()=> signIn()}>Log In</button>
      <button onClick={() => signOut()}>Log Out</button>

    </div>
    
  );
}
