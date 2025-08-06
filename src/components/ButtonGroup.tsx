import React, { useState } from 'react';
import { Menu, Edit, Share } from 'lucide-react';
import styles from './ButtonGroup.module.css';

interface ButtonGroupProps {
  onEditClick: () => void;
  onShareClick: () => void;
  isCopied: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onEditClick,
  onShareClick,
  isCopied,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEditClick = () => {
    onEditClick();
    setIsMenuOpen(false);
  };

  const handleShareClick = () => {
    onShareClick();
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.buttonGroup}>
      <button
        className={`${styles.hamburgerButton} ${isMenuOpen ? styles.active : ''}`}
        onClick={handleMenuToggle}
      >
        <Menu size={20} />
      </button>
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <button className={styles.menuItem} onClick={handleEditClick}>
            <Edit size={16} />
            Edit
          </button>
          <button className={styles.menuItem} onClick={handleShareClick}>
            <Share size={16} />
            Share
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonGroup;
