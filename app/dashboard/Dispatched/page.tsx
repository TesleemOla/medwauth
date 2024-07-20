'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { TableDataRow, Tablehead } from '@/Components'
import useSWR from 'swr'
import { hosturl } from '@/utils/host'


const Dispatched = () => {

  const { data: session, status } = useSession()
  const token = session?.user.token

  const fetcher = (...args) => {
    return fetch(...args, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
  }
  const { data: dataObj, error, isLoading } = useSWR(`${hosturl}/api/dispatched`, fetcher)

  const loadedData = []
  if (!error && !isLoading) {
    for (const key in dataObj?.data) {
      loadedData.push(dataObj.data[key])
    }
  }




  return (
    <div>
      <table>
        <Tablehead heading1="Client" heading2="Inventory" heading3="Quantity" heading4="Date Created"
          heading5="Date Updated" />

        <tbody>
          {
            loadedData.map(({ _id, inventory, quantity, client, createdAt, updatedAt }) => {
              return <TableDataRow key={_id}
                data1={client} data2={inventory._id} data3={quantity} data4={createdAt.slice(0, 10)} data5={updatedAt.slice(0, 10)} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Dispatched