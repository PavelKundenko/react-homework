import React from "react";
import styles from './CustomButton.module.scss';

const CustomButton = ({value, clickHandler}) => (
  <div className={styles.ButtonContainer}>
    <button
      className={styles.Button}
      onClick={clickHandler}
    >
      {value}
    </button>
  </div>
);

export default CustomButton;
