import React from 'react';
import styles from './BirthdayText.module.css';

interface BirthdayTextProps {
  name?: string;
  message?: string;
}

const BirthdayText: React.FC<BirthdayTextProps> = ({ 
  name = "Jonas", 
  message = "happy birthday!" 
}) => {
  return (
    <div className={styles.text}>
      <h1>{message}</h1>
      <p>{name}</p>
    </div>
  );
};

export default BirthdayText; 