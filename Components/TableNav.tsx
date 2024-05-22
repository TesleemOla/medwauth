"use client"
import React, { Fragment} from 'react'
import { Description, Field, Input, Label, Button } from '@headlessui/react'
import { tableNav } from '@/types/typedef'
import clsx from 'clsx'

const TableNav = ({item, btnStyle}: tableNav) => {
  return (
    <header>
      <nav>
        
        <div className="w-full max-w-md px-4 flex flex-row h-10">
          
            <Input type="text" name="full_name" as={Fragment}>
              {({ focus, hover }) => <input className={clsx('border', focus && 'bg-blue-100', hover && 'shadow')} />}
            </Input>
        
          <Button className={btnStyle}> Search {item}</Button>
          <Button className={btnStyle}>Add New</Button>
        </div>


      </nav>
    </header>
  )
}

export default TableNav