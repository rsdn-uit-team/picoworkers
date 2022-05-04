import apiService from 'common/api.service';

export const signupAPI = (data) => {
  return apiService.post('auth/register', {
    account_type: data.profileType,
    confirm_password: data.confirmPassword,
    country: data.country,
    email: data.email,
    nickname: data.nickName,
    password: data.password,
    realname: data.realName,
  });
};
