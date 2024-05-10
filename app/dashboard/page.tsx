'use client'
import React from 'react'
import Provider from "@/app/Provider"
import { useSession } from 'next-auth/react'
import SummaryCard from '@/Components/SummaryCard'

const DashboardPage = () => {
  const { data: session } = useSession();
  if (!session) {
    // Redirect to login page if not authenticated
    return <p>Please log in to access the dashboard.</p>;
  }

  // Render your dashboard content here
  return (
    <Provider session={session}>
    <div>

      <SummaryCard></SummaryCard>
      <SummaryCard></SummaryCard>
      <SummaryCard></SummaryCard>
    </div>
    </Provider>
  )
}

export default DashboardPage