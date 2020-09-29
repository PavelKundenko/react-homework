import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './features/Header/Header';
import Routes from './Routes';
import { configureStore } from './redux/store';
import styles from './App.module.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes />
        <footer className={styles.footer}>
          &copy; Pavel Kundenko EPAM 2020
        </footer>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
