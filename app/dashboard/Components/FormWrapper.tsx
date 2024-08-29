import React from 'react'

const formWrapper = ({ children}: any) => {
  return (
    <div className="w-4/5 h-full bg-white bg-fixed top-0 left-10 border-black border-solid border-2 mx-auto">
        {children}
    </div>
  )
}

export default formWrapper