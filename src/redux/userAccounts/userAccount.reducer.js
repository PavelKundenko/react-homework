import userAccountTypes from './userAccount.types';
import { localStorageObjects } from '../../constants';

const currentUser = JSON.parse(localStorage.getItem(localStorageObjects.CURRENT_USER)) ?? {};

const INITIAL_STATE = {
  login: currentUser.login ?? '',
  password: currentUser.password ?? '',
  isLogged: Boolean(JSON.parse(localStorage.getItem(localStorageObjects.CURRENT_USER)))
};

export const userAccountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userAccountTypes.LOGIN_CHANGED:
      return {
        ...state,
        login: action.payload.newValue
      };

    case userAccountTypes.PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload.newValue
      };

    case userAccountTypes.LOGGED_IN:
      return {
        ...state,
        isLogged: true
      };

    case userAccountTypes.LOGGED_OUT:
      return {
        ...state,
        login: '',
        password: '',
        isLogged: false
      };

    default:
      return state;
  }
};

