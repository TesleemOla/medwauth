"use client"
import { hosturl } from "@/utils/host";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";


export default function Home() {

 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4">Home
      </Link>
      <Link href="/dashboard" className="text-blue-500 hover:text-blue-700 mb-4">Dashboard
      </Link>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mb-4"
      >
        Log Out
      </button>
      <button
        onClick={() => signIn()}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Log In
      </button>
    </div>

    
  );
}
