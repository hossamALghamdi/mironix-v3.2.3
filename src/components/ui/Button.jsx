'use client';

import React from 'react';
import PropTypes from 'prop-types';
import '@/styles/animated-gradient.css';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded transition-all duration-300 focus:outline-none relative overflow-hidden';
  
  const variants = {
    primary: 'animated-gradient-bg text-white opacity-55 hover:opacity-100 active:scale-95 active:shadow-inner hover:scale-105 hover:shadow-lg',
    secondary: 'bg-gray-200 text-gray-800 opacity-75 hover:opacity-100 hover:bg-gray-300 active:scale-95 active:shadow-inner hover:scale-105 hover:shadow-lg disabled:bg-gray-100',
    outline: 'border border-gray-300 text-gray-700 opacity-75 hover:opacity-100 hover:bg-gray-50 active:scale-95 active:shadow-inner hover:scale-105 hover:shadow-lg disabled:border-gray-200 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'cursor-not-allowed' : ''} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;