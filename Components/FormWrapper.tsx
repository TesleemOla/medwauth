import React from 'react'

const formWrapper = ({ children}: any) => {
  return (
    <div className="w-4/5 h-full bg-white fixed top-0 left-20 border-black border-solid border-2">
        {children}
    </div>
  )
}

export default formWrapper