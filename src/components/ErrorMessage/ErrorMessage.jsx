import React from 'react';
import { connect } from 'react-redux';

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

export default connect(null, mapDispatchToProps)(ErrorMessage);
