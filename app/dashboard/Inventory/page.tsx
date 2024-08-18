'use client'
import { TableDataRow, Tablehead, TableNav } from '@/Components'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useData } from '@/utils/data'
import { TableBody, TableContainer } from '@mui/material'



const Inventorypage = () => {

    const {data:session, status} = useSession()

    const fetcher=(...args)=> fetch(...args,{
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + session?.user.token
        }
    })
    .then(res=> res.json())

    const { dataObj, isError, isLoading} = useData(`inventories`, fetcher)

    const loadedData =[]
    if(status==="authenticated"){
        for(const key in dataObj){
            loadedData.push(dataObj[key])
        }
    }

    if(isLoading){
        return <h1>...Loading</h1>
    }
  return (
        <div>

          <TableNav item="Inventory" createLink={`/api/inventories`} />

        <TableContainer>
            <Tablehead heading1="Name" heading2="Manufactured Date" heading3="Quantity in Stock" heading4="manufacturer" heading5={undefined} heading6={undefined} heading7={undefined} heading8={undefined} heading9={undefined} heading10={undefined}/>
         <TableBody>
            {
                  loadedData.map(({ _id, batchNumber, clientId, drugId, drugName, expiryDate,
                     manufacturedDate, manufacturerId, quantityStock, supplierId})=>{
                        return <TableDataRow key={_id} data1={drugName} data2={manufacturedDate.slice(0, 10)} data3={quantityStock}
                        data4={manufacturerId} data5={null} data6={null} data7={null} data8={null} data9={null} data10={null} />
                     })
            }
            </TableBody>
        </TableContainer>
   </div>
  )
}

export default Inventorypage