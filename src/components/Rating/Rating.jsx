import React from 'react';
import styles from './Rating.module.css';

const Rating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`${styles.star} ${i <= value ? styles.filled : ''}`}>
        {i <= value ? '★' : '☆'}
      </span>
    );
  }

  return <div className={styles.rating}>{stars}</div>;
};

export default Rating;