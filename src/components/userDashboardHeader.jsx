import React from 'react'

const userDashboardHeader = () => {
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex bg-blue-500 py-4 md:px-10 px-7'>
            <div className = 'font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white px-4'>
                <span>
                    Meet Kristine
                </span>
            </div>
        </div>
    </div>
  )
}

export default userDashboardHeader