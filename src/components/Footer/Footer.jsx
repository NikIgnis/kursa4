import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2025 CoreAtCow. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;