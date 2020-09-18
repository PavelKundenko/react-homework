import React from "react";
import { connect } from 'react-redux';

import {NavLink} from "react-router-dom";

import { logOut } from "../../redux/userAccounts/userAccount.actions";
import {isLoggedSelector, userDataSelector} from "../../redux/userAccounts/userAccount.selectors";

import styles from './Header.module.scss';
import CustomButton from "../../components/CustomButton/CustomButton";



const Header = ({ userData, isLogged, logOut }) => {

  const logOutHandler = () => {
    localStorage.removeItem('currentUser');
    logOut();
  };

  return (
    <header className={styles.Header}>
      {
        isLogged ?
          (<NavLink className={styles.HomeLink} to='/home'>Home</NavLink>)
          :
          null
      }
      <h1 className={styles.HeaderTitle}>Movies</h1>
      {
        isLogged ?
        (
          <div className={styles.UserContainer}>
            <p>User: {userData.login} </p>
            <CustomButton value='Log out' clickHandler={logOutHandler} inverted={true}/>
          </div>
        )
        :
        null
      }

    </header>
  );
};

const mapStateToProps = (state) => ({
  userData: userDataSelector(state),
  isLogged: isLoggedSelector(state)
});

const mapDispatchToProps = {
  logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
