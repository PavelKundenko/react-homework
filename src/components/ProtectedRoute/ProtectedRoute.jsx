import React from 'react';

import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

import {isLoggedSelector} from '../../redux/userAccounts/userAccount.selectors';

const ProtectedRoute = (props) => (
  props.isLogged ? <Route {...props} /> : <Redirect to='/sign-in' />
);

const mapStateToProps = (state) => ({
  isLogged: isLoggedSelector(state)
});

export default connect(mapStateToProps)(ProtectedRoute);
