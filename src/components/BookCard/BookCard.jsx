import React from 'react';
import Rating from '../Rating/Rating';
import Notification from '../Notification/Notification';
import styles from './BookCard.module.css';

const BookCard = ({ book, isInCart = false, onRemove }) => {
  const handleAddToCart = () => {
    if (book.quantity <= 0) {
      showNotification('Нет доступных экземпляров', 'error');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (!cart.some(item => item.id === book.id)) {
      cart.push(book);
      localStorage.setItem('cart', JSON.stringify(cart));

      const books = JSON.parse(localStorage.getItem('books'));
      const updatedBooks = books.map(b =>
        b.id === book.id ? { ...b, quantity: b.quantity - 1 } : b
      );
      localStorage.setItem('books', JSON.stringify(updatedBooks));

      showNotification('Книга добавлена в корзину', 'success');
    }
  };

  const showNotification = (message, type) => {
    const notificationEl = document.createElement('div');
    notificationEl.className = `${styles.notification} ${styles[type]}`;
    notificationEl.textContent = message;
  
    const notificationsContainer = document.getElementById('notifications');
    if (!notificationsContainer) {
      console.error('Контейнер для уведомлений отсутствует!');
      return;
    }
  
    notificationsContainer.appendChild(notificationEl);
  
    setTimeout(() => {
      notificationEl.style.opacity = '0';
    }, 2000);
  
    setTimeout(() => {
      notificationEl.remove();
    }, 2300);
  };

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookCover}>
        <img src={book.cover} alt={book.title} />
      </div>
      <div className={styles.bookInfo}>
        <h3>{book.title}</h3>
        <p className={styles.author}>{book.author}</p>
        <p className={styles.genre}><strong>Жанр:</strong> {book.genre}</p>
        <p className={styles.description}>{book.description}</p>
        <Rating value={book.rating} />
        <p className={styles.price}>{book.price} ₽</p>
        {isInCart ? (
          <button className={styles.removeFromCart} onClick={onRemove}>Удалить из корзины</button>
        ) : (
          <button className={styles.addToCart} onClick={handleAddToCart}>В корзину</button>
        )}
      </div>
    </div>
  );
};

export default BookCard;