"use client"
import React from 'react'
import { useSession } from "next-auth/react"

import { Loading, TableDataRow, Tablehead } from '@/Components'
import { ClientData } from '@/types/typedef'
import useSWR from 'swr'
import { hosturl as url } from '@/utils/host'
import { TableBody, TableContainer } from '@mui/material'
import TableNav from '@/Components/TableNav'

const Clients = () => {
  

  const { data: session, status} = useSession()


  const fetcher = (...args) => fetch(...args,{
    method: "GET",
    headers:{
      authorization: `Bearer ${session?.user.token}`
    }
  }).then(res => res.json())

  const { data: dataObj, error, isLoading} = useSWR(`${url}/api/customers`, fetcher)
  
  let loadedData=[]

  for (const key in dataObj?.data) {
    loadedData.push(dataObj.data[key])
  }
  
  if(!dataObj){
    return <Loading />
  }

  return (
    <div>
      <TableNav createLink="CreateClient" btnStyle="bg-blue-500 text-white px-4 w-fit" item="clients" />
      <TableContainer>
        <Tablehead heading1="Name" heading2="Email" heading3="Phone" heading4="Address" heading5="Handler" />
        
       <TableBody>
       {
        loadedData?.map(({ _id, customerName, contactEmail, phoneNumber, officeAddress, state, adminId}: ClientData)=>{
          return <TableDataRow key={_id} data1={customerName} data2={contactEmail} data3={phoneNumber}
          data4={state} data5={0}  />
        })
       
       }
       </TableBody>
      </TableContainer>
    </div>
  )
}

export default Clients