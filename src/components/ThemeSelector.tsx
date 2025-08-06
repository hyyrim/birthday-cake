import React from 'react';
import styles from './ThemeSelector.module.css';

export type Theme = 'chocolate' | 'cream' | 'blueberry';

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  const themes = [
    { id: 'chocolate', name: 'chocolate', color: '#643925' },
    { id: 'cream', name: 'cream', color: '#FFF8DC' },
    { id: 'blueberry', name: 'blueberry', color: '#8E7A9B' },
  ] as const;

  return (
    <div className={styles.container}>
      <div className={styles.themeButtons}>
        {themes.map(theme => (
          <button
            key={theme.id}
            className={`${styles.themeButton} ${
              currentTheme === theme.id ? styles.active : ''
            }`}
            onClick={() => onThemeChange(theme.id)}
            style={
              {
                '--theme-color': theme.color,
              } as React.CSSProperties
            }
          >
            <div className={styles.colorIndicator} />
            <span className={styles.themeName}>{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
