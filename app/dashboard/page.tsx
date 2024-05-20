'use client'
import React from 'react'
import {Provider} from "@/app/Provider"
import { useSession } from 'next-auth/react'
import SummaryCard from '@/Components/SummaryCard'
import TableBody from '@/Components/TableRow'
import Tablehead from '@/Components/Tablehead'
import { getToken } from 'next-auth/jwt'

const DashboardPage = () => {

  // const { data: session } = useSession();
  // if (!session) {
  //   // Redirect to login page if not authenticated
  //   return <p>Please log in to access the dashboard.</p>;
  // }
  // Render your dashboard content here
  return (
    // <Provider session={session}>
    <table>
      <Tablehead heading1="tuple" heading2="lilod" heading3="kiger" heading4="loocd" heading5={"golt"} heading6={"seria"} heading7={"seria"} heading8={undefined} heading9={undefined} heading10={undefined} />
      {/* Table here */}
      <tbody>
        <TableBody heading1="tuple" heading2="lilod" heading3="kiger" heading4="loocd" heading5={"golt"} heading6={"seria"} heading7={"seria"} heading8={undefined} heading9={undefined} heading10={undefined}      />
      </tbody>
    </table>
    // </Provider>
  )
}

export default DashboardPage