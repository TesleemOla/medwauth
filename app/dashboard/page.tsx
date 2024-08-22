"use client"

import { useSession } from 'next-auth/react'
import { Loading, SummaryCard, Tablehead, TableDataRow, TableNav } from '@/Components'
import { useData } from '@/utils/data'
import { TableBody, TableContainer } from '@mui/material'
import useSWR from 'swr'



const DashboardPage = () => {

  const { data: session, status } = useSession()

  const fetcher = (str:string) => fetch(str, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.user.token}`
    }
  })
    .then(res => (res.json()))

  const { data: user, error: userError, isLoading: userLoading} = useSWR("http://localhost:8000/user/all", fetcher)
  const { dataObj, isError: drugError, isLoading: drugLoading } = useData("drugs", fetcher)
  const { dataObj: Categories, isError: catError, isLoading: catLoad } = useData("drugCategory", fetcher)
  const { dataObj: Inventory, isError: invError, isLoading: invLoading } = useData("inventories", fetcher)

  
  let loadedData = []
  for (const key in dataObj) {
    loadedData.push(dataObj[key])
  }
  let userData = []
   for (const key in user?.data){
    userData.push(user.data[key])
   }

  let categoryData = [];
  for (const key in Categories) {
    categoryData.push(Categories[key])
  }

  let inventoryData = [];
  for (const key in Inventory) {
    inventoryData.push(Inventory[key])
    
  }
  console.log(loadedData)
  console.log(categoryData)
  console.log(inventoryData)
  console.log(userData)

  if (session) {
    // Render your dashboard content here
    return (
      <div>
        <div className="flex my-4 ">
         
        </div>

        {/* Let's try graphs for all the data points instead of tables */}
        <TableNav item="drugs" createLink="#" />
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
  } return <Loading />

}

export default DashboardPage


