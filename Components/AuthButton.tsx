"use client"

import React from 'react'
import { useSession, signIn, signOut } from  "next-auth/react"
import { hosturl } from '@/utils/host'

const AuthButton = () => {

  const { status } = useSession()
  return (
    status === "authenticated"?
    <button onClick={() => signOut()} className="bg-blue-500 text-white border-2 border-dotted p-2 border-blue-800">Log Out</button>:
    <button onClick={() => signIn()} className="bg-red-600 text-white border-2 p-2 border-red-800">Log In</button>
  
  )
}

export default AuthButton