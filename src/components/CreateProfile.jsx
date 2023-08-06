import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import UserDashboardHeader from '../UserDashboardHeader'; // Corrected component naming

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Gender: '',
    Age: '',
    BirthDate: '',
    personalEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <UserDashboardHeader/> {/* Corrected component usage */}
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="birthdate">Birthdate</label>
            <input
              type="text"
              id="birthdate"
              name="BirthDate"
              value={formData.BirthDate}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* You may add the Footer component here if it's available */}
    </>
  );
};

export default CreateProfile;
