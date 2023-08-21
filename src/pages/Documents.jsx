import React from 'react'
import FileUpload from '../components/FileUpload'
import UserFooter from '../components/UserFooter'
import Sidebar from '../components/Sidebar'

const Documents = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-col sm:flex-row flex-grow">
        <Sidebar />
        <FileUpload/>
      </div>
      <UserFooter />
      </div>
    </>
  )
}

export default Documents;