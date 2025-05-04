import React, { useEffect, useRef } from 'react';
import styles from './Notification.module.css';

const Notification = ({ message, type = 'success' }) => {
  const notificationRef = useRef(null);

  useEffect(() => {
    if (!notificationRef.current) return;

    notificationRef.current.style.opacity = '1';

    const timeoutId = setTimeout(() => {
      notificationRef.current.style.opacity = '0';
      setTimeout(() => {
        notificationRef.current.remove();
      }, 300);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [message]);

  return (
    <div
      ref={notificationRef}
      className={`${styles.notification} ${styles[type]}`}
      style={{ opacity: 0 }}
    >
      {message}
    </div>
  );
};

export default Notification;