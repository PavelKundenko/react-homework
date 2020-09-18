import React from 'react';

import styles from './CustomButton.module.scss';

const CustomButton = ({ value, clickHandler }) => (
  <div className={styles.buttonContainer}>
    <button className={styles.button} onClick={clickHandler}>
      {value}
    </button>
  </div>
);

export default CustomButton;
