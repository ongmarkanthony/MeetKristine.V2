import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import UserHeader from '../components/UserHeader';

function UserProfile() {
    const formik=useFormik({
        initialValues: {
            email:'',
            jobTitle:'',
            department:'',
            dateHired:'',
            firstName:'',
            middleName:'',
            lastName:'',
            gender:'',
            nationality:'',
            dateOfBirth:'',
            address1:'',
            address2:'',
            city:'',
            country:'',
            postalCode:'',
            sssNumber:'',
            philHealth:'',
            tinId:'',
            hdmfNumber:'',
            bankName:'',
            bankAccount:'',
    }, 
    validationSchema:Yup.object({
        email:Yup.string().required('Required'),
        jobTitle:Yup.string().required('Required'),
        department:Yup.string().required('Required'),
        dateHired:Yup.date().required('Required'),
        firstName:Yup.string().required('Required'),
        middleName:Yup.string(),
        lastName:Yup.string().required('Required'),
        gender:Yup.string().required('Required'),
        dateOfBirth:Yup.date().required('Required'),
        nationality:Yup.string().required('Required'),
        address1:Yup.string().required('Required'),
        address2:Yup.string().required('Required'),
        city:Yup.string().required('Required'),
        country:Yup.string().required('Required'),
        postalCode:Yup.string().required('Required'),
        sssNumber:Yup.integer().required('Required'),
        philHealth:Yup.string().required('Required'),
        tinId:Yup.integer().required('Required'),
        hdmfNumber:Yup.string().required('Required'),
        bankName:Yup.string().required('Required'),
        bankAccount:Yup.string().required('Required'),
    }),
    onSubmit:values => {
        alert(JSON.stringify(values,null,2));
    },
});
  return (
    <>
    <UserHeader />
    <section className=" py-1 bg-blueGray-50">
    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                    Your Profile
                    </h6>
                    <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                    Settings
                    </button>
                </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit ={formik.handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
                </h6>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">First Name</label>
                    <input 
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.firstName}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Middle Initial</label>
                    <input 
                    type="text" 
                    id="middleName"
                    name="middleName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.middleName}
                    onChange={formik.handleChange}
                    />
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Last Name</label>
                    <input 
                    type="text"
                    id="lastName" 
                    name="lastName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    />
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Job Title</label>
                    <input 
                    type="text"
                    id="jobTitle" 
                    name="jobTitle"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Department</label>
                    <input 
                    type="text"
                    id="department" 
                    name="department"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.department}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Date Hired</label>
                    <input type="date" 
                    id="dateHired"
                    name="dateHired"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.dateHired}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Gender</label>
                    <input type="text" 
                    id="gender"
                    name="gender"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Nationality</label>
                    <input 
                    type="email" 
                    id="nationality"
                    name="nationality"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.nationality}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Address Information
                </h6>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Address 1</label>
                    <input 
                    type="text"
                    id="address1"
                    name="address1"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.address1}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Address 2</label>
                    <input 
                    type="text"
                    id="address2" 
                    name="address2"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.address2}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">City</label>
                    <input 
                    type="text" 
                    id="city"
                    name="city"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Country</label>
                    <input 
                    type="text" 
                    id="country"
                    name="country"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Postal Code</label>
                    <input 
                    type="text" 
                    id="postalCode"
                    name="postalCode"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Government Information
                </h6>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">SSS Number</label>
                    <input 
                    type="text"
                    id="sssNumber"
                    name="sssNumber"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.sssNumber}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">PhilHealth Number</label>
                    <input 
                    type="text"
                    id="philHealth" 
                    name="philHealth"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formik.values.philHealth}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">TIN Number</label>
                    <input 
                    type="number"
                    id="tinId" 
                    name="tinId"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.tinId}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">HDMF Number</label>
                    <input 
                    type="text"
                    id="hdmfNumber" 
                    name="hdmfNumber"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    value={formik.values.hdmfNumber}
                    onChange={formik.handleChange}
                    />
                    </div>
                </div>
                </div>
                </div>
                </div>
        </div>
        </div>
    </form>
    </div>
    </div>
    </div>
</section>
</>
);
}

export default UserProfile;