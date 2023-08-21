import axios from "axios";
import { useEffect, useState } from "react";

const LeaveCredits = () => {
  const [leaveCredits, setLeaveCredits] = useState({
    sickLeave: 5,
    vacationLeave: 10,
    personalLeave: 5,
  });
  const [usedLeaves, setUsedLeaves] = useState({
    sickLeave: 0,
    vacationLeave: 0,
    personalLeave: 0,
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
const fetchUserData = () => {
  axios.get("")
    .then(response => {
      const data = response.data;
      setUser(data);
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });
};

    fetchUserData();
  }, []);

  useEffect(() => {
const fetchUsedLeaves = async () => {
  try {
    if (user) {
      const url = `http://localhost:8000/api/v1/users/${user.id}`;
      const response = await fetch(url);
      const data = await response.json();
      setUsedLeaves(data);
    }
  } catch (error) {
    console.error("Error fetching used leave credits:", error);
  }
};

    fetchUsedLeaves();
  }, [user]);

  useEffect(() => {
    setLeaveCredits((prevLeaveCredits) => ({
      sickLeave: prevLeaveCredits.sickLeave - usedLeaves.sickLeave,
      vacationLeave: prevLeaveCredits.vacationLeave - usedLeaves.vacationLeave,
      personalLeave: prevLeaveCredits.personalLeave - usedLeaves.personalLeave,
    }));
  }, [usedLeaves]);

  return (
    <div className="flex justify-start flex-col min-w-full h-full">
      <h1 className="text-xl font-bold mb-2 md:text-xl ">Leave Credits</h1>
      <div className="text-lg md:text-lg p-2">
        Available Leave Credits:
        <ul className="pl-6 md:pl-5">
          <li>
            Sick Leave: {leaveCredits.sickLeave} (Used: {usedLeaves.sickLeave})
          </li>
          <li>
            Vacation Leave: {leaveCredits.vacationLeave} (Used: {usedLeaves.vacationLeave})
          </li>
          <li>
            Personal Leave: {leaveCredits.personalLeave} (Used: {usedLeaves.personalLeave})
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeaveCredits;