import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userPage state domain
 */

const selectUserPageDomain = state => state.users || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserPage
 */

const makeSelectUserPage = () =>
  createSelector(
    selectUserPageDomain,
    userState => userState.data,
  );

export default makeSelectUserPage;
export { selectUserPageDomain };
