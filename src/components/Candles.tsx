import React from 'react';
import styles from './Candles.module.css';
import type { Theme } from './ThemeSelector';

interface CandlesProps {
  theme: Theme;
}

const Candles: React.FC<CandlesProps> = ({ theme }) => {
  return (
    <div key={theme} className={styles.velas}>
      <div className={styles.fuego}></div>
      <div className={styles.fuego}></div>
      <div className={styles.fuego}></div>
      <div className={styles.fuego}></div>
      <div className={styles.fuego}></div>
    </div>
  );
};

export default Candles;
