import { useEffect, useState } from 'react'
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';


const validationSchema = Yup.object({
  sssNumber : Yup.string().required('Required'),
  philHealth: Yup.string().required('Required'),
  hdmf: Yup.string().required('Required'),
  tinNumber: Yup.string().required('Required'),
  bankAccountNumber: Yup.string().required('Required'),
  bankName: Yup.string().required('Required'),
});

const fetchUser = async () => {
  const response = await axios.get(`http://localhost:8000/api/v1/users/${userId}`);
  return response.data.data;
};

const updateUser = async (values) => {
  const response = await axios.post(`http://localhost:8000/api/v1/users/${userId}`, values);
  return response.data.data;
}



const GovernmentInfoForm = () => {
  const [userId, setUserId] = useState('');

  const formik = useFormik({
    initialValues: {
      sssNumber: '',
      philHealth: '',
      hdmf: '',
      tinNumber: '',
      bankAccountNumber: '',
      bankName: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await updateUser(userId, values);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    if (userId) {
      fetchUser(userId).then(user  => formik.setValues(user));
    }
  } , [userId]);  

  return (
    <form onSubmit={formik.handleSubmit} className = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <h2 className="md:w-1/3 px-3 mb-6 md:mb-0">Other Info</h2>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/4 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-sss">
                SSS
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
              id="grid-sss" 
              type="text" placeholder="SSS" 
              {...formik.getFieldProps('sssNumber')}
              />
            </div>
            <div className="md:w-1/4 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-philHealth">
                PhilHealth
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
              id="grid-philHealth" 
              type="text" 
              placeholder="PhilHealth" 
              {...formik.getFieldProps('philHealth')}
              />
            </div>
            <div className="md:w-1/4 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-hdmf">
                HDMF
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
              id="grid-hdmf" 
              type="text" 
              placeholder="HDMF" 
              {...formik.getFieldProps('hdmf')}
              />
            </div>
            <div className="md:w-1/4 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-tinNumber">
                TIN Number
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
              id="grid-tinNumber" 
              type="text" placeholder="TIN Number" 
              {...formik.getFieldProps('tinNumber')}
              />
            </div>
          </div>
            <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-bankAccountNumber">
                Bank Account Number
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
              id="grid-bankAccountNumber" 
              type="text" 
              placeholder="Bank Account Number" 
              {...formik.getFieldProps('bankAccountNumber')}
              />
            </div>
            <div className="md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-bankName">
                Bank Name
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
              id="grid-bankName"
              type="text" 
              placeholder="Bank Name" 
              {...formik.getFieldProps('bankName')}
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-end">
                Save Update
              </button>
            </div>
          </div>
      </form>
    );
};
export default GovernmentInfoForm;