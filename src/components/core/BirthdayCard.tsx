import React, { useState, useEffect } from 'react';
import styles from './BirthdayCard.module.css';
import Cake from '../features/Cake';
import Candles from '../features/Candles';
import BirthdayText from '../features/BirthdayText';
import ThemeSelector, { type Theme } from '../ui/ThemeSelector';
import ConfettiButton from '../ui/ConfettiButton';
import ButtonGroup from '../ui/ButtonGroup';
import EditMode from '../ui/EditMode';
import Toast from '../ui/Toast';
import { parseURLData, updateURL } from '../../utils/urlEncoder';

interface BirthdayCardProps {
  name: string;
  message: string;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({
  name: defaultName,
  message: defaultMessage,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('chocolate');
  const [name, setName] = useState(defaultName);
  const [message, setMessage] = useState(defaultMessage);
  const [isEditMode, setIsEditMode] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // URL 파라미터를 기준으로 초기값 설정
  useEffect(() => {
    const urlData = parseURLData();

    if (urlData) {
      setName(urlData.name);
      setMessage(urlData.message);
      setCurrentTheme(urlData.theme);
    } else {
      // URL에 데이터가 없으면 기본값 사용
      setName(defaultName);
      setMessage(defaultMessage);
      setCurrentTheme('chocolate');
    }
  }, [defaultName, defaultMessage]);

  const handleToggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
    // URL 파라미터 즉시 업데이트 (Base64 방식)
    updateURL({
      name: newName,
      message,
      theme: currentTheme,
    });
  };

  const handleMessageChange = (newMessage: string) => {
    setMessage(newMessage);
    // URL 파라미터 즉시 업데이트 (Base64 방식)
    updateURL({
      name,
      message: newMessage,
      theme: currentTheme,
    });
  };

  const handleThemeChange = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
    // URL 파라미터 즉시 업데이트 (Base64 방식)
    updateURL({
      name,
      message,
      theme: newTheme,
    });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const hideToast = () => {
    setIsToastVisible(false);
  };

  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast('URL copied to clipboard!');
      setTimeout(() => {
        hideToast();
      }, 2000);
    } catch (err) {
      console.error('Link copy failed:', err);
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      showToast('URL copied to clipboard!');
      setTimeout(() => {
        hideToast();
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ThemeSelector
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
        />
        <ButtonGroup
          onEditClick={handleToggleEditMode}
          onShareClick={handleShareClick}
        />
      </div>
      <div className={styles.content}>
        <Cake theme={currentTheme} />
        <Candles theme={currentTheme} />
        <BirthdayText name={name} message={message} />
      </div>
      <ConfettiButton />
      <EditMode
        isEditMode={isEditMode}
        onToggleEditMode={handleToggleEditMode}
        name={name}
        message={message}
        onNameChange={handleNameChange}
        onMessageChange={handleMessageChange}
      />
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={hideToast}
        type='success'
      />
    </div>
  );
};

export default BirthdayCard;
