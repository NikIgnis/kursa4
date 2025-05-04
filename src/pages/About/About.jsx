import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <h2 className={styles.title}>О нас</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            CoreAtCow — это современный книжный магазин, предлагающий широкий выбор литературы
            для всех возрастов и интересов. Мы стремимся сделать чтение доступным и приятным
            для каждого.
          </p>
          <p>
            Наша миссия — распространять знания и вдохновение через книги. Мы тщательно
            отбираем каждое издание, чтобы предложить нашим клиентам только лучшее.
          </p>
          <p>
            Основанный в 2020 году, CoreAtCow быстро стал одним из ведущих онлайн-магазинов
            книг благодаря нашему вниманию к качеству и клиентскому сервису.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <img src="https://images.unsplash.com/photo-1589998059171-988d887df646" alt="Bookstore" />
        </div>
      </div>
    </div>
  );
};

export default About;