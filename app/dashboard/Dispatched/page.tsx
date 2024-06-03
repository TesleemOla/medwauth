'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const Dispatched = () => {

  const { data:session, status} = useSession()
  return (
    <div>Dispatched</div>
  )
}

export default Dispatched