import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
});

export default rootReducer;
