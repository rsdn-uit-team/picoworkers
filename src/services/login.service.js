import instance from 'services';

export const loginAPI = (data) => {
  return instance.post('auth/login', {
    email: data.email,
    password: data.password,
  });
};
