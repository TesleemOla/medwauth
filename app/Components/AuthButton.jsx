"use client"

import React from 'react'
import { signIn, signOut } from  "next-auth/react"

const AuthButton = ({typer}) => {
  return (
    typer === "signIn"?
    <button onClick={() => signIn()}>Log In</button>
    :<button onClick={() => signOut()}>Log Out</button>
  
  )
}

export default AuthButton