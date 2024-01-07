import React, { useState, useEffect } from 'react';
import { getAdminBoard } from '../services/user-service';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { createProperty } from '../services/property-service';
const BoardAdmin: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const initialValues: {
    property: string;
    badrooms: number;
    bathrooms: number;
    description: string;
    surface: number;
    price: number;
    langtitude: number;
    longtitude: number;
  } = {
    property: '',
    badrooms: Number(''),
    bathrooms: Number(''),
    description: '',
    surface: Number(''),
    price: Number(''),
    langtitude: Number(''),
    longtitude: Number(''),
  };
  const authUser = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin =
    authUser && authUser.roles && authUser.roles.includes('ROLE_ADMIN');
  const validationSchema = Yup.object().shape({
    property: Yup.string().required('Property is required'),
    badrooms: Yup.string().required('Badrooms is required'),
    bathrooms: Yup.string().required('Bathrooms is required'),
    description: Yup.string().required('Description is required'),
    surface: Yup.string().required('Surface is required'),
    price: Yup.string().required('Price is required'),
    langtitude: Yup.string().required('Langtitude is required'),
    longtitude: Yup.string().required('Longtitude is required'),
  });

  const handleSubmit = (formValue: {
    property: string;
    badrooms: number;
    bathrooms: number;
    description: string;
    surface: number;
    price: number;
    langtitude: number;
    longtitude: number;
  }) => {
    const {
      property,
      badrooms,
      bathrooms,
      description,
      surface,
      price,
      langtitude,
      longtitude,
    } = formValue;

    setMessage('Property added successfully!');
    setLoading(true);
    createProperty(
      property,
      badrooms,
      bathrooms,
      description,
      surface,
      price,
      langtitude,
      longtitude
    ).then(
      () => {
        console.log(formValue);
        setLoading(false);
        setMessage('Property added successfully!');
        formValue.property = '';
        formValue.badrooms = 0;
        formValue.bathrooms = 0;
        formValue.description = '';
        formValue.surface = Number('');
        formValue.price = 0;
        formValue.langtitude = 0;
        formValue.longtitude = 0;
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

  useEffect(() => {
    if (isAdmin) {
      getAdminBoard().then(
        (response) => {
          setContent(response.data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setContent(_content);
        }
      );
    }
  }, [isAdmin]);

  return (
    <div>
      {isAdmin ? (
        <>
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Add a new Propery
              </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="property"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Property type
                      </label>
                      <Field
                        as="select"
                        id="property"
                        name="property"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option value="">Select category</option>
                        <option value="Home">Home</option>
                        <option value="Appartment">Appartment</option>
                      </Field>
                      <ErrorMessage
                        name="property"
                        component="div"
                        className="text-red-900"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="badrooms"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Badrooms
                      </label>
                      <Field
                        type="number"
                        name="badrooms"
                        id="badrooms"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="6"
                      />
                      <ErrorMessage
                        name="badrooms"
                        component="div"
                        className="text-red-900"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Bathrooms
                      </label>
                      <Field
                        type="number"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="4"
                      />
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="text-red-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Langtitude
                      </label>
                      <Field
                        type="number"
                        name="langtitude"
                        id="langtitude"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="21.027763"
                      />
                      <ErrorMessage
                        name="langtitude"
                        component="div"
                        className="text-red-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="item-weight"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Longtitude
                      </label>
                      <Field
                        type="number"
                        name="longtitude"
                        id="longtitude"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="25.744839354280487"
                      />
                      <ErrorMessage
                        name="longtitude"
                        component="div"
                        className="text-red-900"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Your description here"
                      ></Field>
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="item-weight"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Surface
                      </label>
                      <Field
                        type="number"
                        name="surface"
                        id="item-weight"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="240 m²"
                      />
                      <ErrorMessage
                        name="surface"
                        component="div"
                        className="text-red-900"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-[#1DAEFF] text-white font-medium hover:text-white mt-4 rounded-lg transition duration-300"
                      style={{ boxShadow: '0px 4px 40px 0px #1DAEFF' }}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Login</span>
                    </button>
                  </div>
                  {message && (
                    <div className="form-group mt-4">
                      <div className="text-green-700" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                </Form>
              </Formik>
            </div>
          </section>
        </>
      ) : (
        <p>You do not have the necessary permissions for the Admin Board.</p>
      )}
    </div>
  );
};

export default BoardAdmin;
