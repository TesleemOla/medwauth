"use client"
import React, { useState } from 'react'
import  FetchAllItems  from './_data'
import { useSession } from 'next-auth/react'
import { Drugdata } from '@/types/typedef'
import Table from '@/Components/Table'


const DashboardPage = () => {
  const [drugs, setDrugs ] = useState()
 const {data: session, status} = useSession()


  // Render your dashboard content here
  return (
    <div>
     { status === "authenticated" &&
      <Table token = {session?.user.token} item="drugs"/>}
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