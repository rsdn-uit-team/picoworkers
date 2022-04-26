import { forwardRef, useState } from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input/Input';
import Stack from 'components/Stack/Stack';
import CheckBox from 'components/CheckBox/CheckBox';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';

const LoginWrapper = styled.div({
  maxWidth: 1086,
  boxSizing: 'border-box',
  padding: '80px 20px',
  margin: '0 auto',
  '@media (max-width: 992px)': {
    paddingBottom: 40,
  },
});
const LoginForm = styled.form({
  maxWidth: 400,
  margin: '0 auto',
});
const Title = styled.h2({
  color: 'var(--dark)',
  fontWeight: 700,
  lineHeight: 1.5,
  margin: 0,
  marginBottom: 24,
  fontSize: 26.6,
  '@media (max-width: 992px)': {
    fontSize: 23,
  },
});
const InputWrapper = styled('div')({
  marginBottom: 24,
});
const StackRoot = styled(Stack)({
  marginBottom: 24,
});
const ButtonLogin = styled(Button)({
  fontWeight: 'bold',
});
const Text = styled.p({
  textAlign: 'center',
  marginTop: 16,
  marginBottom: 16,
});
const Login = forwardRef(({ ...props }, ref) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .min(6, 'Minimum 6 characters')
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
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
          'One Uppercase, One Lowercase, One Number and one special case Character'
        )
        .required('Required!'),
    }),
    onSubmit: (values) => {
      setIsDisabled(true);
    },
  });
  return (
    <LoginWrapper {...props} ref={ref}>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Title>Login</Title>
        <InputWrapper>
          <Input
            type="text"
            name="email"
            id="email"
            label="Email"
            onChange={formik.handleChange}
            error={formik.errors.email}
            touched={formik.touched.email}
            focused
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            name="password"
            id="password"
            label="Password"
            onChange={formik.handleChange}
            error={formik.errors.password}
            touched={formik.touched.password}
            focused
          />
        </InputWrapper>
        <StackRoot direction="row" justifyContent="space-between">
          <CheckBox
            id="remember"
            label="Remember me"
            color="primary"
            name="remember"
            value={formik.values.remember}
            onChange={formik.handleChange}
          />
          <Link to="/forgot-password">Forgot password</Link>
        </StackRoot>
        <ButtonLogin
          type="submit"
          variant="contained"
          size="large"
          disabled={isDisabled}
          fullWidth
        >
          LOGIN
        </ButtonLogin>
        <Text>
          <span>New to Picoworkers? </span>
          <Link to="/signup">Create an account</Link>
        </Text>
      </LoginForm>
    </LoginWrapper>
  );
});
export default Login;
