import React from 'react'

interface listItem {
    children: React.ReactElement
}

const Navlist = ({children}:listItem) => {
  return (
      <li className="flex flex-row justify-around h-20 w-75">
          {children}</li>
  )
}

export default Navlist