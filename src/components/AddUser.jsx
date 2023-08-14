import { useState } from 'react';
import axios from 'axios';


import React from 'react'

const AddUser =() => {
  const [user, setUser] = useState({firstName: '', lastName: '', email: '', password: '', jobTitle: '', department: ''});
  const [role, setRole] = useState('User');

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('your/backend/api/url', {...user, role});
      if (response.status === 200) {
        console.log('User added successfully');
      }
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <input name="firstName" value={user.firstName} onChange={handleChange} className="form-input mb-3" placeholder="First Name"/>
        <input name="lastName" value={user.lastName} onChange={handleChange} className="form-input mb-3" placeholder="Last Name"/>
        <input name="email" type="email" value={user.email} onChange={handleChange} className="form-input mb-3" placeholder="Email"/>
        <input name="password" type="password" value={user.password} onChange={handleChange} className="form-input mb-3" placeholder="Password"/>
        <input name="jobTitle" value={user.jobTitle} onChange={handleChange} className="form-input mb-3" placeholder="Job Title"/>
        <input name="department" value={user.department} onChange={handleChange} className="form-input mb-3" placeholder="Department"/>
        <select value={role} onChange={handleRoleChange} className="form-select mb-3">
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit" className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;