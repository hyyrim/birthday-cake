import React, { useState } from 'react';
import styles from './BirthdayCard.module.css';
import Cake from './Cake';
import Candles from './Candles';
import BirthdayText from './BirthdayText';
import ThemeSelector, { type Theme } from './ThemeSelector';
import ConfettiButton from './ConfettiButton';
import ShareButton from './ShareButton';

interface BirthdayCardProps {
  name: string;
  message: string;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ name, message }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('chocolate');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ThemeSelector
          currentTheme={currentTheme}
          onThemeChange={setCurrentTheme}
        />
        <ShareButton />
      </div>
      <div className={styles.content}>
        <Cake theme={currentTheme} />
        <Candles theme={currentTheme} />
        <BirthdayText name={name} message={message} />
      </div>
      <ConfettiButton />
    </div>
  );
};

export default BirthdayCard; 