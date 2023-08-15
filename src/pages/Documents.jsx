import React from 'react'
import GlobalSidebar from '../components/GlobalSidebar'
import FileUpload from '../components/FileUpload'
import UserFooter from '../components/UserFooter'

const Documents = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-col sm:flex-row flex-grow">
      <GlobalSidebar />
        <FileUpload/>
      </div>
      <UserFooter />
      </div>
    </>
  )
}

export default Documents;