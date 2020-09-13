import React from "react";
import PropTypes from 'prop-types';

import styles from './CustomButton.module.scss';

const CustomButton = ({value, clickHandler}) => (
  <div className={styles.ButtonContainer}>
    <button
      type="button"
      className={styles.Button}
      onClick={clickHandler}
    >
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
