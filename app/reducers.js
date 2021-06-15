/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { reducer as reduxFormReducer } from 'react-final-form';
import userReducer from './containers/UserPage/reducer';
// import { Form } from 'react-final-form';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    users: userReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    form: reduxFormReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
