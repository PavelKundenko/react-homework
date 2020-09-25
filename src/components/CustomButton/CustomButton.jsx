import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomButton.module.scss';


const CustomButton = ({ value, clickHandler, type, inverted }) => (
  <div className={styles.buttonContainer}>
    <button
      type={type ?? 'button'}
      className={`${styles.button} ${inverted ? styles.buttonInverted : ''}`}
      onClick={clickHandler} >
      {value}
    </button>
  </div>
);

CustomButton.propTypes = {
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  type: PropTypes.string,
  inverted: PropTypes.bool
};

CustomButton.defaultProps = {
  clickHandler: () => false
};

export default CustomButton;
