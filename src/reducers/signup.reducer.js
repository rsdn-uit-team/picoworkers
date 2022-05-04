import {
  CANCEL_ERROR,
  CANCEL_SUCCESS,
  CANCEL_ERROR_SUCCESS,
  SIGNUP,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from 'actions/signup.action';

const initialState = {
  success: null,
  error: null,
  isDisabled: false,
};

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isDisabled: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: null,
        isDisabled: false,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        success: null,
        error: action.payload,
        isDisabled: false,
      };
    case CANCEL_SUCCESS:
      return {
        ...state,
        success: null,
      };
    case CANCEL_ERROR:
      return {
        ...state,
        error: null,
      };
    case CANCEL_ERROR_SUCCESS:
      return {
        ...state,
        error: null,
        success: null,
        isDisabled: false,
      };
    default:
      return state;
  }
};

export default SignupReducer;
