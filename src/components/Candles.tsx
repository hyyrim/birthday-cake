import React from 'react';
import styles from './Candles.module.css';

const Candles: React.FC = () => {
  return (
    <div className={styles.velas}>
      <div className={styles.fuego}></div>
      <div className={styles.fuego}></div>
      <div className={styles.fuego}></div>
      <div className={styles.fuego}></div>
      <div className={styles.fuego}></div>
    </div>
  );
};

export default Candles; 