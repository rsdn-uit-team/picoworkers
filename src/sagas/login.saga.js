import { loginFailed, loginSuccess } from 'actions/auth.action';
import { call, put } from 'redux-saga/effects';
import { loginAPI } from 'services/login.service';
import { setLoading } from 'actions/common.action';

export function* loginSaga(action) {
  try {
    const response = yield call(loginAPI, action.payload);
    if (response.data.token) {
      yield put(loginSuccess(response.data.token));
      yield put(setLoading(false));
    } else {
      yield put(loginFailed(response.data.message));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
  }
}
