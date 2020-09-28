import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import Spinner from '../../../components/Spinner/Spinner';
import WithTranslation from '../../../hocs/WithTranslation/WithTranslation';
import { userDataSelector } from '../../../redux/userAccounts/userAccount.selectors';
import { logIn, loginChanged, passwordChanged } from '../../../redux/userAccounts/userAccount.actions';
import { localStorageObjects, propTypesShapes } from '../../../constants';
import Api from '../../../helpers/Api';
import styles from '../SignInUpPage.module.scss';

const SignInPage = ({ history, loginChanged, passwordChanged, logIn, userData, isUsersLoading, localizationData }) => {
  const [errors, updateErrors] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    updateErrors(() => '');

    const { login, password } = userData;

    if (!login.trim() || !password.trim()) {
      updateErrors(() => 'Enter login and password.');
    } else {
      Api.logIn(userData)
        .then((response) => {
          if (!response.data.length) {
            updateErrors(() => 'Invalid login or password');
          } else {
            localStorage.setItem(localStorageObjects.CURRENT_USER, JSON.stringify(userData));

            logIn();

            history.push('/home');
          }
        })
        .catch(() => updateErrors(() => 'Server error occurred. Try again later.'))
    }
  };

  return isUsersLoading ? (
        <Spinner />
      ) : (
        <div className='container'>
          <div className='row justify-content-center'>
            <form className={`${styles.form} col-md-6`}>
              <h2 className={styles.formTitle}>{localizationData.headline}</h2>
              <div className={styles.formControl}>
                <CustomInput
                  type='text'
                  placeholder={localizationData.loginPlaceholder}
                  required={true}
                  onChange={loginChanged}
                  value={userData.login} />
              </div>
              <div className={styles.formControl}>
                <CustomInput
                  type='password'
                  placeholder={localizationData.passwordPlaceholder}
                  required={true}
                  onChange={passwordChanged}
                  value={userData.password} />
              </div>
              <CustomButton
                type='submit'
                value={localizationData.buttonSubmit}
                clickHandler={submitHandler} />
              <p>{localizationData.labelSignUp} <Link to='/sign-up'>{localizationData.linkSignUp}</Link></p>
              <p className={styles.errorContainer}>
                { errors }
              </p>
            </form>
          </div>
        </div>
      )
};

const mapStateToProps = (state) => ({
  userData: userDataSelector(state)
});

const mapDispatchToProps = {
  loginChanged: (event) => loginChanged(event.target.value),
  passwordChanged: (event) => passwordChanged(event.target.value),
  logIn,
};

SignInPage.propTypes = {
  userData: PropTypes.shape(propTypesShapes.USER_DATA).isRequired,
  loginChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(SignInPage);

export default WithTranslation(withConnect, SignInPage.name);
