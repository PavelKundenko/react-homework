import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomButton.module.scss';

const CustomButton = ({ value, clickHandler }) => (
  <div className={styles.buttonContainer}>
    <button
      type="button"
      className={styles.button}
      onClick={clickHandler} >
      {value}
    </button>
  </div>
);

CustomButton.propTypes = {
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func
};

CustomButton.defaultProps = {
  clickHandler: () => false
};

export default CustomButton;
