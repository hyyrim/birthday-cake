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
  const [isCopied, setIsCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // URL 파라미터를 기준으로 초기값 설정
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlName = urlParams.get('name');
    const urlMessage = urlParams.get('message');
    const urlTheme = urlParams.get('theme') as Theme;

    // URL에 값이 있으면 사용, 없으면 기본값 사용
    const finalName = urlName ? decodeURIComponent(urlName) : defaultName;
    const finalMessage = urlMessage
      ? decodeURIComponent(urlMessage)
      : defaultMessage;
    const finalTheme =
      urlTheme && ['chocolate', 'cream', 'blueberry'].includes(urlTheme)
        ? urlTheme
        : 'chocolate';

    setName(finalName);
    setMessage(finalMessage);
    setCurrentTheme(finalTheme);
  }, [defaultName, defaultMessage]);

  const handleToggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
    // URL 파라미터 즉시 업데이트
    const url = new URL(window.location.href);
    url.searchParams.set('name', encodeURIComponent(newName));
    window.history.replaceState({}, '', url.toString());
  };

  const handleMessageChange = (newMessage: string) => {
    setMessage(newMessage);
    // URL 파라미터 즉시 업데이트
    const url = new URL(window.location.href);
    url.searchParams.set('message', encodeURIComponent(newMessage));
    window.history.replaceState({}, '', url.toString());
  };

  const handleThemeChange = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
    // URL 파라미터 즉시 업데이트
    const url = new URL(window.location.href);
    url.searchParams.set('theme', newTheme);
    window.history.replaceState({}, '', url.toString());
  };

  const updateURLParams = (newName: string, newMessage: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('name', encodeURIComponent(newName));
    url.searchParams.set('message', encodeURIComponent(newMessage));
    window.history.replaceState({}, '', url.toString());
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
      setIsCopied(true);
      showToast('URL copied to clipboard!');
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Link copy failed:', err);
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      setIsCopied(true);
      showToast('URL copied to clipboard!');
      setTimeout(() => {
        setIsCopied(false);
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
          isCopied={isCopied}
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
