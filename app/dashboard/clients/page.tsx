"use client"
import React from 'react'
import { useSession } from "next-auth/react"

import { TableRow, Tablehead } from '@/Components'
import { ClientData } from '@/types/typedef'
import useSWR from 'swr'
import { hosturl as url } from '@/utils/host'

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
    return <h1>No data to display</h1>
  }

  return (
    <div>
      <table>
        <Tablehead heading1="Name" heading2="Email" heading3="Phone" heading4="Address" heading5="Handler" />
        
       {/* {
        JSON.stringify(loadedData)
       } */}
       {
        loadedData?.map(({ _id, customerName, contactEmail, phoneNumber, officeAddress, state, adminId}: ClientData)=>{
          return <TableRow key={_id} data1={customerName} data2={contactEmail} data3={phoneNumber}
          data4={state} data5={0}  />
        })
       
       }
      </table>
    </div>
  )
}

export default Clients