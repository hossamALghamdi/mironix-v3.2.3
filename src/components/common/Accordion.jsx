'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ 
  title, 
  children, 
  defaultOpen = false,
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border border-gray-700 rounded-lg mb-4 ${className}`}>
      <button
        className="w-full flex justify-between items-center p-4 text-left text-white font-medium focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round" strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-700 text-white">
          {children}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
  className: PropTypes.string
};

export default Accordion;