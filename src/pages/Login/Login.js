import Input from 'components/Input/Input';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.scss';
import Button from 'components/Button/Button';
import CheckBox from 'components/CheckBox/CheckBox';
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
    <main>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h2 className="login-form__title">Login</h2>
        <div className="login-form__content">
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            touched={formik.touched.email}
          ></Input>
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
            touched={formik.touched.password}
          ></Input>
          <div className="content__option">
            <CheckBox label="Remember me" name="remember" />
            <NavLink className="option__forgot" to="/forgot-password">
              Forgot Password?
            </NavLink>
          </div>
          <Button
            variant="btn contained content__button"
            size="large"
            disabled={isDisable}
            color="success"
          >
            LOGIN
          </Button>
          <p className="login-form__footer">
            <span>New to Picoworkers?</span>
            <NavLink to="#">Create an account</NavLink>
          </p>
        </div>
      </form>
    </main>
  );
}
