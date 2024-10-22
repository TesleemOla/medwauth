"use client"

import { useSession } from 'next-auth/react'
import { Loading } from '@/app/dashboard/Components'
import { useData } from '@/utils/data'






const DashboardPage = () => {

  const { data: session, status } = useSession()

  const fetcher = (str:string) => fetch(str, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.user.token}`
    },
    cache:"force-cache"
  })
    .then(res => (res.json()))


  const { dataObj: countData, isError: countError, isLoading: countLoading } = useData("summary/counts", fetcher, session)
  const { dataObj: categories, isError: catError, isLoading: catLoad } = useData("summary/drugs/categories", fetcher, session)
  const { dataObj: packageData, isError: packageError, isLoading: packageLoading } = useData("summary/drugs/package", fetcher, session)
  const { dataObj: userCount, isError: userError, isLoading: userLoading } = useData(`summary/users/type`, fetcher, session)
  




  if (!session) return <p>Please login to proceed</p>
    
    return (
      <div>
        <div className="flex my-4 ">
         
        </div>
          {JSON.stringify(countData)} <br/>
          {JSON.stringify(categories)} <br/>
          {JSON.stringify(packageData)} <br/>
          {JSON.stringify(userCount)}
        {/* Let's try graphs for all the data points instead of tables */}
      
        {/* <PieChart
          series={[{ data: countData}]}
          {...pieParams}
          colors={['red', 'blue', 'green',"yellow"]} 
        /> */}
        
      </div>
    )
  } 



export default DashboardPage


