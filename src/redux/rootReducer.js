import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { moviesReducer } from './movies/movies.reducer';
import { userAccountReducer } from './userAccounts/userAccount.reducer';

export const rootReducer = combineReducers({
  moviesReducer,
  userAccountReducer,
  form
});
