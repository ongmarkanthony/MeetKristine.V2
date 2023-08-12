import { useState } from 'react';
import ProfilePhoto from './ProfilePhoto';

const ProfileInfoForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [nationality, setNationality] = useState("");
  
  return (
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <h2 className="mb-4 text-xl font-bold">Profile Info</h2>
    <div className="flex flex-wrap -mx-3 md:flex mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-middle-name">
                  Middle Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-middle-name" type="text" placeholder="Doe" value={middleName} onChange={e => setMiddleName(e.target.value)} />
        </div>
        <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-last-name" type="text" placeholder="Smith" value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
    </div>
        <div className="flex flex-wrap -mx-3 md:flex mb-6">
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-birthdate">
              Birthdate
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-birthdate" type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-gender">
              Gender
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-gender" type="text" placeholder="Female" value={gender} onChange={e => setGender(e.target.value)} />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-nationality">
              Nationality
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-nationality" type="text" placeholder="American" value={nationality} onChange={e => setNationality(e.target.value)} />
          </div>
        </div>
       <div className="flex flex-wrap -mx-3 md:flex mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-job-title">
            Job Title
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-job-title" type="text" placeholder="Developer" value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
          </div>
          <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-department">
            Department
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-department" type="text" placeholder="Engineering" value={department} onChange={e => setDepartment(e.target.value)} />
          </div>
        </div>
    </div>
    );
}

export default ProfileInfoForm;