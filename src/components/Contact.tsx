import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { contactUs } from '../services/contact-service';
// @ts-ignore
const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const initialValues: {
    firstName: string;
    email: string;
    phone: string;
    interest: string;
    message: string;
  } = {
    firstName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    interest: Yup.string().required('Interest is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (formValue: {
    firstName: string;
    email: string;
    phone: string;
    interest: string;
    message: string;
  }) => {
    const { firstName, email, phone, interest, message } = formValue;

    setMessage('');
    setLoading(true);

    contactUs(firstName, email, phone, interest, message).then(
      () => {
        setLoading(false);
        setMessage('Thank you for contacting us! We will get back to you soon');
        formValue.firstName = '';
        formValue.email = '';
        formValue.phone = '';
        formValue.interest = '';
        formValue.message = '';
      },
      (err) => {
        const resMessage =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };
  return (
    <>
      <div className="flex flex-wrap items-center lg:justify-between justify-center mx-auto w-11/12 h-full mt-32 mb-14  ">
        <div className="lg:w-2/4 w-full">
          <h1 className="font-bold text-7xl">Did You Find Your </h1>
          <span className="text-[#1DAEFF] font-bold text-6xl">Dream Home?</span>
          <p
            className="text-3xl lg:w-3/4 font-light mb-4"
            style={{
              color: 'rgba(255, 251, 251, 0.50)',
            }}
          >
            Thank you for getting in touch! if you find your dream home connect
            with us
          </p>
        </div>
        <div className="lg:w-2/5 w-full mb-20">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <h1 className="mb-8 text-4xl font-bold">Contact us</h1>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Your name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-900"
                  />
                </div>
                <div>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-900"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your phone number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-900"
                  />
                </div>
                {/* interesed in */}
                <div>
                  <Field
                    type="interest"
                    name="interest"
                    id="interest"
                    placeholder="Interested in"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="interest"
                    component="div"
                    className="text-red-900"
                  />
                </div>
                <div className="col-span-2">
                  <Field
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-900"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-[#1DAEFF] text-white font-medium hover:text-white rounded-lg transition duration-300"
                    style={{ boxShadow: '0px 4px 40px 0px #1DAEFF' }}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Submit</span>
                  </button>
                </div>
                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Contact;
