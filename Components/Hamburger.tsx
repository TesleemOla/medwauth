"use client"
import React, { useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="lg:hidden">
          <button className="border-solid rounded-full border-black font-extrabold"
          onClick={()=> setIsOpen(!isOpen)}
          >
        {
            isOpen ? 
                
                  <GiHamburgerMenu />
                
                :
               
                  <IoClose />
          
        }
        </button>
    </div>
  )
}

export default Hamburger