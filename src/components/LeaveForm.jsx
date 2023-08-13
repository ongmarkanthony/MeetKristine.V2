import React, { useState } from "react";
import LeaveCredits from "./LeaveCredits";
import Calendar from "./Calendar";

const LeaveForm = () => {
  const [leaveType, setLeaveType] = useState("");
  const [leaveDuration, setLeaveDuration] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [message, setMessage] = useState("");
  const [documents, setDocuments] = useState([]);
  const [leaveDetails, setLeaveDetails] = useState([]);
  const [status, setStatus] = useState("PENDING");
  const [numberOfDays, setNumberOfDays] = useState(0); // Add this state

  const handleLeaveTypeChange = (e) => {
    setLeaveType(e.target.value);
  };

  const handleLeaveDurationChange = (e) => {
    setLeaveDuration(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
    calculateDays(e.target.value, toDate); // Call calculateDays
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
    calculateDays(fromDate, e.target.value); // Call calculateDays
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleDocumentsChange = (e) => {
    setDocuments(Array.from(e.target.files));
  };

  const calculateDays = (fromDate, toDate) => {
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const differenceInTime = end.getTime() - start.getTime(); // Fix variable names
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    setNumberOfDays(differenceInDays);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLeave = {
      leaveType: leaveType,
      leaveDuration: leaveDuration,
      fromDate: fromDate,
      toDate: toDate,
      message: message,
      documents: documents,
      status: status,
    };

    setLeaveDetails([...leaveDetails, newLeave]);

    setLeaveType("");
    setLeaveDuration("");
    setFromDate("");
    setToDate("");
    setMessage("");
    setDocuments([]);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto items-center flex flex-row">
        <div className="lg:w-full px-4 py-2 m-2 bg-red-800 flex flex-col">
            <h1 className="text-xl font-bold text-gray-900 mb-4">Leave Application</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="leaveType" className="block mb-2 text-sm font-medium text-gray-950 dark:text-gray-950">Leave Type:</label>
                <select id="leaveType" className="bg-gray border-gray-300 text-gray-950 text-sm rounded-lg focus:border-blue-500 block w-1/2 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-950 dark-focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleLeaveTypeChange} value={leaveType}>
                    <option value="">Select Leave Type</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Personal Leave">Personal Leave</option>
                    <option value="Vacation Leave">Vacation Leave</option>
                    <option value="Others">Others</option>
                </select>
                </div>
                <div>
                <div className="mt-4 ">
                <strong>Number of Days:</strong> {numberOfDays}
            </div>
                </div>
                <div>
                <label htmlFor="fromDate" className="block mb-2 text-sm font-medium text-gray-950 dark:text-gray-950">From:</label>
                <input
                    type="date"
                    id="fromDate"
                    onChange={handleFromDateChange}
                    value={fromDate}
                />
                </div>
                <div>
                <label htmlFor="toDate" className="block mb-2 text-sm font-medium text-gray-950 dark:text-gray-950">To:</label>
                <input
                    className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                    type="date"
                    id="toDate"
                    onChange={handleToDateChange}
                    value={toDate}
                />
                </div>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-950 dark:text-gray-950">Message:</label>
                <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={handleMessageChange} value={message}></textarea>
                </div>
                <div>
                <label htmlFor="documents" className="block mb-2 text-sm font-medium text-gray-950 dark:text-gray-950">Upload Documents:</label>
                <input type="file" id="documents" onChange={handleDocumentsChange} multiple />
                </div>
                <button type="submit">Apply Leave</button>
            </form>
            <div className="lg:w-full md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <Calendar />
            </div>

            </div>
            <div>
            <div className="lg:w-full md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <LeaveCredits />
                </div>
            <div className="w-full px-4 py-2 m-2 text-center flex flex-row bg-green-400">
                <div className="lg:w-full md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-2xl font-bold text-gray-900">Leave Applications</h2>
                    <div class="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="w-full text-sm text-left text-gray-800 dark:text-gray-950">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">Leave Type</th>
                            <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">Leave Duration</th>
                            <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">From</th>
                            <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">To</th>
                            <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">Message</th>
                            <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {leaveDetails.map((leave, index) => (
                            <tr key={index} className="bg-white dark:bg-gray-800">
                            <td className="px-6 py-4  font-bold text-gray-900 ">{leave.leaveType}</td>
                            <td className="px-6 py-4  font-bold text-gray-900 ">{leave.numberOfDays}</td>
                            <td className="px-6 py-4  font-bold text-gray-900 ">{leave.fromDate}</td>
                            <td className="px-6 py-4  font-bold text-gray-900 ">{leave.toDate}</td>
                            <td className="px-6 py-4  font-bold text-gray-900 ">{leave.message}</td>
                            <td className="px-6 py-4  font-bold text-gray-900 ">{leave.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default LeaveForm;