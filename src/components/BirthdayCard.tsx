import React from 'react';
import Cake from './Cake';
import Candles from './Candles';
import BirthdayText from './BirthdayText';
import styles from './BirthdayCard.module.css';

interface BirthdayCardProps {
  name?: string;
  message?: string;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ 
  name = "", 
  message = "happy birthday!" 
}) => {
  return (
    <div className={styles.container}>
      <Candles />
      <Cake />
      <BirthdayText name={name} message={message} />
    </div>
  );
};

export default BirthdayCard; 