import React from "react";
import PropTypes from 'prop-types';

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

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func
};

CustomInput.defaultProps = {
  changeHandler: () => false
};

export default CustomInput;
