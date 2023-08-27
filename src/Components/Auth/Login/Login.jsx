import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      alert('Login successful!\n' + JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login Form</h2>
              <form onSubmit={formik.handleSubmit}>
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
                <button type="submit" className="btn btn-info">
                  Login
                </button>
              </form>
              <p className="mt-2">
                New User? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
