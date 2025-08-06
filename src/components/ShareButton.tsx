import React, { useState } from 'react';
import styles from './ShareButton.module.css';

const ShareButton: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleShareClick = async () => {
    try {
      // 현재 URL 복사
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      
      // 2초 후 복사 완료 메시지 제거
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('링크 복사 실패:', err);
      // 폴백: 구형 브라우저 지원
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <button 
      className={`${styles.shareButton} ${isCopied ? styles.copied : ''}`} 
      onClick={handleShareClick}
    >
      {isCopied ? '✅ copied!' : '📤 share'}
    </button>
  );
};

export default ShareButton; 