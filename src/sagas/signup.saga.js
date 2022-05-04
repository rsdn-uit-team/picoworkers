import { signupFailed, signupSuccess } from 'actions/signup.action';
import { call, put } from 'redux-saga/effects';
import { signupAPI } from 'services/signup.service';

export function* signupSaga(action) {
  try {
    const response = yield call(signupAPI, action.payload);
    if (response.data.Email) {
      yield put(signupSuccess('Register success!'));
    } else {
      yield put(signupFailed(response.data.message));
    }
  } catch (error) {
    yield put(signupFailed('Register failed!'));
  }
}
