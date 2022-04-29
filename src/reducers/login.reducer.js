import {
  DISABLE_BUTTON_LOGIN,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from 'actions/login.action';

const initialState = {
  token: localStorage.getItem('token') || null,
  error: null,
  isDisabled: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isDisabled: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isDisabled: false,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        isDisabled: false,
      };
    case DISABLE_BUTTON_LOGIN:
      return {
        ...state,
        isDisabled: action.payload,
      };
    default:
      return state;
  }
};
export default LoginReducer;
