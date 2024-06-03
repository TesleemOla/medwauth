'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useData } from '@/utils/data';
import { TableRow, Tablehead } from '@/Components';

const ManufacturerPage = () => {

  const { data:session, status} = useSession();

  const fetcher=(...args)=> fetch(...args,{
    method: 'GET',
    headers: {
      authorization: `BEarer ${session?.user.token}`
    }

  })
  .then(res=>res.json())

  const { dataObj, isError, isLoading}= useData("manufacturers", fetcher)

  const loadedData =[];

  if(!isError && !isLoading){
    for(const key in dataObj){
      loadedData.push(dataObj[key])
    }
  }

  return (
    <div>
      <table>
        <Tablehead heading1="Name" heading2='phone' heading3="Address" heading4="Date Created"
        heading5="Date Modified" heading6="Status" /> 
    
        {
          loadedData.map(({_id,name,phoneNumber,address,status,createdAt, updatedAt})=>{
            return <TableRow key={_id} data1={name} data2={phoneNumber} data3={address} data4={createdAt.slice(0,10)}
            data5={updatedAt.slice(0,10)} data6={status} />
          })
        }
      </table>
    </div>
  )
}

export default ManufacturerPage