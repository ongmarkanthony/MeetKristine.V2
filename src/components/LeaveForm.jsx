import { useState } from "react";
import LeaveCredits from "./LeaveCredits";
import Calendar from "./Calendar";
//import LeaveAppForm from "./LeaveAppForm";


const LeaveForm = () => {
  const [leaveType, setLeaveType] = useState("");
  const [leaveDuration, setLeaveDuration] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [message, setMessage] = useState("");
  const [leaveDetails, setLeaveDetails] = useState([]);
  const [status, setStatus] = useState("PENDING");
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [PaidLeave, setPaidLeave] = useState("");

  const handleLeaveTypeChange = (e) => {
    setLeaveType(e.target.value);
  };

  const handleLeaveDurationChange = (e) => {
    setLeaveDuration(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
    calculateDays(e.target.value, toDate);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
    calculateDays(fromDate, e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleDocumentsChange = (e) => {
    setDocuments(Array.from(e.target.files));
  };

  const [isPaidLeave, setIsPaidLeave] = useState(null);

  const calculateDays = (fromDate, toDate) => {
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    setNumberOfDays(differenceInDays);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLeave = {
      leaveType: leaveType,
      leaveDuration:numberOfDays,
      fromDate: fromDate,
      toDate: toDate,
      message: message,
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
          <section className="text-gray-600 body-font flex flex-col md:flex-row align-middle w-screen">      
            <div className=" w-full md:w-1/2 border border-gray-200 rounded-lg px-5 py-24 mx-auto bg-cyan-500 flex flex-col align-items-center ">
                <h1 className="text-xl font-bold text-gray-900 mb-4">Leave Application</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="leaveType" className="block w-full mb-2 text-sm font-medium text-gray-950 dark:text-gray-950">Leave Type:</label>
                    <select id="leaveType" className="bg-gray border-gray-300 text-gray-950 text-sm rounded-lg focus:border-blue-500 block w-full md:w-1/2 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-950 dark-focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleLeaveTypeChange} value={leaveType}>
                        <option value="">Select Leave Type</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Personal Leave">Personal Leave</option>
                        <option value="Vacation Leave">Vacation Leave</option>
                        <option value="Others">Others</option>
                    </select>
                    </div>
                    <div className="mt-4 w-full text-gray-950 mb-4">
                    <strong>Number of Days:</strong> {numberOfDays}
                    </div>
                    <div className="mt-4 w-full text-gray-950 mb-4">
                    <div className="p-4 flex flex-row">
                        <p className="mb-2">Paid leave:</p>
                        <div className="flex items-center space-x-4">
                          <input
                            id="yes"
                            name="paidLeave"
                            type="radio"
                            checked={isPaidLeave === true}
                            onChange={() => setIsPaidLeave(true)}
                            className="form-radio h-4 w-4 text-blue-600"
                          />
                          <label htmlFor="yes" className="text-gray-700">Yes</label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <input
                            id="no"
                            name="paidLeave"
                            type="radio"
                            checked={isPaidLeave === false}
                            onChange={() => setIsPaidLeave(false)}
                            className="form-radio h-4 w-4 text-blue-600"
                          />
                          <label htmlFor="no" className="text-gray-700">No</label>
                        </div>
                      </div>
                    </div>
                    <div>
                    <label htmlFor="fromDate" className=" block w-full mb-2 text-sm font-medium text-gray-950 dark:text-gray-950">From:</label>
                    <input
                        className="w-full md:w-full h-10 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-100 dark:border-white"
                        type="date"
                        id="fromDate"
                        onChange={handleFromDateChange}
                        value={fromDate}
                    />
                    </div>
                    <div>
                    <label htmlFor="toDate" className="block w-full mb-2 text-sm font-medium text-gray-950 dark:text-gray-950">To:</label>
                    <input
                        className="w-full md:w-full h-10 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-100 dark:border-white"
                        type="date"
                        id="toDate"
                        onChange={handleToDateChange}
                        value={toDate}
                    />
                    </div>
                    <div className="w-full h-30 mb-4 mt-6 border border-gray-200  bg-gray-50 dark:bg-gray-100 dark:border-gray-600">
                    <label htmlFor="message" className="block w-full mb-2 text-sm font-medium text-gray-950 dark:text-gray-950">Message:</label>
                    <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write additional information" onChange={handleMessageChange} value={message}></textarea>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-700 rounded-full h-10 w-full md:w-1/2 text-gray-900 mt-5" type="submit">Submit</button>
                </form>
                </div>
                <div className="w-3/4 px-4 py-2 m-2 text-center flex flex-col border border-gray-100 rounded-lg bg-gray-50 ">
                    <div className="lg:w-full bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-2 md:mt-0">
                        <h2 className="text-2xl font-bold text-gray-900">Leave Applications Status</h2>
                        <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="w-full text-sm text-left text-gray-800 bg-slate-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">Leave Type</th>
                                <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">Leave Duration</th>
                                <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">From</th>
                                <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">To</th>
                                <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">Paid Leave</th>
                                <th scope="col" className="px-6 py-3 rounded-l-lg  font-bold text-gray-900 ">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {leaveDetails.map((leave, index) => (
                                <tr key={index} className="bg-white ">
                                <td className="px-6 py-4  font-bold text-gray-900 ">{leave.leaveType}</td>
                                <td className="px-6 py-4  font-bold text-gray-900 ">{leave.leaveDuration}</td>
                                <td className="px-6 py-4  font-bold text-gray-900 ">{leave.fromDate}</td>
                                <td className="px-6 py-4  font-bold text-gray-900 ">{leave.toDate}</td>
                                <td className="px-6 py-4  font-bold text-gray-900 ">{leave.PaidLeave}</td>
                                <td className="px-6 py-4  font-bold text-gray-900 ">{leave.status}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>
        </section>
    );
};

export default LeaveForm;