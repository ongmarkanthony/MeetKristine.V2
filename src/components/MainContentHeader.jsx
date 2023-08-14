import React from 'react'

const MainContentHeader = () => {
  return (
    <div className="flex justify-between items-center">
        <h2>Dashboard</h2>
        <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full relative">
            <div className="absolute bg-red-500 w-4 h-4 rounded-full top-0 right-0"></div>
        </div>
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        </div>
    </div>
  )
}

export default MainContentHeader