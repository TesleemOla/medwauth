"use client"
import React from 'react'
import { useSession } from "next-auth/react"

import { Loading, TableDataRow, Tablehead, TableNav } from '@/app/dashboard/Components'
import { ClientData } from '@/types/typedef'
import useSWR from 'swr'
import { hosturl as url } from '@/utils/host'
import { TableBody, TableContainer, Table } from '@mui/material'


const Clients = () => {
  

  const { data: session, status} = useSession()


  const fetcher = (str:string) => fetch(str,{
    method: "GET",
    headers:{
      authorization: `Bearer ${session?.user.token}`
    }
  }).then(res => res.json())

  const { data: dataObj, error, isLoading} = useSWR(session?`${url}/api/customers`:null, fetcher)
  
  let loadedData=[]

  for (const key in dataObj?.data) {
    loadedData.push(dataObj.data[key])
  }
  
  if(!dataObj){
    return <Loading />
  }

  return (
    <div>
      <TableNav item="Customers" createLink="clients/CreateClient" />
      <TableContainer>
        <Table>
        <Tablehead heading1="Name" heading2="Email" heading3="Phone" heading4="Address" heading5="Handler" />
        
       <TableBody>
       {
        loadedData?.map(({ _id, customerName, contactEmail, phoneNumber, officeAddress, state, adminId}: ClientData)=>{
          return <TableDataRow key={_id.toString()} data1={customerName} data2={contactEmail} data3={phoneNumber}
          data4={state}  />
        })
       
       }
       </TableBody>
       </Table>
      </TableContainer>
    </div>
  )
}

export default Clients