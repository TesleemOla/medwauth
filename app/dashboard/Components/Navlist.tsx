"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface listItem {
    children: React.ReactElement,
    path: String
}

const Navlist = ({children, path}:listItem) => {
  const pathname = usePathname()

  const isActive = pathname === path

  // console.log(isActive)
  return (
    <Link className={`${isActive && 'bg-blue-500' 
      }flex justify-center align-center hover:bg-blue-300`}
    // {'flex justify-center align-center hover:bg-blue-300 `${pathname} === path && bg-blue-300`' }
     href={`/${path}` }>
      <p className="flex flex-row justify-between h-20 w-60 p-2">
          {children}
        </p>  
      </Link>
  )
}

export default Navlist