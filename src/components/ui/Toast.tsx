import React, { useEffect, useState } from 'react';
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
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsHiding(false);
      const timer = setTimeout(() => {
        setIsHiding(true);
        setTimeout(() => {
          onClose();
        }, 300);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${isHiding ? styles.hide : styles.show}`}
    >
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
