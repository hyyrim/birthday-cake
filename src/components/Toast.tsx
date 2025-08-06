import React, { useEffect } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: 'success' | 'error' | 'info';
}

const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onClose,
  type = 'success',
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.toast} ${styles[type]} ${styles.show}`}>
      <div className={styles.content}>
        {type === 'success' && <span className={styles.icon}>✓</span>}
        {type === 'error' && <span className={styles.icon}>✕</span>}
        {type === 'info' && <span className={styles.icon}>ℹ</span>}
        <span className={styles.message}>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
