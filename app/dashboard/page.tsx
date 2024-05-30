"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import TableNav from '@/Components/TableNav'
import TableRow from '@/Components/TableDataRow'
import FetchAllItems from '@/app/dashboard/_data'
import { Drugdata } from '@/types/typedef'
import { Tablehead } from '@/Components'



const DashboardPage =() => {

  const [dataObj, setDataObj] = useState<Drugdata[]>()
  const { data:session, status} = useSession()
  
  

useEffect(()=>{
  async function dataGetter() {
    if (session) {
      return await FetchAllItems(session?.user.token, "drugs")
    }

  }
  const apiData = dataGetter()
  apiData.then(res => setDataObj(res))
},[session])

  


 

// if(session){
  // Render your dashboard content here
  return (
    <div>
      <TableNav item="drugs" btnStyle={`bg-black text-white p-2`}/>
      <table>
        <Tablehead  heading1="drugName" heading2="categoryId" heading3="Description"
        heading4="treatmentFor" heading5="packageType" heading6="noInPackage"/>
        <tbody>

          {
            dataObj?.map(({ _id, categoryId, productId, drugName, scientificName, reOrderLevel,
              drugDescription, treatmentUsedFor, packageType, noInPackage })=> <TableRow key={_id}
                data1={drugName} data2={categoryId} data3={drugDescription} data4={treatmentUsedFor} data5={packageType}
                data6={noInPackage} />)
          }
        </tbody>
      </table>      
    </div>
  )


}

export default DashboardPage


// export const getStaticProps=async()=>{
//   const token = getCookie("token")
//   console.log(token)
//   const data = await FetchAllItems(token, "all Items")
//   return{
//     props: {
//       data
//     }
//   }
// }