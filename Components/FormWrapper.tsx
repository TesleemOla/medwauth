import React from 'react'

const formWrapper = ({ children}: any) => {
  return (
    <div className="w-4/5 h-full bg-white absolute top-0">
        {children}
    </div>
  )
}

export default formWrapper