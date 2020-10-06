import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideErrorMessage } from '../../redux/movies/movies.actions';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ errorMessage, hideErrorMessage }) => (
  <div className={styles.error}>
    <p className={styles.errorMessage}>{errorMessage}</p>
    <button className={styles.errorCloseBtn} onClick={hideErrorMessage}>&times;</button>
  </div>
);

const mapDispatchToProps = {
  hideErrorMessage
};

ErrorMessage.propTypes = {
  hideErrorMessage: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default connect(null, mapDispatchToProps)(ErrorMessage);
