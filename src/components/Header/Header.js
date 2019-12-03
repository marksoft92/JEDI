import React, { Component } from 'react';
import styles from './Header.scss';
import { NavLink, Link } from 'react-router-dom';
const Header = () => {

  return (
    <header className={styles.component}>
      <div className={styles.wrapper}>
        <Link to='/' className={styles.logo}>
          <i className="fas fa-jedi"></i>
        </Link>
        <nav>
          <NavLink exact to='/' activeClassName='active'>Home</NavLink>
          <NavLink exact to='/status' activeClassName='active'>Status</NavLink>

        </nav>
      </div>
    </header>

  );
}

export default Header;