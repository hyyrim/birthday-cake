import React, { useState } from 'react';
import styles from './BirthdayCard.module.css';
import Cake from './Cake';
import Candles from './Candles';
import BirthdayText from './BirthdayText';
import ThemeSelector, { type Theme } from './ThemeSelector';

interface BirthdayCardProps {
  name: string;
  message: string;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ name, message }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('chocolate');

  return (
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
  );
};

export default BirthdayCard; 