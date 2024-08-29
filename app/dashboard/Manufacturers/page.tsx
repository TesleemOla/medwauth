'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useData } from '@/utils/data';
import { TableDataRow, Tablehead, TableNav } from '@/app/dashboard/Components';
import { TableBody, TableContainer, Table } from '@mui/material';

const ManufacturerPage = () => {

  const { data:session, status} = useSession();
  
  const fetcher=(str: string)=> fetch(str,{
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.user.token}`
    }

  })
  .then(res=>res.json())

  const { dataObj, isError, isLoading}= useData("manufacturers", fetcher, session)

  const loadedData =[];

  if(!isError && !isLoading){
    for(const key in dataObj){
      loadedData.push(dataObj[key])
    }
  }

  return (
      <div>
        <TableNav item="Manufacturers" createLink={`api/manufacturers`} />
        <TableContainer>
          <Table>
          <Tablehead heading1="Name" heading2='phone' heading3="Address" heading4="Date Created"
        heading5="Date Modified" heading6="Status" heading7={undefined} heading8={undefined} heading9={undefined} heading10={undefined} /> 
      
        <TableBody>
          {
            loadedData.map(({_id,name,phoneNumber,address,status,createdAt, updatedAt})=>{
              return <TableDataRow key={_id} data1={name} data2={phoneNumber} data3={address} data4={createdAt.slice(0, 10)}
              data5={updatedAt.slice(0, 10)} data6={status} data7={null} data8={null} data9={null} data10={null} />
            })
          }
        </TableBody>
        </Table>
        </TableContainer>
      </div>
  )
}

export default ManufacturerPage