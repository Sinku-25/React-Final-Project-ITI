import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      age: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      age: Yup.number().required('Age is required').min(20, 'Minimum age is 20').max(80, 'Maximum age is 80'),
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required').min(10, 'Minimum 10 characters'),
    }),
    onSubmit: (values) => {
      alert('Registration successful!\n' + JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Registration Form</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="first_name" className="form-label">First Name</label>
                  <input
                    type="text"
                    {...formik.getFieldProps('first_name')}
                    className={`form-control ${formik.touched.first_name && formik.errors.first_name ? 'is-invalid' : ''}`}
                    name="first_name"
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <div className="invalid-feedback">{formik.errors.first_name}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="last_name" className="form-label">Last Name</label>
                  <input
                    type="text"
                    {...formik.getFieldProps('last_name')}
                    className={`form-control ${formik.touched.last_name && formik.errors.last_name ? 'is-invalid' : ''}`}
                    name="last_name"
                  />
                  {formik.touched.last_name && formik.errors.last_name ? (
                    <div className="invalid-feedback">{formik.errors.last_name}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input
                    type="number"
                    {...formik.getFieldProps('age')}
                    className={`form-control ${formik.touched.age && formik.errors.age ? 'is-invalid' : ''}`}
                    name="age"
                  />
                  {formik.touched.age && formik.errors.age ? (
                    <div className="invalid-feedback">{formik.errors.age}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    {...formik.getFieldProps('email')}
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                    name="email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    {...formik.getFieldProps('password')}
                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                    name="password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                  ) : null}
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
              <p className="mt-2">
                Already have an account? <Link to="/">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
