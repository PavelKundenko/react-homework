import React from 'react';

import HomePage from './features/HomePage/HomePage';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <header className={styles.header}>
      <h1>Movies</h1>
    </header>
    <HomePage />
    <footer className={styles.footer}>
      &copy; Pavel Kundenko EPAM 2020
    </footer>
  </div>
);


export default App;
