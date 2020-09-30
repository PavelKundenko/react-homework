import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CustomInput.module.scss';

const CustomInput = ({ type, placeholder, onChange, label, id, value, required, input }) => {
  const changeHandler = input ? input.onChange : onChange;
  const initialValue = input ? input.value : value;

  return (
    <div className={styles.inputContainer}>
      { label && (<label className={styles.label} htmlFor={id}>{label}</label>) }
      <input
        className={classNames(styles.input, { [styles.withLabel]: label })}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        name={label}
        id={id}
        defaultValue={initialValue}
        required={required} />
    </div>
  );
};


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
