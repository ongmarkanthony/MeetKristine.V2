import React from 'react'
import UserFooter from '../components/UserFooter'
import FileUpload from '../components/FileUpload'
import NavLink from '../components/NavLink'

const Documents = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-col sm:flex-row flex-grow">
        <NavLink/>
        <FileUpload/> 
      </div>
      <UserFooter />
      </div>
    </>
  )
}

export default Documents;