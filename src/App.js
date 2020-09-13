import React from 'react';
import HomePage from "./features/HomePage/HomePage";
import { Provider } from 'react-redux';
import { configureStore } from "./redux/store";

import styles from './App.module.scss';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <header>
          <h1>Movies</h1>
        </header>
        <HomePage />
        <footer>
          &copy; Pavel Kundenko EPAM 2020
        </footer>
      </div>
    </Provider>
  );
}

export default App;
