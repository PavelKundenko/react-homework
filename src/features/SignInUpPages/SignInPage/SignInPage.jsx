import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { userDataSelector } from '../../../redux/userAccounts/userAccount.selectors';
import { logIn, loginChanged, passwordChanged } from '../../../redux/userAccounts/userAccount.actions';
import { localStorageObjects, propTypesShapes } from '../../../constants';
import styles from '../SignInUpPage.module.scss';


const SignInPage = ({ history, loginChanged, passwordChanged, logIn, userData }) => {
  const [errors, updateErrors] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    updateErrors(() => []);

    const users = JSON.parse(localStorage.getItem(localStorageObjects.USERS)) || [];

    const currentUser = users.find((user) => user.login === userData.login);

    if (!currentUser) {
     updateErrors(() => ['There is no registered user with this login. Register please. ']);
    } else if (currentUser.password !== userData.password) {
      updateErrors(() => ['Incorrect password. '])
    } else {
      localStorage.setItem(localStorageObjects.CURRENT_USER, JSON.stringify(currentUser));

      logIn();

      history.push('/home');
    }
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <form className={`${styles.form} col-md-6`}>
          <h2 className={styles.formTitle}>Please log in</h2>
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
            value='Sign In'
            clickHandler={submitHandler} />
          <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
          <p className={styles.errorContainer}>
            { errors }
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: userDataSelector(state)
});

const mapDispatchToProps = {
  loginChanged: (event) => loginChanged(event.target.value),
  passwordChanged: (event) => passwordChanged(event.target.value),
  logIn
};

SignInPage.propTypes = {
  userData: PropTypes.shape(propTypesShapes.USER_DATA).isRequired,
  loginChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
