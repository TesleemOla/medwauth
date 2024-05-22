
import React from 'react'
import { Tablehead, TableRow} from '@/Components'
import TableNav from '@/Components/TableNav'
import  FetchAllItems  from './_data'




const DashboardPage = async() => {


  // if (!session) {
  //   // Redirect to login page if not authenticated
  //   return <p>Please log in to access the dashboard.</p>;
  // }
  // Render your dashboard content here
  return (
    <div>
      <TableNav item='all items' btnStyle='w-15 p-2 mx-2 border-black-500 inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'/>
    <table>
      <Tablehead heading1="tuple" heading2="lilod" heading3="kiger" heading4="loocd" heading5={"golt"} heading6={"seria"} heading7={"seria"} heading8={undefined} heading9={undefined} heading10={undefined} />
      {/* Table here */}
      <tbody>
        <TableRow data1="tuple" data2="lilod" data3="kiger" data4="loocd" data5={"golt"} data6={"seria"} data7={"seria"} data8={undefined} data9={undefined} data10={undefined} />
      </tbody>
    </table>
    </div>
  )
}

export default DashboardPage