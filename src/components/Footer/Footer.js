import React, { Component } from 'react';
import styles from './Footer.scss';
const Footer = () => {
  
    return (
      <footer className={styles.component}>
        <i className="fas fa-jedi"></i>
        <h1 className={styles.h1}>‘All rights reserved... or not.’ </h1>
      </footer>
      
    );
}

export default Footer;