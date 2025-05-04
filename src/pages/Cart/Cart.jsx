import React, { useState, useEffect } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import styles from './Cart.module.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const books = JSON.parse(localStorage.getItem('books'));
    const updatedBooks = books.map(book =>
      book.id === id ? { ...book, quantity: book.quantity + 1 } : book
    );
    localStorage.setItem('books', JSON.stringify(updatedBooks));

    showNotification('Книга удалена из корзины', 'error');
  };

  const checkout = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    showNotification('Заказ оформлен!', 'success');
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
    <div className={styles.cartPage}>
      <h2 className={styles.pageTitle}>Корзина</h2>

      {cartItems.length === 0 ? (
        <p className={styles.emptyCartMessage}>Корзина пуста</p>
      ) : (
        <div className={styles.cartList}>
          {cartItems.map(book => (
            <div key={book.id} className={styles.cartItem}>
              <BookCard book={book} isInCart={true} onRemove={() => removeFromCart(book.id)} />
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <button className={styles.checkoutBtn} onClick={checkout}>
          Оформить заказ
        </button>
      )}
    </div>
  );
};

export default Cart;