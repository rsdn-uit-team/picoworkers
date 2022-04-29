import { loginFailed, loginSuccess } from 'actions/login.action';
import { call, put } from 'redux-saga/effects';
import { loginAPI } from 'services/login.service';

export function* loginSaga(action) {
  try {
    const response = yield call(loginAPI, action.payload);
    if (response.data.token) {
      yield put(loginSuccess(response.data.token));
    } else {
      yield put(loginFailed(response.data.message));
    }
  } catch (error) {}
}
