"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { Tablehead, TableDataRow, Loading, TableNav } from '@/app/dashboard/Components'
import { useData } from '@/utils/data'
import { TableBody, TableContainer, Table } from '@mui/material'



const Drugs = () => {

  const { data: session, status } = useSession()
  const fetcher = (str: string) => fetch(str, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.user.token}`
    }
  })
    .then(res => res.json())


  const { dataObj, isError, isLoading } = useData("drugs", fetcher, session)


  let loadedData = []
  for (const key in dataObj) {
    loadedData.push(dataObj[key])
  }



  // if(session){
  // Render your dashboard content here
  return (
    <div>
      <TableNav item="drugs" createLink={`Drugs/CreateDrug`} />
      <TableContainer>
        <Table>
        <Tablehead heading1="drugName" heading2="categoryId" heading3="Description" heading4="ReOrder Level"
        heading5="treatmentFor" heading6="package Type" heading7="noInPackage" 
         />

    {
      isLoading? 
      <Loading/>:  (
        <TableBody>

          {
            loadedData.map(({ _id, categoryId, drugName,
              drugDescription, reorderLevel, treatmentUsedFor, packageType, noInPackage
            }) => {
              return <TableDataRow key={_id} data1={drugName} data2={categoryId.name} data3={drugDescription} data4={reorderLevel}
              data5={treatmentUsedFor} data6={packageType} data7={noInPackage} />
            })
          }
        </TableBody>
        
       )}
        </Table>
      </TableContainer>
    </div>
  )


}

export default Drugs


