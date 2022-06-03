import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import SignupReducer from './signup.reducer';
import CommonReducer from './common.reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  signup: SignupReducer,
  common: CommonReducer,
});

export default rootReducer;
