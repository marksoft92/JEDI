import React, { Component } from 'react';
import styles from './Header.scss';
const Header = () => {
  
    return (
      <header className={styles.component}>
        <i className="fas fa-jedi"></i>
        <h1 className={styles.h1}>10 most polluted cities in those countries </h1>
      </header>
      
    );
}

export default Header;