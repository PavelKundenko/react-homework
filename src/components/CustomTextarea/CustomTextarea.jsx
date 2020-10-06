import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomTextarea.module.scss';

const CustomTextarea = ({ placeholder, changeHandler, label, id, value, required }) => (
  <div className={styles.textareaContainer}>
    { label && (<label className={styles.label} htmlFor={id}>{label}</label>) }
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      onChange={changeHandler}
      id={id}
      defaultValue={value}
      required={required}
      rows='10'
    >
    </textarea>
  </div>
);

CustomTextarea.propTypes = {
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool
};

CustomTextarea.defaultProps = {
  value: '',
  required: false
};

export default CustomTextarea;
