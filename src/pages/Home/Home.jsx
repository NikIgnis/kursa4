import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Добро пожаловать в CoreAtCow</h2>
          <p>Откройте для себя мир удивительных книг</p>
          <Link to="/books">
            <button className={styles.ctaButton}>Начать покупки</button>
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <i className="fas fa-shipping-fast"></i>
          <h3>Быстрая доставка</h3>
          <p>Доставка по всему миру за 3-5 дней</p>
        </div>
        <div className={styles.feature}>
          <i className="fas fa-book-open"></i>
          <h3>Широкий выбор</h3>
          <p>Более 10,000 книг различных жанров</p>
        </div>
        <div className={styles.feature}>
          <i className="fas fa-headset"></i>
          <h3>Поддержка 24/7</h3>
          <p>Наша команда всегда готова помочь</p>
        </div>
      </section>
    </div>
  );
};

export default Home;