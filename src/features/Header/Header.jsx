import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton';
import WithTranslation from '../../hocs/WithTranslation/WithTranslation';
import { logOut } from '../../redux/userAccounts/userAccount.actions';
import { changeLocalization } from '../../redux/movies/movies.actions';
import { isLoggedSelector, userDataSelector } from '../../redux/userAccounts/userAccount.selectors';
import { localizationSelector, nextLocalizationSelector } from '../../redux/movies/movies.selectors';
import { localStorageObjects, propTypesShapes } from '../../constants';
import styles from './Header.module.scss';

const Header = ({
  userData,
  isLogged,
  logOut,
  localizationData,
  changeLocalization,
  currentLocalization,
  nextLocalization
}) => {
  localStorage.setItem(localStorageObjects.LOCALIZATION, JSON.stringify({ currentLocalization, nextLocalization }));

  const logOutHandler = () => {
    localStorage.removeItem('currentUser');

    logOut();
  };

  const changeLocalizationHandler = () => {
    localStorage.setItem(localStorageObjects.LOCALIZATION, JSON.stringify({ currentLocalization, nextLocalization }));

    changeLocalization(nextLocalization);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        { isLogged && (<NavLink className={styles.homeLink} to='/home'>{localizationData.homepageLink}</NavLink>) }
      </nav>
      <h1 className={styles.headerTitle}>{localizationData.headline}</h1>
      <div className={styles.headerControls}>
        {
          isLogged && (
            <Fragment>
              <p>{localizationData.userLabel}: {userData.login} </p>
              <CustomButton value={localizationData.logoutButton} clickHandler={logOutHandler} inverted={true}/>
            </Fragment>
          )
        }
        <CustomButton
          value={nextLocalization}
          inverted
          clickHandler={changeLocalizationHandler} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  userData: userDataSelector(state),
  isLogged: isLoggedSelector(state),
  currentLocalization: localizationSelector(state),
  nextLocalization: nextLocalizationSelector(state)
});

const mapDispatchToProps = {
  logOut,
  changeLocalization
};

Header.propTypes = {
  userData: PropTypes.shape(propTypesShapes.USER_DATA).isRequired,
  isLogged: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export default WithTranslation(withConnect, Header.name);
