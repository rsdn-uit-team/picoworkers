import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './signup.scss';
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      realName: '',
      email: '',
      password: '',
      confirmPassword: '',
      nickName: '',
      country: '',
      whoAmI: '',
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
      whoAmI: Yup.string().required('Không được bỏ trống trường này'),
      agree: Yup.bool().oneOf([true], 'Vui lòng chấp nhận điều khoản'),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container sign-up">
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form__group">
          <div className="form__item">
            <label htmlFor="real-name">
              Real name (for internal verific. only)
            </label>
            <input
              id="real-name"
              type="text"
              name="realName"
              placeholder="Type your response here"
              value={formik.values.realName}
              onChange={formik.handleChange}
            />
            {formik.errors.realName && formik.touched.realName && (
              <p className="error">{formik.errors.realName}</p>
            )}
          </div>
          <div className="form__item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Type your response here"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error">{formik.errors.email}</p>
            )}
          </div>
        </div>
        <div className="form__group">
          <div className="form__item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Type your response here"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error">{formik.errors.password}</p>
            )}
          </div>
          <div className="form__item">
            <label htmlFor="confirmpass">Confirm Password</label>
            <input
              id="confirmpass"
              type="password"
              name="confirmPassword"
              placeholder="Type your response here"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p className="error">{formik.errors.confirmPassword}</p>
              )}
          </div>
        </div>
        <div className="form__group">
          <div className="form__item">
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              name="nickName"
              type="text"
              placeholder="Type your response here"
              value={formik.values.nickName}
              onChange={formik.handleChange}
            />
            {formik.errors.nickName && formik.touched.nickName && (
              <p className="error">{formik.errors.nickName}</p>
            )}
          </div>
          <div className="form__item">
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
          </div>
        </div>
        <div className="form__group">
          <h5 className="profile">
            Select your profile type:
            <p className="profile__title">
              Select the desired profile type now, but you can switch between
              them later
            </p>
          </h5>
          <div className="whoami">
            <div className="whoami__item">
              <input
                type="radio"
                id="check-worker"
                name="whoAmI"
                value="worker"
                onChange={formik.handleChange}
              />
              <label htmlFor="check-worker"> I'm a Worker</label>
            </div>
            <div className="whoami__item">
              <input
                type="radio"
                id="check-employer"
                name="whoAmI"
                value="employer"
                onChange={formik.handleChange}
              />
              <label htmlFor="check-employer"> I'm an Employer</label>
            </div>
            {formik.errors.whoAmI && formik.touched.whoAmI && (
              <p className="error">{formik.errors.whoAmI}</p>
            )}
          </div>
        </div>
        <div className="accept-terms">
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
        </div>
        <input type="submit" value="SIGN UP" />
      </form>
      <p className="login-acc">
        Have an account? <a>Login now</a>
      </p>
    </div>
  );
};

export default Signup;
