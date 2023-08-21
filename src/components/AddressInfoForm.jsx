import { useFormik } from 'formik';
import { useEffect, useState } from 'react'
import axios from 'axios';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  address1: Yup.string().required('Required'),
  address2: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
});

const fetchUser = async () => {
  const response = await axios.get('http://localhost:8000/api/v1/users/${userId}');
  return response.data.data;
};

const updateUser = async (values) => {
  const response = await axios.post('http://localhost:8000/api/v1/users/${userId}', values);
  return response.data.data;
}

  

const AddressInfoForm = () => {
  const [userId, setUserId] = useState('');

  const formik = useFormik({
    initialValues: {
      address1: '',
      address2: '',
      city: '',
      country: '',
      postalCode: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
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
  })
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <div className="-mx-3 md:flex mb-6">
      <h2 className="md:w-1/3 px-3 mb-6 md:mb-0">Address Info</h2>
    </div>
    <form onSubmit={formik.handleSubmit}>
    <div className="-mx-3 md:flex mb-6">
      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-address1">
          Address 1
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
        id="grid-address1" 
        type="text" 
        placeholder="1234 Main St" 
        {...formik.getFieldProps('address1')}
        />
      </div>
      <div className="md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-address2">
          Address 2
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
        id="grid-address2" 
        type="text" 
        placeholder="Apartment, studio, or floor" 
        {...formik.getFieldProps('address2')}
        />
      </div>
    </div>
    <div className="-mx-3 md:flex mb-6">
      <div className="md:w-1/4 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
          City
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
        id="grid-city" 
        type="text" 
        placeholder="City" 
        {...formik.getFieldProps('city')}
        />
      </div>
      <div className="md:w-1/4 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-country">
          Country
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
        id="grid-country" 
        type="text" 
        placeholder="Country" 
        {...formik.getFieldProps('country')}
        />
      </div>
      <div className="md:w-1/4 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-postal-code">
          Postal Code
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
         id="grid-postal-code" 
         type="text" placeholder="Postal Code" 
         {...formik.getFieldProps('postalCode')}
         />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1 align-text-bottom">
          Save Update
          </button>
            </div>
          </div>
        </form>
      </div>
  );
};
export default AddressInfoForm;