"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import TableNav from '@/Components/TableNav'
import TableRow from '@/Components/TableDataRow'
import FetchAllItems from '@/app/dashboard/_data'
import { Drugdata } from '@/types/typedef'
import { SummaryCard, Tablehead } from '@/Components'
import { useData } from '@/utils/data'
import TableDataRow from '@/Components/TableDataRow'
import { TableBody, TableContainer } from '@mui/material'



const DashboardPage = () => {

  const { data: session, status } = useSession()

  const fetcher = (...args: any[]) => fetch(...args, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.user.token}`
    }
  })
    .then(res => (res.json()))


  const { dataObj, isError: drugError, isLoading: drugLoading } = useData("drugs", fetcher)
  const { dataObj: Categories, isError: catError, isLoading: catLoad } = useData("drugCategory", fetcher)
  const { dataObj: Inventory, isError: invError, isLoading: invLoading } = useData("inventories", fetcher)


  let loadedData = []
  for (const key in dataObj) {
    loadedData.push(dataObj[key])
  }


  let categoryData = [];
  for (const key in Categories) {
    categoryData.push(Categories[key])
  }

  let inventoryData = [];
  for (const key in Inventory) {
    inventoryData.push(Inventory[key])
  }


  if (session) {
    // Render your dashboard content here
    return (
      <div>
        <div className="flex my-4 ">
         
        </div>
        <TableNav item="drugs" btnStyle={`bg-black text-white p-2`} />
        <TableContainer>
          <Tablehead heading1="drugName" heading2="categoryId" heading3="Description"
            heading4="treatmentFor" heading5="packageType" heading6="noInPackage" heading7={undefined} heading8={undefined} heading9={undefined} heading10={undefined} />
          <TableBody>

            {
              loadedData.map(({ _id, categoryId, drugName,
                drugDescription, treatmentUsedFor, packageType, noInPackage
              }) => {
                return <TableDataRow key={_id} data1={drugName} data2={categoryId.name} data3={drugDescription}
                  data4={treatmentUsedFor} data5={packageType} data6={noInPackage} data7={null} data8={null} data9={null} data10={null} />
              })
            }

          </TableBody>
        </TableContainer>
      </div>
    )
  } return <div>User not Authorized</div>

}

export default DashboardPage


