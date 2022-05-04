import { LOGIN } from 'actions/login.action';
import { SIGNUP } from 'actions/signup.action';
import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './login.saga';
import { signupSaga } from './signup.saga';

function* rootSage() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGNUP, signupSaga);
}

export default rootSage;
