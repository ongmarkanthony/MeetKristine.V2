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
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchUsedLeaves = async () => {
      try {
        if (user) {
          const response = await fetch(`/api/leaveCredits/${user.id}`);
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
    <div className="p-4 border border-gray-300 rounded md:p-8">
      <p className="text-xl md:text-2xl"> Welcome, {user ? user.name : "User"}</p>
      <h1 className="text-2xl font-bold mb-4 md:text-3xl ">Leave Credits</h1>

      <p className="text-xl md:text-2xl">
        Current leave credits:
        <ul className="list-disc pl-6 md:pl-5">
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
      </p>
    </div>
  );
};

export default LeaveCredits;