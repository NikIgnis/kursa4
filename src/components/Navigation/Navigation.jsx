import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/books">Книги</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/cart">🛒 Корзина</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;