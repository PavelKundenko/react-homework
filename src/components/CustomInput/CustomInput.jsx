import React from 'react';

import styles from './CustomInput.module.scss';

const CustomInput = ({ type, placeholder, changeHandler }) => (
  <div className={styles.inputContainer}>
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
    />
  </div>
);

export default CustomInput;
