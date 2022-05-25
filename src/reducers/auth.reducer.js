import {
  DISABLE_BUTTON_LOGIN,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from 'actions/auth.action';

const initialState = {
  token: localStorage.getItem('token') || null,
  error: null,
  isDisabled: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isDisabled: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload);
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
    case LOGOUT:
      return {
        ...state,
        token: null,
        isDisabled: false,
      }
    default:
      return state;
  }
};
export default AuthReducer;
