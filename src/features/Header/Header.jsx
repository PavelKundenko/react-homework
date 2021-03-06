import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { logOut } from '../../redux/userAccounts/userAccount.actions';
import { isLoggedSelector, userDataSelector } from '../../redux/userAccounts/userAccount.selectors';
import { errorMessageSelector } from '../../redux/movies/movies.selectors';
import { propTypesShapes } from '../../constants';
import styles from './Header.module.scss';

const Header = ({ userData, isLogged, logOut, errorMessage }) => {
  const logOutHandler = () => {
    localStorage.removeItem('currentUser');

    logOut();
  };

  return (
    <header className={styles.header}>
      { isLogged && <NavLink className={styles.homeLink} to='/home'>Home</NavLink> }
      <h1 className={styles.headerTitle}>Movies</h1>
      {
        isLogged && (
          <div className={styles.userContainer}>
            <p>User: {userData.login} </p>
            <CustomButton value='Log out' clickHandler={logOutHandler} inverted={true}/>
          </div>
        )
      }
      { errorMessage && <ErrorMessage errorMessage={errorMessage} /> }
    </header>
  );
};

const mapStateToProps = (state) => ({
  userData: userDataSelector(state),
  isLogged: isLoggedSelector(state),
  errorMessage: errorMessageSelector(state),
});

const mapDispatchToProps = {
  logOut
};

Header.propTypes = {
  userData: PropTypes.shape(propTypesShapes.USER_DATA).isRequired,
  isLogged: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
