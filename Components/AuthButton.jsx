"use client"

import React from 'react'
import { useSession, signIn, signOut } from  "next-auth/react"
import { hosturl } from '@/utils/host'

const AuthButton = () => {

  const { status } = useSession()
  return (
    status === "authenticated"?
    <button onClick={() => signOut()} className="text-black border-white">Log Out</button>:
    <button onClick={() => signIn()} className="text-black border-white">Log In</button>
  
  )
}

export default AuthButton