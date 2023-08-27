import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required').email('Invalid email address'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      alert('Message sent successfully!\n' + JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className="m-auto w-75 py-5">
      <h2>Contact Us</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-data my-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            {...formik.getFieldProps('name')}
            className={`form-control my-2 ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
            name="name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="input-data my-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...formik.getFieldProps('email')}
            className={`form-control my-2 ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="input-data my-2">
          <label htmlFor="message">Message</label>
          <textarea
            {...formik.getFieldProps('message')}
            className={`form-control my-2 ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
            name="message"
            rows="4"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="invalid-feedback">{formik.errors.message}</div>
          ) : null}
        </div>
        <div className="button w-100 d-flex flex-row-reverse">
          <button type="submit" className="btn btn-info my-3">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;

