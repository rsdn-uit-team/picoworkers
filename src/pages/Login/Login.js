import Input from 'components/Input/Input';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button/Button';
import CheckBox from 'components/CheckBox/CheckBox';
import styled from '@emotion/styled';
import Link from 'components/Link/Link';
const FormField = styled.form`
  max-width: 400px;
  padding: 50px 20px 80px 20px;
  margin: 0 auto;
  font-size: 14px;
  @media (max-width: 992px) {
    padding-top: 80px;
  }
`;
const H2Field = styled.h2`
  color: var(--dark);
  margin: 0;
  margin-bottom: 26px;
  font-size: 26.6px;
  font-weight: 700;
  @media (max-width: 992px) {
    font-size: 23px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextField = styled.p`
  text-align: center;
  margin: 16px 0;
`;
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
      <FormField onSubmit={formik.handleSubmit}>
        <H2Field>Login</H2Field>
        <Input
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
          touched={formik.touched.email}
        ></Input>
        <Input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          touched={formik.touched.password}
        ></Input>
        <Container>
          <CheckBox label="Remember me" name="remember" id="remember" />
          <Link to="/forgot-password">Forgot Password?</Link>
        </Container>
        <Button
          variant="btn contained content__button"
          size="large"
          disabled={isDisable}
          color="success"
        >
          LOGIN
        </Button>
        <TextField>
          <span>New to Picoworkers?</span>
          <Link to="#">Create an account</Link>
        </TextField>
      </FormField>
    </main>
  );
}
