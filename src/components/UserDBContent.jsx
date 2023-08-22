import React from "react"; // Import React if not already imported
import UserTotalWorkHours from "./UserWorkHours";
import Calendar from "./Calendar";
import HRAnnouncement from "./Announcement";
import TaskBar from "./TaskBar";
import TaskSummary from "./TaskSummary";
import ToDo from "./ToDo";
import DBCard1 from "./DBCard1";

const UserDBContent = () => {
  return (

      <div className="grid grid-cols-6 grid-rows-8 gap-4">
          <div className="col-span-6 row-span-2">
            <DBCard1/>
          </div>
          <div className="col-span-2 row-span-6 row-start-3">
          <HRAnnouncement />
          </div>
          <div className="col-span-2 row-span-6 col-start-3 row-start-3">
          <ToDo />
          </div>
          <div className="col-span-2 row-span-6 col-start-5 row-start-3 mt-10">
          <Calendar />
          </div>
      </div>

  );
};

export default UserDBContent;
