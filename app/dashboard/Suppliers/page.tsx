"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useData } from '@/utils/data'
import { TableDataRow, Tablehead } from '@/Components'
import { TableBody, TableContainer } from '@mui/material'

const Suppliers = () => {
  const { data: session, status} = useSession()

  const fetcher =(...args)=>fetch(...args,{
    method: 'GET',
    headers:{
      authorization: `Bearer ${session?.user.token}`
    }
  })
  .then(res=>res.json())

  const { dataObj, isError, isLoading} = useData("suppliers", fetcher)


    const loadedData =[]
  if (status === "authenticated") {
    for(const key in dataObj){
      loadedData.push(dataObj[key])
    }
  }
  return (
    <div>
      <TableContainer>
        <Tablehead heading1="Name" heading2="Address" heading3="Phone" heading4="userId" />
       
       <TableBody>
        {
          loadedData.map(({_id, name, address, phoneNumber, userId})=>{
            return <TableDataRow key={_id} data1={name} data2={address} data3={phoneNumber} data4={userId.firstName} />
          })
        }
        </TableBody>
      </TableContainer>
    </div>
  )
}

export default Suppliers