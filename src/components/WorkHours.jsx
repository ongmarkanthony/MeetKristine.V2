import React, { useState } from 'react'
import { ClockIcon } from '@heroicons/react/24/solid'



const WorkHours = () => {
    const [totalHours, setTotalHours] = useState(48.36)
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Total Hours per Week</h1>
        <ClockIcon className=" flex flex-col w-10 h-10 mt-4" /> 
        <p className="text-lg">Total Hours: {totalHours}</p>
        </div>
  </div>
  )
}

export default WorkHours;