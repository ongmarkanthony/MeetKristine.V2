import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import axiosInstance from '../store/api';

const AddUser = () => {
  const [role, setRole] = useState('User');
  const [department, setDepartment] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      jobTitle: '',
      department: department,
      employee_num: generateEmployeeId(),
    },
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post('/users', { ...values, role });
        console.log(response.data.data)
        if (response.status === 201) {
          console.log('User added successfully');
        }
      } catch (error) {
        console.error('Error adding user', error);
        if (error.response) {
          console.log('Response data:', error.response.data);
          console.log('Response status:', error.response.status);
          console.log('Response headers:', error.response.headers);
        }
      }
    },
  });

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  }

  function generateEmployeeId() {
    return 'MK-' + Math.floor(1000 + Math.random() * 9000);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 grid-rows-5 gap-4 max-w-screen-xs m-10 rounded-lg">
      <div className="col-span-1 sm:col-span-3 row-span-5 sm:col-start-2 shadow-md rounded px-20 pt-8 pb-10 mb-6 bg-blue-500 border-black border-2">
        <div className="flex flex-col p-4 rounded-lg mx-auto ">
          <form onSubmit={formik.handleSubmit} className="flex flex-col h-3/4">
            <label className="mb-1">First Name</label>
            <input
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className="form-input mb-3 h-12 w-full  border-b-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="     First Name"
            />
            <label className="mb-1">Last Name</label>
            <input
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className="form-input mb-3 h-12 w-full  border-b-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="     Last Name"
            />
            <label className="mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="form-input mb-3 h-12 w-full  border-b-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="     Email"
            />
            <label className="mb-1">Password</label>
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="form-input mb-3 h-12 w-full  border-b-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="     Password"
            />
            <label className="mb-1">Job Title</label>
            <input
              name="jobTitle"
              value={formik.values.jobTitle}
              onChange={formik.handleChange}
              className="form-input mb-3 h-12 w-full  border-b-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="     Job Title"
            />
            <label className="mb-1">Department</label>
            <select
              value={department}
              onChange={handleDepartmentChange}
              className="form-input mb-3 h-12 w-full  border-b-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-rose-600"
            >
              <option value="Human Resources">Human Resources</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
              <option value="Admin">Admin</option>
            </select>
            <label className="mb-1">Employee ID</label>
            <input
              name="employeeId"
              value={formik.values.employee_num}
              onChange={formik.handleChange}
              className="form-input mb-3 h-12 w-full  border-b-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="     Employee ID"
            />
            <label className="mb-1">Role</label>
            <select
              value={role}
              onChange={handleRoleChange}
              className="form-input mb-3 h-12 w-full  border-b-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-rose-600"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <button type="submit" className="bg-cyan-50 w-1/4 h-12 mt-4 rounded-lg">
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;