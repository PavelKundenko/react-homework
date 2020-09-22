import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './features/HomePage/HomePage';
import MoviePage from './features/MoviePage/MoviePage';
import EditMoviePage from './features/EditMoviePage/EditMoviePage';
import SignUpPage from './features/SignInUpPages/SignUpPage/SignUpPage';
import SignInPage from './features/SignInUpPages/SignInPage/SignInPage';
import Header from './features/Header/Header';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ActorPage from './features/ActorPage/ActorPage';
import { configureStore } from './redux/store';
import styles from './App.module.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route path='/sign-up' component={SignUpPage}/>
          <Route path='/sign-in' component={SignInPage} />
          <ProtectedRoute path='/home' component={HomePage} />
          <ProtectedRoute path='/movie/:id' component={MoviePage} />
          <ProtectedRoute path='/edit-movie/:id' component={EditMoviePage} />
          <ProtectedRoute path='/actor/:id' component={ActorPage} />
          <Redirect to='/home'/>
        </Switch>
        <footer className={styles.footer}>
          &copy; Pavel Kundenko EPAM 2020
        </footer>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
