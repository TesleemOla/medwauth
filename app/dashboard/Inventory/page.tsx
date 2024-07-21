'use client'
import { TableDataRow, Tablehead } from '@/Components'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useData, fetcher } from '@/utils/data'



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
        <table>
            <Tablehead heading1="Name" heading2="Manufactured Date" heading3="Quantity in Stock" heading4="manufacturer"/>
         
            {
                  loadedData.map(({ _id, batchNumber, clientId, drugId, drugName, expiryDate,
                     manufacturedDate, manufacturerId, quantityStock, supplierId})=>{
                        return <TableDataRow key={_id} data1={drugName} data2={manufacturedDate.slice(0,10)} data3={quantityStock}
                        data4={manufacturerId} />
                     })
            }
        </table>
    </div>
  )
}

export default Inventorypage