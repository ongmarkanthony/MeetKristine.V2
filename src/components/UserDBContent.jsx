import React, { useState } from 'react'
import LeaveCredits from './LeaveCredits'
import { ClockIcon } from '@heroicons/react/24/solid'
import TaskChecklist from './ToDo';
import Calendar from './Calendar';
import TaskToDo from './TaskSummary';


const UserDBContent = () => {
    const [totalHours, setTotalHours] = useState(48.36);

  return (
    <div className=" w-screen flex flex-col">
            <div className="flex flex-row ml-5 mr-5">
                <div className="p-8 mt-10 ml-10  shadow-md rounded-md h-3/4 w-1/4">
                    <LeaveCredits />
                </div>
                <div className="p-8 mt-10 ml-10  shadow-md rounded-md h-1/2 w-1/4">
                <div className="flex flex-row">
                <ClockIcon className="w-30  mt-8 mr-10 text-gray-950" /> 
                <h1 className="text-3xl font-semibold">Total Work Hours/Week</h1>
                </div>
                <h1 className="text-5xl font-bold font-mono text-end tracking-lighter">{totalHours}</h1>
            </div>
                <div className="p-8 mt-10 ml-10 shadow-md rounded-md h-1/2 w-1/4">
                <h2 className="text-2xl font-semibold mb-4">Task To Do:</h2>
                    <div>
                    <h2 className="text-xl font-medium mb-4">Number of Tasks:</h2>
                    <TaskToDo/>
                    </div>
                </div>
            </div>
        <div className="flex flex-col w-screen">
            <div className="grid grid-cols-2 gap-4 ml-10">
                <div className="bg-cyan-200 p-4 w-1/2">
                    <TaskChecklist/>
                </div>
                <div className="bg-cyan-200 p-4 w-1/2 ">
                    <Calendar/>
                </div>
            </div>
        </div>
    </div>
    )
  }
export default UserDBContent;