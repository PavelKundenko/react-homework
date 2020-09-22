import React, { useState } from'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import { loginChanged, passwordChanged, logIn } from '../../../redux/userAccounts/userAccount.actions'
import { userDataSelector } from '../../../redux/userAccounts/userAccount.selectors'
import { localStorageObjects, propTypesShapes } from '../../../constants';
import styles from '../SignInUpPage.module.scss';


const SignUpPage = ({ history, loginChanged, passwordChanged, logIn, userData }) => {
  const [errors, updateErrors] = useState([]);

  const validateForm = (formData) => {
    const validationResult = {
      isValid: true,
      errors: []
    };

    if (formData.login.length < 4) {
      validationResult.errors.push('Invalid login. ');
    }

    if (formData.password.length < 6) {
      validationResult.errors.push('Password should include at least 6 characters. ');
    }

    if (validationResult.errors.length) {
      validationResult.isValid = false;
    }

    return validationResult;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    updateErrors(() => []);

    const validationResult = validateForm(userData);

    if (!validationResult.isValid) {
      updateErrors(() => [...validationResult.errors]);
    } else {
      const users = JSON.parse(localStorage.getItem(localStorageObjects.USERS)) || [];

      if (users.find((user) => user.login === userData.login)) {
        updateErrors((prevState) => [...prevState, 'This login is already registered. '])
      } else {
        logIn();

        users.push(userData);

        localStorage.setItem(localStorageObjects.USERS, JSON.stringify(users));

        localStorage.setItem(localStorageObjects.CURRENT_USER, JSON.stringify(userData));

        history.push('/home');
      }
    }
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <form className={`${styles.form} col-md-6`}>
          <h2 className={styles.formTitle}>Please register</h2>
          <div className={styles.formControl}>
            <CustomInput
              type='text'
              placeholder='Enter login'
              required={true}
              changeHandler={loginChanged}
              value={userData.login} />
          </div>
          <div className={styles.formControl}>
            <CustomInput
              type='password'
              placeholder='Enter password'
              required={true}
              changeHandler={passwordChanged}
              value={userData.password} />
          </div>
          <CustomButton
            type='submit'
            value='Sign Up'
            clickHandler={submitHandler} />
          <p>Do you have registered account? <Link to='/sign-in'>Sign In</Link></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
