import userAccountTypes from './userAccount.types';

export const loginChanged = (newValue) => ({
  type: userAccountTypes.LOGIN_CHANGED,
  payload: {
    newValue
  }
});

export const passwordChanged = (newValue) => ({
  type: userAccountTypes.PASSWORD_CHANGED,
  payload: {
    newValue
  }
});

export const logIn = () => ({
  type: userAccountTypes.LOGGED_IN
});

export const logOut = () => ({
  type: userAccountTypes.LOGGED_OUT
});
