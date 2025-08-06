import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import styles from './ConfettiButton.module.css';
import tadaSound from '../../assets/tada-fanfare.mp3';

const ConfettiButton: React.FC = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleConfettiClick = () => {
    if (!isConfettiActive) {
      setIsConfettiActive(true);

      // 오디오 재생
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // 처음부터 재생
        audioRef.current.volume = 0.8; // 음량 80%
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err);
        });
      }

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
          '#ff9f43',
        ],
      });

      // 3초 후 버튼 다시 활성화
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 1000);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={tadaSound} preload='auto' />
      <button
        className={`${styles.confettiButton} ${isConfettiActive ? styles.active : ''}`}
        onClick={handleConfettiClick}
        disabled={isConfettiActive}
      >
        {isConfettiActive ? '🎊 Celebrating...' : '🎉 Celebrate!'}
      </button>
    </>
  );
};

export default ConfettiButton;
