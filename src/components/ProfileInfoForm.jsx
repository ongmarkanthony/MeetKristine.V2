import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useEffect, useState } from 'react';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  middleName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  birthdate: Yup.date().required('Required'),
  gender: Yup.string().required('Required'),
  nationality: Yup.string().required('Required'),
  jobTitle: Yup.string().required('Required'),
  department: Yup.string().required('Required'),
});

const fetchUser = async () => {
  const response = await axios.get('http://localhost:8000/api/v1/users/${userId}');
  return response.data.data;
};

const updateUser = async (values) => {
  const response = await axios.post('http://localhost:8000/api/v1/users/${userId}', values);
  return response.data.data;
}

const ProfileInfoForm = () => {
  const [userId, setUserId] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      birthdate: '',
      gender: '',
      nationality: '',
      jobTitle: '',
      department: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await updateUser(userId, values);
        const response = await axios.post('http://localhost:8000/api/v1/users', values);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    },
  });

   useEffect(() => {
     if (userId) {
       fetchUser(userId).then(user  => formik.setValues(user)); {
       }
     }
   }, [userId]);              

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <h2 className="mb-4 text-xl font-bold">Profile Info</h2>
        <div className="flex flex-wrap -mx-3 md:flex mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
                id="firstName" 
                type="text" 
                placeholder="Jane" 
                value={formik.values.firstName}
                {...formik.getFieldProps('firstName')} />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="middleName">
                  Middle Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="middleName" 
                type="text" placeholder="Doe" 
                value={formik.values.middleName}
                {...formik.getFieldProps('middleName')} />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                 id="lastName"
                  type="text" placeholder="Smith" 
                  value={formik.values.lastName}
                  {...formik.getFieldProps('lastName')} />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="birthdate">
                  Birthdate
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                id="birthdate" 
                type="date"
                value={formik.values.birthdate}
                {...formik.getFieldProps('birthdate')} />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-gender">
                  Gender
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                id="gender" 
                type="text" 
                placeholder="Female"
                value={formik.values.gender}
                {...formik.getFieldProps('gender')}
                 />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-nationality">
                  Nationality
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                id="grid-nationality" 
                type="text" 
                placeholder="Filipino" 
                value={formik.values.nationality}
                {...formik.getFieldProps('nationality')}
                 />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-job-title">
                  Job Title
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
                id="grid-job-title" 
                type="text" 
                placeholder="Developer" 
                value={formik.values.jobTitle}
                {...formik.getFieldProps('jobTitle')} 
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-department">
                  Department
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                id="grid-department" 
                type="text" 
                placeholder="Software Engineering" 
                {...formik.getFieldProps('department')}
                />
              </div>
              <button type = "submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save Update 
              </button>
            </div>
        </form>
 );
}
export default ProfileInfoForm;