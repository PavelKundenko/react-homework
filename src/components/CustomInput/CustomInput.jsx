import React from "react";
import styles from './CustomInput.module.scss';

const CustomInput = ({ type, placeholder, changeHandler }) => (
  <div className={styles.InputContainer}>
    <input
      className={styles.Input}
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
    />
  </div>
);

export default CustomInput;
