import userAccountTypes from "./userAccount.types";

const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? {};

const INITIAL_STATE = {
  login: currentUser.login ?? '',
  password: currentUser.password ?? '',
  isLogged: !!JSON.parse(localStorage.getItem('currentUser'))
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
      return {
        ...state
      };
  }
};

