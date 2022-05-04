import { forwardRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  cancelSuccess,
  cancelErrorSuccess,
  signup,
  cancelError,
} from 'actions/signup.action';
import Input from 'components/Input/Input';
import Stack from 'components/Stack/Stack';
import Button from 'components/Button/Button';
import Select from 'components/Select/Select';
import Radio from 'components/Radio/Radio';
import CheckBox from 'components/CheckBox/CheckBox';
import Link from 'components/Link/Link';
import Snackbar from 'components/Snackbar/Snackbar';
import Countries from 'common/data/countries.json';

const SignupWrapper = styled.div({
  maxWidth: 1086,
  boxSizing: 'border-box',
  padding: '80px 20px',
  margin: '0 auto',
});
const SignupForm = styled.form({
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
  width: 192,
  '@media (max-width: 992px)': {
    width: '100%',
  },
});
const OptionItem = styled.li({
  fontSize: 13,
  padding: '9px 18px',
  cursor: 'pointer',
  ':hover': {
    color: 'var(--primary)',
  },
});
const Selected = styled.span({
  color: 'var(--primary)',
  fontWeight: 'bold',
});
const ProfileWrapper = styled(Stack)({
  marginBottom: 20,
});
const ProfileContent = styled.div({
  width: 255,
});
const ProfileTitle = styled.h4({
  fontSize: 15.4,
  color: 'var(--dark)',
  margin: 0,
  marginBottom: 8,
});
const ProfileText = styled.p({
  margin: 0,
});
const SpanPolicy = styled.span({
  color: 'var(--secondary)',
});
const CheckBoxWrapper = styled.div({
  marginTop: 8,
  marginBottom: 24,
});
const ButtonSignup = styled(Button)({
  fontWeight: 'bold',
});
const Text = styled.p({
  margin: '16px 0',
  textAlign: 'center',
});
const Error = styled.span({
  color: 'var(--danger)',
});
const InputEmailWrapper = styled('div')({
  paddingTop: 16.5,
  marginBottom: 24,
  width: 192,
  '@media (max-width: 992px)': {
    width: '100%',
    paddingTop: 0,
  },
});
const Signup = forwardRef(({ ...props }, ref) => {
  const [filter, setFilter] = useState('');
  const error = useSelector((state) => state.signup.error);
  const success = useSelector((state) => state.signup.success);
  const disabled = useSelector((state) => state.signup.isDisabled);
  const dispatch = useDispatch();
  const listFilter = Countries.filter((item) => {
    return item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
  });
  useEffect(() => {
    return () => dispatch(cancelErrorSuccess());
  }, [dispatch]);
  const formik = useFormik({
    initialValues: {
      realName: '',
      email: '',
      password: '',
      confirmPassword: '',
      nickName: '',
      country: '',
      profileType: 'worker',
      termsOfService: false,
      eventAndOffer: false,
    },
    validationSchema: Yup.object({
      realName: Yup.string()
        .matches(
          /^[a-zA-Z0-9 ]+$/,
          'RealName can only contain strings, numbers and spaces'
        )
        .required('Required!'),
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
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('required!'),
      nickName: Yup.string()
        .matches(
          /^[a-zA-Z0-9_-]+$/,
          'RealName can only contain strings, numbers, "_ , -"'
        )
        .required('Required!'),
      country: Yup.string().required('Required!'),
      termsOfService: Yup.boolean().oneOf(
        [true],
        'You need to accept the Terms of Service'
      ),
      eventAndOffer: Yup.boolean().oneOf(
        [true],
        'You need to accept the events and offers'
      ),
    }),
    onSubmit: (values) => {
      dispatch(signup(values));
    },
  });

  useEffect(() => {
    if (error) {
      formik.setFieldError('email', error);
      dispatch(cancelError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <SignupWrapper {...props} ref={ref}>
      <Snackbar
        anchorOrigin="top-right"
        open={success}
        color="success"
        variant="filled"
        onClose={() => dispatch(cancelSuccess(null))}
        message={success}
      />
      <SignupForm onSubmit={formik.handleSubmit}>
        <Title>Sign Up</Title>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent="space-between"
        >
          <InputWrapper>
            <Input
              type="text"
              name="realName"
              id="real-name"
              label="Real name (for internal verific. only)"
              placeholder="Type your response here"
              onChange={formik.handleChange}
              error={formik.errors.realName}
              touched={formik.touched.realName}
              focused
            />
          </InputWrapper>
          <InputEmailWrapper>
            <Input
              type="email"
              name="email"
              id="email"
              label="Email"
              placeholder="Type your response here"
              onChange={formik.handleChange}
              error={formik.errors.email}
              touched={formik.touched.email}
              focused
            />
          </InputEmailWrapper>
        </Stack>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent="space-between"
        >
          <InputWrapper>
            <Input
              type="password"
              name="password"
              id="password"
              label="Password"
              placeholder="Type your response here"
              onChange={formik.handleChange}
              error={formik.errors.password}
              touched={formik.touched.password}
              focused
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              label="Confirm Password"
              placeholder="Type your response here"
              onChange={formik.handleChange}
              error={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
              focused
            />
          </InputWrapper>
        </Stack>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent="space-between"
        >
          <InputWrapper>
            <Input
              type="text"
              name="nickName"
              id="nick-name"
              label="Nickname"
              placeholder="Type your response here"
              onChange={formik.handleChange}
              error={formik.errors.nickName}
              touched={formik.touched.nickName}
              focused
            />
          </InputWrapper>
          <InputWrapper>
            <Select
              value={formik.values.country}
              name="country"
              label="Select Country"
              placeholder="Select Country"
              error={formik.errors.country}
              touched={formik.touched.country}
              onSearch={(e) => {
                setFilter(e.target.value);
              }}
            >
              {listFilter.length === 0 ? (
                <OptionItem>No results found</OptionItem>
              ) : (
                listFilter.map((item, index) => (
                  <OptionItem
                    onClick={() => {
                      formik.setFieldValue('country', item.name, true);
                    }}
                    key={index}
                  >
                    {item.name === formik.values.country ? (
                      <Selected>{item.name}</Selected>
                    ) : (
                      item.name
                    )}
                  </OptionItem>
                ))
              )}
            </Select>
          </InputWrapper>
        </Stack>
        <ProfileWrapper
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <ProfileContent>
            <ProfileTitle>Select your profile type:</ProfileTitle>
            <ProfileText>
              Select the desired profile type now, but you can switch between
              them later.
            </ProfileText>
          </ProfileContent>
          <Stack spacing={10}>
            <Radio
              id="worker"
              value="worker"
              name="profileType"
              label="I'm a Worker"
              checked={formik.values.profileType === 'worker'}
              onChange={formik.handleChange}
            />
            <Radio
              id="employer"
              value="employer"
              name="profileType"
              label="I'm an Employer"
              checked={formik.values.profileType === 'employer'}
              onChange={formik.handleChange}
            />
          </Stack>
        </ProfileWrapper>
        <CheckBox
          id="privacy-policy"
          color="success"
          name="termsOfService"
          onChange={formik.handleChange}
          label={
            <SpanPolicy>
              I agree to Pickoworker’s Terms of Service and Privacy Policy.
            </SpanPolicy>
          }
        />
        {formik.errors.termsOfService && formik.touched.termsOfService && (
          <Error>{formik.errors.termsOfService}</Error>
        )}
        <CheckBoxWrapper>
          <CheckBox
            id="privacy-email"
            color="success"
            name="eventAndOffer"
            onChange={formik.handleChange}
            label={
              <SpanPolicy>
                Send me news, events and offers via periodic email.
              </SpanPolicy>
            }
          />
          {formik.errors.eventAndOffer && formik.touched.eventAndOffer && (
            <Error>{formik.errors.eventAndOffer}</Error>
          )}
        </CheckBoxWrapper>
        <ButtonSignup
          type="submit"
          variant="contained"
          size="large"
          disabled={disabled}
          fullWidth
        >
          SIGN UP
        </ButtonSignup>
        <Text>
          <span>Have an account? </span>
          <Link to="/login">Login now</Link>
        </Text>
      </SignupForm>
    </SignupWrapper>
  );
});
export default Signup;
