import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import SignUpPage from './features/SignInUpPages/SignUpPage/SignUpPage';
import SignInPage from './features/SignInUpPages/SignInPage/SignInPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import HomePage from './features/HomePage/HomePage';
import MoviePage from './features/MoviePage/MoviePage';
import EditMoviePage from './features/EditMoviePage/EditMoviePage';
import ActorPage from './features/ActorPage/ActorPage';

const Routes = () => (
  <Switch>
    <Route path='/sign-up' component={SignUpPage}/>
    <Route path='/sign-in' component={SignInPage} />
    <ProtectedRoute path='/home' component={HomePage} />
    <ProtectedRoute path='/movie/:id' component={MoviePage} />
    <ProtectedRoute path='/edit-movie/:id' component={EditMoviePage} />
    <ProtectedRoute path='/actor/:id' component={ActorPage} />
    <Redirect to='/home'/>
  </Switch>
);

export default Routes;
