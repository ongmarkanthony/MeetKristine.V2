import React from 'react'
import UserFooter from '../components/UserFooter'
import Sidebar from '../components/Sidebar'
import FileUpload from '../components/FileUpload'

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