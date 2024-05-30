"use client"
import React, { useState, useEffect} from 'react'
import { useSession } from "next-auth/react"
import { FetchAllItems } from '@/utils/data'
import { TableRow, Tablehead } from '@/Components'
import { ClientData } from '@/types/typedef'

const Clients = () => {

  const { data: session, status} = useSession()
  const [dataObj, setDataObj] = useState<ClientData[]>([])

  useEffect(() => {
    async function getData(){
      if(session){
      return await FetchAllItems(session?.user.token, "Customers")
      }
    }
  getData()
  .then(res=> setDataObj(res))
  console.log(dataObj)
  }, [session, dataObj])
  

  return (
    <div>
      <table>
        <Tablehead heading1="Name" heading2="Email" heading3="Phone" heading4="Address" heading5="Handler" />
{/*         
        {dataObj?.map(({_id,customerName, contactEmail, phoneNumber, officeAddress, state, adminId}: ClientData)=> {
        return <TableRow key={_id} data1={customerName} data2={contactEmail}
        data3={phoneNumber} data4={`${officeAddress} ${state}`} data5={adminId}/>
})} */}
      </table>
    </div>
  )
}

export default Clients