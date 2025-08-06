import React, { useState, useEffect } from 'react';
import styles from './EditMode.module.css';

interface EditModeProps {
  isEditMode: boolean;
  onToggleEditMode: () => void;
  name: string;
  message: string;
  onNameChange: (name: string) => void;
  onMessageChange: (message: string) => void;
}

const EditMode: React.FC<EditModeProps> = ({
  isEditMode,
  onToggleEditMode,
  name,
  message,
  onNameChange,
  onMessageChange,
}) => {
  const [tempName, setTempName] = useState(name);
  const [tempMessage, setTempMessage] = useState(message);

  // 편집 모드가 열릴 때마다 현재 name, message 값으로 초기화
  useEffect(() => {
    if (isEditMode) {
      setTempName(name);
      setTempMessage(message);
    }
  }, [isEditMode, name, message]);

  const handleSave = () => {
    // 저장 시 URL 업데이트
    onNameChange(tempName);
    onMessageChange(tempMessage);
    onToggleEditMode();
  };

  const handleCancel = () => {
    // 원래 값으로 복원
    setTempName(name);
    setTempMessage(message);
    onToggleEditMode();
  };

  if (!isEditMode) {
    return null;
  }

  return (
    <div className={styles.editOverlay}>
      <div className={styles.editModal}>
        <h3 className={styles.editTitle}>Edit Birthday Message</h3>

        <div className={styles.inputGroup}>
          <label htmlFor='name' className={styles.label}>
            Name
          </label>
          <input
            id='name'
            type='text'
            value={tempName}
            onChange={e => setTempName(e.target.value)}
            className={styles.input}
            placeholder="Enter the birthday person's name"
            maxLength={20}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor='message' className={styles.label}>
            Message
          </label>
          <textarea
            id='message'
            value={tempMessage}
            onChange={e => setTempMessage(e.target.value)}
            className={styles.textarea}
            placeholder='Enter your birthday message'
            maxLength={100}
            rows={3}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMode;
