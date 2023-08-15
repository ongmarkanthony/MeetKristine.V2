import React from 'react'
import FileUpload from '../components/FileUpload'
import UserFooter from '../components/UserFooter'
import MainSidebar from '../components/globalSidebar'

const Documents = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-col sm:flex-row flex-grow">
      <MainSidebar />
        <FileUpload/>
      </div>
      <UserFooter />
      </div>
    </>
  )
}

export default Documents;