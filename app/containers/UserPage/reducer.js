/*
 *
 * UserPage reducer
 *
 */
import produce from 'immer';
import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
} from './constants';

export const initialState = {
  data: {},
  error: null,
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_USERS:
        draft.loading = true;
        break;
      case FETCH_USERS_SUCCESS:
        draft.data = action.users;
        draft.loading = false;
        break;
      case FETCH_USERS_ERROR:
        draft.error = action.error;
        draft.loading = false;
    }
  });

export default userReducer;
