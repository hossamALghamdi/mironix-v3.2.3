'use client';

import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={name} 
          className="block text-white text-sm font-medium mb-2"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`w-full px-4 py-2 bg-[#0c1225] border ${error ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f5b314] transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default InputField;