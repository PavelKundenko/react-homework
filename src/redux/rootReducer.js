import { combineReducers } from 'redux';

import { homepageReducer } from './homepage/homepage.reducer';

export const rootReducer = combineReducers({
  homepageReducer
});
