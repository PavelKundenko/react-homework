import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from "./features/HomePage/HomePage";
import MoviePage from "./features/MoviePage/MoviePage";
import EditMoviePage from "./features/EditMoviePage/EditMoviePage";

import { configureStore } from "./redux/store";

import styles from './App.module.scss';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.App}>
          <header>
            <h1>Movies</h1>
          </header>
          <Switch>
            <Route exact path='/home' component={HomePage} />
            <Route path='/movie/:id' component={MoviePage} />
            <Route path='/edit-movie/:id' component={EditMoviePage} />
            <Redirect to='/home'/>
          </Switch>
          <footer>
            &copy; Pavel Kundenko EPAM 2020
          </footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
