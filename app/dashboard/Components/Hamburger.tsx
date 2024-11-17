"use client"
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

type openers = {
  isOpen: boolean,
  setIsOpen: (...args: any)=>void
}
const Hamburger = ({ isOpen, setIsOpen}: openers) => {
    
  return (
    <div className="lg:hidden">
          <button className="border-solid rounded-full border-black font-extrabold"
          onClick={()=> setIsOpen(()=>!isOpen)}
          >
        {
            !isOpen ? <GiHamburgerMenu /> : <IoClose />
        }
        </button>
    </div>
  )
}

export default Hamburger