import {put, takeLatest, all, call} from 'redux-saga/effects';
import {requestUserByToken, getUserProfile} from '../../../../client/http';
import {push} from 'connected-react-router';
import Cookies from 'js-cookie';
import {userLoginSuccess, setTokenSuccess} from './userSlice';

function* fetchLoginData() {
  try {
    const result = yield call(getUserProfile);
    yield put(userLoginSuccess(result.data));
  } catch (e) {
    console.error('ERROR ', e);
    yield put(push('/'));
  }
}

function* getUserDataByToken({type, payload}: {type: string; payload: any}) {
  try {
    const result = yield call(requestUserByToken, payload);
    Cookies.set('token', result.data.access);
    yield put(setTokenSuccess(result.data.access));
    yield put(push('/plmx/product'));
  } catch (e) {
    console.error('error', e);
    // yield put(userExitAction());
    yield put(push('/'));
  }
}

function* userExit() {
  Cookies.remove('token');
  yield put(push('/'));
}

export default function* authSaga() {
  yield all([
    takeLatest('user/setToken', getUserDataByToken),
    takeLatest('user/login', fetchLoginData),
    takeLatest('user/logout', userExit),
  ]);
}
