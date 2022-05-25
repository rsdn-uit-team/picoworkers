import { action } from './index.action';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const DISABLE_BUTTON_LOGIN = 'DISABLE_BUTTON_LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (payload) => action(LOGIN, payload);
export const loginSuccess = (payload) => action(LOGIN_SUCCESS, payload);
export const loginFailed = (payload) => action(LOGIN_FAILED, payload);
export const cancelError = (payload) => action(LOGIN_FAILED, payload);
export const disableButtonLogin = (payload) =>
  action(DISABLE_BUTTON_LOGIN, payload);
export const logout = (payload) => action(LOGOUT, payload);
