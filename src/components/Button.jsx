import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', disabled = false, onClick, className = '' }) => {
  return (
    <button 
      className={`popx-btn popx-btn-${variant} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
