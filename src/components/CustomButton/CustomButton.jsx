import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CustomButton.module.scss';

const CustomButton = ({ value, clickHandler, type, inverted = false }) => (
  <div className={styles.buttonContainer}>
    <button
      type={type ?? 'button'}
      className={classNames(styles.button, { [styles.inverted]: inverted } )}
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
