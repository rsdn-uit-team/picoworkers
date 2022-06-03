import apiService from 'common/api.service';

export const signupAPI = (data) => {
  return apiService.post('auth/register', {
    fullName: data.fullName,
    username: data.username,
    email: data.email,
    password: data.password,
    role: data.role,
    region: data.region,
  });
};
