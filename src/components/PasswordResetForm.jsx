import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const PasswordResetForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .matches(/@meetkristine.com$/, 'Email should end with @meetkristine.com')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async (values) => {
      if (formik.isValid) {
        try {
          const response = await axios.post('/api/reset-password', {
            email: values.email,
            password: values.password,
          });
          // Handle success response
          alert('Password Successfully Changed');
        } catch (error) {
          // Handle error response
          alert('Failed to update password');
        }
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-l-gray-950">
      <div className="max-w-md w-full space-y-8">
        <input
          type="text"
          className={`mt-1 block w-full p-2 border ${
            formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-950'
          } rounded-md`}
          placeholder="Enter Email"
          {...formik.getFieldProps('email')}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}
        <input
          type="password"
          id="password"
          className={`mt-1 block w-full p-2 border ${
            formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-950'
          } rounded-md`}
          placeholder="Enter New Password"
          {...formik.getFieldProps('password')}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="text-red-500">{formik.errors.password}</div>
        )}
        <input
          type="password"
          id="confirmPassword"
          className={`mt-1 block w-full p-2 border ${
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? 'border-red-500'
              : 'border-gray-300'
          } rounded-md`}
          placeholder="Confirm New Password"
          {...formik.getFieldProps('confirmPassword')}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <div className="text-red-500">{formik.errors.confirmPassword}</div>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={formik.handleSubmit}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default PasswordResetForm;