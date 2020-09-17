import React from "react";
import styles from './CustomTextarea.module.scss';
import PropTypes from "prop-types";

const CustomTextarea = ({ placeholder, changeHandler, label, id, value, required }) => (
  <div className={styles.TextareaContainer}>
    {
      label ?
        <label className={styles.Label} htmlFor={id}>{label}</label>
        :
        null
    }
    <textarea
      className={styles.Textarea}
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
  value: PropTypes.string
};

CustomTextarea.defaultProps = {
  value: ''
};

export default CustomTextarea;
