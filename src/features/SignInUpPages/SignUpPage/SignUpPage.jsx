import React, { useState } from'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import WithTranslation from '../../../hocs/WithTranslation/WithTranslation';
import { loginChanged, passwordChanged, logIn } from '../../../redux/userAccounts/userAccount.actions'
import { userDataSelector } from '../../../redux/userAccounts/userAccount.selectors'
import { localStorageObjects, propTypesShapes } from '../../../constants';
import Api  from '../../../helpers/Api'
import styles from '../SignInUpPage.module.scss';

const SignUpPage = ({ history, loginChanged, passwordChanged, logIn, userData, localizationData }) => {
  const [errors, updateErrors] = useState([]);

  const validateForm = (formData) => {
    const validationErrors = [];

    if (formData.login.length < 4) {
      validationErrors.push('Invalid login. ');
    } else if (formData.password.length < 6) {
      validationErrors.push('Password should include at least 6 characters. ');
    }

    return validationErrors;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    updateErrors(() => []);

    const validationErrors = validateForm(userData);

    if (validationErrors.length) {
      updateErrors(() => [...validationErrors]);
    } else {
      Api.register(userData)
        .then((response) => {
          localStorage.setItem(localStorageObjects.CURRENT_USER, JSON.stringify(response.data));

          logIn();

          history.push('/home');
        })
        .catch(() => updateErrors(() => ['Request failed. Try again later.']))
    }
  };

  return (
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
          <p>{localizationData.labelSignIn} <Link to='/sign-in'>{localizationData.linkSignIn}</Link></p>
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
  logIn
};

SignUpPage.propTypes = {
  userData: PropTypes.shape(propTypesShapes.USER_DATA).isRequired,
  loginChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

export default WithTranslation(withConnect, SignUpPage.name);
