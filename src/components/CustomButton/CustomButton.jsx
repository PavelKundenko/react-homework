import React from "react";
import PropTypes from 'prop-types';

import styles from './CustomButton.module.scss';

const CustomButton = ({value, clickHandler, type, inverted}) => (
  <div className={styles.ButtonContainer}>
    <button
      type={type ?? 'button'}
      className={`${styles.Button} ${inverted ? styles.ButtonInverted : ''}`}
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
