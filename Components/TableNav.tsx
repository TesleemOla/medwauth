"use client"
import { tableNav } from '@/types/typedef'
import Link from 'next/link'


const TableNav = ({item, btnStyle, createLink}: tableNav) => {
  return (
    <header>
      <nav>
        
        <div className="w-full max-w-md px-4 flex flex-row h-10 gap-10">
          <input className='bg-white' />
          
        
          <button className={btnStyle}> Search {item}</button>
          <Link href={`${item}/${createLink}`}><button className={btnStyle}>Add New</button></Link>
        </div>


      </nav>
    </header>
  )
}

export default TableNav