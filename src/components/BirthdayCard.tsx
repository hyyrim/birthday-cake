import React, { useState } from 'react';
import styles from './BirthdayCard.module.css';
import Cake from './Cake';
import Candles from './Candles';
import BirthdayText from './BirthdayText';
import ThemeSelector, { type Theme } from './ThemeSelector';
import confetti from 'canvas-confetti';

interface BirthdayCardProps {
  name: string;
  message: string;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ name, message }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('chocolate');

  const handleConfettiClick = () => {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }, // 터지는 위치 아래쪽 조정
      });
  };


  return (
    <>
      <div className={styles.container}>
        <ThemeSelector
          currentTheme={currentTheme}
          onThemeChange={setCurrentTheme}
        />
        <div className={styles.content}>
          <Cake theme={currentTheme} />
          <Candles theme={currentTheme} />
          <BirthdayText name={name} message={message} />
        </div>
      </div>
      <button 
        className={styles.confettiButton} 
        onClick={handleConfettiClick}
      >
        🥳
      </button>
    </>
  );
};

export default BirthdayCard; 