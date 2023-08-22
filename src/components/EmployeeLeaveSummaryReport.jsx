import { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeLeaveReport = () => {
    const [employees, setEmployees] = useState([]);
    const [search , setSearch] = useState("");
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [slCredits, setSlCredits] = useState("");
    const [vlCredits, setVlCredits] = useState("");
    const [elCredits, setElCredits] = useState("");

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/users');
                setEmployees(response.data.data);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };
        fetchEmployees();
    }, []);

    useEffect(() => {
        if (employees.length > 0) {
            setFilteredEmployees(
                employees.filter(employee => 
                employee.firstName.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [search, employees]);

    const openModal = (employee) => {
        setCurrentEmployee(employee);
        setSlCredits(employee.sl_credits);
        setVlCredits(employee.vl_credits);
        setElCredits(employee.el_credits);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const updateLeaveCredits = async () => {
        try {
            await axios.put(`http://localhost:8000/api/v1/users/${currentEmployee.id}`, {
                sl_credits: slCredits,
                vl_credits: vlCredits,
                el_credits: elCredits,
            });
            closeModal();
        } catch (error) {
            console.error("Error updating leave credits:", error);
        }
    };

    return (
        <div className="p-4">
            {modalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Update Leave Credits
                                        </h3>
                                        <div className="mt-2">
                                            <p>Employee ID: {currentEmployee?.id}</p>
                                            <input type="number" value={slCredits} onChange={e => setSlCredits(e.target.value)} placeholder="Sick Leave Credits" className="mb-4 p-2 border rounded" />
                                            <input type="number" value={vlCredits} onChange={e => setVlCredits(e.target.value)} placeholder="Vacation Leave Credits" className="mb-4 p-2 border rounded" />
                                            <input type="number" value={elCredits} onChange={e => setElCredits(e.target.value)} placeholder="Personal Leave Credits" className="mb-4 p-2 border rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={updateLeaveCredits}>
                                    Save
                                </button>
                                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="mb-4">
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by first name" className="p-2 border rounded" />
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Employee ID
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Full Name
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Sick Leave Credits
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Vacation Leave Credits
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Personal Leave Credits
                        </th>
                        <th className="px-6 py-3 bg-gray-50">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredEmployees.map(employee => (
                        <tr key={employee.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{employee.employee_num}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{`${employee.firstName} ${employee.lastName}`}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{employee.sl_credits}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{employee.vl_credits}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{employee.el_credits}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button onClick={() => openModal(employee)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeLeaveReport;