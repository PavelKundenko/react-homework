export const userDataSelector = (state) => ({
  login: state.userAccountReducer.login,
  password: state.userAccountReducer.password
});

export const isLoggedSelector = (state) => state.userAccountReducer.isLogged;
