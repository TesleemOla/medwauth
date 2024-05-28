"use client"

import React from 'react'
import { useSession, signIn, signOut } from  "next-auth/react"

const AuthButton = () => {

  const { status } = useSession()
  return (
    status === "authenticated"?
    <button onClick={() => signOut()} className="text-white border-white">Log Out</button>:
    <button onClick={() => signIn()} className="text-white border-white">Log In</button>
  
  )
}

export default AuthButton