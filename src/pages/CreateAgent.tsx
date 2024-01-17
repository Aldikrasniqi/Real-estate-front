import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ConnectButton from '../components/ConnectButton';
import { createAgent } from '../services/agent-service';
// @ts-ignore
import Agent from '../types/agent.type';
type LoginProps = {};

// @ts-ignore
const CreateAgent: React.FC<LoginProps> = () => {
  let navigate: NavigateFunction = useNavigate();
  // @ts-ignore
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  // @ts-nocheck
  const initialValues: {
    name: string;
    contactInfo: string;
    email: string;
    rating: string;
  } = {
    name: '',
    contactInfo: '',
    email: '',
    rating: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('name is required'),
    contactInfo: Yup.string().required('contact is required'),
    email: Yup.string().required('email is required'),
    rating: Yup.string().required('rating is required'),
  });

  const handleLogin = (formValue: Agent) => {
    const { name, contactInfo, email, rating } = formValue;

    createAgent(formValue).then(
      () => {
        setLoading(true);
        setMessage('You have successfully created an agent!');
        navigate('/agents');

      },
      (err: any) => {
        const resMessage =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };
  // @ts-ignore
  return (
    <>
      <section className=" ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 h-screen">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-bold text-gray-900 "
          >
            <img
              className="w-15 h-12 mr-2"
              src="https://www.coinhustle.com/content/images/2023/05/Coinhustle-logo-icon-500x500.png"
              alt="logo"
            />
            cryproVerse
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add an Agent to the Network
              </h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                <Form>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <Field
                      name="name"
                      type="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Test User"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contact Info
                    </label>
                    <Field
                      type="text"
                      name="contactInfo"
                      id="contactInfo"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Firstname Lastname"
                    />
                    <ErrorMessage
                      name="contactInfo"
                      component="div"
                      className="text-red-900"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email@test.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-900"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rating"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Rating
                    </label>
                    <Field
                      type="text"
                      name="rating"
                      id="rating"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Five Stars"
                    />
                    <ErrorMessage
                      name="rating"
                      component="div"
                      className="text-red-900"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-slate-800 my-4 bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Create</span>
                  </button>
                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger text-white" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                </Form>
              </Formik>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// @ts-ignore
export default CreateAgent;
