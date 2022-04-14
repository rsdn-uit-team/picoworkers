import FormInput from 'components/FormInput';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.scss';
export default function Login() {
  const [isDisable, setIsDisable] = useState();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .min(6, 'Minimum 8 characters')
        .max(64, 'Maximum 64 characters')
        .matches(
          /^[a-zA-Z0-9_@.]+$/,
          'Email can contain the following characters: _, @, .'
        )
        .required('Required!'),
      password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .max(64, 'Maximum 64 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/,
          'One Uppercase, One Lowercase, One Number and one special case Character'
        )
        .required('Required!'),
    }),
    onSubmit: (values) => {
      console.log(values);
      setIsDisable(true);
    },
  });
  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <h2 className="login-form__title">Login</h2>
      <div className="login-form__content">
        <FormInput
          name="email"
          value={formik.values.email}
          handleChange={formik.handleChange}
          error={formik.errors.email}
          touched={formik.touched.email}
        ></FormInput>
        <FormInput
          name="password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          error={formik.errors.password}
          touched={formik.touched.password}
        ></FormInput>
        <div className="content__option">
          <div className="option__remember">
            <input type="checkbox" name="remember" id="login-remember" />
            <label htmlFor="login-remember">Remember me</label>
          </div>
          <NavLink className="option__forgot" to="#">
            Forgot Password?
          </NavLink>
        </div>
        <button className="content__button" type="submit" disabled={isDisable}>
          LOGIN
        </button>
        <p className="login-form__footer">
          <span>New to Picoworkers?</span>
          <NavLink to="#">Create an account</NavLink>
        </p>
      </div>
    </form>
  );
}
