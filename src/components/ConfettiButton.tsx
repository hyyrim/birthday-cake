import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import styles from './ConfettiButton.module.css';

const ConfettiButton: React.FC = () => {

  const handleConfettiClick = () => {

      // canvas-confetti로 컨페티 실행
      confetti({
        particleCount: 300,
        spread: 70,
        origin: { y: 0.6 },
        colors: [
          '#ff6b6b',
          '#4ecdc4',
          '#45b7d1',
          '#96ceb4',
          '#feca57',
          '#ff9ff3',
          '#54a0ff',
          '#5f27cd',
          '#00d2d3',
          '#ff9f43'
        ]
      });

    
  };

  return (
    <button 
      className={`${styles.confettiButton}`} 
      onClick={handleConfettiClick}
      
    >
      congrats! 🥳
    </button>
  );
};

export default ConfettiButton; 