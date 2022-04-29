import { LOGIN } from 'actions/login.action';
import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './login.saga';

function* rootSage() {
  yield takeLatest(LOGIN, loginSaga);
}

export default rootSage;
