import React, { useState } from 'react'
import LeaveCredits from './LeaveCredits'
import { ClockIcon } from '@heroicons/react/24/solid'
import TaskChecklist from './ToDo';
import Calendar from './Calendar';
import TaskToDo from './TaskSummary';


const UserDBContent = () => {
    const [firstName, setFirstName] = useState("");
    const [totalHours, setTotalHours] = useState(48.36);
    const [userAvatar, setUserAvatar] = useState("https://previews.123rf.com/images/virtosmedia/virtosmedia2301/virtosmedia230116239/197245633-portrait-of-a-young-woman-in-glasses-and-a-hoodie-vector-illustration.jpg");


  return (
    <div className=" w-screen flex flex-col bg-cyan-200">
        <header className="p-4 bg-blue-500 text-white flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {firstName}</h1>
        <img src={userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full"/>
        </header>
    <div className="flex flex-row ml-5 mr-5">
        <div className="p-8 mt-10 ml-10 bg-cyan-400 shadow-md rounded-md h-3/4 w-1/3">
            <LeaveCredits />
        </div>
        <div className="p-8 mt-10 ml-10 bg-cyan-400 shadow-md rounded-md h-3/4 w-1/3">
        <div className="flex flex-row">
        <ClockIcon className="w-35  mt-8 mr-10 text-gray-950" /> 
        <h1 className="text-3xl font-semibold">Total Work Hours/Week</h1>
        </div>
        <h1 className="text-6xl font-bold font-mono text-end tracking-lighter mb-6">{totalHours}</h1>
       </div>
        <div className="p-8 mt-10 ml-10 bg-cyan-400 shadow-md rounded-md h-3/4 w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Task To Do:</h2>
            <div>
            <h3 className="text-xl font-medium mb-2">Number of Tasks:</h3>
            <TaskToDo/>
            </div>
        </div>
    </div>
        <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 ml-10 bg-cyan-400">
                <div className="bg-cyan-200 p-4">
                    <TaskChecklist/>
                </div>
                <div className="bg-cyan-200 p-4 mr-10 ">
                    <Calendar/>
                </div>
            </div>
        </div>
    </div>

    )
  }
export default UserDBContent;