import { action } from './common.action';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const CANCEL_ERROR = 'CANCEL_ERROR';
export const CANCEL_SUCCESS = 'CANCEL_SUCCESS';
export const CANCEL_ERROR_SUCCESS = 'CANCEL_ERROR_SUCCESS';

export const signup = (payload) => action(SIGNUP, payload);
export const signupSuccess = (payload) => action(SIGNUP_SUCCESS, payload);
export const signupFailed = (payload) => action(SIGNUP_FAILED, payload);
export const cancelError = (payload) => action(CANCEL_ERROR, payload);
export const cancelSuccess = (payload) => action(CANCEL_SUCCESS, payload);
export const cancelErrorSuccess = (payload) =>
  action(CANCEL_ERROR_SUCCESS, payload);
