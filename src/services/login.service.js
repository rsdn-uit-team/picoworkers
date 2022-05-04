import apiService from 'common/api.service';

export const loginAPI = (data) => {
  return apiService.post('auth/login', {
    email: data.email,
    password: data.password,
  });
};
