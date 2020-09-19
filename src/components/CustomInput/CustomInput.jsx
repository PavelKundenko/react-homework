import React from 'react';

import PropTypes from 'prop-types';

import styles from './CustomInput.module.scss';

const CustomInput = ({ type, placeholder, changeHandler, label, id, value, required }) => (
  <div className={styles.inputContainer}>
    {
      label ?
        <label className={styles.label} htmlFor={id}>{label}</label>
        :
        null
    }
    <input
      className={`${styles.input} ${label ? styles.withLabel : ''}`}
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
      name={label}
      id={id}
      defaultValue={value}
      required={required}
    />
  </div>
);

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string
};

CustomInput.defaultProps = {
  value: ''
};

export default CustomInput;
