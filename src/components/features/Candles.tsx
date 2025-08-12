import React, { useEffect, useRef, useState } from 'react';
import styles from './Candles.module.css';
import type { Theme } from '../ui/ThemeSelector';

interface CandlesProps {
  theme: Theme;
}

const CANDLES_INTRO_END_MS = 6750; // 드롭 5.8s + 0.9s(드롭) 직후

const Candles: React.FC<CandlesProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [introDone, setIntroDone] = useState(false);
  const prevThemeRef = useRef<Theme | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setIntroDone(true),
      CANDLES_INTRO_END_MS
    );
    return () => window.clearTimeout(timer);
  }, []);

  // 테마가 실제로 변경되었을 때만 nudge 실행 (introDone 전환 시에는 실행 안 함)
  useEffect(() => {
    const prevTheme = prevThemeRef.current;
    prevThemeRef.current = theme;
    if (!introDone) return;
    if (prevTheme === null) return; // 초기 설정 시 실행 안 함
    if (prevTheme === theme) return; // 동일 테마면 실행 안 함

    const el = containerRef.current;
    if (!el) return;

    el.classList.add(styles.nudge);
    const onEnd = () => {
      el.classList.remove(styles.nudge);
      el.removeEventListener('animationend', onEnd);
    };
    el.addEventListener('animationend', onEnd);

    return () => {
      el.removeEventListener('animationend', onEnd);
    };
  }, [theme, introDone]);

  return (
    <div className={styles.wrap}>
      <div
        ref={containerRef}
        className={`${styles.velas} ${!introDone ? styles.intro : ''}`}
      >
        <div className={styles.fuego}></div>
        <div className={styles.fuego}></div>
        <div className={styles.fuego}></div>
        <div className={styles.fuego}></div>
        <div className={styles.fuego}></div>
      </div>
    </div>
  );
};

export default Candles;
