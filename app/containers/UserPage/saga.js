// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, takeLatest } from '@redux-saga/core/effects';
import request from 'utils/request';
import { fetchUsersSuccess, fetchUsersError } from './actions';
import { FETCH_USERS } from './constants';

export function* getUsersSaga(action) {
  console.log(action.data);
  let url = '/users';
  if (action.data) {
    url = `${url}?username=${action.data}`;
  }
  try {
    const users = yield call(request, url);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersError(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_USERS, getUsersSaga);
}
