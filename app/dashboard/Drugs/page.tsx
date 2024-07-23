"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import TableNav from '@/Components/TableNav'
import { Drugdata } from '@/types/typedef'
import { Tablehead, TableDataRow, Loading } from '@/Components'
import { useData } from '@/utils/data'
import { TableBody, TableContainer } from '@mui/material'



const Drugs = () => {

  const { data: session, status } = useSession()
  const fetcher = (...args: any[]) => fetch(...args, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.user.token}`
    }
  })
    .then(res => res.json())


  const { dataObj, isError, isLoading } = useData("drugs", fetcher)


  let loadedData = []
  for (const key in dataObj) {
    loadedData.push(dataObj[key])
  }

  if (isLoading) {
    return <Loading />
  }


  // if(session){
  // Render your dashboard content here
  return (
    <div>
      <TableNav item="drugs" btnStyle={`bg-black text-white p-2`} />
      <TableContainer>
        <Tablehead heading1="drugName" heading2="categoryId" heading3="Description"
        heading4="treatmentFor" heading5="packageType" heading6="noInPackage" heading7={undefined} heading8={undefined} heading9={undefined} heading10={undefined} />
        <TableBody>

          {
            loadedData.map(({ _id, categoryId, productId, drugName, scientificName,
              reorderLevel, drugDescription, treatmentUsedFor, packageType, noInPackage
            }) => {
              return <TableDataRow key={_id} data1={drugName} data2={categoryId.name} data3={drugDescription}
              data4={treatmentUsedFor} data5={packageType} data6={noInPackage} data7={null} data8={null} data9={null} data10={null} />
            })
          }

        </TableBody>
      </TableContainer>
    </div>
  )


}

export default Drugs


