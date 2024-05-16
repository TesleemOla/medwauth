"use client"

import React from 'react'
import { signIn, signOut } from  "next-auth/react"

const AuthButton = ({typer}) => {
  return (
    typer === "signIn"?
    <button onClick={() => signIn()} className="text-white border-white">Log In</button>
    :<button onClick={() => signOut()} className="text-white border-white">Log Out</button>
  
  )
}

export default AuthButton