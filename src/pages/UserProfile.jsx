import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ProfileInfoForm from "../components/ProfileInfoForm";
import AddressInfoForm from "../components/AddressInfoForm";
import OtherInfoForm from "../components/OtherInfoForm";
import UserFooter from "../components/UserFooter";
import Sidebar from "../components/Sidebar";

const UserProfile = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      jobTitle: "",
      department: "",
      dateHired: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      nationality: "",
      dateOfBirth: "",
      address1: "",
      address2: "",
      city: "",
      country: "",
      postalCode: "",
      sssNumber: "",
      philHealth: "",
      tinId: "",
      hdmfNumber: "",
      bankName: "",
      bankAccount: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      jobTitle: Yup.string().required("Required"),
      department: Yup.string().required("Required"),
      dateHired: Yup.date().required("Required"),
      firstName: Yup.string().required("Required"),
      middleName: Yup.string(),
      lastName: Yup.string().required("Required"),
      gender: Yup.string().required("Required"),
      dateOfBirth: Yup.date().required("Required"),
      nationality: Yup.string().required("Required"),
      address1: Yup.string().required("Required"),
      address2: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      postalCode: Yup.string().required("Required"),
      sssNumber: Yup.string().required("Required"),
      philHealth: Yup.string().required("Required"),
      tinId: Yup.string().required("Required"),
      hdmfNumber: Yup.string().required("Required"),
      bankName: Yup.string().required("Required"),
      bankAccount: Yup.string().required("Required"),
    }),
    onSubmit: handleSubmit,
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <div className="w-full md:w-80 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex flex-col h-screen bg-white p-4 shadow-lg w-full overflow-auto">
        <ProfileInfoForm formik={formik} />
        <AddressInfoForm formik={formik} />
        <OtherInfoForm formik={formik} />
      </div>
      <UserFooter /> 
    </div>
  );
};

export default UserProfile;
