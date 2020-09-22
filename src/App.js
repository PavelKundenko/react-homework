import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './redux/store';
import HomePage from './features/HomePage/HomePage';
import styles from './App.module.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Movies</h1>
      </header>
      <HomePage />
      <footer className={styles.footer}>
        &copy; Pavel Kundenko EPAM 2020
      </footer>
    </div>
  </Provider>
);

export default App;
