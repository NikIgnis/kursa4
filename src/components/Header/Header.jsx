import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="BookStore Logo" className={styles.logo} />
          <h1>CoreAtCow</h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;