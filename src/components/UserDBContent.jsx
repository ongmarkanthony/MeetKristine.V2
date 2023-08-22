import { useState } from "react";
import UserTotalWorkHours from "./UserWorkHours";
import Calendar from "./Calendar";
import HRAnnouncement from "./Announcement";
import TaskBar from "./TaskBar";
import TaskSummary from "./TaskSummary";
import ToDo from "./ToDo";

const UserDBContent = () => {
  return (
<>
<div className="flex flex-col bg-red-500">
    <div className="grid grid-cols-10 grid-rows-5 gap-4">
        <div className="col-span-2 row-span-2 col-start-2 bg-cyan-600 h-1/2 mt-15">
        </div>
        <div className="col-span-2 row-span-2 col-start-4 bg-cyan-600 h-1/2 mt-15">
        <UserTotalWorkHours/>
        </div>
        <div className="col-span-2 row-span-2 col-start-6 bg-cyan-600 h-1/2 mt-15">
         <TaskSummary/>
        </div>
        <div className="col-span-2 row-span-2 col-start-8 bg-cyan-600 h-1/2 mt-15">
        {/* <Card4 /> */}
        </div>
        <div className="col-span-3 row-span-3 row-start-3 bg-blue-300 -mt-20 w-full">
        <HRAnnouncement/>
        </div>
        <div className="col-span-4 row-span-3 col-start-4 row-start-3 w-3/4 -mt-20">
        <Calendar />
        </div>
        <div className="col-span-3 row-span-3 col-start-8 row-start-3 w-3/4 -mt-20">
        <ToDo/>
        </div>
    </div>
</div>
</>     
);
};

export default UserDBContent;


    