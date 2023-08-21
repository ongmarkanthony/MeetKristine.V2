import { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PasswordResetSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const NewPassword = () => {
  const [message, setMessage] = useState('');

  const resetPassword = async (values) => {
    try {
      const response = await axios.post('/api/password_reset', values);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="p-4">
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={PasswordResetSchema}
        onSubmit={resetPassword}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="password" className="block">
                New Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="border p-2 w-full"
              />
              {errors.password && touched.password ? (
                <div className="text-red-500">{errors.password}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block">
                Confirm Password
              </label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="border p-2 w-full"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="text-red-500">{errors.confirmPassword}</div>
              ) : null}
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default NewPassword;