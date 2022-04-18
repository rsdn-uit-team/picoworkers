import Button from 'components/Button';
import Input from 'components/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import './ForgotPassword.scss';
export default function ForgotPassword() {
  const [isDisable, setIsDisable] = useState();
  const formik = useFormik({
    initialValues: {
      email: '',
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
    }),
    onSubmit: (values) => {
      console.log(values);
      setIsDisable(true);
    },
  });
  return (
    <main>
      <div className="forgot-password">
        <div className="forgot-password__button">
          <Button
            variant="btn"
            href="/login"
            size="14px"
            color="icon"
            startIcon="fas fa-arrow-left"
            sizeIcon="16px"
          >
            Back
          </Button>
        </div>
        <div className="forgot-password__form">
          <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Enter Your Email</h2>
            <Input
              name="email"
              value={formik.values.email}
              handleChange={formik.handleChange}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
            <Button
              variant="btn contained"
              color="success"
              size="14px"
              disabled={isDisable}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
