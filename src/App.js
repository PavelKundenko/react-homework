import React from 'react';
import HomePage from "./features/HomePage/HomePage";
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className="">
        <h1>Movies</h1>
      </header>
      <HomePage />
      <footer className="">
        &copy; EPAM 2020
      </footer>
    </div>
  );
}

export default App;
