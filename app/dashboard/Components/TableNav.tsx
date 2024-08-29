"use client"
import { tableNav } from '@/types/typedef'
import Link from 'next/link'


const TableNav = ({item, createLink}: tableNav) => {
  return (
    <header>
      <nav>
        
        <div className="w-full px-4 mb-2 flex flex-row h-10 gap-10">
          <input className='bg-white px-2 border-solid border-2 border-black' />
          
        
          <button className='bg-black text-white text-xl md:text-sm p-2 w-fit'> Search {item}</button>
          <Link href={createLink}><button className='bg-black text-white p-2 w-fit'>Create {item}</button></Link>
        </div>


      </nav>
    </header>
  )
}

export default TableNav