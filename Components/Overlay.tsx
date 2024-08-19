import React from 'react'

const Overlay = ({ children}:{children: React.ReactNode}) => {
  return (
    <div className="border-black border-solid border-2 h-3/4 w-4/5 rounded-xl absolute mx-auto bg-white">
        {children}
    </div>
  )
}

export default Overlay