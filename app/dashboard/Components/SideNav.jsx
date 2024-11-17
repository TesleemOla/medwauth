"use client"
import React, { useState } from 'react'
import Navlist from './Navlist'
import { useSession } from 'next-auth/react'
import Hamburger from './Hamburger'


const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false)
   

    const {data } = useSession()

  return (
    <aside className='w-full md:max-w-72 shadow-2xl h-4/5'>
       <Hamburger isOpen={ isOpen} setIsOpen={setIsOpen} />
       {
        isOpen &&
        <ul className="flex lg:hidden flex-col">
          <Navlist path="dashboard">
            
                Dashboard
            </Navlist>
              
            {data?.user.access==="admin" && <Navlist path="dashboard/clients">
            Clients</Navlist>}
            {data?.user.access==="admin" && <Navlist path="dashboard/Dispatched">
              
                Dispatched Drugs
                </Navlist>}
            <Navlist path="dashboard/Drugs">
                Drugs
            </Navlist>        
            {data?.user?.access==="admin" && <Navlist path="dashboard/DrugCategories"> 
                Drug Category</Navlist>}
            <Navlist path="dashboard/Inventory"> 
            
                Inventory</Navlist>
            <Navlist path="dashboard/Suppliers">
               
                Suppliers
            </Navlist>
            <Navlist path="dashboard/Manufacturers">
                
                Manufacturers</Navlist>
        </ul>
       }
        <ul className="hidden lg:flex flex-col">
          <Navlist path="dashboard">
            
                Dashboard
            </Navlist>
              
            {data?.user.access==="admin" && <Navlist path="dashboard/clients">
            Clients</Navlist>}
            {data?.user.access==="admin" && <Navlist path="dashboard/Dispatched">
              
                Dispatched Drugs
                </Navlist>}
            <Navlist path="dashboard/Drugs">
                Drugs
            </Navlist>        
            {data?.user?.access==="admin" && <Navlist path="dashboard/DrugCategories"> 
                Drug Category</Navlist>}
            <Navlist path="dashboard/Inventory"> 
            
                Inventory</Navlist>
            <Navlist path="dashboard/Suppliers">
               
                Suppliers
            </Navlist>
            <Navlist path="dashboard/Manufacturers">
                
                Manufacturers</Navlist>
        </ul>
    </aside>
  )
}

export default SideNav