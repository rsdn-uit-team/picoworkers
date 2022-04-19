import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Inputfield from 'components/InputFields/InputFields';
import styled from '@emotion/styled';
const DivSignup = styled.div`
  padding-top: 30px;
  width: 50%;
  display: block;
  margin: 0 auto;
  @media (max-width: 1025px) {
    width: 70%;
  }
  @media (max-width: 767.98px) {
    width: 80%;
  }
  & .error {
    margin: 2px 0;
    color: red;
    font-size: 12px;
  }
`;
const DivGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 767.98px) {
    flex-direction: column;
  }
  & .profile {
    margin-top: 10px;
    font-weight: 600;
    color: #596680;
    width: 45%;
    @media (max-width: 767.98px) {
      width: 100%;
    }
  }
  & .profile__title {
    font-weight: 100;
  }
`;
const DivItem = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767.98px) {
    width: 100%;
  }
  & label {
    color: #a9adba;
    font-weight: 600;
  }
  & select {
    background-color: #f5f7fa;
    border: none;
    width: 100%;
    padding: 10px 10px;
  }
  & select {
    outline: none;
  }
`;
const AccountType = styled.div`
  margin-top: 10px;
  width: 45%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;
const AcceptTerms = styled.div`
  margin-top: 20px;
  & .accept-terms__item {
    & input {
      margin-right: 10px;
    }
    & label {
      color: #81878b;
    }
  }
`;
const SubmitStyle = styled.input`
  width: 100%;
  background-color: #2ea95f;
  padding: 10px 0;
  color: white;
  margin-top: 20px;
`;
const LoginAcc = styled.p`
  margin-top: 10px;
  text-align: center;
  & a {
    color: #2ea95f;
    padding-left: 2px;
  }
`;
const InputStyle = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767.98px) {
    width: 100%;
  }
  label {
    color: #a9adba;
    font-weight: 600;
  }
  input {
    width: 100%;
    padding: 10px 10px;
    border: none;
    background-color: #f5f7fa;
    & :focus {
      outline: none;
    }
  }
`;
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      realName: '',
      email: '',
      password: '',
      confirmPassword: '',
      nickName: '',
      country: '',
      account_type: '',
      agree: false,
    },
    validationSchema: Yup.object({
      realName: Yup.string('Enter your name').required(
        'Không được bỏ trống trường này'
      ),
      email: Yup.string('Enter your email')
        .required('Không được bỏ trống trường này')
        .email('Email không đúng định dạng')
        .min(6, 'Email phải lớn hơn 6 ký tự')
        .max(64, 'Email quá dài'),
      password: Yup.string('Enter your password')
        .max(64, 'Mật khẩu quá dài ')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Mật khẩu phải có ít nhất 8 ký tự. Bao gồm chữ hoa thường số và ký tự đặt biệt!'
        )
        .required('Không được bỏ trống trường này'),
      confirmPassword: Yup.string('Enter your confirmpass')
        .oneOf([Yup.ref('password')], 'Mật khẩu nhập lại không đúng')
        .required('Không được bỏ trống trường này'),
      nickName: Yup.string().required('Không được bỏ trống trường này'),
      country: Yup.string().required('Không được bỏ trống trường này'),
      account_type: Yup.string().required('Không được bỏ trống trường này'),
      agree: Yup.bool().oneOf([true], 'Vui lòng chấp nhận điều khoản'),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <DivSignup>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <DivGroup>
          <InputStyle>
            <Inputfield
              label="Real name (for internal verific. only)"
              id="real-name"
              name="realName"
              type="text"
              value={formik.values.realName}
              onchange={formik.handleChange}
              errors={formik.errors.realName}
              touched={formik.touched.realName}
            />
          </InputStyle>
          <InputStyle>
            <Inputfield
              label="Email"
              id="email"
              name="email"
              type="text"
              value={formik.values.email}
              onchange={formik.handleChange}
              errors={formik.errors.email}
              touched={formik.touched.email}
            />
          </InputStyle>
        </DivGroup>
        <DivGroup>
          <InputStyle>
            <Inputfield
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onchange={formik.handleChange}
              errors={formik.errors.password}
              touched={formik.touched.password}
            />
          </InputStyle>
          <InputStyle>
            <Inputfield
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onchange={formik.handleChange}
              errors={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
            />
          </InputStyle>
        </DivGroup>
        <DivGroup>
          <InputStyle>
            <Inputfield
              label="Nickname"
              id="nickName"
              name="nickName"
              type="text"
              value={formik.values.nickName}
              onchange={formik.handleChange}
              errors={formik.errors.nickName}
              touched={formik.touched.nickName}
            />
          </InputStyle>

          <DivItem>
            <label>Select Country</label>
            <select
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
            >
              <option></option>
              <option value="hue">Huế</option>
              <option value="dn">Đà Nẵng</option>
              <option value="sg">Sài Gòn</option>
              <option value="hn">Hà Nội</option>
            </select>
            {formik.errors.country && formik.touched.country && (
              <p className="error">{formik.errors.country}</p>
            )}
          </DivItem>
        </DivGroup>
        <DivGroup>
          <h5 className="profile">
            Select your profile type:
            <p className="profile__title">
              Select the desired profile type now, but you can switch between
              them later
            </p>
          </h5>
          <AccountType>
            <div className="account_type__item">
              <input
                type="radio"
                id="check-worker"
                name="account_type"
                value="worker"
                onChange={formik.handleChange}
              />
              <label htmlFor="check-worker"> I'm a Worker</label>
            </div>
            <div className="account_type__item">
              <input
                type="radio"
                id="check-employer"
                name="account_type"
                value="employer"
                onChange={formik.handleChange}
              />
              <label htmlFor="check-employer"> I'm an Employer</label>
            </div>
            {formik.errors.account_type && formik.touched.account_type && (
              <p className="error">{formik.errors.account_type}</p>
            )}
          </AccountType>
        </DivGroup>
        <AcceptTerms>
          <div className="accept-terms__item">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              value="agree"
              onChange={formik.handleChange}
            />

            <label htmlFor="agree">
              I agree to PickoWorker's Terms of Service and Privacy Policy.
            </label>
          </div>
          {formik.errors.agree && formik.touched.agree && (
            <p className="error">{formik.errors.agree}</p>
          )}

          <div className="accept-terms__item">
            <input
              type="checkbox"
              id="send-me"
              name="sendme"
              value="send-me"
              onChange={formik.handleChange}
            />

            <label htmlFor="send-me">
              Send me news, events and offers via periodic email.
            </label>
          </div>
        </AcceptTerms>
        <SubmitStyle type="submit" value="SIGN UP" />
      </form>
      <LoginAcc>
        Have an account? <a href="/#">Login now</a>
      </LoginAcc>
    </DivSignup>
  );
};

export default Signup;
