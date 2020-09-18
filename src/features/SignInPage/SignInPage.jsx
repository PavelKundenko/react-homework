import React, {useState} from "react";

import { connect } from 'react-redux';

import styles from './SignInPage.module.scss';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import {Link} from "react-router-dom";
import {userDataSelector} from "../../redux/userAccounts/userAccount.selectors";
import {logIn, loginChanged, passwordChanged} from "../../redux/userAccounts/userAccount.actions";

const SignInPage = ({ history, loginChanged, passwordChanged, loggedIn, userData }) => {
  const [errors, updateErrors] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    updateErrors(() => []);

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const currentUser = users.find(user => user.login === userData.login);

    if (!currentUser) {
     updateErrors(() => ['There is no registered user with this login. Register please. ']);
    } else if (currentUser.password !== userData.password) {
      updateErrors(() => ['Incorrect password. '])
    } else {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));

      loggedIn();

      history.push('/home');
    }
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <form className={`${styles.Form} col-md-6`}>
          <h2 className={styles.FormTitle}>Please log in</h2>
          <div className={styles.FormControl}>
            <CustomInput
              type='text'
              placeholder='Enter login'
              required={true}
              changeHandler={loginChanged}
            />
          </div>
          <div className={styles.FormControl}>
            <CustomInput
              type='password'
              placeholder='Enter password'
              required={true}
              changeHandler={passwordChanged}
            />
          </div>
          <CustomButton
            type='submit'
            value='Sign In'
            clickHandler={submitHandler}
          />
          <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
          <p className={styles.ErrorContainer}>
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
  loggedIn: logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
