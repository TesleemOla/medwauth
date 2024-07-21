"use client"
import React, { Fragment} from 'react'

import { tableNav } from '@/types/typedef'


const TableNav = ({item, btnStyle}: tableNav) => {
  return (
    <header>
      <nav>
        
        <div className="w-full max-w-md px-4 flex flex-row h-10">
          <input className='bg-blue-100' />
          
        
          <button className={btnStyle}> Search {item}</button>
          <button className={btnStyle}>Add New</button>
        </div>


      </nav>
    </header>
  )
}

export default TableNav