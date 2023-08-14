import React from 'react'
import MainContentHeader from './MainContentHeader'
import ProgressBarSection from './ProgressBarSection'
import ExpenseTracking from './ExpenseTracking'

const AdminDBMainContent = () => {
  return (
    <div className="flex-1 p-5">
        <MainContentHeader />
        <ProgressBarSection />
        <ExpenseTracking />
    </div>
    
  )
}

export default AdminDBMainContent